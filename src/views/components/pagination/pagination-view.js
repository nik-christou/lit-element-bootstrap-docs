
import { LitElement, html } from 'lit-element';
import { BaseViewMixin } from '../../base-view.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { BsDocsContentCss } from '../../../component/content/bs-docs-content.css.js';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from '@lit-element-bootstrap/content';

import './examples/pagination-overview-example.js';
import './examples/pagination-icons-example.js';
import './examples/pagination-states-example.js';
import './examples/pagination-large-size-example.js';
import './examples/pagination-small-size-example.js';
import './examples/pagination-center-alignment-example.js';
import './examples/pagination-right-alignment-example.js';

class PaginationView extends BaseViewMixin(LitElement) {
    
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

            <h1 class="bd-title" id="content">Pagination</h1>
            
            <h4>Install</h4>
            <bs-highlight>
                <pre><code>${unsafeHTML(this._hightlightJavascript(
                    `
                    // install scoped package
                    npm install @lit-element-bootstrap/pagination
                    
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
                    import 'lit-element-bootstrap/components/pagination';

                    // import specific component 
                    import 'lit-element-bootstrap/components/pagination/bs-pagination.js';

                    // import all css & components from the scoped package
                    import '@lit-element-bootstrap/pagination';

                    // import specific component from the scoped package
                    import '@lit-element-bootstrap/pagination/bs-pagination.js';
                    `
                ))}</code></pre>
            </bs-highlight>

            <pagination-overview-example></pagination-overview-example>
        
            <h2>Working with icons</h2>
            
            <pagination-icons-example></pagination-icons-example>
            
            <h2>Disabled and active states</h2>
            
            <pagination-states-example></pagination-states-example>
             
            <h2>Sizing</h2>
            
            <pagination-large-size-example></pagination-large-size-example>
            
            <pagination-small-size-example></pagination-small-size-example>
            
            <h2>Alignment</h2>
            
            <pagination-center-alignment-example></pagination-center-alignment-example>
            
            <pagination-right-alignment-example></pagination-right-alignment-example>
            
            <br />
            <br />
            <br />
        `;
    }
};

window.customElements.define('pagination-view', PaginationView);