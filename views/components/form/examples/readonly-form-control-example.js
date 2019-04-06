
import { LitElement, html } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';

import 'lit-element-bootstrap/components/form';

class ReadonlyFormControlExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <bs-form-input readonly placeholder="Readonly input here..."></bs-form-input>
        `;
    }
};

window.customElements.define('readonly-form-control-example', ReadonlyFormControlExample);