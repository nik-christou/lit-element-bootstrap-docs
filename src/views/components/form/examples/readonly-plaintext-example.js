
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import 'lit-element-bootstrap/layout';
import 'lit-element-bootstrap/components/form';

class ReadonlyPlaintextExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <bs-form>
                <bs-form-group row>
                    <bs-form-label column sm-2 slot="label">Email</bs-form-label>
                    <bs-column sm-10 slot="control">
                        <bs-form-input-plaintext readonly value="email@example.com"></bs-form-input-plaintext>
                    </bs-column>
                </bs-form-group>
                <bs-form-group row>
                    <bs-form-label column sm-2 slot="label">Password</bs-form-label>
                    <bs-column sm-10 slot="control">
                        <bs-form-input type="password" placeholder="Password"></bs-form-input>
                    </bs-column>
                </bs-form-group>
            </bs-form>
        `;
    }
};

window.customElements.define('readonly-plaintext-example', ReadonlyPlaintextExample);