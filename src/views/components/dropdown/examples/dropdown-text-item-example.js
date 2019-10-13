
import { LitElement } from 'lit-element';
import { BsClearfixCss } from '@lit-element-bootstrap/utilities';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import '@lit-element-bootstrap/button';
import '@lit-element-bootstrap/dropdown';

class DropdownTextItemExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsClearfixCss
        ];
    }
    
    _getExample() {
        return `
            <div class="clearfix">
                <bs-dropdown-menu show static x-placement="bottom-start">
                    <bs-dropdown-item-text>Dropdown item text</bs-dropdown-item-text>
                    <bs-dropdown-item-link title="Action" index="1"></bs-dropdown-item-link>
                    <bs-dropdown-item-link title="Another action" index="2"></bs-dropdown-item-link>
                    <bs-dropdown-item-link title="Something else here" index="3"></bs-dropdown-item-link>
                </bs-dropdown-menu>
            </div>
        `;
    }
};

window.customElements.define('dropdown-text-item-example', DropdownTextItemExample);