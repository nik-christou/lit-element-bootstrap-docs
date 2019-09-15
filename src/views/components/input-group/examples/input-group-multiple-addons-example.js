
import { LitElement } from 'lit-element';
import { BsSpacingCss } from 'lit-element-bootstrap/utilities';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import 'lit-element-bootstrap/components/form';
import 'lit-element-bootstrap/components/input-group';

class InputGroupMultipleAddonsExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsSpacingCss
        ];
    }
    
    _getExample() {
        return `
            <bs-input-group class="mb-3">
                <bs-input-group-prepend>
                    <bs-input-group-text>$</bs-input-group-text>
                    <bs-input-group-text>0.00</bs-input-group-text>
                </bs-input-group-prepend>
                <bs-form-input></bs-form-input>
            </bs-input-group>

            <bs-input-group class="mb-3">
                <bs-form-input></bs-form-input>
                <bs-input-group-append>
                    <bs-input-group-text>$</bs-input-group-text>
                    <bs-input-group-text>0.00</bs-input-group-text>
                </bs-input-group-append>
            </bs-input-group>
        `;
    }
};

window.customElements.define('input-group-multiple-addons-example', InputGroupMultipleAddonsExample);