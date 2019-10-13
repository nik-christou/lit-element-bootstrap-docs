
import { LitElement } from 'lit-element';
import { BsBackgroundColorsCss } from '@lit-element-bootstrap/utilities';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import '@lit-element-bootstrap/layout';
import '@lit-element-bootstrap/navbar';

class NavbarInnerContainerExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsBackgroundColorsCss
        ];
    }
    
    _getExample() {
        return `
            <bs-navbar navbar-light class="bg-light">
                <bs-container>
                    <bs-navbar-brand-link>Navbar</bs-navbar-brand-link>
                </bs-container>
            </bs-navbar> 
        `;
    }
};

window.customElements.define('navbar-inner-container-example', NavbarInnerContainerExample);