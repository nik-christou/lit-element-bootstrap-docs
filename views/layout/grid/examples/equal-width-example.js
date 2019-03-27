
import { LitElement, html, css } from 'lit-element';
import { BsRow, BsColumn, BsContainer } from 'lit-element-bootstrap/layout/grid';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content'

class EqualWidthExample extends LitElement {
    
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
                        <bs-column xs demo>1 of 2</bs-column>
                        <bs-column xs demo>2 of 2</bs-column>
                    </bs-row>
                    <bs-row>
                        <bs-column xs demo>1 of 3</bs-column>
                        <bs-column xs demo>2 of 3</bs-column>
                        <bs-column xs demo>3 of 3</bs-column>
                    </bs-row>
                </bs-container>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-container&gt;</span>
    <span class="nt">&lt;bs-row&gt;</span>
        <span class="nt">&lt;bs-column</span> <span class="na">xs</span><span class="nt">&gt;</span>1 of 2<span class="nt">&lt;/bs-column&gt;</span>
        <span class="nt">&lt;bs-column</span> <span class="na">xs</span><span class="nt">&gt;</span>2 of 2<span class="nt">&lt;/bs-column&gt;</span>
    <span class="nt">&lt;/bs-row&gt;</span>
    <span class="nt">&lt;bs-row&gt;</span>
        <span class="nt">&lt;bs-column</span> <span class="na">xs</span><span class="nt">&gt;</span>1 of 3<span class="nt">&lt;/bs-column&gt;</span>
        <span class="nt">&lt;bs-column</span> <span class="na">xs</span><span class="nt">&gt;</span>2 of 3<span class="nt">&lt;/bs-column&gt;</span>
        <span class="nt">&lt;bs-column</span> <span class="na">xs</span><span class="nt">&gt;</span>1 of 3<span class="nt">&lt;/bs-column&gt;</span>
    <span class="nt">&lt;/bs-row&gt;</span>
<span class="nt">&lt;/bs-container&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('equal-width-example', EqualWidthExample);