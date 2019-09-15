
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import 'lit-element-bootstrap/components/form';

class CheckInlineExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <bs-form-check-group inline>
                <bs-form-checkbox-input slot="check"></bs-form-checkbox-input>
                <bs-form-check-label slot="label">1</bs-form-check-label>
            </bs-form-check-group>

            <bs-form-check-group inline>
                <bs-form-checkbox-input slot="check"></bs-form-checkbox-input>
                <bs-form-check-label slot="label">2</bs-form-check-label>
            </bs-form-check-group>

            <bs-form-check-group inline disabled>
                <bs-form-checkbox-input slot="check"></bs-form-checkbox-input>
                <bs-form-check-label slot="label">3 (disabled)</bs-form-check-label>
            </bs-form-check-group> 
        `;
    }
};

window.customElements.define('check-inline-example', CheckInlineExample);