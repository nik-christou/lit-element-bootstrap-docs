
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import '@lit-element-bootstrap/progress';

class ProgressLabelExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <bs-progress>
                <bs-progress-bar completed="25">25%</bs-progress-bar>
            </bs-progress>
        `;
    }
};

window.customElements.define('progress-label-example', ProgressLabelExample);