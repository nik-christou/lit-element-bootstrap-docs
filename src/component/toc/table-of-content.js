
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '@lit-element-bootstrap/content';

export class TableOfContent extends LitElement {

    static get styles() {
        return [
            BsContentRebootCss,
            css`
                :host {
                    display: block;
                    padding-top: 1.5rem;
                    padding-bottom: 1.5rem;
                }

                .section-nav {
                    padding-left: 0;
                }
            `
        ];
    }

    render() {
        return html`
            <div class="section-nav">
                <slot></slot>
            </div>
        `;
    }
};

window.customElements.define('table-of-content', TableOfContent);