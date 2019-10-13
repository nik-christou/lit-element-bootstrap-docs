
import { LitElement, css } from 'lit-element';
import { BsFlexJustifyCss } from '@lit-element-bootstrap/utilities';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import '@lit-element-bootstrap/layout';

class VariableWidthContentExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsFlexJustifyCss,
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
                <bs-row class="justify-content-md-center">
                    <bs-column lg-2 demo>1 of 3</bs-column>
                    <bs-column md-auto demo>Variable width content</bs-column>
                    <bs-column lg-2 demo>3 of 3</bs-column>
                </bs-row>
                <bs-row>
                    <bs-column xs demo>1 of 3</bs-column>
                    <bs-column md-auto demo>Variable width content</bs-column>
                    <bs-column lg-2 demo>3 of 3</bs-column>
                </bs-row>
            </bs-container>
        `;
    }
};

window.customElements.define('variable-width-content-example', VariableWidthContentExample);