
import { LitElement } from 'lit-element';
import { BsClearfixCss, BsTextColorCss, BsSpacingCss } from '@lit-element-bootstrap/utilities';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import '@lit-element-bootstrap/dropdown';

class DropdownMenuTextExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsClearfixCss,
            BsTextColorCss,
            BsSpacingCss
        ];
    }
    
    _getExample() {
        return `
            <div class="clearfix">
                <bs-dropdown-menu show static>
                    <div class="p-4 text-muted" style="max-width: 200px;">
                        <p>Some example text that's free-flowing within the dropdown menu.</p>
                        <p class="mb-0">And this is more example text.</p>
                    </div>
                </bs-dropdown-menu>
            </div>
        `;
    }
};

window.customElements.define('dropdown-menu-text-example', DropdownMenuTextExample);