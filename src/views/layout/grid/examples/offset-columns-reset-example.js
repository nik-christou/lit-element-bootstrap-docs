
import { LitElement, css } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import 'lit-element-bootstrap/layout';

class OffsetColumnsResetExample extends BsExampleMixin(LitElement) {
    
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
                
                bs-row + bs-row {
                    margin-top: 1rem;
                }
            `
        ];
    }
    
    _getExample() {
        return `
            <bs-container>
                <bs-row>
                    <bs-column sm-5 md-6 demo>sm-5 md-6</bs-column>
                    <bs-column sm-5 offset-sm-2 md-6 offset-md-0 demo>sm-5 offset-sm-2</bs-column>
                </bs-row>
                <bs-row>
                    <bs-column sm-6 md-5 lg-6 demo>sm-6 md-5 lg-6</bs-column>
                    <bs-column sm-6 md-5 offset-md-2 lg-6 offset-lg-0 demo>sm-6 md-5 offset-md-2 lg-6 lg-0</bs-column>
                </bs-row>
            </bs-container>
        `;
    }
};

window.customElements.define('offset-columns-reset-example', OffsetColumnsResetExample);