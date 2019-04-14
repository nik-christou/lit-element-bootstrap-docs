
import { LitElement, html } from 'lit-element';
import { BsDocsContentCss } from '../../../component/content/bs-docs-content-css';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

import './examples/slides-only-example';
import './examples/slides-with-controls-example';
import './examples/slides-with-indicators-example';
import './examples/slides-with-captions-example';
import './examples/slide-with-crossfade-example';

class CarouselView extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsDocsContentCss,
            BsContentCodeCss
        ];
    }
    
    render() {
        return html`
        
            <h1 class="bd-title" id="content">Carousel</h1>
            
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