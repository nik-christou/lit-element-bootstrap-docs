
import { LitElement } from 'lit-element';
import { BsClearfixCss } from 'lit-element-bootstrap/utilities';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import 'lit-element-bootstrap/components/dropdown';

class DropdownDisabledItemExample extends BsExampleMixin(LitElement) {
    
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
                    <bs-dropdown-item-link title="Regular link" index="0"></bs-dropdown-item-link>
                    <bs-dropdown-item-link disabled target="#" title="Active link" index="1"></bs-dropdown-item-link>
                    <bs-dropdown-item-link title="Another link" index="2"></bs-dropdown-item-link>
                </bs-dropdown-menu>
            </div>
        `;
    }
};

window.customElements.define('dropdown-disabled-item-example', DropdownDisabledItemExample);