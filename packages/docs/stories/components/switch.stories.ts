/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable import/no-relative-packages */

import '../../../components/src/components/switch/switch.js';
import type { Meta, StoryObj } from '@storybook/web-components';
import type { SynButton, SynSwitch } from '@synergy-design-system/components';
import { html } from 'lit';
import { userEvent } from '@storybook/testing-library';
import docsTokens from '../../../tokens/src/figma-tokens/_docs.json';
import {
  generateStoryDescription,
  storybookDefaults,
  storybookHelpers,
  storybookTemplate
} from '../../src/helpers/component.js';

const { args, argTypes } = storybookDefaults('syn-switch');
const { overrideArgs } = storybookHelpers('syn-switch');
const { generateTemplate } = storybookTemplate('syn-switch');

const meta: Meta = {
  component: 'switch',
  args: overrideArgs([
    { name: 'default', type: 'slot', value: 'Option' },
  ]),
  argTypes,
  parameters: {
    docs: {
      description: generateStoryDescription('switch', 'default'),
    },
  },
  title: 'Components/syn-switch',
};
export default meta;

type Story = StoryObj;

export const Default = {
  parameters: {
    docs: {
      description: generateStoryDescription('switch', 'default'),
    },
  },
  render: (args: any) => generateTemplate({ args }),
} as Story;

export const Checked: Story = {
  parameters: {
    docs: {
      description: generateStoryDescription('switch', 'checked'),
    },
  },
  render: () => html`<syn-switch checked>Checked</syn-switch>`,
};

export const Disabled: Story = {
  parameters: {
    docs: {
      description: generateStoryDescription('switch', 'disabled'),
    },
  },
  render: () => html`<syn-switch disabled>Disabled</syn-switch>`,
};

export const Focus: Story = {
  parameters: {
    docs: {
      description: generateStoryDescription('switch', 'focus'),
    },
  },
  play: ({ canvasElement }) => {
    const synSwitch = canvasElement.querySelector('syn-switch') as SynSwitch;
    if (synSwitch) {
      if (synSwitch) {
        synSwitch.focus();
      }
    }
  },
  render: () => html`<syn-switch>Focused</syn-switch>`,
};

export const Invalid: Story = {
  parameters: {
    docs: {
      description: generateStoryDescription('switch', 'invalid'),
    },
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    try {
      const form = canvasElement.querySelector('form');
      const synSwitch = form.querySelector('syn-switch') as SynSwitch;
      const button = form.querySelector('syn-button') as SynButton;

      if (button && synSwitch) {
        await userEvent.click(button);
        button.click();
      }
    } catch (error) {
      console.error('Error in play function:', error);
    }
  },
  render: () => html`
    <form class="custom-validity">
      <syn-switch required>Option</syn-switch>
      <syn-button type="submit" variant="filled">Submit</syn-button>
    </form>
    <style>
    .custom-validity {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    syn-button {
      align-self: flex-start;
    }
    </style>
  `,
};

export const Sizes: Story = {
  parameters: {
    chromatic: {
      disableSnapshot: true,
    },
    docs: {
      description: generateStoryDescription('switch', 'sizes'),
    },
  },
  render: () => html`
  <syn-switch size="small">Small</syn-switch><br>
  <syn-switch size="medium">Medium</syn-switch><br>
  <syn-switch size="large">Large</syn-switch>`,
};
