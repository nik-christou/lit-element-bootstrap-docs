
import { LitElement, css } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';

import 'lit-element-bootstrap/layout/grid';

class NoGuttersExample extends BsExampleMixin(LitElement) {
    
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
            <bs-row no-gutters>
                <bs-column xs-12 sm-6 md-8 demo>xs-12 sm-6 md-8</bs-column>
                <bs-column xs-6 md-4 demo>xs-6 md-4</bs-column>
            </bs-row>
        `;
    }
};

window.customElements.define('no-gutters-example', NoGuttersExample);