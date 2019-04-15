
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';

import 'lit-element-bootstrap/components/button';
import 'lit-element-bootstrap/components/button-group';
import 'lit-element-bootstrap/components/dropdown';

class SplitButtonDropdownExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <bs-button-group>
                <bs-dropdown split>
                    <bs-button primary>Primary</bs-button>
                    <bs-button primary dropdown-toggle></bs-button>
                    <bs-dropdown-menu down x-placement="bottom-start">
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
                    <bs-button secondary>Secondary</bs-button>
                    <bs-button secondary dropdown-toggle></bs-button>
                    <bs-dropdown-menu down x-placement="bottom-start">
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
                    <bs-button success>Success</bs-button>
                    <bs-button success dropdown-toggle></bs-button>
                    <bs-dropdown-menu down x-placement="bottom-start">
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
                    <bs-button info>Info</bs-button>
                    <bs-button info dropdown-toggle></bs-button>
                    <bs-dropdown-menu down x-placement="bottom-start">
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
                    <bs-button warning>Warning</bs-button>
                    <bs-button warning dropdown-toggle></bs-button>
                    <bs-dropdown-menu down x-placement="bottom-start">
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
                    <bs-button danger>Danger</bs-button>
                    <bs-button danger dropdown-toggle></bs-button>
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

window.customElements.define('split-button-dropdown-example', SplitButtonDropdownExample);
