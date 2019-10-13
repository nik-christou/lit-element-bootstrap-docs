
import { LitElement, html } from 'lit-element';
import { BaseViewMixin } from '../../base-view.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { BsDocsContentCss } from '../../../component/content/bs-docs-content.css.js';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from '@lit-element-bootstrap/content';

import './examples/slides-only-example.js';
import './examples/slides-with-controls-example.js';
import './examples/slides-with-indicators-example.js';
import './examples/slides-with-captions-example.js';
import './examples/slide-with-crossfade-example.js';

class CarouselView extends BaseViewMixin(LitElement) {
    
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
        
            <h1 class="bd-title" id="content">Carousel</h1>

            <h4>Install</h4>
            <bs-highlight>
                <pre><code>${unsafeHTML(this._hightlightJavascript(
                    `
                    // install scoped package
                    npm install @lit-element-bootstrap/carousel
                    
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
                    import 'lit-element-bootstrap/components/carousel';

                    // import specific component 
                    import 'lit-element-bootstrap/components/carousel/bs-carousel.js';

                    // import all css & components from the scoped package
                    import '@lit-element-bootstrap/carousel';

                    // import specific component from the scoped package
                    import '@lit-element-bootstrap/carousel/bs-carousel.js';
                    `
                ))}</code></pre>
            </bs-highlight>

            <slides-only-example></slides-only-example>
            
            <h3>With controls</h3>
            
            <slides-with-controls-example></slides-with-controls-example>
            
            <h3>With indicators</h3>
            
            <slides-with-indicators-example></slides-with-indicators-example>
            
            <h3>With captions</h3>
            
            <slides-with-captions-example></slides-with-captions-example>
            
            <h3>Crossfade</h3>
            
            <slides-with-crossfade-example></slides-with-crossfade-example>
            
            <br />
            <br />
            <br />
        `;
    }
};

window.customElements.define('carousel-view', CarouselView);