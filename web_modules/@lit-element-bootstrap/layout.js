import { h as html } from '../common/lit-html-9b6153da.js';
import { css, LitElement } from '../lit-element.js';
import { B as BsContentRebootCss } from '../common/bs-content-reboot.css-c5865ddd.js';
import { B as BsColumnExtraSmallCss, a as BsColumnSmallCss, b as BsColumnMediumCss, c as BsColumnLargeCss, d as BsColumnExtraLargeCss } from '../common/bs-column-xl.css-6b6d2e52.js';
export { d as BsColumnExtraLargeCss, B as BsColumnExtraSmallCss, c as BsColumnLargeCss, b as BsColumnMediumCss, a as BsColumnSmallCss } from '../common/bs-column-xl.css-6b6d2e52.js';

const BsRowCss = css`

    :host {
        display: flex;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
    }

    :host([no-gutters]) {
        margin-right: 0;
        margin-left: 0;
    }

    :host([no-gutters]) ::slotted(*) {
        padding-right: 0;
        padding-left: 0;
    }
`;

class BsRow extends LitElement {
  static get styles() {
    return [BsContentRebootCss, BsRowCss];
  }

  render() {
    return html`
            <slot></slot>
        `;
  }

}
if (!window.customElements.get('bs-row')) window.customElements.define('bs-row', BsRow);

class BsColumn extends LitElement {
  static get styles() {
    return [BsContentRebootCss, BsColumnExtraSmallCss, BsColumnSmallCss, BsColumnMediumCss, BsColumnLargeCss, BsColumnExtraLargeCss];
  }

  render() {
    return html`
            <slot></slot>
        `;
  }

}
if (!window.customElements.get('bs-column')) window.customElements.define('bs-column', BsColumn);

const BsContainerCss = css`

    :host {
        width: 100%;
        display: block;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
    }

    @media (min-width: 576px) {
        :host:not([fluid]) {
            max-width: 540px;
        }
    }

    @media (min-width: 768px) {
        :host:not([fluid]) {
            max-width: 720px;
        }
    }

    @media (min-width: 992px) {
        :host:not([fluid]) {
            max-width: 960px;
        }
    }

    @media (min-width: 1200px) {
        :host:not([fluid]) {
            max-width: 1140px;
        }
    }

    :host([fluid]) {
        width: 100%;
        display: block;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
    }
`;

class BsContainer extends LitElement {
  static get styles() {
    return [BsContentRebootCss, BsContainerCss];
  }

  render() {
    return html`
            <slot></slot>
        `;
  }

}
if (!window.customElements.get('bs-container')) window.customElements.define('bs-container', BsContainer);

export { BsColumn, BsContainer, BsContainerCss, BsRow, BsRowCss };
