// ---------------------------------------------------------------------
// 🔒 AUTOGENERATED BY VENDORISM
// Removing this comment will prevent it from being managed by it.
// ---------------------------------------------------------------------

/* eslint-disable */
import { css } from 'lit';
import customStyles from './tag.custom.styles.js';

export default css`
	/* stylelint-disable */
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--syn-button-font-size-small);
    height: calc(var(--syn-input-height-small) * 0.8);
    line-height: calc(var(--syn-input-height-small) - var(--syn-input-border-width) * 2);
    border-radius: var(--syn-input-border-radius-small);
    padding: 0 var(--syn-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--syn-button-font-size-medium);
    height: calc(var(--syn-input-height-medium) * 0.8);
    line-height: calc(var(--syn-input-height-medium) - var(--syn-input-border-width) * 2);
    border-radius: var(--syn-input-border-radius-medium);
    padding: 0 var(--syn-spacing-small);
  }

  .tag--large {
    font-size: var(--syn-button-font-size-large);
    height: calc(var(--syn-input-height-large) * 0.8);
    line-height: calc(var(--syn-input-height-large) - var(--syn-input-border-width) * 2);
    border-radius: var(--syn-input-border-radius-large);
    padding: 0 var(--syn-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--syn-spacing-x-small);
  }

  

  ${customStyles}
`;

