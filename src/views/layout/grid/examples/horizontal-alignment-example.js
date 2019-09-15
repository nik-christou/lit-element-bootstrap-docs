
import { LitElement, css } from 'lit-element';
import { BsFlexJustifyCss } from 'lit-element-bootstrap/utilities';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import 'lit-element-bootstrap/layout';

class HorizontalAlignmentExample extends BsExampleMixin(LitElement) {
    
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
                <bs-row class="justify-content-start">
                    <bs-column xs-4 demo>One of two columns</bs-column>
                    <bs-column xs-4 demo>One of two columns</bs-column>
                </bs-row>
                <bs-row class="justify-content-center">
                    <bs-column xs-4 demo>One of two columns</bs-column>
                    <bs-column xs-4 demo>One of two columns</bs-column>
                </bs-row>
                <bs-row class="justify-content-end">
                    <bs-column xs-4 demo>One of two columns</bs-column>
                    <bs-column xs-4 demo>One of two columns</bs-column>
                </bs-row>
                <bs-row class="justify-content-around">
                    <bs-column xs-4 demo>One of two columns</bs-column>
                    <bs-column xs-4 demo>One of two columns</bs-column>
                </bs-row>
                <bs-row class="justify-content-between">
                    <bs-column xs-4 demo>One of two columns</bs-column>
                    <bs-column xs-4 demo>One of two columns</bs-column>
                </bs-row>
            </bs-container>
        `;
    }
};

window.customElements.define('horizontal-alignment-example', HorizontalAlignmentExample);