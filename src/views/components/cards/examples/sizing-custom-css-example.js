
import { LitElement, css } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import '@lit-element-bootstrap/button';
import '@lit-element-bootstrap/card';

class SizingCustomCssExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            css`
                bs-card {
                    max-width: 18rem;
                }
            `
        ];
    }

    _getExample() {
        return `
            <bs-card>
                <bs-card-body>
                    <bs-card-title slot="card-title">
                        <h5>Special title treatment</h5>
                    </bs-card-title>
                    <bs-card-text slot="card-text">
                        <p>With supporting text below as a natural lead-in to additional content.</p>
                    </bs-card-text>
                    <bs-button primary>Go somewhere</bs-button>
                </bs-card-body>
            </bs-card>
        `;
    }
};

window.customElements.define('sizing-custom-css-example', SizingCustomCssExample);