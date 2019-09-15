
import { LitElement, css } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';
import { BsPositionCss, BsBackgroundColorsCss } from 'lit-element-bootstrap/utilities';

import 'lit-element-bootstrap/components/navbar';

class NavbarFixedTopExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsBackgroundColorsCss,
            BsPositionCss,
            css`
                bs-navbar.fixed-top {
                    position: static;
                    margin: -1rem -1rem 1rem;
                }
        
                @media (min-width: 576px) {
                    
                    bs-navbar.fixed-top {
                        margin: -1.5rem -1.5rem 1rem;
                    }
                }
            `
        ];
    }
    
    _getExample() {
        return `
            <bs-navbar navbar-light class="bg-light fixed-top">
                <bs-navbar-brand-link>Fixed top</bs-navbar-brand-link>
            </bs-navbar>
        `;
    }
};

window.customElements.define('navbar-fixed-top-example', NavbarFixedTopExample);