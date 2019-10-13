import { h as html } from '../common/lit-html-9b6153da.js';
import { css, LitElement } from '../lit-element.js';
import { B as BsContentRebootCss } from '../common/bs-content-reboot.css-c5865ddd.js';

const BsNavCss = css`

    :host {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        padding-left: 0;
        margin-bottom: 0;
        list-style: none;
    }

    :host([fill]) ::slotted(bs-nav-item) {
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        text-align: center;
    }

    :host([justified]) ::slotted(bs-nav-item) {
        -ms-flex-preferred-size: 0;
        flex-basis: 0;
        -ms-flex-positive: 1;
        flex-grow: 1;
        text-align: center;
    }

    :host([tabs]) {

        margin-right: var(--bs-nav-margin-right);
        margin-bottom: var(--bs-nav-margin-bottom);
        margin-left: var(--bs-nav-margin-left);
        border-bottom: var(--bs-nav-border-bottom, 1px solid #dee2e6);

        --nav-item-margin-bottom: -1px;
        --nav-link-background-color: #fff;
        --nav-link-border: 1px solid transparent;
        --nav-link-active-color: #495057;
        --nav-link-active-border-top-left-radius: 0.25rem;
        --nav-link-active-border-top-right-radius: 0.25rem;
        --nav-link-active-border-color: #dee2e6 #dee2e6 #fff;

        --dropdown-nav-link-hover-color: #495057;
        --dropdown-nav-link-padding-bottom: 0.6rem;
        --dropdown-nav-link-active-color: #495057;
        --dropdown-nav-link-active-hover-color: #495057;
        --dropdown-nav-link-active-focus-color: #495057;

        --dropdown-menu-down-margin-top: -1px;
        --dropdown-menu-border-top-left-radius: 0;
        --dropdown-menu-border-top-right-radius: 0;
    }

    :host([pills]) {

        margin-right: var(--bs-nav-margin-right);
        margin-left: var(--bs-nav-margin-left);

        --nav-link-active-color: #fff;
        --nav-link-active-hover-color: #fff;
        --nav-link-active-background-color: #007bff;
        --nav-link-border-radius: 0.25rem;
        --nav-link-active-border-bottom-left-radius: 0.25rem;
        --nav-link-active-border-bottom-right-radius: 0.25rem;
        --nav-link-active-border-top-left-radius: 0.25rem;
        --nav-link-active-border-top-right-radius: 0.25rem;

        --dropdown-nav-link-padding-top: 0.5rem;
        --dropdown-nav-link-padding-bottom: 0.5rem;
        --dropdown-nav-link-padding-left: 1rem;
        --dropdown-nav-link-padding-right: 1rem;
        --dropdown-nav-link-hover-color: #0056b3;
        --dropdown-nav-link-active-color: #fff;
        --dropdown-nav-link-active-hover-color: #fff;
        --dropdown-nav-link-active-focus-color: #fff;
        --dropdown-nav-link-active-background-color: #007bff;
        --dropdown-nav-link-hover-border-color: transparent;

        --dropdown-menu-border-top-left-radius: 0.25rem;
        --dropdown-menu-border-top-right-radius: 0.25rem;
    }
`;

class BsNav extends LitElement {
  static get styles() {
    return [BsContentRebootCss, BsNavCss];
  }

  render() {
    return html`
            <slot></slot>
        `;
  }

}
if (!window.customElements.get('bs-nav')) window.customElements.define('bs-nav', BsNav);

const BsNavLinkCss = css`

    :host {
        display: block;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        padding-right: var(--nav-link-padding-right, 1rem);
        padding-left: var(--nav-link-padding-left, 1rem);
        border: var(--nav-link-border);
        border-radius: var(--nav-link-border-radius);
    }

    :host(:hover),
    :host(:focus) {
        border-color: #e9ecef #e9ecef #dee2e6;
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
    }

    a {
        color: var(--nav-link-color, #007bff);
    }

    :host(:hover) a {
        color: var(--nav-link-hover-color, #0056b3);
        text-decoration: none;
    }

    :host(:focus) a {
        color: var(--nav-link-focus-color);
        text-decoration: none;
    }

    :host([disabled]) a {
        color: var(--nav-link-disabled-color, #6c757d);
    }

    :host([disabled]) {
        background-color: transparent;
        border-color: transparent;
    }

    :host([active]) a {
        color: var(--nav-link-active-color, #007bff);
    }

    :host([active]) a:hover {
        text-decoration: none;
        color: var(--nav-link-active-hover-color, #0056b3);
    }

    :host([active]) {
        background-color: var(--nav-link-active-background-color);
        border-color: var(--nav-link-active-border-color);
        border-bottom-left-radius: var(--nav-link-active-border-bottom-left-radius);
        border-bottom-right-radius: var(--nav-link-active-border-bottom-right-radius);
        border-top-left-radius: var(--nav-link-active-border-top-left-radius);
        border-top-right-radius: var(--nav-link-active-border-top-right-radius);
    }
`;

class BsNavLink extends LitElement {
  static get properties() {
    return {
      index: Number,
      href: String,
      target: String,
      active: {
        type: Boolean,
        reflect: true
      },
      disabled: {
        type: Boolean,
        reflect: true
      }
    };
  }

  static get styles() {
    return [BsContentRebootCss, BsNavLinkCss];
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
    this.index = -1;
    this.href = '';
    this.target = '_self';
    this.active = false;
    this.disabled = false;
  }

  firstUpdated() {
    const navLink = this.shadowRoot.querySelector('a');
    navLink.addEventListener('click', event => this._handleClickEvent(event));
  }

  _handleClickEvent(event) {
    if (!this.href) {
      event.preventDefault();
      return;
    }

    if (this.disabled) {
      event.preventDefault();
      return;
    }

    const navLinkClickEvent = new CustomEvent('nav-link', {
      bubbles: true,
      composed: true,
      detail: {
        index: this.index
      }
    });
    this.dispatchEvent(navLinkClickEvent);
  }

}
if (!window.customElements.get('bs-nav-link')) window.customElements.define('bs-nav-link', BsNavLink);

const BsNavItemCss = css`

    :host {
        margin-bottom: var(--nav-item-margin-bottom);
    }

    :host([show]) {
        --dropdown-nav-link-color: #fff;
        --dropdown-nav-link-hover-color: #fff;
        --dropdown-nav-link-background-color: #007bff;
    }
`;

class BsNavItem extends LitElement {
  static get properties() {
    return {
      show: {
        type: Boolean,
        reflect: true
      }
    };
  }

  static get styles() {
    return [BsContentRebootCss, BsNavItemCss];
  }

  render() {
    return html`
            <slot></slot>
        `;
  }

  constructor() {
    super();
    this.show = false;
  }

  firstUpdated() {
    this.addEventListener('bs-button-click', () => this._handleDropdownToggleClick());
    this.addEventListener('bs-button-focusout', () => this._handleDropdownToggleFocusOut());
  }

  _handleDropdownToggleClick() {
    const navParentElement = this.parentElement;

    if (navParentElement.hasAttribute('pills')) {
      this.show = !this.show;
    }
  }

  _handleDropdownToggleFocusOut() {
    const navParentElement = this.parentElement;

    if (navParentElement.hasAttribute('pills')) {
      if (this.show) {
        this.show = !this.show;
      }
    }
  }

}
if (!window.customElements.get('bs-nav-item')) window.customElements.define('bs-nav-item', BsNavItem);

export { BsNav, BsNavItem, BsNavLink };
