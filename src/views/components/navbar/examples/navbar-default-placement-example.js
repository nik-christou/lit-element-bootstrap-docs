
import { LitElement } from 'lit-element';
import { BsBackgroundColorsCss } from 'lit-element-bootstrap/utilities';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import 'lit-element-bootstrap/components/navbar';

class NavbarDefaultPlacementExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsBackgroundColorsCss
        ];
    }
    
    _getExample() {
        return `
            <bs-navbar navbar-light class="bg-light">
                <bs-navbar-brand-link>Default</bs-navbar-brand-link>
            </bs-navbar> 
        `;
    }
};

window.customElements.define('navbar-default-placement-example', NavbarDefaultPlacementExample);