
import { LitElement, html } from 'lit-element';
import { BsSpacingCss } from 'lit-element-bootstrap/utilities';
import { BsFormInput, BsFormTextarea } from 'lit-element-bootstrap/components/form';
import { BsInputGroup, BsInputGroupText, BsInputGroupPrepend, BsInputGroupAppend } from 'lit-element-bootstrap/components/input-group';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class InputGroupBasicExample extends LitElement {
    
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
                
                <bs-input-group class="mb-3">
                    <bs-input-group-prepend>
                        <bs-input-group-text>@</bs-input-group-text>
                    </bs-input-group-prepend>
                    <bs-form-input placeholder="Username"></bs-form-input>
                </bs-input-group>
                
                <bs-input-group class="mb-3">
                    <bs-form-input placeholder="Recipient's username"></bs-form-input>
                    <bs-input-group-append>
                        <bs-input-group-text>@example.com</bs-input-group-text>
                    </bs-input-group-append>
                </bs-input-group>
        
                <label>Your vanity URL</label>
                <bs-input-group class="mb-3">
                    <bs-input-group-prepend>
                        <bs-input-group-text>https://example.com/users/</bs-input-group-text>
                    </bs-input-group-prepend>
                    <bs-form-input></bs-form-input>
                </bs-input-group>
        
                <bs-input-group class="mb-3">
                    <bs-input-group-prepend>
                        <bs-input-group-text>$</bs-input-group-text>
                    </bs-input-group-prepend>
                    <bs-form-input></bs-form-input>
                    <bs-input-group-append>
                        <bs-input-group-text>.00</bs-input-group-text>
                    </bs-input-group-append>
                </bs-input-group>
                
                <bs-input-group class="mb-3">
                    <bs-input-group-prepend>
                        <bs-input-group-text>With textarea</bs-input-group-text>
                    </bs-input-group-prepend>
                    <bs-form-textarea></bs-form-textarea>
                </bs-input-group>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-input-group</span> <span class="na">class=</span><span class="s">"mb-3"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-input-group-prepend&gt;</span>
        <span class="nt">&lt;bs-input-group-text&gt;</span>@<span class="nt">&lt;/bs-input-group-text&gt;</span>
    <span class="nt">&lt;/bs-input-group-prepend&gt;</span>
    <span class="nt">&lt;bs-form-input</span> <span class="na">placeholder=</span><span class="s">"Username"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-input&gt;</span>
<span class="nt">&lt;/bs-input-group&gt;</span>

<span class="nt">&lt;bs-input-group</span> <span class="na">class=</span><span class="s">"mb-3"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-form-input</span> <span class="na">placeholder=</span><span class="s">"Recipient's username"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-input&gt;</span>    
    <span class="nt">&lt;bs-input-group-append&gt;</span>
        <span class="nt">&lt;bs-input-group-text&gt;</span>@example.com<span class="nt">&lt;/bs-input-group-text&gt;</span>
    <span class="nt">&lt;/bs-input-group-append&gt;</span>
<span class="nt">&lt;/bs-input-group&gt;</span>

<span class="nt">&lt;label&gt;</span>Your vanity URL<span class="nt">&lt;/label&gt;</span>
<span class="nt">&lt;bs-input-group</span> <span class="na">class=</span><span class="s">"mb-3"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-input-group-prepend&gt;</span>
        <span class="nt">&lt;bs-input-group-text&gt;</span>https://example.com/users/<span class="nt">&lt;/bs-input-group-text&gt;</span>
    <span class="nt">&lt;/bs-input-group-prepend&gt;</span>
    <span class="nt">&lt;bs-form-input&gt;</span><span class="nt">&lt;/bs-form-input&gt;</span>
<span class="nt">&lt;/bs-input-group&gt;</span>
        
<span class="nt">&lt;bs-input-group</span> <span class="na">class=</span><span class="s">"mb-3"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-input-group-prepend&gt;</span>
        <span class="nt">&lt;bs-input-group-text&gt;</span>$<span class="nt">&lt;/bs-input-group-text&gt;</span>
    <span class="nt">&lt;/bs-input-group-prepend&gt;</span>
    <span class="nt">&lt;bs-form-input&gt;</span><span class="nt">&lt;/bs-form-input&gt;</span>
    <span class="nt">&lt;bs-input-group-append&gt;</span>
        <span class="nt">&lt;bs-input-group-text&gt;</span>.00<span class="nt">&lt;/bs-input-group-text&gt;</span>
    <span class="nt">&lt;/bs-input-group-append&gt;</span>
<span class="nt">&lt;/bs-input-group&gt;</span>
        
<span class="nt">&lt;bs-input-group</span> <span class="na">class=</span><span class="s">"mb-3"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-input-group-prepend&gt;</span>
        <span class="nt">&lt;bs-input-group-text&gt;</span>$With textarea<span class="nt">&lt;/bs-input-group-text&gt;</span>
    <span class="nt">&lt;/bs-input-group-prepend&gt;</span>
    <span class="nt">&lt;bs-form-textarea&gt;</span><span class="nt">&lt;/bs-form-textarea&gt;</span>
<span class="nt">&lt;/bs-input-group&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('input-group-basic-example', InputGroupBasicExample);