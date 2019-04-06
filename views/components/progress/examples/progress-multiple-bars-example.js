
import { LitElement } from 'lit-element';
import { BsBackgroundColorsCss } from 'lit-element-bootstrap/utilities';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';

import 'lit-element-bootstrap/components/progress';

class ProgressMultipleBarsExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsBackgroundColorsCss
        ];
    }
    
    _getExample() {
        return `
            <bs-progress>
                <bs-progress-bar completed="15"></bs-progress-bar>
                <bs-progress-bar completed="30" class="bg-success"></bs-progress-bar>
                <bs-progress-bar completed="20" class="bg-info"></bs-progress-bar>
            </bs-progress> 
        `;
    }
};

window.customElements.define('progress-multiple-bars-example', ProgressMultipleBarsExample);