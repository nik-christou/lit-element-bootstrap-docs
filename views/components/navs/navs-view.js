
import { LitElement, html } from 'lit-element';
import { BsDocsContentCss } from '../../../component/content/bs-docs-content-css';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

import '../../../component/callout/bs-callout';
import './examples/base-nav-example';
import './examples/horizontal-center-nav-example';
import './examples/horizontal-right-nav-example';
import './examples/vertical-nav-example';
import './examples/tabs-nav-example';
import './examples/pills-nav-example';
import './examples/fill-pills-nav-example';
import './examples/justified-pills-nav-example';
import './examples/flex-utilities-nav-example';
import './examples/tabs-with-dropdown-example';
import './examples/pills-with-dropdown-example';

class NavsView extends LitElement {
    
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

            <h1 class="bd-title" id="content">Navs</h1>
        
            <base-nav-example></base-nav-example>
            
            <h2>Horizontal alignment</h2>
            
            <horizontal-center-nav-example></horizontal-center-nav-example>
            
            <p>Right-aligned with <code class="highlighter-rouge">.justify-content-end</code>:</p>
            
            <horizontal-right-nav-example></horizontal-right-nav-example>
            
            <h3>Vertical</h3>
            
            <vertical-nav-example></vertical-nav-example>
         
            <h3>Tabs</h3>
            
            <tabs-nav-example></tabs-nav-example>
            
            <h3>Pills</h3>
            
            <pills-nav-example></pills-nav-example>
        
            <h3>Fill and justify</h3>
            
            <fill-pills-nav-example></fill-pills-nav-example>
            
            <justified-pills-nav-example></justified-pills-nav-example>
        
            <h2>Working with flex utilities</h2>
            
            <flex-utilities-nav-example></flex-utilities-nav-example>
            
            <h3>Tabs with dropdowns</h3>
            
            <tabs-with-dropdown-example></tabs-with-dropdown-example>
        
            <h3>Pills with dropdowns</h3>

            <pills-with-dropdown-example></pills-with-dropdown-example>
        
            <br />
            <br />
            <br />
        `;
    }
};

window.customElements.define('navs-view', NavsView);