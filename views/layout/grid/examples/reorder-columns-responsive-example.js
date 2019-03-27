
import { LitElement, html, css } from 'lit-element';
import { BsRow, BsColumn, BsContainer } from 'lit-element-bootstrap/layout/grid';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class ReorderColumnsResponsiveExample extends LitElement {
    
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
                
                <bs-container>
                    <bs-row>
                        <bs-column xs order-xs-last demo>First, but last</bs-column>
                        <bs-column xs demo>Second, but unordered</bs-column>
                        <bs-column xs order-xs-first demo>Third, but first</bs-column>
                    </bs-row>
                </bs-container>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-container&gt;</span>
    <span class="nt">&lt;bs-row&gt;</span>
        <span class="nt">&lt;bs-column</span> <span class="na">xs order-xs-last</span><span class="nt">&gt;</span>First, but last<span class="nt">&lt;/bs-column&gt;</span>
        <span class="nt">&lt;bs-column</span> <span class="na">xs</span><span class="nt">&gt;</span>Second, but unordered<span class="nt">&lt;/bs-column&gt;</span>
        <span class="nt">&lt;bs-column</span> <span class="na">xs order-xs-first</span><span class="nt">&gt;</span>Third, but first<span class="nt">&lt;/bs-column&gt;</span>
    <span class="nt">&lt;/bs-row&gt;</span>
<span class="nt">&lt;/bs-container&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('reorder-columns-responsive-example', ReorderColumnsResponsiveExample);