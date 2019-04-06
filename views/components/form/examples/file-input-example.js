
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';

import 'lit-element-bootstrap/components/form';

class FileInputExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <bs-form>
                <bs-form-group>
                    <bs-form-label slot="label">Example file input</bs-form-label>
                    <bs-form-file-input slot="control"></bs-form-file-input>
                </bs-form-group>
            </bs-form>
        `;
    }
};

window.customElements.define('file-input-example', FileInputExample);