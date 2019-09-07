
import { LitElement, html } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { BaseViewMixin } from '../../base-view.js';
import { BsDocsContentCss } from '../../../component/content/bs-docs-content-css.js';
import { BsContentRebootCss, BsContentTypographyCss, BsContentCodeCss } from  'lit-element-bootstrap/content';

import './examples/collapse-accordion-example.js';
import './examples/collapse-single-target-example.js';
import './examples/collapse-multi-target-example.js';

class CollapseView extends BaseViewMixin(LitElement) {
    
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
            
            <h1 class="bd-title" id="content">Collapse</h1>

            <h4>Install</h4>
            <bs-highlight>
                <pre><code>${unsafeHTML(this._hightlightJavascript(
                    `
                    // install scoped package
                    npm install @lit-element-bootstrap/collapse
                    
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
                    import 'lit-element-bootstrap/behaviour/collapse';

                    // import specific component 
                    import 'lit-element-bootstrap/behaviour/collapse/bs-accordion.js';

                    // import all css & components from the scoped package
                    import '@lit-element-bootstrap/collapse';

                    // import specific component from the scoped package
                    import '@lit-element-bootstrap/collapse/bs-accordion.js';
                    `
                ))}</code></pre>
            </bs-highlight>
            
            <collapse-single-target-example></collapse-single-target-example>
            
            <h2>Multiple targets</h2>
            
            <collapse-multi-target-example></collapse-multi-target-example>
            
            <h2>Accordion Example</h2>
        
            <collapse-accordion-example></collapse-accordion-example>
            
            <br />
            <br />
            <br />
        `;
    }
};

window.customElements.define('collapse-view', CollapseView);