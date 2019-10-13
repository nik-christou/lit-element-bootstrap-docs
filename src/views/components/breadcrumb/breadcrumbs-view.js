
import { LitElement, html } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { BaseViewMixin } from '../../base-view.js';
import { BsDocsContentCss } from '../../../component/content/bs-docs-content.css.js';
import { BsContentRebootCss, BsContentTypographyCss } from '@lit-element-bootstrap/content';

import './examples/breadcrumbs-example.js';
import './examples/breadcrumbs-separator-example.js';

class BreadcrumbsView extends BaseViewMixin(LitElement) {
    
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
            
            <h1 class="bd-title" id="content">Breadcrumb</h1>

            <h4>Install</h4>
            <bs-highlight>
                <pre><code>${unsafeHTML(this._hightlightJavascript(
                    `
                    // install scoped package
                    npm install @lit-element-bootstrap/breadcrumb
                    
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
                    import 'lit-element-bootstrap/components/breadcrumb';

                    // import specific component 
                    import 'lit-element-bootstrap/components/breadcrumb/bs-breadcrumb.js';

                    // import all css & components from the scoped package
                    import '@lit-element-bootstrap/breadcrumb';

                    // import specific component from the scoped package
                    import '@lit-element-bootstrap/breadcrumb/bs-breadcrumb.js';
                    `
                ))}</code></pre>
            </bs-highlight>

            <breadcrumbs-example></breadcrumbs-example>
            
            <h2>Changing the separator</h2>
            
            <breadcrumbs-separator-example></breadcrumbs-separator-example>
            
            <br />
            <br />
            <br />
        `;
    }
};

window.customElements.define('breadcrumbs-view', BreadcrumbsView);