
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';

import 'lit-element-bootstrap/components/form';

class RadioStackedExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <bs-form-radio-name-group name="exampleRadios">
                <bs-form-check-group>
                    <bs-form-radio-input slot="check" checked type="radio" value="option1"></bs-form-radio-input>
                    <bs-form-check-label slot="label">Default radio</bs-form-check-label>
                </bs-form-check-group>
                <bs-form-check-group>
                    <bs-form-radio-input slot="check" type="radio" value="option2"></bs-form-radio-input>
                    <bs-form-check-label slot="label">Second default radio</bs-form-check-label>
                </bs-form-check-group>
                <bs-form-check-group disabled>
                    <bs-form-radio-input slot="check" type="radio" value="option3"></bs-form-radio-input>
                    <bs-form-check-label slot="label">Disabled radio</bs-form-check-label>
                </bs-form-check-group>
            </bs-form-radio-name-group>
        `;
    }
};

window.customElements.define('radio-stacked-example', RadioStackedExample);