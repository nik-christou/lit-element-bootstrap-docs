
import { LitElement, css } from 'lit-element';
import { BsSizingCss, BsDisplayCss } from 'lit-element-bootstrap/utilities';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';

import 'lit-element-bootstrap/layout/grid';

class ColumnBreakWithUtilitiesExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsSizingCss,
            BsDisplayCss,
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
                <bs-column xs-6 sm-3 demo>xs-6 sm-3</bs-column>
                <bs-column xs-6 sm-3 demo>xs-6 sm-3</bs-column>
                <!-- Force next columns to break to new line at md breakpoint and up -->
                <div class="w-100 d-none d-md-block"></div>
                <bs-column xs-6 sm-3 demo>xs-6 sm-3</bs-column>
                <bs-column xs-6 sm-3 demo>xs-6 sm-3</bs-column>
            </bs-row>
        `;
    }
};

window.customElements.define('column-break-with-utilities-example', ColumnBreakWithUtilitiesExample);