import { h as html } from '../common/lit-html-9b6153da.js';
import { css, LitElement } from '../lit-element.js';
import { B as BsContentRebootCss } from '../common/bs-content-reboot.css-c5865ddd.js';
import { B as BsContentTypographyCss } from '../common/bs-content-typography.css-0b50b318.js';
import '../common/bs-close-button-9021156f.js';

const BsAlertCss = css`

    :host {
        display: block;
        position: relative;
        padding: 0.75rem 1.25rem;
        margin-bottom: 1rem;
        border: 1px solid transparent;
        border-radius: 0.25rem;
    }

    :host([fade]) {
        opacity: 0;
        transition: opacity 0.15s linear;
    }

    :host([fade][show]) {
        opacity: 1;
    }

    :host([dismissable]) {
        padding-right: 4rem;
    }

    :host ::slotted([slot=heading]) {
        color: inherit;
    }

    :host ::slotted([slot=closeButton]) {
        position: absolute;
        top: 0;
        right: 0;
        padding: 0.75rem 1.25rem;
        color: inherit;
    }

    :host([primary]) {
        color: #004085;
        background-color: #cce5ff;
        border-color: #b8daff;
    }

    :host([secondary]) {
        color: #383d41;
        background-color: #e2e3e5;
        border-color: #d6d8db;
    }

    :host([success]) {
        color: #155724;
        background-color: #d4edda;
        border-color: #c3e6cb;
    }

    :host([info]) {
        color: #0c5460;
        background-color: #d1ecf1;
        border-color: #bee5eb;
    }

    :host([warning]) {
        color: #856404;
        background-color: #fff3cd;
        border-color: #ffeeba;
    }

    :host([danger]) {
        color: #721c24;
        background-color: #f8d7da;
        border-color: #f5c6cb;
    }

    :host([light]) {
        color: #818182;
        background-color: #fefefe;
        border-color: #fdfdfe;
    }

    :host([dark]) {
        color: #1b1e21;
        background-color: #d6d8d9;
        border-color: #c6c8ca;
    }
`;

class BsAlert extends LitElement {
  static get properties() {
    return {
      show: {
        type: Boolean,
        reflect: true
      },
      fade: {
        type: Boolean,
        reflect: true
      },
      dismissable: {
        type: Boolean,
        reflect: true
      }
    };
  }

  static get styles() {
    return [BsContentRebootCss, BsAlertCss];
  }

  render() {
    return html`
            <slot name="heading"></slot>
            <slot name="message"></slot>
            <slot name="dismiss"></slot>
        `;
  }

  constructor() {
    super();
    this.show = false;
    this.fade = false;
    this.dismissable = false;
  }

  firstUpdated() {
    const alertElement = this.shadowRoot.host;
    alertElement.addEventListener('transitionend', () => this._afterElementTransition());
    this.addEventListener('close-button-click', () => this._handleAlertDismiss());
  }

  _afterElementTransition() {
    this._fireClosedEvent();
  }

  _handleAlertDismiss() {
    this._fireCloseEvent();

    this.show = false;
  }

  _fireClosedEvent() {
    const alertClosedEvent = new CustomEvent('closed.bs.alert', {
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(alertClosedEvent);
  }

  _fireCloseEvent() {
    const alertCloseEvent = new CustomEvent('close.bs.alert', {
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(alertCloseEvent);
  }

}
if (!window.customElements.get("bs-alert")) window.customElements.define('bs-alert', BsAlert);

const BsAlertHrCss = css`

    :host([primary]) hr {
        border-top-color: #9fcdff;
    }

    :host([secondary]) hr {
        border-top-color: #c8cbcf;
    }

    :host([success]) hr {
        border-top-color: #b1dfbb;
    }

    :host([info]) hr {
        border-top-color: #abdde5;
    }

    :host([warning]) hr {
        border-top-color: #ffe8a1;
    }

    :host([danger]) hr {
        border-top-color: #f1b0b7;
    }

    :host([light]) hr {
        border-top-color: #ececf6;
    }

    :host([dark]) hr {
        border-top-color: #b9bbbe;
    }
`;

class BsAlertHr extends LitElement {
  static get styles() {
    return [BsContentRebootCss, BsContentTypographyCss, BsAlertHrCss];
  }

  render() {
    return html`
            <hr />
        `;
  }

}
if (!window.customElements.get("bs-alert-hr")) window.customElements.define('bs-alert-hr', BsAlertHr);

const BsAlertLinkCss = css`

    a {
        font-weight: 700;
    }

    :host([primary]) a {
        color: #002752;
    }

    :host([secondary]) a {
        color: #202326;
    }

    :host([success]) a {
        color: #0b2e13;
    }

    :host([info]) a {
        color: #062c33;
    }

    :host([warning]) a {
        color: #533f03;
    }

    :host([danger]) a {
        color: #491217;
    }

    :host([light]) a {
        color: #686868;
    }

    :host([dark]) a {
        color: #040505;
    }
`;

class BsAlertLink extends LitElement {
  static get properties() {
    return {
      href: String,
      target: String
    };
  }

  static get styles() {
    return [BsContentRebootCss, BsContentTypographyCss, BsAlertLinkCss];
  }

  render() {
    return html`
            <a href="${this.href}" .target="${this.target}"><slot></slot></a>
        `;
  }

  constructor() {
    super();
    this.href = '';
    this.target = '_self';
  }

}
if (!window.customElements.get("bs-alert-link")) window.customElements.define('bs-alert-link', BsAlertLink);

const BsAlertDismissCss = css`

    .dismiss-button {
        position: absolute;
        top: 0;
        right: 0;
        padding: 0.75rem 1.25rem;
        color: inherit;
    }
`;

class BsAlertDismiss extends LitElement {
  static get styles() {
    return BsAlertDismissCss;
  }

  render() {
    return html`
            <bs-close-button class="dismiss-button"></bs-close-button>
        `;
  }

}
if (!window.customElements.get("bs-alert-dismiss")) window.customElements.define('bs-alert-dismiss', BsAlertDismiss);

export { BsAlert, BsAlertCss, BsAlertDismiss, BsAlertDismissCss, BsAlertHr, BsAlertHrCss, BsAlertLink, BsAlertLinkCss };
