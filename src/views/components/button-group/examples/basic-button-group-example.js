
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import '@lit-element-bootstrap/button';
import '@lit-element-bootstrap/button-group';

class BasicButtonGroupExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <bs-button-group horizontal>
                <bs-button secondary>Left</bs-button>
                <bs-button secondary>Middle</bs-button>
                <bs-button secondary>Right</bs-button>
            </bs-button-group>
        `;
    }
};

window.customElements.define('basic-button-group-example', BasicButtonGroupExample);