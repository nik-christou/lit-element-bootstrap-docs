
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';

import 'lit-element-bootstrap/components/list-group';

class ContextualLinksListGroupExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <bs-list-group-action>
                <bs-list-group-item-action-link>Dapibus ac facilisis in</bs-list-group-item-action-link>
                <bs-list-group-item-action-link primary active>A simple primary list group item</bs-list-group-item-action-link>
                <bs-list-group-item-action-link secondary>A simple secondary list group item</bs-list-group-item-action-link>
                <bs-list-group-item-action-link success>A simple success list group item</bs-list-group-item-action-link>
                <bs-list-group-item-action-link danger>A simple danger list group item</bs-list-group-item-action-link>
                <bs-list-group-item-action-link warning>A simple warning list group item</bs-list-group-item-action-link>
                <bs-list-group-item-action-link info>A simple info list group item</bs-list-group-item-action-link>
                <bs-list-group-item-action-link light>A simple light list group item</bs-list-group-item-action-link>
                <bs-list-group-item-action-link dark>A simple dark list group item</bs-list-group-item-action-link>
            </bs-list-group-action>
        `;
    }
};

window.customElements.define('contextual-links-list-group-example', ContextualLinksListGroupExample);