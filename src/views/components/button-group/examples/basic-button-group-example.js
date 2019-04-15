
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';

import 'lit-element-bootstrap/components/button';
import 'lit-element-bootstrap/components/button-group';

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