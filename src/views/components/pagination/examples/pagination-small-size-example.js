
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import '@lit-element-bootstrap/pagination';

class PaginationSmallSizeExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <bs-pagination small>
                <bs-page-item disabled><bs-page-link>1</bs-page-link></bs-page-item>
                <bs-page-item><bs-page-link>2</bs-page-link></bs-page-item>
                <bs-page-item><bs-page-link>3</bs-page-link></bs-page-item>
            </bs-pagination>
        `;
    }
};

window.customElements.define('pagination-small-size-example', PaginationSmallSizeExample);