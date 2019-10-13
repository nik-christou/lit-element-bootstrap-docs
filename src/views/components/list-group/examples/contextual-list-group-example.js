
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import '@lit-element-bootstrap/list-group';

class ContextualListGroupExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <bs-list-group>
                <bs-list-group-item>Dapibus ac facilisis in</bs-list-group-item>
                <bs-list-group-item primary>A simple primary list group item</bs-list-group-item>
                <bs-list-group-item secondary>A simple secondary list group item</bs-list-group-item>
                <bs-list-group-item success>A simple success list group item</bs-list-group-item>
                <bs-list-group-item danger>A simple danger list group item</bs-list-group-item>
                <bs-list-group-item warning>A simple warning list group item</bs-list-group-item>
                <bs-list-group-item info>A simple info list group item</bs-list-group-item>
                <bs-list-group-item light>A simple light list group item</bs-list-group-item>
                <bs-list-group-item dark>A simple dark list group item</bs-list-group-item>
            </bs-list-group>
        `;
    }
};

window.customElements.define('contextual-list-group-example', ContextualListGroupExample);