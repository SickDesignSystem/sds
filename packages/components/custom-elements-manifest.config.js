/* eslint-disable */
import * as path from 'path';
import { customElementVsCodePlugin } from 'custom-element-vs-code-integration';
import { decorator } from '@custom-elements-manifest/analyzer/src/utils/index.js';
import { hasPropertyDecorator, isAlsoAttribute } from '@custom-elements-manifest/analyzer/src/features/framework-plugins/lit/utils.js';
import { parse } from 'comment-parser';
import { pascalCase } from 'change-case';
import commandLineArgs from 'command-line-args';
import fs from 'fs';

const packageData = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
const { name, description, version, author, homepage, license } = packageData;

const { outdir } = commandLineArgs([
  { name: 'litelement', type: String },
  { name: 'analyze', defaultOption: true },
  { name: 'outdir', type: String }
], { partial: true })

function noDash(string) {
  return string.replace(/^\s?-/, '').trim();
}

function replace(string, terms) {
  terms.forEach(({ from, to }) => {
    string = string?.replace(from, to);
  });

  return string;
}

export default {
  globs: ['src/components/**/*.component.ts'],
  exclude: ['**/*.styles.ts', '**/*.test.ts'],
  plugins: [
    // Append package data
    {
      name: 'synergy-package-data',
      packageLinkPhase({ customElementsManifest }) {
        customElementsManifest.package = { name, description, version, author, homepage, license };
      }
    },

    // Infer tag names because we no longer use @customElement decorators.
    {
      name: 'synergy-infer-tag-names',
      analyzePhase({ ts, node, moduleDoc }) {
        switch (node.kind) {
          case ts.SyntaxKind.ClassDeclaration: {
            const className = node.name.getText();
            const classDoc = moduleDoc?.declarations?.find(declaration => declaration.name === className);

            const importPath = moduleDoc.path;

            // This is kind of a best guess at components. "thing.component.ts"
            if (!importPath.endsWith('.component.ts')) {
              return;
            }

            const tagNameWithoutPrefix = path.basename(importPath, '.component.ts');
            const tagName = 'syn-' + tagNameWithoutPrefix;

            classDoc.tagNameWithoutPrefix = tagNameWithoutPrefix;
            classDoc.tagName = tagName;

            // This used to be set to true by @customElement
            classDoc.customElement = true;
          }
        }
      }
    },

    // Parse custom jsDoc tags
    {
      name: 'synergy-custom-tags',
      analyzePhase({ ts, node, moduleDoc }) {
        switch (node.kind) {
          case ts.SyntaxKind.ClassDeclaration: {
            const className = node.name.getText();
            const classDoc = moduleDoc?.declarations?.find(declaration => declaration.name === className);
            const customTags = ['animation', 'dependency', 'documentation', 'since', 'status', 'title'];
            let customComments = '/**';

            node.jsDoc?.forEach(jsDoc => {
              jsDoc?.tags?.forEach(tag => {
                const tagName = tag.tagName.getText();

                if (customTags.includes(tagName)) {
                  customComments += `\n * @${tagName} ${tag.comment}`;
                }
              });
            });

            // This is what allows us to map JSDOC comments to ReactWrappers.
            classDoc['jsDoc'] = node.jsDoc?.map(jsDoc => jsDoc.getFullText()).join('\n');

            const parsed = parse(`${customComments}\n */`);
            parsed[0].tags?.forEach(t => {
              switch (t.tag) {
                // Animations
                case 'animation':
                  if (!Array.isArray(classDoc['animations'])) {
                    classDoc['animations'] = [];
                  }
                  classDoc['animations'].push({
                    name: t.name,
                    description: noDash(t.description)
                  });
                  break;

                // Dependencies
                case 'dependency':
                  if (!Array.isArray(classDoc['dependencies'])) {
                    classDoc['dependencies'] = [];
                  }
                  classDoc['dependencies'].push(t.name);
                  break;

                // Value-only metadata tags
                case 'documentation':
                case 'since':
                case 'status':
                case 'title':
                  classDoc[t.tag] = t.name;
                  break;

                // All other tags
                default:
                  if (!Array.isArray(classDoc[t.tag])) {
                    classDoc[t.tag] = [];
                  }

                  classDoc[t.tag].push({
                    name: t.name,
                    description: t.description,
                    type: t.type || undefined
                  });
              }
            });
          }
        }
      }
    },

    {
      name: 'synergy-react-event-names',
      analyzePhase({ ts, node, moduleDoc }) {
        switch (node.kind) {
          case ts.SyntaxKind.ClassDeclaration: {
            const className = node.name.getText();
            const classDoc = moduleDoc?.declarations?.find(declaration => declaration.name === className);

            if (classDoc?.events) {
              classDoc.events.forEach(event => {
                event.reactName = `on${pascalCase(event.name)}`;
                event.eventName = `${pascalCase(event.name)}Event`;
              });
            }
          }
        }
      }
    },

    // We can not find @property { attribute: false} properties in the custom-elements.json.
    // They appear in members only and can not be differentiated from other properties. So we add a "propertyOnly" flag to the corresponding members.
    {
      name: 'synergy-enrich-property-only-attributes',
      analyzePhase({ ts, node, moduleDoc }) {
        switch (node.kind) {
          case ts.SyntaxKind.ClassDeclaration: {
               node?.members?.forEach(member => {
              if (hasPropertyDecorator(member)) {
                  const propertyDecorator = member.modifiers.find(decorator('property'));
                  const propertyOptions = propertyDecorator?.expression?.arguments?.find(arg => ts.isObjectLiteralExpression(arg));
                  const isPropertyOnly = !isAlsoAttribute(propertyOptions);
                  if(isPropertyOnly){
                    const className = node.name.getText();
                    const classDoc = moduleDoc?.declarations?.find(declaration => declaration.name === className);

                    const field = classDoc.members.find(classMember => classMember.name === member.name.getText());
                    // add a propertyOnly field, so we can identify them for the wrapper creation
                    field.propertyOnly = true;
                  }
                }
            });
          }
        }
      }
    },

    {
      name: 'synergy-translate-module-paths',
      packageLinkPhase({ customElementsManifest }) {
        customElementsManifest?.modules?.forEach(mod => {
          //
          // CEM paths look like this:
          //
          //  src/components/button/button.ts
          //
          // But we want them to look like this:
          //
          //  components/button/button.js
          //
          const terms = [
            { from: /^src\//, to: '' }, // Strip the src/ prefix
            { from: /\.component.(t|j)sx?$/, to: '.js' } // Convert .ts to .js
          ];

          mod.path = replace(mod.path, terms);

          for (const ex of mod.exports ?? []) {
            ex.declaration.module = replace(ex.declaration.module, terms);
          }

          for (const dec of mod.declarations ?? []) {
            if (dec.kind === 'class') {
              for (const member of dec.members ?? []) {
                if (member.inheritedFrom) {
                  member.inheritedFrom.module = replace(member.inheritedFrom.module, terms);
                }
              }
            }
          }
        });
      }
    },

    // Since these changes from shoelace (https://github.com/shoelace-style/shoelace/pull/2255), where they removed the @property from "value" and changed the "defaultValue" and "value" handling internally
    // The custom-elements.json generation needs to be updated, so the framework wrappers are created correctly again and the properties table of storybook documentation is correct.
    {
      name: 'synergy-value-defaultValue-fix',
      packageLinkPhase({ customElementsManifest }){
        const selectModule = customElementsManifest?.modules?.find(mod =>  mod.path.endsWith('select.js')).declarations[0];
        const valueMember = selectModule.members.find(declaration => declaration.name === 'value');
        const defaultValueAttribute = selectModule.attributes.find(attribute => attribute.fieldName === 'defaultValue');
        
        // Create an attribute entry for "value" again, as it was before the changes
        const valueAttribue = Object.assign({}, defaultValueAttribute);
        valueAttribue.fieldName = valueMember.name;
        valueAttribue.name = valueMember.name;
        valueAttribue.description = valueMember.description;
        selectModule.attributes.push(valueAttribue);

        // Remove the defaultValue from attributes to have the same state as before the shoelace changes
        const defaultValueIndex = selectModule.attributes.indexOf(defaultValueAttribute);
        selectModule.attributes.splice(defaultValueIndex, 1);
      },
    },

    // Generate custom VS Code data
    customElementVsCodePlugin({
      outdir,
      cssFileName: null,
      referencesTemplate: (_, tag) => [
        {
          name: 'Documentation',
          url: `https://synergy.style/components/${tag.replace('syn-', '')}`
        }
      ]
    })
  ]
};
