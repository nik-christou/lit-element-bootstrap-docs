
import { LitElement, html } from 'lit-element';
import { BsFormInput } from 'lit-element-bootstrap/components/form';
import { BsSpacingCss } from 'lit-element-bootstrap/utilities';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';
import { BsInputGroup, BsInputGroupText, BsInputGroupAppend, BsInputGroupPrepend } from 'lit-element-bootstrap/components/input-group';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';

class InputGroupMultipleAddonsExample extends LitElement {
    
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
                        <bs-input-group-text>$</bs-input-group-text>
                        <bs-input-group-text>0.00</bs-input-group-text>
                    </bs-input-group-prepend>
                    <bs-form-input></bs-form-input>
                </bs-input-group>
                
                <bs-input-group class="mb-3">
                    <bs-form-input></bs-form-input>
                    <bs-input-group-append>
                        <bs-input-group-text>$</bs-input-group-text>
                        <bs-input-group-text>0.00</bs-input-group-text>
                    </bs-input-group-append>
                </bs-input-group>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-input-group</span> <span class="na">class=</span><span class="s">"mb-3"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-input-group-prepend&gt;</span>
        <span class="nt">&lt;bs-input-group-text&gt;</span>$<span class="nt">&lt;/bs-input-group-text&gt;</span>
        <span class="nt">&lt;bs-input-group-text&gt;</span>0.00<span class="nt">&lt;/bs-input-group-text&gt;</span>
    <span class="nt">&lt;/bs-input-group-prepend&gt;</span>
    <span class="nt">&lt;bs-form-input&gt;</span><span class="nt">&lt;/bs-form-input&gt;</span>
<span class="nt">&lt;/bs-input-group&gt;</span>
<span class="nt">&lt;bs-input-group</span> <span class="na">class=</span><span class="s">"mb-3"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-form-input&gt;</span><span class="nt">&lt;/bs-form-input&gt;</span>
    <span class="nt">&lt;bs-input-group-append&gt;</span>
        <span class="nt">&lt;bs-input-group-text&gt;</span>$<span class="nt">&lt;/bs-input-group-text&gt;</span>
        <span class="nt">&lt;bs-input-group-text&gt;</span>0.00<span class="nt">&lt;/bs-input-group-text&gt;</span>
    <span class="nt">&lt;/bs-input-group-append&gt;</span>
<span class="nt">&lt;/bs-input-group&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('input-group-multiple-addons-example', InputGroupMultipleAddonsExample);