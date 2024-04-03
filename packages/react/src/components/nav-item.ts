// ---------------------------------------------------------------------
// 🔒 AUTOGENERATED @synergy-design-system/react wrappers for @synergy-design-system/components
// Please do not edit this file directly!
// It will get recreated when running pnpm build.
// ---------------------------------------------------------------------
import * as React from 'react';
import { createComponent } from '@lit/react';
import Component from '@synergy-design-system/components/components/nav-item/nav-item.component.js';

import { type EventName } from '@lit/react';
import type {
  SynBlurEvent, SynFocusEvent, SynHideEvent, SynShowEvent,
} from '@synergy-design-system/components';

const tagName = 'syn-nav-item';
Component.define('syn-nav-item');

/**
 * @summary Flexible button / link component that can be used to quickly build navigations.
 * Takes one of 3 forms:
 * - link (overrides all other if 'href' is provided),
 * - button (default),
 * - or accordion (if 'children' slot defined).
 *
 * @status stable
 * @since 1.14.0
 *
 * @dependency syn-divider
 *
 * @event syn-show - Emitted when the navigation item:
 * - has children,
 * - has no href
 * - and is clicked while HTML details are hidden.
 *
 * @event syn-hide - Emitted when the navigation item:
 * - has children,
 * - has no href
 * - and is clicked while HTML details are shown.
 *
 * @event syn-blur - Emitted when the button loses focus.
 * @event syn-focus - Emitted when the button gains focus.
 *
 * @slot - The navigation item's label.
 * @slot prefix - A presentational prefix icon or similar element.
 * @slot suffix - A presentational suffix icon or similar element.
 * @slot children - Slot used to provide nested child navigation elements.
 * If provided, details and summary elements will be used.
 * A chevron will be shown on the right side regardless of the chevron property.
 *
 * @csspart base - The component's base wrapper including children.
 * @csspart children - The wrapper that holds the children
 * @csspart content-wrapper - The component's content wrapper.
 * @csspart content - The component's content excluding children.
 * @csspart current-indicator - The indicator used when current is set to true
 * @csspart chevron - The container that wraps the chevron.
 * @csspart details - The details element rendered when there are children available
 * @csspart divider - The components optional top divider.
 * @csspart prefix - The container that wraps the prefix.
 * @csspart suffix - The container that wraps the suffix.
 *
 * @cssproperty --indentation - Numeric value, indicating the level the item is placed at.
 * @cssproperty --indentation-stepping - The amount of pixels each level will indent.
 * @cssproperty --display-children - Display property of the children. Defaults to "contents"
 */
export const SynNavItem = createComponent({
  displayName: 'SynNavItem',
  elementClass: Component,
  events: {
    onSynShow: 'syn-show' as EventName<SynShowEvent>,
    onSynHide: 'syn-hide' as EventName<SynHideEvent>,
    onSynBlur: 'syn-blur' as EventName<SynBlurEvent>,
    onSynFocus: 'syn-focus' as EventName<SynFocusEvent>,
  },
  react: React,
  tagName,
});

export type { SynShowEvent } from '@synergy-design-system/components';
export type { SynHideEvent } from '@synergy-design-system/components';
export type { SynBlurEvent } from '@synergy-design-system/components';
export type { SynFocusEvent } from '@synergy-design-system/components';
