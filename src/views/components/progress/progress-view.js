
import { LitElement, html } from 'lit-element';
import { BaseViewMixin } from '../../base-view.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { BsDocsContentCss } from '../../../component/content/bs-docs-content.css.js';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from '@lit-element-bootstrap/content';

import './examples/progress-width-example.js';
import './examples/progress-label-example.js';
import './examples/progress-height-example.js';
import './examples/progress-backgrounds-example.js';
import './examples/progress-multiple-bars-example.js';
import './examples/progress-striped-example.js';
import './examples/progress-animated-stripes-example.js';

class ProgressView extends BaseViewMixin(LitElement) {
    
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
          
            <h1 class="bd-title" id="content">Progress</h1>
            
            <h4>Install</h4>
            <bs-highlight>
                <pre><code>${unsafeHTML(this._hightlightJavascript(
                    `
                    // install scoped package
                    npm install @lit-element-bootstrap/progress
                    
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
                    import 'lit-element-bootstrap/components/progress';

                    // import specific component 
                    import 'lit-element-bootstrap/components/progress/bs-progress.js';

                    // import all css & components from the scoped package
                    import '@lit-element-bootstrap/progress';

                    // import specific component from the scoped package
                    import '@lit-element-bootstrap/progress/bs-progress.js';
                    `
                ))}</code></pre>
            </bs-highlight>

            <progress-width-example></progress-width-example>
          
            <h2>Labels</h2>
            
            <progress-label-example></progress-label-example>
            
            <h2>Height</h2>
            
            <progress-height-example></progress-height-example>
            
            <h2>Backgrounds</h2>
            
            <progress-backgrounds-example></progress-backgrounds-example>
           
            <h2>Multiple bars</h2>
            
            <progress-multiple-bars-example></progress-multiple-bars-example>
            
            <h2>Striped</h2>
            
            <progress-striped-example></progress-striped-example>
           
            <h2>Animated striped</h2>
            
            <progress-animated-striped-example></progress-animated-striped-example>
          
            <br />
            <br />
            <br />
        `;
    }
};

window.customElements.define('progress-view', ProgressView);