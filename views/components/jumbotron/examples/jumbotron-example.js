
import { LitElement, html } from 'lit-element';
import { BsSpacingCss } from 'lit-element-bootstrap/utilities';
import { BsJumbotron } from 'lit-element-bootstrap/components/jumbotron';
import { BsLinkButton } from 'lit-element-bootstrap/components/button';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class JumbotronExample extends LitElement {
    
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
                
                <bs-jumbotron>
                    <h1 class="display-4">Hello, world!</h1>
                    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr class="my-4">
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <bs-link-button primary>Learn more</bs-link-button>
                </bs-jumbotron>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-jumbotron&gt;</span> 
    <span class="nt">&lt;h1</span> <span class="na">class=</span><span class="s">"display-4"</span><span class="nt">&gt;</span>Hello, world!<span class="nt">&lt;/h1&gt;</span>
    <span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"lead"</span><span class="nt">&gt;</span>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.<span class="nt">&lt;/p&gt;</span>
    <span class="nt">&lt;hr</span> <span class="na">class=</span><span class="s">"my-4"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;p&gt;</span>It uses utility classes for typography and spacing to space content out within the larger container.<span class="nt">&lt;/p&gt;</span>
    <span class="nt">&lt;bs-link-button</span> <span class="na">primary</span><span class="nt">&gt;</span>Learn more<span class="nt">&lt;/bs-link-button&gt;</span>
<span class="nt">&lt;/bs-jumbotron&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('jumbotron-example', JumbotronExample);