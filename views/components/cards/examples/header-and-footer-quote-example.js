
import { LitElement, html } from 'lit-element';
import { BsSpacingCss } from 'lit-element-bootstrap/utilities';
import { BsButton } from 'lit-element-bootstrap/components/button';
import { BsCard, BsCardBody, BsCardHeader } from 'lit-element-bootstrap/components/card';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class HeaderAndFooterQuoteExample extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsContentCodeCss,
            BsCodeSyntaxCss,
            BsSpacingCss
        ];
    }
    
    render() {
        return html`
            
            <bs-example>
                
                <bs-card>
                    <bs-card-header slot="card-header">Quote</bs-card-header>
                    <bs-card-body>
                        <blockquote class="blockquote mb-0">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                            <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                        </blockquote>
                    </bs-card-body>
                </bs-card>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html"><span class="nt">&lt;bs-card&gt;</span> 
    <span class="nt">&lt;bs-card-header</span> <span class="na">slot=</span><span class="s">"card-header"</span><span class="nt">&gt;</span>Quote<span class="nt">&lt;/bs-card-header&gt;</span>
    <span class="nt">&lt;bs-card-body&gt;</span>
        <span class="nt">&lt;blockquote</span> <span class="na">class=</span><span class="s">"blockquote mb-0"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;p&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.<span class="nt">&lt;/p&gt;</span>
            <span class="nt">&lt;footer</span> <span class="na">class=</span><span class="s">"blockquote-footer"</span><span class="nt">&gt;</span>Someone famous in <span class="nt">&lt;cite</span> <span class="na">title=</span><span class="s">"Source Title"</span><span class="nt">&gt;</span>Source Title<span class="nt">&lt;/cite&gt;</span> <span class="nt">&lt;/footer&gt;</span>
        <span class="nt">&lt;/blockquote&gt;</span>
    <span class="nt">&lt;bs-card-body&gt;</span>    
<span class="nt">&lt;/bs-card&gt;</span></code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('header-and-footer-quote-example', HeaderAndFooterQuoteExample);