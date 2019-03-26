
import { LitElement, html } from 'lit-element';
import { BsDocsContentCss } from '../../../component/content/bs-docs-content-css';
import { BsContentRebootCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

import './examples/breadcrumbs-example.js';
import './examples/breadcrumbs-separator-example.js';

class BreadcrumbsView extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsDocsContentCss
        ];
    }
    
    render() {
        return html`
            
            <h1 class="bd-title" id="content">Breadcrumb</h1>
            
            <breadcrumbs-example></breadcrumbs-example>
            
            <h2>Changing the separator</h2>
            
            <breadcrumbs-separator-example></breadcrumbs-separator-example>
        `;
    }
};

window.customElements.define('breadcrumbs-view', BreadcrumbsView);