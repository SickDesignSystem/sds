// ---------------------------------------------------------------------
// 🔒 AUTOGENERATED @synergy-design-system/react wrappers for @synergy-design-system/components
// Please do not edit this file directly!
// It will get recreated when running pnpm build.
// ---------------------------------------------------------------------
import * as React from 'react';
import { createComponent } from '@lit/react';
import Component from '@synergy-design-system/components/components/validate/validate.component.js';

const tagName = 'syn-validate';
Component.define('syn-validate');

/**
 * @summary Validate is a helper that may be used to wrap
 * synergy input fields and forms to provide validation message.
 *
 * @dependency syn-alert
 *
 * @slot - The input fields or form element to be validated.
 * Avoid slotting in more than one element, as subsequent ones will be ignored.
 *
 * @csspart base - The component's base wrapper.
 * @csspart input-wrapper - The container that wraps the input field.
 * @csspart alert - The container that wraps the alert.
 * @csspart alert-message - The container that wraps the alert message.
 */
export const SynValidate = createComponent({
  displayName: 'SynValidate',
  elementClass: Component,
  events: {

  },
  react: React,
  tagName,
});
