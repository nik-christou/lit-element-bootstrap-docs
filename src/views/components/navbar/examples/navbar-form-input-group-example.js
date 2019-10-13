
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';
import { BsSpacingCss, BsBackgroundColorsCss } from '@lit-element-bootstrap/utilities';

import '@lit-element-bootstrap/form';
import '@lit-element-bootstrap/navbar';
import '@lit-element-bootstrap/button';
import '@lit-element-bootstrap/input-group';

class NavbarFormInputGroupExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsBackgroundColorsCss,
            BsSpacingCss
        ];
    }
    
    _getExample() {
        return `
            <bs-navbar navbar-light class="bg-light">
                <bs-form inline>
                    <bs-input-group>
                        <bs-input-group-prepend>
                            <bs-input-group-text>@</bs-input-group-text>
                        </bs-input-group-prepend>
                        <bs-form-input placeholder="Username"></bs-form-input>
                    </bs-input-group>
                </bs-form inline>
            </bs-navbar> 
        `;
    }
};

window.customElements.define('navbar-form-input-group-example', NavbarFormInputGroupExample);