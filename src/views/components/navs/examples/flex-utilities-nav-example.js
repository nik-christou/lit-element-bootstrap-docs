
import { LitElement } from 'lit-element';
import { BsTextCss } from '@lit-element-bootstrap/utilities';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';
import { BsFlexWrapCss, BsFlexDirectionCss } from '@lit-element-bootstrap/utilities';

import '@lit-element-bootstrap/navs';

class FlexUtilitiesNavExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsFlexDirectionCss,
            BsFlexWrapCss,
            BsTextCss
        ];
    }
    
    _getExample() {
        return `
            <bs-nav pills class="flex-column flex-sm-row">
                <bs-nav-link active class="flex-sm-fill text-sm-center">Active</bs-nav-link>
                <bs-nav-link class="flex-sm-fill text-sm-center">Link</bs-nav-link>
                <bs-nav-link class="flex-sm-fill text-sm-center">Link</bs-nav-link>
                <bs-nav-link disabled class="flex-sm-fill text-sm-center">Disabled</bs-nav-link>
            </bs-nav>
        `;
    }
};

window.customElements.define('flex-utilities-nav-example', FlexUtilitiesNavExample);