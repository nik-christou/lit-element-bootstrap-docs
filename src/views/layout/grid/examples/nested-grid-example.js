
import { LitElement, css } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import '@lit-element-bootstrap/layout';

class NestedGridExample extends BsExampleMixin(LitElement) {
    
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
                    <bs-column sm-9 demo>Level 1: sm-9
                        <bs-row>
                            <bs-column xs-8 sm-6 demo>Level 2: xs-8 sm-6</bs-column>
                            <bs-column xs-4 sm-6 demo>Level 2: xs-8 sm-6</bs-column>
                        </bs-row>
                    </bs-column>
                </bs-row>
            </bs-container>
        `;
    }
};

window.customElements.define('nested-grid-example', NestedGridExample);