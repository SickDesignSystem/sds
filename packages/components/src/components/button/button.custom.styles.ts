import { css } from 'lit';

export default css`
.button:focus-visible {
    outline: var(--syn-focus-ring-color) solid 2px;
    outline-offset: 2px;
  }

  /*
 * Size modifiers
 */

  .button--medium {
    font-size: var(--syn-button-font-size-large);
  }

  .button--large {
    font-size: var(--syn-font-size-large);
  }

  .button--large syn-icon {
    font-size: var(--syn-spacing-large);
  }

  .button.button--large.button--has-label.button--has-prefix .button__prefix,
  .button.button--large.button--has-label.button--has-suffix .button__suffix {
    font-size: var(--syn-spacing-large);
  }

  /*
 * Standard buttons
 */

  .button--filled.button--primary.button--disabled {
    background-color: var(--syn-color-neutral-400);
    border-color: var(--syn-color-neutral-400);
    color: var(--syn-color-neutral-600);
  }

  .button--filled.button--primary:hover:not(.button--disabled) {
    background-color: var(--syn-color-primary-900);
    border-color: var(--syn-color-primary-900);
    color: var(--syn-color-neutral-0);
  }

  .button--filled.button--primary:active:not(.button--disabled) {
    background-color: var(--syn-color-primary-950);
    border-color: inherit;
    color: var(--syn-color-neutral-0);
  }

  /*
 * Outline buttons
 */

  .button--outline.button--primary.button--disabled {
    background: none;
    border-color: var(--syn-color-neutral-400);
    color: var(--syn-color-neutral-400);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background: none;
    border-color: var(--syn-color-primary-900);
    color: var(--syn-color-primary-900);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    background: inherit;
    border-color:  var(--syn-color-primary-950);
    color:  var(--syn-color-primary-950);
  }

  /*
 * Text buttons
 */
  
  .button--text:hover:not(.button--disabled) {
    color: var(--syn-color-primary-900);
  }

  .button--text.button--primary:active:not(.button--disabled) {
    background: inherit;
    border-color:  none;
    color:  var(--syn-color-primary-950);
  }

  .button--text.button--primary.button--disabled {
    color: var(--syn-color-neutral-400);
  }

  /*
* PADDING
 */
   .button.button--small.button--has-label.button--has-prefix {
      padding-inline-start: var(--syn-spacing-small);
   }

  .button.button--small.button--has-label.button--has-suffix {
    padding-inline-end: var(--syn-spacing-small);
  }

  .button.button--medium.button--has-label.button--has-prefix {
    padding-inline-start: var(--syn-spacing-medium);
   } 

  .button.button--medium.button--has-label.button--has-suffix {
    padding-inline-end: var(--syn-spacing-medium);
  }

  .button.button--large.button--has-label.button--has-prefix {
    padding-inline-start: var(--syn-spacing-large);
   }

  .button.button--large.button--has-label.button--has-prefix .button__label {
    padding-inline-start: var(--syn-spacing-medium);
   }

  .button.button--large.button--has-label.button--has-suffix {
    padding-inline-end: var(--syn-spacing-large);
  }

  .button.button--large.button--has-label.button--has-suffix .button__label {
    padding-inline-end: var(--syn-spacing-medium);
  }
  `;
