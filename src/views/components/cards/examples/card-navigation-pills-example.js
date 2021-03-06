
import { LitElement } from 'lit-element';
import { BsTextCss } from '@lit-element-bootstrap/utilities';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import '@lit-element-bootstrap/card';
import '@lit-element-bootstrap/navs';
import '@lit-element-bootstrap/list-group';

class CardNavigationPillsExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsTextCss
        ];
    }

    _getExample() {
        return `
            <bs-card class="text-center">
                <bs-card-header slot="card-header">
                    <bs-nav pills>
                        <bs-nav-item> 
                            <bs-nav-link active>Active</bs-nav-link>
                        </bs-nav-item>
                        <bs-nav-item>
                            <bs-nav-link>Link</bs-nav-link>
                        </bs-nav-item>
                        <bs-nav-item>
                            <bs-nav-link disabled>Disabled</bs-nav-link>
                        </bs-nav-item>
                    </bs-nav>
                </bs-card-header>
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

window.customElements.define('card-navigation-pills-example', CardNavigationPillsExample);