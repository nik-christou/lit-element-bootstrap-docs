
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';

import 'lit-element-bootstrap/components/list-group';

class ActiveListGroupItemsExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <bs-list-group>
                <bs-list-group-item active>Cras justo odio</bs-list-group-item>
                <bs-list-group-item>Dapibus ac facilisis in</bs-list-group-item>
                <bs-list-group-item>Morbi leo risus</bs-list-group-item>
                <bs-list-group-item>Porta ac consectetur ac</bs-list-group-item>
                <bs-list-group-item>Vestibulum at eros</bs-list-group-item>
            </bs-list-group>
        `;
    }
};

window.customElements.define('active-list-group-items-example', ActiveListGroupItemsExample);