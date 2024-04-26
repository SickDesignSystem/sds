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
  SynAfterHideEvent, SynAfterShowEvent, SynHideEvent, SynShowEvent, SynTooltip,
} from '@synergy-design-system/components';
import '@synergy-design-system/components/components/tooltip/tooltip.js';

/**
 * @summary Tooltips display additional information based on a specific action.
 * @documentation https://synergy.style/components/tooltip
 * @status stable
 * @since 2.0
 *
 * @dependency syn-popup
 *
 * @slot - The tooltip's target element. Avoid slotting in more than one element, as subsequent ones will be ignored.
 * @slot content - The content to render in the tooltip. Alternatively, you can use the `content` attribute.
 *
 * @event syn-show - Emitted when the tooltip begins to show.
 * @event syn-after-show - Emitted after the tooltip has shown and all animations are complete.
 * @event syn-hide - Emitted when the tooltip begins to hide.
 * @event syn-after-hide - Emitted after the tooltip has hidden and all animations are complete.
 *
 * @csspart base - The component's base wrapper, an `<syn-popup>` element.
 * @csspart base__popup - The popup's exported `popup` part. Use this to target the tooltip's popup container.
 * @csspart base__arrow - The popup's exported `arrow` part. Use this to target the tooltip's arrow.
 * @csspart body - The tooltip's body where its content is rendered.
 *
 * @cssproperty --max-width - The maximum width of the tooltip before its content will wrap.
 * @cssproperty --hide-delay - The amount of time to wait before hiding the tooltip when hovering.
 * @cssproperty --show-delay - The amount of time to wait before showing the tooltip when hovering.
 *
 * @animation tooltip.show - The animation to use when showing the tooltip.
 * @animation tooltip.hide - The animation to use when hiding the tooltip.
 */
@Component({
  selector: 'syn-tooltip',
  standalone: true,
  template: '<ng-content></ng-content>',
})
export class SynTooltipComponent {
  private _el: SynTooltip;

  private _ngZone: NgZone;

  constructor(e: ElementRef, ngZone: NgZone) {
    this._el = e.nativeElement;
    this._ngZone = ngZone;
    this._el.addEventListener('syn-show', (e: SynShowEvent) => { this.synShowEvent.emit(e); });
    this._el.addEventListener('syn-after-show', (e: SynAfterShowEvent) => { this.synAfterShowEvent.emit(e); });
    this._el.addEventListener('syn-hide', (e: SynHideEvent) => { this.synHideEvent.emit(e); });
    this._el.addEventListener('syn-after-hide', (e: SynAfterHideEvent) => { this.synAfterHideEvent.emit(e); });
  }

  /**
* The tooltip's content.
* If you need to display HTML, use the `content` slot instead.
 */
  @Input()
  set content(v: SynTooltip['content']) {
    this._ngZone.runOutsideAngular(() => (this._el.content = v));
  }

  get content() {
    return this._el.content;
  }

  /**
* The preferred placement of the tooltip.
* Note that the actual placement may vary as needed to keep the tooltip
inside of the viewport.
 */
  @Input()
  set placement(v: SynTooltip['placement']) {
    this._ngZone.runOutsideAngular(() => (this._el.placement = v));
  }

  get placement() {
    return this._el.placement;
  }

  /**
* Disables the tooltip so it won't show when triggered.
 */
  @Input()
  set disabled(v: SynTooltip['disabled']) {
    this._ngZone.runOutsideAngular(() => (this._el.disabled = v));
  }

  get disabled() {
    return this._el.disabled;
  }

  /**
* The distance in pixels from which to offset the tooltip away from its target.
 */
  @Input()
  set distance(v: SynTooltip['distance']) {
    this._ngZone.runOutsideAngular(() => (this._el.distance = v));
  }

  get distance() {
    return this._el.distance;
  }

  /**
* Indicates whether or not the tooltip is open.
* You can use this in lieu of the show/hide methods.
 */
  @Input()
  set open(v: SynTooltip['open']) {
    this._ngZone.runOutsideAngular(() => (this._el.open = v));
  }

  get open() {
    return this._el.open;
  }

  /**
* The distance in pixels from which to offset the tooltip along its target.
 */
  @Input()
  set skidding(v: SynTooltip['skidding']) {
    this._ngZone.runOutsideAngular(() => (this._el.skidding = v));
  }

  get skidding() {
    return this._el.skidding;
  }

  /**
* Controls how the tooltip is activated.
* Possible options include `click`, `hover`, `focus`, and `manual`.
* Multiple
options can be passed by separating them with a space.
* When manual is used, the tooltip must be activated
programmatically.
 */
  @Input()
  set trigger(v: SynTooltip['trigger']) {
    this._ngZone.runOutsideAngular(() => (this._el.trigger = v));
  }

  get trigger() {
    return this._el.trigger;
  }

  /**
* Enable this option to prevent the tooltip from being clipped when the component is placed inside a container with
`overflow: auto|hidden|scroll`.
* Hoisting uses a fixed positioning strategy that works in many, but not all,
scenarios.
 */
  @Input()
  set hoist(v: SynTooltip['hoist']) {
    this._ngZone.runOutsideAngular(() => (this._el.hoist = v));
  }

  get hoist() {
    return this._el.hoist;
  }

  @Input()
  callHandleOpenChange(...args: Parameters<SynTooltip['handleOpenChange']>) {
    return this._ngZone.runOutsideAngular(() => this._el.handleOpenChange(...args));
  }

  @Input()
  callHandleOptionsChange(...args: Parameters<SynTooltip['handleOptionsChange']>) {
    return this._ngZone.runOutsideAngular(() => this._el.handleOptionsChange(...args));
  }

  @Input()
  callHandleDisabledChange(...args: Parameters<SynTooltip['handleDisabledChange']>) {
    return this._ngZone.runOutsideAngular(() => this._el.handleDisabledChange(...args));
  }

  /**
* Shows the tooltip.
 */
  @Input()
  callShow(...args: Parameters<SynTooltip['show']>) {
    return this._ngZone.runOutsideAngular(() => this._el.show(...args));
  }

  /**
* Hides the tooltip
 */
  @Input()
  callHide(...args: Parameters<SynTooltip['hide']>) {
    return this._ngZone.runOutsideAngular(() => this._el.hide(...args));
  }

  /**
* Emitted when the tooltip begins to show.
 */
  @Output() synShowEvent = new EventEmitter<SynShowEvent>();

  /**
* Emitted after the tooltip has shown and all animations are complete.
 */
  @Output() synAfterShowEvent = new EventEmitter<SynAfterShowEvent>();

  /**
* Emitted when the tooltip begins to hide.
 */
  @Output() synHideEvent = new EventEmitter<SynHideEvent>();

  /**
* Emitted after the tooltip has hidden and all animations are complete.
 */
  @Output() synAfterHideEvent = new EventEmitter<SynAfterHideEvent>();
}

export type { SynShowEvent } from '@synergy-design-system/components';
export type { SynAfterShowEvent } from '@synergy-design-system/components';
export type { SynHideEvent } from '@synergy-design-system/components';
export type { SynAfterHideEvent } from '@synergy-design-system/components';
