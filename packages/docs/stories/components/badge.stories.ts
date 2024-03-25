// ---------------------------------------------------------------------
// 🔒 AUTOGENERATED BY VENDORISM
// Removing this comment will prevent it from being managed by it.
// ---------------------------------------------------------------------

/* eslint-disable */

/* eslint-disable import/no-relative-packages */

import '../../../components/src/components/badge/badge';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { storybookDefaults, storybookHelpers, storybookTemplate, generateStoryDescription } from '../../src/helpers/component.js';
const { args, argTypes } = storybookDefaults('syn-badge');
const { overrideArgs } = storybookHelpers('syn-badge');
const { generateTemplate } = storybookTemplate('syn-badge');

const meta: Meta = {
  component: 'badge',
  args,
  argTypes,
  title: 'Components/syn-badge',
  parameters: {
    docs: {
      description: {
        component: generateStoryDescription('badge', 'default'),
      },
    }
  }
};
export default meta;

type Story = StoryObj;

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  },
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('badge', 'default'),
      }
    }
  }
} as Story;


/**
 * Set the variant attribute to change the badge's variant.
 */
export const Variants: Story = {
  render: () => html`<syn-badge variant="primary">Primary</syn-badge>
<syn-badge variant="success">Success</syn-badge>
<syn-badge variant="neutral">Neutral</syn-badge>
<syn-badge variant="warning">Warning</syn-badge>
<syn-badge variant="danger">Danger</syn-badge>`,
};

/**
 * Use the pill attribute to give badges rounded edges.
 */
export const PillBadges: Story = {
  render: () => html`<syn-badge variant="primary" pill>Primary</syn-badge>
<syn-badge variant="success" pill>Success</syn-badge>
<syn-badge variant="neutral" pill>Neutral</syn-badge>
<syn-badge variant="warning" pill>Warning</syn-badge>
<syn-badge variant="danger" pill>Danger</syn-badge>`,
};

/**
 * Use the pulse attribute to draw attention to the badge with a subtle animation.
 */
export const PulsatingBadges: Story = {
  render: () => html`<div class="badge-pulse">
  <syn-badge variant="primary" pill pulse>1</syn-badge>
  <syn-badge variant="success" pill pulse>1</syn-badge>
  <syn-badge variant="neutral" pill pulse>1</syn-badge>
  <syn-badge variant="warning" pill pulse>1</syn-badge>
  <syn-badge variant="danger" pill pulse>1</syn-badge>
</div>

<style>
  .badge-pulse syn-badge:not(:last-of-type) {
    margin-right: 1rem;
  }
</style>`,
};

/**
 * One of the most common use cases for badges is attaching them to buttons. To make this easier, badges will be automatically positioned at the top-right when they're a child of a button.
 */
export const WithButtons: Story = {
  render: () => html`<syn-button>
  Requests
  <syn-badge pill>30</syn-badge>
</syn-button>

<syn-button style="margin-inline-start: 1rem;">
  Warnings
  <syn-badge variant="warning" pill>8</syn-badge>
</syn-button>

<syn-button style="margin-inline-start: 1rem;">
  Errors
  <syn-badge variant="danger" pill>6</syn-badge>
</syn-button>`,
};

/**
 * When including badges in menu items, use the suffix slot to make sure they're aligned correctly.
 */
export const WithMenuItems: Story = {
  render: () => html`<syn-menu style="max-width: 240px;">
  <syn-menu-label>Messages</syn-menu-label>
  <syn-menu-item>Comments <syn-badge slot="suffix" variant="neutral" pill>4</syn-badge></syn-menu-item>
  <syn-menu-item>Replies <syn-badge slot="suffix" variant="neutral" pill>12</syn-badge></syn-menu-item>
</syn-menu>`,
};
