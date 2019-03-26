
import { LitElement, html } from 'lit-element';
import { BsButton } from 'lit-element-bootstrap/components/button';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class ButtonSizesExample extends LitElement {
    
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
                
                <bs-button primary large>Large button</bs-button>
                <bs-button secondary large>Large button</bs-button>
            
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html"><span class="nt">&lt;bs-button</span> <span class="na">primary</span> <span class="na">large</span><span class="nt">&gt;</span>Large button<span class="nt">&lt;/bs-button&gt;</span>
<span class="nt">&lt;bs-button</span> <span class="na">secondary</span> <span class="na">large</span><span class="nt">&gt;</span>Large button<span class="nt">&lt;/bs-button&gt;</span></code></pre></bs-highlight>
            
            <bs-example>
                
                <bs-button primary small>Small button</bs-button>
                <bs-button secondary small>Small button</bs-button>
                
            </bs-example>
            <bs-highlight><pre><code class="language-html" data-lang="html"><span class="nt">&lt;bs-button</span> <span class="na">primary</span> <span class="na">small</span><span class="nt">&gt;</span>Small button<span class="nt">&lt;/bs-button&gt;</span>
<span class="nt">&lt;bs-button</span> <span class="na">secondary</span> <span class="na">small</span><span class="nt">&gt;</span>Small button<span class="nt">&lt;/bs-button&gt;</span></code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('button-sizes-example', ButtonSizesExample);