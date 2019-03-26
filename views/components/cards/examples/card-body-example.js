
import { LitElement, html } from 'lit-element';
import { BsCard, BsCardBody } from 'lit-element-bootstrap/components/card';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class CardBodyExample extends LitElement {
    
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
                
                <bs-card>
                    <bs-card-body>
                        <div>This is some text within a card body</div>
                    </bs-card-body>
                </bs-card>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-card&gt;</span> 
    <span class="nt">&lt;bs-card-body&gt;</span>
        <span class="nt">&lt;div&gt;</span>This is some text within a card body<span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;/bs-card-body&gt;</span>
<span class="nt">&lt;/bs-card&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('card-body-example', CardBodyExample);