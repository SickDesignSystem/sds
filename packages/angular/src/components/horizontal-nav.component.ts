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
import type { SynHorizontalNav } from '@synergy-design-system/components';

import '@synergy-design-system/components/components/horizontal-nav/horizontal-nav.js';

/**
 * @summary The `<syn-horizontal-nav />` element provides a generic navigation bar that
 * can be used to group multiple `<syn-nav-item />` elements together.
 * It will group all `<syn-nav-item />`s that cannot be displayed into a custom priority menu
 *
 * @documentation https://synergy-design-system.github.io/?path=/docs/components-syn-horizontal-nav--docs
 * @status stable
 * @since 1.10
 *
 * @dependency syn-icon
 * @dependency syn-nav-item
 *
 * @slot - The given navigation items. Must be `<syn-nav-item>` elements.
 *
 * @csspart base - The component's base wrapper.
 * @csspart nav-item-wrapper - The wrapper around the slotted `<syn-nav-item />` elements
 * @csspart priority-menu - The wrapper around the priority menu
 *
 * @cssproperty --navigation-spacing - The amount of padding to use for the horizontal navigation.
 */
@Component({
  selector: 'syn-horizontal-nav',
  standalone: true,
  template: '<ng-content></ng-content>',
})
export class SynHorizontalNavComponent {
  private _el: SynHorizontalNav;

  private _ngZone: NgZone;

  constructor(e: ElementRef, ngZone: NgZone) {
    this._el = e.nativeElement;
    this._ngZone = ngZone;
  }

  /**
* The components priority menu label.
This will be shown after the priority menu 3 dots link
 */
  @Input()
  set priorityMenuLabel(v: SynHorizontalNav['priorityMenuLabel']) {
    this._ngZone.runOutsideAngular(() => (this._el.priorityMenuLabel = v));
  }

  get priorityMenuLabel() {
    return this._el.priorityMenuLabel;
  }
}
