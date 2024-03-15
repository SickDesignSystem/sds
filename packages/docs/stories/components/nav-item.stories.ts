/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { SynNavItem } from '@synergy-design-system/components';
import '../../../components/src/components/nav-item/nav-item.js';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import {
  generateScreenshotStory,
  generateStoryDescription,
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
} from '../../src/helpers/component.js';

const { args: defaultArgs, argTypes } = storybookDefaults('syn-nav-item');
const { overrideArgs } = storybookHelpers('syn-nav-item');
const { generateTemplate } = storybookTemplate('syn-nav-item');

const meta: Meta = {
  args: overrideArgs([
    {
      name: 'default',
      type: 'slot',
      value: 'Label',
    },
  ], defaultArgs),
  argTypes,
  component: 'syn-nav-item',
  parameters: {
    docs: {
      description: {
        component: generateStoryDescription('nav-item', 'default'),
      },
    },
  },
  title: 'Components/syn-nav-item',
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  parameters: {
    controls: {
      disable: false,
    },
    docs: {
      description: {
        story: generateStoryDescription('nav-item', 'default'),
      },
    },
  },
  render: (args: unknown) => generateTemplate({ args }),
};

export const Labels: Story = {
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('nav-item', 'labels'),
      },
    },
  },
  render: () => html`
    <syn-nav-item>This is a label</syn-nav-item>
  `,
};

export const Current: Story = {
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('nav-item', 'current'),
      },
    },
  },
  render: () => html`
    <syn-nav-item current vertical>Current Navigation item</syn-nav-item>
  `,
};

export const HorizontalNavigation: Story = {
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('nav-item', 'nav-horizontal'),
      },
    },
  },
  render: () => html`
    <syn-nav-item current>Horizontal navigation item</syn-nav-item>
  `,
};

export const Focus: Story = {
  parameters: {
    chromatic: {
      disableSnapshot: false,
    },
    docs: {
      description: {
        story: generateStoryDescription('nav-item', 'focus'),
      },
    },
  },
  play: ({ canvasElement }) => {
    const item = canvasElement.querySelector('syn-nav-item') as SynNavItem;
    if (item) {
      item.focus();
    }
  },
  render: () => html`
    <syn-nav-item>Current navigation item</syn-nav-item>
  `,
};

export const PrefixAndSuffixSlot: Story = {
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('nav-item', 'prefix-suffix'),
      },
    },
  },
  render: () => html`
    <style>
    .doc-number-helper {
      align-items: center;
      border: 1px solid var(--syn-color-neutral-400);
      border-radius: var(--syn-border-radius-circle);
      box-sizing: border-box;
      color: var(--syn-color-neutral-950);
      display: inline-flex;
      font-size: var(--syn-font-size-x-small);
      height: var(--syn-font-size-x-large);
      width: var(--syn-font-size-x-large);
      justify-content: center;
    }
    </style>
    <syn-nav-item>
      <syn-icon name="wallpaper" slot="prefix"></syn-icon>
      Item with icon slots
      <syn-icon name="wallpaper" slot="suffix"></syn-icon>
    </syn-nav-item>
    <br />
    <syn-nav-item>
      <span class="doc-number-helper" slot="prefix">1</span>
      Step like item with a number
    </syn-nav-item>
  `,
};

export const ChildrenClosedOrOpenVerticalOnly: Story = {
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('nav-item', 'children'),
      },
    },
  },
  render: () => html`
    <nav style="width: 320px">
      <syn-nav-item vertical>
        Children closed
        <nav slot="children">
          <syn-nav-item vertical>Item 1</syn-nav-item>
          <syn-nav-item vertical divider>Item 2</syn-nav-item>
        </nav>
      </syn-nav-item>
      <br />
      <syn-nav-item open vertical>
        Children open
        <nav slot="children">
          <syn-nav-item vertical>Item 1</syn-nav-item>
          <syn-nav-item vertical divider>Item 2</syn-nav-item>
        </nav>
      </syn-nav-item>
    </nav>
  `,
};

export const Divider: Story = {
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('nav-item', 'divider'),
      },
    },
  },
  render: () => html`
    <nav style="width: 320px;">
      <syn-nav-item vertical>Dividing element</syn-nav-item>
      <syn-nav-item divider vertical>Dividing element</syn-nav-item>
    </nav>
  `,
};

export const Indentation: Story = {
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('nav-item', 'indentation'),
      },
    },
  },
  render: () => html`
    <nav style="width: 320px; gap: 24px; display: flex; flex-direction: column;">
      <syn-nav-item current vertical>Indentation: none</syn-nav-item>
      <syn-nav-item current vertical style="--indentation: 1">Indentation: 1</syn-nav-item>
      <syn-nav-item current vertical style="--indentation: 2">Indentation: 2</syn-nav-item>
    </nav>
  `,
};

export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('nav-item', 'disabled'),
      },
    },
  },
  render: () => html`
    <syn-nav-item disabled>Parent Element</syn-nav-item>
  `,
};

/* eslint-disable sort-keys */
export const Screenshot: Story = generateScreenshotStory({
  Default,
  Labels,
  Current,
  HorizontalNavigation,
  PrefixAndSuffixSlot,
  ChildrenClosedOrOpenVerticalOnly,
  Divider,
  Disabled,
}, 300);
/* eslint-enable sort-keys */
