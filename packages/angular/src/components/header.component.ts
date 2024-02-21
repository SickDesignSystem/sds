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
import type { SynHeader } from '@synergy-design-system/components';

import '@synergy-design-system/components/components/header/header.js';

/**
 * @summary The <syn-header /> element provides a generic application header
 * that can be used to add applications name, toolbar and primary navigation.
 *
 * @documentation https://synergy-design-system.github.io/?path=/docs/components-syn-header--docs
 * @status stable
 * @since 1.8.0
 *
 * @slot - The label for the header. Will automatically be hidden on mobile.
 * @slot logo - The logo that should be displayed. Will fall back to the SICK logo if not applied.
 * @slot meta-navigation - Used to add various application toolbar icons.
 *                     Best used with `<syn-icon-button />` and `<syn-drop-down />`
 * @slot navigation - Used to add an optional horizontal navigation
 *
 * @csspart base - The component's base wrapper.
 * @csspart content - The wrapper where most content items reside
 * @csspart logo - The wrapper where the application logo resides in
 * @csspart label - Wrapper of the application name label
 * @csspart meta-navigation - Item that wraps the optional application menu
 * @csspart navigation - Wrapper that holds the optional top navigation section
 */
@Component({
  selector: 'syn-header',
  standalone: true,
  template: '<ng-content></ng-content>',
})
export class SynHeaderComponent {
  private _el: SynHeader;

  private _ngZone: NgZone;

  constructor(e: ElementRef, ngZone: NgZone) {
    this._el = e.nativeElement;
    this._ngZone = ngZone;
  }

  /**
* The headers label.
* If you need to display HTML, use the `label` slot instead.
 */
  @Input()
  set label(v: SynHeader['label']) {
    this._ngZone.runOutsideAngular(() => (this._el.label = v));
  }

  get label() {
    return this._el.label;
  }
}
