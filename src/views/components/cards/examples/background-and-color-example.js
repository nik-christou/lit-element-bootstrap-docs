
import { LitElement, css } from 'lit-element';
import { BsTextColorCss, BsSpacingCss, BsBackgroundColorsCss } from 'lit-element-bootstrap/utilities';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

class BackgroundAndColorExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsTextColorCss,
            BsBackgroundColorsCss,
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
            <bs-card class="text-white bg-primary mb-3">
                <bs-card-header slot="card-header">Header</bs-card-header>
                <bs-card-body>
                    <bs-card-title slot="card-title">
                        <h5>Primary card title</h5>
                    </bs-card-title>
                    <bs-card-text slot="card-text">
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </bs-card-text>
                </bs-card-body>
            </bs-card>

            <bs-card class="text-white bg-secondary mb-3">
                <bs-card-header slot="card-header">Header</bs-card-header>
                <bs-card-body>
                    <bs-card-title slot="card-title">
                        <h5>Primary card title</h5>
                    </bs-card-title>
                    <bs-card-text slot="card-text">
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </bs-card-text>
                </bs-card-body>
            </bs-card>

            <bs-card class="text-white bg-success mb-3">
                <bs-card-header slot="card-header">Header</bs-card-header>
                <bs-card-body>
                    <bs-card-title slot="card-title">
                        <h5>Primary card title</h5>
                    </bs-card-title>
                    <bs-card-text slot="card-text">
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </bs-card-text>
                </bs-card-body>
            </bs-card>

            <bs-card class="text-white bg-danger mb-3">
                <bs-card-header slot="card-header">Header</bs-card-header>
                <bs-card-body>
                    <bs-card-title slot="card-title">
                        <h5>Primary card title</h5>
                    </bs-card-title>
                    <bs-card-text slot="card-text">
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </bs-card-text>
                </bs-card-body>
            </bs-card>

            <bs-card class="text-white bg-warning mb-3">
                <bs-card-header slot="card-header">Header</bs-card-header>
                <bs-card-body>
                    <bs-card-title slot="card-title">
                        <h5>Primary card title</h5>
                    </bs-card-title>
                    <bs-card-text slot="card-text">
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </bs-card-text>
                </bs-card-body>
            </bs-card>

            <bs-card class="text-white bg-info mb-3">
                <bs-card-header slot="card-header">Header</bs-card-header>
                <bs-card-body>
                    <bs-card-title slot="card-title">
                        <h5>Primary card title</h5>
                    </bs-card-title>
                    <bs-card-text slot="card-text">
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </bs-card-text>
                </bs-card-body>
            </bs-card>

            <bs-card class="bg-light mb-3">
                <bs-card-header slot="card-header">Header</bs-card-header>
                <bs-card-body>
                    <bs-card-title slot="card-title">
                        <h5>Primary card title</h5>
                    </bs-card-title>
                    <bs-card-text slot="card-text">
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </bs-card-text>
                </bs-card-body>
            </bs-card>

            <bs-card class="text-white bg-dark mb-3">
                <bs-card-header slot="card-header">Header</bs-card-header>
                <bs-card-body>
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

window.customElements.define('background-and-color-example', BackgroundAndColorExample);