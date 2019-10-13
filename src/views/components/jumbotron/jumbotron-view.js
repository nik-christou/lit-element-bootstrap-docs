
import { LitElement, html } from 'lit-element';
import { BaseViewMixin } from '../../base-view.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { BsDocsContentCss } from '../../../component/content/bs-docs-content-css.js';
import { BsContentRebootCss, BsContentTypographyCss } from '@lit-element-bootstrap/content';

import './examples/jumbotron-example.js';
import './examples/jumbotron-fluid-example.js';

class JumbotronView extends BaseViewMixin(LitElement) {
    
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

            <h1 class="bd-title" id="content">Jumbotron</h1>

            <h4>Install</h4>
            <bs-highlight>
                <pre><code>${unsafeHTML(this._hightlightJavascript(
                    `
                    // install scoped package
                    npm install @lit-element-bootstrap/jumbotron
                    
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
                    import 'lit-element-bootstrap/components/jumbotron';

                    // import specific component 
                    import 'lit-element-bootstrap/components/jumbotron/bs-jumbotron.js';

                    // import all css & components from the scoped package
                    import '@lit-element-bootstrap/jumbotron';

                    // import specific component from the scoped package
                    import '@lit-element-bootstrap/jumbotron/bs-jumbotron.js';
                    `
                ))}</code></pre>
            </bs-highlight>

            <jumbotron-example></jumbotron-example>
            
            <jumbotron-fluid-example></jumbotron-fluid-example>
            
            <br />
            <br />
            <br />
        `;
    }
};

window.customElements.define('jumbotron-view', JumbotronView);