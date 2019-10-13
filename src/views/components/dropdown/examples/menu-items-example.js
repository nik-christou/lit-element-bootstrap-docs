
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import '@lit-element-bootstrap/button';
import '@lit-element-bootstrap/dropdown';

class MenuItemsExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <bs-dropdown>
                <bs-button secondary dropdown-toggle>Dropdown button</bs-button>
                <bs-dropdown-menu down x-placement="bottom-start">
                    <bs-dropdown-item-button title="Action" index="0"></bs-dropdown-item-button>
                    <bs-dropdown-item-button title="Another action" index="1"></bs-dropdown-item-button>
                    <bs-dropdown-item-button title="Something else here" index="2"></bs-dropdown-item-button>
                </bs-dropdown-menu>
            </bs-dropdown>
        `;
    }
};

window.customElements.define('menu-items-example', MenuItemsExample);