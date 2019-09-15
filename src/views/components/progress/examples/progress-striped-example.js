
import { LitElement } from 'lit-element';
import { BsBackgroundColorsCss } from 'lit-element-bootstrap/utilities';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import 'lit-element-bootstrap/components/progress';

class ProgressStripedExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsBackgroundColorsCss
        ];
    }
    
    _getExample() {
        return `
            <bs-progress>
                <bs-progress-bar striped completed="25" class="bg-success"></bs-progress-bar>
            </bs-progress>

            <br />

            <bs-progress>
                <bs-progress-bar striped completed="50" class="bg-info"></bs-progress-bar>
            </bs-progress>

            <br />

            <bs-progress>
                <bs-progress-bar striped completed="75" class="bg-warning"></bs-progress-bar>
            </bs-progress>

            <br />

            <bs-progress>
                <bs-progress-bar striped completed="100" class="bg-danger"></bs-progress-bar>
            </bs-progress>
        `;
    }
};

window.customElements.define('progress-striped-example', ProgressStripedExample);