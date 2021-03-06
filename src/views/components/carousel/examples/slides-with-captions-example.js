
import { LitElement, css } from 'lit-element';
import { BsSizingCss, BsDisplayCss } from '@lit-element-bootstrap/utilities';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import '@lit-element-bootstrap/carousel';

class SlidesWithCaptionsExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsDisplayCss,
            BsSizingCss,
            css`
                .bd-placeholder-img {
                    font-size: 1.125rem;
                    text-anchor: middle;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                }
                
                .bd-placeholder-img-lg {
                    font-size: 3.5rem;
                }
            `
        ];
    }
    
    _getExample() {
        return `
            <bs-carousel>
                <bs-carousel-indicators slot="indicators">
                    <bs-carousel-indicator index="0" active></bs-carousel-indicator>
                    <bs-carousel-indicator index="1"></bs-carousel-indicator>
                    <bs-carousel-indicator index="2"></bs-carousel-indicator>
                </bs-carousel-indicators>
                <bs-carousel-item active>
                    <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: First slide"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#555" dy=".3em">First slide</text></svg>
                    <bs-carousel-caption slot="caption">
                        <div class="d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </bs-carousel-caption>
                </bs-carousel-item>
                <bs-carousel-item>
                    <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Second slide"><title>Placeholder</title><rect width="100%" height="100%" fill="#666"></rect><text x="50%" y="50%" fill="#444" dy=".3em">Second slide</text></svg>
                    <bs-carousel-caption slot="caption">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </bs-carousel-caption>
                </bs-carousel-item>
                <bs-carousel-item>
                    <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Third slide"><title>Placeholder</title><rect width="100%" height="100%" fill="#555"></rect><text x="50%" y="50%" fill="#333" dy=".3em">Third slide</text></svg>
                    <bs-carousel-caption slot="caption">
                        <div class="d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </div>
                    </bs-carousel-caption>
                </bs-carousel-item>
                <bs-carousel-control-prev slot="control-prev"></bs-carousel-control-prev>
                <bs-carousel-control-next slot="control-next"></bs-carousel-control-next>
            </bs-carousel>
        `;
    }
};

window.customElements.define('slides-with-captions-example', SlidesWithCaptionsExample);