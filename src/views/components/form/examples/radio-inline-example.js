
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import '@lit-element-bootstrap/form';

class RadioInlineExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <bs-form-radio-group name="inlineRadioOptions">
                <bs-form-check-group inline>
                    <bs-form-radio-input slot="check" checked value="option1"></bs-form-radio-input>
                    <bs-form-check-label slot="label">1</bs-form-check-label>
                </bs-form-check-group>
                <bs-form-check-group inline>
                    <bs-form-radio-input slot="check" value="option2"></bs-form-radio-input>
                    <bs-form-check-label slot="label">2</bs-form-check-label>
                </bs-form-check-group>
                <bs-form-check-group inline disabled>
                    <bs-form-radio-input slot="check" value="option3"></bs-form-radio-input>
                    <bs-form-check-label slot="label">3 (disabled)</bs-form-check-label>
                </bs-form-check-group>
            </bs-form-radio-name-group>
        `;
    }
};

window.customElements.define('radio-inline-example', RadioInlineExample);