
import { LitElement, html } from 'lit-element';
import { BsButton, BsLinkButton, BsInputButton } from 'lit-element-bootstrap/components/button';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class ButtonTagsExample extends LitElement {
    
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
                
                <bs-link-button primary>Link</bs-link-button>
                <bs-button primary button-type="submit">Button</bs-button>
                <bs-input-button primary label="Input"></bs-input-button>
                <bs-input-button primary label="Submit" button-type="submit"></bs-input-button>
                <bs-input-button primary label="Reset" button-type="reset"></bs-input-button>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html"><span class="nt">&lt;bs-link-button</span> <span class="na">primary</span><span class="nt">&gt;</span>Link<span class="nt">&lt;/bs-link-button&gt;</span>
<span class="nt">&lt;bs-button</span> <span class="na">primary</span> <span class="na">button-type=</span><span class="s">"submit"</span><span class="nt">&gt;</span>Button<span class="nt">&lt;/bs-button&gt;</span>    
<span class="nt">&lt;bs-input-button</span> <span class="na">primary</span> <span class="na">label=</span><span class="s">"Input"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-input-button&gt;</span>
<span class="nt">&lt;bs-input-button</span> <span class="na">primary</span> <span class="na">label=</span><span class="s">"Submit"</span> <span class="na">button-type=</span><span class="s">"submit"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-input-button&gt;</span>
<span class="nt">&lt;bs-input-button</span> <span class="na">primary</span> <span class="na">label=</span><span class="s">"Reset"</span> <span class="na">button-type=</span><span class="s">"reset"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-input-button&gt;</span></code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('button-tags-example', ButtonTagsExample);