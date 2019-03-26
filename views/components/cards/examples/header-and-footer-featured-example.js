
import { LitElement, html } from 'lit-element';
import { BsTextCss, BsTextColorCss } from 'lit-element-bootstrap/utilities';
import { BsButton } from 'lit-element-bootstrap/components/button';
import { BsCard, BsCardBody, BsCardHeader } from 'lit-element-bootstrap/components/card';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class HeaderAndFooterFeaturedExample extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsContentCodeCss,
            BsCodeSyntaxCss,
            BsTextColorCss,
            BsTextCss
        ];
    }
    
    redner() {
        return html`
            
            <bs-example>
                
                <bs-card class="text-center">
                    <bs-card-header slot="card-header">Featured</bs-card-header>
                    <bs-card-body>
                        <bs-card-title slot="card-title">
                            <h5>Special title treatment</h5>
                        </bs-card-title>
                        <bs-card-text slot="card-text">
                            <p>With supporting text below as a natural lead-in to additional content.</p>
                        </bs-card-text>
                        <bs-button primary>Go somewhere</bs-button>
                    </bs-card-body>
                    <bs-card-footer slot="card-footer">
                        <span class="text-muted">2 days ago</span>
                    </bs-card-footer>
                </bs-card>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html"><span class="nt">&lt;bs-card</span> <span class="na">class=</span><span class="s">"text-center"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-card-header</span> <span class="na">slot=</span><span class="s">"card-header"</span><span class="nt">&gt;</span>Featured<span class="nt">&lt;/bs-card-header&gt;</span>
    <span class="nt">&lt;bs-card-body&gt;</span>
        <span class="nt">&lt;bs-card-title</span> <span class="na">slot=</span><span class="s">"card-title"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;h5&gt;</span>Special title treatment<span class="nt">&lt;/h5&gt;</span>
        <span class="nt">&lt;/bs-card-title&gt;</span>
        <span class="nt">&lt;bs-card-text</span> <span class="na">slot=</span><span class="s">"card-title"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;p&gt;</span>With supporting text below as a natural lead-in to additional content.<span class="nt">&lt;/p&gt;</span>
        <span class="nt">&lt;/bs-card-text&gt;</span>
        <span class="nt">&lt;bs-button</span> <span class="na">primary</span><span class="nt">&gt;</span>Go somewhere<span class="nt">&gt;</span><span class="nt">&lt;/bs-button&gt;</span>
    <span class="nt">&lt;bs-card-body&gt;</span>
    <span class="nt">&lt;bs-card-footer</span> <span class="na">slot=</span><span class="s">"card-footer"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"text-muted"</span><span class="nt">&gt;</span>2 days ago<span class="nt">&lt;/span&gt;</span>
    <span class="nt">&lt;/bs-card-footer&gt;</span>
<span class="nt">&lt;/bs-card&gt;</span></code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('header-and-footer-featured-example', HeaderAndFooterFeaturedExample);