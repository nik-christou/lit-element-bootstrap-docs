
import { LitElement, html } from 'lit-element';
import { BsSpacingCss } from 'lit-element-bootstrap/utilities';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import 'lit-element-bootstrap/components/form';
import 'lit-element-bootstrap/components/button';
import 'lit-element-bootstrap/components/input-group';

class InputGroupMultipleButtonsExample extends BsExampleMixin(LitElement) {
    
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
                    <bs-button outline-secondary>Button</bs-button>
                    <bs-button outline-secondary>Button</bs-button>
                </bs-input-group-prepend>
                <bs-form-input></bs-form-input>
            </bs-input-group>

            <bs-input-group class="mb-3">
                <bs-form-input placeholder="Recipient's username"></bs-form-input>
                <bs-input-group-append>
                    <bs-button outline-secondary>Button</bs-button>
                    <bs-button outline-secondary>Button</bs-button>
                </bs-input-group-append>
            </bs-input-group> 
        `;
    }
};

window.customElements.define('input-group-multiple-buttons-example', InputGroupMultipleButtonsExample);