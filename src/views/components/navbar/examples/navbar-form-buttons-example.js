
import { LitElement, css } from 'lit-element';
import { BsBackgroundColorsCss } from 'lit-element-bootstrap/utilities';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import 'lit-element-bootstrap/components/form';
import 'lit-element-bootstrap/components/navbar';
import 'lit-element-bootstrap/components/button';

class NavbarFormButtonsExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsBackgroundColorsCss
        ];
    }
    
    _getExample() {
        return `
            <bs-navbar navbar-light class="bg-light">
                <bs-form inline>
                    <bs-button outline-success>Main button</bs-button>
                    <bs-button small outline-secondary>Smaller button</bs-button>
                </bs-form>
            </bs-navbar>
        `;
    }
};

window.customElements.define('navbar-form-buttons-example', NavbarFormButtonsExample);