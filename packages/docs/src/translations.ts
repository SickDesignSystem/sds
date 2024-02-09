/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable sort-keys */
export const contactForm = {
  description: `
Forms usually contain form components such as checkboxes, selects, input fields, radio buttons, toggle switches and more.
Clear and simple forms help prevent user confusion and incorrect data submission. 
        
Forms should be designed in columns as this improves scanability.
One-column layout is preferred, but use two or more column layouts when there are too many components to fit in an area of the page.

Forms can be simple or complex, and may be presented as dedicated pages, side panels, or dialogs depending on the use case and the situation. 
  `.trim(),
  headline: 'Contact Form',
  subHeadline: 'Please fill in your personal information and let us know how we can help you.',
  topicLabel: 'Topic',
  topicsErrorMessage: 'Please select at least one topic',
  topics: [
    'Inquiry/offer',
    'Orders/invoices',
    'Returns/complaint',
    'Documentation/CAD',
    'Accessories selection',
    'Application review',
    'Commissioning support',
  ],
  requestLabel: 'Question',
  requestContent: 'It is very helpful if the description is as precise as possible to enable us to process your enquiry correctly. When describing applications, please specify the material/dimensions/speed, if applicable.',
  messageLabel: 'Message',
  contactDetailsLabel: 'Contact Details',
  customerNumberLabel: 'Customer Number',
  companyNameLabel: 'Company name',
  nameLabel: 'Your Name',
  addressLabel: 'Address',
  zipLabel: 'Postal Code',
  cityLabel: 'City',
  countryLabel: 'Country',
  countries: [
    'Deutschland',
    'USA',
    'China',
  ],
  referenceContactLabel: 'Your reference contact',
  phoneLabel: 'Phone number',
  faxLabel: 'Fax number',
  emailLabel: 'E-Mail address',
  newsletterLabel: 'Yes, I would like to receive up-to-date and interesting information on solutions with products, systems and services from SICK by email on a regular basis. I can withdraw my consent at any time. To withdraw my consent, I can use the unsubscribe link in every newsletter / email at any time.',
  submitLabel: 'Send',
  requiredFieldInfo: 'Fields marked * are required. Your data will be treated accordingly to',
  requiredFieldLink: 'Data protection',
  requiredFieldEnd: 'law',
};

export const translations = {
  contactForm,
};

/**
 * Get a translation key from the translations object
 * @param key The key to search for
 * @param fallback The fallback that should be displayed if the key cannot be found
 */
export const getTranslation = (key: string, fallback = 'Not found', debug = true) => {
  const data = key
    .split('.')
    .reduce((
      prev: { [x: string]: any; },
      current: string | number,
    ) => prev?.[current], translations);
  return data ?? `${fallback}${debug ? ` (Key: ${key})` : ''}`;
};
