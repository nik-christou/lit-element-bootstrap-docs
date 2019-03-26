
import { LitElement, html } from 'lit-element';
import { BsDocsContentCss } from '../../../component/content/bs-docs-content-css.js';
import { BsContentRebootCss, BsContentTypographyCss, BsContentCodeCss } from  'lit-element-bootstrap/content';

import './examples/collapse-accordion-example.js';
import './examples/collapse-single-target-example.js';
import './examples/collapse-multi-target-example.js';

class CollapseView extends LitElement {
    
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
            
            <h1 class="bd-title" id="content">Collapse</h1>
            
            <collapse-single-target-example></collapse-single-target-example>
            
            <h2>Multiple targets</h2>
            
            <collapse-multi-target-example></collapse-multi-target-example>
            
            <h2>Accordion Example</h2>
        
            <collapse-accordion-example></collapse-accordion-example>
            
            <br />
            <br />
            <br />
        `;
    }
};

window.customElements.define('collapse-view', CollapseView);