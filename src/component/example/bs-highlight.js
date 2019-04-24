
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from 'lit-element-bootstrap/content';

export class BsHighlight extends LitElement {

    static get styles() {
        return [
            BsContentRebootCss,
            css`
                :host {
                    display: block;
                }

                .highlight {
                    padding: 1rem;
                    padding-bottom: 0;
                    margin-bottom: 1rem;
                    background-color: #f8f9fa;
                    border: 0.05rem solid #eeeeee;
                    border-radius: var(--highlight-border-radius, 8px 8px 8px 8px);
                }
            `
        ];
    }

    render() {
        return html`
            <figure class="highlight">
                <slot></slot>
            </figure>
        `;
    }
};

window.customElements.define('bs-highlight', BsHighlight);