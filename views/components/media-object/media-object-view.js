
import { LitElement, html } from 'lit-element';
import { BsDocsContentCss } from '../../../component/content/bs-docs-content-css';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

import '../../../component/callout/bs-callout';
import './examples/single-media-example';
import './examples/nested-media-example';
import './examples/top-alignment-media-example';
import './examples/center-alignment-media-example';
import './examples/bottom-alignment-media-example';
import './examples/order-placement-media-example';
import './examples/media-list-example';

class MediaObjectView extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsDocsContentCss
        ];
    }
    
    render() {
        return html`

            <h1 class="bd-title" id="content">Media object</h1>
        
            <single-media-example></single-media-example>
            
            <h2>Nesting</h2>
           
            <nested-media-example></nested-media-example>
            
            <h2>Alignment</h2>
          
            <top-alignment-media-example></top-alignment-media-example>
        
            <center-alignment-media-example></center-alignment-media-example>
            
            <bottom-alignment-media-example></bottom-alignment-media-example>
            
            <h2>Order</h2>
            
            <order-placement-media-example></order-placement-media-example>
            
            <h2>Media list</h2>
            
            <media-list-example></media-list-example>
            
            <br />
            <br />
            <br />
        `;
    }
};

window.customElements.define('media-object-view', MediaObjectView);