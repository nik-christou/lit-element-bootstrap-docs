import { h as html } from '../common/lit-html-9b6153da.js';
import { css, LitElement } from '../lit-element.js';
import { B as BsContentRebootCss } from '../common/bs-content-reboot.css-c5865ddd.js';
import { a as BsSizingCss, B as BsTextCss } from '../common/bs-sizing.css-89c18bf2.js';

const BsCardCss = css`

    :host {
        position: relative;
        display: flex;
        flex-direction: column;
        min-width: 0;
        word-wrap: break-word;
        background-color: #fff;
        background-clip: border-box;
        border: 1px solid rgba(0, 0, 0, 0.125);
        border-bottom: var(--bs-card-border-bottom, 1px solid rgba(0, 0, 0, 0.125));
        border-top-left-radius: var(--bs-card-border-top-left-radius, 0.25rem);
        border-top-right-radius: var(--bs-card-border-top-right-radius, 0.25rem);
        border-bottom-left-radius: var(--bs-card-border-bottom-left-radius, 0.25rem);
        border-bottom-right-radius: var(--bs-card-border-bottom-right-radius, 0.25rem);
        margin-left: var(--bs-card-margin-left);
        border-left: var(--bs-card-border-left, 1px solid rgba(0, 0, 0, 0.125));
    }

    hr {
        margin-right: 0;
        margin-left: 0;
    }

    :host ::slotted(bs-list-group-flush) {
        --flush-list-group-item-top-left-radius: 0;
        --flush-list-group-item-top-right-radius: 0;
        --flush-list-group-item-bottom-right-radius: 0;
        --flush-list-group-item-bottom-left-radius: 0;
        --flush-list-group-item-top-border: 1px solid rgba(0, 0, 0, 0.125);
        --flush-list-group-item-bottom-border: 1px solid rgba(0, 0, 0, 0.125);
    }

    :host ::slotted(bs-list-group-action-flush) {
        --flush-list-group-item-top-left-radius: 0;
        --flush-list-group-item-top-right-radius: 0;
        --flush-list-group-item-bottom-right-radius: 0;
        --flush-list-group-item-bottom-left-radius: 0;
        --flush-list-group-item-top-border: 1px solid rgba(0, 0, 0, 0.125);
        --flush-list-group-item-bottom-border: 1px solid rgba(0, 0, 0, 0.125);
    }
`;

function configureFlushListGroupBorders(assignedNodes) {
  const slotElements = extractOnlyElements(assignedNodes);

  for (let index = 0; index < slotElements.length; ++index) {
    const slotElement = slotElements[index];

    if (isFlushListGroupElement(slotElement)) {
      handleTopBorder(slotElement);
      handleBottomBorder(slotElement);
    }
  }
}

function handleTopBorder(slotElement) {
  const previousElement = slotElement.previousElementSibling;

  if (previousElement) {
    if (isCardHeaderElement(previousElement)) {
      removeListGroupTopBorder(slotElement);
    } else {
      addListGroupTopBorder(slotElement);
    }
  } else {
    removeListGroupTopBorder(slotElement);
  }
}

function handleBottomBorder(slotElement) {
  const nextElement = slotElement.nextElementSibling;

  if (nextElement) {
    addListGroupBottomBorder(slotElement);
  } else {
    addListGroupBottomBorderRadius(slotElement);
  }
}

function removeListGroupTopBorder(element) {
  element.style.setProperty('--flush-list-group-item-top-border', '0');
  element.style.setProperty('--flush-list-group-item-top-left-radius', '0.25rem');
  element.style.setProperty('--flush-list-group-item-top-right-radius', '0.25rem');
}

function addListGroupTopBorder(element) {
  element.style.setProperty('--flush-list-group-item-top-border', '1px solid rgba(0, 0, 0, 0.125)');
}

function addListGroupBottomBorder(element) {
  element.style.setProperty('--flush-list-group-item-bottom-border', '1px solid rgba(0, 0, 0, 0.125)');
}

function addListGroupBottomBorderRadius(element) {
  element.style.setProperty('--flush-list-group-item-bottom-left-radius', '0.25rem');
  element.style.setProperty('--flush-list-group-item-bottom-right-radius', '0.25rem');
}

function extractOnlyElements(slotNodes) {
  const elementNodes = [];

  for (let index = 0; index < slotNodes.length; ++index) {
    let slotItem = slotNodes[index];

    if (isElementButNotSlot(slotItem)) {
      elementNodes.push(slotItem);
    }
  }

  return elementNodes;
}

function isFlushListGroupElement(el) {
  return el.nodeType === Node.ELEMENT_NODE && (el.localName === 'bs-list-group-flush' || el.localName === 'bs-list-group-action-flush');
}

function isElementButNotSlot(el) {
  return el.nodeType === Node.ELEMENT_NODE && el.localName !== 'slot';
}

function isCardHeaderElement(el) {
  return el.nodeType === Node.ELEMENT_NODE && el.localName === 'bs-card-header';
}

class BsCard extends LitElement {
  static get styles() {
    return [BsContentRebootCss, BsSizingCss, BsTextCss, BsCardCss];
  }

  render() {
    return html`
            <slot name="top-image"></slot>
            <slot name="card-header"></slot>
            <slot id="content"></slot>
            <slot name="card-footer"></slot>
            <slot name="bottom-image"></slot>
        `;
  }

  firstUpdated() {
    const contentSlotElement = this.shadowRoot.querySelector('slot#content');
    const slotNodes = contentSlotElement.assignedNodes();
    configureFlushListGroupBorders(slotNodes);
  }

}
if (!window.customElements.get("bs-card")) window.customElements.define('bs-card', BsCard);

const BsCardTextCss = css`

    :host {
        display: block;
    }

    :host > ::slotted(*:last-child) {
        margin-bottom: 0;
    }
`;

class BsCardText extends LitElement {
  static get styles() {
    return [BsContentRebootCss, BsCardTextCss];
  }

  render() {
    return html`
            <slot></slot>
        `;
  }

}
if (!window.customElements.get("bs-card-text")) window.customElements.define('bs-card-text', BsCardText);

const BsCardBodyCss = css`

    :host {
        flex: 1 1 auto;
        padding: 1.25rem;
        display: block;
    }

    :host > ::slotted([name="card-text"]:last-child) {
        margin-bottom: 0;
    }
`;

class BsCardBody extends LitElement {
  static get styles() {
    return [BsContentRebootCss, BsCardBodyCss];
  }

  render() {
    return html`
            <slot name="card-title"></slot>
            <slot name="card-subtitle"></slot>
            <slot name="card-text"></slot>
            <slot id="plainSlot"></slot>
            <slot name="card-links"></slot>
        `;
  }

  firstUpdated() {
    this._ifLastChildIsCardTextRemoveBottomMargin();
  }

  _ifLastChildIsCardTextRemoveBottomMargin() {
    const slotElement = this.shadowRoot.querySelector('slot#plainSlot');

    const slotElementNodes = this._getSlotElementNodes(slotElement);

    const cardLinksSlotELement = this.shadowRoot.querySelector('slot[name="card-links"]');

    const cardLinksElementNodes = this._getSlotElementNodes(cardLinksSlotELement); // if nothing was added to the slot node and to the card links node,
    // then find the last element of the card-text and change the margin-bottom


    if (slotElementNodes.length === 0 && cardLinksElementNodes.length === 0) {
      const cardTextElement = this._findCardTextElement();

      if (cardTextElement) {
        const cardTextChildren = cardTextElement.children;
        const lastElementIndex = cardTextChildren.length - 1;
        const lastNode = cardTextChildren[lastElementIndex];
        lastNode.style.marginBottom = '0';
      }
    }
  }

  _getSlotElementNodes(slotElement) {
    const slotNodes = slotElement.assignedNodes();
    const nodeElements = [];

    for (let index = 0; index < slotNodes.length; index++) {
      const element = slotNodes[index];

      if (element.nodeType === Node.ELEMENT_NODE) {
        nodeElements.push(element);
      }
    }

    return nodeElements;
  }

  _findCardTextElement() {
    const cardTextSlotElement = this.shadowRoot.querySelector('slot[name="card-text"]');
    const cardTextAssignedNodes = cardTextSlotElement.assignedNodes();

    for (let index = 0; index < cardTextAssignedNodes.length; index++) {
      const slotItem = cardTextAssignedNodes[index];

      if (this._isCardTextElement(slotItem)) {
        return slotItem;
      }
    }
  }

  _isCardTextElement(element) {
    return element.nodeType === Node.ELEMENT_NODE && element.localName === 'bs-card-text';
  }

}
if (!window.customElements.get("bs-card-body")) window.customElements.define('bs-card-body', BsCardBody);

const BsCardTitleCss = css`

    :host {
        margin-bottom: 0.75rem;
    }
`;

class BsCardTitle extends LitElement {
  static get styles() {
    return [BsContentRebootCss, BsCardTitleCss];
  }

  render() {
    return html`
            <slot></slot>
        `;
  }

}
if (!window.customElements.get("bs-card-title")) window.customElements.define('bs-card-title', BsCardTitle);

const BsCardOverlayCss = css`

    :host {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        padding: 1.25rem;
    }
`;

class BsCardOverlay extends LitElement {
  static get styles() {
    return [BsContentRebootCss, BsCardOverlayCss];
  }

  render() {
    return html`
            <slot name="card-title"></slot>
            <slot name="card-subtitle"></slot>
            <slot name="card-text"></slot>
            <slot id="plainSlot"></slot>
            <slot name="card-links"></slot>
        `;
  }

}
if (!window.customElements.get("bs-card-overlay")) window.customElements.define('bs-card-overlay', BsCardOverlay);

const BsCardSubtitleCss = css`

    :host {
        margin-top: -0.375rem;
        margin-bottom: 0;
    }
`;

class BsCardSubtitle extends LitElement {
  static get styles() {
    return [BsContentRebootCss, BsCardSubtitleCss];
  }

  render() {
    return html`
            <slot></slot>
        `;
  }

}
if (!window.customElements.get("bs-card-subtitle")) window.customElements.define('bs-card-subtitle', BsCardSubtitle);

function configureCardLinks(assignedNodes) {
  const slotElements = extractOnlyElements$1(assignedNodes);

  for (let index = 0; index < slotElements.length; ++index) {
    const slotElement = slotElements[index];

    if (isCardLinkElement(slotElement)) {
      const previousElement = slotElement.previousElementSibling;

      if (previousElement) {
        if (isCardLinkElement(previousElement)) {
          addLeftMarginToCardLink(slotElement);
        } else {
          removeLeftMarginToCardLink(slotElement);
        }
      } else {
        removeLeftMarginToCardLink(slotElement);
      }
    }
  }
}

function removeLeftMarginToCardLink(element) {
  element.style.setProperty('--card-link-left-margin', '0');
}

function addLeftMarginToCardLink(element) {
  element.style.setProperty('--card-link-left-margin', '1.25rem');
}

function extractOnlyElements$1(slotNodes) {
  const elementNodes = [];

  for (let index = 0; index < slotNodes.length; ++index) {
    let slotItem = slotNodes[index];

    if (isElementButNotSlot$1(slotItem)) {
      elementNodes.push(slotItem);
    }
  }

  return elementNodes;
}

function isCardLinkElement(el) {
  return el.nodeType === Node.ELEMENT_NODE && el.localName === 'bs-card-link';
}

function isElementButNotSlot$1(el) {
  return el.nodeType === Node.ELEMENT_NODE && el.localName !== 'slot';
}

const BsCardLinksCss = css`

    :host ::slotted(*):hover {
        color: red;
        text-decoration: underline;
    }
`;

class BsCardLinks extends LitElement {
  static get styles() {
    return [BsContentRebootCss, BsCardLinksCss];
  }

  render() {
    return html`
            <slot></slot>
        `;
  }

  firstUpdated() {
    const slotElement = this.shadowRoot.querySelector('slot');
    const slotNodes = slotElement.assignedNodes();
    configureCardLinks(slotNodes);
  }

}
if (!window.customElements.get("bs-card-links")) window.customElements.define('bs-card-links', BsCardLinks);

const BsCardLinkCss = css`

    a {
        margin-left: var(--card-link-left-margin, 1.25rem);
    }

    a:hover {
        color: #0056b3;
        text-decoration: none;
    }
`;

class BsCardLink extends LitElement {
  static get properties() {
    return {
      label: String,
      target: String
    };
  }

  static get styles() {
    return [BsContentRebootCss, BsCardLinkCss];
  }

  render() {
    return html`
            <a href="${this.target}">${this.label}</a>
        `;
  }

  constructor() {
    super();
    this.label = '';
    this.target = '#';
  }

}
if (!window.customElements.get("bs-card-link")) window.customElements.define('bs-card-link', BsCardLink);

const BsCardImgCss = css`

    :host {
        display: block;
        width: 100%;
    }

    :host ::slotted(img), :host ::slotted(svg) {
        width: var(--bs-img-width, 100%);
        height: var(--bs-img-height);
        display: block;
    }

    :host([position="top"]) ::slotted(img),
    :host([position="top"]) ::slotted(svg) {
        border-top-left-radius: var(--card-img-top-left-border-radius, calc(0.25rem - 1px));
        border-top-right-radius: var(--card-img-top-right-border-radius, calc(0.25rem - 1px));
    }

    :host([position="bottom"]) ::slotted(img),
    :host([position="bottom"]) ::slotted(svg) {
        border-bottom-left-radius: var(--card-img-bottom-left-border-radius, calc(0.25rem - 1px));
        border-bottom-right-radius: var(--card-img-bottom-right-border-radius, calc(0.25rem - 1px));
    }

    :host([position="overlay"]) :slotted(img),
    :host([position="overlay"]) :slotted(svg) {
        border-radius: calc(0.25rem - 1px);
    }

    :host(:not([position="top"]):not([position="bottom"]):not([position="overlay"])) :slotted(img),
    :host(:not([position="top"]):not([position="bottom"]):not([position="overlay"])) :slotted(svg) {
        border-radius: calc(0.25rem - 1px);
    }
`;

class BsCardImg extends LitElement {
  static get properties() {
    return {
      position: String
    };
  }

  static get styles() {
    return [BsContentRebootCss, BsCardImgCss];
  }

  render() {
    return html`
            <slot></slot>
        `;
  }

}
if (!window.customElements.get("bs-card-img")) window.customElements.define('bs-card-img', BsCardImg);

const BsCardHeaderCss = css`

    :host {
        padding: 0.75rem 1.25rem;
        margin-bottom: 0;
        background-color: rgba(0, 0, 0, 0.03);
        border-bottom: 1px solid rgba(0, 0, 0, 0.125);
        border-top-left-radius: var(--card-header-top-left-border-radius);
        border-top-right-radius: var(--card-header-top-right-border-radius);
    }

    :host:first-child {
        border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
    }

    :host ::slotted(*) + .list-group .list-group-item:first-child {
        border-top: 0;
    }

    :host ::slotted(bs-nav[tabs]) {
        --bs-nav-margin-right: -0.625rem;
        --bs-nav-margin-bottom: -0.75rem;
        --bs-nav-margin-left: -0.625rem;
        --bs-nav-border-bottom: 0;
        --nav-link-active-background-color: #fff;
    }

    :host ::slotted(bs-nav[pills]) {
        --bs-nav-margin-right: -0.625rem;
        --bs-nav-margin-left: -0.625rem;
    }
`;

class BsCardHeader extends LitElement {
  static get styles() {
    return [BsContentRebootCss, BsCardHeaderCss];
  }

  render() {
    return html`
            <slot></slot>
        `;
  }

}
if (!window.customElements.get("bs-card-header")) window.customElements.define('bs-card-header', BsCardHeader);

const BsCardGroupCss = css`

    :host {
        display: flex;
        flex-direction: column;
    }

    :host ::slotted(bs-card) {
        margin-bottom: 15px;
    }

    @media (min-width: 576px) {

        :host {
            flex-flow: row wrap;
        }

        :host ::slotted(bs-card) {
            flex: 1 0 0%;
            margin-bottom: 0;
        }

        :host ::slotted(bs-card:first-child) {
            border-top-right-radius: 0px;
            border-bottom-right-radius: 0px;
            --card-header-top-right-border-radius: 0px;
            --card-img-top-right-border-radius: 0px;
            --card-footer-bottom-right-border-radius: 0px;
            --card-img-bottom-right-border-radius: 0px;
        }

        :host ::slotted(bs-card:last-child) {
            border-top-left-radius: 0px;
            border-bottom-left-radius: 0px;
            --bs-card-margin-left: 0px;
            --bs-card-border-left: 0px;
            --card-header-top-left-border-radius: 0px;
            --card-footer-bottom-left-border-radius: 0px;
            --card-img-top-left-border-radius: 0px;
            --card-img-bottom-left-border-radius: 0px;
        }

        :host ::slotted(bs-card:only-child) {
            border-radius: 0.25rem;
            --card-header-top-left-border-radius: 0.25rem;
            --card-header-top-right-border-radius: 0.25rem;
            --card-footer-bottom-left-border-radius: 0.25rem;
            --card-footer-bottom-right-border-radius: 0.25rem;
            --card-img-top-left-border-radius: 0.25rem;
            --card-img-top-right-border-radius: 0.25rem;
            --card-img-bottom-left-border-radius: 0.25rem;
            --card-img-bottom-right-border-radius: 0.25rem;
        }

        :host ::slotted(bs-card:not(:first-child):not(:last-child):not(:only-child)) {
            border-radius: 0;
            --bs-card-margin-left: 0px;
            --bs-card-border-left: 0px;
            --card-footer-bottom-left-border-radius: 0px;
            --card-footer-bottom-right-border-radius: 0px;
            --card-header-top-left-border-radius: 0px;
            --card-header-top-right-border-radius: 0px;
            --card-img-top-right-border-radius: 0px;
            --card-img-top-left-border-radius: 0px;
            --card-img-bottom-right-border-radius: 0px;
            --card-img-bottom-left-border-radius: 0px;
        }
    }
`;

class BsCardGroup extends LitElement {
  static get styles() {
    return [BsContentRebootCss, BsCardGroupCss];
  }

  render() {
    return html`
            <slot></slot>
        `;
  }

}
if (!window.customElements.get("bs-card-group")) window.customElements.define('bs-card-group', BsCardGroup);

const BsCardFooterCss = css`

    :host {
        padding: 0.75rem 1.25rem;
        background-color: rgba(0, 0, 0, 0.03);
        border-top: 1px solid rgba(0, 0, 0, 0.125);
        border-bottom-left-radius: var(--card-footer-bottom-left-border-radius);
        border-bottom-right-radius: var(--card-footer-bottom-right-border-radius);
    }

    :host ::slotted(*:last-child) {
        border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);
    }
`;

class BsCardFooter extends LitElement {
  static get styles() {
    return [BsContentRebootCss, BsCardFooterCss];
  }

  render() {
    return html`
            <slot></slot>
        `;
  }

}
if (!window.customElements.get("bs-card-footer")) window.customElements.define('bs-card-footer', BsCardFooter);

const BsCardDeckCss = css`

    :host {
        display: flex;
        flex-direction: column;
    }

    :host ::slotted(bs-card) {
        margin-bottom: 15px;
    }

    @media (min-width: 576px) {

        :host {
            flex-flow: row wrap;
            margin-right: -15px;
            margin-left: -15px;
        }

        :host ::slotted(bs-card) {
            display: flex;
            flex: 1 0 0%;
            flex-direction: column;
            margin-right: 15px;
            margin-bottom: 0;
            margin-left: 15px;
        }
    }
`;

class BsCardDeck extends LitElement {
  static get styles() {
    return [BsContentRebootCss, BsCardDeckCss];
  }

  render() {
    return html`
            <slot></slot>
        `;
  }

}
if (!window.customElements.get("bs-card-deck")) window.customElements.define('bs-card-deck', BsCardDeck);

const BsCardColumnsCss = css`

    :host {
        display: block;
    }

    :host ::slotted(bs-card) {
        margin-bottom: 0.75rem;
    }

    @media (min-width: 576px) {

        :host {
            -webkit-column-count: var(--card-column-count, 3);
            -moz-column-count: var(--card-column-count, 3);
            column-count: var(--card-column-count, 3);
            -webkit-column-gap: var(--card-column-gap, 1.25rem);
            -moz-column-gap: var(--card-column-gap, 1.25rem);
            column-gap: var(--card-column-gap, 1.25rem);
            orphans: 1;
            widows: 1;
        }

        :host ::slotted(bs-card) {
            display: inline-block;
            width: 100%;
        }
    }
`;

class BsCardColumns extends LitElement {
  static get styles() {
    return [BsContentRebootCss, BsCardColumnsCss];
  }

  render() {
    return html`
            <slot></slot>
        `;
  }

}
if (!window.customElements.get("bs-card-columns")) window.customElements.define('bs-card-columns', BsCardColumns);

export { BsCard, BsCardBody, BsCardBodyCss, BsCardColumns, BsCardColumnsCss, BsCardCss, BsCardDeck, BsCardDeckCss, BsCardFooter, BsCardFooterCss, BsCardGroup, BsCardGroupCss, BsCardHeader, BsCardHeaderCss, BsCardImg, BsCardImgCss, BsCardLink, BsCardLinkCss, BsCardLinks, BsCardLinksCss, BsCardOverlay, BsCardOverlayCss, BsCardSubtitle, BsCardSubtitleCss, BsCardText, BsCardTextCss, BsCardTitle, BsCardTitleCss, configureCardLinks, configureFlushListGroupBorders };
