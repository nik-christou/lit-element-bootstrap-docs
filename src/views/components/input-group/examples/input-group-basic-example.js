
import { LitElement } from 'lit-element';
import { BsSpacingCss } from '@lit-element-bootstrap/utilities';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import '@lit-element-bootstrap/form';
import '@lit-element-bootstrap/input-group';

class InputGroupBasicExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsSpacingCss
        ];
    }
    
    _getExample() {
        return `
            <bs-input-group class="mb-3">
                <bs-input-group-prepend>
                    <bs-input-group-text>@</bs-input-group-text>
                </bs-input-group-prepend>
                <bs-form-input placeholder="Username"></bs-form-input>
            </bs-input-group>
            <bs-input-group class="mb-3">
                <bs-form-input placeholder="Recipient's username"></bs-form-input>
                <bs-input-group-append>
                    <bs-input-group-text>@example.com</bs-input-group-text>
                </bs-input-group-append>
            </bs-input-group>
            <label>Your vanity URL</label>
            <bs-input-group class="mb-3">
                <bs-input-group-prepend>
                    <bs-input-group-text>https://example.com/users/</bs-input-group-text>
                </bs-input-group-prepend>
                <bs-form-input></bs-form-input>
            </bs-input-group>
            <bs-input-group class="mb-3">
                <bs-input-group-prepend>
                    <bs-input-group-text>$</bs-input-group-text>
                </bs-input-group-prepend>
                <bs-form-input></bs-form-input>
                <bs-input-group-append>
                    <bs-input-group-text>.00</bs-input-group-text>
                </bs-input-group-append>
            </bs-input-group>
            <bs-input-group class="mb-3">
                <bs-input-group-prepend>
                    <bs-input-group-text>With textarea</bs-input-group-text>
                </bs-input-group-prepend>
                <bs-form-textarea></bs-form-textarea>
            </bs-input-group>
        `;
    }
};

window.customElements.define('input-group-basic-example', InputGroupBasicExample);