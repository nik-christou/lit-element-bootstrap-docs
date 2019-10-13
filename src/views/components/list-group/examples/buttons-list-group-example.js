
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import '@lit-element-bootstrap/list-group';

class ButtonsListGroupExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <bs-list-group-action>
                <bs-list-group-item-action-button active>Cras justo odio</bs-list-group-item-action-button>
                <bs-list-group-item-action-button>Dapibus ac facilisis in</bs-list-group-item-action-button>
                <bs-list-group-item-action-button>Morbi leo risus</bs-list-group-item-action-button>
                <bs-list-group-item-action-button>Porta ac consectetur ac</bs-list-group-item-action-button>
                <bs-list-group-item-action-button disabled>Vestibulum at eros</bs-list-group-item-action-button>
            </bs-list-group-action>
        `;
    }
};

window.customElements.define('buttons-list-group-example', ButtonsListGroupExample);