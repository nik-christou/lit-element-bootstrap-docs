
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';
import { BsDisplayCss, BsVerticalAlignCss, BsBackgroundColorsCss } from 'lit-element-bootstrap/utilities';

import 'lit-element-bootstrap/components/navbar';

class NavbarBrandImagesExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsBackgroundColorsCss,
            BsDisplayCss,
            BsVerticalAlignCss
        ];
    }
    
    _getExample() {
        return `
            <bs-navbar navbar-light class="bg-light">
                <bs-navbar-brand-link>
                    <img src="/views/components/navbar/examples/bootstrap-solid.svg" width="30" height="30" alt="" />
                </bs-navbar-brand-link>
            </bs-navbar>

            <br />

            <bs-navbar navbar-light class="bg-light">
                <bs-navbar-brand-link>
                    <img src="/views/components/navbar/examples/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="" />
                    Bootstrap
                </bs-navbar-brand-link>
            </bs-navbar> 
        `;
    }
};

window.customElements.define('navbar-brand-images-example', NavbarBrandImagesExample);