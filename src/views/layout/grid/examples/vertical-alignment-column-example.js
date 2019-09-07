
import { LitElement, css } from 'lit-element';
import { BsFlexAlignSelfCss } from 'lit-element-bootstrap/utilities/flex';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';

import 'lit-element-bootstrap/layout';

class VerticalAlignmentColumnExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsFlexAlignSelfCss,
            css`
                bs-column[demo] {
                    padding-top: 0.75rem;
                    padding-bottom: 0.75rem;
                    background-color: rgba(86,61,124,0.15);
                    border: 1px solid rgba(86,61,124,0.2);
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
                <bs-row>
                    <bs-column xs demo class="align-self-start">One of three columns</bs-column>
                    <bs-column xs demo class="align-self-center">One of three columns</bs-column>
                    <bs-column xs demo class="align-self-end">One of three columns</bs-column>
                </bs-row>
            </bs-container>
        `;
    }
};

window.customElements.define('vertical-alignment-column-example', VerticalAlignmentColumnExample);