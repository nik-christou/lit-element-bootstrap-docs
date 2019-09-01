
import { LitElement, html, css } from 'lit-element';
import { BsDocsContentCss } from '../../../component/content/bs-docs-content-css';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

import '../../../component/callout/bs-callout';
import './examples/single-btn-dropdown-example';
import './examples/single-link-dropdown-example';
import './examples/button-variant-dropdown-example';
import './examples/split-button-dropdown-example';
import './examples/sizing-dropdown-example';
import './examples/dropup-example';
import './examples/dropright-example';
import './examples/dropleft-example';
import './examples/menu-items-example';
import './examples/dropdown-text-item-example';
import './examples/dropdown-active-item-example';
import './examples/dropdown-disabled-item-example';
import './examples/right-aligned-menu-example';
import './examples/dropdown-header-example';
import './examples/dividers-example';
import './examples/dropdown-menu-text-example';
import './examples/form-in-dropdown-menu-example';
import './examples/offset-menu-example';

class DropdownsView extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsDocsContentCss,
            BsContentCodeCss,
            css`
                :host {
                    display: block;
                }
            `
        ];
    }
    
    render() {
        return html`
        
            <h1 class="bd-title" id="content">Dropdowns</h1>
            
            <h3>Single Button</h3>
            
            <single-btn-dropdown-example></single-btn-dropdown-example>
            
            <single-link-dropdown-example></single-link-dropdown-example>
            
            <button-variant-dropdown-example></button-variant-dropdown-example>
        
            <h3>Split Button</h3>
        
            <split-button-dropdown-example></split-button-dropdown-example>
            
            <h2>Sizing</h2>
            
            <sizing-dropdown-example></sizing-dropdown-example>
           
            <h2>Directions</h2>
        
            <h3>Dropup</h3>
            
            <dropup-example></dropup-example>
            
            <h3>Dropright</h3>
            
            <dropright-example></dropright-example>
            
            <h3>Dropleft</h3>
            
            <dropleft-example></dropleft-example>
            
            <h2>Menu items</h2>
            
            <menu-items-example></menu-items-example>
            
            <dropdown-text-item-example></dropdown-text-item-example>
            
            <h3>Active</h3>
            
            <dropdown-active-item-example></dropdown-active-item-example>
        
            <h3>Disabled</h3>
            
            <dropdown-disabled-item-example></dropdown-disabled-item-example>
        
            <h2>Menu alignment</h2>
            
            <right-aligned-menu-example></right-aligned-menu-example>
            
            <h3>Headers</h3>
            
            <dropdown-header-example></dropdown-header-example>
            
            <h3>Dividers</h3>
            
            <dividers-example></dividers-example>
        
            <h3>Text</h3>
            
            <dropdown-menu-text-example></dropdown-menu-text-example>
            
            <h3>Forms</h3>
            
            <form-in-dropdown-menu-example></form-in-dropdown-menu-example>
        
            <h2>Dropdown options</h2>
            
            <offset-menu-example></offset-menu-example>
        
            <br />
            <br />
            <br />
        `;
    }
};

window.customElements.define('dropdowns-view', DropdownsView);