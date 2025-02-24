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
import type { SynCard } from '@synergy-design-system/components';

import '@synergy-design-system/components/components/card/card.js';

/**
 * @summary Cards can be used to group related subjects in a container.
 * @documentation https://synergy.style/components/card
 * @status stable
 * @since 2.0
 *
 * @slot - The card's main content.
 * @slot header - An optional header for the card.
 * @slot footer - An optional footer for the card.
 * @slot image - An optional image to render at the start of the card.
 *
 * @csspart base - The component's base wrapper.
 * @csspart image - The container that wraps the card's image.
 * @csspart header - The container that wraps the card's header.
 * @csspart body - The container that wraps the card's main content.
 * @csspart footer - The container that wraps the card's footer.
 *
 * @cssproperty --border-color - The card's border color, including borders that occur inside the card.
 * @cssproperty --border-radius - The border radius for the card's edges.
 * @cssproperty --border-width - The width of the card's borders.
 * @cssproperty --padding - The padding to use for the card's sections.
 */
@Component({
  selector: 'syn-card',
  standalone: true,
  template: '<ng-content></ng-content>',
})
export class SynCardComponent {
  private _elementRef = inject(ElementRef);
  private _ngZone: NgZone = inject(NgZone);

  public nativeElement: SynCard;

  constructor() {
    this.nativeElement = this._elementRef.nativeElement;
  }

  /**
   * Draws the card with sharp edges.
   * Can be used e.g.
   * when nesting multiple syn-cards to create hierarchy.
   */
  @Input()
  set sharp(v: '' | SynCard['sharp']) {
    this._ngZone.runOutsideAngular(
      () => (this.nativeElement.sharp = v === '' || v),
    );
  }
  get sharp(): SynCard['sharp'] {
    return this.nativeElement.sharp;
  }
}
