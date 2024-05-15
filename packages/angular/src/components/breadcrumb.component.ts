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
import type { SynBreadcrumb } from '@synergy-design-system/components';

import '@synergy-design-system/components/components/breadcrumb/breadcrumb.js';

/**
 * @summary Breadcrumbs provide a group of links so users can easily navigate a website's hierarchy.
 * @documentation https://synergy.style/components/breadcrumb
 * @status stable
 * @since 2.0
 *
 * @slot - One or more breadcrumb items to display.
 * @slot separator - The separator to use between breadcrumb items. Works best with `<syn-icon>`.
 *
 * @dependency syn-icon
 *
 * @csspart base - The component's base wrapper.
 */
@Component({
  selector: 'syn-breadcrumb',
  standalone: true,
  template: '<ng-content></ng-content>',
})
export class SynBreadcrumbComponent {
  public nativeElement: SynBreadcrumb;

  private _ngZone: NgZone;

  constructor(e: ElementRef, ngZone: NgZone) {
    this.nativeElement = e.nativeElement;
    this._ngZone = ngZone;
  }

  /**
* The label to use for the breadcrumb control.
* This will not be shown on the screen, but it will be announced by
screen readers and other assistive devices to provide more context for users.
 */
  @Input()
  set label(v: SynBreadcrumb['label']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.label = v));
  }

  get label() {
    return this.nativeElement.label;
  }
}
