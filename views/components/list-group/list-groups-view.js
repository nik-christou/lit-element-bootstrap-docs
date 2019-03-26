
import { LitElement, html } from 'lit-element';
import { BsDocsContentCss } from '../../../component/content/bs-docs-content-css';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

import '../../../component/callout/bs-callout';
import './examples/basic-list-group-example';
import './examples/active-list-group-items-example';
import './examples/disabled-list-group-items-example';
import './examples/links-list-group-example';
import './examples/buttons-list-group-example';
import './examples/flush-list-group-example';
import './examples/contextual-list-group-example';
import './examples/contextual-links-list-group-example';
import './examples/badges-list-group-example';
import './examples/custom-content-list-group-example';

class ListGroupsView extends LitElement {
   
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsDocsContentCss
        ];
    }
    
    render() {
        return html`
        
            <h1 class="bd-title" id="content">List group</h1>
            
            <basic-list-group-example></basic-list-group-example>
            
            <h2>Active items</h2>
            
            <active-list-group-items-example></active-list-group-items-example>
            
            <h2>Disabled items</h2>
            
            <disabled-list-group-items-example></disabled-list-group-items-example>
          
            <h2>Links and buttons</h2>
            
            <links-list-group-example></links-list-group-example>
            
            <buttons-list-group-example></buttons-list-group-example>
        
            <h2>Flush</h2>
            
            <flush-list-group-example></flush-list-group-example>
           
            <h2>Contextual classes</h2>
            
            <contextual-list-group-example></contextual-list-group-example>
        
            <contextual-links-list-group-example></contextual-links-list-group-example>
            
            <h2>With badges</h2>
            
            <badges-list-group-example></badges-list-group-example>
            
            <h2>Custom content</h2>
            
            <custom-content-list-group-example></custom-content-list-group-example>
        
            <br />
            <br />
            <br />
        `;
    }
};

window.customElements.define('list-groups-view', ListGroupsView);