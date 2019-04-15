
import { LitElement, html } from 'lit-element';
import { BsDocsContentCss } from '../../../component/content/bs-docs-content-css';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

import './examples/container-example';
import './examples/container-fluid-example';

class ContainerView extends LitElement {
    
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
            
            <h1 class="bd-title" id="content">Container</h1>
        
            <container-example></container-example>
            
            <container-fluid-example></container-fluid-example>
            
            <br />
            <br />
            <br />
        `;
    }
};

window.customElements.define('container-view', ContainerView);