
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import '@lit-element-bootstrap/breadcrumb';

class BreadcrumBsExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <bs-breadcrumb>
                <bs-breadcrumb-item title="Home" href="/home" active></bs-breadcrumb-item>
            </bs-breadcrumb>
            
            <bs-breadcrumb>
                <bs-breadcrumb-item title="Home" href="/home"></bs-breadcrumb-item>
                <bs-breadcrumb-item title="Library" href="/library" active></bs-breadcrumb-item>
            </bs-breadcrumb>
            
            <bs-breadcrumb>
                <bs-breadcrumb-item title="Home" href="/home"></bs-breadcrumb-item>
                <bs-breadcrumb-item title="Library" href="/library"></bs-breadcrumb-item>
                <bs-breadcrumb-item title="Data" href="/data" active></bs-breadcrumb-item>
            </bs-breadcrumb> 
        `;
    }
};

window.customElements.define('breadcrumbs-example', BreadcrumBsExample);