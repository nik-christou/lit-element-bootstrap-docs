import { h as html } from '../common/lit-html-9b6153da.js';
import { css, LitElement } from '../lit-element.js';
import { B as BsContentRebootCss } from '../common/bs-content-reboot.css-c5865ddd.js';

const BsButtonGroupCss = css`
    
    :host {
        position: relative;
        display: inline-flex;
        vertical-align: middle;
    }

    :host ::slotted(bs-button),
    :host ::slotted(bs-link-button),
    :host ::slotted(bs-input-button),
    :host ::slotted(bs-dropdown) {
        --bs-button-position: relative;
        --bs-button-flex: 0 1 auto;
        --bs-button-hover-z-index: 1;
        --bs-button-focus-z-index: 1;
        --bs-button-active-z-index: 1;
    }

    :host ::slotted(bs-button:first-child),
    :host ::slotted(bs-link-button:first-child),
    :host ::slotted(bs-input-button:first-child) {
        --bs-button-margin-left: 0;
    }
`;

const BsButtonGroupSmallCss = css`
    
    :host([small]) ::slotted(bs-button),
    :host([small]) ::slotted(bs-link-button),
    :host([small]) ::slotted(bs-input-button),
    :host([small]) ::slotted(bs-dropdown) {
        --bs-button-padding-top: 0.25rem;
        --bs-button-padding-bottom: 0.25rem;
        --bs-button-padding-left: 0.5rem;
        --bs-button-padding-right: 0.5rem;
        --bs-button-font-size: 0.875rem;
        --bs-button-line-height: 1.5;
        --bs-button-border-top-left-radius: 0.2rem;
        --bs-button-border-bottom-left-radius: 0.2rem;
        --bs-button-border-top-right-radius: 0.2rem;
        --bs-button-border-bottom-right-radius: 0.2rem;
    }
`;

const BsButtonGroupLargeCss = css`
    
    :host([large]) ::slotted(bs-button),
    :host([large]) ::slotted(bs-link-button),
    :host([large]) ::slotted(bs-input-button),
    :host([large]) ::slotted(bs-dropdown) {
        --bs-button-padding-top: 0.5rem;
        --bs-button-padding-bottom: 0.5rem;
        --bs-button-padding-left: 1rem;
        --bs-button-padding-right: 1rem;
        --bs-button-font-size: 1.25rem;
        --bs-button-line-height: 1.5;
        --bs-button-border-top-left-radius: 0.3rem;
        --bs-button-border-bottom-left-radius: 0.3rem;
        --bs-button-border-top-right-radius: 0.3rem;
        --bs-button-border-bottom-right-radius: 0.3rem;
    }
`;

const BsButtonGroupVerticalCss = css`
    
    :host([vertical]) {
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }

    :host([vertical]) ::slotted(bs-button),
    :host([vertical]) ::slotted(bs-link-button),
    :host([vertical]) ::slotted(bs-input-button),
    :host([vertical]) ::slotted(bs-dropdown) {
        --bs-button-width: 100%;
    }

    :host([vertical]) ::slotted(bs-button:not(:last-child):not(bs-dropdown)),
    :host([vertical]) ::slotted(bs-link-button:not(:last-child):not(bs-dropdown)),
    :host([vertical]) ::slotted(bs-input-button:not(:last-child):not(bs-dropdown)),
    :host([vertical]) ::slotted(bs-button-group:not(:last-child)) {
        --bs-button-border-bottom-left-radius: 0;
        --bs-button-border-bottom-right-radius: 0;
    }
    
    :host([vertical]) ::slotted(bs-button:not(:first-child)),
    :host([vertical]) ::slotted(bs-link-button:not(:first-child)),
    :host([vertical]) ::slotted(bs-input-button:not(:first-child)),
    :host([vertical]) ::slotted(bs-button-group:not(:first-child)) {
        --bs-button-border-top-left-radius: 0;
        --bs-button-border-top-right-radius: 0;
    }
`;

const BsButtonGroupHorizontalCss = css`

    :host([horizontal]) ::slotted(bs-button:not(:last-child):not(bs-dropdown)),
    :host([horizontal]) ::slotted(bs-link-button:not(:last-child):not(bs-dropdown)),
    :host([horizontal]) ::slotted(bs-input-button:not(:last-child):not(bs-dropdown)) {
        --bs-button-border-top-right-radius: 0;
        --bs-button-border-bottom-right-radius: 0;
    }

    :host([horizontal]) ::slotted(bs-button:not(:first-child)),
    :host([horizontal]) ::slotted(bs-link-button:not(:first-child)),
    :host([horizontal]) ::slotted(bs-input-button:not(:first-child)),
    :host([horizontal]) ::slotted(bs-button-group:not(:first-child)) {
        --bs-button-border-top-left-radius: 0;
        --bs-button-border-bottom-left-radius: 0;
    }
`;

class BsButtonGroup extends LitElement {
  static get properties() {
    return {
      small: {
        type: Boolean,
        reflect: true
      },
      large: {
        type: Boolean,
        reflect: true
      },
      vertical: {
        type: Boolean,
        reflect: true
      },
      horizontal: {
        type: Boolean,
        reflect: true
      }
    };
  }

  static get styles() {
    return [BsContentRebootCss, BsButtonGroupHorizontalCss, BsButtonGroupVerticalCss, BsButtonGroupLargeCss, BsButtonGroupSmallCss, BsButtonGroupCss];
  }

  render() {
    return html`
            <slot></slot>
        `;
  }

  constructor() {
    super();
    this.small = false;
    this.large = false;
    this.vertical = false;
    this.horizontal = false;
  }

  firstUpdated() {
    this._adjustMarginOnMultipleSlottedElements();
  } // :slotted can only accept simple selectors and not combinators
  // since the adjucent sibling selector cannot be used, we apply css via javascript


  _adjustMarginOnMultipleSlottedElements() {
    const slotNode = this.shadowRoot.querySelector('slot');
    const slottedNodes = slotNode.assignedNodes();
    slottedNodes.forEach(slotElement => {
      this._applyCssForButtonElement(slotElement);

      this._applyCssForButtonGroupElement(slotElement);
    });
  }

  _applyCssForButtonElement(slotElement) {
    if (this._isButtonElement(slotElement)) {
      if (this._isButtonElement(slotElement.previousElementSibling)) {
        if (this.vertical) {
          slotElement.style.setProperty('--bs-button-margin-top', '-1px');
          slotElement.style.setProperty('--bs-button-margin-left', '0');
        } else {
          slotElement.style.setProperty('--bs-button-margin-left', '-1px');
        }
      }

      if (this._isButtonGroupElement(slotElement.previousElementSibling)) {
        if (this.vertical) {
          slotElement.style.setProperty('--bs-button-margin-top', '-1px');
          slotElement.style.setProperty('--bs-button-margin-left', '0');
        } else {
          slotElement.style.setProperty('--bs-button-margin-left', '-1px');
        }
      }
    }
  }

  _applyCssForButtonGroupElement(slotElement) {
    if (this._isButtonGroupElement(slotElement)) {
      if (this._isButtonElement(slotElement.previousElementSibling)) {
        if (this.vertical) {
          slotElement.style.setProperty('--bs-button-margin-top', '-1px');
          slotElement.style.setProperty('--bs-button-margin-left', '0');
        } else {
          slotElement.style.setProperty('--bs-button-margin-left', '-1px');
        }
      }

      if (this._isButtonGroupElement(slotElement.previousElementSibling)) {
        if (this.vertical) {
          slotElement.style.setProperty('--bs-button-margin-top', '-1px');
          slotElement.style.setProperty('--bs-button-margin-left', '0');
        } else {
          slotElement.style.setProperty('--bs-button-margin-left', '-1px');
        }
      }
    }
  }

  _isButtonElement(element) {
    if (element) {
      return element.nodeType === Node.ELEMENT_NODE && (element.localName === 'bs-button' || element.localName === 'bs-input-button' || element.localName === 'bs-link-button');
    }
  }

  _isButtonGroupElement(element) {
    if (element) {
      return element.nodeType === Node.ELEMENT_NODE && element.localName === 'bs-button-group';
    }
  }

}
if (!window.customElements.get("bs-button-group")) window.customElements.define('bs-button-group', BsButtonGroup);

const BsButtonGroupToggleCss = css`
    
    .btn-group-toggle > .btn,
    .btn-group-toggle > .btn-group > .btn {
        margin-bottom: 0;
    }

    .btn-group-toggle > .btn input[type="radio"],
    .btn-group-toggle > .btn input[type="checkbox"],
    .btn-group-toggle > .btn-group > .btn input[type="radio"],
    .btn-group-toggle > .btn-group > .btn input[type="checkbox"] {
        position: absolute;
        clip: rect(0, 0, 0, 0);
        pointer-events: none;
    }
`;

const BsButtonToolbarCss = css`

    :host {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        --bs-input-group-width: auto;
    }
`;

class BsButtonToolbar extends LitElement {
  static get styles() {
    return [BsContentRebootCss, BsButtonToolbarCss];
  }

  render() {
    return html`
            <slot></slot>
        `;
  }

}
if (!window.customElements.get("bs-button-toolbar")) window.customElements.define('bs-button-toolbar', BsButtonToolbar);

export { BsButtonGroup, BsButtonGroupHorizontalCss, BsButtonGroupLargeCss, BsButtonGroupSmallCss, BsButtonGroupToggleCss, BsButtonGroupVerticalCss, BsButtonToolbar, BsButtonToolbarCss };
