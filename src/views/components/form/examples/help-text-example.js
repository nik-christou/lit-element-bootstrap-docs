
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import '@lit-element-bootstrap/form';

class HelpTextExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <bs-form-label>Password</bs-form-label>
            <bs-form-input type="password" placeholder="Password"></bs-form-input>
            <bs-form-help-text>Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.</bs-form-help-text>
        `;
    }
};

window.customElements.define('help-text-example', HelpTextExample);