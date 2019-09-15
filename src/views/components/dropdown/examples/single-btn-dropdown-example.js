
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import 'lit-element-bootstrap/components/button';
import 'lit-element-bootstrap/components/dropdown';

class SingleBtnDropdownExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <bs-dropdown>
                <bs-button secondary dropdown-toggle>Dropdown button</bs-button>
                <bs-dropdown-menu down x-placement="bottom-start">
                    <bs-dropdown-item-link title="Action" index="0"></bs-dropdown-item-link>
                    <bs-dropdown-item-link title="Another action" index="1"></bs-dropdown-item-link>
                    <bs-dropdown-item-link title="Something else here" index="2"></bs-dropdown-item-link>
                </bs-dropdown-menu>
            </bs-dropdown>
        `;
    }
};

window.customElements.define('single-btn-dropdown-example', SingleBtnDropdownExample);