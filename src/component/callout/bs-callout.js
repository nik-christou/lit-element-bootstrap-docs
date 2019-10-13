import { LitElement, html } from 'lit-element';
import { BsCalloutCss } from './bs-callout.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content';

class BsCallout extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsCalloutCss
        ];
    }
    
    render() {
        return html`
            <div>
                <slot name="title"></slot>
                <slot></slot>
            </div>
        `;
    }
};

window.customElements.define('bs-callout', BsCallout);