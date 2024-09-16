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
import type { SynDrawer } from '@synergy-design-system/components';
import type { SynShowEvent } from '@synergy-design-system/components';
import type { SynAfterShowEvent } from '@synergy-design-system/components';
import type { SynHideEvent } from '@synergy-design-system/components';
import type { SynAfterHideEvent } from '@synergy-design-system/components';
import type { SynInitialFocusEvent } from '@synergy-design-system/components';
import type { SynRequestCloseEvent } from '@synergy-design-system/components';
import '@synergy-design-system/components/components/drawer/drawer.js';

/**
 * @summary Drawers slide in from a container to expose additional options and information.
 * @documentation https://synergy.style/components/drawer
 * @status stable
 * @since 2.0
 *
 * @dependency syn-icon-button
 *
 * @slot - The drawer's main content.
 * @slot label - The drawer's label. Alternatively, you can use the `label` attribute.
 * @slot header-actions - Optional actions to add to the header. Works best with `<syn-icon-button>`.
 * @slot footer - The drawer's footer, usually one or more buttons representing various options.
 *
 * @event syn-show - Emitted when the drawer opens.
 * @event syn-after-show - Emitted after the drawer opens and all animations are complete.
 * @event syn-hide - Emitted when the drawer closes.
 * @event syn-after-hide - Emitted after the drawer closes and all animations are complete.
 * @event syn-initial-focus - Emitted when the drawer opens and is ready to receive focus. Calling
 *   `event.preventDefault()` will prevent focusing and allow you to set it on a different element, such as an input.
 * @event {{ source: 'close-button' | 'keyboard' | 'overlay' }} syn-request-close - Emitted when the user attempts to
 *   close the drawer by clicking the close button, clicking the overlay, or pressing escape. Calling
 *   `event.preventDefault()` will keep the drawer open. Avoid using this unless closing the drawer will result in
 *   destructive behavior such as data loss.
 *
 * @csspart base - The component's base wrapper.
 * @csspart overlay - The overlay that covers the screen behind the drawer.
 * @csspart panel - The drawer's panel (where the drawer and its content are rendered).
 * @csspart header - The drawer's header. This element wraps the title and header actions.
 * @csspart header-actions - Optional actions to add to the header. Works best with `<syn-icon-button>`.
 * @csspart title - The drawer's title.
 * @csspart close-button - The close button, an `<syn-icon-button>`.
 * @csspart close-button__base - The close button's exported `base` part.
 * @csspart body - The drawer's body.
 * @csspart footer - The drawer's footer.
 *
 * @cssproperty --size - The preferred size of the drawer. This will be applied to the drawer's width or height
 *   depending on its `placement`. Note that the drawer will shrink to accommodate smaller screens.
 * @cssproperty --header-spacing - The amount of padding to use for the header.
 * @cssproperty --body-spacing - The amount of padding to use for the body.
 * @cssproperty --footer-spacing - The amount of padding to use for the footer.
 *
 * @animation drawer.showTop - The animation to use when showing a drawer with `top` placement.
 * @animation drawer.showEnd - The animation to use when showing a drawer with `end` placement.
 * @animation drawer.showBottom - The animation to use when showing a drawer with `bottom` placement.
 * @animation drawer.showStart - The animation to use when showing a drawer with `start` placement.
 * @animation drawer.hideTop - The animation to use when hiding a drawer with `top` placement.
 * @animation drawer.hideEnd - The animation to use when hiding a drawer with `end` placement.
 * @animation drawer.hideBottom - The animation to use when hiding a drawer with `bottom` placement.
 * @animation drawer.hideStart - The animation to use when hiding a drawer with `start` placement.
 * @animation drawer.denyClose - The animation to use when a request to close the drawer is denied.
 * @animation drawer.overlay.show - The animation to use when showing the drawer's overlay.
 * @animation drawer.overlay.hide - The animation to use when hiding the drawer's overlay.
 *
 * @property modal - Exposes the internal modal utility that controls focus trapping. To temporarily disable focus
 *   trapping and allow third-party modals spawned from an active Synergy modal, call `modal.activateExternal()` when
 *   the third-party modal opens. Upon closing, call `modal.deactivateExternal()` to restore Synergy's focus trapping.
 */
@Component({
  selector: 'syn-drawer',
  standalone: true,
  template: '<ng-content></ng-content>',
})
export class SynDrawerComponent {
  public nativeElement: SynDrawer;
  private _ngZone: NgZone;

  constructor(e: ElementRef, ngZone: NgZone) {
    this.nativeElement = e.nativeElement;
    this._ngZone = ngZone;
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
    this.nativeElement.addEventListener(
      'syn-initial-focus',
      (e: SynInitialFocusEvent) => {
        this.synInitialFocusEvent.emit(e);
      },
    );
    this.nativeElement.addEventListener(
      'syn-request-close',
      (e: SynRequestCloseEvent) => {
        this.synRequestCloseEvent.emit(e);
      },
    );
  }

  /**
* Indicates whether or not the drawer is open.
* You can toggle this attribute to show and hide the drawer, or you can
use the `show()` and `hide()` methods and this attribute will reflect the drawer's open state.
 */
  @Input()
  set open(v: SynDrawer['open']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.open = v));
  }
  get open() {
    return this.nativeElement.open;
  }

  /**
* The drawer's label as displayed in the header.
* You should always include a relevant label even when using
`no-header`, as it is required for proper accessibility.
* If you need to display HTML, use the `label` slot instead.
 */
  @Input()
  set label(v: SynDrawer['label']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.label = v));
  }
  get label() {
    return this.nativeElement.label;
  }

  /**
   * The direction from which the drawer will open.
   */
  @Input()
  set placement(v: SynDrawer['placement']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.placement = v));
  }
  get placement() {
    return this.nativeElement.placement;
  }

  /**
* By default, the drawer slides out of its containing block (usually the viewport).
* To make the drawer slide out of
its parent element, set this attribute and add `position: relative` to the parent.
 */
  @Input()
  set contained(v: SynDrawer['contained']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.contained = v));
  }
  get contained() {
    return this.nativeElement.contained;
  }

  /**
* Removes the header.
* This will also remove the default close button, so please ensure you provide an easy,
accessible way for users to dismiss the drawer.
 */
  @Input()
  set noHeader(v: SynDrawer['noHeader']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.noHeader = v));
  }
  get noHeader() {
    return this.nativeElement.noHeader;
  }

  /**
   * Emitted when the drawer opens.
   */
  @Output() synShowEvent = new EventEmitter<SynShowEvent>();

  /**
   * Emitted after the drawer opens and all animations are complete.
   */
  @Output() synAfterShowEvent = new EventEmitter<SynAfterShowEvent>();

  /**
   * Emitted when the drawer closes.
   */
  @Output() synHideEvent = new EventEmitter<SynHideEvent>();

  /**
   * Emitted after the drawer closes and all animations are complete.
   */
  @Output() synAfterHideEvent = new EventEmitter<SynAfterHideEvent>();

  /**
   * Emitted when the drawer opens and is ready to receive focus.
   * Calling `event.preventDefault()` will prevent focusing and allow you to set it on a different element, such as an input.
   */
  @Output() synInitialFocusEvent = new EventEmitter<SynInitialFocusEvent>();

  /**
   * Emitted when the user attempts to close the drawer by clicking the close button, clicking the overlay, or pressing escape.
   * Calling `event.preventDefault()` will keep the drawer open.
   * Avoid using this unless closing the drawer will result in destructive behavior such as data loss.
   */
  @Output() synRequestCloseEvent = new EventEmitter<SynRequestCloseEvent>();
}

export type { SynShowEvent } from '@synergy-design-system/components';
export type { SynAfterShowEvent } from '@synergy-design-system/components';
export type { SynHideEvent } from '@synergy-design-system/components';
export type { SynAfterHideEvent } from '@synergy-design-system/components';
export type { SynInitialFocusEvent } from '@synergy-design-system/components';
export type { SynRequestCloseEvent } from '@synergy-design-system/components';
