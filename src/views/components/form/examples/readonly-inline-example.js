
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';
import { BsSpacingCss, BsScreenreaderCss } from 'lit-element-bootstrap/utilities';

import 'lit-element-bootstrap/components/button';

class ReadonlyInlineExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsSpacingCss,
            BsScreenreaderCss
        ];
    }
    
    _getExample() {
        return `
            <bs-form inline>
                <bs-form-group class="mb-2">
                    <bs-form-label slot="label" class="sr-only">Email</bs-form-label>
                    <bs-form-input-plaintext readonly slot="control" value="email@example.com"></bs-form-input-plaintext>
                </bs-form-group>
                <bs-form-group class="mx-sm-3 mb-2">
                    <bs-form-label slot="label" class="sr-only">Password</bs-form-label>
                    <bs-form-input inline slot="control" type="password" placeholder="Password"></bs-form-input>
                </bs-form-group>
                <bs-button primary action="submit" class="mb-2">Confirm identity</bs-button>
            </bs-form>
        `;
    }
};

window.customElements.define('readonly-inline-example', ReadonlyInlineExample);