
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';
import { BsSpacingCss, BsBackgroundColorsCss } from '@lit-element-bootstrap/utilities';

import '@lit-element-bootstrap/navs';
import '@lit-element-bootstrap/form';
import '@lit-element-bootstrap/navbar';
import '@lit-element-bootstrap/button';

class NavbarHiddenBrandExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsBackgroundColorsCss,
            BsSpacingCss
        ];
    }
    
    _getExample() {
        return `
            <bs-navbar navbar-light expand-lg class="bg-light">
                <bs-navbar-toggler>
                    <bs-navbar-toggler-icon></bs-navbar-toggler-icon>
                </bs-navbar-toggler>
                <bs-navbar-collapse>
                    <bs-navbar-brand-link>Hidden brand</bs-navbar-brand-link>
                    <bs-navbar-nav class="mr-auto">
                        <bs-nav-item><bs-nav-link active>Home</bs-nav-link></bs-nav-item>
                        <bs-nav-item><bs-nav-link>Link</bs-nav-link></bs-nav-item>
                        <bs-nav-item><bs-nav-link disabled>Disabled</bs-nav-link></bs-nav-item>
                    </bs-navbar-nav>
                    <bs-form inline class="my-2 my-lg-0">
                        <bs-form-input class="mr-sm-2" type="search" placeholder="Search"></bs-form-input>
                        <bs-button class="my-2 my-sm-0" outline-success action="submit">Search</bs-button>
                    </bs-form>
                </bs-navbar-collapse>
            </bs-navbar> 
        `;
    }
};

window.customElements.define('navbar-hidden-brand-example', NavbarHiddenBrandExample);