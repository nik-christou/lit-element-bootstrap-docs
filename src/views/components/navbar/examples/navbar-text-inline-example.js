
import { LitElement } from 'lit-element';
import { BsBackgroundColorsCss } from 'lit-element-bootstrap/utilities';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import 'lit-element-bootstrap/components/navbar';

class NavbarTextInlineExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsBackgroundColorsCss
        ];
    }
    
    _getExample() {
        return `
            <bs-navbar navbar-light class="bg-light">
                <bs-navbar-text>Navbar text with an inline element</bs-navbar-text>
                <bs-navbar-link>Navbar text with an inline element</bs-navbar-link>
            </bs-navbar>
        `;
    }
};

window.customElements.define('navbar-text-inline-example', NavbarTextInlineExample);