import { css } from 'lit';

export default css`
  /** 
   * Hide the default slot, because the filtered options are rendered in the listbox__options
   */
  .combobox__listbox slot:not([name]) {
    display: none;
  }

  /**
   * The filtered options
   */
  .listbox__options syn-option mark {
    background-color: transparent;
    color: var(--syn-color-neutral-950);
    font: var(--syn-body-medium-bold);
  }

  .listbox__options syn-option[aria-selected='true'] mark {
    color: var(--syn-color-neutral-0);
  }
`;
