
import { LitElement, html, css } from 'lit-element';
import { BsFlexJustifyCss } from 'lit-element-bootstrap/utilities/flex';
import { BsRow, BsColumn, BsContainer } from 'lit-element-bootstrap/layout/grid';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class HorizontalAlignmentExample extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsContentCodeCss,
            BsCodeSyntaxCss,
            BsFlexJustifyCss,
            css`
                bs-column[demo] {
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
                    <bs-row class="justify-content-start">
                        <bs-column xs-4 demo>One of two columns</bs-column>
                        <bs-column xs-4 demo>One of two columns</bs-column>
                    </bs-row>
                    <bs-row class="justify-content-center">
                        <bs-column xs-4 demo>One of two columns</bs-column>
                        <bs-column xs-4 demo>One of two columns</bs-column>
                    </bs-row>
                    <bs-row class="justify-content-end">
                        <bs-column xs-4 demo>One of two columns</bs-column>
                        <bs-column xs-4 demo>One of two columns</bs-column>
                    </bs-row>
                    <bs-row class="justify-content-around">
                        <bs-column xs-4 demo>One of two columns</bs-column>
                        <bs-column xs-4 demo>One of two columns</bs-column>
                    </bs-row>
                    <bs-row class="justify-content-between">
                        <bs-column xs-4 demo>One of two columns</bs-column>
                        <bs-column xs-4 demo>One of two columns</bs-column>
                    </bs-row>
                </bs-container>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-container&gt;</span>
    <span class="nt">&lt;bs-row</span> <span class="na">class=</span><span class="s">"justify-content-start"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-column</span> <span class="na">xs-4</span><span class="nt">&gt;</span>One of two columns<span class="nt">&lt;/bs-column&gt;</span>
        <span class="nt">&lt;bs-column</span> <span class="na">xs-4</span><span class="nt">&gt;</span>One of two columns<span class="nt">&lt;/bs-column&gt;</span>
    <span class="nt">&lt;/bs-row&gt;</span>
    <span class="nt">&lt;bs-row</span> <span class="na">class=</span><span class="s">"justify-content-center"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-column</span> <span class="na">xs-4</span><span class="nt">&gt;</span>One of two columns<span class="nt">&lt;/bs-column&gt;</span>
        <span class="nt">&lt;bs-column</span> <span class="na">xs-4</span><span class="nt">&gt;</span>One of two columns<span class="nt">&lt;/bs-column&gt;</span>
    <span class="nt">&lt;/bs-row&gt;</span>
    <span class="nt">&lt;bs-row</span> <span class="na">class=</span><span class="s">"justify-content-end"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-column</span> <span class="na">xs-4</span><span class="nt">&gt;</span>One of two columns<span class="nt">&lt;/bs-column&gt;</span>
        <span class="nt">&lt;bs-column</span> <span class="na">xs-4</span><span class="nt">&gt;</span>One of two columns<span class="nt">&lt;/bs-column&gt;</span>
    <span class="nt">&lt;/bs-row&gt;</span>
    <span class="nt">&lt;bs-row</span> <span class="na">class=</span><span class="s">"justify-content-around"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-column</span> <span class="na">xs-4</span><span class="nt">&gt;</span>One of two columns<span class="nt">&lt;/bs-column&gt;</span>
        <span class="nt">&lt;bs-column</span> <span class="na">xs-4</span><span class="nt">&gt;</span>One of two columns<span class="nt">&lt;/bs-column&gt;</span>
    <span class="nt">&lt;/bs-row&gt;</span>
    <span class="nt">&lt;bs-row</span> <span class="na">class=</span><span class="s">"justify-content-between"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-column</span> <span class="na">xs-4</span><span class="nt">&gt;</span>One of two columns<span class="nt">&lt;/bs-column&gt;</span>
        <span class="nt">&lt;bs-column</span> <span class="na">xs-4</span><span class="nt">&gt;</span>One of two columns<span class="nt">&lt;/bs-column&gt;</span>
    <span class="nt">&lt;/bs-row&gt;</span>
<span class="nt">&lt;/bs-container&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('horizontal-alignment-example', HorizontalAlignmentExample);