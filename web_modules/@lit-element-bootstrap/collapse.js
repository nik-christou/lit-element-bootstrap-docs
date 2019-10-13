import { h as html } from '../common/lit-html-9b6153da.js';
import { css, LitElement } from '../lit-element.js';
import { B as BsContentRebootCss } from '../common/bs-content-reboot.css-c5865ddd.js';

const BsAccordionCss = css`

    :host ::slotted(bs-card:first-of-type) {
        --bs-card-border-bottom: 0;
        --bs-card-border-bottom-right-radius: 0;
        --bs-card-border-bottom-left-radius: 0;
    }

    :host ::slotted(bs-card:not(:first-of-type):not(:last-of-type)) {
        --bs-card-border-bottom: 0;
        --bs-card-border-top-right-radius: 0;
        --bs-card-border-top-left-radius: 0;
        --bs-card-border-bottom-right-radius: 0;
        --bs-card-border-bottom-left-radius: 0;
    }

    :host ::slotted(bs-card:last-of-type) {
        --bs-card-border-top-left-radius: 0;
        --bs-card-border-top-right-radius: 0;
    }
`;

class BsAccordion extends LitElement {
  static get properties() {
    return {
      multitab: {
        type: Boolean,
        reflect: true
      }
    };
  }

  static get styles() {
    return [BsContentRebootCss, BsAccordionCss];
  }

  render() {
    return html`
            <slot></slot>
        `;
  }

  constructor() {
    super();
    this.multitab = false;
  }

  firstUpdated() {
    this.addEventListener('bs-collapse-toggle', event => this._toggleCollapsable(event));
  }

  _toggleCollapsable(event) {
    const target = event.detail.target;

    if (!target) {
      return;
    }

    const collapsableElements = this._findAllCollapsableElements();

    if (this.multitab) {
      this._handleMultipleTabsOpen(collapsableElements, target);
    } else {
      this._handleSingleTabOpen(collapsableElements, target);
    }
  }

  _handleMultipleTabsOpen(collapsableElements, targetId) {
    for (let index = 0; index < collapsableElements.length; index++) {
      const collapsableElement = collapsableElements[index];

      if (this._isTargetCollapsableElement(collapsableElement, targetId)) {
        collapsableElement.toggle();
        return;
      }
    }
  }

  _handleSingleTabOpen(collapsableElements, target) {
    for (let index = 0; index < collapsableElements.length; index++) {
      const collapsableElement = collapsableElements[index];

      if (this._isTargetCollapsableElement(collapsableElement, target)) {
        collapsableElement.toggle();
      } else {
        collapsableElement.collapse();
      }
    }
  }

  _isTargetCollapsableElement(collapsableElement, target) {
    const collapsableElementId = collapsableElement.getAttribute('id');
    return collapsableElementId === target;
  }

  _findAllCollapsableElements() {
    const slotElement = this.shadowRoot.querySelector('slot');
    const slotNodes = slotElement.assignedNodes();
    const collapsableElements = [];

    for (let index = 0; index < slotNodes.length; index++) {
      const slotNode = slotNodes[index];

      const collapsableElement = this._findCollapsableElement(slotNode);

      if (collapsableElement) {
        collapsableElements.push(collapsableElement);
      }
    }

    return collapsableElements;
  }

  _findCollapsableElement(slotNode) {
    const slotChildren = slotNode.children;

    if (!slotChildren) {
      return;
    }

    for (let index = 0; index < slotChildren.length; index++) {
      const slotChild = slotChildren[index];

      if (this._isCollapsableElement(slotChild)) {
        return slotChild;
      }
    }
  }

  _isCollapsableElement(element) {
    return element.nodeType === Node.ELEMENT_NODE && element.localName === 'bs-collapsable';
  }

}
if (!window.customElements.get("bs-accordion")) window.customElements.define('bs-accordion', BsAccordion);

const BsCollapsableCss = css`

    :host {
        display: block;
        height: auto;
        transition-property: var(--bs-collapsable-transition-property, height);
        transition-duration: var(--bs-collapsable-transition-duration, 0.35s);
        transition-timing-function: var(--bs-collapsable-transition-timing-function, ease);
    }

    :host([transitioning]) {
        position: relative;
    }

    @media screen and (prefers-reduced-motion: reduce) {
        :host {
            transition: none;
        }
    }
`;

class BsCollapsable extends LitElement {
  static get properties() {
    return {
      expanded: {
        type: Boolean,
        reflect: true
      },
      collapsed: {
        type: Boolean,
        reflect: true
      },
      transitioning: {
        type: Boolean,
        reflect: true
      }
    };
  }

  static get styles() {
    return [BsContentRebootCss, BsCollapsableCss];
  }

  render() {
    return html`
            <slot></slot>
        `;
  }

  constructor() {
    super();
    this.expanded = false;
    this.collapsed = false;
    this.transitioning = false;
  }

  firstUpdated() {
    this.addEventListener('transitionend', event => this._afterCollapsingTransition(event));

    if (this.collapsed) {
      this._collapseCollapsable();
    }
  }

  _afterCollapsingTransition() {
    if (this.expanded) {
      this.shadowRoot.host.style.overflow = 'inherit';
      this.shadowRoot.host.style.height = 'auto';
    }

    this.transitioning = false;
  }

  toggle() {
    this.transitioning = true;

    if (this.expanded) {
      this._collapseCollapsable();
    } else {
      this._expandCollapsable();
    }
  }

  expand() {
    this._expandCollapsable();
  }

  collapse() {
    this._collapseCollapsable();
  }

  isExpanded() {
    return this.expanded;
  }

  _expandCollapsable() {
    this.expanded = true;
    this.collapsed = false;
    this.shadowRoot.host.style.height = this._getSlottedElementsHeight() + 'px';
  }

  _collapseCollapsable() {
    this.collapsed = true;
    this.expanded = false;

    this._updateHeightBeforeCollapse();

    this.shadowRoot.host.style.overflow = 'hidden';
    this.shadowRoot.host.style.height = '0';
  }

  _updateHeightBeforeCollapse() {
    const existingHeight = this.shadowRoot.host.style.height;

    if (!existingHeight || existingHeight === 'auto') {
      this.shadowRoot.host.style.transition = 'none';
      this.shadowRoot.host.style.height = window.getComputedStyle(this.shadowRoot.host).height; //force browser to repaint after we change the height

      window.getComputedStyle(this.shadowRoot.host).height;
      this.shadowRoot.host.style.transitionProperty = this._getTransitionProperty();
      this.shadowRoot.host.style.transitionDuration = this._getTransitionDuration();
      this.shadowRoot.host.style.transitionTimingFunction = this._getTransitionTimingFunction();
    }
  }

  _getTransitionTimingFunction() {
    const transitionTimingFunction = getComputedStyle(this.shadowRoot.host).getPropertyValue('--bs-collapsable-transition-timing-function');

    if (!transitionTimingFunction) {
      return 'ease';
    }

    return transitionTimingFunction;
  }

  _getTransitionDuration() {
    const transitionDuration = getComputedStyle(this.shadowRoot.host).getPropertyValue('--bs-collapsable-transition-duration');

    if (!transitionDuration) {
      return '0.35s';
    }

    return transitionDuration;
  }

  _getTransitionProperty() {
    const transitionProperty = getComputedStyle(this.shadowRoot.host).getPropertyValue('--bs-collapsable-transition-property');

    if (!transitionProperty) {
      return 'height';
    }

    return transitionProperty;
  }

  _getSlottedElementsHeight() {
    const slotNode = this.shadowRoot.querySelector('slot');
    const slottedElements = slotNode.assignedNodes();
    let totalHeight = 0;

    for (let index = 0; index < slottedElements.length; index++) {
      const slotElement = slottedElements[index];

      if (slotElement.nodeType === Node.ELEMENT_NODE) {
        const slotElementHeight = slotElement.offsetHeight;
        const marginTopValue = window.getComputedStyle(slotElement).marginTop;
        const marginBottomValue = window.getComputedStyle(slotElement).marginBottom;
        const marginTop = new Number(marginTopValue.slice(0, marginTopValue.length - 2));
        const marginBottom = new Number(marginBottomValue.slice(0, marginBottomValue.length - 2));
        totalHeight += slotElementHeight + marginTop + marginBottom;
      }
    }

    return totalHeight;
  }

}
if (!window.customElements.get("bs-collapsable")) window.customElements.define('bs-collapsable', BsCollapsable);

const BsCollapseMixin = superClass => class extends superClass {
  firstUpdated() {
    this.addEventListener('bs-collapse-toggle', event => this._toggleCollapsable(event));
    this.addEventListener('bs-collapse-multi-toggle', event => this._multiToggleCollapsable(event));
  }

  _toggleCollapsable(event) {
    const target = event.detail.target;

    if (!target) {
      return;
    }

    const collapsableElement = this.shadowRoot.querySelector(`bs-collapsable#${target}`);

    if (collapsableElement) {
      collapsableElement.toggle();
    }
  }

  _multiToggleCollapsable(event) {
    const multiTarget = event.detail.multiTarget;

    if (!multiTarget) {
      return;
    }

    const collapsableElements = this.shadowRoot.querySelectorAll(`bs-collapsable.${multiTarget}`);

    for (let index = 0; index < collapsableElements.length; index++) {
      const collapsableElement = collapsableElements[index];

      if (collapsableElement) {
        collapsableElement.toggle();
      }
    }
  }

};

class BsCollapseToggle extends LitElement {
  // TODO: replace the target attribute with data-target attribute !!!
  static get properties() {
    return {
      target: {
        type: String,
        reflect: true
      }
    };
  }

  render() {
    return html`
            <slot></slot>
        `;
  }

  constructor() {
    super();
    this.target = '';
  }

  firstUpdated() {
    this.addEventListener('bs-button-click', event => this._handleToggleCollapse(event));
  }

  _handleToggleCollapse() {
    if (!this.target) {
      return;
    }

    const toggleCollapseEvent = new CustomEvent('bs-collapse-toggle', {
      bubbles: true,
      composed: true,
      detail: {
        target: this.target
      }
    });
    this.dispatchEvent(toggleCollapseEvent);
  }

}
if (!window.customElements.get("bs-collapse-toggle")) window.customElements.define('bs-collapse-toggle', BsCollapseToggle);

class BsCollapseMultiToggle extends LitElement {
  // TODO: replace the multitarget attribute with a data-multi-target attribute !!!
  static get properties() {
    return {
      multiTarget: {
        type: String,
        reflect: true
      }
    };
  }

  render() {
    return html`
            <slot></slot>
        `;
  }

  constructor() {
    super();
    this.multiTarget = '';
  }

  firstUpdated() {
    this.addEventListener('bs-button-click', event => this._handleMultiToggleCollapse(event));
  }

  _handleMultiToggleCollapse() {
    if (!this.multiTarget) {
      return;
    }

    const multiToggleCollapseEvent = new CustomEvent('bs-collapse-multi-toggle', {
      bubbles: true,
      composed: true,
      detail: {
        multiTarget: this.multiTarget
      }
    });
    this.dispatchEvent(multiToggleCollapseEvent);
  }

}
if (!window.customElements.get("bs-collapse-multi-toggle")) window.customElements.define('bs-collapse-multi-toggle', BsCollapseMultiToggle);

export { BsAccordion, BsAccordionCss, BsCollapsable, BsCollapsableCss, BsCollapseMixin, BsCollapseMultiToggle, BsCollapseToggle };
