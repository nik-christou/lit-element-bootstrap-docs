
import { LitElement } from 'lit-element';
import { BsFlexJustifyCss } from 'lit-element-bootstrap/utilities';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import 'lit-element-bootstrap/components/navs';

class HorizontalCenterNavExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <bs-nav class="justify-content-center">
                <bs-nav-item><bs-nav-link active>Active</bs-nav-link></bs-nav-item>
                <bs-nav-item><bs-nav-link>Link</bs-nav-link></bs-nav-item>
                <bs-nav-item><bs-nav-link>Link</bs-nav-link></bs-nav-item>
                <bs-nav-item><bs-nav-link disabled>Disabled</bs-nav-link></bs-nav-item>
            </bs-nav> 
        `;
    }
};

window.customElements.define('horizontal-center-nav-example', HorizontalCenterNavExample);