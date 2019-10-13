
import { LitElement, css } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import '@lit-element-bootstrap/button';
import '@lit-element-bootstrap/button-group';

class SizingButtonGroupExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            css`
                bs-button-group {
                    margin-top: 0.25rem;
                    margin-bottom: 0.25rem;
                }
            `
        ];
    }
    
    _getExample() {
        return `
            <bs-button-group horizontal large>
                <bs-button secondary>Left</bs-button>
                <bs-button secondary>Middle</bs-button>
                <bs-button secondary>Right</bs-button>
            </bs-button-group>

            <bs-button-group horizontal>
                <bs-button secondary>Left</bs-button>
                <bs-button secondary>Middle</bs-button>
                <bs-button secondary>Right</bs-button>
            </bs-button-group>
            
            <bs-button-group horizontal small>
                <bs-button secondary>Left</bs-button>
                <bs-button secondary>Middle</bs-button>
                <bs-button secondary>Right</bs-button>
            </bs-button-group>
        `;
    }
};

window.customElements.define('sizing-button-group-example', SizingButtonGroupExample);