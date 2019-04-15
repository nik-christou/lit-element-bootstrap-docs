
import { LitElement, css } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';

import 'lit-element-bootstrap/components/card';
import 'lit-element-bootstrap/components/list-group';

class CardListGroupExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            css`
                bs-card {
                    width: 18rem;
                }
            `
        ];
    }
    
    _getExample() {
        return `
            <bs-card>
                <bs-list-group-flush>
                    <bs-list-group-item>Cras justo odio</bs-list-group-item>
                    <bs-list-group-item>Dapibus ac facilisis in</bs-list-group-item>
                    <bs-list-group-item>Morbi leo risus</bs-list-group-item>
                    <bs-list-group-item>Porta ac consectetur ac</bs-list-group-item>
                    <bs-list-group-item disabled>Vestibulum at eros</bs-list-group-item>
                </bs-list-group-flush>
            </bs-card>
        `;
    }
};

window.customElements.define('card-list-group-example', CardListGroupExample);