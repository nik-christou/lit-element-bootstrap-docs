
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import '@lit-element-bootstrap/progress';

class ProgressWidthExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <bs-progress>
                <bs-progress-bar striped></bs-progress-bar>
            </bs-progress>

            <br />

            <bs-progress>
                <bs-progress-bar completed="25"></bs-progress-bar>
            </bs-progress>

            <br />

            <bs-progress>
                <bs-progress-bar completed="50"></bs-progress-bar>
            </bs-progress>

            <br />

            <bs-progress>
                <bs-progress-bar completed="75"></bs-progress-bar>
            </bs-progress>

            <br />

            <bs-progress>
                <bs-progress-bar completed="100"></bs-progress-bar>
            </bs-progress>
        `;
    }
};

window.customElements.define('progress-width-example', ProgressWidthExample);