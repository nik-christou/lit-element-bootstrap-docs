
import { LitElement, css } from 'lit-element';
import { BsTextColorCss } from '@lit-element-bootstrap/utilities';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import '@lit-element-bootstrap/card';

class ImageOverlayExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsTextColorCss,
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
            <bs-card class="bg-dark text-white">
                <bs-card-img position="overlay" slot="top-image">
                    <svg class="bd-placeholder-img bd-placeholder-img-lg" width="100%" height="270" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Card image"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Card image</text></svg>
                </bs-card-img>
                <bs-card-overlay>
                    <bs-card-title slot="card-title">
                        <h5>Card title</h5>
                    </bs-card-title>
                    <bs-card-text slot="card-text">
                        <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p>Last updated 3 mins ago</p>
                    </bs-card-text>
                </bs-card-overlay>
            </bs-card>
        `;
    }
};

window.customElements.define('image-overlay-example', ImageOverlayExample);