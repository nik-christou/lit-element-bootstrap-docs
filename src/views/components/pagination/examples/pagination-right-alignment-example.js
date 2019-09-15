
import { LitElement } from 'lit-element';
import { BsFlexJustifyCss } from 'lit-element-bootstrap/utilities';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import 'lit-element-bootstrap/components/pagination';

class PaginationRightAlignmentExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsFlexJustifyCss
        ];
    }
    
    _getExample() {
        return `
            <bs-pagination class="justify-content-end">
                <bs-page-item><bs-page-link>Previous</bs-page-link></bs-page-item>
                <bs-page-item><bs-page-link>1</bs-page-link></bs-page-item>
                <bs-page-item><bs-page-link>2</bs-page-link></bs-page-item>
                <bs-page-item><bs-page-link>3</bs-page-link></bs-page-item>
                <bs-page-item><bs-page-link>Next</bs-page-link></bs-page-item>
            </bs-pagination>
        `;
    }
};

window.customElements.define('pagination-right-alignment-example', PaginationRightAlignmentExample);