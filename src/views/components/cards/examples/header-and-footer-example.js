
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import 'lit-element-bootstrap/components/button';
import 'lit-element-bootstrap/components/card';

class HeaderAndFooterExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <bs-card>
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
            </bs-card>
        `;
    }
};

window.customElements.define('header-and-footer-example', HeaderAndFooterExample);