
import { LitElement, html } from 'lit-element';
import { BsDocsContentCss } from '../../../component/content/bs-docs-content-css';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

import './examples/input-group-basic-example';
import './examples/input-group-sizing-example';
import './examples/input-group-checkbox-radio-example';
import './examples/input-group-multiple-inputs-example';
import './examples/input-group-multiple-addons-example';
import './examples/input-group-button-addons-example';
import './examples/input-group-multiple-buttons-example';
import './examples/input-group-dropdowns-example';
import './examples/input-group-segmented-buttons-example';

class InputGroupView extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsDocsContentCss
        ];
    }
    
    render() {
        return html`

            <h1 class="bd-title" id="content">Input group</h1>
            
            <input-group-basic-example></input-group-basic-example>
        
            <h2>Sizing</h2>
            
            <input-group-sizing-example></input-group-sizing-example>
            
            <h2>Checkboxes and radios</h2>
            
            <input-group-checkbox-radio-example></input-group-checkbox-radio-example>
            
            <h2>Multiple inputs</h2>
            
            <input-group-multiple-inputs-example></input-group-multiple-inputs-example>
            
            <h2>Multiple addons</h2>
            
            <input-group-multiple-addons-example></input-group-multiple-addons-example>
        
            <h2>Button addons</h2>
            
            <input-group-button-addons-example></input-group-button-addons-example>
            
            <input-group-multiple-buttons-example></input-group-multiple-buttons-example>
            
            <h2>Buttons with dropdowns</h2>
        
            <input-group-dropdowns-example></input-group-dropdowns-example>
            
            <h2>Segmented buttons</h2>
            
            <input-group-segmented-buttons-example></input-group-segmented-buttons-example>
            
            <h2>Custom forms</h2>
            
            <h2 style="color:red;">Finish this when custom forms + custom select is done</h2>
            
            <br />
            <br />
            <br />
        `;
    }
};

window.customElements.define('input-group-view', InputGroupView);