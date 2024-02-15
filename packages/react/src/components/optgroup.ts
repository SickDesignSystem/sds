// ---------------------------------------------------------------------
// 🔒 AUTOGENERATED @synergy-design-system/react wrappers for @synergy-design-system/components
// Please do not edit this file directly!
// It will get recreated when running pnpm build.
// ---------------------------------------------------------------------
import * as React from 'react';
import { createComponent } from '@lit/react';
import Component from '@synergy-design-system/components/components/optgroup/optgroup.component.js';

const tagName = 'syn-optgroup';
Component.define('syn-optgroup');

/**
 * @summary The <syn-optgroup> element creates a grouping for <syn-option>s within a <syn-select>.
 * @documentation https://synergy-design-system.github.io/?path=/docs/components-syn-optgroup--docs
 * @status stable
 * @since 1.3.0
 *
 * @dependency syn-divider
 *
 * @slot - The given options. Must be `<syn-option>` elements.
 * @slot prefix - A presentational prefix icon or similar element.
 * @slot label - The label for the optgroup
 * @slot suffix - A presentational suffix icon or similar element.
 *
 * @csspart base - The component's base wrapper.
 * @csspart label-container - The container that wraps prefix, label and base
 * @csspart divider - The divider that is displayed above the content
 * @csspart prefix - The container that wraps the prefix.
 * @csspart suffix - The container that wraps the suffix.
 * @csspart options - The container that wraps the <syn-option> elements.
 *
 * @cssproperty --display-divider - Display property of the divider. Defaults to "block"
 */
export const SynOptgroup = createComponent({
  displayName: 'SynOptgroup',
  elementClass: Component,
  events: {

  },
  react: React,
  tagName,
});
