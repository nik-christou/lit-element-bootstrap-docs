
import { LitElement, html } from 'lit-element';
import { BsFormInput } from 'lit-element-bootstrap/components/form';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class ReadonlyFormControlExample extends LitElement {
    
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
                
                <bs-form-input readonly placeholder="Readonly input here..."></bs-form-input>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-form-input</span> <span class="na">readonly</span> <span class="na">placeholder=</span><span class="s">"Readonly input here..."</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-input&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('readonly-form-control-example', ReadonlyFormControlExample);