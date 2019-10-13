
import { LitElement, html } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { BaseViewMixin } from '../../base-view.js';
import { BsDocsContentCss } from '../../../component/content/bs-docs-content.css.js';
import { 
    BsContentRebootCss, 
    BsContentCodeCss, 
    BsContentTypographyCss } from '@lit-element-bootstrap/content';

import './examples/container-example.js';
import './examples/container-fluid-example.js';

class ContainerView extends BaseViewMixin(LitElement) {
    
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
            
            <h1 class="bd-title" id="content">Container</h1>

            <h4>Install</h4>
            <bs-highlight>
                <pre><code>${unsafeHTML(this._hightlightJavascript(
                    `
                    // install scoped package
                    npm install @lit-element-bootstrap/layout
                    
                    // installed as part of all components
                    npm install lit-element-bootstrap
                    `
                ))}</code></pre>
            </bs-highlight>

            <h4>Import</h4>
            <bs-highlight>
                <pre><code>${unsafeHTML(this._hightlightJavascript(
                    `
                    // import all collapse css & components
                    import 'lit-element-bootstrap/layout';

                    // import specific component 
                    import 'lit-element-bootstrap/layout/bs-container.js';

                    // import all collapse css & components from the scoped package
                    import '@lit-element-bootstrap/layout';

                    // import specific component from the scoped package
                    import '@lit-element-bootstrap/layout/bs-container.js';
                    `
                ))}</code></pre>
            </bs-highlight>

            <container-example></container-example>
            
            <container-fluid-example></container-fluid-example>
            
            <br />
            <br />
            <br />
        `;
    }
};

window.customElements.define('container-view', ContainerView);