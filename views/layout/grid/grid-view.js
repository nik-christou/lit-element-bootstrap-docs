
import { LitElement, html} from 'lit-element';
import { BsDocsContentCss } from '../../../component/content/bs-docs-content-css';
import { BsContentRebootCss, BsContentCodeCss, BsContenTableCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

import './examples/equal-width-columns-example';
import './examples/equal-width-example';
import './examples/equal-width-multiline-example';
import './examples/one-column-width-example';
import './examples/variable-width-content-example';
import './examples/equal-width-multi-row-example';
import './examples/all-breakpoints-example';
import './examples/stacked-to-horizontal-example';
import './examples/mix-and-match-example';
import './examples/vertical-alignment-example';
import './examples/vertical-alignment-column-example';
import './examples/horizontal-alignment-example';
import './examples/no-gutters-example';
import './examples/column-wrapping-example';
import './examples/column-break-example';
import './examples/column-break-with-utilities-example';
import './examples/reorder-columns-example';
import './examples/reorder-columns-responsive-example';
import './examples/offset-columns-example';
import './examples/offset-columns-reset-example';
import './examples/margin-utilities-example';
import './examples/nested-grid-example';

class GridView extends LitElement {
    
    static get styles() {
        return [
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