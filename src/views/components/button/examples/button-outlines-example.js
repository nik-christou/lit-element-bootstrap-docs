
import { LitElement, css } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';

import 'lit-element-bootstrap/components/button';

class ButtonOutlinesExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            css`
                bs-button {
                    display: initial;
                }
            `
        ];
    }

    _getExample() {
        return `
            <bs-button outline-primary>Primary</bs-button>
            <bs-button outline-secondary>Secondary</bs-button>
            <bs-button outline-success>Success</bs-button>
            <bs-button outline-danger>Danger</bs-button>
            <bs-button outline-warning>Warning</bs-button>
            <bs-button outline-info>Info</bs-button>
            <bs-button outline-light>Light</bs-button>
            <bs-button outline-dark>Dark</bs-button>
            <bs-button outline-link>Link</bs-button> 
        `;
    }
};

window.customElements.define('button-outlines-example', ButtonOutlinesExample);