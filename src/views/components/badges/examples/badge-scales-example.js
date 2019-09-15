
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import 'lit-element-bootstrap/components/badge';

class BadgeScalesExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <h1>Example heading <bs-badge secondary>New</bs-badge></h1>
            <h2>Example heading <bs-badge secondary>New</bs-badge></h2>
            <h3>Example heading <bs-badge secondary>New</bs-badge></h3>
            <h4>Example heading <bs-badge secondary>New</bs-badge></h4>
            <h5>Example heading <bs-badge secondary>New</bs-badge></h5>
            <h6>Example heading <bs-badge secondary>New</bs-badge></h6>
        `;
    }
};

window.customElements.define('badge-scales-example', BadgeScalesExample);