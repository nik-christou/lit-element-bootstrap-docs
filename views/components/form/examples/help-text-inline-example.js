
import { LitElement, html } from 'lit-element';
import { BsSpacingCss } from 'lit-element-bootstrap/utilities';
import { BsFormLabel, BsFormInput, BsFormHelpText } from 'lit-element-bootstrap/components/form';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class HelpTextInlineExample extends LitElement {
    
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
        
                <bs-form inline>
                    <bs-form-group>
                        <bs-form-label slot="label">Password</bs-form-label>
                        <bs-form-input slot="control" class="mx-sm-3" type="password" placeholder="Password"></bs-form-input>
                        <bs-form-help-text slot="helptext">Must be 8-20 characters long.</bs-form-help-text>
                    </bs-form-group>
                </bs-form>
            
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-form</span> <span class="na">inline</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-form-group&gt;</span>
        <span class="nt">&lt;bs-form-label</span> <span class="na">slot=</span><span class="s">"label"</span> Password<span class="nt">&lt;/bs-form-label&gt;</span>
        <span class="nt">&lt;bs-form-input</span> <span class="na">slot=</span><span class="s">"control"</span> <span class="na">type=</span><span class="s">"password"</span> <span class="na">placeholder=</span><span class="s">"Password"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-input&gt;</span>        
        <span class="nt">&lt;bs-form-help-text</span> <span class="na">slot=</span><span class="s">"helptext"</span></span><span class="nt">&gt;</span>Must be 8-20 characters long <span class="nt">&lt;/bs-form-help-text&gt;</span>
   <span class="nt">&lt;/bs-form-group&gt;</span>  
<span class="nt">&lt;/bs-form&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('help-text-inline-example', HelpTextInlineExample);