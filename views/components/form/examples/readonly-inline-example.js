
import { LitElement, html } from 'lit-element';
import { BsSpacingCss, BsScreenreaderCss } from 'lit-element-bootstrap/utilities';
import { BsButton } from 'lit-element-bootstrap/components/button';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsForm, BsFormLabel, BsFormGroup, BsFormInput, BsFormInputPlaintext } from 'lit-element-bootstrap/components/form';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class ReadonlyInlineExample extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsContentCodeCss,
            BsCodeSyntaxCss,
            BsSpacingCss,
            BsScreenreaderCss
        ];
    }
    
    render() {
        return html`
            
            <bs-example>
                
                <bs-form inline>
                    <bs-form-group class="mb-2">
                        <bs-form-label slot="label" class="sr-only">Email</bs-form-label>
                        <bs-form-input-plaintext readonly slot="control" value="email@example.com"></bs-form-input-plaintext>
                    </bs-form-group>
                    <bs-form-group class="mx-sm-3 mb-2">
                        <bs-form-label slot="label" class="sr-only">Password</bs-form-label>
                        <bs-form-input inline slot="control" type="password" placeholder="Password"></bs-form-input>
                    </bs-form-group>
                    <bs-button primary action="submit" class="mb-2">Confirm identity</bs-button>
                </bs-form>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-form</span> <span class="na">inline</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-form-group</span> <span class="na">class=</span><span class="s">"mb-2"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-form-label</span> <span class="na">slot=</span><span class="s">"label"</span> <span class="na">class=</span><span class="s">"sr-only"</span><span class="nt">&gt;</span>Email<span class="nt">&lt;/bs-form-label&gt;</span>
        <span class="nt">&lt;bs-form-input-plaintext</span> <span class="na">readonly</span> <span class="na">slot=</span><span class="s">"control"</span> <span class="na">value=</span><span class="s">"email@example.com"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-input-plaintext&gt;</span>
    <span class="nt">&lt;/bs-form-group&gt;</span>
    <span class="nt">&lt;bs-form-group</span> <span class="na">class=</span><span class="s">"mx-sm-3 mb-2"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-form-label</span> <span class="na">class=</span><span class="s">"col-sm-2"</span> <span class="na">slot=</span><span class="s">"label"</span><span class="nt">&gt;</span>Password<span class="nt">&lt;/bs-form-label&gt;</span>
        <span class="nt">&lt;bs-form-input</span> <span class="na">inline</span> <span class="na">slot=</span><span class="s">"control"</span> <span class="na">type=</span><span class="s">"password"</span> <span class="na">placeholder=</span><span class="s">"Password"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-input&gt;</span>
    <span class="nt">&lt;/bs-form-group&gt;</span> 
<span class="nt">&lt;/bs-form&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('readonly-inline-example', ReadonlyInlineExample);