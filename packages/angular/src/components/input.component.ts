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
  SynBlurEvent, SynChangeEvent, SynClearEvent, SynFocusEvent, SynInput, SynInputEvent, SynInvalidEvent,
} from '@synergy-design-system/components';
import '@synergy-design-system/components/components/input/input.js';

/**
 * @summary Inputs collect data from the user.
 * @documentation https://synergy.style/components/input
 * @status stable
 * @since 2.0
 *
 * @dependency syn-icon
 * @dependency syn-divider
 *
 * @slot label - The input's label. Alternatively, you can use the `label` attribute.
 * @slot prefix - Used to prepend a presentational icon or similar element to the input.
 * @slot suffix - Used to append a presentational icon or similar element to the input.
 * @slot clear-icon - An icon to use in lieu of the default clear icon.
 * @slot show-password-icon - An icon to use in lieu of the default show password icon.
 * @slot hide-password-icon - An icon to use in lieu of the default hide password icon.
 * @slot help-text - Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.
 * @slot increment-number-stepper - An icon to use in lieu of the default increment number stepper icon.
 * @slot decrement-number-stepper - An icon to use in lieu of the default decrement number stepper icon.
 *
 * @event syn-blur - Emitted when the control loses focus.
 * @event syn-change - Emitted when an alteration to the control's value is committed by the user.
 * @event syn-clear - Emitted when the clear button is activated.
 * @event syn-focus - Emitted when the control gains focus.
 * @event syn-input - Emitted when the control receives input.
 * @event syn-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
 *
 * @csspart form-control - The form control that wraps the label, input, and help text.
 * @csspart form-control-label - The label's wrapper.
 * @csspart form-control-input - The input's wrapper.
 * @csspart form-control-help-text - The help text's wrapper.
 * @csspart base - The component's base wrapper.
 * @csspart input - The internal `<input>` control.
 * @csspart prefix - The container that wraps the prefix.
 * @csspart clear-button - The clear button.
 * @csspart password-toggle-button - The password toggle button.
 * @csspart suffix - The container that wraps the suffix.
 * @csspart stepper - The container that wraps the number stepper.
 * @csspart decrement-number-stepper - The decrement number stepper button.
 * @csspart increment-number-stepper - The increment number stepper button.
 * @csspart divider - The divider between the increment and decrement number stepper buttons.
 */
@Component({
  selector: 'syn-input',
  standalone: true,
  template: '<ng-content></ng-content>',
})
export class SynInputComponent {
  private _el: SynInput;

  private _ngZone: NgZone;

  constructor(e: ElementRef, ngZone: NgZone) {
    this._el = e.nativeElement;
    this._ngZone = ngZone;
    this._el.addEventListener('syn-blur', (e: SynBlurEvent) => { this.synBlurEvent.emit(e); });
    this._el.addEventListener('syn-change', (e: SynChangeEvent) => { this.synChangeEvent.emit(e); });
    this._el.addEventListener('syn-clear', (e: SynClearEvent) => { this.synClearEvent.emit(e); });
    this._el.addEventListener('syn-focus', (e: SynFocusEvent) => { this.synFocusEvent.emit(e); });
    this._el.addEventListener('syn-input', (e: SynInputEvent) => { this.synInputEvent.emit(e); });
    this._el.addEventListener('syn-invalid', (e: SynInvalidEvent) => { this.synInvalidEvent.emit(e); });
  }

  @Input()
  set title(v: SynInput['title']) {
    this._ngZone.runOutsideAngular(() => (this._el.title = v));
  }

  get title() {
    return this._el.title;
  }

  /**
* The type of input.
* Works the same as a native `<input>` element, but only a subset of types are supported.
* Defaults
to `text`.
 */
  @Input()
  set type(v: SynInput['type']) {
    this._ngZone.runOutsideAngular(() => (this._el.type = v));
  }

  get type() {
    return this._el.type;
  }

  /**
* The name of the input, submitted as a name/value pair with form data.
 */
  @Input()
  set name(v: SynInput['name']) {
    this._ngZone.runOutsideAngular(() => (this._el.name = v));
  }

  get name() {
    return this._el.name;
  }

  /**
* The current value of the input, submitted as a name/value pair with form data.
 */
  @Input()
  set value(v: SynInput['value']) {
    this._ngZone.runOutsideAngular(() => (this._el.value = v));
  }

  get value() {
    return this._el.value;
  }

  /**
* The input's size.
 */
  @Input()
  set size(v: SynInput['size']) {
    this._ngZone.runOutsideAngular(() => (this._el.size = v));
  }

  get size() {
    return this._el.size;
  }

  /**
* The input's label.
* If you need to display HTML, use the `label` slot instead.
 */
  @Input()
  set label(v: SynInput['label']) {
    this._ngZone.runOutsideAngular(() => (this._el.label = v));
  }

  get label() {
    return this._el.label;
  }

  /**
* The input's help text.
* If you need to display HTML, use the `help-text` slot instead.
 */
  @Input()
  set helpText(v: SynInput['helpText']) {
    this._ngZone.runOutsideAngular(() => (this._el.helpText = v));
  }

  get helpText() {
    return this._el.helpText;
  }

  /**
* Adds a clear button when the input is not empty.
 */
  @Input()
  set clearable(v: SynInput['clearable']) {
    this._ngZone.runOutsideAngular(() => (this._el.clearable = v));
  }

  get clearable() {
    return this._el.clearable;
  }

  /**
* Disables the input.
 */
  @Input()
  set disabled(v: SynInput['disabled']) {
    this._ngZone.runOutsideAngular(() => (this._el.disabled = v));
  }

  get disabled() {
    return this._el.disabled;
  }

  /**
* Placeholder text to show as a hint when the input is empty.
 */
  @Input()
  set placeholder(v: SynInput['placeholder']) {
    this._ngZone.runOutsideAngular(() => (this._el.placeholder = v));
  }

  get placeholder() {
    return this._el.placeholder;
  }

  /**
* Makes the input readonly.
 */
  @Input()
  set readonly(v: SynInput['readonly']) {
    this._ngZone.runOutsideAngular(() => (this._el.readonly = v));
  }

  get readonly() {
    return this._el.readonly;
  }

  /**
* Adds a button to toggle the password's visibility.
* Only applies to password types.
 */
  @Input()
  set passwordToggle(v: SynInput['passwordToggle']) {
    this._ngZone.runOutsideAngular(() => (this._el.passwordToggle = v));
  }

  get passwordToggle() {
    return this._el.passwordToggle;
  }

  /**
* Determines whether or not the password is currently visible.
* Only applies to password input types.
 */
  @Input()
  set passwordVisible(v: SynInput['passwordVisible']) {
    this._ngZone.runOutsideAngular(() => (this._el.passwordVisible = v));
  }

  get passwordVisible() {
    return this._el.passwordVisible;
  }

  /**
* Hides the increment/decrement spin buttons for number inputs.
 */
  @Input()
  set noSpinButtons(v: SynInput['noSpinButtons']) {
    this._ngZone.runOutsideAngular(() => (this._el.noSpinButtons = v));
  }

  get noSpinButtons() {
    return this._el.noSpinButtons;
  }

  /**
* By default, form controls are associated with the nearest containing `<form>` element.
* This attribute allows you
to place the form control outside of a form and associate it with the form that has this `id`.
* The form must be in
the same document or shadow root for this to work.
 */
  @Input()
  set form(v: SynInput['form']) {
    this._ngZone.runOutsideAngular(() => (this._el.form = v));
  }

  get form() {
    return this._el.form;
  }

  /**
* Makes the input a required field.
 */
  @Input()
  set required(v: SynInput['required']) {
    this._ngZone.runOutsideAngular(() => (this._el.required = v));
  }

  get required() {
    return this._el.required;
  }

  /**
* A regular expression pattern to validate input against.
 */
  @Input()
  set pattern(v: SynInput['pattern']) {
    this._ngZone.runOutsideAngular(() => (this._el.pattern = v));
  }

  get pattern() {
    return this._el.pattern;
  }

  /**
* The minimum length of input that will be considered valid.
 */
  @Input()
  set minlength(v: SynInput['minlength']) {
    this._ngZone.runOutsideAngular(() => (this._el.minlength = v));
  }

  get minlength() {
    return this._el.minlength;
  }

  /**
* The maximum length of input that will be considered valid.
 */
  @Input()
  set maxlength(v: SynInput['maxlength']) {
    this._ngZone.runOutsideAngular(() => (this._el.maxlength = v));
  }

  get maxlength() {
    return this._el.maxlength;
  }

  /**
* The input's minimum value.
* Only applies to date and number input types.
 */
  @Input()
  set min(v: SynInput['min']) {
    this._ngZone.runOutsideAngular(() => (this._el.min = v));
  }

  get min() {
    return this._el.min;
  }

  /**
* The input's maximum value.
* Only applies to date and number input types.
 */
  @Input()
  set max(v: SynInput['max']) {
    this._ngZone.runOutsideAngular(() => (this._el.max = v));
  }

  get max() {
    return this._el.max;
  }

  /**
* Specifies the granularity that the value must adhere to, or the special value `any` which means no stepping is
implied, allowing any numeric value.
* Only applies to date and number input types.
 */
  @Input()
  set step(v: SynInput['step']) {
    this._ngZone.runOutsideAngular(() => (this._el.step = v));
  }

  get step() {
    return this._el.step;
  }

  /**
* Controls whether and how text input is automatically capitalized as it is entered by the user.
 */
  @Input()
  set autocapitalize(v: SynInput['autocapitalize']) {
    this._ngZone.runOutsideAngular(() => (this._el.autocapitalize = v));
  }

  get autocapitalize() {
    return this._el.autocapitalize;
  }

  /**
* Indicates whether the browser's autocorrect feature is on or off.
 */
  @Input()
  set autocorrect(v: SynInput['autocorrect']) {
    this._ngZone.runOutsideAngular(() => (this._el.autocorrect = v));
  }

  get autocorrect() {
    return this._el.autocorrect;
  }

  /**
* Specifies what permission the browser has to provide assistance in filling out form field values.
* Refer to
[this page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for available values.
 */
  @Input()
  set autocomplete(v: SynInput['autocomplete']) {
    this._ngZone.runOutsideAngular(() => (this._el.autocomplete = v));
  }

  get autocomplete() {
    return this._el.autocomplete;
  }

  /**
* Indicates that the input should receive focus on page load.
 */
  @Input()
  set autofocus(v: SynInput['autofocus']) {
    this._ngZone.runOutsideAngular(() => (this._el.autofocus = v));
  }

  get autofocus() {
    return this._el.autofocus;
  }

  /**
* Used to customize the label or icon of the Enter key on virtual keyboards.
 */
  @Input()
  set enterkeyhint(v: SynInput['enterkeyhint']) {
    this._ngZone.runOutsideAngular(() => (this._el.enterkeyhint = v));
  }

  get enterkeyhint() {
    return this._el.enterkeyhint;
  }

  /**
* Enables spell checking on the input.
 */
  @Input()
  set spellcheck(v: SynInput['spellcheck']) {
    this._ngZone.runOutsideAngular(() => (this._el.spellcheck = v));
  }

  get spellcheck() {
    return this._el.spellcheck;
  }

  /**
* Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual
keyboard on supportive devices.
 */
  @Input()
  set inputmode(v: SynInput['inputmode']) {
    this._ngZone.runOutsideAngular(() => (this._el.inputmode = v));
  }

  get inputmode() {
    return this._el.inputmode;
  }

  @Input()
  callHandleDisabledChange(...args: Parameters<SynInput['handleDisabledChange']>) {
    return this._ngZone.runOutsideAngular(() => this._el.handleDisabledChange(...args));
  }

  @Input()
  callHandleStepChange(...args: Parameters<SynInput['handleStepChange']>) {
    return this._ngZone.runOutsideAngular(() => this._el.handleStepChange(...args));
  }

  @Input()
  callHandleValueChange(...args: Parameters<SynInput['handleValueChange']>) {
    return this._ngZone.runOutsideAngular(() => this._el.handleValueChange(...args));
  }

  /**
* Sets focus on the input.
 */
  @Input()
  callFocus(...args: Parameters<SynInput['focus']>) {
    return this._ngZone.runOutsideAngular(() => this._el.focus(...args));
  }

  /**
* Removes focus from the input.
 */
  @Input()
  callBlur(...args: Parameters<SynInput['blur']>) {
    return this._ngZone.runOutsideAngular(() => this._el.blur(...args));
  }

  /**
* Selects all the text in the input.
 */
  @Input()
  callSelect(...args: Parameters<SynInput['select']>) {
    return this._ngZone.runOutsideAngular(() => this._el.select(...args));
  }

  /**
* Sets the start and end positions of the text selection (0-based).
 */
  @Input()
  callSetSelectionRange(...args: Parameters<SynInput['setSelectionRange']>) {
    return this._ngZone.runOutsideAngular(() => this._el.setSelectionRange(...args));
  }

  /**
* Replaces a range of text with a new string.
 */
  @Input()
  callSetRangeText(...args: Parameters<SynInput['setRangeText']>) {
    return this._ngZone.runOutsideAngular(() => this._el.setRangeText(...args));
  }

  /**
* Displays the browser picker for an input element (only works if the browser supports it for the input type).
 */
  @Input()
  callShowPicker(...args: Parameters<SynInput['showPicker']>) {
    return this._ngZone.runOutsideAngular(() => this._el.showPicker(...args));
  }

  /**
* Increments the value of a numeric input type by the value of the step attribute.
 */
  @Input()
  callStepUp(...args: Parameters<SynInput['stepUp']>) {
    return this._ngZone.runOutsideAngular(() => this._el.stepUp(...args));
  }

  /**
* Decrements the value of a numeric input type by the value of the step attribute.
 */
  @Input()
  callStepDown(...args: Parameters<SynInput['stepDown']>) {
    return this._ngZone.runOutsideAngular(() => this._el.stepDown(...args));
  }

  /**
* Checks for validity but does not show a validation message.
* Returns `true` when valid and `false` when invalid.
 */
  @Input()
  callCheckValidity(...args: Parameters<SynInput['checkValidity']>) {
    return this._ngZone.runOutsideAngular(() => this._el.checkValidity(...args));
  }

  /**
* Gets the associated form, if one exists.
 */
  @Input()
  callGetForm(...args: Parameters<SynInput['getForm']>) {
    return this._ngZone.runOutsideAngular(() => this._el.getForm(...args));
  }

  /**
* Checks for validity and shows the browser's validation message if the control is invalid.
 */
  @Input()
  callReportValidity(...args: Parameters<SynInput['reportValidity']>) {
    return this._ngZone.runOutsideAngular(() => this._el.reportValidity(...args));
  }

  /**
* Sets a custom validation message.
* Pass an empty string to restore validity.
 */
  @Input()
  callSetCustomValidity(...args: Parameters<SynInput['setCustomValidity']>) {
    return this._ngZone.runOutsideAngular(() => this._el.setCustomValidity(...args));
  }

  /**
* Emitted when the control loses focus.
 */
  @Output() synBlurEvent = new EventEmitter<SynBlurEvent>();

  /**
* Emitted when an alteration to the control's value is committed by the user.
 */
  @Output() synChangeEvent = new EventEmitter<SynChangeEvent>();

  /**
* Emitted when the clear button is activated.
 */
  @Output() synClearEvent = new EventEmitter<SynClearEvent>();

  /**
* Emitted when the control gains focus.
 */
  @Output() synFocusEvent = new EventEmitter<SynFocusEvent>();

  /**
* Emitted when the control receives input.
 */
  @Output() synInputEvent = new EventEmitter<SynInputEvent>();

  /**
* Emitted when the form control has been checked for validity and its constraints aren't satisfied.
 */
  @Output() synInvalidEvent = new EventEmitter<SynInvalidEvent>();
}

export type { SynBlurEvent } from '@synergy-design-system/components';
export type { SynChangeEvent } from '@synergy-design-system/components';
export type { SynClearEvent } from '@synergy-design-system/components';
export type { SynFocusEvent } from '@synergy-design-system/components';
export type { SynInputEvent } from '@synergy-design-system/components';
export type { SynInvalidEvent } from '@synergy-design-system/components';
