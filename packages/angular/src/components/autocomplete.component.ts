// ---------------------------------------------------------------------
// 🔒 AUTOGENERATED @synergy-design-system/angular wrappers for @synergy-design-system/components
// Please do not edit this file directly!
// It will get recreated when running pnpm build.
// ---------------------------------------------------------------------
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  Output,
} from '@angular/core';
import type {
  SynAfterHideEvent, SynAfterShowEvent, SynAutocomplete, SynBlurEvent, SynChangeEvent, SynClearEvent, SynFocusEvent, SynHideEvent, SynInputEvent, SynInvalidEvent, SynShowEvent,
} from '@synergy-design-system/components';
import '@synergy-design-system/components/components/autocomplete/autocomplete.js';

/**
 * @summary Selects allow you to choose items from a menu of predefined options.
 * @documentation https://synergy.style/components/select
 * @status stable
 * @since 2.0
 *
 * @dependency syn-icon
 * @dependency syn-popup
 * @dependency syn-tag
 *
 * @slot - The listbox options. Must be `<syn-option>` elements. You can use `<syn-divider>` to group items visually.
 * @slot label - The input's label. Alternatively, you can use the `label` attribute.
 * @slot prefix - Used to prepend a presentational icon or similar element to the combobox.
 * @slot clear-icon - An icon to use in lieu of the default clear icon.
 * @slot help-text - Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.
 *
 * @event syn-change - Emitted when the control's value changes.
 * @event syn-clear - Emitted when the control's value is cleared.
 * @event syn-input - Emitted when the control receives input.
 * @event syn-focus - Emitted when the control gains focus.
 * @event syn-blur - Emitted when the control loses focus.
 * @event syn-show - Emitted when the select's menu opens.
 * @event syn-after-show - Emitted after the select's menu opens and all animations are complete.
 * @event syn-hide - Emitted when the select's menu closes.
 * @event syn-after-hide - Emitted after the select's menu closes and all animations are complete.
 * @event syn-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
 *
 * @csspart form-control - The form control that wraps the label, input, and help text.
 * @csspart form-control-label - The label's wrapper.
 * @csspart form-control-input - The select's wrapper.
 * @csspart form-control-help-text - The help text's wrapper.
 * @csspart combobox - The container the wraps the prefix, combobox, clear icon, and expand button.
 * @csspart prefix - The container that wraps the prefix slot.
 * @csspart display-input - The element that displays the selected option's label, an `<input>` element.
 * @csspart listbox - The listbox container where options are slotted.
 * @csspart tags - The container that houses option tags when `multiselect` is used.
 * @csspart tag - The individual tags that represent each multiselect option.
 * @csspart tag__base - The tag's base part.
 * @csspart tag__content - The tag's content part.
 * @csspart tag__remove-button - The tag's remove button.
 * @csspart tag__remove-button__base - The tag's remove button base part.
 * @csspart clear-button - The clear button.
 * @csspart expand-icon - The container that wraps the expand icon.
 */
@Component({
  selector: 'syn-autocomplete',
  standalone: true,
  template: '<ng-content></ng-content>',
})
export class SynAutocompleteComponent {
  public nativeElement: SynAutocomplete;

  private _ngZone: NgZone;

  constructor(e: ElementRef, ngZone: NgZone) {
    this.nativeElement = e.nativeElement;
    this._ngZone = ngZone;
    this.nativeElement.addEventListener('syn-change', (e: SynChangeEvent) => { this.synChangeEvent.emit(e); });
    this.nativeElement.addEventListener('syn-clear', (e: SynClearEvent) => { this.synClearEvent.emit(e); });
    this.nativeElement.addEventListener('syn-input', (e: SynInputEvent) => { this.synInputEvent.emit(e); });
    this.nativeElement.addEventListener('syn-focus', (e: SynFocusEvent) => { this.synFocusEvent.emit(e); });
    this.nativeElement.addEventListener('syn-blur', (e: SynBlurEvent) => { this.synBlurEvent.emit(e); });
    this.nativeElement.addEventListener('syn-show', (e: SynShowEvent) => { this.synShowEvent.emit(e); });
    this.nativeElement.addEventListener('syn-after-show', (e: SynAfterShowEvent) => { this.synAfterShowEvent.emit(e); });
    this.nativeElement.addEventListener('syn-hide', (e: SynHideEvent) => { this.synHideEvent.emit(e); });
    this.nativeElement.addEventListener('syn-after-hide', (e: SynAfterHideEvent) => { this.synAfterHideEvent.emit(e); });
    this.nativeElement.addEventListener('syn-invalid', (e: SynInvalidEvent) => { this.synInvalidEvent.emit(e); });
  }

  /**
* The name of the autosuggest, submitted as a name/value pair with form data.
 */
  @Input()
  set name(v: SynAutocomplete['name']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.name = v));
  }

  get name() {
    return this.nativeElement.name;
  }

  /**
* The current value of the select, submitted as a name/value pair with form data.
* When `multiple` is enabled, the
value attribute will be a space-delimited list of values based on the options selected, and the value property will
be an array.
* **For this reason, values must not contain spaces.**
 */
  @Input()
  set value(v: SynAutocomplete['value']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.value = v));
  }

  get value() {
    return this.nativeElement.value;
  }

  /**
* The select's size.
 */
  @Input()
  set size(v: SynAutocomplete['size']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.size = v));
  }

  get size() {
    return this.nativeElement.size;
  }

  /**
* Placeholder text to show as a hint when the select is empty.
 */
  @Input()
  set placeholder(v: SynAutocomplete['placeholder']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.placeholder = v));
  }

  get placeholder() {
    return this.nativeElement.placeholder;
  }

  /**
* Disables the select control.
 */
  @Input()
  set disabled(v: SynAutocomplete['disabled']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.disabled = v));
  }

  get disabled() {
    return this.nativeElement.disabled;
  }

  /**
* Adds a clear button when the select is not empty.
 */
  @Input()
  set clearable(v: SynAutocomplete['clearable']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.clearable = v));
  }

  get clearable() {
    return this.nativeElement.clearable;
  }

  /**
* Enable this option to prevent the listbox from being clipped when the component is placed inside a container with
`overflow: auto|scroll`.
* Hoisting uses a fixed positioning strategy that works in many, but not all, scenarios.
 */
  @Input()
  set hoist(v: SynAutocomplete['hoist']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.hoist = v));
  }

  get hoist() {
    return this.nativeElement.hoist;
  }

  /**
* The select's label.
* If you need to display HTML, use the `label` slot instead.
 */
  @Input()
  set label(v: SynAutocomplete['label']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.label = v));
  }

  get label() {
    return this.nativeElement.label;
  }

  /**
* The preferred placement of the select's menu.
* Note that the actual placement may vary as needed to keep the listbox
inside of the viewport.
 */
  @Input()
  set placement(v: SynAutocomplete['placement']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.placement = v));
  }

  get placement() {
    return this.nativeElement.placement;
  }

  /**
* The select's help text.
* If you need to display HTML, use the `help-text` slot instead.
 */
  @Input()
  set helpText(v: SynAutocomplete['helpText']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.helpText = v));
  }

  get helpText() {
    return this.nativeElement.helpText;
  }

  /**
* By default, form controls are associated with the nearest containing `<form>` element.
* This attribute allows you
to place the form control outside of a form and associate it with the form that has this `id`.
* The form must be in
the same document or shadow root for this to work.
 */
  @Input()
  set form(v: SynAutocomplete['form']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.form = v));
  }

  get form() {
    return this.nativeElement.form;
  }

  /**
* The select's required attribute.
 */
  @Input()
  set required(v: SynAutocomplete['required']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.required = v));
  }

  get required() {
    return this.nativeElement.required;
  }

  /**
* The minimum length of the text required to show the autocomplete.
 */
  @Input()
  set threshold(v: SynAutocomplete['threshold']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.threshold = v));
  }

  get threshold() {
    return this.nativeElement.threshold;
  }

  /**
* Show autocomplete on focus event.
* Focus event will ignore the `threshold` property and will always show the list.
 */
  @Input()
  set showOnFocus(v: SynAutocomplete['showOnFocus']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.showOnFocus = v));
  }

  get showOnFocus() {
    return this.nativeElement.showOnFocus;
  }

  /**
* Highlight the search query in the autocomplete list.
 */
  @Input()
  set highlight(v: SynAutocomplete['highlight']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.highlight = v));
  }

  get highlight() {
    return this.nativeElement.highlight;
  }

  /**
* Emitted when the control's value changes.
 */
  @Output() synChangeEvent = new EventEmitter<SynChangeEvent>();

  /**
* Emitted when the control's value is cleared.
 */
  @Output() synClearEvent = new EventEmitter<SynClearEvent>();

  /**
* Emitted when the control receives input.
 */
  @Output() synInputEvent = new EventEmitter<SynInputEvent>();

  /**
* Emitted when the control gains focus.
 */
  @Output() synFocusEvent = new EventEmitter<SynFocusEvent>();

  /**
* Emitted when the control loses focus.
 */
  @Output() synBlurEvent = new EventEmitter<SynBlurEvent>();

  /**
* Emitted when the select's menu opens.
 */
  @Output() synShowEvent = new EventEmitter<SynShowEvent>();

  /**
* Emitted after the select's menu opens and all animations are complete.
 */
  @Output() synAfterShowEvent = new EventEmitter<SynAfterShowEvent>();

  /**
* Emitted when the select's menu closes.
 */
  @Output() synHideEvent = new EventEmitter<SynHideEvent>();

  /**
* Emitted after the select's menu closes and all animations are complete.
 */
  @Output() synAfterHideEvent = new EventEmitter<SynAfterHideEvent>();

  /**
* Emitted when the form control has been checked for validity and its constraints aren't satisfied.
 */
  @Output() synInvalidEvent = new EventEmitter<SynInvalidEvent>();
}

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
