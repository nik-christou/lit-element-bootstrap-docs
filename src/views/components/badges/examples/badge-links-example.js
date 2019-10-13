
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import '@lit-element-bootstrap/badge';

class BadgeLinksExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <bs-badge-link primary>Primary</bs-badge-link>
            <bs-badge-link secondary>Secondary</bs-badge-link>
            <bs-badge-link success>Success</bs-badge-link>
            <bs-badge-link info>Info</bs-badge-link>
            <bs-badge-link warning>Warning</bs-badge-link>
            <bs-badge-link danger>Danger</bs-badge-link>
            <bs-badge-link light>Light</bs-badge-link>
            <bs-badge-link dark>Dark</bs-badge-link>
        `;
    }
};

window.customElements.define('badge-links-example', BadgeLinksExample);