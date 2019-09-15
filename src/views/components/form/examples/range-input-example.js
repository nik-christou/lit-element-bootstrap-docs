
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import 'lit-element-bootstrap/components/form';

class RangeInputExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <bs-form>
                <bs-form-group>
                    <bs-form-label slot="label">Example Range input</bs-form-label>
                    <bs-form-range slot="control"></bs-form-range>
                </bs-form-group>
            </bs-form>
        `;
    }
};

window.customElements.define('range-input-example', RangeInputExample);