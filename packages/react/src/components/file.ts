// ---------------------------------------------------------------------
// 🔒 AUTOGENERATED @synergy-design-system/react wrappers for @synergy-design-system/components
// Please do not edit this file directly!
// It will get recreated when running pnpm build.
// ---------------------------------------------------------------------
import * as React from 'react';
import { createComponent } from '@lit/react';
import Component from '@synergy-design-system/components/components/file/file.component.js';

import { type EventName } from '@lit/react';
import type {
  SynBlurEvent, SynChangeEvent, SynErrorEvent, SynFocusEvent, SynInputEvent,
} from '@synergy-design-system/components';

const tagName = 'syn-file';
Component.define('syn-file');

/**
 * @summary File controls allow selecting an arbitrary number of files for uploading.
 * @status stable
 *
 * @dependency syn-button
 * @dependency syn-icon
 *
 * @slot label - The input's label. Alternatively, you can use the `label` attribute.
 * @slot help-text - Text that describes how to use the input.
 * Alternatively, you can use the `help-text` attribute.
 * @slot droparea-icon - Optional droparea icon to use instead of the default.
 * Works best with `<syn-icon>`.
 *
 * @event syn-blur - Emitted when the control loses focus.
 * @event syn-change - Emitted when an alteration to the control's value is committed by the user.
 * @event syn-error - Emitted when multiple files are selected via drag and drop, without
 * the `multiple` property being set.
 * @event syn-focus - Emitted when the control gains focus.
 * @event syn-input - Emitted when the control receives input.
 *
 * @csspart form-control - The form control that wraps the label, input, and help text.
 * @csspart form-control-label - The label's wrapper.
 * @csspart form-control-input - The input's wrapper.
 * @csspart form-control-help-text - The help text's wrapper.
 * @csspart input-wrapper - The wrapper around the button and placeholder.
 * @csspart input-button - The syn-button acting as a file input.
 * @csspart input-placeholder - The placeholder text for the file input.
 * @csspart droparea-wrapper - The element wrapping the drop zone.
 * @csspart droparea-background - The background of the drop zone.
 * @csspart droparea-icon - The container that wraps the icon for the drop zone.
 * @csspart droparea-text - The text for the drop zone.
 */
export const SynFile = createComponent({
  displayName: 'SynFile',
  elementClass: Component,
  events: {
    onSynBlur: 'syn-blur' as EventName<SynBlurEvent>,
    onSynChange: 'syn-change' as EventName<SynChangeEvent>,
    onSynError: 'syn-error' as EventName<SynErrorEvent>,
    onSynFocus: 'syn-focus' as EventName<SynFocusEvent>,
    onSynInput: 'syn-input' as EventName<SynInputEvent>,
  },
  react: React,
  tagName,
});

export type { SynBlurEvent } from '@synergy-design-system/components';
export type { SynChangeEvent } from '@synergy-design-system/components';
export type { SynErrorEvent } from '@synergy-design-system/components';
export type { SynFocusEvent } from '@synergy-design-system/components';
export type { SynInputEvent } from '@synergy-design-system/components';
