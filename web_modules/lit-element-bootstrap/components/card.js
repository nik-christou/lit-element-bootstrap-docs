import { h as html } from '../../common/lit-html-9b6153da.js';
import { css, LitElement } from '../../lit-element.js';
import '../../common/index-603f562a.js';
import { B as BsContentRebootCss } from '../../common/bs-content-reboot-css-ebf48278.js';
import '../../common/bs-text-colors-css-726ad9ac.js';
import '../../common/bs-spacing-css-ba74c20d.js';
import '../../common/bs-flex-align-content-css-b099adc1.js';

const BsTextCss = css`
    
    :host([text-monospace]), .text-monospace {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    }

    :host([text-justify]), .text-justify {
        text-align: justify !important;
    }
    
    :host([text-nowrap]), .text-nowrap {
        white-space: nowrap !important;
    }

    :host([text-truncate]), .text-truncate {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    :host([text-left]), .text-left {
        text-align: left !important;
    }

    :host([text-right]), .text-right {
        text-align: right !important;
    }

    :host([text-center]), .text-center {
        text-align: center !important;
    }

    @media (min-width: 576px) {
        
        :host([text-sm-left]), .text-sm-left {
            text-align: left !important;
        }

        :host([text-sm-right]), .text-sm-right {
            text-align: right !important;
        }

        :host([text-sm-center]), .text-sm-center {
            text-align: center !important;
        }
    }

    @media (min-width: 768px) {

        :host([text-md-left]), .text-md-left {
            text-align: left !important;
        }

        :host([text-md-right]), .text-md-right {
            text-align: right !important;
        }

        :host([text-md-center]), .text-md-center {
            text-align: center !important;
        }
    }

    @media (min-width: 992px) {
        
        :host([text-lg-left]), .text-lg-left {
            text-align: left !important;
        }

        :host([text-lg-right]), .text-lg-right {
            text-align: right !important;
        }

        :host([text-lg-center]), .text-lg-center {
            text-align: center !important;
        }
    }

    @media (min-width: 1200px) {

        :host([text-xl-left]), .text-xl-left {
            text-align: left !important;
        }

        :host([text-xl-right]), .text-xl-right {
            text-align: right !important;
        }

        :host([text-xl-center]), .text-xl-center {
            text-align: center !important;
        }
    }

    :host([text-lowercase]), .text-lowercase {
        text-transform: lowercase !important;
    }

    :host([text-uppercase]), .text-uppercase {
        text-transform: uppercase !important;
    }

    :host([text-capitalize]), .text-capitalize {
        text-transform: capitalize !important;
    }

    :host([font-weight-light]), .font-weight-light {
        font-weight: 300 !important;
    }

    :host([font-weight-normal]), .font-weight-normal {
        font-weight: 400 !important;
    }

    :host([font-weight-bold]), .font-weight-bold {
        font-weight: 700 !important;
    }

    :host([font-weight-bold]), .font-italic {
        font-style: italic !important;
    }
`;

const BsFloatCss = css`
    
    .float-left {
        float: left !important;
    }

    .float-right {
        float: right !important;
    }

    .float-none {
        float: none !important;
    }

    @media (min-width: 576px) {
        
        .float-sm-left {
            float: left !important;
        }
        
        .float-sm-right {
            float: right !important;
        }

        .float-sm-none {
            float: none !important;
        }
    }

    @media (min-width: 768px) {
      
        .float-md-left {
            float: left !important;
        }
        
        .float-md-right {
            float: right !important;
        }

        .float-md-none {
            float: none !important;
        }
    }

    @media (min-width: 992px) {
    
        .float-lg-left {
            float: left !important;
        }

        .float-lg-right {
            float: right !important;
        }
        
        .float-lg-none {
            float: none !important;
        }
    }

    @media (min-width: 1200px) {
    
        .float-xl-left {
            float: left !important;
        }

        .float-xl-right {
            float: right !important;
        }

        .float-xl-none {
            float: none !important;
        }
    }
`;

const BsSizingCss = css`
    
    :host([w-25]), .w-25 {
        width: 25% !important;
    }

    :host([w-50]), .w-50 {
        width: 50% !important;
    }

    :host([w-75]), .w-75 {
        width: 75% !important;
    }

    :host([w-100]), .w-100 {
        width: 100% !important;
    }

    :host([w-auto]), .w-auto {
        width: auto !important;
    }

    :host([h-25]), .h-25 {
        height: 25% !important;
    }

    :host([h-50]), .h-50 {
        height: 50% !important;
    }

    :host([h-75]), .h-75 {
        height: 75% !important;
    }

    :host([h-100]), .h-100 {
        height: 100% !important;
    }

    :host([h-auto]), .h-auto {
        height: auto !important;
    }

    :host([mw-100]), .mw-100 {
        max-width: 100% !important;
    }

    :host([mh-100]), .mh-100 {
        max-height: 100% !important;
    }
`;

const BsBordersCss = css`
    
    .border {
        border: 1px solid #dee2e6 !important;
    }

    .border-top {
        border-top: 1px solid #dee2e6 !important;
    }

    .border-right {
        border-right: 1px solid #dee2e6 !important;
    }

    .border-bottom {
        border-bottom: 1px solid #dee2e6 !important;
    }

    .border-left {
        border-left: 1px solid #dee2e6 !important;
    }

    .border-0 {
        border: 0 !important;
    }

    .border-top-0 {
        border-top: 0 !important;
    }

    .border-right-0 {
        border-right: 0 !important;
    }

    .border-bottom-0 {
        border-bottom: 0 !important;
    }

    .border-left-0 {
        border-left: 0 !important;
    }

    .border-primary {
        border-color: #007bff !important;
    }

    .border-secondary {
        border-color: #6c757d !important;
    }

    .border-success {
        border-color: #28a745 !important;
    }

    .border-info {
        border-color: #17a2b8 !important;
    }

    .border-warning {
        border-color: #ffc107 !important;
    }

    .border-danger {
        border-color: #dc3545 !important;
    }

    .border-light {
        border-color: #f8f9fa !important;
    }

    .border-dark {
        border-color: #343a40 !important;
    }

    .border-white {
        border-color: #fff !important;
    }

    .rounded {
        border-radius: 0.25rem !important;
    }

    .rounded-top {
        border-top-left-radius: 0.25rem !important;
        border-top-right-radius: 0.25rem !important;
    }

    .rounded-right {
        border-top-right-radius: 0.25rem !important;
        border-bottom-right-radius: 0.25rem !important;
    }

    .rounded-bottom {
        border-bottom-right-radius: 0.25rem !important;
        border-bottom-left-radius: 0.25rem !important;
    }

    .rounded-left {
        border-top-left-radius: 0.25rem !important;
        border-bottom-left-radius: 0.25rem !important;
    }

    .rounded-circle {
        border-radius: 50% !important;
    }

    .rounded-0 {
        border-radius: 0 !important;
    }
`;

const BsEmbeddedCss = css`
    
    .embed-responsive {
         position: relative;
         display: block;
         width: 100%;
         padding: 0;
         overflow: hidden;
       }

       .embed-responsive::before {
         display: block;
         content: "";
       }

       .embed-responsive .embed-responsive-item,
       .embed-responsive iframe,
       .embed-responsive embed,
       .embed-responsive object,
       .embed-responsive video {
         position: absolute;
         top: 0;
         bottom: 0;
         left: 0;
         width: 100%;
         height: 100%;
         border: 0;
       }

       .embed-responsive-21by9::before {
         padding-top: 42.857143%;
       }

       .embed-responsive-16by9::before {
         padding-top: 56.25%;
       }

       .embed-responsive-4by3::before {
         padding-top: 75%;
       }

       .embed-responsive-1by1::before {
         padding-top: 100%;
       }
`;

const BsDisplayCss = css`
    
    .d-none {
        display: none !important;
    }

    .d-inline {
        display: inline !important;
    }

    .d-inline-block {
        display: inline-block !important;
    }

    .d-block {
        display: block !important;
    }

    .d-table {
        display: table !important;
    }

    .d-table-row {
        display: table-row !important;
    }

    .d-table-cell {
        display: table-cell !important;
    }

    @media (min-width: 576px) {
        
        .d-sm-none {
            display: none !important;
        }
        
        .d-sm-inline {
            display: inline !important;
        }
        
        .d-sm-inline-block {
            display: inline-block !important;
        }
        
        .d-sm-block {
            display: block !important;
        }
        
        .d-sm-table {
            display: table !important;
        }
        
        .d-sm-table-row {
            display: table-row !important;
        }
        
        .d-sm-table-cell {
            display: table-cell !important;
        }
    }

    @media (min-width: 768px) {
        
        .d-md-none {
            display: none !important;
        }

        .d-md-inline {
            display: inline !important;
        }
        
        .d-md-inline-block {
            display: inline-block !important;
        }

        .d-md-block {
            display: block !important;
        }
        
        .d-md-table {
            display: table !important;
        }
        
        .d-md-table-row {
            display: table-row !important;
        }
        
        .d-md-table-cell {
            display: table-cell !important;
        }
    }

    @media (min-width: 992px) {
        
        .d-lg-none {
            display: none !important;
        }
        
        .d-lg-inline {
            display: inline !important;
        }
        
        .d-lg-inline-block {
            display: inline-block !important;
        }
        
        .d-lg-block {
            display: block !important;
        }
        
        .d-lg-table {
            display: table !important;
        }
        
        .d-lg-table-row {
            display: table-row !important;
        }
        
        .d-lg-table-cell {
            display: table-cell !important;
        }
    }

    @media (min-width: 1200px) {
        
        .d-xl-none {
            display: none !important;
        }
        
        .d-xl-inline {
            display: inline !important;
        }
        
        .d-xl-inline-block {
            display: inline-block !important;
        }
        
        .d-xl-block {
            display: block !important;
        }
        
        .d-xl-table {
            display: table !important;
        }
        
        .d-xl-table-row {
            display: table-row !important;
        }
        
        .d-xl-table-cell {
            display: table-cell !important;
        }
    }

    @media print {
    
        .d-print-none {
            display: none !important;
        }
        
        .d-print-inline {
            display: inline !important;
        }
        
        .d-print-inline-block {
            display: inline-block !important;
        }
        
        .d-print-block {
            display: block !important;
        }
        
        .d-print-table {
            display: table !important;
        }
        
        .d-print-table-row {
            display: table-row !important;
        }
        
        .d-print-table-cell {
            display: table-cell !important;
        }
    }
`;

const BsClearfixCss = css`
    
    .clearfix::after {
        display: block;
        clear: both;
        content: "";
    }
`;

const BsVerticalAlignCss = css`

    .align-baseline {
        vertical-align: baseline !important;
    }

    .align-top {
        vertical-align: top !important;
    }

    .align-middle {
        vertical-align: middle !important;
    }

    .align-bottom {
        vertical-align: bottom !important;
    }

    .align-text-bottom {
        vertical-align: text-bottom !important;
    }

    .align-text-top {
        vertical-align: text-top !important;
    }
`;

const BsVisibilityCss = css`
    
    .visible {
        visibility: visible !important;
    }

    .invisible {
        visibility: hidden !important;
    }
`;

const BsBackgroundColorsCss = css`
    
    .bg-primary {
        background-color: #007bff !important;
    }

    a.bg-primary:hover, 
    a.bg-primary:focus,
        button.bg-primary:hover,
        button.bg-primary:focus {
        background-color: #0062cc !important;
    }

    .bg-secondary {
        background-color: #6c757d !important;
    }

    a.bg-secondary:hover, 
    a.bg-secondary:focus,
        button.bg-secondary:hover,
        button.bg-secondary:focus {
        background-color: #545b62 !important;
    }

    .bg-success {
        background-color: #28a745 !important;
    }

    a.bg-success:hover, 
    a.bg-success:focus,
        button.bg-success:hover,
        button.bg-success:focus {
        background-color: #1e7e34 !important;
    }

    .bg-info {
        background-color: #17a2b8 !important;
    }

    a.bg-info:hover, 
    a.bg-info:focus,
        button.bg-info:hover,
        button.bg-info:focus {
        background-color: #117a8b !important;
    }

    .bg-warning {
        background-color: #ffc107 !important;
    }

    a.bg-warning:hover, 
    a.bg-warning:focus,
        button.bg-warning:hover,
        button.bg-warning:focus {
        background-color: #d39e00 !important;
    }

    .bg-danger {
        background-color: #dc3545 !important;
    }

    a.bg-danger:hover, 
    a.bg-danger:focus,
        button.bg-danger:hover,
        button.bg-danger:focus {
        background-color: #bd2130 !important;
    }

    .bg-light {
        background-color: #f8f9fa !important;
    }

    a.bg-light:hover, 
    a.bg-light:focus,
        button.bg-light:hover,
        button.bg-light:focus {
        background-color: #dae0e5 !important;
    }

    .bg-dark {
        background-color: #343a40 !important;
    }

    a.bg-dark:hover, 
    a.bg-dark:focus,
        button.bg-dark:hover,
        button.bg-dark:focus {
        background-color: #1d2124 !important;
    }

    .bg-white {
        background-color: #fff !important;
    }

    .bg-transparent {
        background-color: transparent !important;
    }
`;

const BsScreenreaderCss = css`
    
    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
    }

    .sr-only-focusable:active, 
    .sr-only-focusable:focus {
        position: static;
        width: auto;
        height: auto;
        overflow: visible;
        clip: auto;
        white-space: normal;
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

    if(nextElement) {
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

function  isFlushListGroupElement(el) {
    return el.nodeType === Node.ELEMENT_NODE && (el.localName === 'bs-list-group-flush'
            || el.localName === 'bs-list-group-action-flush');
}

function  isElementButNotSlot(el) {
    return el.nodeType === Node.ELEMENT_NODE 
            && (el.localName !== 'slot');
}

function  isCardHeaderElement(el) {
    return el.nodeType === Node.ELEMENT_NODE 
            && (el.localName === 'bs-card-header');
}

class BsCard extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsSizingCss,
            BsTextCss,
            css`
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
            `
        ];
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
if (!window.customElements.get("bs-card")) 
    window.customElements.define('bs-card', BsCard);

class BsCardText extends LitElement {

    static get styles() {
        return [
            BsContentRebootCss,
            css`
                :host {
                    display: block;
                }
        
                :host > ::slotted(*:last-child) {
                    margin-bottom: 0;
                }
            `
        ];
    }

    render() {
        return html`
            <slot></slot>
        `;
    }
}
if (!window.customElements.get("bs-card-text"))  
    window.customElements.define('bs-card-text', BsCardText);

class BsCardBody extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                :host {
                    flex: 1 1 auto;
                    padding: 1.25rem;
                    display: block;
                }
        
                :host > ::slotted([name="card-text"]:last-child) {
                    margin-bottom: 0;
                }
            `
        ];
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
        const cardLinksElementNodes = this._getSlotElementNodes(cardLinksSlotELement);
        
        // if nothing was added to the slot node and to the card links node,
        // then find the last element of the card-text and change the margin-bottom
        if(slotElementNodes.length === 0 && cardLinksElementNodes.length === 0) {
            
            const cardTextElement = this._findCardTextElement();
            
            if(cardTextElement) {
                
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
        
        for(let index = 0; index < slotNodes.length; index++) {
            
            const element = slotNodes[index];
            
            if(element.nodeType === Node.ELEMENT_NODE) {
                nodeElements.push(element);
            }
        }
        
        return nodeElements;
    }
    
    _findCardTextElement() {
        
        const cardTextSlotElement = this.shadowRoot.querySelector('slot[name="card-text"]');
        const cardTextAssignedNodes = cardTextSlotElement.assignedNodes();
        
        for(let index = 0; index < cardTextAssignedNodes.length; index++) {
            
            const slotItem = cardTextAssignedNodes[index];
            
            if(this._isCardTextElement(slotItem)) {
                return slotItem;
            }
        }
    }
    
    _isCardTextElement(element) {
        return element.nodeType === Node.ELEMENT_NODE 
                && element.localName === 'bs-card-text';
    }
}
if (!window.customElements.get("bs-card-body"))  
    window.customElements.define('bs-card-body', BsCardBody);

class BsCardTitle extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                :host {
                    margin-bottom: 0.75rem;
                }
            `
        ];
    }
    
    render() {
        return html`
            <slot></slot>
        `;
    }
}
if (!window.customElements.get("bs-card-title")) 
    window.customElements.define('bs-card-title', BsCardTitle);

class BsCardOverlay extends LitElement {

    static get styles() {
        return [
            BsContentRebootCss,
            css`
                :host {
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    padding: 1.25rem;
                }
            `
        ];
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
if (!window.customElements.get("bs-card-overlay"))  
    window.customElements.define('bs-card-overlay', BsCardOverlay);

class BsCardSubtitle extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                :host {
                    margin-top: -0.375rem;
                    margin-bottom: 0;
                }
            `
        ];
    }
    
    render() {
        return html`
            <slot></slot>
        `;
    }
}
if (!window.customElements.get("bs-card-subtitle")) 
    window.customElements.define('bs-card-subtitle', BsCardSubtitle);

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

function  isCardLinkElement(el) {
    return el.nodeType === Node.ELEMENT_NODE 
            && (el.localName === 'bs-card-link');
}

function  isElementButNotSlot$1(el) {
    return el.nodeType === Node.ELEMENT_NODE 
            && (el.localName !== 'slot');
}

class BsCardLinks extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                :host ::slotted(*):hover {
                    color: red;
                    text-decoration: underline;
                }
            `
        ];
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
if (!window.customElements.get("bs-card-links")) 
    window.customElements.define('bs-card-links', BsCardLinks);

class BsCardLink extends LitElement {

    static get properties() {
        return {
            label: String,
            target: String
        };
    }
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                a {
                    margin-left: var(--card-link-left-margin, 1.25rem);
                }

                a:hover {
                    color: #0056b3;
                    text-decoration: none;
                }
            `
        ];
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
if (!window.customElements.get("bs-card-link"))  
    window.customElements.define('bs-card-link', BsCardLink);

class BsCardImg extends LitElement {

    static get properties() {
        return {
            position: String
        };
    }
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
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
            ` 
        ];
    }

    render() {
        return html`
            <slot></slot>
        `;
    }
}
if (!window.customElements.get("bs-card-img")) 
    window.customElements.define('bs-card-img', BsCardImg);

class BsCardHeader extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
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
            `
        ];
    }
    
    render() {
        return html`
            <slot></slot>
        `;
    }
}
if (!window.customElements.get("bs-card-header")) 
    window.customElements.define('bs-card-header', BsCardHeader);

class BsCardGroup extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
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
            `
        ];
    }
    
    render() {
        return html`
            <slot></slot>
        `;
    }
}
if (!window.customElements.get("bs-card-group")) 
    window.customElements.define('bs-card-group', BsCardGroup);

class BsCardFooter extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
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
            `
        ];
    }
    
    render() {
        return html`
            <slot></slot>
        `;
    }
}
if (!window.customElements.get("bs-card-footer"))   
    window.customElements.define('bs-card-footer', BsCardFooter);

class BsCardDeck extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
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
            `
        ];
    }
    
    render() {
        return html`
            <slot></slot>
        `;
    }
}
if (!window.customElements.get("bs-card-deck"))  
    window.customElements.define('bs-card-deck', BsCardDeck);

class BsCardColumns extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
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
            `
        ];
    }
    
    render() {
        return html`
            <slot></slot>
        `;
    }
}
if (!window.customElements.get("bs-card-columns")) 
    window.customElements.define('bs-card-columns', BsCardColumns);

export { BsCard, BsCardBody, BsCardColumns, BsCardDeck, BsCardFooter, BsCardGroup, BsCardHeader, BsCardImg, BsCardLink, BsCardLinks, BsCardOverlay, BsCardSubtitle, BsCardText, BsCardTitle };
