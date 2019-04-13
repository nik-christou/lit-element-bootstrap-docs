
import { LitElement } from 'lit-element';
import { BsSpacingCss } from 'lit-element-bootstrap/utilities';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';

import 'lit-element-bootstrap/components/button';
import 'lit-element-bootstrap/components/button-group';
import 'lit-element-bootstrap/components/dropdown';

class SizingDropdownExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsSpacingCss
        ];
    }

    _getExample() {
        return `
            <bs-button-toolbar>
                <bs-button-group>
                    <bs-dropdown>
                        <bs-button secondary large dropdown-toggle>Large button</bs-button>
                        <bs-dropdown-menu down x-placement="bottom-start">
                            <bs-dropdown-item-link title="Action" index="0"></bs-dropdown-item-link>
                            <bs-dropdown-item-link title="Another action" index="1"></bs-dropdown-item-link>
                            <bs-dropdown-item-link title="Something else here" index="2"></bs-dropdown-item-link>
                            <bs-dropdown-divider></bs-dropdown-divider>
                            <bs-dropdown-item-link title="Separated link" index="3"></bs-dropdown-item-link>
                        </bs-dropdown-menu>
                    </bs-dropdown>
                </bs-button-group>

                <bs-button-group class="ml-2">
                    <bs-dropdown split>
                        <bs-button secondary large>Large button</bs-button>
                        <bs-button secondary large dropdown-toggle></bs-button>
                        <bs-dropdown-menu down x-placement="bottom-start">
                            <bs-dropdown-item-link title="Action" index="0"></bs-dropdown-item-link>
                            <bs-dropdown-item-link title="Another action" index="1"></bs-dropdown-item-link>
                            <bs-dropdown-item-link title="Something else here" index="2"></bs-dropdown-item-link>
                            <bs-dropdown-divider></bs-dropdown-divider>
                            <bs-dropdown-item-link title="Separated link" index="3"></bs-dropdown-item-link>
                        </bs-dropdown-menu>
                    </bs-dropdown>
                </bs-button-group>

            </bs-button-toolbar>
            
            <br />
            
            <bs-button-toolbar>
                <bs-button-group>
                    <bs-dropdown>
                        <bs-button secondary small dropdown-toggle>Small button</bs-button>
                        <bs-dropdown-menu down x-placement="bottom-start">
                            <bs-dropdown-item-link title="Action" index="0"></bs-dropdown-item-link>
                            <bs-dropdown-item-link title="Another action" index="1"></bs-dropdown-item-link>
                            <bs-dropdown-item-link title="Something else here" index="2"></bs-dropdown-item-link>
                            <bs-dropdown-divider></bs-dropdown-divider>
                            <bs-dropdown-item-link title="Separated link" index="3"></bs-dropdown-item-link>
                        </bs-dropdown-menu>
                    </bs-dropdown>
                </bs-button-group>

                <bs-button-group class="ml-2">
                    <bs-dropdown split>
                        <bs-button secondary small>Small button</bs-button>
                        <bs-button secondary small dropdown-toggle></bs-button>
                        <bs-dropdown-menu down x-placement="bottom-start">
                            <bs-dropdown-item-link title="Action" index="0"></bs-dropdown-item-link>
                            <bs-dropdown-item-link title="Another action" index="1"></bs-dropdown-item-link>
                            <bs-dropdown-item-link title="Something else here" index="2"></bs-dropdown-item-link>
                            <bs-dropdown-divider></bs-dropdown-divider>
                            <bs-dropdown-item-link title="Separated link" index="3"></bs-dropdown-item-link>
                        </bs-dropdown-menu>
                    </bs-dropdown>
                </bs-button-group>

            </bs-button-toolbar>
        `;
    }
};

window.customElements.define('sizing-dropdown-example', SizingDropdownExample);