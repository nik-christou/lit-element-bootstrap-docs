
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import '@lit-element-bootstrap/form';

class CheckRadioStaticExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <bs-form-check-group>
                <bs-form-checkbox-input static slot="check"></bs-form-checkbox-input>
            </bs-form-check-group>

            <bs-form-check-group>
                <bs-form-radio-input static slot="check" value="option1" name="blankRadio"></bs-form-radio-input>
            </bs-form-check-group>
        `;
    }
};

window.customElements.define('check-radio-static-example', CheckRadioStaticExample);