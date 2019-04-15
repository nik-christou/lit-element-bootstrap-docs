
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';
import { BsSpacingCss, BsBackgroundColorsCss } from 'lit-element-bootstrap/utilities';

import 'lit-element-bootstrap/components/navs';
import 'lit-element-bootstrap/components/navbar';

class NavbarTextMixElementsExample extends BsExampleMixin(LitElement) {
    
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
                <bs-navbar-brand-link>Navbar w/ text</bs-navbar-brand-link>
                <bs-navbar-toggler>
                    <bs-navbar-toggler-icon></bs-navbar-toggler-icon>
                </bs-navbar-toggler>
                <bs-navbar-collapse>
                    <bs-navbar-nav class="mr-auto">
                        <bs-nav-item><bs-nav-link active>Home</bs-nav-link></bs-nav-item>
                        <bs-nav-item><bs-nav-link>Features</bs-nav-link></bs-nav-item>
                        <bs-nav-item><bs-nav-link>Pricing</bs-nav-link></bs-nav-item>
                    </bs-navbar-nav>
                    <bs-navbar-text>Navbar text with an inline element</bs-navbar-text>
                </bs-navbar-collapse>
            </bs-navbar>
        `;
    }
};

window.customElements.define('navbar-text-mix-elements-example', NavbarTextMixElementsExample);