
import { LitElement, css } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import 'lit-element-bootstrap/components/button';

class ButtonDisabledStateExample extends BsExampleMixin(LitElement) {
    
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
            <bs-button disabled>Basic</bs-button>
            <bs-button primary disabled>Primary</bs-button>
            <bs-button secondary disabled>Secondary</bs-button>
            <bs-button success disabled>Success</bs-button>
            <bs-button danger disabled>Danger</bs-button>    
            <bs-button warning disabled>Warning</bs-button>
            <bs-button info disabled>Info</bs-button>
            <bs-button light disabled>Light</bs-button>
            <bs-button dark disabled>Dark</bs-button>
            <bs-button link disabled>Link</bs-button> 
        `;
    }
};

window.customElements.define('button-disabled-state-example', ButtonDisabledStateExample);