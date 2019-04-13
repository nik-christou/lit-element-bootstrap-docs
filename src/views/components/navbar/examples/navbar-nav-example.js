
import { LitElement } from 'lit-element';
import { BsBackgroundColorsCss } from 'lit-element-bootstrap/utilities';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';

import 'lit-element-bootstrap/components/navs';
import 'lit-element-bootstrap/components/form';
import 'lit-element-bootstrap/components/navbar';
import 'lit-element-bootstrap/components/button';

class NavbarNavExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsBackgroundColorsCss
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
                    <bs-navbar-nav>
                        <bs-nav-item><bs-nav-link active>Home</bs-nav-link></bs-nav-item>
                        <bs-nav-item><bs-nav-link>Features</bs-nav-link></bs-nav-item>
                        <bs-nav-item><bs-nav-link>Pricing</bs-nav-link></bs-nav-item>
                        <bs-nav-item><bs-nav-link disabled>Disabled</bs-nav-link></bs-nav-item>
                    </bs-navbar-nav>
                </bs-navbar-collapse>
            </bs-navbar>
        `;
    }
};

window.customElements.define('navbar-nav-example', NavbarNavExample);