
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '@lit-element-bootstrap/content';

export class TableOfContentItem extends LitElement {

    static get properties() {
        return {
            elementId: {type: String, attribute: 'element-id'},
            text: String
        };
    }

    static get styles() {
        return [
            BsContentRebootCss,
            css`
                :host {
                    display: block;
                }

                :host ::slotted(table-of-content-item) {
                    padding-left: 1rem;
                }
                
                .toc-entry {
                    display: block;
                }

                .toc-entry a {
                    display: block;
                    padding: 0.125rem 1.5rem;
                    color: #99979c;
                    font-size: large;
                }

                .toc-entry a:hover {
                    color: #007bff;
                    text-decoration: none;
                }
            `
        ];
    }

    render() {
        return html`
            <div class="toc-entry">
                <a href="${this.elementId}">${this.text}</a>
                <slot></slot>
            </div>
        `;
    }

    constructor() {
        super();
        this.href = '';
        this.text = '';
    }

    firstUpdated() {
        const tocEntryLink = this.shadowRoot.querySelector('a');
        tocEntryLink.addEventListener('click', event => this._handleClickEvent(event));
    }

    _handleClickEvent(event) {

        event.preventDefault();

        const tocItemClickedEvent = new CustomEvent('toc-link-event', {
            bubbles: true, 
            composed: true,
            detail: {
                elementId: this.elementId
            }
        });

        this.dispatchEvent(tocItemClickedEvent);
    }
};

window.customElements.define('table-of-content-item', TableOfContentItem);