import React from 'react';
import type { Meta, StoryObj as Story } from '@storybook/web-components';
import {
  Description,
  Stories,
  Subtitle,
  Title,
} from '@storybook/blocks';
import { html } from 'lit';
import storyBookPreviewConfig from '../../.storybook/preview.js';
import { generateStoryDescription } from '../../src/helpers/component.js';
import { generateFigmaPluginObject } from '../../src/helpers/figma.js';
import {
  createDemoNavigation, createFooter, createHeader,
  createMainContent, createSharedStyles, createSideNav,
  createSidebarConnector,
} from '../../src/shared-components/appshell.js';

const meta: Meta = {
  parameters: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    chromatic: {
      ...storyBookPreviewConfig?.parameters?.chromatic,
      disableSnapshot: false,
    },
    design: generateFigmaPluginObject('8462-8334'),
    docs: {
      description: {
        component: generateStoryDescription('templates', 'application-shell'),
      },
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Stories title="" />
        </>
      ),
      story: {
        iframeHeight: 550,
      },
    },
  },
  title: 'Templates/AppShell',
};
export default meta;

export const SideNavigation: Story = {
  render: () => html`
    <!-- .synergy-demo-application -->
    <div class="synergy-demo-application" id="appshell-side-navigation">
      ${createHeader()}
      
      <!-- .synergy-demo-content -->
      <div class="synergy-demo-content">
        ${createSideNav()}
        ${createMainContent()}
        ${createFooter()}
      </div>
      <!-- /.synergy-demo-content -->
    </div>
    <!-- /.synergy-demo-application -->
    ${createSharedStyles()}
    ${createSidebarConnector('appshell-side-navigation')}
    ${createDemoNavigation('appshell-side-navigation')}
  `,
};

export const SideNavigationShrinkingContent: Story = {
  render: () => html`
    <!-- .synergy-demo-application -->
    <div class="synergy-demo-application" id="appshell-shrink">
      ${createHeader()}
      
      <!-- .synergy-demo-content -->
      <div class="synergy-demo-content">
        ${createSideNav({ noFocusTrapping: true, open: true })}
        <div class="synergy-demo-content-inner">
          ${createMainContent()}
          ${createFooter()}
        </div>
      </div>
      <!-- /.synergy-demo-content -->

    </div>
    <!-- /.synergy-demo-application -->
    ${createSharedStyles()}
    <style>
      #appshell-shrink {
        /**
         * Set this variable to the wanted size of the side-nav
         * Make sure the value stays in sync, otherwise the parts my overlap
         */
        --appshell-shrink-nav-open-width: 25rem;

        syn-side-nav::part(overlay) {
          display: none;
        }

        .synergy-demo-content-inner {
          /**
           * Set the initial margin left. Needed because we
           * create the page with the side-bar open
           */
          margin-left: var(--appshell-shrink-nav-open-width);
        }

        /**
         * Show a transition effect for users that do not have reduced motion enabled
         */
        @media (prefers-reduced-motion: no-preference) {
          .synergy-demo-content-inner {
            transition: margin-left 250ms;
          }
        }
      }
    </style>
    ${createSidebarConnector('appshell-shrink')}
    ${createDemoNavigation('appshell-shrink')}

    <script type="module">
      // This script will make sure the margin of the content area
      // is adjusted when the side-bar is opened or closed.
      // Make sure to use the same value as in the css variable above
      const sideNav = document.getElementById('appshell-shrink').querySelector('syn-side-nav');
      const demoContent = document.getElementById('appshell-shrink').querySelector('.synergy-demo-content-inner');
      sideNav.addEventListener('syn-show', () => {
        demoContent.style.marginLeft = 'var(--appshell-shrink-nav-open-width)';
      });
      sideNav.addEventListener('syn-hide', () => {
        demoContent.style.marginLeft = '0px';
      });
    </script>
  `,
};

export const RailNavigationDesktop: Story = {
  name: 'Rail Navigation (Desktop)',
  parameters: {
  },
  render: () => html`
    <!-- .synergy-demo-application -->
    <div class="synergy-demo-application" id="appshell-rail-desktop">
      ${createHeader()}
      
      <!-- .synergy-demo-content -->
      <div class="synergy-demo-content">
        ${createSideNav({ rail: true })}
        <div class="synergy-demo-content-inner">
          ${createMainContent()}
          ${createFooter()}
        </div>
      </div>
      <!-- /.synergy-demo-content -->

    </div>
    <!-- /.synergy-demo-application -->
    ${createSharedStyles()}
    ${createSidebarConnector('appshell-rail-desktop')}
    ${createDemoNavigation('appshell-rail-desktop')}

    <style>
      #appshell-rail-desktop .synergy-demo-content {
        flex-direction: row;
      }

      #appshell-rail-desktop .synergy-demo-footer {
        container-type: inline-size;
      }

      @media(max-width: 420px) {
        #appshell-rail-desktop syn-side-nav {
          --side-nav-open-width: 306px;
        }
      }

      @container (max-width: 400px) {
        #appshell-rail-desktop .synergy-demo-footer a {
          display: none;
        }
      }
    </style>
  `,
};

export const RailNavigationMobile: Story = {
  ...RailNavigationDesktop,
  name: '↳ Tablet',
  parameters: {
    controls: {
      exclude: ['default'],
    },
    docs: {
      disable: true,
    },
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
};

export const TopNavigation: Story = {
  render: () => html`
    <!-- .synergy-demo-application -->
    <div class="synergy-demo-application" id="appshell-top-navigation">
      ${createHeader({ withMetaNavigation: true })}
      
      <!-- .synergy-demo-content -->
      <div class="synergy-demo-content">
        ${createMainContent()}
        ${createFooter()}
      </div>
      <!-- /.synergy-demo-content -->

    </div>
    <!-- /.synergy-demo-application -->
    ${createSharedStyles()}
    ${createDemoNavigation('appshell-top-navigation', 'syn-prio-nav')}
  `,
};

export const WhiteBackground: Story = {
  render: () => html`
    <!-- .synergy-demo-application -->
    <div class="synergy-demo-application" id="appshell-white-background">
      ${createHeader({ withMetaNavigation: true })}
      
      <!-- .synergy-demo-content -->
      <div class="synergy-demo-content">
        ${createMainContent()}
        ${createFooter()}
      </div>
      <!-- /.synergy-demo-content -->

    </div>
    <!-- /.synergy-demo-application -->
    ${createSharedStyles()}
    ${createDemoNavigation('appshell-white-background', 'syn-prio-nav')}
    <style>
      #appshell-white-background .synergy-demo-content {
        background: var(--syn-color-neutral-0);
      }
    </style>
  `,
};
