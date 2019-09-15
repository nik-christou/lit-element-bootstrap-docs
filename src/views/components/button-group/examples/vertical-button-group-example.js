
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import 'lit-element-bootstrap/components/button';
import 'lit-element-bootstrap/components/button-group';

class VerticalButtonGroupExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <bs-button-group vertical>
                <bs-button secondary>Button</bs-button>
                <bs-button secondary>Button</bs-button>
                <bs-button secondary>Button</bs-button>
                <bs-button secondary>Button</bs-button>
                <bs-button secondary>Button</bs-button>
                <bs-button secondary>Button</bs-button>
            </bs-button-group>
        `;
    }
};

window.customElements.define('vertical-button-group-example', VerticalButtonGroupExample);