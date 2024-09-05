// ---------------------------------------------------------------------
// 🔒 AUTOGENERATED @synergy-design-system/react wrappers for @synergy-design-system/components
// Please do not edit this file directly!
// It will get recreated when running pnpm build.
// ---------------------------------------------------------------------
import * as React from 'react';
import { createComponent } from '@lit/react';
import Component from '@synergy-design-system/components/components/combobox/combobox.component.js';

import { type EventName } from '@lit/react';
import type {
  SynAfterHideEvent, SynAfterShowEvent, SynBlurEvent, SynChangeEvent, SynClearEvent, SynErrorEvent, SynFocusEvent, SynHideEvent, SynInputEvent, SynInvalidEvent, SynShowEvent,
} from '@synergy-design-system/components';

const tagName = 'syn-combobox';
Component.define('syn-combobox');

/**
 * @summary Comboboxes allow you to choose items from a menu of predefined options.
 * @documentation https://synergy-design-system.github.io/?path=/docs/components-syn-combobox--docs
 * @status stable
 *
 * @dependency syn-icon
 * @dependency syn-popup
 *
 * @slot - The listbox options. Must be `<syn-option>` elements.
 *    You can use `<syn-optgroup>`'s to group items visually.
 * @slot label - The combobox's label. Alternatively, you can use the `label` attribute.
 * @slot prefix - Used to prepend a presentational icon or similar element to the combobox.
 * @slot suffix - Used to append a presentational icon or similar element to the combobox.
 * @slot clear-icon - An icon to use in lieu of the default clear icon.
 * @slot expand-icon - The icon to show when the control is expanded and collapsed.
 *    Rotates on open and close.
 * @slot help-text - Text that describes how to use the combobox.
 *    Alternatively, you can use the `help-text` attribute.
 *
 * @event syn-change - Emitted when the control's value changes.
 * @event syn-clear - Emitted when the control's value is cleared.
 * @event syn-input - Emitted when the control receives input.
 * @event syn-focus - Emitted when the control gains focus.
 * @event syn-blur - Emitted when the control loses focus.
 * @event syn-show - Emitted when the combobox's menu opens.
 * @event syn-after-show - Emitted after the combobox's menu opens and all animations are complete.
 * @event syn-hide - Emitted when the combobox's menu closes.
 * @event syn-after-hide - Emitted after the combobox's menu closes and all animations are complete.
 * @event syn-invalid - Emitted when the form control has been checked for validity
 *    and its constraints aren't satisfied.
 * @event syn-error - Emitted when the combobox menu fails to open.
 *
 * @csspart form-control - The form control that wraps the label, combobox, and help text.
 * @csspart form-control-label - The label's wrapper.
 * @csspart form-control-input - The combobox's wrapper.
 * @csspart form-control-help-text - The help text's wrapper.
 * @csspart combobox - The container the wraps the prefix, combobox, clear icon, and expand button.
 * @csspart prefix - The container that wraps the prefix slot.
 * @csspart suffix - The container that wraps the suffix slot.
 * @csspart display-input - The element that displays the selected option's label,
 *     an `<input>` element.
 * @csspart listbox - The listbox container where the options are slotted
 *   and the filtered options list exists.
 * @csspart filtered-listbox - The container that wraps the filtered options.
 * @csspart clear-button - The clear button.
 * @csspart expand-icon - The container that wraps the expand icon.
 *
 * @animation combobox.show - The animation to use when showing the combobox.
 * @animation combobox.hide - The animation to use when hiding the combobox.
 */
export const SynCombobox = createComponent({
  displayName: 'SynCombobox',
  elementClass: Component,
  events: {
    onSynChange: 'syn-change' as EventName<SynChangeEvent>,
    onSynClear: 'syn-clear' as EventName<SynClearEvent>,
    onSynInput: 'syn-input' as EventName<SynInputEvent>,
    onSynFocus: 'syn-focus' as EventName<SynFocusEvent>,
    onSynBlur: 'syn-blur' as EventName<SynBlurEvent>,
    onSynShow: 'syn-show' as EventName<SynShowEvent>,
    onSynAfterShow: 'syn-after-show' as EventName<SynAfterShowEvent>,
    onSynHide: 'syn-hide' as EventName<SynHideEvent>,
    onSynAfterHide: 'syn-after-hide' as EventName<SynAfterHideEvent>,
    onSynInvalid: 'syn-invalid' as EventName<SynInvalidEvent>,
    onSynError: 'syn-error' as EventName<SynErrorEvent>,
  },
  react: React,
  tagName,
});

export type { SynChangeEvent } from '@synergy-design-system/components';
export type { SynClearEvent } from '@synergy-design-system/components';
export type { SynInputEvent } from '@synergy-design-system/components';
export type { SynFocusEvent } from '@synergy-design-system/components';
export type { SynBlurEvent } from '@synergy-design-system/components';
export type { SynShowEvent } from '@synergy-design-system/components';
export type { SynAfterShowEvent } from '@synergy-design-system/components';
export type { SynHideEvent } from '@synergy-design-system/components';
export type { SynAfterHideEvent } from '@synergy-design-system/components';
export type { SynInvalidEvent } from '@synergy-design-system/components';
export type { SynErrorEvent } from '@synergy-design-system/components';
