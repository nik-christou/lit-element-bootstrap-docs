
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import '@lit-element-bootstrap/navs';

class TabsNavExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <bs-nav tabs>
                <bs-nav-item><bs-nav-link active>Active</bs-nav-link></bs-nav-item>
                <bs-nav-item><bs-nav-link>Link</bs-nav-link></bs-nav-item>
                <bs-nav-item><bs-nav-link>Link</bs-nav-link></bs-nav-item>
                <bs-nav-item><bs-nav-link disabled>Disabled</bs-nav-link></bs-nav-item>
            </bs-nav>
        `;
    }
};

window.customElements.define('tabs-nav-example', TabsNavExample);