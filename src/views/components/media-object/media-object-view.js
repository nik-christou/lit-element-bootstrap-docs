
import { LitElement, html } from 'lit-element';
import { BaseViewMixin } from '../../base-view.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { BsDocsContentCss } from '../../../component/content/bs-docs-content-css';
import { BsContentRebootCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

import '../../../component/callout/bs-callout';
import './examples/single-media-example';
import './examples/nested-media-example';
import './examples/top-alignment-media-example';
import './examples/center-alignment-media-example';
import './examples/bottom-alignment-media-example';
import './examples/order-placement-media-example';
import './examples/media-list-example';

class MediaObjectView extends BaseViewMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsContentRebootCss,
            BsContentTypographyCss,
            BsDocsContentCss
        ];
    }
    
    render() {
        return html`

            <h1 class="bd-title" id="content">Media object</h1>

            <h4>Install</h4>
            <bs-highlight>
                <pre><code>${unsafeHTML(this._hightlightJavascript(
                    `
                    // install scoped package
                    npm install @lit-element-bootstrap/media-object
                    
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
                    import 'lit-element-bootstrap/components/media-object';

                    // import specific component 
                    import 'lit-element-bootstrap/components/media-object/bs-media.js';

                    // import all css & components from the scoped package
                    import '@lit-element-bootstrap/media-object';

                    // import specific component from the scoped package
                    import '@lit-element-bootstrap/media-object/bs-media.js';
                    `
                ))}</code></pre>
            </bs-highlight>

            <single-media-example></single-media-example>
            
            <h2>Nesting</h2>
           
            <nested-media-example></nested-media-example>
            
            <h2>Alignment</h2>
          
            <top-alignment-media-example></top-alignment-media-example>
        
            <center-alignment-media-example></center-alignment-media-example>
            
            <bottom-alignment-media-example></bottom-alignment-media-example>
            
            <h2>Order</h2>
            
            <order-placement-media-example></order-placement-media-example>
            
            <h2>Media list</h2>
            
            <media-list-example></media-list-example>
            
            <br />
            <br />
            <br />
        `;
    }
};

window.customElements.define('media-object-view', MediaObjectView);