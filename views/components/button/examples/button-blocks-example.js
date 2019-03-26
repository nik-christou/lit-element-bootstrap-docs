
import { LitElement, html } from 'lit-element';
import { BsButton, BsInputButton } from 'lit-element-bootstrap/components/button';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class ButtonBlocksExample extends LitElement {
    
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
                
                <bs-button primary large block>Block level button</bs-button>
                <bs-button secondary large block>Block level button</bs-button>
        
                <br />
                
                <bs-input-button label="Input Block level button" primary large block></bs-input-button>
                <bs-input-button label="Input Block level button" secondary large block></bs-input-button>
            
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-button</span> <span class="na">primary</span> <span class="na">large</span> <span class="na">block</span><span class="nt">&gt;</span>Block level button<span class="nt">&lt;/bs-button&gt;</span>
<span class="nt">&lt;bs-button</span> <span class="na">secondary</span> <span class="na">large</span> <span class="na">block</span><span class="nt">&gt;</span>Block level button<span class="nt">&lt;/bs-button&gt;</span>

<span class="nt">&lt;bs-input-button</span> <span class="na">primary</span> <span class="na">large</span> <span class="na">block</span> <span class="na">label=</span><span class="s">"Input Block level button"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-input-button&gt;</span>
<span class="nt">&lt;bs-input-button</span> <span class="na">secondary</span> <span class="na">large</span> <span class="na">block</span> <span class="na">label=</span><span class="s">"Input Block level button"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-input-button&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('button-blocks-example', ButtonBlocksExample);