
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import '@lit-element-bootstrap/button';

class ButtonStylesExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <bs-button primary>Primary</bs-button>
            <bs-button secondary>Secondary</bs-button>
            <bs-button success>Success</bs-button>
            <bs-button danger>Danger</bs-button>
            <bs-button warning>Warning</bs-button>
            <bs-button info>Info</bs-button>
            <bs-button light>Light</bs-button>
            <bs-button dark>Dark</bs-button>
            <bs-button link>Link</bs-button>
        `;
    }
};

window.customElements.define('button-styles-example', ButtonStylesExample);