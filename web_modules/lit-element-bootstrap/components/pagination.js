import { h as html } from '../../common/lit-html-9b6153da.js';
import { LitElement, css } from '../../lit-element.js';
import { B as BsContentRebootCss } from '../../common/bs-content-reboot-css-ebf48278.js';

class BsPagination extends LitElement {
    
    static get properties() {
        return {
            small: {type: Boolean, reflect: true},
            large: {type: Boolean, reflect: true}
        };
    }
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                :host {
                    display: flex;
                    padding-left: 0;
                    list-style: none;
                    border-radius: 0.25rem;
                }
        
                :host([large]) {
                    --bs-page-link-padding: 0.75rem 1.5rem;
                    --bs-page-link-font-size: 1.25rem;
                    --bs-page-link-line-height: 1.5;
                }

                :host([large]) ::slotted(bs-page-item:first-child) {
                    --bs-page-link-radius-top-left: 0.3rem;
                    --bs-page-link-radius-bottom-left: 0.3rem;
                }

                :host([large]) ::slotted(bs-page-item:last-child) {
                    --bs-page-link-radius-top-right: 0.3rem;
                    --bs-page-link-radius-bottom-right: 0.3rem;
                }
        
                :host([small]) {
                    --bs-page-link-padding: 0.25rem 0.5rem;
                    --bs-page-link-font-size: 0.875rem;
                    --bs-page-link-line-height: 1.5;
                }

                :host([small]) ::slotted(bs-page-item:first-child) {
                    --bs-page-link-radius-top-left: 0.2rem;
                    --bs-page-link-radius-bottom-left: 0.2rem;
                }

                :host([small]) ::slotted(bs-page-item:last-child) {
                   --bs-page-link-radius-top-right: 0.2rem;
                   --bs-page-link-radius-bottom-right: 0.2rem;
                }
            `
        ];
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
    }
}
if(!window.customElements.get('bs-pagination')) 
    window.customElements.define('bs-pagination', BsPagination);

class BsPageLink extends LitElement {
    
    static get properties() {
        return {
            href: String,
            target: String,
            disabled: {type: Boolean, reflect: true}
        };
    }
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                :host {
                    position: relative;
                    display: block;
                    padding: var(--bs-page-link-padding, 0.5rem 0.75rem);
                    margin-left: -1px;
                    line-height: var(--bs-page-link-line-height, 1.25);
                    background-color: #fff;
                    border: 1px solid #dee2e6;
                    font-size: var(--bs-page-link-font-size);
                    border-top-left-radius: var(--bs-page-link-radius-top-left);
                    border-bottom-left-radius: var(--bs-page-link-radius-bottom-left);
                    border-top-right-radius: var(--bs-page-link-radius-top-right);
                    border-bottom-right-radius: var(--bs-page-link-radius-bottom-right);
                }
        
                :host a {
                    color: var(--bs-page-link-color, #007bff);
                }
        
                :host(:hover) {
                    z-index: 2;
                    color: #0056b3;
                    background-color: #e9ecef;
                    border-color: #dee2e6;
                }
                
                :host(:hover) a {
                    text-decoration: none;
                }
                
                :host(:focus) {
                    z-index: 2;
                    outline: 0;
                    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
                }
                
                :host(:not([disabled])) {
                    cursor: pointer;
                }
            `
        ];
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
        this.disabled = false;
    }
}
if(!window.customElements.get('bs-page-link')) 
    window.customElements.define('bs-page-link', BsPageLink);

class BsPageItem extends LitElement {
    
    static get properties() {
        return {
            active: {type: Boolean, reflect: true},
            disabled: {type: Boolean, reflect: true}
        };
    }
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
               :host(:first-child) ::slotted(bs-page-link) {
                    margin-left: 0;
                    border-top-left-radius: 0.25rem;
                    border-bottom-left-radius: 0.25rem;
                }

                :host(:last-child) ::slotted(bs-page-link) {
                    border-top-right-radius: 0.25rem;
                    border-bottom-right-radius: 0.25rem;
                }

                :host([active]) ::slotted(bs-page-link) {
                    z-index: 1;
                    --bs-page-link-color: #fff;
                    background-color: #007bff;
                    border-color: #007bff;
                }

                :host([disabled]) ::slotted(bs-page-link) {
                    --bs-page-link-color: #6c757d;
                    pointer-events: none;
                    cursor: auto;
                    background-color: #fff;
                    border-color: #dee2e6;
                } 
            `
        ];
    }
    
    render() {
        return html`
            <slot></slot>
        `;
    }
    
    constructor() {
        super();
        this.active = false;
        this.disabled = false;
    }
}
if(!window.customElements.get('bs-page-item')) 
    window.customElements.define('bs-page-item', BsPageItem);

export { BsPageItem, BsPageLink, BsPagination };
