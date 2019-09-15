
import { LitElement } from 'lit-element';
import { BsClearfixCss, BsSpacingCss } from 'lit-element-bootstrap/utilities';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import 'lit-element-bootstrap/components/form';
import 'lit-element-bootstrap/components/button';
import 'lit-element-bootstrap/components/button-group';
import 'lit-element-bootstrap/components/dropdown';

class FormInDropdownMenuExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsClearfixCss,
            BsSpacingCss
        ];
    }

    _getExample() {
        return `
            <div class="clearfix">
                <bs-dropdown-menu show static>
                    
                    <bs-form class="px-4 py-3">
                        
                        <bs-form-group>
                            <bs-form-label slot="label">Email address</bs-form-label>
                            <bs-form-input slot="control" type="email" placeholder="email@example.com"></bs-form-input>
                        </bs-form-group>
                    
                        <bs-form-group>
                            <bs-form-label slot="label">Password</bs-form-label>
                            <bs-form-input slot="control" type="password" placeholder="Password"></bs-form-input>
                        </bs-form-group>

                        <bs-form-check-group>
                            <bs-form-checkbox-input slot="check"></bs-form-checkbox-input>
                            <bs-form-check-label slot="label">Remember me</bs-form-check-label>
                        </bs-form-check-group>

                        <bs-button primary action="submit">Sign in</bs-button>
                        
                    </bs-form>
                    
                    <bs-dropdown-divider></bs-dropdown-divider>
                    <bs-dropdown-item-link title="New around here? Sign up" index="0"></bs-dropdown-item-link>
                    <bs-dropdown-item-link title="Forgot password?" index="1"></bs-dropdown-item-link>
                    
                </bs-dropdown-menu>
            </div> 
        `;
    }
};

window.customElements.define('form-in-dropdown-menu-example', FormInDropdownMenuExample);