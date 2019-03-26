
import { LitElement, html } from 'lit-element';
import { BsFormInput } from 'lit-element-bootstrap/components/form';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class SizingFormControlExample extends LitElement {
    
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
                
                <bs-form-input lg placeholder="with lg attribute"></bs-form-input>
                <bs-form-input placeholder="Default input" style="margin-top: 0.5rem;"></bs-form-input>
                <bs-form-input sm placeholder="with sm attribute" style="margin-top: 0.5rem;"></bs-form-input>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-form-input</span> <span class="na">lg</span> <span class="na">placeholder=</span><span class="s">"with lg attribute"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-input&gt;</span>
<span class="nt">&lt;bs-form-input</span> <span class="na">placeholder=</span><span class="s">"Default input"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-input&gt;</span>
<span class="nt">&lt;bs-form-input</span> <span class="na">sm</span> <span class="na">placeholder=</span><span class="s">"with sm attribute"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-input&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('sizing-form-control-example', SizingFormControlExample);