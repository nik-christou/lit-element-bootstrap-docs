
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';

import 'lit-element-bootstrap/components/form';

class SizingFormControlExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <bs-form-input lg placeholder="with lg attribute"></bs-form-input>
            <bs-form-input placeholder="Default input" style="margin-top: 0.5rem;"></bs-form-input>
            <bs-form-input sm placeholder="with sm attribute" style="margin-top: 0.5rem;"></bs-form-input>
        `;
    }
};

window.customElements.define('sizing-form-control-example', SizingFormControlExample);