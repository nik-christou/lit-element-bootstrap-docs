
import { LitElement, html, css } from 'lit-element';
import { BsFlexJustifyCss } from 'lit-element-bootstrap/utilities/flex';
import { BsRow, BsColumn, BsContainer } from 'lit-element-bootstrap/layout/grid';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class VariableWidthContentExample extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsContentCodeCss,
            BsCodeSyntaxCss,
            BsFlexJustifyCss,
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
                    <bs-row class="justify-content-md-center">
                        <bs-column lg-2 demo>1 of 3</bs-column>
                        <bs-column md-auto demo>Variable width content</bs-column>
                        <bs-column lg-2 demo>3 of 3</bs-column>
                    </bs-row>
                    <bs-row>
                        <bs-column xs demo>1 of 3</bs-column>
                        <bs-column md-auto demo>Variable width content</bs-column>
                        <bs-column lg-2 demo>3 of 3</bs-column>
                    </bs-row>
                </bs-container>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-container&gt;</span>
    <span class="nt">&lt;bs-row</span> <span class="na">class=</span><span class="s">"justify-content-md-center"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-col</span> <span class="na">lg-2</span><span class="nt">&gt;</span>1 of 3<span class="nt">&lt;/bs-column&gt;</span>
        <span class="nt">&lt;bs-col</span> <span class="na">md-auto</span><span class="nt">&gt;</span>Variable width content<span class="nt">&lt;/bs-column&gt;</span>
        <span class="nt">&lt;bs-col</span> <span class="na">lg-2</span><span class="nt">&gt;</span>3 of 3<span class="nt">&lt;/bs-column&gt;</span>
    <span class="nt">&lt;/bs-row&gt;</span>
    <span class="nt">&lt;bs-row&gt;</span>
        <span class="nt">&lt;bs-col</span> <span class="na">xs</span><span class="nt">&gt;</span>1 of 3<span class="nt">&lt;/bs-column&gt;</span>
        <span class="nt">&lt;bs-col</span> <span class="na">md-auto</span><span class="nt">&gt;</span>Variable width content<span class="nt">&lt;/bs-column&gt;</span>
        <span class="nt">&lt;bs-col</span> <span class="na">lg-2</span><span class="nt">&gt;</span>3 of 3<span class="nt">&lt;/bs-column&gt;</span>
    <span class="nt">&lt;/bs-row&gt;</span>
<span class="nt">&lt;/bs-container&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('variable-width-content-example', VariableWidthContentExample);