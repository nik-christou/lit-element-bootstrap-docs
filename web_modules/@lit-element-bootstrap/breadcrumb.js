import { h as html } from '../common/lit-html-9b6153da.js';
import { css, LitElement } from '../lit-element.js';
import { B as BsContentRebootCss } from '../common/bs-content-reboot.css-c5865ddd.js';

const BsBreadcrumbItemCss = css`

    :host([active]) {
        color: #6c757d;
    }

    :host {
        padding-left: var(--bs-breadcrumb-item-padding-left);
    }

    :host::before {
        display: var(--bs-breadcrumb-item-display);
        padding-right: var(--bs-breadcrumb-item-padding-right);
        color: var(--bs-breadcrumb-item-color);
        text-decoration: var(--bs-breadcrumb-item-text-decoration);
        content: var(--bs-breadcrumb-item-divider);
    }
`;

class BsBreadcrumbItem extends LitElement {
  static get properties() {
    return {
      title: String,
      href: String,
      active: Boolean
    };
  }

  static get styles() {
    return [BsContentRebootCss, BsBreadcrumbItemCss];
  }

  render() {
    return html`
            ${this._selectTemplateToLoad()}
        `;
  }

  constructor() {
    super();
    this.href = '';
    this.title = '';
    this.active = false;
  }

  _selectTemplateToLoad() {
    if (this.active) {
      return html`${this.title}`;
    } else {
      return html`<a href="${this.href}">${this.title}</a>`;
    }
  }

}
if (!window.customElements.get("bs-breadcrumb-item")) window.customElements.define('bs-breadcrumb-item', BsBreadcrumbItem);

const BsBreadcrumbCss = css`

    :host {
        display: flex;
        flex-wrap: wrap;
        padding: 0.75rem 1rem;
        margin-bottom: 1rem;
        list-style: none;
        background-color: #e9ecef;
        border-radius: 0.25rem;
        --divider: var(--breadcrumb-divider, "/");
    }
`;

class BsBreadcrumb extends LitElement {
  static get styles() {
    return BsBreadcrumbCss;
  }

  render() {
    return html`
            <slot></slot>
        `;
  }

  firstUpdated() {
    this._adjustAdjacentBreadcrumbItemCss();
  } // :slotted can only accept simple selectors and not combinators
  // since the adjucent sibling selector cannot be used, we apply css via javascript


  _adjustAdjacentBreadcrumbItemCss() {
    const breadcrumbItems = this._retrieveBreadcrumbItems();

    breadcrumbItems.forEach(breadcrumbItemElement => {
      const previousSibling = breadcrumbItemElement.previousElementSibling;

      if (previousSibling) {
        breadcrumbItemElement.style.setProperty('--bs-breadcrumb-item-padding-left', '0.5rem');
        breadcrumbItemElement.style.setProperty('--bs-breadcrumb-item-display', 'inline-block');
        breadcrumbItemElement.style.setProperty('--bs-breadcrumb-item-padding-right', '0.3rem');
        breadcrumbItemElement.style.setProperty('--bs-breadcrumb-item-color', '#6c757d');
        breadcrumbItemElement.style.setProperty('--bs-breadcrumb-item-text-decoration', 'none');
        breadcrumbItemElement.style.setProperty('--bs-breadcrumb-item-divider', 'var(--divider)');
      } else {
        breadcrumbItemElement.style.setProperty('--bs-breadcrumb-item-text-decoration', 'underline');
      }
    });
  }

  _retrieveBreadcrumbItems() {
    const breadcrumbItems = [];
    const slot = this.shadowRoot.querySelector('slot');
    const slottedNodes = slot.assignedNodes();
    slottedNodes.forEach(slotElement => {
      if (this._isBreadcrumbItemElement(slotElement)) {
        breadcrumbItems.push(slotElement);
      }
    });
    return breadcrumbItems;
  }

  _isBreadcrumbItemElement(element) {
    return element.nodeType === Node.ELEMENT_NODE && (element.localName === 'bs-breadcrumb-item' || element instanceof BsBreadcrumbItem);
  }

}
if (!window.customElements.get("bs-breadcrumb")) window.customElements.define('bs-breadcrumb', BsBreadcrumb);

export { BsBreadcrumb, BsBreadcrumbCss, BsBreadcrumbItem, BsBreadcrumbItemCss };
