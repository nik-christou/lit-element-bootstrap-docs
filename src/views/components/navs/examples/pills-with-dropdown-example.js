
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import 'lit-element-bootstrap/components/navs';
import 'lit-element-bootstrap/components/button';
import 'lit-element-bootstrap/components/dropdown';

class PillsWithDropdownExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <bs-nav pills>
                <bs-nav-item><bs-nav-link active>Active</bs-nav-link></bs-nav-item>
                <bs-nav-item>
                    <bs-dropdown>
                        <bs-link-button dropdown-nav-link dropdown-toggle>Dropdown</bs-link-button>
                        <bs-dropdown-menu down x-placement="bottom-start">
                            <bs-dropdown-item-link title="Action" index="0"></bs-dropdown-item-link>
                            <bs-dropdown-item-link title="Another action" index="1"></bs-dropdown-item-link>
                            <bs-dropdown-item-link title="Something else here" index="2"></bs-dropdown-item-link>
                            <bs-dropdown-divider></bs-dropdown-divider>
                            <bs-dropdown-item-link title="Separated link" index="2"></bs-dropdown-item-link>
                        </bs-dropdown-menu>
                    </bs-dropdown>
                </bs-nav-item>
                <bs-nav-item><bs-nav-link>Link</bs-nav-link></bs-nav-item>
                <bs-nav-item><bs-nav-link disabled>Disabled</bs-nav-link></bs-nav-item>
            </bs-nav>
        `;
    }
};

window.customElements.define('pills-with-dropdown-example', PillsWithDropdownExample);