
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';

import 'lit-element-bootstrap/components/form';

class FormGroupsExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <bs-form>
                <bs-form-group>
                    <bs-form-label slot="label">Example label</bs-form-label>
                    <bs-form-input slot="control" placeholder="Example input"></bs-form-input>
                </bs-form-group>

                <bs-form-group>
                    <bs-form-label slot="label">Another label</bs-form-label>
                    <bs-form-input slot="control" placeholder="Another input"></bs-form-input>
                </bs-form-group>
            </bs-form> 
        `;
    }
};

window.customElements.define('form-groups-example', FormGroupsExample);