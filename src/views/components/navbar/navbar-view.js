
import { LitElement, html } from 'lit-element';
import { BaseViewMixin } from '../../base-view.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { BsDocsContentCss } from '../../../component/content/bs-docs-content-css';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

import './examples/navbar-all-components-example';
import './examples/navbar-brand-example';
import './examples/navbar-brand-images-example';
import './examples/navbar-nav-example';
import './examples/navbar-nav-dropdown-example';
import './examples/navbar-form-example';
import './examples/navbar-form-brand-example';
import './examples/navbar-form-input-group-example';
import './examples/navbar-form-buttons-example';
import './examples/navbar-text-inline-example';
import './examples/navbar-text-mix-elements-example';
import './examples/navbar-color-scheme-example';
import './examples/navbar-outer-container-example';
import './examples/navbar-inner-container-example';
import './examples/navbar-default-placement-example';
import './examples/navbar-fixed-top-example';
import './examples/navbar-fixed-bottom-example';
import './examples/navbar-sticky-top-example';
import './examples/navbar-hidden-brand-example';
import './examples/navbar-left-toggler-example';
import './examples/navbar-right-toggler-example';
import './examples/navbar-external-content-example';

class NavbarView extends BaseViewMixin(LitElement) {
    
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
        
            <h1 class="bd-title" id="content">Navbar</h1>

            <h4>Install</h4>
            <bs-highlight>
                <pre><code>${unsafeHTML(this._hightlightJavascript(
                    `
                    // install scoped package
                    npm install @lit-element-bootstrap/navbar
                    
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
                    import 'lit-element-bootstrap/components/navbar';

                    // import specific component 
                    import 'lit-element-bootstrap/components/navbar/bs-navbar.js';

                    // import all css & components from the scoped package
                    import '@lit-element-bootstrap/navbar';

                    // import specific component from the scoped package
                    import '@lit-element-bootstrap/navbar/bs-navbar.js';
                    `
                ))}</code></pre>
            </bs-highlight>

            <navbar-all-components-example></navbar-all-components-example>
            
            <h3>Brand</h3>
            
            <navbar-brand-example></navbar-brand-example>
            
            <navbar-brand-images-example></navbar-brand-images-example>
           
            <h3>Nav</h3>
            
            <navbar-nav-example></navbar-nav-example>
            
            <navbar-nav-dropdown-example></navbar-nav-dropdown-example>
            
            <h3>Forms</h3>
            
            <navbar-form-brand-example></navbar-form-brand-example>
            
            <navbar-form-input-group-example></navbar-form-input-group-example>
            
            <navbar-form-buttons-example></navbar-form-buttons-example>
            
            <h3>Text</h3>
            
            <navbar-text-inline-example></navbar-text-inline-example>
            
            <navbar-text-mix-elements-example></navbar-text-mix-elements-example>
            
            <h2>Color schemes</h2>
            
            <navbar-color-scheme-example></navbar-color-scheme-example>
            
            <h2>Containers</h2>
            
            <navbar-outer-container-example></navbar-outer-container-example>
            
            <navbar-inner-container-example></navbar-inner-container-example>
            
            <h2>Placement</h2>
            
            <navbar-default-placement-example></navbar-default-placement-example>
            
            <navbar-fixed-top-example></navbar-fixed-top-example>
            
            <navbar-fixed-bottom-example></navbar-fixed-bottom-example>
            
            <navbar-sticky-top-example></navbar-sticky-top-example>
            
            <h2>Responsive behaviors</h2>
            
            <navbar-hidden-brand-example></navbar-hidden-brand-example>
            
            <p>With a brand name shown on the left and toggler on the right:</p>
            
            <navbar-right-toggler-example></navbar-right-toggler-example>
            
            <p>With a toggler on the left and brand name on the right:</p>
            
            <navbar-left-toggler-example></navbar-left-toggler-example>
            
            <h3>External content</h3>
            
            <navbar-external-content-example></navbar-external-content-example>
            
            <br />
            <br />
            <br />
        `;
    }
};

window.customElements.define('navbar-view', NavbarView);