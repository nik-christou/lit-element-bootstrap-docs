
import { LitElement, css } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import '@lit-element-bootstrap/button';
import '@lit-element-bootstrap/button-group';
import '@lit-element-bootstrap/dropdown';

class DropupExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            css`
                bs-button-group {
                    margin-right: 5px;
                }
            `
        ];
    }

    _getExample() {
        return `
            <bs-button-group>
                <bs-dropdown>
                    <bs-button secondary dropup dropdown-toggle>Dropup</bs-button>
                    <bs-dropdown-menu up x-placement="top-start">
                        <bs-dropdown-item-link title="Action" index="0"></bs-dropdown-item-link>
                        <bs-dropdown-item-link title="Another action" index="1"></bs-dropdown-item-link>
                        <bs-dropdown-item-link title="Something else here" index="2"></bs-dropdown-item-link>
                        <bs-dropdown-divider></bs-dropdown-divider>
                        <bs-dropdown-item-link title="Separated link" index="3"></bs-dropdown-item-link>
                    </bs-dropdown-menu>
                </bs-dropdown>
            </bs-button-group>

            <bs-button-group>
                <bs-dropdown split>
                    <bs-button secondary>Split Dropup</bs-button>
                    <bs-button secondary dropup dropdown-toggle></bs-button>
                    <bs-dropdown-menu up x-placement="top-start">
                        <bs-dropdown-item-link title="Action" index="0"></bs-dropdown-item-link>
                        <bs-dropdown-item-link title="Another action" index="1"></bs-dropdown-item-link>
                        <bs-dropdown-item-link title="Something else here" index="2"></bs-dropdown-item-link>
                        <bs-dropdown-divider></bs-dropdown-divider>
                        <bs-dropdown-item-link title="Separated link" index="3"></bs-dropdown-item-link>
                    </bs-dropdown-menu>
                </bs-dropdown>
            </bs-button-group>
        `;
    }
};

window.customElements.define('dropup-example', DropupExample);
