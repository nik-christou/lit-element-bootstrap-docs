
import { LitElement, html } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { BaseViewMixin } from '../../base-view.js';
import { BsDocsContentCss } from '../../../component/content/bs-docs-content.css.js';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from '@lit-element-bootstrap/content';

import './examples/button-styles-example.js';
import './examples/button-tags-example.js';
import './examples/button-outlines-example.js';
import './examples/button-sizes-example.js';
import './examples/button-blocks-example.js';
import './examples/button-active-state-example.js';
import './examples/button-disabled-state-example.js';
import './examples/button-link-disabled-state-example.js';
import './examples/button-toggle-example.js';

class ButtonsView extends BaseViewMixin(LitElement) {

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
        
            <h1 class="bd-title" id="content">Buttons</h1>
            
            <h4>Install</h4>
            <bs-highlight>
                <pre><code>${unsafeHTML(this._hightlightJavascript(
                    `
                    // install scoped package
                    npm install @lit-element-bootstrap/button
                    
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
                    import 'lit-element-bootstrap/components/button';

                    // import specific component 
                    import 'lit-element-bootstrap/components/button/bs-button.js';

                    // import all css & components from the scoped package
                    import '@lit-element-bootstrap/button';

                    // import specific component from the scoped package
                    import '@lit-element-bootstrap/button/bs-button.js';
                    `
                ))}</code></pre>
            </bs-highlight>

            <button-styles-example></button-styles-example>
            
            <h2>Button tags</h2>
            
            <button-tags-example></button-tags-example>
            
            <h2>Outline buttons</h2>
        
            <button-outlines-example></button-outlines-example>
            
            <h2>Sizes</h2>
        
            <button-sizes-example></button-sizes-example>
            
            <button-blocks-example></button-blocks-example>
            
            <h2>Active state</h2>
        
            <button-active-state-example></button-active-state-example>
            
            <h2>Disabled state</h2>
        
            <button-disabled-state-example></button-disabled-state-example>
            
            <button-link-disabled-state-example></button-link-disabled-state-example>
            
            <h2>Toggle states</h2>
        
            <button-toggle-example></button-toggle-example>
            
            <br />
            <br />
            <br />
        `;
    }
};

window.customElements.define('buttons-view', ButtonsView);