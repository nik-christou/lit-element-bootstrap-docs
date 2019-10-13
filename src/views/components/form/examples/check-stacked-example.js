
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import '@lit-element-bootstrap/form';

class CheckStackedExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <bs-form-check-group>
                <bs-form-checkbox-input slot="check"></bs-form-checkbox-input>
                <bs-form-check-label slot="label">Default checkbox</bs-form-check-label>
            </bs-form-check-group>

            <bs-form-check-group disabled>
                <bs-form-checkbox-input slot="check"></bs-form-checkbox-input>
                <bs-form-check-label slot="label">Disabled checkbox</bs-form-check-label>
            </bs-form-check-group>
        `;
    }
};

window.customElements.define('check-stacked-example', CheckStackedExample);