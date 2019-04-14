
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from 'lit-element-bootstrap/content';

export class BsHighlight extends LitElement {

    static get styles() {
        return [
            BsContentRebootCss,
            css`
                .highlight {
                    padding: 1rem;
                    margin-bottom: 1rem;
                    background-color: #f8f9fa;
                    -ms-overflow-style: -ms-autohiding-scrollbar;
                }
                
                @media (min-width: 576px) .highlight {
                    padding: 1.5rem;
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