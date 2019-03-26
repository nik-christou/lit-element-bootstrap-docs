
import { LitElement, html } from 'lit-element';
import { BsDocsContentCss } from '../../../component/content/bs-docs-content-css';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

import '../../../component/callout/bs-callout';
import './examples/badge-scales-example';
import './examples/button-badge-example';
import './examples/button-badge-context-example';
import './examples/badge-contextual-example';
import './examples/pill-badges-example';
import './examples/badge-links-example';

class BadgesView extends LitElement {
    
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
        
            <h1 class="bd-title" id="content">Badges</h1>
        
            <badge-scales-example></badge-scales-example>
            
            <button-badge-example></button-badge-example>
        
            <button-badge-context-example></button-badge-context-example>
            
            <badge-contextual-example></badge-contextual-example>
            
            <h2>Pill badges</h2>
            
            <pill-badges-example></pill-badges-example>
            
            <h2>Links</h2>
        
            <badge-links-example></badge-links-example>
            
            <br />
            <br />
            <br />
        `;
    }
};

window.customElements.define('badges-view', BadgesView);