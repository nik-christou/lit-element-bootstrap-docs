
import { LitElement, html } from 'lit-element';
import { BsSpacingCss } from 'lit-element-bootstrap/utilities';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import 'lit-element-bootstrap/components/form';

class HelpTextInlineExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsSpacingCss
        ];
    }
    
    _getExample() {
        return `
            <bs-form inline>
                <bs-form-group>
                    <bs-form-label slot="label">Password</bs-form-label>
                    <bs-form-input slot="control" class="mx-sm-3" type="password" placeholder="Password"></bs-form-input>
                    <bs-form-help-text slot="helptext">Must be 8-20 characters long.</bs-form-help-text>
                </bs-form-group>
            </bs-form>
        `;
    }
};

window.customElements.define('help-text-inline-example', HelpTextInlineExample);