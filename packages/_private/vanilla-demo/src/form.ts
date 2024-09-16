/* eslint-disable no-console */
import type { SynChangeEvent, SynRange } from '@synergy-design-system/components';
import { serialize } from '@synergy-design-system/components';

const setupForm = (formSelector: string) => {
  const form = document.querySelector<HTMLFormElement>(formSelector)!;

  if (!form) {
    return;
  }

  form.addEventListener('syn-change', () => {
    console.log(serialize(form));
  });

  form.addEventListener('submit', (e: SubmitEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const formElm = e.target as HTMLFormElement;
    const isValid = formElm.checkValidity();

    const content = isValid
      ? 'Your data was successfully submitted'
      : 'Your data could not be submitted! Please provide all required information!';

    // eslint-disable-next-line no-alert
    alert(content);
  });
};

export const afterRenderDefaultForm = async () => {
  await Promise.allSettled([
    customElements.whenDefined('syn-button'),
    customElements.whenDefined('syn-range'),
  ]);

  const formatter = new Intl.NumberFormat('de-DE', {
    currency: 'EUR',
    maximumFractionDigits: 0,
    style: 'currency',
  });

  // Add a custom formatter for the donation field
  document
    .querySelector<SynRange>('#donations')!
    .tooltipFormatter = value => formatter.format(value);

  setupForm('#form-demo');
};

export const afterRenderValidateForm = async () => {
  await Promise.allSettled([
    customElements.whenDefined('syn-button'),
    customElements.whenDefined('syn-range'),
  ]);

  // Link the happiness slider to the input field
  const slider = document.querySelector<SynRange>('#happiness')!;
  const input = slider.querySelector('syn-input')!;

  input.setAttribute('value', slider.value!);

  slider.addEventListener('syn-input', (e: SynChangeEvent) => {
    const val = (e.target as SynRange).value!;
    input.value = val;
  });

  input.addEventListener('syn-input', e => {
    const val = (e.target as HTMLInputElement).value;
    slider.value = val;
  });

  setupForm('#form-demo-validate');
};
