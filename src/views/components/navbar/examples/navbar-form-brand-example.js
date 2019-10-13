
import { LitElement, css } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';
import { BsSpacingCss, BsBackgroundColorsCss } from '@lit-element-bootstrap/utilities';

import '@lit-element-bootstrap/form';
import '@lit-element-bootstrap/navbar';
import '@lit-element-bootstrap/button';

class NavbarFormBrandExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsBackgroundColorsCss,
            BsSpacingCss
        ];
    }
    
    _getExample() {
        return `
            <bs-navbar navbar-light class="bg-light">
                <bs-navbar-brand-link>Navbar</bs-navbar-brand-link>
                <bs-form inline>
                    <bs-form-input class="mr-sm-2" type="search" placeholder="Search"></bs-form-input>
                    <bs-button class="my-2 my-sm-0" outline-success action="submit">Search</bs-button>
                </bs-form>
            </bs-navbar>
        `;
    }
};

window.customElements.define('navbar-form-brand-example', NavbarFormBrandExample);