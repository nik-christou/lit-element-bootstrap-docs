
import { LitElement, html } from 'lit-element';
import { BaseViewMixin } from '../../base-view.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { BsDocsContentCss } from '../../../component/content/bs-docs-content-css.js';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

import '../../../component/callout/bs-callout';
import './examples/basic-button-group-example';
import './examples/button-toolbar-example';
import './examples/button-toolbar-input-groups-example';
import './examples/sizing-button-group-example';
import './examples/nesting-button-group-example';
import './examples/vertical-button-group-example';
import './examples/vertical-dropdown-group-example';

class ButtonGroupView extends BaseViewMixin(LitElement) {
    
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

            <h1 class="bd-title" id="content">Button group</h1>

            <h4>Install</h4>
            <bs-highlight>
                <pre><code>${unsafeHTML(this._hightlightJavascript(
                    `
                    // install scoped package
                    npm install @lit-element-bootstrap/button-group
                    
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
                    import 'lit-element-bootstrap/components/button-group';

                    // import specific component 
                    import 'lit-element-bootstrap/components/button-group/bs-button-group.js';

                    // import all css & components from the scoped package
                    import '@lit-element-bootstrap/button-group';

                    // import specific component from the scoped package
                    import '@lit-element-bootstrap/button-group/bs-button-group.js';
                    `
                ))}</code></pre>
            </bs-highlight>

            <basic-button-group-example></basic-button-group-example>
            
            <h2>Button toolbar</h2>
            
            <button-toolbar-example></button-toolbar-example>
            
            <button-toolbar-input-groups-example></button-toolbar-input-groups-example>
                
            <h2>Sizing</h2>
            
            <sizing-button-group-example></sizing-button-group-example>
        
            <h2>Nesting</h2>
        
            <nesting-button-group-example></nesting-button-group-example>
            
            <h2>Vertical Variation</h2>

            <vertical-button-group-example></vertical-button-group-example>
            
            <vertical-dropdown-group-example></vertical-dropdown-group-example>

            <br />
            <br />
            <br />
        `;
    }
};

window.customElements.define('button-group-view', ButtonGroupView);