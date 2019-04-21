
import { LitElement, html } from 'lit-element';
import { BsContentRebootCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';
import { BsFlexOrderCss } from 'lit-element-bootstrap/utilities/flex/bs-flex-order-css';

import 'lit-element-bootstrap/layout/grid';
import 'lit-element-bootstrap/components/navs';

class HomeView extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsFlexOrderCss
        ];
    }
    
    render() {
        return html`

            <bs-container>
                <bs-row>
                    <bs-column md-9 order-md-first order-xs-last>
                        <h1>lit-element-bootstrap</h1>
                        <p>Implementation of Bootstrap as LitElement web components.</p>
                    </bs-column>
                    <bs-column md-3 order-md-last order-xs-first>
                    </bs-column>
                </bs-row>
            </bs-container>
        `;
    }
};

window.customElements.define('home-view', HomeView);