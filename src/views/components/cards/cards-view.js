
import { LitElement, html } from 'lit-element';
import { BaseViewMixin } from '../../base-view.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { BsDocsContentCss } from '../../../component/content/bs-docs-content.css.js';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from '@lit-element-bootstrap/content';

import '../../../component/callout/bs-callout.js';
import './examples/basic-card-example.js';
import './examples/card-body-example.js';
import './examples/title-text-links-example.js';
import './examples/image-top-card-example.js';
import './examples/card-list-group-example.js';
import './examples/card-list-group-featured-example.js';
import './examples/kitchen-sink-example.js';
import './examples/header-and-footer-example.js';
import './examples/header-and-footer-quote-example.js';
import './examples/header-and-footer-featured-example.js';
import './examples/sizing-grid-markup-example.js';
import './examples/sizing-utilities-example.js';
import './examples/sizing-custom-css-example.js';
import './examples/text-alignment-example.js';
import './examples/card-navigation-tabs-example.js';
import './examples/card-navigation-pills-example.js';
import './examples/images-caps-example.js';
import './examples/image-overlay-example.js';
import './examples/background-and-color-example.js';
import './examples/border-and-text-color-example.js';
import './examples/mixing-utilities-example.js';
import './examples/card-group-example.js';
import './examples/card-group-footer-example.js';
import './examples/card-deck-example.js';
import './examples/card-deck-footer-example.js';
import './examples/card-columns-example.js';
import './examples/card-columns-count-example.js';

class CardsView extends BaseViewMixin(LitElement) {
    
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
        
            <h1 class="bd-title" id="content">Cards</h1>

            <h4>Install</h4>
            <bs-highlight>
                <pre><code>${unsafeHTML(this._hightlightJavascript(
                    `
                    // install scoped package
                    npm install @lit-element-bootstrap/card
                    
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
                    import 'lit-element-bootstrap/components/card';

                    // import specific component 
                    import 'lit-element-bootstrap/components/card/bs-card.js';

                    // import all css & components from the scoped package
                    import '@lit-element-bootstrap/card';

                    // import specific component from the scoped package
                    import '@lit-element-bootstrap/card/bs-card.js';
                    `
                ))}</code></pre>
            </bs-highlight>

            <basic-card-example></basic-card-example>
        
            <h2>Content types</h2>
            
            <card-body-example></card-body-example>
            
            <title-text-links-example></title-text-links-example>
        
            <h3>Images</h3>
            
            <image-top-card-example></image-top-card-example>
        
            <h3>List groups</h3>
        
            <card-list-group-example></card-list-group-example>
            <card-list-group-featured-example></card-list-group-featured-example>
            
            <h3>Kitchen sink</h3>
           
            <kitchen-sink-example></kitchen-sink-example>
            
            <h3>Header and footer</h3>
            
            <header-and-footer-example></header-and-footer-example>
        
            <header-and-footer-quote-example></header-and-footer-quote-example>
        
            <header-and-footer-featured-example></header-and-footer-featured-example>
            
            <h2>Sizing</h2>

            <h3>Using grid markup</h3>

            <sizing-grid-markup-example></sizing-grid-markup-example>
        
            <h3>Using utilities</h3>    
            
            <sizing-utilities-example></sizing-utilities-example>
            
            <h3>Using custom css</h3>
            
            <sizing-custom-css-example></sizing-custom-css-example>
            
            <h2>Text Alignment</h2>
            
            <text-alignment-example></text-alignment-example>
            
            <h2>Navigation</h2>
        
            <card-navigation-tabs-example></card-navigation-tabs-example>
            
            <card-navigation-pills-example></card-navigation-pills-example>
           
            
            <h3>Image caps</h3>
            
            <images-caps-example></images-caps-example>
        
            <h3>Image overlays</h3>
           
            <image-overlay-example></image-overlay-example>
            
            <h2>Card styles</h2>
        
            <h3>Background and color</h3>
            
            <background-and-color-example></background-and-color-example>
            
            <h3>Border</h3>
            
            <border-and-text-color-example></border-and-text-color-example>
            
            <h3>Mixins utilities</h3>
            
            <mixing-utilities-example></mixing-utilities-example>
            
            <h3>Card groups</h3>
          
            <card-group-example></card-group-example>
        
            <card-group-footer-example></card-group-footer-example>
         
            <h3>Card decks</h3>
            
            <card-deck-example></card-deck-example>
                    
            <card-deck-footer-example></card-deck-footer-example>
            
            <h3>Card columns</h3>
            
            <card-columns-example></card-columns-example>
            
            <card-columns-count-example></card-columns-count-example>
        
            <br />
            <br />
            <br />
        `;
    }
};

window.customElements.define('cards-view', CardsView);