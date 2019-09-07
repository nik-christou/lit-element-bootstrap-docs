
import { LitElement, html } from 'lit-element';
import { BaseViewMixin } from '../../base-view.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { BsDocsContentCss } from '../../../component/content/bs-docs-content-css.js';
import { BsContentRebootCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

import './examples/input-group-basic-example';
import './examples/input-group-sizing-example';
import './examples/input-group-checkbox-radio-example';
import './examples/input-group-multiple-inputs-example';
import './examples/input-group-multiple-addons-example';
import './examples/input-group-button-addons-example';
import './examples/input-group-multiple-buttons-example';
import './examples/input-group-dropdowns-example';
import './examples/input-group-segmented-buttons-example';

class InputGroupView extends BaseViewMixin(LitElement) {
    
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

            <h1 class="bd-title" id="content">Input group</h1>
            
            <h4>Install</h4>
            <bs-highlight>
                <pre><code>${unsafeHTML(this._hightlightJavascript(
                    `
                    // install scoped package
                    npm install @lit-element-bootstrap/input-group
                    
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
                    import 'lit-element-bootstrap/components/input-group';

                    // import specific component 
                    import 'lit-element-bootstrap/components/input-group/bs-input-group.js';

                    // import all css & components from the scoped package
                    import '@lit-element-bootstrap/input-group';

                    // import specific component from the scoped package
                    import '@lit-element-bootstrap/input-group/bs-input-group.js';
                    `
                ))}</code></pre>
            </bs-highlight>

            <input-group-basic-example></input-group-basic-example>
        
            <h2>Sizing</h2>
            
            <input-group-sizing-example></input-group-sizing-example>
            
            <h2>Checkboxes and radios</h2>
            
            <input-group-checkbox-radio-example></input-group-checkbox-radio-example>
            
            <h2>Multiple inputs</h2>
            
            <input-group-multiple-inputs-example></input-group-multiple-inputs-example>
            
            <h2>Multiple addons</h2>
            
            <input-group-multiple-addons-example></input-group-multiple-addons-example>
        
            <h2>Button addons</h2>
            
            <input-group-button-addons-example></input-group-button-addons-example>
            
            <input-group-multiple-buttons-example></input-group-multiple-buttons-example>
            
            <h2>Buttons with dropdowns</h2>
        
            <input-group-dropdowns-example></input-group-dropdowns-example>
            
            <h2>Segmented buttons</h2>
            
            <input-group-segmented-buttons-example></input-group-segmented-buttons-example>
            
            <br />
            <br />
            <br />
        `;
    }
};

window.customElements.define('input-group-view', InputGroupView);