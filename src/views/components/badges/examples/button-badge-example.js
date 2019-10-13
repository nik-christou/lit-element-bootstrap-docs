
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import '@lit-element-bootstrap/badge';
import '@lit-element-bootstrap/button';

class ButtonBadgeExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <bs-button primary> Notifications <bs-badge light>4</bs-badge></bs-button>
        `;
    }
};

window.customElements.define('button-badge-example', ButtonBadgeExample);