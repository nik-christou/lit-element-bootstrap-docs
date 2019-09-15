
import { LitElement, html } from 'lit-element';
import { BaseViewMixin } from '../../base-view.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { BsDocsContentCss } from '../../../component/content/bs-docs-content-css.js';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

import './examples/static-modal-example.js';
import './examples/working-modal-demo-example.js';
import './examples/modal-long-content-example.js';
import './examples/modal-centered-example.js';
import './examples/modal-grid-example.js';
import './examples/modal-varying-content-example.js';
import './examples/modal-no-animation-example.js';
import './examples/modal-sizes-example.js';

class ModalView extends BaseViewMixin(LitElement) {
    
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

            <h1 class="bd-title" id="content">Modal</h1>

            <h4>Install</h4>
            <bs-highlight>
                <pre><code>${unsafeHTML(this._hightlightJavascript(
                    `
                    // install scoped package
                    npm install @lit-element-bootstrap/modal
                    
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
                    import 'lit-element-bootstrap/components/modal';

                    // import specific component 
                    import 'lit-element-bootstrap/components/modal/bs-modal.js';

                    // import all css & components from the scoped package
                    import '@lit-element-bootstrap/modal';

                    // import specific component from the scoped package
                    import '@lit-element-bootstrap/modal/bs-modal.js';
                    `
                ))}</code></pre>
            </bs-highlight>

            <static-modal-example></static-modal-example>
            
            <working-modal-demo-example></working-modal-demo-example>
            
            <h3>Scrolling long content</h3>
            
            <modal-long-content-example></modal-long-content-example>
            
            <h3>Vertically centered</h3>
            
            <modal-centered-example></modal-centered-example>
            
            <h3>Using the grid</h3>
            
            <modal-grid-example></modal-grid-example>
            
            <h3>Varying modal content</h3>
            
            <modal-varying-content-example></modal-varying-content-example>
            
            <h3>Remove animation</h3>
            
            <modal-no-animation-example></modal-no-animation-example>
            
            <h2>Optional sizes</h2>
            
            <modal-sizes-example></modal-sizes-example>
            
            <br />
            <br />
            <br />
        `;
    }
};

window.customElements.define('modal-view', ModalView);