import type { Declaration, Module } from 'custom-elements-manifest/schema.d.ts';

/**
 * Plugin configuration options
 */
export type Config = {
  /**
   * The endpoint to use for the middleware
   */
  endPoint: string;

  /**
   * The filename used when building storybook
   */
  outputFileName: string;

  /**
   * The source directory to obtain data from
   */
  srcDir: string;
};

export type StyleDeclaration = Declaration & {
  tagNameWithoutPrefix?: string;
};

export type StyleModule = Module & {
  declarations: StyleDeclaration[];
};

/**
 * The given tag in the structure
 */
export type Tag = {
  description: string;
  fileName: string;
  name: string;
  tag: string;
  type: string;
};

/**
 * A structure as parsed with the getStructure function
 */
export type Structure = {
  comments: {
    description: string;
    tags: Tag[];
  }[];
  module: string;
};
