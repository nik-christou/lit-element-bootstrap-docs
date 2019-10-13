
import { LitElement, html } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { BaseViewMixin } from '../../base-view.js';
import { BsDocsContentCss } from '../../../component/content/bs-docs-content.css.js';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from '@lit-element-bootstrap/content';

import '../../../component/callout/bs-callout.js';
import './examples/badge-scales-example.js';
import './examples/button-badge-example.js';
import './examples/button-badge-context-example.js';
import './examples/badge-contextual-example.js';
import './examples/pill-badges-example.js';
import './examples/badge-links-example.js';

class BadgesView extends BaseViewMixin(LitElement) {
    
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
        
            <h1 class="bd-title" id="content">Badges</h1>

            <h4>Install</h4>
            <bs-highlight>
                <pre><code>${unsafeHTML(this._hightlightJavascript(
                    `
                    // install scoped package
                    npm install @lit-element-bootstrap/badge
                    
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
                    import 'lit-element-bootstrap/components/badge';

                    // import specific component 
                    import 'lit-element-bootstrap/components/badge/bs-badge.js';

                    // import all css & components from the scoped package
                    import '@lit-element-bootstrap/badge';

                    // import specific component from the scoped package
                    import '@lit-element-bootstrap/badge/bs-badge.js';
                    `
                ))}</code></pre>
            </bs-highlight>

            <badge-scales-example></badge-scales-example>
            
            <button-badge-example></button-badge-example>
        
            <button-badge-context-example></button-badge-context-example>
            
            <badge-contextual-example></badge-contextual-example>
            
            <h2>Pill badges</h2>
            
            <pill-badges-example></pill-badges-example>
            
            <h2>Links</h2>
        
            <badge-links-example></badge-links-example>
            
            <br />
            <br />
            <br />
        `;
    }
};

window.customElements.define('badges-view', BadgesView);