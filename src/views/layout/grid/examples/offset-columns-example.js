
import { LitElement, css } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';

import 'lit-element-bootstrap/layout';

class OffsetColumnsExample extends BsExampleMixin(LitElement) {
    
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
                    <bs-column md-4 demo>md-4</bs-column>
                    <bs-column md-4 offset-md-4 demo>md-4 offset-md-4</bs-column>
                </bs-row>
                <bs-row>
                    <bs-column md-3 offset-md-3 demo>md-3 offset-md-3</bs-column>
                    <bs-column md-3 offset-md-3 demo>md-3 offset-md-3</bs-column>
                </bs-row>
                <bs-row>
                    <bs-column md-6 offset-md-3 demo>md-6 offset-md-3</bs-column>
                </bs-row>
            </bs-container>
        `;
    }

    _getExample() {
        return `
            <bs-container>
                <bs-row>
                    <bs-column md-4 demo>md-4</bs-column>
                    <bs-column md-4 offset-md-4 demo>md-4 offset-md-4</bs-column>
                </bs-row>
                <bs-row>
                    <bs-column md-3 offset-md-3 demo>md-3 offset-md-3</bs-column>
                    <bs-column md-3 offset-md-3 demo>md-3 offset-md-3</bs-column>
                </bs-row>
                <bs-row>
                    <bs-column md-6 offset-md-3 demo>md-6 offset-md-3</bs-column>
                </bs-row>
            </bs-container>
        `;
    }
};

window.customElements.define('offset-columns-example', OffsetColumnsExample);