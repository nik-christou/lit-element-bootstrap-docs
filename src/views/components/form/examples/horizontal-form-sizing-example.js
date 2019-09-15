
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import 'lit-element-bootstrap/layout';
import 'lit-element-bootstrap/components/form';

class HorizontalFormSizingExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <bs-form>
                <bs-form-group row>
                    <bs-form-label slot="label" sm-2 column-sm>Email</bs-form-label>
                    <bs-column slot="control" sm-10>
                        <bs-form-input sm type="email" placeholder="col-form-label-sm"></bs-form-input>
                    </bs-column>
                </bs-form-group>
                <bs-form-group row>
                    <bs-form-label slot="label" sm-2>Email</bs-form-label>
                    <bs-column slot="control" sm-10>
                        <bs-form-input type="email" placeholder="col-form-label"></bs-form-input>
                    </bs-column>
                </bs-form-group>
                <bs-form-group row>
                    <bs-form-label slot="label" sm-2 column-lg>Email</bs-form-label>
                    <bs-column slot="control" sm-10>
                        <bs-form-input lg type="email" placeholder="col-form-label-lg"></bs-form-input>
                    </bs-column>
                </bs-form-group>
            </bs-form>
        `;
    }
};

window.customElements.define('horizontal-form-sizing-example', HorizontalFormSizingExample);