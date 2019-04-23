
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from 'lit-element-bootstrap/content';

export class BsExample extends LitElement {

    static get styles() {
        return [
            BsContentRebootCss,
            css`
                :host {
                    display: block;
                    position: relative;
                    padding: 1rem;
                    border: solid #f8f9fa;
                    border: 0.05rem solid #eeeeee;
                    border-radius: var(--example-border-radius, 8px 8px 8px 8px);
                }
                
                @media (min-width: 576px) {
                    :host {
                        padding: 1.5rem;
                        margin-right: 0;
                        margin-left: 0;
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
};

window.customElements.define('bs-example', BsExample);