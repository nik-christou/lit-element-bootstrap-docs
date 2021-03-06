
import { LitElement, css } from 'lit-element';
import { BsSizingCss, BsDisplayCss } from '@lit-element-bootstrap/utilities';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import '@lit-element-bootstrap/carousel';

class SlidesOnlyExample extends BsExampleMixin(LitElement) {
    
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
                <bs-carousel-item active>
                    <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: First slide"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#555" dy=".3em">First slide</text></svg>
                </bs-carousel-item>
                <bs-carousel-item>
                    <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Second slide"><title>Placeholder</title><rect width="100%" height="100%" fill="#666"></rect><text x="50%" y="50%" fill="#444" dy=".3em">Second slide</text></svg>
                </bs-carousel-item>
                <bs-carousel-item>
                    <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Third slide"><title>Placeholder</title><rect width="100%" height="100%" fill="#555"></rect><text x="50%" y="50%" fill="#333" dy=".3em">Third slide</text></svg>
                </bs-carousel-item>
            </bs-carousel> 
        `;
    }
};

window.customElements.define('slides-only-example', SlidesOnlyExample);