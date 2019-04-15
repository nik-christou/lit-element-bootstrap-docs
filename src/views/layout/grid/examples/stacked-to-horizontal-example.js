
import { LitElement, css } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';

import 'lit-element-bootstrap/layout/grid';

class StackedToHorizontalExample extends BsExampleMixin(LitElement) {
    
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
                    <bs-column sm-8 demo>sm-8</bs-column>
                    <bs-column sm-4 demo>sm-4</bs-column>
                </bs-row>
                <bs-row>
                    <bs-column sm demo>sm</bs-column>
                    <bs-column sm demo>sm</bs-column>
                    <bs-column sm demo>sm</bs-column>
                </bs-row>
            </bs-container>
        `;
    }
};

window.customElements.define('stacked-to-horizontal-example', StackedToHorizontalExample);