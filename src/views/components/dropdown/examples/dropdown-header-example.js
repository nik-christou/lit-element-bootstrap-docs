
import { LitElement } from 'lit-element';
import { BsClearfixCss } from '@lit-element-bootstrap/utilities';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import '@lit-element-bootstrap/dropdown';

class DropdownHeaderExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsClearfixCss
        ];
    }

    _getExample() {
        return `
            <div class="clearfix">
                <bs-dropdown-menu show static>
                    <bs-dropdown-header>Dropdown header</bs-dropdown-header>
                    <bs-dropdown-item-link title="Action" index="0"></bs-dropdown-item-link>
                    <bs-dropdown-item-link title="Another action" index="1"></bs-dropdown-item-link>
                </bs-dropdown-menu>
            </div>
        `;
    }
};

window.customElements.define('dropdown-header-example', DropdownHeaderExample);