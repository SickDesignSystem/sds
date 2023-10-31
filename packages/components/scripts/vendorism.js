/* eslint-disable no-console */
import fs from 'fs';
import { execSync } from 'child_process';
import commandLineArgs from 'command-line-args';
import { eject, setSource, setTarget } from 'vendorism';
import { optimizePathForWindows } from 'vendorism/src/scripts/helpers.js';
import { generateStorybookFile, updateVsCodeReadOnlyFiles } from './vendorism/index.js';
import customInput from './vendorism/custom/input.vendorism.js';

const components = [
  'input',
];

// List of events that we want to import.
// @todo: Automate this depending on components!
const events = [
  'sl-blur',
  'sl-focus',
  'sl-invalid',
  'sl-load',
  'sl-error',
  'sl-blur',
  'sl-change',
  'sl-clear',
  'sl-input',
].map(evt => `src/events/${evt}.ts`);

const otherIncludes = [
  'custom-elements-manifest.config.js',
  'web-test-runner.config.js',
  '*prettier*',
  'tsconfig.json',
  'tsconfig.prod.json',
  'src/declaration.d.ts',
  'src/shoelace-autoloader*',
  'src/translations/de.ts',
  ...events,
];

const libraryPrefix = 'syn';
const libraryName = 'synergy';
const shoelaceVersion = '2.10.0';

// Command line options
const optionDefinitions = [
  { alias: 's', name: 'setOnly', type: Boolean },
  { alias: 'g', name: 'getOnly', type: Boolean },
  { alias: 'e', name: 'eject', type: Boolean },
  { defaultOption: true, name: 'file', type: String },
];

const options = commandLineArgs(optionDefinitions);

const config = {
  source: {
    downloadConfig: { extract: true, strip: 1 },
    hooks: {
      after: 'echo ✅ Source setup complete.',
      before: 'echo ⌛️ Setting up source...',
    },
    path: './vendor',
    url: `https://github.com/shoelace-style/shoelace/archive/refs/tags/v${shoelaceVersion}.tar.gz`,
  },
  target: {
    hooks: {
      after: 'echo ✅ Target setup complete.',
      before: 'echo ⌛️ Setting up target...',
    },
    includes: [
      ...components.map((component) => `src/components/${component}/**`),
      ...otherIncludes,
    ],
    path: '.',
    // Changes targeted files -> otherIncludes
    transforms: [
      // Adjust the event map to use our own file names
      (path, content) => {
        const outputPath = path.startsWith('events/')
          ? path.replace('sl-', `${libraryPrefix}-`)
          : path;

        return {
          content,
          path: outputPath,
        };
      },
      // Add lint ignore information to all vendored data and remove lint-enables
      (path, content) => {
        const eslintEnableComment = '/* eslint-enable */';
        const eslintDisableComment = '/* eslint-disable */';
        const stylelintDisableComment = '/* stylelint-disable */';

        // Sometimes eslint is enabled explicitly in code.
        // This needs to be removed, otherwise the disable does not work.
        let nextContent = content.replaceAll(eslintEnableComment, '');

        // Shoelace vendor components use other style rules, so make sure to ignore them per default
        if (path.endsWith('.ts') || path.endsWith('.js')) {
          nextContent = `${eslintDisableComment}\n${nextContent}`;
        }

        // We do not want to lint shoelace styles
        // as they do not adhere to any standard.
        // We can`t just add the style-disable at the top of the file.
        // To make it work it needs to be in the "css" function
        nextContent = nextContent.replace('css`', `css\`\n\t${stylelintDisableComment}`);

        return {
          content: nextContent,
          path,
        };
      },
      // Remove Shoelace branding
      (path, content) => {
        const capitalizedPrefix = `${libraryPrefix.charAt(0).toUpperCase()}${libraryPrefix.slice(1)}`;
        const capitalizedLibraryName = `${libraryName.charAt(0).toUpperCase()}${libraryName.slice(1)}`;
        const lowerLibraryName = libraryName.toLowerCase();
        const libraryDesignName = `${lowerLibraryName}-design-system`;

        const regexPattern = new RegExp(`@${libraryDesignName}/(?!${lowerLibraryName}$)`, 'g');

        const replace = c => c
          .replace(/Sl(?=[A-Z])/g, capitalizedPrefix)
          .replace(/(?<![A-Za-z])sl-/g, `${libraryPrefix}-`)
          .replace(/shoelace-style/g, libraryDesignName)
          .replace(/Shoelace/g, capitalizedLibraryName)
          .replace(/shoelace/g, lowerLibraryName)
          .replace('__SHOELACE_VERSION__', '__PACKAGE_VERSION__')
          .replace(regexPattern, '@shoelace-style/');

        return {
          content: replace(content),
          path: replace(path),
        };
      },
      // Move stories into `temp` directory
      (path, content) => {
        if (path.includes('.stories.ts')) {
          const optimizedPath = optimizePathForWindows(path);
          const parts = optimizedPath.split('/');
          // Gets 'input.stories.ts'
          const fileName = parts[parts.length - 1];
          return {
            content,
            path: `./src/temp/${fileName}`,
          };
        }
        return {
          content,
          path,
        };
      },
      // allow unknown command line args in `custom-elements-manifest.config.js`
      // as otherwise commandLineArgs breaks when we start it from docs
      (path, content) => {
        if (path.includes('custom-elements-manifest.config.js')) {
          return {
            content: content.replace(`{ name: 'outdir', type: String }
]);`, `{ name: 'outdir', type: String }
], { partial: true })`),
            path,
          };
        }
        return {
          content,
          path,
        };
      },
      // add custom styles to the end of `${component}.styles.ts`
      (path, content) => {
        let newContent;
        components.forEach((component) => {
          if (path.includes(`${component}.styles.ts`)) {
            newContent = content
              .replace(
                // eslint-disable-next-line @typescript-eslint/quotes
                `import componentStyles from '../../styles/component.styles.js';`,
                `import componentStyles from '../../styles/component.styles.js';
import customStyles from './${component}.custom.styles.js';`,
              )
              .replace(
                '}\n`;',
                // eslint-disable-next-line @typescript-eslint/quotes
                `}\n\n  $\{customStyles}\n\`;\n`,
              );

            // create file if it doesn't exist
            const customStylesPath = path.replace(`${component}.styles.ts`, `${component}.custom.styles.ts`);
            if (!fs.existsSync(customStylesPath)) {
              fs.writeFileSync(customStylesPath, 'import { css } from \'lit\';\n\nexport default css`\n  /* Write custom CSS here */\n`;\n');
            }
          }
        });

        return {
          content: newContent,
          path,
        };
      },
      // speczialized customizations
      (path, content) => customInput(path, content),
    ],
  },
};

// If the eject option is specified, runs the eject functionality
if (options.eject) {
  const filePath = options.file;
  const optimizedPath = optimizePathForWindows(filePath);

  console.log('🚀 Ejecting file', optimizedPath);

  if (!optimizedPath) {
    console.error('❗ Please provide a file path for the eject operation.');
    process.exit(1);
  }

  await eject(config, filePath);
  await updateVsCodeReadOnlyFiles([optimizedPath], []);

  process.exit(0);
}

// Downloads Shoelace and sets up the source
if (!options.setOnly) {
  await setSource(config);
  // Don`t know exactly why, but this is needed for Windows.
  // Otherwise the last three files (tsconfig.(prod).json, web-test-runner.config.js)
  // from shoelace are missing after the download.
  await new Promise(res => { setTimeout(res, 100); });
}

// Check for the "getOnly" option and modify the content if necessary
if (!options.getOnly) {
  /**
   * Generate the storybook files for all relevant components
   * after shoelace is available so that they can be vendored
   */
  await Promise.all(components.map(async (component) => {
    const inputFilePath = `./vendor/docs/pages/components/${component}.md`;
    const outputFilePath = `./vendor/src/components/${component}/${component}.stories.ts`;
    await generateStorybookFile(inputFilePath, outputFilePath, component, libraryPrefix);
  }));

  // Move all files from '../docs/src/components' to './src/temp'
  await execSync('mv ../docs/stories/components ./src/temp');

  const { removedFiles, newFiles } = await setTarget(config);

  await updateVsCodeReadOnlyFiles(removedFiles, newFiles);

  // Move files back from './src/temp' to '../docs/src/components'
  await execSync('mv ./src/temp ../docs/stories/components');
}

process.exit();
