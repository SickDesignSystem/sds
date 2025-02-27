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
  AfterContentInit,
} from '@angular/core';
import type { SynOption } from '@synergy-design-system/components';

import '@synergy-design-system/components/components/option/option.js';

/**
 * @summary Options define the selectable items within various form controls such as [select](/components/select).
 * @documentation https://synergy.style/components/option
 * @status stable
 * @since 2.0
 *
 * @dependency syn-icon
 *
 * @slot - The option's label.
 * @slot prefix - Used to prepend an icon or similar element to the menu item.
 * @slot suffix - Used to append an icon or similar element to the menu item.
 *
 * @csspart checked-icon - The checked icon, an `<syn-icon>` element.
 * @csspart base - The component's base wrapper.
 * @csspart label - The option's label.
 * @csspart prefix - The container that wraps the prefix.
 * @csspart suffix - The container that wraps the suffix.
 */
@Component({
  selector: 'syn-option',
  standalone: true,
  template: '<ng-content></ng-content>',
})
export class SynOptionComponent {
  public nativeElement: SynOption;
  private _ngZone: NgZone;

  constructor(e: ElementRef, ngZone: NgZone) {
    this.nativeElement = e.nativeElement;
    this._ngZone = ngZone;
  }

  /**
* The option's value.
* When selected, the containing form control will receive this value.
* The value must be unique
from other options in the same group.
* Values may not contain spaces, as spaces are used as delimiters when listing
multiple values.
 */
  @Input()
  set value(v: SynOption['value']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.value = v));
  }
  get value(): SynOption['value'] {
    return this.nativeElement.value;
  }

  /**
   * Draws the option in a disabled state, preventing selection.
   */
  @Input()
  set disabled(v: '' | SynOption['disabled']) {
    this._ngZone.runOutsideAngular(
      () => (this.nativeElement.disabled = v === '' || v),
    );
  }
  get disabled(): SynOption['disabled'] {
    return this.nativeElement.disabled;
  }
}
