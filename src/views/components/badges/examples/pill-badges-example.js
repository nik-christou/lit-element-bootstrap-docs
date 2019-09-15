
import { LitElement, html } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import 'lit-element-bootstrap/components/badge';

class PillBadgesExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <span><bs-badge pill primary>Primary</bs-badge></span>
            <span><bs-badge pill secondary>Seconday</bs-badge></span>
            <span><bs-badge pill success>Success</bs-badge></span>
            <span><bs-badge pill info>Info</bs-badge></span>
            <span><bs-badge pill warning>Warining</bs-badge></span>
            <span><bs-badge pill danger>Danger</bs-badge></span>
            <span><bs-badge pill light>Light</bs-badge></span>
            <span><bs-badge pill dark>Dark</bs-badge></span>
        `;
    }
};

window.customElements.define('pill-badges-example', PillBadgesExample);