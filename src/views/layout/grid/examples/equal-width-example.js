
import { LitElement, css } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';

import 'lit-element-bootstrap/layout';

class EqualWidthExample extends BsExampleMixin(LitElement) {
    
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
                    <bs-column xs demo>1 of 2</bs-column>
                    <bs-column xs demo>2 of 2</bs-column>
                </bs-row>
                <bs-row>
                    <bs-column xs demo>1 of 3</bs-column>
                    <bs-column xs demo>2 of 3</bs-column>
                    <bs-column xs demo>3 of 3</bs-column>
                </bs-row>
            </bs-container>
        `;
    }
};

window.customElements.define('equal-width-example', EqualWidthExample);