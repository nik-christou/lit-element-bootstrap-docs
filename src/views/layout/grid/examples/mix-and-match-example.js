
import { LitElement, css } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';

import 'lit-element-bootstrap/layout/grid';

class MixAndMatchExample extends BsExampleMixin(LitElement) {
    
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
                    <bs-column xs-12 md-8 demo>xs-12 md-8</bs-column>
                    <bs-column xs-6 md-4 demo>xs-6 md-4</bs-column>
                </bs-row>
                <bs-row>
                    <bs-column xs-6 md-4 demo>xs-6 md-4</bs-column>
                    <bs-column xs-6 md-4 demo>xs-6 md-4</bs-column>
                    <bs-column xs-6 md-4 demo>xs-6 md-4</bs-column>
                </bs-row>
                <bs-row>
                    <bs-column xs-6 demo>xs-6</bs-column>
                    <bs-column xs-6 demo>xs-6</bs-column>
                </bs-row>
            </bs-container>
        `;
    }
};

window.customElements.define('mix-and-match-example', MixAndMatchExample);