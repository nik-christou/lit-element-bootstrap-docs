
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';

import 'lit-element-bootstrap/components/button';
import 'lit-element-bootstrap/components/button-group';
import 'lit-element-bootstrap/components/dropdown';

class VerticalDropdownGroupExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <bs-button-group vertical>
                <bs-button secondary>Button</bs-button>
                <bs-button secondary>Button</bs-button>
                <bs-button-group>
                    <bs-dropdown>
                        <bs-button secondary dropdown-toggle>Dropdown</bs-button>
                        <bs-dropdown-menu down x-placement="bottom-start">
                            <bs-dropdown-item-link index="0" title="Dropdown link"></bs-dropdown-item-link>
                            <bs-dropdown-item-link index="1" title="Dropdown link"></bs-dropdown-item-link>
                        </bs-dropdown-menu>
                    </bs-dropdown>
                </bs-button-group>
                <bs-button secondary>Button</bs-button>
                <bs-button secondary>Button</bs-button>
                <bs-button-group>
                    <bs-dropdown>
                        <bs-button secondary dropdown-toggle>Dropdown</bs-button>
                        <bs-dropdown-menu down x-placement="bottom-start">
                            <bs-dropdown-item-link index="0" title="Dropdown link"></bs-dropdown-item-link>
                            <bs-dropdown-item-link index="1" title="Dropdown link"></bs-dropdown-item-link>
                        </bs-dropdown-menu>
                    </bs-dropdown>
                </bs-button-group>
                <bs-button-group>
                    <bs-dropdown>
                        <bs-button secondary dropdown-toggle>Dropdown</bs-button>
                        <bs-dropdown-menu down x-placement="bottom-start">
                            <bs-dropdown-item-link index="0" title="Dropdown link"></bs-dropdown-item-link>
                            <bs-dropdown-item-link index="1" title="Dropdown link"></bs-dropdown-item-link>
                        </bs-dropdown-menu>
                    </bs-dropdown>
                </bs-button-group>
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

window.customElements.define('vertical-dropdown-group-example', VerticalDropdownGroupExample);