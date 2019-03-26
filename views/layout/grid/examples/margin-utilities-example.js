
import { LitElement, html, css } from 'lit-element';
import { BsSpacingCss } from 'lit-element-bootstrap/utilities';
import { BsRow, BsColumn, BsContainer } from 'lit-element-bootstrap/layout/grid';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class MarginUtilitiesExample extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsContentCodeCss,
            BsCodeSyntaxCss,
            BsSpacingCss,
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
                        <bs-column md-4 demo>md-4</bs-column>
                        <bs-column md-4 demo class="ml-auto">md-4 .ml-auto</bs-column>
                    </bs-row>
                    <bs-row>
                        <bs-column md-3 demo class="ml-md-auto">md-3 .ml-md-auto</bs-column>
                        <bs-column md-3 demo class="ml-md-auto">md-3 .ml-md-auto</bs-column>
                    </bs-row>
                    <bs-row>
                        <bs-column xs-auto demo class="mr-auto">xs-auto .mr-auto</bs-column>
                        <bs-column xs-auto demo>xs-auto</bs-column>
                    </bs-row>
                </bs-container>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-container&gt;</span>
    <span class="nt">&lt;bs-row&gt;</span>
        <span class="nt">&lt;bs-col</span> <span class="na">md-4</span><span class="nt">&gt;</span>md-4<span class="nt">&lt;/bs-column&gt;</span>
        <span class="nt">&lt;bs-col</span> <span class="na">md-4</span> <span class="na">class=</span><span class="s">"ml-auto"</span><span class="nt">&gt;</span>md-4 ml-auto<span class="nt">&lt;/bs-column&gt;</span>
    <span class="nt">&lt;/bs-row&gt;</span>
    <span class="nt">&lt;bs-row&gt;</span>
        <span class="nt">&lt;bs-col</span> <span class="na">md-3</span> <span class="na">class=</span><span class="s">"ml-md-auto"</span><span class="nt">&gt;</span>md-3 ml-md-auto<span class="nt">&lt;/bs-column&gt;</span>
        <span class="nt">&lt;bs-col</span> <span class="na">md-3</span> <span class="na">class=</span><span class="s">"ml-md-auto"</span><span class="nt">&gt;</span>md-3 ml-md-auto<span class="nt">&lt;/bs-column&gt;</span>
    <span class="nt">&lt;/bs-row&gt;</span>
    <span class="nt">&lt;bs-row&gt;</span>
        <span class="nt">&lt;bs-col</span> <span class="na">xs-auto</span> <span class="na">class=</span><span class="s">"mr-auto"</span><span class="nt">&gt;</span>xs-auto mr-auto<span class="nt">&lt;/bs-column&gt;</span>
        <span class="nt">&lt;bs-col</span> <span class="na">md-3</span><span class="nt">&gt;</span>xs-auto<span class="nt">&lt;/bs-column&gt;</span>
    <span class="nt">&lt;/bs-row&gt;</span>
<span class="nt">&lt;/bs-container&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('margin-utilities-example', MarginUtilitiesExample);