
import { LitElement, html } from 'lit-element';
import { BsDocsContentCss } from '../../../component/content/bs-docs-content-css';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

import './examples/contextual-alerts-example';
import './examples/link-color-example';
import './examples/additional-content-example';
import './examples/dismissing-alert-example';


class AlertsView extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsDocsContentCss,
            BsContentCodeCss
        ];
    }
    
    render() {
        return html`
        
            <h1 class="bd-title" id="content">Alerts</h1>

            <p class="bd-lead">Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</p>
            
            <br />
            
            <contextual-alerts-example></contextual-alerts-example>
        
            <h2>Link Color</h2>
            
            <link-color-example></link-color-example>
            
            <h2>Additional Content</h2>
            
            <additional-content-example></additional-content-example>
            
            <h2>Dismissing</h2>
            
            <dismissing-alert-example></dismissing-alert-example>
        `;
    }
};

window.customElements.define('alerts-view', AlertsView);