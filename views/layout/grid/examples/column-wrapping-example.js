
import { LitElement, css } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';

import 'lit-element-bootstrap/layout/grid';

class ColumnWrappingExample extends BsExampleMixin(LitElement) {
    
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
            <bs-row>
                <bs-column xs-9 demo>xs-9</bs-column>
                <bs-column xs-4 demo>xs-4<br/>Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.</bs-column>
                <bs-column xs-6 demo>xs-6<br/>Subsequent columns continue along the new line.</bs-column>
            </bs-row>
        `;
    }
};

window.customElements.define('column-wrapping-example', ColumnWrappingExample);