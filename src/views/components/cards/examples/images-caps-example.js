
import { LitElement, css } from 'lit-element';
import { BsTextCss, BsTextColorCss, BsSpacingCss } from '@lit-element-bootstrap/utilities';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import '@lit-element-bootstrap/card';

class ImagesCapsExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsSpacingCss,
            BsTextCss,
            BsTextColorCss,
            css`
                :host {
                    --bs-img-height: 180px;
                }
                
                .bd-placeholder-img {
                    font-size: 1.125rem;
                    text-anchor: middle;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                }
            `
        ];
    }

    _getExample() {
        return `
            <bs-card class="mb-3">
                <bs-card-img position="top" slot="top-image">
                    <svg class="bd-placeholder-img" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Image cap"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
                </bs-card-img>
                <bs-card-body>
                    <bs-card-title slot="card-title">
                        <h5>Card title</h5>
                    </bs-card-title>
                    <bs-card-text slot="card-text">
                        <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p><small class="text-muted">Last updated 3 mins ago</small></p>
                    </bs-card-text>
                </bs-card-body>
            </bs-card>
            
            <bs-card class="mb-3">
                <bs-card-body>
                    <bs-card-title slot="card-title">
                        <h5>Card title</h5>
                    </bs-card-title>
                    <bs-card-text slot="card-text">
                        <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p><small class="text-muted">Last updated 3 mins ago</small></p>
                    </bs-card-text>
                </bs-card-body>
                <bs-card-img position="bottom" slot="bottom-image">
                    <svg class="bd-placeholder-img" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Image cap"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
                </bs-card-img>
            </bs-card>
        `;
    }
};

window.customElements.define('images-caps-example', ImagesCapsExample);