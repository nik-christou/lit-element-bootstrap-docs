
import { LitElement, css } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';

import 'lit-element-bootstrap/components/button';

class ButtonActiveStateExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            css`
                bs-link-button {
                    display: initial;
                }
            `
        ];
    }

    _getExample() {
        return `
            <bs-link-button active>Basic</bs-link-button>
            <bs-link-button primary active>Primary</bs-link-button>
            <bs-link-button secondary active>Secondary</bs-link-button>
            <bs-link-button success active>Success</bs-link-button>
            <bs-link-button danger active>Danger</bs-link-button>    
            <bs-link-button warning active>Warning</bs-link-button>
            <bs-link-button info active>Info</bs-link-button>
            <bs-link-button light active>Light</bs-link-button>
            <bs-link-button dark active>Dark</bs-link-button>
            <bs-link-button link active>Link</bs-link-button>
        `;
    }
};

window.customElements.define('button-active-state-example', ButtonActiveStateExample);