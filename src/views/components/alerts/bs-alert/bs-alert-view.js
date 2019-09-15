
import { LitElement, html } from 'lit-element';
import { TableOfContentMixin } from '../../../../component/toc/table-of-content-mixin.js';
import { BsDocsContentCss } from '../../../../component/content/bs-docs-content-css.js';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

import 'lit-element-bootstrap/layout';
import 'lit-element-bootstrap/components/navs';

import '../../../../component/toc/table-of-content.js';
import '../../../../component/toc/table-of-content-item.js';
import '../../../../component/example/bs-highlight.js';

class BsAlertsView extends TableOfContentMixin(LitElement) {
    
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
          
        <bs-container>
            <bs-row>
                <bs-column md-9 order-md-first order-xs-last>

                    <h1 class="bd-title" id="content">bs-alert</h1>

                    <br />

                    <h3>Usage</h3>
                    
                    <br />
                    
                    <p>Import as part of all alert components:</p>
                    <bs-highlight><pre><code>import 'lit-element-bootstrap/components/alert';</code></pre></bs-highlight>

                    <p>Import individually:</p>
                    <bs-highlight><pre><code>import 'lit-element-bootstrap/components/alert/bs-alert';</code></pre></bs-highlight>
                
                    <br />
                    <br />
                    <br />

                </bs-column>
                <bs-column md-3 order-md-last order-xs-first>
                    <table-of-content>
                        <table-of-content-item element-id="usage" text="Usage"></table-of-content-item>
                        <table-of-content-item element-id="attributes" text="Attributes"></table-of-content-item>
                        <table-of-content-item element-id="properties" text="Properties"></table-of-content-item>
                        <table-of-content-item element-id="slots" text="Slots"></table-of-content-item>
                        <table-of-content-item element-id="css-properties" text="CSS Custom Properties"></table-of-content-item>
                        <table-of-content-item element-id="events" text="Events"></table-of-content-item>
                        <table-of-content-item element-id="examples" text="Examples"></table-of-content-item>
                    </table-of-content>
                </bs-column>
            </bs-row>
        </bs-container>
        `;
    }
};

window.customElements.define('bs-alerts-view', BsAlertsView);