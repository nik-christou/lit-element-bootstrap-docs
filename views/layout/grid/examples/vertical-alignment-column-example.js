
import { LitElement, html, css } from 'lit-element';
import { BsFlexAlignSelfCss } from 'lit-element-bootstrap/utilities/flex';
import { BsRow, BsColumn, BsContainer } from 'lit-element-bootstrap/layout/grid';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class VerticalAlignmentColumnExample extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsContentCodeCss,
            BsCodeSyntaxCss,
            BsFlexAlignSelfCss,
            css`
                bs-col[demo] {
                    padding-top: 0.75rem;
                    padding-bottom: 0.75rem;
                    background-color: rgba(86,61,124,0.15);
                    border: 1px solid rgba(86,61,124,0.2);
                }
                
                bs-row {
                    min-height: 10rem;
                    background-color: rgba(255,0,0,0.1);
                }
            `
        ];
    }
    
    render() {
        return html`
            
            <bs-example>
        
                <bs-container>
                    <bs-row>
                        <bs-column xs demo class="align-self-start">One of three columns</bs-column>
                        <bs-column xs demo class="align-self-center">One of three columns</bs-column>
                        <bs-column xs demo class="align-self-end">One of three columns</bs-column>
                    </bs-row>
                </bs-container>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-container&gt;</span>
    <span class="nt">&lt;bs-row&gt;</span>
        <span class="nt">&lt;bs-col</span> <span class="na">xs</span> <span class="na">class=</span><span class="s">"align-items-start"</span><span class="nt">&gt;</span>One of three columns<span class="nt">&lt;/bs-column&gt;</span>
        <span class="nt">&lt;bs-col</span> <span class="na">xs</span> <span class="na">class=</span><span class="s">"align-items-center"</span><span class="nt">&gt;</span>One of three columns<span class="nt">&lt;/bs-column&gt;</span>
        <span class="nt">&lt;bs-col</span> <span class="na">xs</span> <span class="na">class=</span><span class="s">"align-items-end"</span><span class="nt">&gt;</span>One of three columns<span class="nt">&lt;/bs-column&gt;</span>
    <span class="nt">&lt;/bs-row&gt;</span>
<span class="nt">&lt;/bs-container&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('vertical-alignment-column-example', VerticalAlignmentColumnExample);