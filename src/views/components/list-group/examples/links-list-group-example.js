
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';

import 'lit-element-bootstrap/components/list-group';

class LinksListGroupExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <bs-list-group-action>
                <bs-list-group-item-action-link active>Cras justo odio</bs-list-group-item-action-link>
                <bs-list-group-item-action-link>Dapibus ac facilisis in</bs-list-group-item-action-link>
                <bs-list-group-item-action-link>Morbi leo risus</bs-list-group-item-action-link>
                <bs-list-group-item-action-link>Porta ac consectetur ac</bs-list-group-item-action-link>
                <bs-list-group-item-action-link disabled>Vestibulum at eros</bs-list-group-item-action-link>
            </bs-list-group-action>
        `;
    }
};

window.customElements.define('links-list-group-example', LinksListGroupExample);