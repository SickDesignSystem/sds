import type { SynChangeEvent } from '@synergy-design-system/components';
import { serialize } from '@synergy-design-system/components/utilities/form.js';
import { highlightOptionRenderer } from '@synergy-design-system/components/components/combobox/option-renderer.js';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsedSynergyComponentsModule } from '../modules/used-synergy.module';
import { DemoFieldSetModule } from '../modules/demofieldset.module';

const initialData = {
  code: '',
  comment: '',
  date: '',
  email: ['', [
    Validators.required,
    Validators.email,
  ]],
  files: undefined,
  gender: '',
  happiness: '5',
  name: '',
  nationality: '',
  newsletterBeta: false,
  newsletterStandard: false,
  password: 'invalid',
  role: '',
};

@Component({
  selector: 'demo-form-validate',
  standalone: true,
  styleUrls: ['./demoformvalidate.component.css'],
  templateUrl: './demoformvalidate.component.html',
  imports: [
    UsedSynergyComponentsModule,
    DemoFieldSetModule,
    ReactiveFormsModule,
    CommonModule,
  ],
})
export class DemoFormValidate {

  @ViewChild('form') form!: ElementRef<HTMLFormElement>;

  formData!: FormGroup;

  nationalities: string[] = ['American', 'Australian', 'Brazilian', 'British', 'Canadian', 'Chinese', 'Dutch', 'French', 'German', 'Greek', 'Indian', 'Italian', 'Japanese', 'Korean', 'Mexican', 'Russian', 'Spanish', 'Swedish', 'Turkish'];

  highlightOptionRenderer = highlightOptionRenderer;

  private _initFormData() {
    this.formData = this.fb.group({
      ...initialData,
    });
  }

  constructor(private fb: FormBuilder) {
    this._initFormData();
  }

  reset() {
    this._initFormData();
  }

  validateEmailField() {
    const emailField = this.formData.get('email');
    const errors = emailField?.errors;

    // When the field is not changed, don´t show a message
    if (!emailField?.dirty) {
      return '';
    }

    if (!errors) {
      return '';
    }

    if (errors['required']) {
      return 'Email is required';
    }

    if (errors['email']) {
      return 'Invalid email';
    }

    return '';
  }

  submit(form: FormGroup) {
    const isValid = form.valid;

    if (isValid) {
      // eslint-disable-next-line no-alert
      alert('Your data was successfully submitted');
    }
  }

  synChange(_: SynChangeEvent) {
    const form = this.form.nativeElement;

    const normalizedData = serialize(form);

    // Log the normalized data
    console.log(normalizedData);
  }
}
