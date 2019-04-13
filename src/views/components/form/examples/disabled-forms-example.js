
import { LitElement } from 'lit-element';
import { BsSpacingCss } from 'lit-element-bootstrap/utilities';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';

import 'lit-element-bootstrap/components/form';
import 'lit-element-bootstrap/components/form';

class DisabledFormsExample extends BsExampleMixin(LitElement) {

    static get styles() {
        return [
            super.styles,
            BsSpacingCss
        ];
    }

    _getExample() {
        return `
            <bs-form>

                <bs-form-input disabled placeholder="Disabled input here..."></bs-form-input>

                <bs-form-fieldset disabled>
                
                    <bs-form-group>
                        <bs-form-label slot="label">Disabled input</bs-form-label>
                        <bs-form-input slot="control" placeholder="Disabled input"></bs-form-input>
                    </bs-form-group>
                    
                    <bs-form-group>
                        <bs-form-label slot="label">Disabled select menu</bs-form-label>
                        <bs-form-select slot="control" caption-text="Disabled select"></bs-form-select>
                    </bs-form-group>

                    <bs-form-check-group>
                        <bs-form-checkbox-input slot="check"></bs-form-checkbox-input>
                        <bs-form-check-label slot="label">Can't check this</bs-form-check-label>
                    </bs-form-check-group>
                    
                    <bs-button primary button-type="submit">Submit</bs-button>
                    
                </bs-form-fieldset>
            </bs-form>
        `;
    }    
};

window.customElements.define('disabled-forms-example', DisabledFormsExample);