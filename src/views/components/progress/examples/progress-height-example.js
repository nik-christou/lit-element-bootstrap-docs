
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';

import 'lit-element-bootstrap/components/progress';

class ProgressHeightExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <bs-progress style="height: 1px;">
                <bs-progress-bar completed="25"></bs-progress-bar>
            </bs-progress>

            <br />

            <bs-progress style="height: 20px;">
                <bs-progress-bar completed="25"></bs-progress-bar>
            </bs-progress>
        `;
    }
};

window.customElements.define('progress-height-example', ProgressHeightExample);