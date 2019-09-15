
import { LitElement, css } from 'lit-element';
import { BsFlexAlignItemsCss } from 'lit-element-bootstrap/utilities';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import 'lit-element-bootstrap/layout';

class VerticalAlignmentExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsFlexAlignItemsCss,
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
            
                bs-row {
                    min-height: 10rem;
                    background-color: rgba(255,0,0,0.1);
                }
            `
        ];
    }
    
    _getExample() {
        return `
            <bs-container>
                <bs-row class="align-items-start">
                    <bs-column xs demo>One of three columns</bs-column>
                    <bs-column xs demo>One of three columns</bs-column>
                    <bs-column xs demo>One of three columns</bs-column>
                </bs-row>
                <bs-row class="align-items-center">
                    <bs-column xs demo>One of three columns</bs-column>
                    <bs-column xs demo>One of three columns</bs-column>
                    <bs-column xs demo>One of three columns</bs-column>
                </bs-row>
                <bs-row class="align-items-end">
                    <bs-column xs demo>One of three columns</bs-column>
                    <bs-column xs demo>One of three columns</bs-column>
                    <bs-column xs demo>One of three columns</bs-column>
                </bs-row>
            </bs-container>
        `;
    }
};

window.customElements.define('vertical-alignment-example', VerticalAlignmentExample);