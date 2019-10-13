
import { LitElement, css } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import '@lit-element-bootstrap/form';
import '@lit-element-bootstrap/button';

class OverviewExample extends BsExampleMixin(LitElement) {
    
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
                <bs-form-group>
                    <bs-form-label slot="label">Email address</bs-form-label>
                    <bs-form-input slot="control" required type="email" name="email" placeholder="Enter email"></bs-form-input>
                    <bs-form-input-feedback
                        slot="feedback"
                        valid-value-msg="Valid email address"
                        missing-value-msg="Please enter an email address"
                        mismatch-value-msg="Please enter a valid email address">
                    </bs-form-input-feedback>
                    <bs-form-help-text slot="helptext">We'll never share your email with anyone else.</bs-form-help-text>
                </bs-form-group>
                <bs-form-group>
                    <bs-form-label slot="label">Password</bs-form-label>
                    <bs-form-input slot="control" required type="password" name="password" placeholder="Password"></bs-form-input>
                    <bs-form-input-feedback
                        slot="feedback"
                        missing-value-msg="Please enter your password">
                    </bs-form-input-feedback>
                </bs-form-group>
                <bs-form-check-group>
                    <bs-form-checkbox-input slot="check" required name="checkmeout"></bs-form-checkbox-input>
                    <bs-form-check-label slot="label">Check me out</bs-form-check-label>
                    <bs-form-input-feedback
                        slot="feedback"
                        missing-value-msg="You must agree before submitting.">
                    </bs-form-input-feedback>
                </bs-form-check-group>
                <bs-button primary action="submit">Submit</bs-button>
            </bs-form>
        `;
    }
};

window.customElements.define('overview-example', OverviewExample);