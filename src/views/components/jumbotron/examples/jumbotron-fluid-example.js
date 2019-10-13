
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import '@lit-element-bootstrap/layout';
import '@lit-element-bootstrap/jumbotron';

class JumbotronFluidExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <bs-jumbotron fluid>
                <bs-container>
                    <h1 class="display-4">Fluid jumbotron</h1>
                    <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                </bs-container>
            </bs-jumbotron>
        `;
    }
};

window.customElements.define('jumbotron-fluid-example', JumbotronFluidExample);