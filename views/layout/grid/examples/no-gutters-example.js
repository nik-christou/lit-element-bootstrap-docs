
import { LitElement, html, css } from 'lit-element';
import { BsRow, BsColumn } from 'lit-element-bootstrap/layout/grid';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class NoGuttersExample extends LitElement {
    
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
                
                <bs-row no-gutters>
                    <bs-column xs-12 sm-6 md-8 demo>xs-12 sm-6 md-8</bs-column>
                    <bs-column xs-6 md-4 demo>xs-6 md-4</bs-column>
                </bs-row>
        
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-row</span> <span class="na">no-gutters</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-column</span> <span class="na">xs-12 sm-6 md-8</span><span class="nt">&gt;</span>xs-12 sm-6 md-8<span class="nt">&lt;/bs-column&gt;</span>
    <span class="nt">&lt;bs-column</span> <span class="na">xs-6 md-4</span><span class="nt">&gt;</span>xs-6 md-4<span class="nt">&lt;/bs-column&gt;</span>
<span class="nt">&lt;/bs-row&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('no-gutters-example', NoGuttersExample);