
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import '@lit-element-bootstrap/badge';
import '@lit-element-bootstrap/list-group';

class BadgesListGroupExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <bs-list-group>
                <bs-list-group-badge-item>Cras justo odio <bs-badge pill primary>14</bs-badge></bs-list-group-badge-item>
                <bs-list-group-badge-item>Dapibus ac facilisis in <bs-badge pill primary>2</bs-badge></bs-list-group-badge-item>
                <bs-list-group-badge-item>Morbi leo risus <bs-badge pill primary>1</bs-badge></bs-list-group-badge-item>
            </bs-list-group>
        `;
    }
};

window.customElements.define('badges-list-group-example', BadgesListGroupExample);