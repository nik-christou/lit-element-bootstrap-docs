
import { LitElement, css } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import 'lit-element-bootstrap/components/button';
import 'lit-element-bootstrap/components/button-group';
import 'lit-element-bootstrap/components/dropdown';

class ButtonVariantDropdownExample extends BsExampleMixin(LitElement) {
    
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
            <bs-button-group horizontal>
                <bs-dropdown>
                    <bs-button primary dropdown-toggle>Primary</bs-button>
                    <bs-dropdown-menu down x-placement="bottom-start">
                        <bs-dropdown-item-link title="Action" index="0"></bs-dropdown-item-link>
                        <bs-dropdown-item-link title="Another action" index="1"></bs-dropdown-item-link>
                        <bs-dropdown-item-link title="Something else here" index="2"></bs-dropdown-item-link>
                        <bs-dropdown-divider></bs-dropdown-divider>
                        <bs-dropdown-item-link title="Separated link" index="3"></bs-dropdown-item-link>
                    </bs-dropdown-menu>
                </bs-dropdown>
            </bs-button-group>

            <bs-button-group horizontal>
                <bs-dropdown>
                    <bs-button secondary dropdown-toggle>Primary</bs-button>
                    <bs-dropdown-menu down x-placement="bottom-start">
                        <bs-dropdown-item-link title="Action" index="0"></bs-dropdown-item-link>
                        <bs-dropdown-item-link title="Another action" index="1"></bs-dropdown-item-link>
                        <bs-dropdown-item-link title="Something else here" index="2"></bs-dropdown-item-link>
                        <bs-dropdown-divider></bs-dropdown-divider>
                        <bs-dropdown-item-link title="Separated link" index="3"></bs-dropdown-item-link>
                    </bs-dropdown-menu>
                </bs-dropdown>
            </bs-button-group>

            <bs-button-group horizontal>
                <bs-dropdown>
                    <bs-button success dropdown-toggle>Primary</bs-button>
                    <bs-dropdown-menu down x-placement="bottom-start">
                        <bs-dropdown-item-link title="Action" index="0"></bs-dropdown-item-link>
                        <bs-dropdown-item-link title="Another action" index="1"></bs-dropdown-item-link>
                        <bs-dropdown-item-link title="Something else here" index="2"></bs-dropdown-item-link>
                        <bs-dropdown-divider></bs-dropdown-divider>
                        <bs-dropdown-item-link title="Separated link" index="3"></bs-dropdown-item-link>
                    </bs-dropdown-menu>
                </bs-dropdown>
            </bs-button-group>

            <bs-button-group horizontal>
                <bs-dropdown>
                    <bs-button info dropdown-toggle>Primary</bs-button>
                    <bs-dropdown-menu down x-placement="bottom-start">
                        <bs-dropdown-item-link title="Action" index="0"></bs-dropdown-item-link>
                        <bs-dropdown-item-link title="Another action" index="1"></bs-dropdown-item-link>
                        <bs-dropdown-item-link title="Something else here" index="2"></bs-dropdown-item-link>
                        <bs-dropdown-divider></bs-dropdown-divider>
                        <bs-dropdown-item-link title="Separated link" index="3"></bs-dropdown-item-link>
                    </bs-dropdown-menu>
                </bs-dropdown>
            </bs-button-group>

            <bs-button-group horizontal>
                <bs-dropdown>
                    <bs-button warning dropdown-toggle>Primary</bs-button>
                    <bs-dropdown-menu down x-placement="bottom-start">
                        <bs-dropdown-item-link title="Action" index="0"></bs-dropdown-item-link>
                        <bs-dropdown-item-link title="Another action" index="1"></bs-dropdown-item-link>
                        <bs-dropdown-item-link title="Something else here" index="2"></bs-dropdown-item-link>
                        <bs-dropdown-divider></bs-dropdown-divider>
                        <bs-dropdown-item-link title="Separated link" index="3"></bs-dropdown-item-link>
                    </bs-dropdown-menu>
                </bs-dropdown>
            </bs-button-group>

            <bs-button-group horizontal>
                <bs-dropdown>
                    <bs-button danger dropdown-toggle>Primary</bs-button>
                    <bs-dropdown-menu down x-placement="bottom-start">
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

window.customElements.define('button-variant-dropdown-example', ButtonVariantDropdownExample);
