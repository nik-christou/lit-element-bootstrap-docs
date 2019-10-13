
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import '@lit-element-bootstrap/button';
import '@lit-element-bootstrap/button-group';
import '@lit-element-bootstrap/dropdown';

class NestingButtonGroupExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <bs-button-group horizontal>
                <bs-button secondary>1</bs-button>
                <bs-button secondary>2</bs-button>
                <bs-button-group>
                    <bs-dropdown>
                        <bs-button secondary dropdown-toggle>Dropdown</bs-button>
                        <bs-dropdown-menu down x-placement="bottom-start">
                            <bs-dropdown-item-link index="0" title="Dropdown link"></bs-dropdown-item-link>
                            <bs-dropdown-item-link index="1" title="Dropdown link"></bs-dropdown-item-link>
                        </bs-dropdown-menu>
                    </bs-dropdown>
                </bs-button-group>
            </bs-button-group>
        `;
    }
};

window.customElements.define('nesting-button-group-example', NestingButtonGroupExample);