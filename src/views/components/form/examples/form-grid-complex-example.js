
import { LitElement, css } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';

import 'lit-element-bootstrap/components/form';
import 'lit-element-bootstrap/components/button';

class FormGridComplexExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            css`
                bs-form-group ~ bs-form-check-group {
                    margin-bottom: 1rem;
                }
            `
        ];
    }
    
    _getExample() {
        return `
            <bs-form>
                <bs-form-row>
                    <bs-form-group md-6>
                        <bs-form-label slot="label">Email</bs-form-label>
                        <bs-form-input slot="control" type="email" placeholder="Email"></bs-form-input>
                    </bs-form-group>

                    <bs-form-group md-6>
                        <bs-form-label slot="label">Password</bs-form-label>
                        <bs-form-input slot="control" type="password" placeholder="Password"></bs-form-input>
                    </bs-form-group>
                </bs-form-row>

                <bs-form-group>
                    <bs-form-label slot="label">Address</bs-form-label>
                    <bs-form-input slot="control" placeholder="1234 Main St"></bs-form-input>
                </bs-form-group>

                <bs-form-group>
                    <bs-form-label slot="label">Address 2</bs-form-label>
                    <bs-form-input slot="control" placeholder="Apartment, studio, or floor"></bs-form-input>
                </bs-form-group>

                <bs-form-row>
                    <bs-form-group md-6>
                        <bs-form-label slot="label">City</bs-form-label>
                        <bs-form-input slot="control"></bs-form-input>
                    </bs-form-group>
                    <bs-form-group md-4>
                        <bs-form-label slot="label">State</bs-form-label>
                        <bs-form-select slot="control" caption="Choose"></bs-form-select>
                    </bs-form-group>
                    <bs-form-group md-2>
                        <bs-form-label slot="label">Zip</bs-form-label>
                        <bs-form-input slot="control"></bs-form-input>
                    </bs-form-group>
                </bs-form-row>

                <bs-form-check-group>
                    <bs-form-checkbox-input slot="check"></bs-form-checkbox-input>
                    <bs-form-check-label slot="label">Check me out</bs-form-check-label>
                </bs-form-check-group>

                <bs-button primary button-type="submit">Sign in</bs-button>
            </bs-form>
        `;
    }
};

window.customElements.define('form-grid-complex-example', FormGridComplexExample);