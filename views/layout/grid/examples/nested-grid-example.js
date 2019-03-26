
import { LitElement, html, css } from 'lit-element';
import { BsRow, BsColumn, BsContainer } from 'lit-element-bootstrap/layout/grid';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class NestedGridExample extends LitElement {
    
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
            `
        ];
    }
    
    render() {
        return html`
            
            <bs-example>
                
                <bs-container>
                    <bs-row>
                        <bs-column sm-9 demo>Level 1: sm-9
                            <bs-row>
                                <bs-column xs-8 sm-6 demo>Level 2: xs-8 sm-6</bs-column>
                                <bs-column xs-4 sm-6 demo>Level 2: xs-8 sm-6</bs-column>
                            </bs-row>
                        </bs-column>
                    </bs-row>
                </bs-container>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-container&gt;</span>
    <span class="nt">&lt;bs-row&gt;</span>
        <span class="nt">&lt;bs-col</span> <span class="na">sm-9</span><span class="nt">&gt;</span>
            Level 1: sm-9
            <span class="nt">&lt;bs-row&gt;</span>
                <span class="nt">&lt;bs-col</span> <span class="na">xs-8 sm-6</span><span class="nt">&gt;</span>Level 2: xs-8 sm-6<span class="nt">&lt;/bs-column&gt;</span>
                <span class="nt">&lt;bs-col</span> <span class="na">xs-8 sm-6</span><span class="nt">&gt;</span>Level 2: xs-8 sm-6<span class="nt">&lt;/bs-column&gt;</span>
            <span class="nt">&lt;/bs-row&gt;</span>
        <span class="nt">&lt;/bs-column&gt;</span>
    <span class="nt">&lt;/bs-row&gt;</span>
<span class="nt">&lt;/bs-container&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('nested-grid-example', NestedGridExample);