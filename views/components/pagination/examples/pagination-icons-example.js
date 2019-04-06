
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';

import 'lit-element-bootstrap/components/pagination';

class PaginationIconsExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <bs-pagination>
                <bs-page-item><bs-page-link>&laquo;</bs-page-link></bs-page-item>
                <bs-page-item><bs-page-link>1</bs-page-link></bs-page-item>
                <bs-page-item><bs-page-link>2</bs-page-link></bs-page-item>
                <bs-page-item><bs-page-link>3</bs-page-link></bs-page-item>
                <bs-page-item><bs-page-link>&raquo;</bs-page-link></bs-page-item>
            </bs-pagination> 
        `;
    }
};

window.customElements.define('pagination-icons-example', PaginationIconsExample);