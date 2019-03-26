
import { LitElement, html, css } from 'lit-element';
import { BsRow, BsColumn, BsContainer } from 'lit-element-bootstrap/layout/grid';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class OffsetColumnsResetExample extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsContentCodeCss,
            BsCodeSyntaxCss,
            css`
                bs-col[demo] {
                    padding-top: 0.75rem;
                    padding-bottom: 0.75rem;
                    background-color: rgba(86,61,124,0.15);
                    border: 1px solid rgba(86,61,124,0.2);
                }
                
                bs-row + bs-row {
                    margin-top: 1rem;
                }
            `
        ];
    }
    
    render() {
        return html`
            
            <bs-example>
                
                <bs-container>
                    <bs-row>
                        <bs-column sm-5 md-6 demo>sm-5 md-6</bs-column>
                        <bs-column sm-5 offset-sm-2 md-6 offset-md-0 demo>sm-5 offset-sm-2</bs-column>
                    </bs-row>
                    <bs-row>
                        <bs-column sm-6 md-5 lg-6 demo>sm-6 md-5 lg-6</bs-column>
                        <bs-column sm-6 md-5 offset-md-2 lg-6 offset-lg-0 demo>sm-6 md-5 offset-md-2 lg-6 lg-0</bs-column>
                    </bs-row>
                </bs-container>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-container&gt;</span>
    <span class="nt">&lt;bs-row&gt;</span>
        <span class="nt">&lt;bs-col</span> <span class="na">sm-5 md-6</span><span class="nt">&gt;</span>sm-5 md-6<span class="nt">&lt;/bs-column&gt;</span>
        <span class="nt">&lt;bs-col</span> <span class="na">sm-5 offset-sm-2 md-6 offset-md-0</span><span class="nt">&gt;</span>sm-5 offset-sm-2 md-6 offset-md-0<span class="nt">&lt;/bs-column&gt;</span>
    <span class="nt">&lt;/bs-row&gt;</span>
    <span class="nt">&lt;bs-row&gt;</span>
        <span class="nt">&lt;bs-col</span> <span class="na">sm-6 md-5 lg-6</span><span class="nt">&gt;</span>sm-6 md-5 lg-6<span class="nt">&lt;/bs-column&gt;</span>
        <span class="nt">&lt;bs-col</span> <span class="na">sm-6 md-5 offset-md-2 lg-6 offset-lg-0</span><span class="nt">&gt;</span>sm-6 md-5 offset-md-2 lg-6 offset-lg-0<span class="nt">&lt;/bs-column&gt;</span>
    <span class="nt">&lt;/bs-row&gt;</span>
<span class="nt">&lt;/bs-container&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('offset-columns-reset-example', OffsetColumnsResetExample);