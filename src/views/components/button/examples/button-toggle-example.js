
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import '@lit-element-bootstrap/button';

class ButtonToggleExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <bs-button primary toggle>Single toggle</bs-button>
        `;
    }
};

window.customElements.define('button-toggle-example', ButtonToggleExample);