
import { LitElement, html } from 'lit-element';
import { BaseViewMixin } from '../../base-view.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { BsDocsContentCss } from '../../../component/content/bs-docs-content-css.js';
import { BsContentRebootCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

import '../../../component/callout/bs-callout';
import './examples/basic-list-group-example';
import './examples/active-list-group-items-example';
import './examples/disabled-list-group-items-example';
import './examples/links-list-group-example';
import './examples/buttons-list-group-example';
import './examples/flush-list-group-example';
import './examples/contextual-list-group-example';
import './examples/contextual-links-list-group-example';
import './examples/badges-list-group-example';
import './examples/custom-content-list-group-example';

class ListGroupsView extends BaseViewMixin(LitElement) {
   
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
        
            <h1 class="bd-title" id="content">List group</h1>
            
            <h4>Install</h4>
            <bs-highlight>
                <pre><code>${unsafeHTML(this._hightlightJavascript(
                    `
                    // install scoped package
                    npm install @lit-element-bootstrap/list-group
                    
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
                    import 'lit-element-bootstrap/components/list-group';

                    // import specific component 
                    import 'lit-element-bootstrap/components/list-group/bs-list-group.js';

                    // import all css & components from the scoped package
                    import '@lit-element-bootstrap/list-group';

                    // import specific component from the scoped package
                    import '@lit-element-bootstrap/list-group/bs-list-group.js';
                    `
                ))}</code></pre>
            </bs-highlight>

            <basic-list-group-example></basic-list-group-example>
            
            <h2>Active items</h2>
            
            <active-list-group-items-example></active-list-group-items-example>
            
            <h2>Disabled items</h2>
            
            <disabled-list-group-items-example></disabled-list-group-items-example>
          
            <h2>Links and buttons</h2>
            
            <links-list-group-example></links-list-group-example>
            
            <buttons-list-group-example></buttons-list-group-example>
        
            <h2>Flush</h2>
            
            <flush-list-group-example></flush-list-group-example>
           
            <h2>Contextual classes</h2>
            
            <contextual-list-group-example></contextual-list-group-example>
        
            <contextual-links-list-group-example></contextual-links-list-group-example>
            
            <h2>With badges</h2>
            
            <badges-list-group-example></badges-list-group-example>
            
            <h2>Custom content</h2>
            
            <custom-content-list-group-example></custom-content-list-group-example>
        
            <br />
            <br />
            <br />
        `;
    }
};

window.customElements.define('list-groups-view', ListGroupsView);