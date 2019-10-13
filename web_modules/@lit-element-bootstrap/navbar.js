import { h as html } from '../common/lit-html-9b6153da.js';
import { css, LitElement } from '../lit-element.js';
import { B as BsContentRebootCss } from '../common/bs-content-reboot.css-c5865ddd.js';
import { B as BsContentTypographyCss } from '../common/bs-content-typography.css-0b50b318.js';
import { B as BsSpacingCss } from '../common/bs-spacing.css-ba183fdb.js';

const BsNavbarBrandLinkCss = css`
    
    :host {
        display: inline-block;
        padding-top: 0.3125rem;
        padding-bottom: 0.3125rem;
        margin-right: 1rem;
        font-size: 1.25rem;
        line-height: inherit;
        white-space: nowrap;
    }

    a {
        color: var(--navbar-brand-color);
    }

    a:hover {
        color: var(--navbar-brand-link-hover-color);
        text-decoration: none;
    }

    a:focus {
        color: var(--navbar-brand-link-focus-color);
        text-decoration: none;
    }
`;

class BsNavbarBrandLink extends LitElement {
  static get properties() {
    return {
      href: String,
      target: String
    };
  }

  static get styles() {
    return [BsContentRebootCss, BsContentTypographyCss, BsSpacingCss, BsNavbarBrandLinkCss];
  }

  render() {
    return html`
            <a href="${this.href}" .target="${this.target}">
                <slot></slot>
            </a>
        `;
  }

  constructor() {
    super();
    this.href = '';
    this.target = '_self';
  }

}
if (!window.customElements.get('bs-navbar-brand-link')) window.customElements.define('bs-navbar-brand-link', BsNavbarBrandLink);

const BsNavbarBrandCss = css`

    :host span {
        display: inline-block;
        padding-top: 0.3125rem;
        padding-bottom: 0.3125rem;
        margin-right: 1rem;
        font-size: 1.25rem;
        line-height: inherit;
        white-space: nowrap;
    }

    span {
        color: var(--navbar-brand-color);
    }
`;

class BsNavbarBrand extends LitElement {
  static get styles() {
    return [BsContentRebootCss, BsContentTypographyCss, BsSpacingCss, BsNavbarBrandCss];
  }

  render() {
    return html`
            <span class="mb-0 h1">
                <slot></slot>
            </span>
        `;
  }

}
if (!window.customElements.get('bs-navbar-brand')) window.customElements.define('bs-navbar-brand', BsNavbarBrand);

const BsNavbarCollapseCss = css`

    :host {
        flex-grow: 1;
        height: 0;
        overflow: hidden;
        align-items: center;
        transition: height 0.35s ease;
        display: var(--navbar-collapse-display);
        flex-basis: var(--navbar-collapse-flex-basis, 100%);
    }

    :host([transitioning]) {
        position: relative;
    }

    @media screen and (prefers-reduced-motion: reduce) {
        :host {
            transition: none;
        }
    }

    @media (min-width: 992px) {

        :host {
            height: auto;
            overflow: inherit;
        }
    }
`;

class BsNavbarCollapse extends LitElement {
  static get properties() {
    return {
      expanded: {
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
    return [BsContentRebootCss, BsNavbarCollapseCss];
  }

  render() {
    return html`
            <slot></slot>
        `;
  }

  constructor() {
    super();
    this.expanded = false;
    this.transitioning = false;
  }

  firstUpdated() {
    this.addEventListener('transitionend', event => this._afterCollapsingTransition(event));
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
      this._collapse();
    } else {
      this._expand();
    }
  }

  _expand() {
    this.expanded = true;
    this.shadowRoot.host.style.height = this._getSlottedElementsHeight() + 'px';
  }

  _collapse() {
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
      this.shadowRoot.host.style.transition = 'height 0.35s ease';
    }
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
if (!window.customElements.get('bs-navbar-collapse')) window.customElements.define('bs-navbar-collapse', BsNavbarCollapse);

const BsNavbarDarkColorCss = css`
    
    :host([navbar-dark]) {
        
        --navbar-brand-color: #fff;
        --navbar-brand-link-hover-color: #fff;
        --navbar-brand-link-focus-color: #fff;
        
        --nav-link-color: rgba(255, 255, 255, 0.5);
        --nav-link-active-color: #fff;
        --nav-link-disabled-color: rgba(255, 255, 255, 0.25);
        --nav-link-hover-color: rgba(255, 255, 255, 0.75);
        --nav-link-focus-color: rgba(255, 255, 255, 0.75);

        --dropdown-nav-link-color: rgba(0,0,0, 0.5);
        --dropdown-nav-link-hover-border-color: transparent;
        --dropdown-nav-link-hover-color: rgba(0, 0, 0, 0.7);
        
        --navbar-toggler-color: rgba(255, 255, 255, 0.5);
        --navbar-toggler-border-color: rgba(255, 255, 255, 0.1);

        --navbar-toggler-icon-background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox=%270 0 30 30%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath stroke=%27rgba%28255, 255, 255, 0.5%29%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3E%3C/svg%3E");
        
        --navbar-text-color: rgba(255, 255, 255, 0.5);
        --navbar-text-link-color: #fff;
        --navbar-text-link-hover-color: color: #fff;
        --navbar-text-link-focus-color: color: #fff;
    }
`;

const BsNavbarExpandLargeCss = css`
    
    @media (max-width: 991.98px) {
        
        :host([expand-lg]) ::slotted(bs-container) {
            padding-right: 0;
            padding-left: 0;
        }
    }

    :host([expand-lg]) {
        --nav-link-padding-left: 0;
        --nav-link-padding-right: 0;
        --nav-link-active-hover-color: rgba(0,0,0, 0.9);
        
        --dropdown-nav-link-padding-top: 0.5rem;
        --dropdown-nav-link-padding-bottom: 0.5rem;
        --dropdown-nav-link-padding-left: 0;
        --dropdown-nav-link-padding-right: 0;
        
        --dropdown-display: block;
        --dropdown-menu-position: static;
        --dropdown-menu-float: none;
        --dropdown-menu-display: none;
    }

    @media (min-width: 992px) {
        
        :host([expand-lg]) {
            flex-flow: row nowrap;
            justify-content: flex-start;
            
            --navbar-nav-flex-direction: row;
            --nav-link-padding-left: 0.5rem;
            --nav-link-padding-right: 0.5rem;
            --nav-link-active-hover-color: rgba(0,0,0, 0.9);
            
            --dropdown-nav-link-padding-left: 0.5rem;
            --dropdown-nav-link-padding-right: 0.5rem;

            --navbar-collapse-flex-basis: auto;
            --navbar-collapse-ms-flex-preferred-size: auto;
            --navbar-collapse-display: flex !important;

            --dropdown-display: flex;
            --dropdown-menu-position: absolute;
            --dropdown-menu-float: left;
            --dropdown-menu-display: block;
        }
        
        :host([expand-lg]) ::slotted(bs-container) {
            flex-wrap: nowrap;
        }
        
        :host([expand-lg]) ::slotted(bs-navbar-toggler) {
            display: none;
        }
    }
`;

const BsNavbarExpandMediumCss = css`
    
    @media (max-width: 767.98px) {
        
        :host([expand-md]) ::slotted(bs-container) {
            padding-right: 0;
            padding-left: 0;
        }
    }

    :host([expand-md]) {
        --nav-link-padding-left: 0;
        --nav-link-padding-right: 0;
        --nav-link-active-hover-color: rgba(0,0,0, 0.9);
        
        --dropdown-nav-link-padding-top: 0.5rem;
        --dropdown-nav-link-padding-bottom: 0.5rem;
        --dropdown-nav-link-padding-left: 0;
        --dropdown-nav-link-padding-right: 0;
        
        --dropdown-display: block;
        --dropdown-menu-position: static;
        --dropdown-menu-float: none;
        --dropdown-menu-display: none;
    }

    @media (min-width: 768px) {

        :host([expand-md]) {
            flex-flow: row nowrap;
            justify-content: flex-start;

            --navbar-nav-flex-direction: row;
            --nav-link-padding-left: 0.5rem;
            --nav-link-padding-right: 0.5rem;
            --nav-link-active-hover-color: rgba(0,0,0, 0.9);
            
            --dropdown-nav-link-padding-left: 0.5rem;
            --dropdown-nav-link-padding-right: 0.5rem;
            
            --navbar-collapse-flex-basis: auto;
            --navbar-collapse-ms-flex-preferred-size: auto;
            --navbar-collapse-display: flex !important;

            --dropdown-display: flex;
            --dropdown-menu-position: absolute;
            --dropdown-menu-float: left;
            --dropdown-menu-display: block;
        }

        :host([expand-md]) ::slotted(bs-container) {
            flex-wrap: nowrap;
        }
        
        :host([expand-md]) ::slotted(bs-navbar-toggler) {
            display: none;
        }
    }
`;

const BsNavbarExpandSmallCss = css`
    
    @media (max-width: 575.98px) {
        
        :host([expand-sm]) ::slotted(bs-container) {
            padding-right: 0;
            padding-left: 0;
        }
    }

    :host([expand-sm]) {
        --nav-link-padding-left: 0;
        --nav-link-padding-right: 0;
        --nav-link-active-hover-color: rgba(0,0,0, 0.9);
        
        --dropdown-nav-link-padding-top: 0.5rem;
        --dropdown-nav-link-padding-bottom: 0.5rem;
        --dropdown-nav-link-padding-left: 0;
        --dropdown-nav-link-padding-right: 0;
        
        --dropdown-display: block;
        --dropdown-menu-position: static;
        --dropdown-menu-float: none;
        --dropdown-menu-display: none;
    }

    @media (min-width: 576px) {
    
        :host([expand-sm]) {
            flex-flow: row nowrap;
            justify-content: flex-start;
            
            --navbar-nav-flex-direction: row;
            --nav-link-padding-left: 0.5rem;
            --nav-link-padding-right: 0.5rem;
            --nav-link-active-hover-color: rgba(0,0,0, 0.9);
            
            --navbar-collapse-flex-basis: auto;
            --navbar-collapse-ms-flex-preferred-size: auto;
            --navbar-collapse-display: flex !important;
            
            --dropdown-display: flex;
            --dropdown-menu-position: absolute;
            --dropdown-menu-float: left;
            --dropdown-menu-display: block;
        }
        
        :host([expand-sm]) ::slotted(bs-container) {
            flex-wrap: nowrap;
        }
        
        :host([expand-lg]) ::slotted(bs-navbar-toggler) {
            display: none;
        }
    }
`;

const BsNavbarExpandExtraSmallCss = css`
    
    :host([expand-xs]) ::slotted(bs-container) {
        padding-right: 0;
        padding-left: 0;
    }
    
    :host([expand-xs]) {
        --nav-link-padding-left: 0;
        --nav-link-padding-right: 0;
        --nav-link-active-hover-color: rgba(0,0,0, 0.9);
        
        --dropdown-nav-link-padding-top: 0.5rem;
        --dropdown-nav-link-padding-bottom: 0.5rem;
        --dropdown-nav-link-padding-left: 0;
        --dropdown-nav-link-padding-right: 0;
        
        --dropdown-display: block;
        --dropdown-menu-position: static;
        --dropdown-menu-float: none;
        --dropdown-menu-display: none;

        -ms-flex-flow: row nowrap;
        flex-flow: row nowrap;
        -ms-flex-pack: start;
        justify-content: flex-start;
        
        --navbar-nav-flex-direction: row;
        --nav-link-padding-left: 0.5rem;
        --nav-link-padding-right: 0.5rem;
        
        --dropdown-nav-link-padding-left: 0.5rem;
        --dropdown-nav-link-padding-right: 0.5rem;

        --navbar-collapse-flex-basis: auto;
        --navbar-collapse-ms-flex-preferred-size: auto;
        --navbar-collapse-display: flex !important;
        
        --dropdown-display: flex;
        --dropdown-menu-position: absolute;
        --dropdown-menu-float: left;
        --dropdown-menu-display: block;
    }
    
    :host([expand-xs]) ::slotted(bs-container) {
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
    }
    
    :host([expand-xs]) ::slotted(bs-navbar-toggler) {
        display: none;
    }
`;

const BsNavbarLightColorCss = css`
    
    :host([navbar-light]) {
        
        --navbar-brand-color: rgba(0, 0, 0, 0.9);
        --navbar-brand-link-hover-color: rgba(0, 0, 0, 0.9);
        --navbar-brand-link-focus-color: rgba(0, 0, 0, 0.9);
        
        --nav-link-active-color: rgba(0,0,0, 0.9);
        --nav-link-color: rgba(0,0,0, 0.5);
        --nav-link-disabled-color: rgba(0, 0, 0, 0.3);
        --nav-link-hover-color: rgba(0, 0, 0, 0.7);

        --dropdown-nav-link-color: rgba(0,0,0, 0.5);
        --dropdown-nav-link-hover-border-color: transparent;
        --dropdown-nav-link-hover-color: rgba(0, 0, 0, 0.7);
        
        --navbar-toggler-color: rgba(0, 0, 0, 0.5);
        --navbar-toggler-border-color: rgba(0, 0, 0, 0.1);

        --navbar-toggler-icon-background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox=%270 0 30 30%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath stroke=%27rgba%280,0,0,0.5%29%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3E%3C/svg%3E");
        
        --navbar-text-color: rgba(0, 0, 0, 0.5);
        --navbar-text-link-color: rgba(0, 0, 0, 0.9);
        --navbar-text-link-hover-color: rgba(0, 0, 0, 0.9);
        --navbar-text-link-focus-color: rgba(0, 0, 0, 0.9);
    }
`;

const BsNavbarLinkCss = css`

    :host {
        display: inline-block;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
    }

    a {
        color: var(--navbar-text-link-color, rgba(0, 0, 0, 0.9));
    }

    a:hover {
        color: var(--navbar-text-link-hover-color, rgba(0, 0, 0, 0.9));
    }

    a:focus {
        color: var(--navbar-text-link-focus-color, rgba(0, 0, 0, 0.9));
    }
`;

class BsNavbarLink extends LitElement {
  static get properties() {
    return {
      href: String,
      target: String
    };
  }

  static get styles() {
    return [BsContentRebootCss, BsNavbarLinkCss];
  }

  render() {
    return html`
            <a href="${this.target}" .target="${this.target}">
                <slot></slot>
            </a>
        `;
  }

  constructor() {
    super();
    this.href = '';
    this.target = '_self';
  }

}
if (!window.customElements.get('bs-navbar-link')) window.customElements.define('bs-navbar-link', BsNavbarLink);

const BsNavbarNavCss = css`

    :host {
        display: flex;
        flex-direction: var(--navbar-nav-flex-direction, column);
        padding-left: 0;
        margin-bottom: 0;
        list-style: none;
    }

    :host ::slotted(bs-dropdown) {
        position: static;
        float: none;
    }
`;

class BsNavbarNav extends LitElement {
  static get styles() {
    return [BsContentRebootCss, BsNavbarNavCss];
  }

  render() {
    return html`
            <slot></slot>
        `;
  }

}
if (!window.customElements.get('bs-navbar-nav')) window.customElements.define('bs-navbar-nav', BsNavbarNav);

const BsNavbarTextCss = css`

    :host {
        display: inline-block;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
    }

    span {
        color: var(--navbar-text-color, rgba(0, 0, 0, 0.5));
    }
`;

class BsNavbarText extends LitElement {
  static get styles() {
    return [BsContentRebootCss, BsNavbarTextCss];
  }

  render() {
    return html`
            <span><slot></slot></span>
        `;
  }

}
if (!window.customElements.get('bs-navbar-text')) window.customElements.define('bs-navbar-text', BsNavbarText);

const BsNavbarTogglerIconCss = css`

    :host {
        display: inline-block;
        width: 1.5em;
        height: 1.5em;
        vertical-align: middle;
        content: "";
        background: no-repeat center center;
        background-size: 100% 100%;
        background-image: var(--navbar-toggler-icon-background-image);
        font-size: 1.25rem;
        line-height: 1;
        color: rgba(0,0,0,0.5);
    }
`;

class BsNavbarTogglerIcon extends LitElement {
  static get styles() {
    return [BsContentRebootCss, BsNavbarTogglerIconCss];
  }

}
if (!window.customElements.get('bs-navbar-toggler-icon')) window.customElements.define('bs-navbar-toggler-icon', BsNavbarTogglerIcon);

const BsNavbarTogglerCss = css`

    button {
        padding: var(--navbar-toggler-padding, 0.25rem 0.75rem);
        font-size: var(--navbar-toggler-font-size, 1.25rem);
        line-height: 1;
        border: var(--navbar-toggler-border, 1px solid transparent);
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;
        border-bottom-left-radius: 0.25rem;
        background-color: transparent;
        color: var(--navbar-toggler-color);
        border-color: var(--navbar-toggler-border-color);
    }

    button:focus {
        text-decoration: none;
        outline: var(--navbar-toggler-outline-focus);
    }

    button:hover {
        text-decoration: none;
    }

    button:not(:disabled):not(.disabled)  {
        cursor: pointer;
    }
`;

class BsNavbarToggler extends LitElement {
  static get styles() {
    return [BsContentRebootCss, BsNavbarTogglerCss];
  }

  render() {
    return html`
            <button>
                <slot></slot>
            </button>
        `;
  }

  firstUpdated() {
    const toggleButton = this.shadowRoot.querySelector('button');
    toggleButton.addEventListener('click', event => this._handleToggleButtonClickEvent(event));
  }

  _handleToggleButtonClickEvent(event) {
    event.stopPropagation();
    event.preventDefault();
    const btnClickedEvent = new CustomEvent('bs-navbar-toggler-click', {
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(btnClickedEvent);
  }

}
if (!window.customElements.get('bs-navbar-toggler')) window.customElements.define('bs-navbar-toggler', BsNavbarToggler);

const BsNavbarCss = css`

    :host {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        padding: 0.5rem 1rem;
    }

    :host ::slotted(bs-container) {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
    }
`;

class BsNavbar extends LitElement {
  static get styles() {
    return [BsContentRebootCss, BsNavbarExpandLargeCss, BsNavbarLightColorCss, BsNavbarDarkColorCss, BsNavbarCss];
  }

  render() {
    return html`
            <slot></slot>
        `;
  }

  firstUpdated() {
    this.addEventListener('bs-navbar-toggler-click', () => this._handleToggleEvent());
  }

  _handleToggleEvent() {
    const navbarCollapseElement = this._findCollapsableElement();

    if (navbarCollapseElement) {
      navbarCollapseElement.toggle();
    }
  }

  _retrieveSlotAssignedNodes() {
    const slotElement = this.shadowRoot.querySelector('slot');
    const assignedNodes = slotElement.assignedNodes();
    return assignedNodes;
  }

  _findCollapsableElement() {
    const assignedNodes = this._retrieveSlotAssignedNodes();

    for (let index = 0; index < assignedNodes.length; index++) {
      const slotItem = assignedNodes[index];

      if (this._isNavbarCollapse(slotItem)) {
        return slotItem;
      }
    }
  }

  _isNavbarCollapse(element) {
    return element.nodeType === Node.ELEMENT_NODE && element.localName === 'bs-navbar-collapse';
  }

}
if (!window.customElements.get('bs-navbar')) window.customElements.define('bs-navbar', BsNavbar);

export { BsNavbar, BsNavbarBrand, BsNavbarBrandCss, BsNavbarBrandLink, BsNavbarBrandLinkCss, BsNavbarCollapse, BsNavbarCollapseCss, BsNavbarCss, BsNavbarDarkColorCss, BsNavbarExpandExtraSmallCss, BsNavbarExpandLargeCss, BsNavbarExpandMediumCss, BsNavbarExpandSmallCss, BsNavbarLightColorCss, BsNavbarLink, BsNavbarLinkCss, BsNavbarNav, BsNavbarNavCss, BsNavbarText, BsNavbarTextCss, BsNavbarToggler, BsNavbarTogglerCss, BsNavbarTogglerIcon, BsNavbarTogglerIconCss };
