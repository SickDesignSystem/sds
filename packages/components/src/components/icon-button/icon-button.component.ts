// ---------------------------------------------------------------------
// 🔒 AUTOGENERATED BY VENDORISM
// Removing this comment will prevent it from being managed by it.
// ---------------------------------------------------------------------

/* eslint-disable */
import { classMap } from 'lit/directives/class-map.js';
import { html, literal } from 'lit/static-html.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { property, query, state } from 'lit/decorators.js';
import componentStyles from '../../styles/component.styles.js';
import SynergyElement from '../../internal/synergy-element.js';
import SynIcon from '../icon/icon.component.js';
import styles from './icon-button.styles.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Icons buttons are simple, icon-only buttons that can be used for actions and in toolbars.
 * @documentation https://synergy.style/components/icon-button
 * @status stable
 * @since 2.0
 *
 * @dependency syn-icon
 *
 * @event syn-blur - Emitted when the icon button loses focus.
 * @event syn-focus - Emitted when the icon button gains focus.
 *
 * @csspart base - The component's base wrapper.
 */
export default class SynIconButton extends SynergyElement {
  static styles: CSSResultGroup = [componentStyles, styles];
  static dependencies = { 'syn-icon': SynIcon };

  @query('.icon-button') button: HTMLButtonElement | HTMLLinkElement;

  @state() private hasFocus = false;

  /** The name of the icon to draw. Available names depend on the icon library being used. */
  @property() name?: string;

  /** The name of a registered custom icon library. */
  @property() library?: string;

  /**
   * An external URL of an SVG file. Be sure you trust the content you are including, as it will be executed as code and
   * can result in XSS attacks.
   */
  @property() src?: string;

  /** When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`. */
  @property() href?: string;

  /** Tells the browser where to open the link. Only used when `href` is set. */
  @property() target?: '_blank' | '_parent' | '_self' | '_top';

  /** Tells the browser to download the linked file as this filename. Only used when `href` is set. */
  @property() download?: string;

  /**
   * A description that gets read by assistive devices. For optimal accessibility, you should always include a label
   * that describes what the icon button does.
   */
  @property() label = '';

  /** The icon button's size. */
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' | 'inherit' = 'inherit';

  /**
  * The color of the icon button.
  * The default "currentColor" makes it possible to easily style the icon button from outside without any CSS variables.
  */
  @property({ reflect: true }) color: 'currentColor' | 'primary' | 'neutral'  = 'currentColor';

  /** Disables the button. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  private handleBlur() {
    this.hasFocus = false;
    this.emit('syn-blur');
  }

  private handleFocus() {
    this.hasFocus = true;
    this.emit('syn-focus');
  }

  private handleClick(event: MouseEvent) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  /** Simulates a click on the icon button. */
  click() {
    this.button.click();
  }

  /** Sets focus on the icon button. */
  focus(options?: FocusOptions) {
    this.button.focus(options);
  }

  /** Removes focus from the icon button. */
  blur() {
    this.button.blur();
  }

  render() {
    const isLink = this.href ? true : false;
    const tag = isLink ? literal`a` : literal`button`;

    /* eslint-disable lit/binding-positions, lit/no-invalid-html */
    return html`
      <${tag}
        part="base"
        class=${classMap({
          'icon-button': true,
          'icon-button--disabled': !isLink && this.disabled,
          'icon-button--focused': this.hasFocus,
          'icon-button--small': this.size === 'small',
          'icon-button--medium': this.size === 'medium',
          'icon-button--large': this.size === 'large',
          'icon-button--primary': this.color === 'primary',
          'icon-button--neutral': this.color === 'neutral'
        })}
        ?disabled=${ifDefined(isLink ? undefined : this.disabled)}
        type=${ifDefined(isLink ? undefined : 'button')}
        href=${ifDefined(isLink ? this.href : undefined)}
        target=${ifDefined(isLink ? this.target : undefined)}
        download=${ifDefined(isLink ? this.download : undefined)}
        rel=${ifDefined(isLink && this.target ? 'noreferrer noopener' : undefined)}
        role=${ifDefined(isLink ? undefined : 'button')}
        aria-disabled=${this.disabled ? 'true' : 'false'}
        aria-label="${this.label}"
        tabindex=${this.disabled ? '-1' : '0'}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <syn-icon
          class="icon-button__icon"
          name=${ifDefined(this.name)}
          library=${ifDefined(this.library)}
          src=${ifDefined(this.src)}
          aria-hidden="true"
        ></syn-icon>
      </${tag}>
    `;
  }
}
