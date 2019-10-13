
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import '@lit-element-bootstrap/navs';

class JustifiedPillsNavExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <bs-nav pills justified>
                <bs-nav-item><bs-nav-link active>Active</bs-nav-link></bs-nav-item>
                <bs-nav-item><bs-nav-link>Longer nav link</bs-nav-link></bs-nav-item>
                <bs-nav-item><bs-nav-link>Link</bs-nav-link></bs-nav-item>
                <bs-nav-item><bs-nav-link disabled>Disabled</bs-nav-link></bs-nav-item>
            </bs-nav>
        `;
    }
};

window.customElements.define('justified-pills-nav-example', JustifiedPillsNavExample);