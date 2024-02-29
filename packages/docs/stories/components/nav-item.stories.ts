/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
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
    <syn-nav-item current>Current Navigation item</syn-nav-item>
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
    docs: {
      description: {
        story: generateStoryDescription('nav-item', 'focus'),
      },
    },
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
    <syn-nav-item>
      Children closed
      <nav slot="children">
        <syn-nav-item>Item 1</syn-nav-item>
        <syn-nav-item>Item 2</syn-nav-item>
      </nav>
    </syn-nav-item>
    <br />
    <syn-nav-item open>
      Children open
      <nav slot="children">
        <syn-nav-item>Item 1</syn-nav-item>
        <syn-nav-item>Item 2</syn-nav-item>
      </nav>
    </syn-nav-item>
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
    <syn-nav-item>Dividing element</syn-nav-item>
    <syn-nav-item divider>Dividing element</syn-nav-item>
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

export const CS: Story = {
  render: () => html`
    <style>
    nav {
      border: 1px solid var(--syn-color-neutral-500);
      width: 275px;
    }
    </style>
    <nav>
      <syn-nav-item>
        <syn-icon name="home" slot="prefix"></syn-icon>
        Home
      </syn-nav-item>
      <syn-nav-item current divider vertical>
        <syn-icon name="settings" slot="prefix"></syn-icon>
        Settings
      </syn-nav-item>
      <syn-nav-item divider vertical>
        <syn-icon name="add_alarm" slot="prefix"></syn-icon>
        Children
        <!-- second-level -->
        <nav slot="children">
          <syn-nav-item divider vertical>
            <syn-icon name="area_chart" slot="prefix"></syn-icon>
            Item 1.1
          </syn-nav-item>
          <syn-nav-item divider vertical>
            <syn-icon name="area_chart" slot="prefix"></syn-icon>
            Item 1.2
          </syn-nav-item>
          <syn-nav-item divider vertical>
            <syn-icon name="area_chart" slot="prefix"></syn-icon>
            Item 1.3
          </syn-nav-item>
        </nav>
        <!-- /second-level -->
      </syn-nav-item>
      <syn-nav-item divider vertical>
        <syn-icon name="area_chart" slot="prefix"></syn-icon>
        Other Option
      </syn-nav-item>
    </nav>
  `,
};

/* eslint-disable sort-keys */
export const Screenshot: Story = generateScreenshotStory({
  Default,
  Labels,
  Current,
  HorizontalNavigation,
  Focus,
  PrefixAndSuffixSlot,
  ChildrenClosedOrOpenVerticalOnly,
  Divider,
  Disabled,
});
/* eslint-enable sort-keys */
