
import { LitElement } from 'lit-element';
import { BsTextCss, BsTextColorCss } from '@lit-element-bootstrap/utilities';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import '@lit-element-bootstrap/card';
import '@lit-element-bootstrap/button';

class HeaderAndFooterFeaturedExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsTextColorCss,
            BsTextCss
        ];
    }

    _getExample() {
        return `
            <bs-card class="text-center">
                <bs-card-header slot="card-header">Featured</bs-card-header>
                <bs-card-body>
                    <bs-card-title slot="card-title">
                        <h5>Special title treatment</h5>
                    </bs-card-title>
                    <bs-card-text slot="card-text">
                        <p>With supporting text below as a natural lead-in to additional content.</p>
                    </bs-card-text>
                    <bs-button primary>Go somewhere</bs-button>
                </bs-card-body>
                <bs-card-footer slot="card-footer">
                    <span class="text-muted">2 days ago</span>
                </bs-card-footer>
            </bs-card>
        `;
    }
};

window.customElements.define('header-and-footer-featured-example', HeaderAndFooterFeaturedExample);