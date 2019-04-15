
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';

import 'lit-element-bootstrap/components/button';
import 'lit-element-bootstrap/components/card';

class SizingUtilitiesExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <bs-card w-75>
                <bs-card-body>
                    <bs-card-title slot="card-title">
                        <h5>Card title</h5>
                    </bs-card-title>
                    <bs-card-text slot="card-text">
                        <p>With supporting text below as a natural lead-in to additional content.</p>
                    </bs-card-text>
                    <bs-button primary>Go somewhere</bs-button>
                </bs-card-body>
            </bs-card>
            <br />
            <bs-card w-50>
                <bs-card-body>
                    <bs-card-title slot="card-title">
                        <h5>Card title</h5>
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

window.customElements.define('sizing-utilities-example', SizingUtilitiesExample);