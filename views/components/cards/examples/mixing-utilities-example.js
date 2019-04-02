
import { LitElement, css } from 'lit-element';
import { BsBordersCss, BsTextColorCss, BsSpacingCss, BsBackgroundColorsCss } from 'lit-element-bootstrap/utilities';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';

import 'lit-element-bootstrap/components/card';

class MixingUtilitiesExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsTextColorCss,
            BsBordersCss,
            BsSpacingCss,
            BsBackgroundColorsCss,
            css`
                bs-card {
                    max-width: 18rem;
                }
            `
        ];
    }

    _getExample() {
        return `
            <bs-card class="border-success mb-3">
                <bs-card-header slot="card-header" class="bg-transparent border-success">Header</bs-card-header>
                <bs-card-body class="text-success">
                    <bs-card-title slot="card-title">
                        <h5>Success card title</h5>
                    </bs-card-title>
                    <bs-card-text slot="card-text">
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </bs-card-text>
                </bs-card-body>
                <bs-card-footer slot="card-footer" class="bg-transparent border-success">Footer</bs-card-footer>
            </bs-card>
        `;
    }
};

window.customElements.define('mixing-utilities-example', MixingUtilitiesExample);