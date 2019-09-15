
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import 'lit-element-bootstrap/components/badge';

class BadgeContextualExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <span><bs-badge primary>Primary</bs-badge></span>
            <span><bs-badge secondary>Seconday</bs-badge></span>
            <span><bs-badge success>Success</bs-badge></span>
            <span><bs-badge info>Info</bs-badge></span>
            <span><bs-badge warning>Warining</bs-badge></span>
            <span><bs-badge danger>Danger</bs-badge></span>
            <span><bs-badge light>Light</bs-badge></span>
            <span><bs-badge dark>Dark</bs-badge></span>
        `;
    }
};

window.customElements.define('badge-contextual-example', BadgeContextualExample);