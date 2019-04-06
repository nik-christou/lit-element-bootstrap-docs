
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';

import 'lit-element-bootstrap/layout/grid';
import 'lit-element-bootstrap/components/form';

class ColumnSizingExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <bs-form>
                <bs-form-row>
                    <bs-column xs-7>
                        <bs-form-input placeholder="City"></bs-form-input>
                    </bs-column>
                    <bs-column xs>
                        <bs-form-input placeholder="State"></bs-form-input>
                    </bs-column>
                    <bs-column xs>
                        <bs-form-input placeholder="Zip"></bs-form-input>
                    </bs-column>
                </bs-form-row>
            </bs-form>
        `;
    }
};

window.customElements.define('column-sizing-example', ColumnSizingExample);