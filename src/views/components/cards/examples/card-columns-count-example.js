
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

class CardColumnsCountExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
        <style>
            --card-column-count: 4;
        </style>
        `;
    }
};

window.customElements.define('card-columns-count-example', CardColumnsCountExample);