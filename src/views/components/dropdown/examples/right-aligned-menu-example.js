
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import '@lit-element-bootstrap/button';
import '@lit-element-bootstrap/button-group';
import '@lit-element-bootstrap/dropdown';

class RightAlignedMenuExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <bs-button-group>
                <bs-dropdown>
                    <bs-button secondary dropdown-toggle>Right aligned menu</bs-button>
                    <bs-dropdown-menu down align-right x-placement="bottom-end">
                        <bs-dropdown-item-link title="Action" index="0"></bs-dropdown-item-link>
                        <bs-dropdown-item-link title="Another action" index="1"></bs-dropdown-item-link>
                        <bs-dropdown-item-link title="Something else here" index="2"></bs-dropdown-item-link>
                    </bs-dropdown-menu>
                </bs-dropdown>
            </bs-button-group>
        `;
    }
};

window.customElements.define('right-aligned-menu-example', RightAlignedMenuExample);
