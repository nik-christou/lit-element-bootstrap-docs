
import { LitElement, html } from 'lit-element';
import { BsContentRebootCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';
import { BsFlexOrderCss } from 'lit-element-bootstrap/utilities/flex/bs-flex-order-css';

import 'lit-element-bootstrap/layout/grid';
import 'lit-element-bootstrap/components/navs';

class GettingStartedView extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsFlexOrderCss
        ];
    }
    
    render() {
        return html`
            
            <h1>Getting started</h1>
                    
        `;
    }
};

window.customElements.define('getting-started-view', GettingStartedView);