
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import '@lit-element-bootstrap/list-group';

class FlushListGroupExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <bs-list-group-flush>
                <bs-list-group-item>Cras justo odio</bs-list-group-item>
                <bs-list-group-item active>Dapibus ac facilisis in</bs-list-group-item>
                <bs-list-group-item>Morbi leo risus</bs-list-group-item>
                <bs-list-group-item>Porta ac consectetur ac</bs-list-group-item>
                <bs-list-group-item disabled>Vestibulum at eros</bs-list-group-item>
            </bs-list-group-flush> 
        `;
    }
};

window.customElements.define('flush-list-group-example', FlushListGroupExample);