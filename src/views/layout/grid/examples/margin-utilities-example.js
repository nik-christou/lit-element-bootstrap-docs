
import { LitElement, css } from 'lit-element';
import { BsSpacingCss } from 'lit-element-bootstrap/utilities';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';

import 'lit-element-bootstrap/layout';

class MarginUtilitiesExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsSpacingCss,
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
                    <bs-column md-4 demo class="ml-auto">md-4 .ml-auto</bs-column>
                </bs-row>
                <bs-row>
                    <bs-column md-3 demo class="ml-md-auto">md-3 .ml-md-auto</bs-column>
                    <bs-column md-3 demo class="ml-md-auto">md-3 .ml-md-auto</bs-column>
                </bs-row>
                <bs-row>
                    <bs-column xs-auto demo class="mr-auto">xs-auto .mr-auto</bs-column>
                    <bs-column xs-auto demo>xs-auto</bs-column>
                </bs-row>
            </bs-container>
        `;
    }
};

window.customElements.define('margin-utilities-example', MarginUtilitiesExample);