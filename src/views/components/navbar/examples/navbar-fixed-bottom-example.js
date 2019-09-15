
import { LitElement, css } from 'lit-element';
import { BsPositionCss, BsBackgroundColorsCss } from 'lit-element-bootstrap/utilities';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import 'lit-element-bootstrap/components/navbar';

class NavbarFixedBottomExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsBackgroundColorsCss,
            BsPositionCss,
            css`
                bs-navbar.fixed-bottom {
                    position: static;
                    margin: 1rem -1rem -1rem;
                }
        
                @media (min-width: 576px) {
                    
                    bs-navbar.fixed-bottom {
                        margin: 1rem -1.5rem -1.5rem;
                    }
                }
            `
        ];
    }
    
    _getExample() {
        return `
            <bs-navbar navbar-light class="bg-light fixed-bottom">
                <bs-navbar-brand-link>Fixed bottom</bs-navbar-brand-link>
            </bs-navbar>
        `;
    }
};

window.customElements.define('navbar-fixed-bottom-example', NavbarFixedBottomExample);