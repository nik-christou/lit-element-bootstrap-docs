
import { LitElement, html } from 'lit-element';
import { BsDocsContentCss } from '../../../component/content/bs-docs-content-css';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

import './examples/static-modal-example';
import './examples/working-modal-demo-example';
import './examples/modal-long-content-example';
import './examples/modal-centered-example';
import './examples/modal-grid-example';
import './examples/modal-varying-content-example';
import './examples/modal-no-animation-example';
import './examples/modal-sizes-example';

class ModalView extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsDocsContentCss,
            BsContentCodeCss
        ];
    }
    
    render() {
        return html`

            <h1 class="bd-title" id="content">Modal</h1>
        
            <static-modal-example></static-modal-example>
            
            <working-modal-demo-example></working-modal-demo-example>
            
            <h3>Scrolling long content</h3>
            
            <modal-long-content-example></modal-long-content-example>
            
            <h3>Vertically centered</h3>
            
            <modal-centered-example></modal-centered-example>
            
            <h3>Using the grid</h3>
            
            <modal-grid-example></modal-grid-example>
            
            <h3>Varying modal content</h3>
            
            <modal-varying-content-example></modal-varying-content-example>
            
            <h3>Remove animation</h3>
            
            <modal-no-animation-example></modal-no-animation-example>
            
            <h2>Optional sizes</h2>
            
            <modal-sizes-example></modal-sizes-example>
            
            <br />
            <br />
            <br />
        `;
    }
};

window.customElements.define('modal-view', ModalView);