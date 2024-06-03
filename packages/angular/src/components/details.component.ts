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
  SynAfterHideEvent, SynAfterShowEvent, SynDetails, SynHideEvent, SynShowEvent,
} from '@synergy-design-system/components';
import '@synergy-design-system/components/components/details/details.js';

/**
 * @summary Details show a brief summary and expand to show additional content.
 * @documentation https://synergy.style/components/details
 * @status stable
 * @since 2.0
 *
 * @dependency syn-icon
 *
 * @slot - The details' main content.
 * @slot summary - The details' summary. Alternatively, you can use the `summary` attribute.
 * @slot expand-icon - Optional expand icon to use instead of the default. Works best with `<syn-icon>`.
 * @slot collapse-icon - Optional collapse icon to use instead of the default. Works best with `<syn-icon>`.
 *
 * @event syn-show - Emitted when the details opens.
 * @event syn-after-show - Emitted after the details opens and all animations are complete.
 * @event syn-hide - Emitted when the details closes.
 * @event syn-after-hide - Emitted after the details closes and all animations are complete.
 *
 * @csspart base - The component's base wrapper.
 * @csspart header - The header that wraps both the summary and the expand/collapse icon.
 * @csspart summary - The container that wraps the summary.
 * @csspart summary-icon - The container that wraps the expand/collapse icons.
 * @csspart content - The details content.
 *
 * @animation details.show - The animation to use when showing details. You can use `height: auto` with this animation.
 * @animation details.hide - The animation to use when hiding details. You can use `height: auto` with this animation.
 */
@Component({
  selector: 'syn-details',
  standalone: true,
  template: '<ng-content></ng-content>',
})
export class SynDetailsComponent {
  public nativeElement: SynDetails;

  private _ngZone: NgZone;

  constructor(e: ElementRef, ngZone: NgZone) {
    this.nativeElement = e.nativeElement;
    this._ngZone = ngZone;
    this.nativeElement.addEventListener('syn-show', (e: SynShowEvent) => { this.synShowEvent.emit(e); });
    this.nativeElement.addEventListener('syn-after-show', (e: SynAfterShowEvent) => { this.synAfterShowEvent.emit(e); });
    this.nativeElement.addEventListener('syn-hide', (e: SynHideEvent) => { this.synHideEvent.emit(e); });
    this.nativeElement.addEventListener('syn-after-hide', (e: SynAfterHideEvent) => { this.synAfterHideEvent.emit(e); });
  }

  /**
* Indicates whether or not the details is open.
* You can toggle this attribute to show and hide the details, or you
can use the `show()` and `hide()` methods and this attribute will reflect the details' open state.
 */
  @Input()
  set open(v: SynDetails['open']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.open = v));
  }

  get open() {
    return this.nativeElement.open;
  }

  /**
* The summary to show in the header.
* If you need to display HTML, use the `summary` slot instead.
 */
  @Input()
  set summary(v: SynDetails['summary']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.summary = v));
  }

  get summary() {
    return this.nativeElement.summary;
  }

  /**
* Disables the details so it can't be toggled.
 */
  @Input()
  set disabled(v: SynDetails['disabled']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.disabled = v));
  }

  get disabled() {
    return this.nativeElement.disabled;
  }

  /**
* Draws the details as contained element.
 */
  @Input()
  set contained(v: SynDetails['contained']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.contained = v));
  }

  get contained() {
    return this.nativeElement.contained;
  }

  /**
* The details's size.
 */
  @Input()
  set size(v: SynDetails['size']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.size = v));
  }

  get size() {
    return this.nativeElement.size;
  }

  @Input()
  callHandleOpenChange(...args: Parameters<SynDetails['handleOpenChange']>) {
    return this._ngZone.runOutsideAngular(() => this.nativeElement.handleOpenChange(...args));
  }

  /**
* Shows the details.
 */
  @Input()
  callShow(...args: Parameters<SynDetails['show']>) {
    return this._ngZone.runOutsideAngular(() => this.nativeElement.show(...args));
  }

  /**
* Hides the details
 */
  @Input()
  callHide(...args: Parameters<SynDetails['hide']>) {
    return this._ngZone.runOutsideAngular(() => this.nativeElement.hide(...args));
  }

  /**
* Emitted when the details opens.
 */
  @Output() synShowEvent = new EventEmitter<SynShowEvent>();

  /**
* Emitted after the details opens and all animations are complete.
 */
  @Output() synAfterShowEvent = new EventEmitter<SynAfterShowEvent>();

  /**
* Emitted when the details closes.
 */
  @Output() synHideEvent = new EventEmitter<SynHideEvent>();

  /**
* Emitted after the details closes and all animations are complete.
 */
  @Output() synAfterHideEvent = new EventEmitter<SynAfterHideEvent>();
}

export type { SynShowEvent } from '@synergy-design-system/components';
export type { SynAfterShowEvent } from '@synergy-design-system/components';
export type { SynHideEvent } from '@synergy-design-system/components';
export type { SynAfterHideEvent } from '@synergy-design-system/components';
