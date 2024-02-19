// ---------------------------------------------------------------------
// 🔒 AUTOGENERATED @synergy-design-system/react wrappers for @synergy-design-system/components
// Please do not edit this file directly!
// It will get recreated when running pnpm build.
// ---------------------------------------------------------------------
import * as React from 'react';
import { createComponent } from '@lit/react';
import Component from '@synergy-design-system/components/components/header/header.component.js';

const tagName = 'syn-header';
Component.define('syn-header');

/**
 * @summary The <syn-header /> element provides a generic application header
 * that can be used to add applications name, toolbar and primary navigation.
 *
 * @documentation https://synergy-design-system.github.io/?path=/docs/components-syn-header--docs
 * @status stable
 * @since 1.8.0
 *
 * @dependency syn-icon-button
 *
 * @slot - The label for the header. Will automatically be hidden on mobile.
 * @slot logo - The logo that should be displayed. Will fall back to the SICK logo if not applied.
 * @slot option-menu - Used to add various application toolbar icons.
 *                     Best used with `<syn-icon-button />` and `<syn-drop-down />`
 * @slot top-navigation - Used to add an optional horizontal navigation
 *
 * @csspart base - The component's base wrapper.
 * @csspart side-navigation-button - Can be used to apply styles to the side-navigation menu icon
 * @csspart logo - The wrapper where the application logo resides in
 * @csspart label - Wrapper of the application name label
 * @csspart option-menu - Item that wraps the optional application menu
 * @csspart top-navigation - Wrapper that holds the optional top navigation section
 */
export const SynHeader = createComponent({
  displayName: 'SynHeader',
  elementClass: Component,
  events: {

  },
  react: React,
  tagName,
});
