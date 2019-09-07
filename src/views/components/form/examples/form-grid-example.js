
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';

import 'lit-element-bootstrap/layout';
import 'lit-element-bootstrap/components/form';

class FormGridExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <bs-form>
                <bs-row>
                    <bs-column xs>
                        <bs-form-input placeholder="First name"></bs-form-input>
                    </bs-column>
                    <bs-column xs>
                        <bs-form-input placeholder="Last name"></bs-form-input>
                    </bs-column>
                </bs-row>
            </bs-form>
        `;
    }
};

window.customElements.define('form-grid-example', FormGridExample);