
import { LitElement, html } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { BaseViewMixin } from '../../base-view.js';
import { BsDocsContentCss } from '../../../component/content/bs-docs-content.css.js';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from '@lit-element-bootstrap/content';

import './examples/contextual-alerts-example.js';
import './examples/link-color-example.js';
import './examples/additional-content-example.js';
import './examples/dismissing-alert-example.js';

class AlertsView extends BaseViewMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsContentRebootCss,
            BsContentTypographyCss,
            BsDocsContentCss,
            BsContentCodeCss
        ];
    }
    
    render() {
        return html`
        
            <h1 class="bd-title" id="content">Alerts</h1>

            <h4>Install</h4>
            <bs-highlight>
                <pre><code>${unsafeHTML(this._hightlightJavascript(
                    `
                    // install scoped package
                    npm install @lit-element-bootstrap/alert
                    
                    // installed as part of all components
                    npm install lit-element-bootstrap
                    `
                ))}</code></pre>
            </bs-highlight>

            <h4>Import</h4>
            <bs-highlight>
                <pre><code>${unsafeHTML(this._hightlightJavascript(
                    `
                    // import all css & components
                    import 'lit-element-bootstrap/components/alert';

                    // import specific component 
                    import 'lit-element-bootstrap/components/alert/bs-alert.js';

                    // import all css & components from the scoped package
                    import '@lit-element-bootstrap/alert';

                    // import specific component from the scoped package
                    import '@lit-element-bootstrap/alert/bs-alert.js';
                    `
                ))}</code></pre>
            </bs-highlight>

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