import { h as html } from './lit-html-9b6153da.js';
import { css, LitElement } from '../lit-element.js';

const BsCloseButtonCss = css`

    .close {
        border: 0;
        float: right;
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 1;
        color: #000;
        text-shadow: 0 1px 0 #fff;
        opacity: 0.5;
        margin: var(--bs-close-button-margin);
        padding: var(--bs-close-button-padding, 0);
        background-color: transparent;
        -webkit-appearance: none;
    }

    .close:not(:disabled):not(.disabled):hover,
    .close:not(:disabled):not(.disabled):focus {
        color: #000;
        text-decoration: none;
        opacity: 0.75;
        cursor: pointer;
    }
`;

class BsCloseButton extends LitElement {
  static get styles() {
    return BsCloseButtonCss;
  }

  render() {
    return html`
            <button type="button" class="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>

        `;
  }

  firstUpdated() {
    const buttonElement = this.shadowRoot.querySelector('button');
    buttonElement.addEventListener('click', () => this._handleClick());
  }

  _handleClick() {
    const alertCloseEvent = new CustomEvent('close-button-click', {
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(alertCloseEvent);
  }

}
if (!window.customElements.get("bs-close-button")) window.customElements.define('bs-close-button', BsCloseButton);

export { BsCloseButton as B };
