
import { LitElement, html, css } from 'lit-element';
import { BsTextColorCss, BsSpacingCss } from 'lit-element-bootstrap/utilities';
import { BsCard, BsCardBody, BsCardLink, BsCardLinks, BsCardText, BsCardSubtitle } from 'lit-element-bootstrap/components/card';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class TitleTextLinksExample extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsContentCodeCss,
            BsCodeSyntaxCss,
            BsSpacingCss,
            BsTextColorCss,
            css`
                bs-card {
                    width: 18rem;
                }
            `
        ]; 
    }
    
    render() {
        return html`
            
            <bs-example>
                
                <bs-card>
                    <bs-card-body>
                        <bs-card-title slot="card-title">
                            <h5>Card title</h5>
                        </bs-card-title>
                        <bs-card-subtitle slot="card-subtitle">
                            <h6 class="mb-2 text-muted">Card subtitle</h6>
                        </bs-card-subtitle>
                        <bs-card-text slot="card-text">
                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </bs-card-text>
                        <bs-card-links slot="card-links">
                            <bs-card-link label="Card link"></bs-card-link>
                            <bs-card-link label="Another link"></bs-card-link>
                        </bs-card-links>
                    </bs-card-body>
                </bs-card>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html"><span class="nt">&lt;bs-card&gt;</span> 
    <span class="nt">&lt;bs-card-body&gt;</span>
        <span class="nt">&lt;bs-card-title</span> <span class="na">slot=</span><span class="s">"card-title"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;h5&gt;</span>Card title<span class="nt">&lt;/h5&gt;</span>
        <span class="nt">&lt;/bs-card-title&gt;</span>
        <span class="nt">&lt;bs-card-subtitle</span> <span class="na">slot=</span><span class="s">"card-subtitle"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;h6</span> <span class="na">class=</span><span class="s">"mb-2 text-muted"</span><span class="nt">&gt;</span>Card subtitle<span class="nt">&lt;/h6&gt;</span>
        <span class="nt">&lt;/bs-card-subtitle&gt;</span>
        <span class="nt">&lt;bs-card-text</span> <span class="na">slot=</span><span class="s">"card-text"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;p&gt;</span>Some quick example text to build on the card title and make up the bulk of the card's content.<span class="nt">&lt;/p&gt;</span>
        <span class="nt">&lt;/bs-card-text&gt;</span>
        <span class="nt">&lt;bs-card-links</span> <span class="na">slot=</span><span class="s">"card-links"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;bs-card-link</span> <span class="na">label=</span><span class="s">"Card link"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-card-link&gt;</span>
            <span class="nt">&lt;bs-card-link</span> <span class="na">label=</span><span class="s">"Another link"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-card-link&gt;</span>
        <span class="nt">&lt;/bs-card-links&gt;</span>
    <span class="nt">&lt;/bs-card-body&gt;</span>
<span class="nt">&lt;/bs-card&gt;</span></code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('title-text-links-example', TitleTextLinksExample);