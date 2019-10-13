
import { LitElement, css } from 'lit-element';
import { BsTextColorCss, BsSpacingCss, BsBordersCss } from '@lit-element-bootstrap/utilities';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import '@lit-element-bootstrap/card';

class BorderAndTextColorExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsTextColorCss,
            BsBordersCss,
            BsSpacingCss,
            css`
                bs-card {
                    max-width: 18rem;
                }
            `
        ];
    }

    _getExample() {
        return `
            <bs-card class="border-primary mb-3">
                <bs-card-header slot="card-header">Header</bs-card-header>
                <bs-card-body class="text-primary">
                    <bs-card-title slot="card-title">
                        <h5>Primary card title</h5>
                    </bs-card-title>
                    <bs-card-text slot="card-text">
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </bs-card-text>
                </bs-card-body>
            </bs-card>
        `;
    }
};

window.customElements.define('border-and-text-color-example', BorderAndTextColorExample);