/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-return-assign */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable complexity */
/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable max-len */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// eslint-disable-next-line import/no-duplicates
import type { CSSResultGroup, TemplateResult } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { property, query, state } from 'lit/decorators.js';
import { animateTo, stopAnimations } from '../../internal/animate.js';
import { defaultValue } from '../../internal/default-value.js';
import { FormControlController } from '../../internal/form.js';
import { getAnimation, setDefaultAnimation } from '../../utilities/animation-registry.js';
import { HasSlotController } from '../../internal/slot.js';
import { LocalizeController } from '../../utilities/localize.js';
import { waitForEvent } from '../../internal/event.js';
import { watch } from '../../internal/watch.js';
import componentStyles from '../../styles/component.styles.js';
import formControlStyles from '../../styles/form-control.styles.js';
import formControlCustomStyles from '../../styles/form-control.custom.styles.js';
import SynergyElement from '../../internal/synergy-element.js';
import SynIcon from '../icon/icon.component.js';
import SynPopup from '../popup/popup.component.js';
import SynTag from '../tag/tag.component.js';
import type { SynergyFormControl } from '../../internal/synergy-element.js';
import type SynOption from '../option/option.component.js';
import styles from './combobox.styles.js';
import { filterOnlyOptions, getAssignedElementsForSlot } from './utils.js';
import { scrollIntoView } from '../../internal/scroll.js';

/**
 * @summary Comboboxes allow you to choose items from a menu of predefined options.
 * @documentation https://synergy.style/components/combobox
 * @status stable
 * @since 2.0
 *
 * @dependency syn-icon
 * @dependency syn-popup
 * @dependency syn-tag
 *
 * @slot - The listbox options. Must be `<syn-option>` elements. You can use `<syn-divider>` to group items visually.
 * @slot label - The input's label. Alternatively, you can use the `label` attribute.
 * @slot prefix - Used to prepend a presentational icon or similar element to the combobox.
 * @slot clear-icon - An icon to use in lieu of the default clear icon.
 * @slot help-text - Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.
 *
 * @event syn-change - Emitted when the control's value changes.
 * @event syn-clear - Emitted when the control's value is cleared.
 * @event syn-input - Emitted when the control receives input.
 * @event syn-focus - Emitted when the control gains focus.
 * @event syn-blur - Emitted when the control loses focus.
 * @event syn-show - Emitted when the combobox's menu opens.
 * @event syn-after-show - Emitted after the combobox's menu opens and all animations are complete.
 * @event syn-hide - Emitted when the combobox's menu closes.
 * @event syn-after-hide - Emitted after the combobox's menu closes and all animations are complete.
 * @event syn-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
 *
 * @csspart form-control - The form control that wraps the label, input, and help text.
 * @csspart form-control-label - The label's wrapper.
 * @csspart form-control-input - The combobox's wrapper.
 * @csspart form-control-help-text - The help text's wrapper.
 * @csspart combobox - The container the wraps the prefix, combobox, clear icon, and expand button.
 * @csspart prefix - The container that wraps the prefix slot.
 * @csspart display-input - The element that displays the selected option's label, an `<input>` element.
 * @csspart listbox - The listbox container where options are slotted.
 * @csspart tags - The container that houses option tags when `multiselect` is used.
 * @csspart tag - The individual tags that represent each multiselect option.
 * @csspart tag__base - The tag's base part.
 * @csspart tag__content - The tag's content part.
 * @csspart tag__remove-button - The tag's remove button.
 * @csspart tag__remove-button__base - The tag's remove button base part.
 * @csspart clear-button - The clear button.
 * @csspart expand-icon - The container that wraps the expand icon.
 */
export default class SynCombobox extends SynergyElement implements SynergyFormControl {
  static styles: CSSResultGroup = [componentStyles, formControlStyles, styles, formControlCustomStyles];

  static dependencies = {
    'syn-icon': SynIcon,
    'syn-popup': SynPopup,
    'syn-tag': SynTag,
  };

  private readonly formControlController = new FormControlController(this, {
    assumeInteractionOn: ['syn-blur', 'syn-input'],
  });

  private readonly hasSlotController = new HasSlotController(this, 'help-text', 'label');

  private readonly localize = new LocalizeController(this);

  private closeWatcher: CloseWatcher | null;

  @query('.combobox') popup: SynPopup;

  @query('.combobox__inputs') combobox: HTMLSlotElement;

  @query('.combobox__display-input') displayInput: HTMLInputElement;

  @query('.combobox__value-input') valueInput: HTMLInputElement;

  @query('.combobox__listbox') listbox: HTMLSlotElement;

  @query('.listbox__options') filteredWrapper: HTMLSlotElement;

  @query('slot:not([name])') private defaultSlot: HTMLSlotElement;

  @state() private hasFocus = false;

  @state() displayLabel = '';

  @state() currentOption: SynOption;

  @state() selectedOptions: SynOption[] = [];

  @state() open = false;

  @state() filteredOptions: SynOption[] = [];

  /** The name of the combobox, submitted as a name/value pair with form data. */
  @property() name = '';

  /**
   * The current value of the combobox, submitted as a name/value pair with form data. When `multiple` is enabled, the
   * value attribute will be a space-delimited list of values based on the options selected, and the value property will
   * be an array. **For this reason, values must not contain spaces.**
   */
  @property({
    converter: {
      fromAttribute: (value: string) => value.split(' '),
      toAttribute: (value: string[]) => value.join(' '),
    },
  })
  value: string | string[] = '';

  /** The default value of the form control. Primarily used for resetting the form control. */
  @defaultValue() defaultValue: string | string[] = '';

  /** The combobox's size. */
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /** Placeholder text to show as a hint when the combobox is empty. */
  @property() placeholder = '';

  /** Disables the combobox control. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Adds a clear button when the combobox is not empty. */
  @property({ type: Boolean }) clearable = false;

  /**
   * Enable this option to prevent the listbox from being clipped when the component is placed inside a container with
   * `overflow: auto|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all, scenarios.
   */
  @property({ type: Boolean }) hoist = false;

  /** The combobox's label. If you need to display HTML, use the `label` slot instead. */
  @property() label = '';

  /**
   * The preferred placement of the combobox's menu. Note that the actual placement may vary as needed to keep the listbox
   * inside of the viewport.
   */
  @property({ reflect: true }) placement: 'top' | 'bottom' = 'bottom';

  /** The combobox's help text. If you need to display HTML, use the `help-text` slot instead. */
  @property({ attribute: 'help-text' }) helpText = '';

  /**
   * By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
   * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
   * the same document or shadow root for this to work.
   */
  @property({ reflect: true }) form = '';

  /** The combobox's required attribute. */
  @property({ type: Boolean, reflect: true }) required = false;

  /** The minimum length of the text required to show the combobox. */
  @property({ type: Number, reflect: true }) threshold = 1;

  /** Show combobox on focus event. Focus event will ignore the `threshold` property and will always show the list. */
  //TODO: better naming?
  @property({ attribute: 'show-on-focus', type: Boolean, reflect: true }) showOnFocus = false;

  /**
   * A function that customizes the rendered option. The first argument is the option, the second
   * is the query string, which is typed into the combobox. The function should return either a Lit TemplateResult or a string containing trusted HTML of the symbol to render at
   * the specified value.
   */
  @property() getOption: (option: SynOption, queryString: string) => TemplateResult | string | HTMLElement = (option) => option;

  /**
   * A function used to filter options in the combobox component.
   *
   * @param option - The option to be filtered.
   * @param queryString - The query string used for filtering.
   * @returns A boolean indicating whether the option should be included in the filtered results.
   */
  @property() filter: (option: SynOption, queryString: string) => boolean = (option, queryString) => option.getTextLabel().toLowerCase().includes(queryString.toLowerCase());

  /** Gets the validity state object */
  get validity() {
    return this.valueInput.validity;
  }

  /** Gets the validation message */
  get validationMessage() {
    return this.valueInput.validationMessage;
  }

  connectedCallback() {
    super.connectedCallback();

    // Because this is a form control, it shouldn't be opened initially
    this.open = false;
  }

  protected get options() {
    return this.filteredOptions.map((option) => {
      if (option.dataset.original === 'true') {
        return option;
      }
      const queryString = this.displayInput.value;
      const optionHtml = this.getOption(option, queryString);
      return html`${typeof optionHtml === 'string' ? unsafeHTML(optionHtml) : optionHtml}`;
    });
  }

  private addOpenListeners() {
    //
    // Listen on the root node instead of the document in case the elements are inside a shadow root
    //
    // https://github.com/synergy-design-system/synergy/issues/1763
    //
    document.addEventListener('focusin', this.handleDocumentFocusIn);
    document.addEventListener('keydown', this.handleDocumentKeyDown);
    document.addEventListener('mousedown', this.handleDocumentMouseDown);

    // If the component is rendered in a shadow root, we need to attach the focusin listener there too
    if (this.getRootNode() !== document) {
      this.getRootNode().addEventListener('focusin', this.handleDocumentFocusIn);
    }

    if ('CloseWatcher' in window) {
      this.closeWatcher?.destroy();
      this.closeWatcher = new CloseWatcher();
      this.closeWatcher.onclose = () => {
        if (this.open) {
          this.hide();
          this.displayInput.focus({ preventScroll: true });
        }
      };
    }
  }

  private removeOpenListeners() {
    document.removeEventListener('focusin', this.handleDocumentFocusIn);
    document.removeEventListener('keydown', this.handleDocumentKeyDown);
    document.removeEventListener('mousedown', this.handleDocumentMouseDown);

    if (this.getRootNode() !== document) {
      this.getRootNode().removeEventListener('focusin', this.handleDocumentFocusIn);
    }

    this.closeWatcher?.destroy();
  }

  private handleFocus() {
    this.hasFocus = true;
    this.emit('syn-focus');
    // Only open it, when there are combobox options
    // if (this.showOnFocus) {
      // TODO: if there is already something types in, do we need to only show the valid selections?
      // this.createAllComboboxOptions();
      // this.updateComplete.then(() => this.open = true);
    // }
  }

  private handleBlur() {
    this.hasFocus = false;
    this.emit('syn-blur');
  }

  private handleDocumentFocusIn = (event: KeyboardEvent) => {
    // Close when focusing out of the combobox
    const path = event.composedPath();
    if (this && !path.includes(this)) {
      this.hide();
    }
  };

  private handleDocumentKeyDown = (event: KeyboardEvent) => {
    const target = event.target as HTMLElement;
    const isClearButton = target.closest('.combobox__clear') !== null;
    const isIconButton = target.closest('syn-icon-button') !== null;

    // Ignore presses when the target is an icon button (e.g. the remove button in <syn-tag>)
    if (isClearButton || isIconButton) {
      return;
    }

    // Close when pressing escape
    if (event.key === 'Escape') {
      this.value = '';
      this.displayInput.value = '';

      if (this.open && !this.closeWatcher) {
        event.preventDefault();
        event.stopPropagation();
        this.hide();
      }
    }

    // Handle enter.
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopImmediatePropagation();

      // If it's not open, open it
      if (!this.open) {
        this.show();
        return;
      }

      // If it is open, update the value based on the current selection and close it
      if (this.currentOption && !this.currentOption.disabled) {
        this.setSelectedOptions(this.currentOption);

        // Emit after updating
        this.updateComplete.then(() => {
          this.emit('syn-input');
          this.emit('syn-change');
        });

        this.hide();
        this.displayInput.focus({ preventScroll: true });
      }

      return;
    }

    // Navigate options
    if (['ArrowUp', 'ArrowDown'].includes(event.key)) {
      const filteredOptions = this.getAllFilteredOptions();

      const currentIndex = filteredOptions.indexOf(this.currentOption);
      let newIndex = Math.max(0, currentIndex);

      // Prevent scrolling
      event.preventDefault();

      // Open it
      if (!this.open) {
        this.show();
      }

      if (event.key === 'ArrowDown') {
        newIndex = currentIndex + 1;
        if (newIndex > filteredOptions.length - 1) newIndex = 0;
      } else if (event.key === 'ArrowUp') {
        newIndex = currentIndex - 1;
        if (newIndex < 0) newIndex = filteredOptions.length - 1;
      }
      this.setCurrentOption(filteredOptions[newIndex]);
      scrollIntoView(this.currentOption, this.listbox, 'vertical', 'auto');
    }

    // Move cursor
    if (['Home', 'End'].includes(event.key)) {
      // Prevent scrolling
      event.preventDefault();
      if (event.key === 'Home') {
        this.displayInput.setSelectionRange(0, 0);
      } else if (event.key === 'End') {
        this.displayInput.setSelectionRange(this.displayInput.value.length, this.displayInput.value.length);
      }
    }
  };

  private handleDocumentMouseDown = (event: MouseEvent) => {
    // Close when clicking outside of the combobox
    const path = event.composedPath();
    if (this && !path.includes(this)) {
      this.hide();
    }
  };

  private handleLabelClick() {
    this.displayInput.focus();
  }

  private async handleComboboxMouseDown(event: MouseEvent) {
    const path = event.composedPath();
    const isIconButton = path.some(el => el instanceof Element && el.tagName.toLowerCase() === 'syn-icon-button');

    // Ignore disabled controls and clicks on tags (remove buttons)
    if (this.disabled || isIconButton) {
      return;
    }

    event.preventDefault();
    if (!this.open) {
      // if (this.showOnFocus && this.hasFocus) {
      const inputValue = this.displayInput.value;
      this.createComboboxOptionsFromQuery(inputValue);
      await this.updateComplete;
      this.open = !this.open;
    } else {
      this.open = !this.open;
    }
    this.displayInput.focus({ preventScroll: true });
  }

  private handleComboboxKeyDown(event: KeyboardEvent) {
    if (event.key === 'Tab') {
      return;
    }

    event.stopPropagation();
    this.handleDocumentKeyDown(event);
  }

  private handleClearClick(event: MouseEvent) {
    event.stopPropagation();

    if (this.value !== '') {
      this.setSelectedOptions([]);

      this.displayInput.focus({ preventScroll: true });

      // Emit after update
      this.updateComplete.then(() => {
        this.emit('syn-clear');
        this.emit('syn-input');
        this.emit('syn-change');
      });
    }
  }

  private preventLoosingFocus(event: MouseEvent) {
    // Don't lose focus of the input or propagate events
    event.stopPropagation();
    event.preventDefault();
  }

  private handleOptionClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const option = target.closest('syn-option');
    const oldValue = this.value;
    if (option && !option.disabled) {
      this.setSelectedOptions(option);

      // Set focus after updating so the value is announced by screen readers
      this.updateComplete.then(() => this.displayInput.focus({ preventScroll: true }));

      if (this.value !== oldValue) {
        // Emit after updating
        this.updateComplete.then(() => {
          this.emit('syn-input');
          this.emit('syn-change');
        });
      }

      this.hide();
      this.displayInput.focus({ preventScroll: true });
    }
  }

  private getAllFilteredOptions() {
    return [...this.filteredWrapper.querySelectorAll<SynOption>('syn-option')];
  }

  // Sets the current option, which is the option the user is currently interacting with (e.g. via keyboard). Only one
  // option may be "current" at a time.
  private setCurrentOption(option: SynOption | null) {
    const allOptions = this.getAllFilteredOptions();

    // Clear selection
    this.displayInput.removeAttribute('aria-activedescendant');

    allOptions.forEach(el => {
      el.current = false;
      el.setAttribute('aria-selected', 'false');
    });

    // Select the target option
    if (option) {
      this.currentOption = option;
      option.current = true;
      option.setAttribute('aria-selected', 'true');
      this.displayInput.setAttribute('aria-activedescendant', option.id);
    }
  }

  // Sets the selected option(s)
  private setSelectedOptions(option: SynOption | SynOption[]) {
    const allOptions = this.getAllFilteredOptions();
    const newSelectedOptions = Array.isArray(option) ? option : [option];

    // Clear existing selection
    allOptions.forEach(el => (el.selected = false));

    // Set the new selection
    if (newSelectedOptions.length) {
      newSelectedOptions.forEach(el => (el.selected = true));
    }

    // Update selection, value, and display label
    this.selectionChanged();
  }

  // This method must be called whenever the selection changes. It will update the selected options cache, the current
  // value, and the display value
  private selectionChanged() {
    // Update selected options cache
    this.selectedOptions = this.getAllFilteredOptions().filter(el => el.selected);

    // Update the value and display label
    this.value = this.selectedOptions[0]?.value ?? '';
    this.displayLabel = this.selectedOptions[0]?.getTextLabel() ?? '';

    // Update validity
    this.updateComplete.then(() => {
      this.formControlController.updateValidity();
    });
  }

  private handleInvalid(event: Event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }

  @watch('disabled', { waitUntilFirstUpdate: true })
  handleDisabledChange() {
    // Close the listbox when the control is disabled
    if (this.disabled) {
      this.open = false;
      this.handleOpenChange();
    }
  }

  @watch('value', { waitUntilFirstUpdate: true })
  handleValueChange() {
    const allOptions = this.getAllFilteredOptions();
    const value = Array.isArray(this.value) ? this.value : [this.value];

    // Select only the options that match the new value
    this.setSelectedOptions(allOptions.filter(el => value.includes(el.value)));
  }

  @watch('open', { waitUntilFirstUpdate: true })
  async handleOpenChange() {
    if (this.open && !this.disabled && this.filteredWrapper.children.length > 0) {
      // Reset the current option
      this.setCurrentOption(null);

      // Show
      this.emit('syn-show');
      this.addOpenListeners();

      await stopAnimations(this);
      this.listbox.hidden = false;
      this.popup.active = true;

      const { keyframes, options } = getAnimation(this, 'combobox.show', { dir: this.localize.dir() });
      await animateTo(this.popup.popup, keyframes, options);

      this.emit('syn-after-show');
    } else {
      this.displayInput.removeAttribute('aria-activedescendant');
      // Hide
      this.emit('syn-hide');
      this.removeOpenListeners();

      await stopAnimations(this);
      const { keyframes, options } = getAnimation(this, 'combobox.hide', { dir: this.localize.dir() });
      await animateTo(this.popup.popup, keyframes, options);
      this.listbox.hidden = true;
      this.popup.active = false;

      this.emit('syn-after-hide');
    }
  }

  /** Shows the listbox. */
  private async show() {
    if (this.open || this.disabled) {
      this.open = false;
      return undefined;
    }

    this.open = true;
    return waitForEvent(this, 'syn-after-show');
  }

  /** Hides the listbox. */
  private async hide() {
    if (!this.open || this.disabled) {
      this.open = false;
      return undefined;
    }

    this.open = false;
    return waitForEvent(this, 'syn-after-hide');
  }

  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    return this.valueInput.checkValidity();
  }

  /** Gets the associated form, if one exists. */
  getForm(): HTMLFormElement | null {
    return this.formControlController.getForm();
  }

  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    return this.valueInput.reportValidity();
  }

  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(message: string) {
    this.valueInput.setCustomValidity(message);
    this.formControlController.updateValidity();
  }

  /** Sets focus on the control. */
  focus(options?: FocusOptions) {
    this.displayInput.focus(options);
  }

  /** Removes focus from the control. */
  blur() {
    this.displayInput.blur();
  }

  private createComboboxOptionsFromQuery(queryString: string) {
    const allOptions = this.getSlottedOptions();
    this.filteredOptions = [];
    allOptions.forEach((option) => {
      if (this.filter(option, queryString) || queryString === '') {
        const clonedOption = option.cloneNode(true) as SynOption;
        this.filteredOptions.push(clonedOption);
      }
    });
  }

  private async handleInput() {
    const inputValue = this.displayInput.value;
    if (this.threshold <= inputValue.length) {
      this.createComboboxOptionsFromQuery(inputValue);
      await this.updateComplete;
      this.open = this.filteredWrapper.children.length > 0;
    } else {
      this.open = false;
    }
    this.value = inputValue;

    this.formControlController.updateValidity();
    this.emit('syn-input');
  }

  private handleChange() {
    this.value = this.displayInput.value;
    // Update validity
    this.updateComplete.then(() => {
      this.formControlController.updateValidity();
    });
    this.emit('syn-change');
  }

  private getSlottedOptions() {
    return filterOnlyOptions(getAssignedElementsForSlot(this.defaultSlot));
  }

  private slotChange() {
    const slottedOptions = this.getSlottedOptions();
    slottedOptions.forEach((option, index) => {
      option.id = option.id || `syn-combobox-option-${index}`;
    });
  }

  // eslint-disable-next-line complexity
  render() {
    const hasLabelSlot = this.hasSlotController.test('label');
    const hasHelpTextSlot = this.hasSlotController.test('help-text');
    const hasLabel = this.label ? true : !!hasLabelSlot;
    const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
    const hasClearIcon = this.clearable && !this.disabled && this.value.length > 0;
    const isPlaceholderVisible = this.placeholder && this.value.length === 0;

    return html`
      <div
        part="form-control"
        class=${classMap({
          'form-control': true,
          'form-control--small': this.size === 'small',
          'form-control--medium': this.size === 'medium',
          'form-control--large': this.size === 'large',
          'form-control--has-label': hasLabel,
          'form-control--has-help-text': hasHelpText,
        })}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${hasLabel ? 'false' : 'true'}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <syn-popup
            class=${classMap({
              combobox: true,
              'combobox--standard': true,
              'combobox--open': this.open,
              'combobox--disabled': this.disabled,
              'combobox--focused': this.hasFocus,
              'combobox--placeholder-visible': isPlaceholderVisible,
              'combobox--top': this.placement === 'top',
              'combobox--bottom': this.placement === 'bottom',
              'combobox--small': this.size === 'small',
              'combobox--medium': this.size === 'medium',
              'combobox--large': this.size === 'large',
            })}
            placement=${this.placement}
            strategy=${this.hoist ? 'fixed' : 'absolute'}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="combobox__inputs"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="combobox__prefix"></slot>

              <input
                part="display-input"
                class="combobox__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                aria-controls="listbox"
                aria-expanded=${this.open ? 'true' : 'false'}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled ? 'true' : 'false'}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}

                aria-autocomplete="list"
                aria-owns="listbox"
                @input=${this.handleInput}
                @change=${this.handleChange}
              />

              <input
                class="combobox__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value) ? this.value.join(', ') : this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${() => this.focus()}
                @invalid=${this.handleInvalid}
              />
       
              ${hasClearIcon
        ? html`
                    <button
                      part="clear-button"
                      class="combobox__clear"
                      type="button"
                      aria-label=${this.localize.term('clearEntry')}
                      @mousedown=${this.preventLoosingFocus}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <syn-icon name="x-circle-fill" library="system"></syn-icon>
                      </slot>
                    </button>
                  `
        : ''}
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open ? 'true' : 'false'}
              aria-labelledby="label"
              part="listbox"
              class="combobox__listbox"
              tabindex="-1"
              @mousedown=${this.preventLoosingFocus}
              @mouseup=${this.handleOptionClick}
            >
              <div class="listbox__options">
                ${this.options}
              </div>
              <slot @slotchange=${this.slotChange}></slot>      
            </div>
          </syn-popup>
        </div>
        
        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${hasHelpText ? 'false' : 'true'}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
  }
}

setDefaultAnimation('combobox.show', {
  keyframes: [
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1 },
  ],
  options: { duration: 100, easing: 'ease' },
});

setDefaultAnimation('combobox.hide', {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.9 },
  ],
  options: { duration: 100, easing: 'ease' },
});
