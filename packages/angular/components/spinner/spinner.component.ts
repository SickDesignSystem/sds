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
  inject,
  AfterContentInit,
} from '@angular/core';
import type { SynSpinner } from '@synergy-design-system/components';

import '@synergy-design-system/components/components/spinner/spinner.js';

/**
 * @summary Spinners are used to show the progress of an indeterminate operation.
 * @documentation https://synergy.style/components/spinner
 * @status stable
 * @since 2.0
 *
 * @csspart base - The component's base wrapper.
 *
 * @cssproperty --track-width - The width of the track.
 * @cssproperty --indicator-color - The color of the spinner's indicator.
 * @cssproperty --speed - The time it takes for the spinner to complete one animation cycle.
 */
@Component({
  selector: 'syn-spinner',
  standalone: true,
  template: '<ng-content></ng-content>',
})
export class SynSpinnerComponent {
  private _elementRef = inject(ElementRef);
  private _ngZone: NgZone = inject(NgZone);

  public nativeElement: SynSpinner;

  constructor() {
    this.nativeElement = this._elementRef.nativeElement;
  }
}
