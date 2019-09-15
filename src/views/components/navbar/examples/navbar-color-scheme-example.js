
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';
import { BsSpacingCss, BsBackgroundColorsCss } from 'lit-element-bootstrap/utilities';

import 'lit-element-bootstrap/components/navs';
import 'lit-element-bootstrap/components/form';
import 'lit-element-bootstrap/components/button';
import 'lit-element-bootstrap/components/navbar';

class NavbarColorSchemeExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsBackgroundColorsCss,
            BsSpacingCss
        ];
    }
    
    _getExample() {
        return `
            <bs-navbar navbar-dark expand-lg class="bg-dark">
                <bs-navbar-brand-link>Navbar</bs-navbar-brand-link>
                <bs-navbar-toggler>
                    <bs-navbar-toggler-icon></bs-navbar-toggler-icon>
                </bs-navbar-toggler>
                <bs-navbar-collapse>
                    <bs-navbar-nav class="mr-auto">
                        <bs-nav-item><bs-nav-link active>Home</bs-nav-link></bs-nav-item>
                        <bs-nav-item><bs-nav-link>Features</bs-nav-link></bs-nav-item>
                        <bs-nav-item><bs-nav-link>Pricing</bs-nav-link></bs-nav-item>
                        <bs-nav-item><bs-nav-link>About</bs-nav-link></bs-nav-item>
                    </bs-navbar-nav>
                    <bs-form inline>
                        <bs-form-input class="mr-sm-2" type="search" placeholder="Search"></bs-form-input>
                        <bs-button class="my-2 my-sm-0" outline-info action="submit">Search</bs-button>
                    </bs-form>
                </bs-navbar-collapse>
            </bs-navbar>

            <br />

            <bs-navbar navbar-dark expand-lg class="bg-primary">
                <bs-navbar-brand-link>Navbar</bs-navbar-brand-link>
                <bs-navbar-toggler>
                    <bs-navbar-toggler-icon></bs-navbar-toggler-icon>
                </bs-navbar-toggler>
                <bs-navbar-collapse>
                    <bs-navbar-nav class="mr-auto">
                        <bs-nav-item>
                            <bs-nav-link active>Home</bs-nav-link>
                        </bs-nav-item>
                        <bs-nav-item>
                            <bs-nav-link>Features</bs-nav-link>
                        </bs-nav-item>
                        <bs-nav-item>
                            <bs-nav-link>Pricing</bs-nav-link>
                        </bs-nav-item>
                        <bs-nav-item>
                            <bs-nav-link>About</bs-nav-link>
                        </bs-nav-item>
                    </bs-navbar-nav>
                    <bs-form inline>
                        <bs-form-input class="mr-sm-2" type="search" placeholder="Search"></bs-form-input>
                        <bs-button class="my-2 my-sm-0" outline-light action="submit">Search</bs-button>
                    </bs-form>
                </bs-navbar-collapse>
            </bs-navbar>

            <br />

            <bs-navbar navbar-light expand-lg style="background-color: #e3f2fd;">
                <bs-navbar-brand-link>Navbar</bs-navbar-brand-link>
                <bs-navbar-toggler>
                    <bs-navbar-toggler-icon></bs-navbar-toggler-icon>
                </bs-navbar-toggler>
                <bs-navbar-collapse>
                    <bs-navbar-nav class="mr-auto">
                        <bs-nav-item>
                            <bs-nav-link active>Home</bs-nav-link>
                        </bs-nav-item>
                        <bs-nav-item>
                            <bs-nav-link>Features</bs-nav-link>
                        </bs-nav-item>
                        <bs-nav-item>
                            <bs-nav-link>Pricing</bs-nav-link>
                        </bs-nav-item>
                        <bs-nav-item>
                            <bs-nav-link>About</bs-nav-link>
                        </bs-nav-item>
                    </bs-navbar-nav>
                    <bs-form inline>
                        <bs-form-input class="mr-sm-2" type="search" placeholder="Search"></bs-form-input>
                        <bs-button class="my-2 my-sm-0" outline-primary action="submit">Search</bs-button>
                    </bs-form>
                </bs-navbar-collapse>
            </bs-navbar>
        `;
    }
};

window.customElements.define('navbar-color-scheme-example', NavbarColorSchemeExample);