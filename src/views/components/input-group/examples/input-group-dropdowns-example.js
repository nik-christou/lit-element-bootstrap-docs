
import { LitElement } from 'lit-element';
import { BsSpacingCss } from 'lit-element-bootstrap/utilities';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';

import 'lit-element-bootstrap/components/form';
import 'lit-element-bootstrap/components/button';
import 'lit-element-bootstrap/components/dropdown';
import 'lit-element-bootstrap/components/input-group';

class InputGroupDropdownsExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsSpacingCss
        ];
    }
    
    _getExample() {
        return `
            <bs-input-group class="mb-3">
                <bs-input-group-prepend>
                    <bs-dropdown> 
                        <bs-button outline-secondary dropdown-toggle>Dropdown</bs-button>
                        <bs-dropdown-menu down x-placement="bottom-start">
                            <bs-dropdown-item-link title="Action" index="0"></bs-dropdown-item-link>
                            <bs-dropdown-item-link title="Another action" index="1"></bs-dropdown-item-link>
                            <bs-dropdown-item-link title="Something else here" index="2"></bs-dropdown-item-link>
                            <bs-dropdown-divider></bs-dropdown-divider>
                            <bs-dropdown-item-link title="Separated link" index="3"></bs-dropdown-item-link>
                        </bs-dropdown-menu>
                    </bs-dropdown>
                </bs-input-group-prepend>
                <bs-form-input></bs-form-input>
            </bs-input-group>
            
            <bs-input-group class="mb-3">
                <bs-form-input></bs-form-input>
                <bs-input-group-append>
                    <bs-dropdown> 
                        <bs-button outline-secondary dropdown-toggle>Dropdown</bs-button>
                        <bs-dropdown-menu down x-placement="bottom-start">
                            <bs-dropdown-item-link title="Action" index="0"></bs-dropdown-item-link>
                            <bs-dropdown-item-link title="Another action" index="1"></bs-dropdown-item-link>
                            <bs-dropdown-item-link title="Something else here" index="2"></bs-dropdown-item-link>
                            <bs-dropdown-divider></bs-dropdown-divider>
                            <bs-dropdown-item-link title="Separated link" index="3"></bs-dropdown-item-link>
                        </bs-dropdown-menu>
                    </bs-dropdown>
                </bs-input-group-append>
            </bs-input-group>
        `;
    }
};

window.customElements.define('input-group-dropdowns-example', InputGroupDropdownsExample);