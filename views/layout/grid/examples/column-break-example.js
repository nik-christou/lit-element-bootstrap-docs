
import { LitElement, html, css } from 'lit-element';
import { BsSizingCss } from 'lit-element-bootstrap/utilities';
import { BsRow, BsColumn, BsContainer } from 'lit-element-bootstrap/layout/grid';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class ColumnBreakExample extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsContentCodeCss,
            BsCodeSyntaxCss,
            BsSizingCss,
            css`
                bs-col[demo] {
                    padding-top: 0.75rem;
                    padding-bottom: 0.75rem;
                    background-color: rgba(86,61,124,0.15);
                    border: 1px solid rgba(86,61,124,0.2);
                }
            `
        ];
    }
    
    render() {
        return html`
            
            <bs-example>
        
                <bs-row>
                    <bs-column xs-6 sm-3 demo>xs-6 sm-3</bs-column>
                    <bs-column xs-6 sm-3 demo>xs-6 sm-3</bs-column>
                    <!-- Force next columns to break to new line -->
                    <div class="w-100"></div>
                    <bs-column xs-6 sm-3 demo>xs-6 sm-3</bs-column>
                    <bs-column xs-6 sm-3 demo>xs-6 sm-3</bs-column>
                </bs-row>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-row&gt;</span>
    <span class="nt">&lt;bs-col</span> <span class="na">xs-6 sm-3</span><span class="nt">&gt;</span>xs-6 sm-3<span class="nt">&lt;/bs-column&gt;</span>
    <span class="nt">&lt;bs-col</span> <span class="na">xs-6 sm-3</span><span class="nt">&gt;</span>xs-6 sm-3<span class="nt">&lt;/bs-column&gt;</span>
        
    <span class="nt">&lt;!-- </span> Force next columns to break to new line <span class="nt"> --&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"w-100"</span><span class="nt">&gt;</span><span class="nt">&lt;/div&gt;</span>
    
    <span class="nt">&lt;bs-col</span> <span class="na">xs-6 sm-3</span><span class="nt">&gt;</span>xs-6 sm-3<span class="nt">&lt;/bs-column&gt;</span>
    <span class="nt">&lt;bs-col</span> <span class="na">xs-6 sm-3</span><span class="nt">&gt;</span>xs-6 sm-3<span class="nt">&lt;/bs-column&gt;</span>
<span class="nt">&lt;/bs-row&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('column-break-example', ColumnBreakExample);