
import { LitElement, html, css } from 'lit-element';
import { BaseViewMixin } from '../../base-view.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { BsDocsContentCss } from '../../../component/content/bs-docs-content.css.js';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from '@lit-element-bootstrap/content';

import '../../../component/callout/bs-callout.js';
import './examples/single-btn-dropdown-example.js';
import './examples/single-link-dropdown-example.js';
import './examples/button-variant-dropdown-example.js';
import './examples/split-button-dropdown-example.js';
import './examples/sizing-dropdown-example.js';
import './examples/dropup-example.js';
import './examples/dropright-example.js';
import './examples/dropleft-example.js';
import './examples/menu-items-example.js';
import './examples/dropdown-text-item-example.js';
import './examples/dropdown-active-item-example.js';
import './examples/dropdown-disabled-item-example.js';
import './examples/right-aligned-menu-example.js';
import './examples/dropdown-header-example.js';
import './examples/dividers-example.js';
import './examples/dropdown-menu-text-example.js';
import './examples/form-in-dropdown-menu-example.js';
import './examples/offset-menu-example.js';

class DropdownsView extends BaseViewMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsContentRebootCss,
            BsContentTypographyCss,
            BsDocsContentCss,
            BsContentCodeCss,
            css`
                :host {
                    display: block;
                }
            `
        ];
    }
    
    render() {
        return html`
        
            <h1 class="bd-title" id="content">Dropdowns</h1>

            <h4>Install</h4>
            <bs-highlight>
                <pre><code>${unsafeHTML(this._hightlightJavascript(
                    `
                    // install scoped package
                    npm install @lit-element-bootstrap/dropdown
                    
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
                    import 'lit-element-bootstrap/components/dropdown';

                    // import specific component 
                    import 'lit-element-bootstrap/components/dropdown/bs-dropdown.js';

                    // import all css & components from the scoped package
                    import '@lit-element-bootstrap/dropdown';

                    // import specific component from the scoped package
                    import '@lit-element-bootstrap/dropdown/bs-dropdown.js';
                    `
                ))}</code></pre>
            </bs-highlight>

            <h3>Single Button</h3>
            
            <single-btn-dropdown-example></single-btn-dropdown-example>
            
            <single-link-dropdown-example></single-link-dropdown-example>
            
            <button-variant-dropdown-example></button-variant-dropdown-example>
        
            <h3>Split Button</h3>
        
            <split-button-dropdown-example></split-button-dropdown-example>
            
            <h2>Sizing</h2>
            
            <sizing-dropdown-example></sizing-dropdown-example>
           
            <h2>Directions</h2>
        
            <h3>Dropup</h3>
            
            <dropup-example></dropup-example>
            
            <h3>Dropright</h3>
            
            <dropright-example></dropright-example>
            
            <h3>Dropleft</h3>
            
            <dropleft-example></dropleft-example>
            
            <h2>Menu items</h2>
            
            <menu-items-example></menu-items-example>
            
            <dropdown-text-item-example></dropdown-text-item-example>
            
            <h3>Active</h3>
            
            <dropdown-active-item-example></dropdown-active-item-example>
        
            <h3>Disabled</h3>
            
            <dropdown-disabled-item-example></dropdown-disabled-item-example>
        
            <h2>Menu alignment</h2>
            
            <right-aligned-menu-example></right-aligned-menu-example>
            
            <h3>Headers</h3>
            
            <dropdown-header-example></dropdown-header-example>
            
            <h3>Dividers</h3>
            
            <dividers-example></dividers-example>
        
            <h3>Text</h3>
            
            <dropdown-menu-text-example></dropdown-menu-text-example>
            
            <h3>Forms</h3>
            
            <form-in-dropdown-menu-example></form-in-dropdown-menu-example>
        
            <h2>Dropdown options</h2>
            
            <offset-menu-example></offset-menu-example>
        
            <br />
            <br />
            <br />
        `;
    }
};

window.customElements.define('dropdowns-view', DropdownsView);