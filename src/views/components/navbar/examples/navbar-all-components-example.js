
import { LitElement } from 'lit-element';
import { BsSpacingCss, BsBackgroundColorsCss } from '@lit-element-bootstrap/utilities';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import '@lit-element-bootstrap/navs';
import '@lit-element-bootstrap/form';
import '@lit-element-bootstrap/button';
import '@lit-element-bootstrap/navbar';
import '@lit-element-bootstrap/dropdown';

class NavbarAllComponentsExample extends BsExampleMixin(LitElement) {
    
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
                <bs-navbar-brand-link>Navbar</bs-navbar-brand-link>
                <bs-navbar-toggler>
                    <bs-navbar-toggler-icon></bs-navbar-toggler-icon>
                </bs-navbar-toggler>
                <bs-navbar-collapse>
                    <bs-navbar-nav class="mr-auto">
                        <bs-nav-item><bs-nav-link active>Home</bs-nav-link></bs-nav-item>
                        <bs-nav-item><bs-nav-link>Link</bs-nav-link></bs-nav-item>
                        <bs-nav-item>
                            <bs-dropdown>
                                <bs-link-button dropdown-nav-link dropdown-toggle>Dropdown</bs-link-button>
                                <bs-dropdown-menu down x-placement="bottom-start">
                                    <bs-dropdown-item-link title="Action" index="0"></bs-dropdown-item-link>
                                    <bs-dropdown-item-link title="Another action" index="1"></bs-dropdown-item-link>
                                    <bs-dropdown-divider></bs-dropdown-divider>
                                    <bs-dropdown-item-link title="Something else here" index="2"></bs-dropdown-item-link>
                                </bs-dropdown-menu>
                            </bs-dropdown>
                        </bs-nav-item>
                        <bs-nav-item>
                            <bs-nav-link disabled>Disabled</bs-nav-link>
                        </bs-nav-item>
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

window.customElements.define('navbar-all-components-example', NavbarAllComponentsExample);