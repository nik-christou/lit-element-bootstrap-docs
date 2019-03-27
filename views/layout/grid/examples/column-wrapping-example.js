
import { LitElement, html, css } from 'lit-element';
import { BsRow, BsColumn } from 'lit-element-bootstrap/layout/grid';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class ColumnWrappingExample extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsContentCodeCss,
            BsCodeSyntaxCss,
            css`
                bs-column[demo] {
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
                    <bs-column xs-9 demo>xs-9</bs-column>
                    <bs-column xs-4 demo>xs-4<br/>Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.</bs-column>
                    <bs-column xs-6 demo>xs-6<br/>Subsequent columns continue along the new line.</bs-column>
                </bs-row>
        
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-row&gt;</span>
    <span class="nt">&lt;bs-column</span> <span class="na">xs-9</span><span class="nt">&gt;</span>xs-9<span class="nt">&lt;/bs-column&gt;</span>
    <span class="nt">&lt;bs-column</span> <span class="na">xs-4</span><span class="nt">&gt;</span>xs-4<span class="nt">&lt;br/&gt;</span>Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.<span class="nt">&lt;/bs-column&gt;</span>
    <span class="nt">&lt;bs-column</span> <span class="na">xs-6</span><span class="nt">&gt;</span>xs-6<span class="nt">&lt;br/&gt;</span>Subsequent columns continue along the new line.<span class="nt">&lt;/bs-column&gt;</span> 
<span class="nt">&lt;/bs-row&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('column-wrapping-example', ColumnWrappingExample);