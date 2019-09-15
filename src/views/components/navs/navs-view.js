
import { LitElement, html } from 'lit-element';
import { BaseViewMixin } from '../../base-view.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { BsDocsContentCss } from '../../../component/content/bs-docs-content-css.js';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

import '../../../component/callout/bs-callout.js';
import './examples/base-nav-example.js';
import './examples/horizontal-center-nav-example.js';
import './examples/horizontal-right-nav-example.js';
import './examples/vertical-nav-example.js';
import './examples/tabs-nav-example.js';
import './examples/pills-nav-example.js';
import './examples/fill-pills-nav-example.js';
import './examples/justified-pills-nav-example.js';
import './examples/flex-utilities-nav-example.js';
import './examples/tabs-with-dropdown-example.js';
import './examples/pills-with-dropdown-example.js';

class NavsView extends BaseViewMixin(LitElement) {
    
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

            <h1 class="bd-title" id="content">Navs</h1>

            <h4>Install</h4>
            <bs-highlight>
                <pre><code>${unsafeHTML(this._hightlightJavascript(
                    `
                    // install scoped package
                    npm install @lit-element-bootstrap/navs
                    
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
                    import 'lit-element-bootstrap/components/navs';

                    // import specific component 
                    import 'lit-element-bootstrap/components/navs/bs-nav.js';

                    // import all css & components from the scoped package
                    import '@lit-element-bootstrap/navs';

                    // import specific component from the scoped package
                    import '@lit-element-bootstrap/navs/bs-nav.js';
                    `
                ))}</code></pre>
            </bs-highlight>

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