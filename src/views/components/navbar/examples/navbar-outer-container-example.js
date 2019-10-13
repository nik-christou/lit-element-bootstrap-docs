
import { LitElement } from 'lit-element';
import { BsBackgroundColorsCss } from '@lit-element-bootstrap/utilities';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import '@lit-element-bootstrap/layout';
import '@lit-element-bootstrap/navbar';

class NavbarOuterContainerExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsBackgroundColorsCss
        ];
    }
    
    _getExample() {
        return `
            <bs-container>
                <bs-navbar navbar-light class="bg-light">
                    <bs-navbar-brand-link>Navbar</bs-navbar-brand-link>
                </bs-navbar>
            </bs-container>
        `;
    }
};

window.customElements.define('navbar-outer-container-example', NavbarOuterContainerExample);