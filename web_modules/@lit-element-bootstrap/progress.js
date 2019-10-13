import { h as html } from '../common/lit-html-9b6153da.js';
import { css, LitElement } from '../lit-element.js';
import { B as BsContentRebootCss } from '../common/bs-content-reboot.css-c5865ddd.js';

const BsProgressBarCss = css`

    :host {
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #fff;
        text-align: center;
        white-space: nowrap;
        background-color: #007bff;
        transition: width 0.6s ease;
    }

    @media screen and (prefers-reduced-motion: reduce) {
        :host {
            transition: none;
        }
    }

    :host([striped]) {
        background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
        background-size: 1rem 1rem;
    }

    :host([animated]) {
        -webkit-animation: progress-bar-stripes 1s linear infinite;
        animation: progress-bar-stripes 1s linear infinite;
    }

    @-webkit-keyframes progress-bar-stripes {
        from {
            background-position: 1rem 0;
        }
        to {
            background-position: 0 0;
        }
    }

    @keyframes progress-bar-stripes {
        from {
            background-position: 1rem 0;
        }
        to {
            background-position: 0 0;
        }
    }
`;

class BsProgressBar extends LitElement {
  static get properties() {
    return {
      striped: {
        type: Boolean,
        reflect: true
      },
      animated: {
        type: Boolean,
        reflect: true
      },
      completed: {
        type: Number,
        reflect: true,
        attribute: 'completed'
      }
    };
  }

  static get styles() {
    return [BsContentRebootCss, BsProgressBarCss];
  }

  render() {
    return html`
            <slot></slot>
        `;
  }

  constructor() {
    super();
    this.striped = false;
    this.animated = false;
    this.completed = 0;
  }

  updated(changedProperties) {
    super.updated();

    if (changedProperties.has('completed')) {
      this._percentCompletedChanged();
    }
  }

  _percentCompletedChanged() {
    if (this.completed) {
      this.shadowRoot.host.style.width = `${this.completed}%`;
    }
  }

}
if (!window.customElements.get('bs-progress-bar')) window.customElements.define('bs-progress-bar', BsProgressBar);

const BsProgressCss = css`

    :host {
        display: flex;
        height: 1rem;
        overflow: hidden;
        font-size: 0.75rem;
        background-color: #e9ecef;
        border-radius: 0.25rem;
    }
`;

class BsProgress extends LitElement {
  static get styles() {
    return [BsContentRebootCss, BsProgressCss];
  }

  render() {
    return html`
            <slot></slot>
        `;
  }

}
if (!window.customElements.get('bs-progress')) window.customElements.define('bs-progress', BsProgress);

export { BsProgress, BsProgressBar, BsProgressBarCss, BsProgressCss };
