
import { LitElement, html } from 'lit-element';
import { BsDocsContentCss } from '../../../component/content/bs-docs-content-css';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

import '../../../component/callout/bs-callout';
import './examples/button-styles-example';
import './examples/button-tags-example';
import './examples/button-outlines-example';
import './examples/button-sizes-example';
import './examples/button-blocks-example';
import './examples/button-active-state-example';
import './examples/button-disabled-state-example';
import './examples/button-link-disabled-state-example';
import './examples/button-toggle-example';

class ButtonsView extends LitElement {

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
        
            <h1 class="bd-title" id="content">Buttons</h1>
            
            <button-style-example></button-style-example>
            
            <h2>Button tags</h2>
            
            <button-tags-example></button-tags-example>
            
            <h2>Outline buttons</h2>
        
            <button-outlines-example></button-outlines-example>
            
            <h2>Sizes</h2>
        
            <button-sizes-example></button-sizes-example>
            
            <button-blocks-example></button-blocks-example>
            
            <h2>Active state</h2>
        
            <button-active-state-example></button-active-state-example>
            
            <h2>Disabled state</h2>
        
            <button-disabled-state-example></button-disabled-state-example>
            
            <button-link-disabled-state-example></button-link-disabled-state-example>
            
            <h2>Toggle states</h2>
        
            <button-toggle-example></button-toggle-example>
            
            <br />
            <br />
            <br />
        `;
    }
};

window.customElements.define('buttons-view', ButtonsView);