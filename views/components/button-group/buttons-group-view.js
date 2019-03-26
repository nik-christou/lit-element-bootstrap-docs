
import { LitElement, html } from 'lit-element';
import { BsDocsContentCss } from '../../../component/content/bs-docs-content-css';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

import '../../../component/callout/bs-callout';
import './examples/basic-button-group-example';
import './examples/button-toolbar-example';
import './examples/button-toolbar-input-groups-example';
import './examples/sizing-button-group-example';
import './examples/nesting-button-group-example';
import './examples/vertical-button-group-example';
import './examples/vertical-dropdown-group-example';

class ButtonGroupView extends LitElement {
    
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

            <h1 class="bd-title" id="content">Button group</h1>
            
            <basic-button-group-example></basic-button-group-example>
            
            <h2>Button toolbar</h2>
            
            <button-toolbar-example></button-toolbar-example>
            
            <button-toolbar-input-groups-example></button-toolbar-input-groups-example>
                
            <h2>Sizing</h2>
            
            <sizing-button-group-example></sizing-button-group-example>
        
            <h2>Nesting</h2>
        
            <nesting-button-group-example></nesting-button-group-example>
            
            <h2>Vertical Variation</h2>

            <vertical-button-group-example></vertical-button-group-example>
            
            <vertical-dropdown-group-example></vertical-dropdown-group-example>

            <br />
            <br />
            <br />
        `;
    }
};

window.customElements.define('button-group-view', ButtonGroupView);