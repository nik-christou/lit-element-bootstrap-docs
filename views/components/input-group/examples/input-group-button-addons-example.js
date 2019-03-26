
import { LitElement, html } from 'lit-element';
import { BsSpacingCss } from 'lit-element-bootstrap/utilities';
import { BsButton } from 'lit-element-bootstrap/components/button';
import { BsFormInput } from 'lit-element-bootstrap/components/form';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';
import { BsInputGroup, BsInputGroupText, BsInputGroupPrepend, BsInputGroupAppend } from 'lit-element-bootstrap/components/input-group';

class InputGroupButtonAddonsExample extends LitElement {
    
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
                        <bs-button outline-secondary>Button</bs-button>
                    </bs-input-group-prepend>
                    <bs-form-input></bs-form-input>
                </bs-input-group>
        
                <bs-input-group class="mb-3">
                    <bs-form-input placeholder="Recipient's username"></bs-form-input>
                    <bs-input-group-append>
                        <bs-button outline-secondary>Button</bs-button>
                    </bs-input-group-append>
                </bs-input-group>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-input-group</span> <span class="na">class=</span><span class="s">"mb-3"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-input-group-prepend&gt;</span>
        <span class="nt">&lt;bs-button</span> <span class="na">outline-secondary</span><span class="nt">&gt;</span>Button<span class="nt">&lt;/bs-button&gt;</span>
    <span class="nt">&lt;/bs-input-group-prepend&gt;</span>
    <span class="nt">&lt;bs-form-input&gt;</span><span class="nt">&lt;/bs-form-input&gt;</span>
<span class="nt">&lt;/bs-input-group&gt;</span>
<span class="nt">&lt;bs-input-group</span> <span class="na">class=</span><span class="s">"mb-3"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-form-input&gt;</span><span class="nt">&lt;/bs-form-input&gt;</span>
    <span class="nt">&lt;bs-input-group-append&gt;</span>
        <span class="nt">&lt;bs-button</span> <span class="na">outline-secondary</span><span class="nt">&gt;</span>Button<span class="nt">&lt;/bs-button&gt;</span>
    <span class="nt">&lt;/bs-input-group-append&gt;</span>
<span class="nt">&lt;/bs-input-group&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('input-group-button-addons-example', InputGroupButtonAddonsExample);