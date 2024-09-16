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
import type { SynMenuItem } from '@synergy-design-system/components';

import '@synergy-design-system/components/components/menu-item/menu-item.js';

/**
 * @summary Menu items provide options for the user to pick from in a menu.
 * @documentation https://synergy.style/components/menu-item
 * @status stable
 * @since 2.0
 *
 * @dependency syn-icon
 * @dependency syn-popup
 * @dependency syn-spinner
 *
 * @slot - The menu item's label.
 * @slot prefix - Used to prepend an icon or similar element to the menu item.
 * @slot suffix - Used to append an icon or similar element to the menu item.
 * @slot submenu - Used to denote a nested menu.
 *
 * @csspart base - The component's base wrapper.
 * @csspart checked-icon - The checked icon, which is only visible when the menu item is checked.
 * @csspart prefix - The prefix container.
 * @csspart label - The menu item label.
 * @csspart suffix - The suffix container.
 * @csspart spinner - The spinner that shows when the menu item is in the loading state.
 * @csspart spinner__base - The spinner's base part.
 * @csspart submenu-icon - The submenu icon, visible only when the menu item has a submenu (not yet implemented).
 *
 * @cssproperty [--submenu-offset=-2px] - The distance submenus shift to overlap the parent menu.
 */
@Component({
  selector: 'syn-menu-item',
  standalone: true,
  template: '<ng-content></ng-content>',
})
export class SynMenuItemComponent {
  public nativeElement: SynMenuItem;
  private _ngZone: NgZone;

  constructor(e: ElementRef, ngZone: NgZone) {
    this.nativeElement = e.nativeElement;
    this._ngZone = ngZone;
  }

  /**
   * The type of menu item to render.
   * To use `checked`, this value must be set to `checkbox`.
   */
  @Input()
  set type(v: SynMenuItem['type']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.type = v));
  }
  get type() {
    return this.nativeElement.type;
  }

  /**
   * Draws the item in a checked state.
   */
  @Input()
  set checked(v: SynMenuItem['checked']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.checked = v));
  }
  get checked() {
    return this.nativeElement.checked;
  }

  /**
   * A unique value to store in the menu item.
   * This can be used as a way to identify menu items when selected.
   */
  @Input()
  set value(v: SynMenuItem['value']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.value = v));
  }
  get value() {
    return this.nativeElement.value;
  }

  /**
   * Draws the menu item in a loading state.
   */
  @Input()
  set loading(v: SynMenuItem['loading']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.loading = v));
  }
  get loading() {
    return this.nativeElement.loading;
  }

  /**
   * Draws the menu item in a disabled state, preventing selection.
   */
  @Input()
  set disabled(v: SynMenuItem['disabled']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.disabled = v));
  }
  get disabled() {
    return this.nativeElement.disabled;
  }
}
