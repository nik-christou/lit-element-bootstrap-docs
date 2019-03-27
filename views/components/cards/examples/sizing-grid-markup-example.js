
import { LitElement, html, css } from 'lit-element';
import { BsButton } from 'lit-element-bootstrap/components/button';
import { BsRow, BsColumn } from 'lit-element-bootstrap/layout/grid';
import { BsCard, BsCardBody, BsCardTitle, BsCardText } from 'lit-element-bootstrap/components/card';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class SizingGridMarkupExample extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsContentCodeCss,
            BsCodeSyntaxCss
        ];
    }
    
    render() {
        return html`
            
            <bs-example>
                
                <bs-row>
                    <bs-column sm-6>
                        <bs-card>
                            <bs-card-body>
                                <bs-card-title slot="card-title">
                                    <h5>Special title treatment</h5>
                                </bs-card-title>
                                <bs-card-text slot="card-text">
                                    <p>With supporting text below as a natural lead-in to additional content.</p>
                                </bs-card-text>
                                <bs-button primary>Go somewhere</bs-button>
                            </bs-card-body>
                        </bs-card>
                    </bs-column>

                    <bs-column sm-6>
                        <bs-card>
                            <bs-card-body>
                                <bs-card-title slot="card-title">
                                    <h5>Special title treatment</h5>
                                </bs-card-title>
                                <bs-card-text slot="card-text">
                                    <p>With supporting text below as a natural lead-in to additional content.</p>
                                </bs-card-text>
                                <bs-button primary>Go somewhere</bs-button>
                            </bs-card-body>
                        </bs-card>
                    </bs-column>
                </bs-row>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html"><span class="nt">&lt;bs-row&gt;</span>
    <span class="nt">&lt;bs-column</span> <span class="na">sm-6</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-card&gt;</span> 
            <span class="nt">&lt;bs-card-body&gt;</span> 
                <span class="nt">&lt;bs-card-title</span> <span class="na">slot=</span><span class="s">"card-title"</span><span class="nt">&gt;</span>
                    <span class="nt">&lt;h5&gt;</span>Special title treatment<span class="nt">&lt;/h5&gt;</span>
                <span class="nt">&lt;/bs-card-title&gt;</span>
                <span class="nt">&lt;bs-card-text</span> <span class="na">slot=</span><span class="s">"card-text"</span><span class="nt">&gt;</span>
                    <span class="nt">&lt;p&gt;</span>With supporting text below as a natural lead-in to additional content.<span class="nt">&lt;/p&gt;</span>
                <span class="nt">&lt;/bs-card-text&gt;</span>   
                <span class="nt">&lt;bs-button</span> <span class="na">primary</span><span class="nt">&gt;</span>Go somewhere<span class="nt">&lt;/bs-button&gt;</span>
            <span class="nt">&lt;/bs-card-body&gt;</span>
        <span class="nt">&lt;/bs-card&gt;</span>
    <span class="nt">&lt;/bs-column&gt;</span>
    <span class="nt">&lt;bs-column</span> <span class="na">sm-6</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-card&gt;</span> 
            <span class="nt">&lt;bs-card-body&gt;</span> 
                <span class="nt">&lt;bs-card-title</span> <span class="na">slot=</span><span class="s">"card-title"</span><span class="nt">&gt;</span>
                    <span class="nt">&lt;h5&gt;</span>Special title treatment<span class="nt">&lt;/h5&gt;</span>
                <span class="nt">&lt;/bs-card-title&gt;</span>
                <span class="nt">&lt;bs-card-text</span> <span class="na">slot=</span><span class="s">"card-text"</span><span class="nt">&gt;</span>
                    <span class="nt">&lt;p&gt;</span>With supporting text below as a natural lead-in to additional content.<span class="nt">&lt;/p&gt;</span>
                <span class="nt">&lt;/bs-card-text&gt;</span>   
                <span class="nt">&lt;bs-button</span> <span class="na">primary</span><span class="nt">&gt;</span>Go somewhere<span class="nt">&lt;/bs-button&gt;</span>
            <span class="nt">&lt;/bs-card-body&gt;</span>
        <span class="nt">&lt;/bs-card&gt;</span>
    <span class="nt">&lt;/bs-column&gt;</span>
<span class="nt">&lt;/bs-row&gt;</span></code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('sizing-grid-markup-example', SizingGridMarkupExample);