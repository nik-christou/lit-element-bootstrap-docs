
import { LitElement, html } from 'lit-element';
import { BsFormLabel, BsFormInput, BsFormHelpText } from 'lit-element-bootstrap/components/form';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class HelpTextExample extends LitElement {
    
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
        
                <bs-form-label>Password</bs-form-label>
                <bs-form-input type="password" placeholder="Password"></bs-form-input>
                <bs-form-help-text>Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.</bs-form-help-text>
            
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-form-label&gt;</span>Password<span class="nt">&lt;/bs-form-label&gt;</span>
<span class="nt">&lt;bs-form-input</span> <span class="na">type=</span><span class="s">"password"</span> <span class="na">placeholder=</span><span class="s">"Password"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-input&gt;</span>
<span class="nt">&lt;bs-form-help-text&gt;</span>Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.<span class="nt">&lt;/bs-form-help-text&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('help-text-example', HelpTextExample);