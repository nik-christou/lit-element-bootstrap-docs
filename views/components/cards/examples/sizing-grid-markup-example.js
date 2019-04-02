
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';

import 'lit-element-bootstrap/components/button';
import 'lit-element-bootstrap/layout/grid';
import 'lit-element-bootstrap/components/card';

class SizingGridMarkupExample extends BsExampleMixin(LitElement) {

    _getExample() {
        return `
            <bs-row>
                <bs-column sm-6>
                    <bs-card>
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
                </bs-column>

                <bs-column sm-6>
                    <bs-card>
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
                </bs-column>
            </bs-row>
        `;
    }
};

window.customElements.define('sizing-grid-markup-example', SizingGridMarkupExample);