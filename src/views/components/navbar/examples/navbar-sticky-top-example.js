
import { LitElement, css } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';
import { BsPositionCss, BsBackgroundColorsCss } from '@lit-element-bootstrap/utilities';

import '@lit-element-bootstrap/navbar';

class NavbarStickyTopExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsBackgroundColorsCss,
            BsPositionCss,
            css`
                bs-navbar.sticky-top {
                    position: static;
                    margin: -1rem -1rem 1rem;
                }
        
                @media (min-width: 576px) {
                    
                    bs-navbar.sticky-top {
                        margin: -1.5rem -1.5rem 1rem;
                    }
                }
            `
        ];
    }
    
    _getExample() {
        return `
            <bs-navbar navbar-light class="bg-light sticky-top">
                <bs-navbar-brand-link>Sticky top</bs-navbar-brand-link>
            </bs-navbar>
        `;
    }
};

window.customElements.define('navbar-sticky-top-example', NavbarStickyTopExample);