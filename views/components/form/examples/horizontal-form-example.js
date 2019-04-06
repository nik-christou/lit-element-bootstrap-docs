
import { LitElement, css } from 'lit-element';
import { BsSpacingCss } from 'lit-element-bootstrap/utilities';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';

import 'lit-element-bootstrap/layout/grid';
import 'lit-element-bootstrap/components/form';
import 'lit-element-bootstrap/components/button';

class HorizontalFormExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsSpacingCss,
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
                <bs-form-group row>
                    <bs-form-label slot="label" sm-2 column>Email</bs-form-label>
                    <bs-column slot="control" sm-10>
                        <bs-form-input type="email" placeholder="Email"></bs-form-input>
                    </bs-column>
                </bs-form-group>
                <bs-form-group row>
                    <bs-form-label slot="label" sm-2 column>Password</bs-form-label>
                    <bs-column slot="control" sm-10>
                        <bs-form-input type="password" placeholder="Password"></bs-form-input>
                    </bs-column>
                </bs-form-group>
                <bs-form-group row>
                    <bs-form-label slot="label" sm-2 column class="pt-0">Radios</bs-form-label>
                    <bs-column slot="control" sm-10>
                        <bs-form-radio-group name="gridRadios">
                            <bs-form-check-group>
                                <bs-form-radio-input slot="check" checked type="radio" value="option1"></bs-form-radio-input>
                                <bs-form-check-label slot="label">First radio</bs-form-check-label>
                            </bs-form-check-group>
                            <bs-form-check-group>
                                <bs-form-radio-input slot="check" type="radio" value="option2"></bs-form-radio-input>
                                <bs-form-check-label slot="label">Second radio</bs-form-check-label>
                            </bs-form-check-group>
                            <bs-form-check-group disabled>
                                <bs-form-radio-input slot="check" type="radio" value="option3"></bs-form-radio-input>
                                <bs-form-check-label slot="label">Third disabled radio</bs-form-check-label>
                            </bs-form-check-group>
                        </bs-form-radio-name-group>
                    </bs-column>
                </bs-form-group>
                <bs-form-group row>
                    <bs-form-label slot="label" sm-2>Checkbox</bs-form-label>
                    <bs-column slot="control" sm-10>
                        <bs-form-check-group>
                            <bs-form-checkbox-input slot="check"></bs-form-checkbox-input>
                            <bs-form-check-label slot="label">Example checkbox</bs-form-check-label>
                        </bs-form-check-group>
                    </bs-column>
                </bs-form-group>
                <bs-form-group row>
                    <bs-column slot="control" sm-10>
                        <bs-button primary button-type="submit">Sign in</bs-button>
                    </bs-column>
                </bs-form-group>
            </bs-form>
        `;
    }
};

window.customElements.define('horizontal-form-example', HorizontalFormExample);