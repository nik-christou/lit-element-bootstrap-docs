
import { LitElement, css } from 'lit-element';
import { BsSizingCss } from '@lit-element-bootstrap/utilities';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import '@lit-element-bootstrap/layout';

class EqualWidthMultiRowExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsSizingCss,
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
                <bs-column xs demo>col</bs-column>
                <bs-column xs demo>col</bs-column>
                <div class="w-100"></div>
                <bs-column xs demo>col</bs-column>
                <bs-column xs demo>col</bs-column>
            </bs-row>
        `;
    }
};

window.customElements.define('equal-width-multi-row-example', EqualWidthMultiRowExample);