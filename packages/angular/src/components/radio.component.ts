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
} from '@angular/core';
import type { SynRadio } from '@synergy-design-system/components';
import type { SynBlurEvent } from '@synergy-design-system/components';
import type { SynFocusEvent } from '@synergy-design-system/components';
import '@synergy-design-system/components/components/radio/radio.js';

/**
 * @summary Radios allow the user to select a single option from a group.
 * @documentation https://synergy.style/components/radio
 * @status stable
 * @since 2.0
 *
 * @dependency syn-icon
 *
 * @slot - The radio's label.
 *
 * @event syn-blur - Emitted when the control loses focus.
 * @event syn-focus - Emitted when the control gains focus.
 *
 * @csspart base - The component's base wrapper.
 * @csspart control - The circular container that wraps the radio's checked state.
 * @csspart control--checked - The radio control when the radio is checked.
 * @csspart checked-icon - The checked icon, an `<syn-icon>` element.
 * @csspart label - The container that wraps the radio's label.
 */
@Component({
  selector: 'syn-radio',
  standalone: true,
  template: '<ng-content></ng-content>',
})
export class SynRadioComponent {
  public nativeElement: SynRadio;
  private _ngZone: NgZone;

  constructor(e: ElementRef, ngZone: NgZone) {
    this.nativeElement = e.nativeElement;
    this._ngZone = ngZone;
    this.nativeElement.addEventListener('syn-blur', (e: SynBlurEvent) => {
      this.synBlurEvent.emit(e);
    });
    this.nativeElement.addEventListener('syn-focus', (e: SynFocusEvent) => {
      this.synFocusEvent.emit(e);
    });
  }

  /**
   * The radio's value.
   * When selected, the radio group will receive this value.
   */
  @Input()
  set value(v: SynRadio['value']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.value = v));
  }
  get value() {
    return this.nativeElement.value;
  }

  /**
* The radio's size.
* When used inside a radio group, the size will be determined by the radio group's size so this
attribute can typically be omitted.
 */
  @Input()
  set size(v: SynRadio['size']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.size = v));
  }
  get size() {
    return this.nativeElement.size;
  }

  /**
   * Disables the radio.
   */
  @Input()
  set disabled(v: SynRadio['disabled']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.disabled = v));
  }
  get disabled() {
    return this.nativeElement.disabled;
  }

  /**
   * Emitted when the control loses focus.
   */
  @Output() synBlurEvent = new EventEmitter<SynBlurEvent>();

  /**
   * Emitted when the control gains focus.
   */
  @Output() synFocusEvent = new EventEmitter<SynFocusEvent>();
}

export type { SynBlurEvent } from '@synergy-design-system/components';
export type { SynFocusEvent } from '@synergy-design-system/components';
