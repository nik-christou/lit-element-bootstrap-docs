
import { LitElement, html, css } from 'lit-element';
import { BsRow, BsColumn, BsContainer } from 'lit-element-bootstrap/layout/grid';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class MixAndMatchExample extends LitElement {
    
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
                        <bs-column xs-12 md-8 demo>xs-12 md-8</bs-column>
                        <bs-column xs-6 md-4 demo>xs-6 md-4</bs-column>
                    </bs-row>
                    <bs-row>
                        <bs-column xs-6 md-4 demo>xs-6 md-4</bs-column>
                        <bs-column xs-6 md-4 demo>xs-6 md-4</bs-column>
                        <bs-column xs-6 md-4 demo>xs-6 md-4</bs-column>
                    </bs-row>
                    <bs-row>
                        <bs-column xs-6 demo>xs-6</bs-column>
                        <bs-column xs-6 demo>xs-6</bs-column>
                    </bs-row>
                </bs-container>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-container&gt;</span>
    <span class="nt">&lt;bs-row&gt;</span>
        <span class="nt">&lt;bs-col</span> <span class="na">xs-12</span> <span class="na">md-8</span><span class="nt">&gt;</span>xs-12 md-8<span class="nt">&lt;/bs-column&gt;</span>
        <span class="nt">&lt;bs-col</span> <span class="na">xs-6</span> <span class="na">md-4</span><span class="nt">&gt;</span>xs-6 md-4<span class="nt">&lt;/bs-column&gt;</span>
    <span class="nt">&lt;/bs-row&gt;</span>
    <span class="nt">&lt;bs-row&gt;</span>
        <span class="nt">&lt;bs-col</span> <span class="na">xs-6</span> <span class="na">md-4</span><span class="nt">&gt;</span>xs-6 md-4<span class="nt">&lt;/bs-column&gt;</span>
        <span class="nt">&lt;bs-col</span> <span class="na">xs-6</span> <span class="na">md-4</span><span class="nt">&gt;</span>xs-6 md-4<span class="nt">&lt;/bs-column&gt;</span>
        <span class="nt">&lt;bs-col</span> <span class="na">xs-6</span> <span class="na">md-4</span><span class="nt">&gt;</span>xs-6 md-4<span class="nt">&lt;/bs-column&gt;</span>
    <span class="nt">&lt;/bs-row&gt;</span>
    <span class="nt">&lt;bs-row&gt;</span>
        <span class="nt">&lt;bs-col</span> <span class="na">xs-6</span><span class="nt">&gt;</span>xs-6<span class="nt">&lt;/bs-column&gt;</span>
        <span class="nt">&lt;bs-col</span> <span class="na">xs-6</span><span class="nt">&gt;</span>xs-6<span class="nt">&lt;/bs-column&gt;</span>
    <span class="nt">&lt;/bs-row&gt;</span>
<span class="nt">&lt;/bs-container&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('mix-and-match-example', MixAndMatchExample);