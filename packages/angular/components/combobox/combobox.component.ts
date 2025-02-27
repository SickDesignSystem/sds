// ---------------------------------------------------------------------
// 🔒 AUTOGENERATED @synergy-design-system/angular wrappers for @synergy-design-system/components
// Please do not edit this file directly!
// It will get recreated when running pnpm build.
// ---------------------------------------------------------------------
import {
  Component,
  ElementRef,
  NgZone,
  Input,
  Output,
  EventEmitter,
  AfterContentInit,
} from '@angular/core';
import type { SynCombobox } from '@synergy-design-system/components';
import type { SynChangeEvent } from '@synergy-design-system/components';
import type { SynClearEvent } from '@synergy-design-system/components';
import type { SynInputEvent } from '@synergy-design-system/components';
import type { SynFocusEvent } from '@synergy-design-system/components';
import type { SynBlurEvent } from '@synergy-design-system/components';
import type { SynShowEvent } from '@synergy-design-system/components';
import type { SynAfterShowEvent } from '@synergy-design-system/components';
import type { SynHideEvent } from '@synergy-design-system/components';
import type { SynAfterHideEvent } from '@synergy-design-system/components';
import type { SynInvalidEvent } from '@synergy-design-system/components';
import type { SynErrorEvent } from '@synergy-design-system/components';
import '@synergy-design-system/components/components/combobox/combobox.js';

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
@Component({
  selector: 'syn-combobox',
  standalone: true,
  template: '<ng-content></ng-content>',
})
export class SynComboboxComponent {
  public nativeElement: SynCombobox;
  private _ngZone: NgZone;

  constructor(e: ElementRef, ngZone: NgZone) {
    this.nativeElement = e.nativeElement;
    this._ngZone = ngZone;
    this.nativeElement.addEventListener('syn-change', (e: SynChangeEvent) => {
      this.synChangeEvent.emit(e);
    });
    this.nativeElement.addEventListener('syn-clear', (e: SynClearEvent) => {
      this.synClearEvent.emit(e);
    });
    this.nativeElement.addEventListener('syn-input', (e: SynInputEvent) => {
      this.synInputEvent.emit(e);
      this.valueChange.emit(this.value);
    });
    this.nativeElement.addEventListener('syn-focus', (e: SynFocusEvent) => {
      this.synFocusEvent.emit(e);
    });
    this.nativeElement.addEventListener('syn-blur', (e: SynBlurEvent) => {
      this.synBlurEvent.emit(e);
    });
    this.nativeElement.addEventListener('syn-show', (e: SynShowEvent) => {
      this.synShowEvent.emit(e);
    });
    this.nativeElement.addEventListener(
      'syn-after-show',
      (e: SynAfterShowEvent) => {
        this.synAfterShowEvent.emit(e);
      },
    );
    this.nativeElement.addEventListener('syn-hide', (e: SynHideEvent) => {
      this.synHideEvent.emit(e);
    });
    this.nativeElement.addEventListener(
      'syn-after-hide',
      (e: SynAfterHideEvent) => {
        this.synAfterHideEvent.emit(e);
      },
    );
    this.nativeElement.addEventListener('syn-invalid', (e: SynInvalidEvent) => {
      this.synInvalidEvent.emit(e);
    });
    this.nativeElement.addEventListener('syn-error', (e: SynErrorEvent) => {
      this.synErrorEvent.emit(e);
    });
  }

  /**
   * The name of the combobox, submitted as a name/value pair with form data.
   */
  @Input()
  set name(v: SynCombobox['name']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.name = v));
  }
  get name(): SynCombobox['name'] {
    return this.nativeElement.name;
  }

  /**
   * The current value of the combobox, submitted as a name/value pair with form data.
   */
  @Input()
  set value(v: SynCombobox['value']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.value = v));
  }
  get value(): SynCombobox['value'] {
    return this.nativeElement.value;
  }

  /**
   * The combobox's size.
   */
  @Input()
  set size(v: SynCombobox['size']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.size = v));
  }
  get size(): SynCombobox['size'] {
    return this.nativeElement.size;
  }

  /**
   * Placeholder text to show as a hint when the combobox is empty.
   */
  @Input()
  set placeholder(v: SynCombobox['placeholder']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.placeholder = v));
  }
  get placeholder(): SynCombobox['placeholder'] {
    return this.nativeElement.placeholder;
  }

  /**
   * Disables the combobox control.
   */
  @Input()
  set disabled(v: '' | SynCombobox['disabled']) {
    this._ngZone.runOutsideAngular(
      () => (this.nativeElement.disabled = v === '' || v),
    );
  }
  get disabled(): SynCombobox['disabled'] {
    return this.nativeElement.disabled;
  }

  /**
   * Adds a clear button when the combobox is not empty.
   */
  @Input()
  set clearable(v: '' | SynCombobox['clearable']) {
    this._ngZone.runOutsideAngular(
      () => (this.nativeElement.clearable = v === '' || v),
    );
  }
  get clearable(): SynCombobox['clearable'] {
    return this.nativeElement.clearable;
  }

  /**
* Indicates whether or not the combobox is open.
You can toggle this attribute to show and hide the listbox, or you can use the `show()`
and `hide()` methods and this attribute will reflect the combobox's open state.
 */
  @Input()
  set open(v: '' | SynCombobox['open']) {
    this._ngZone.runOutsideAngular(
      () => (this.nativeElement.open = v === '' || v),
    );
  }
  get open(): SynCombobox['open'] {
    return this.nativeElement.open;
  }

  /**
* Enable this option to prevent the listbox from being clipped,
when the component is placed inside a container with `overflow: auto|scroll`.
Hoisting uses a fixed positioning strategy that works in many, but not all, scenarios.
 */
  @Input()
  set hoist(v: '' | SynCombobox['hoist']) {
    this._ngZone.runOutsideAngular(
      () => (this.nativeElement.hoist = v === '' || v),
    );
  }
  get hoist(): SynCombobox['hoist'] {
    return this.nativeElement.hoist;
  }

  /**
   * The combobox's label.
   * If you need to display HTML, use the `label` slot instead.
   */
  @Input()
  set label(v: SynCombobox['label']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.label = v));
  }
  get label(): SynCombobox['label'] {
    return this.nativeElement.label;
  }

  /**
* The preferred placement of the combobox's menu.
Note that the actual placement may vary as needed to keep the listbox inside of the viewport.
 */
  @Input()
  set placement(v: SynCombobox['placement']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.placement = v));
  }
  get placement(): SynCombobox['placement'] {
    return this.nativeElement.placement;
  }

  /**
   * The combobox's help text.
   * If you need to display HTML, use the `help-text` slot instead.
   */
  @Input()
  set helpText(v: SynCombobox['helpText']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.helpText = v));
  }
  get helpText(): SynCombobox['helpText'] {
    return this.nativeElement.helpText;
  }

  /**
* By default, form controls are associated with the nearest containing `<form>` element.
This attribute allows you to place the form control outside of a form and associate it
with the form that has this `id`.
The form must be in the same document or shadow root for this to work.
 */
  @Input()
  set form(v: SynCombobox['form']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.form = v));
  }
  get form(): SynCombobox['form'] {
    return this.nativeElement.form;
  }

  /**
   * The combobox's required attribute.
   */
  @Input()
  set required(v: '' | SynCombobox['required']) {
    this._ngZone.runOutsideAngular(
      () => (this.nativeElement.required = v === '' || v),
    );
  }
  get required(): SynCombobox['required'] {
    return this.nativeElement.required;
  }

  /**
* A function that customizes the rendered option.
* The first argument is the option, the second
is the query string, which is typed into the combobox.
The function should return either a Lit TemplateResult or a string containing trusted HTML
to render in the shown list of filtered options.
If the query string should be highlighted use the `highlightOptionRenderer` function.
 */
  @Input()
  set getOption(v: SynCombobox['getOption']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.getOption = v));
  }
  get getOption(): SynCombobox['getOption'] {
    return this.nativeElement.getOption;
  }

  /**
* A function used to filter options in the combobox component.
The default filter method is a case- and diacritic-insensitive string comparison.
 */
  @Input()
  set filter(v: SynCombobox['filter']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.filter = v));
  }
  get filter(): SynCombobox['filter'] {
    return this.nativeElement.filter;
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
   * Emitted when the combobox's menu opens.
   */
  @Output() synShowEvent = new EventEmitter<SynShowEvent>();

  /**
   * Emitted after the combobox's menu opens and all animations are complete.
   */
  @Output() synAfterShowEvent = new EventEmitter<SynAfterShowEvent>();

  /**
   * Emitted when the combobox's menu closes.
   */
  @Output() synHideEvent = new EventEmitter<SynHideEvent>();

  /**
   * Emitted after the combobox's menu closes and all animations are complete.
   */
  @Output() synAfterHideEvent = new EventEmitter<SynAfterHideEvent>();

  /**
   * Emitted when the form control has been checked for validity and its constraints aren't satisfied.
   */
  @Output() synInvalidEvent = new EventEmitter<SynInvalidEvent>();

  /**
   * Emitted when the combobox menu fails to open.
   */
  @Output() synErrorEvent = new EventEmitter<SynErrorEvent>();

  /**
   * Support for two way data binding
   */
  @Output() valueChange = new EventEmitter<SynCombobox['value']>();
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
export type { SynErrorEvent } from '@synergy-design-system/components';
