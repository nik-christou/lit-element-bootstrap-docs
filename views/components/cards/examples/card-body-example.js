
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';

import 'lit-element-bootstrap/components/card';

class CardBodyExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <bs-card>
                <bs-card-body>
                    <div>This is some text within a card body</div>
                </bs-card-body>
            </bs-card>
        `;
    }
};

window.customElements.define('card-body-example', CardBodyExample);