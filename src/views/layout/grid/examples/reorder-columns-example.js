
import { LitElement, css } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import 'lit-element-bootstrap/layout';

class ReorderColumnsExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            css`
                bs-column[demo] {
                    padding-top: 0.75rem;
                    padding-bottom: 0.75rem;
                    background-color: rgba(86,61,124,0.15);
                    border: 1px solid rgba(86,61,124,0.2);
                }
            `
        ];
    }

    _getExample() {
        return `
            <bs-container>
                <bs-row>
                    <bs-column xs demo>First, but unordered</bs-column>
                    <bs-column xs order-xs-12 demo>Second, but last</bs-column>
                    <bs-column xs order-xs-1 demo>Third, but first</bs-column>
                </bs-row>
            </bs-container>
        `;
    }
};

window.customElements.define('reorder-columns-example', ReorderColumnsExample);