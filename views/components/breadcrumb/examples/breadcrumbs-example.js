
import { LitElement, html } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';

import 'lit-element-bootstrap/components/breadcrumb';

class BreadcrumBsExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <bs-breadcrumb>
                <bs-breadcrumb-item title="Home" target="/home" active></bs-breadcrumb-item>
            </bs-breadcrumb>
            
            <bs-breadcrumb>
                <bs-breadcrumb-item title="Home" target="/home"></bs-breadcrumb-item>
                <bs-breadcrumb-item title="Library" target="/library" active></bs-breadcrumb-item>
            </bs-breadcrumb>
            
            <bs-breadcrumb>
                <bs-breadcrumb-item title="Home" target="/home"></bs-breadcrumb-item>
                <bs-breadcrumb-item title="Library" target="/library"></bs-breadcrumb-item>
                <bs-breadcrumb-item title="Data" target="/data" active></bs-breadcrumb-item>
            </bs-breadcrumb> 
        `;
    }
};

window.customElements.define('breadcrumbs-example', BreadcrumBsExample);