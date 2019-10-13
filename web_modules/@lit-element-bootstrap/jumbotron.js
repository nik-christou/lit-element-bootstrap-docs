import { h as html } from '../common/lit-html-9b6153da.js';
import { css, LitElement } from '../lit-element.js';
import { B as BsContentRebootCss } from '../common/bs-content-reboot.css-c5865ddd.js';

const BsJumbotronCss = css`

    :host {
        display: block;
        padding: 2rem 1rem;
        margin-bottom: 2rem;
        background-color: #e9ecef;
        border-radius: 0.3rem;
    }

    @media (min-width: 576px) {
        :host {
            padding: 4rem 2rem;
        }
    }

    :host([fluid]) {
        padding-right: 0;
        padding-left: 0;
        border-radius: 0;
    }
`;

class BsJumbotron extends LitElement {
  static get styles() {
    return [BsContentRebootCss, BsJumbotronCss];
  }

  render() {
    return html`
            <slot></slot>
        `;
  }

}
if (!window.customElements.get('bs-jumbotron')) window.customElements.define('bs-jumbotron', BsJumbotron);

export { BsJumbotron, BsJumbotronCss };
