
import { LitElement, html } from 'lit-element';
import { BsDocsContentCss } from '../../../component/content/bs-docs-content-css';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

import './examples/jumbotron-example';
import './examples/jumbotron-fluid-example';

class JumbotronView extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsDocsContentCss
        ];
    }
    
    render() {
        return html`

            <h1 class="bd-title" id="content">Jumbotron</h1>
        
            <jumbotron-example></jumbotron-example>
            
            <jumbotron-fluid-example></jumbotron-fluid-example>
            
            <br />
            <br />
            <br />
        `;
    }
};

window.customElements.define('jumbotron-view', JumbotronView);