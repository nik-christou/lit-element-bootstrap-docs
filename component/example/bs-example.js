
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
                    margin: 1rem -15px 0;
                    border: solid #f8f9fa;
                    border-width: 0.2rem 0 0;
                }
                
                @media (min-width: 576px) {
                    
                    :host {
                        padding: 1.5rem;
                        margin-right: 0;
                        margin-left: 0;
                        border-width: 0.2rem;
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