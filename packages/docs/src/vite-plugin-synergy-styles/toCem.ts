import type { Attribute, ClassMember, Package } from 'custom-elements-manifest/schema.d.ts';
import type { Structure, StyleClassMember, StyleModule, Tag } from './types.js';

/**
 * Get the supported types as an array
 * @param tag The tag to get the types for
 * @returns Array of types for the tag
 */
const getTypesAsArray = (tag: Tag): string[] => tag.type
  .split('|')
  .map(t => t.trim())
  .map(t => `'${tag.name}--${t}'`);

/**
 * The tag to get the type for
 * @param tag The tag to get the type for
 * @returns Type structure for the tag
 */
const getTypeForTag = (tag: Tag) => {
  const text = getTypesAsArray(tag).join(' | ');
  return {
    text,
  };
};

/**
 * Check if a tag is allowed to be included
 * @param tag The tag to check
 * @returns True if the tag is allowed to be included
 */
const tagIsAllowedToBeIncluded = (tag: Tag): boolean => tag.tag === 'variant';

/**
 * Convert a tag to an attribute
 * @param tag The tag to convert to an attribute
 * @returns attribute The created attribute
 */
const getAttributesForTag = (tag: Tag): Attribute | null => {
  // Skip if we don't have variants or if the tag is not dynamic
  if (!tagIsAllowedToBeIncluded(tag)) {
    return null;
  }

  // 1. If we do not have a variant, treat the tag as a boolean value
  if (!tag.type || tag.type.trim().length === 0) {
    return {
      default: 'false',
      description: tag.description,
      name: tag.name,
      type: {
        text: 'boolean',
      },
    };
  }

  // 2. Treat the value as a select
  return {
    default: getTypesAsArray(tag).at(0),
    description: tag.description,
    name: 'className',
    type: getTypeForTag(tag),
  };
};

/**
 * Get the attributes for a list of tags
 * @param tags The tags to get attributes for
 * @returns List of attributes for the tags
 */
const getAttributesForTags = (tags: Tag[]): Attribute[] => tags
  .map(getAttributesForTag)
  .filter(Boolean) as Attribute[];

/**
 * Get the members section of a tag
 * @param tag The tag to get the members for
 * @returns ClassMember or null if the tag is not allowed
 */
const getMembersForTag = (tag: Tag): StyleClassMember | null => {
  // Skip if we don't have variants or if the tag is not dynamic
  if (!tagIsAllowedToBeIncluded(tag)) {
    return null;
  }

  // 1. If we do not have a variant, treat the tag as a boolean value
  if (!tag.type || tag.type.trim().length === 0) {
    return {
      attribute: tag.name,
      default: 'false',
      description: tag.description,
      kind: 'field',
      name: tag.name,
      type: {
        text: 'boolean',
      },
    };
  }

  // 2. Treat the value as a select
  return {
    attribute: tag.name,
    default: getTypesAsArray(tag).at(0),
    description: tag.description,
    kind: 'field',
    name: 'className',
    type: getTypeForTag(tag),
  };
};

/**
 * Get the members for a list of tags
 * @param tags The tags to get members for
 * @returns List of members for the tags
 */
const getMembersForTags = (tags: Tag[]): ClassMember[] => tags
  .map(getMembersForTag)
  .filter(Boolean) as ClassMember[];

/**
 * Converts a list of tags to a schema module
 * @param tags The tags to convert
 * @returns module The schema module
 */
const tagsToSchemaModule = (tags: Tag[]): StyleModule => {
  const [tag] = tags;
  const attributes = getAttributesForTags(tags);
  const members = getMembersForTags(tags);

  const tagNameWithoutPrefix = tag.name.includes('-') ? tag.name.split('-').slice(1).join('-') : tag.name;

  return {
    declarations: [{
      attributes,
      customElement: true,
      kind: 'class',
      members,
      name: tag.name,
      slots: [{
        description: `Main content of ${tag.name}`,
        name: '',
      }],
      tagName: tag.name,
      tagNameWithoutPrefix,
    }],
    description: tag.description,
    kind: 'javascript-module',
    path: tag.fileName,
  };
};

/**
 * Takes a structure and converts it to a custom elements schema
 * @param structure The structure to use
 * @returns package The custom elements schema
 */
export const toCem = (structure: Structure[]): Package => {
  const modules = structure
    .filter(({ comments }) => comments.length > 0)
    .flatMap(({ comments }) => comments)
    .map(({ tags }) => tags)
    .map(tagsToSchemaModule);

  return {
    modules,
    readme: '',
    schemaVersion: '1.0.0',
  } as Package;
};
