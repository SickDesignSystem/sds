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
import type { SynButton } from '@synergy-design-system/components';
import type { SynBlurEvent } from '@synergy-design-system/components';
import type { SynFocusEvent } from '@synergy-design-system/components';
import type { SynInvalidEvent } from '@synergy-design-system/components';
import '@synergy-design-system/components/components/button/button.js';

/**
 * @summary Buttons represent actions that are available to the user.
 * @documentation https://synergy.style/components/button
 * @status stable
 * @since 2.0
 *
 * @dependency syn-icon
 * @dependency syn-spinner
 *
 * @event syn-blur - Emitted when the button loses focus.
 * @event syn-focus - Emitted when the button gains focus.
 * @event syn-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
 *
 * @slot - The button's label.
 * @slot prefix - A presentational prefix icon or similar element.
 * @slot suffix - A presentational suffix icon or similar element.
 *
 * @csspart base - The component's base wrapper.
 * @csspart prefix - The container that wraps the prefix.
 * @csspart label - The button's label.
 * @csspart suffix - The container that wraps the suffix.
 * @csspart caret - The button's caret icon, an `<syn-icon>` element.
 * @csspart spinner - The spinner that shows when the button is in the loading state.
 */
@Component({
  selector: 'syn-button',
  standalone: true,
  template: '<ng-content></ng-content>',
})
export class SynButtonComponent {
  public nativeElement: SynButton;
  private _ngZone: NgZone;

  constructor(e: ElementRef, ngZone: NgZone) {
    this.nativeElement = e.nativeElement;
    this._ngZone = ngZone;
    this.nativeElement.addEventListener('syn-blur', (e: SynBlurEvent) => {
      this.synBlurEvent.emit(e);
    });
    this.nativeElement.addEventListener('syn-focus', (e: SynFocusEvent) => {
      this.synFocusEvent.emit(e);
    });
    this.nativeElement.addEventListener('syn-invalid', (e: SynInvalidEvent) => {
      this.synInvalidEvent.emit(e);
    });
  }

  @Input()
  set title(v: SynButton['title']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.title = v));
  }
  get title(): SynButton['title'] {
    return this.nativeElement.title;
  }

  /**
   * The button's theme variant.
   */
  @Input()
  set variant(v: SynButton['variant']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.variant = v));
  }
  get variant(): SynButton['variant'] {
    return this.nativeElement.variant;
  }

  /**
   * The button's size.
   */
  @Input()
  set size(v: SynButton['size']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.size = v));
  }
  get size(): SynButton['size'] {
    return this.nativeElement.size;
  }

  /**
   * Draws the button with a caret.
   * Used to indicate that the button triggers a dropdown menu or similar behavior.
   */
  @Input()
  set caret(v: '' | SynButton['caret']) {
    this._ngZone.runOutsideAngular(
      () => (this.nativeElement.caret = v === '' || v),
    );
  }
  get caret(): SynButton['caret'] {
    return this.nativeElement.caret;
  }

  /**
   * Disables the button.
   */
  @Input()
  set disabled(v: '' | SynButton['disabled']) {
    this._ngZone.runOutsideAngular(
      () => (this.nativeElement.disabled = v === '' || v),
    );
  }
  get disabled(): SynButton['disabled'] {
    return this.nativeElement.disabled;
  }

  /**
   * Draws the button in a loading state.
   */
  @Input()
  set loading(v: '' | SynButton['loading']) {
    this._ngZone.runOutsideAngular(
      () => (this.nativeElement.loading = v === '' || v),
    );
  }
  get loading(): SynButton['loading'] {
    return this.nativeElement.loading;
  }

  /**
* The type of button.
* Note that the default value is `button` instead of `submit`, which is opposite of how native
`<button>` elements behave.
* When the type is `submit`, the button will submit the surrounding form.
 */
  @Input()
  set type(v: SynButton['type']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.type = v));
  }
  get type(): SynButton['type'] {
    return this.nativeElement.type;
  }

  /**
* The name of the button, submitted as a name/value pair with form data, but only when this button is the submitter.
This attribute is ignored when `href` is present.
 */
  @Input()
  set name(v: SynButton['name']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.name = v));
  }
  get name(): SynButton['name'] {
    return this.nativeElement.name;
  }

  /**
* The value of the button, submitted as a pair with the button's name as part of the form data, but only when this
button is the submitter.
* This attribute is ignored when `href` is present.
 */
  @Input()
  set value(v: SynButton['value']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.value = v));
  }
  get value(): SynButton['value'] {
    return this.nativeElement.value;
  }

  /**
   * When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`.
   */
  @Input()
  set href(v: SynButton['href']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.href = v));
  }
  get href(): SynButton['href'] {
    return this.nativeElement.href;
  }

  /**
   * Tells the browser where to open the link.
   * Only used when `href` is present.
   */
  @Input()
  set target(v: SynButton['target']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.target = v));
  }
  get target(): SynButton['target'] {
    return this.nativeElement.target;
  }

  /**
* When using `href`, this attribute will map to the underlying link's `rel` attribute.
* Unlike regular links, the
default is `noreferrer noopener` to prevent security exploits.
* However, if you're using `target` to point to a
specific tab/window, this will prevent that from working correctly.
* You can remove or change the default value by
setting the attribute to an empty string or a value of your choice, respectively.
 */
  @Input()
  set rel(v: SynButton['rel']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.rel = v));
  }
  get rel(): SynButton['rel'] {
    return this.nativeElement.rel;
  }

  /**
   * Tells the browser to download the linked file as this filename.
   * Only used when `href` is present.
   */
  @Input()
  set download(v: SynButton['download']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.download = v));
  }
  get download(): SynButton['download'] {
    return this.nativeElement.download;
  }

  /**
* The "form owner" to associate the button with.
* If omitted, the closest containing form will be used instead.
* The
value of this attribute must be an id of a form in the same document or shadow root as the button.
 */
  @Input()
  set form(v: SynButton['form']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.form = v));
  }
  get form(): SynButton['form'] {
    return this.nativeElement.form;
  }

  /**
   * Used to override the form owner's `action` attribute.
   */
  @Input()
  set formAction(v: SynButton['formAction']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.formAction = v));
  }
  get formAction(): SynButton['formAction'] {
    return this.nativeElement.formAction;
  }

  /**
   * Used to override the form owner's `enctype` attribute.
   */
  @Input()
  set formEnctype(v: SynButton['formEnctype']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.formEnctype = v));
  }
  get formEnctype(): SynButton['formEnctype'] {
    return this.nativeElement.formEnctype;
  }

  /**
   * Used to override the form owner's `method` attribute.
   */
  @Input()
  set formMethod(v: SynButton['formMethod']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.formMethod = v));
  }
  get formMethod(): SynButton['formMethod'] {
    return this.nativeElement.formMethod;
  }

  /**
   * Used to override the form owner's `novalidate` attribute.
   */
  @Input()
  set formNoValidate(v: '' | SynButton['formNoValidate']) {
    this._ngZone.runOutsideAngular(
      () => (this.nativeElement.formNoValidate = v === '' || v),
    );
  }
  get formNoValidate(): SynButton['formNoValidate'] {
    return this.nativeElement.formNoValidate;
  }

  /**
   * Used to override the form owner's `target` attribute.
   */
  @Input()
  set formTarget(v: SynButton['formTarget']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.formTarget = v));
  }
  get formTarget(): SynButton['formTarget'] {
    return this.nativeElement.formTarget;
  }

  /**
   * Emitted when the button loses focus.
   */
  @Output() synBlurEvent = new EventEmitter<SynBlurEvent>();

  /**
   * Emitted when the button gains focus.
   */
  @Output() synFocusEvent = new EventEmitter<SynFocusEvent>();

  /**
   * Emitted when the form control has been checked for validity and its constraints aren't satisfied.
   */
  @Output() synInvalidEvent = new EventEmitter<SynInvalidEvent>();
}

export type { SynBlurEvent } from '@synergy-design-system/components';
export type { SynFocusEvent } from '@synergy-design-system/components';
export type { SynInvalidEvent } from '@synergy-design-system/components';
