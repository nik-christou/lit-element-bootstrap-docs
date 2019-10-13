
import { LitElement, html} from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { BaseViewMixin } from '../../base-view.js';
import { BsDocsContentCss } from '../../../component/content/bs-docs-content.css.js';
import { BsContentRebootCss, 
    BsContentCodeCss, 
    BsContenTableCss, 
    BsContentTypographyCss } from '@lit-element-bootstrap/content';

import './examples/equal-width-columns-example.js';
import './examples/equal-width-example.js';
import './examples/equal-width-multiline-example.js';
import './examples/one-column-width-example.js';
import './examples/variable-width-content-example.js';
import './examples/equal-width-multi-row-example.js';
import './examples/all-breakpoints-example.js';
import './examples/stacked-to-horizontal-example.js';
import './examples/mix-and-match-example.js';
import './examples/vertical-alignment-example.js';
import './examples/vertical-alignment-column-example.js';
import './examples/horizontal-alignment-example.js';
import './examples/no-gutters-example.js';
import './examples/column-wrapping-example.js';
import './examples/column-break-example.js';
import './examples/column-break-with-utilities-example.js';
import './examples/reorder-columns-example.js';
import './examples/reorder-columns-responsive-example.js';
import './examples/offset-columns-example.js';
import './examples/offset-columns-reset-example.js';
import './examples/margin-utilities-example.js';
import './examples/nested-grid-example.js';

class GridView extends BaseViewMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsContentRebootCss,
            BsContentTypographyCss,
            BsDocsContentCss,
            BsContentCodeCss,
            BsContenTableCss
        ];
    }
    
    render() {
        return html`
           
            <h1 class="bd-title" id="content">Grid system</h1>
            
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
                    import 'lit-element-bootstrap/layout/bs-row.js';

                    // import all collapse css & components from the scoped package
                    import '@lit-element-bootstrap/layout';

                    // import specific component from the scoped package
                    import '@lit-element-bootstrap/layout/bs-row.js';
                    `
                ))}</code></pre>
            </bs-highlight>

            <equal-width-columns-example></equal-width-columns-example>
            
            <h3>Equal-width</h3>
            
            <equal-width-example></equal-width-example>
            
            <equal-width-multiline-example></equal-width-multiline-example>
            
            <h2>Setting one column width</h2>
            
            <one-column-width-example></one-column-width-example>
            
            <h2>Variable width content</h2>
            
            <variable-width-content-example></variable-width-content-example>
            
            <h2>Equal-width multi-row</h2>
            
            <equal-width-multi-row-example></equal-width-multi-row-example>
            
            <h2>Responsive classes</h2>
            
            <all-breakpoints-example></all-breakpoints-example>
            
            <h2>Stacked to horizontal</h2>
            
            <stacked-to-horizontal-example></stacked-to-horizontal-example>
            
            <h2>Mix and match</h2>
            
            <mix-and-match-example></mix-and-match-example>
            
            <h2>Alignment</h2>
            
            <h3>Vertical alignment</h3>
            
            <vertical-alignment-example></vertical-alignment-example>
            
            <vertical-alignment-column-example></vertical-alignment-column-example>
            
            <h3>Horizontal alignment</h3>
        
            <horizontal-alignment-example></horizontal-alignment-example>
            
            <h3>No gutters</h3>
            
            <no-gutters-example></no-gutters-example>
            
            <h3>Column wrapping</h3>
            
            <column-wrapping-example></column-wrapping-example>
            
            <h3>Column breaks</h3>
            
            <column-break-example></column-break-example>
            
            <column-break-with-utilities-example></column-break-with-utilities-example>
            
            <h2>Reordering</h2>
            
            <reorder-columns-example></reorder-columns-example>
            
            <reorder-columns-responsive-example></reorder-columns-responsive-example>
            
            <h3>Offsetting columns</h3>
            
            <h4>Offset classes</h4>
            
            <offset-columns-example></offset-columns-example>
            
            <offset-columns-reset-example></offset-columns-reset-example>
            
            <h4>Margin utilities</h4>
            
            <margin-utilities-example></margin-utilities-example>
            
            <h2>Nesting</h2>
            
            <nested-grid-example></nested-grid-example>
            
            <br />
            <br />
            <br />
        `;
    }
};

window.customElements.define('grid-view', GridView);