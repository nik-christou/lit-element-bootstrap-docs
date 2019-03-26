
import { LitElement, html } from 'lit-element';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsFormCheckboxInput, BsFormCheckGroup, BsFormCheckLabel } from 'lit-element-bootstrap/components/form';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class CheckInlineExample extends LitElement {
    
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
                
                <bs-form-check-group inline>
                    <bs-form-checkbox-input slot="check"></bs-form-checkbox-input>
                    <bs-form-check-label slot="label">1</bs-form-check-label>
                </bs-form-check-group>

                <bs-form-check-group inline>
                    <bs-form-checkbox-input slot="check"></bs-form-checkbox-input>
                    <bs-form-check-label slot="label">2</bs-form-check-label>
                </bs-form-check-group>

                <bs-form-check-group inline disabled>
                    <bs-form-checkbox-input slot="check"></bs-form-checkbox-input>
                    <bs-form-check-label slot="label">3 (disabled)</bs-form-check-label>
                </bs-form-check-group>

            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-form-check-group</span> <span class="na">inline</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-form-checkbox-input</span> <span class="na">slot=</span><span class="s">"check"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-checkbox-input&gt;</span>
    <span class="nt">&lt;bs-form-check-label</span> <span class="na">slot=</span><span class="s">"label"</span><span class="nt">&gt;</span>1<span class="nt">&lt;/bs-form-check-label&gt;</span>
<span class="nt">&lt;/bs-form-check-group&gt;</span>

<span class="nt">&lt;bs-form-check-group</span> <span class="na">inline</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-form-checkbox-input</span> <span class="na">slot=</span><span class="s">"check"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-checkbox-input&gt;</span>
    <span class="nt">&lt;bs-form-check-label</span> <span class="na">slot=</span><span class="s">"label"</span><span class="nt">&gt;</span>2<span class="nt">&lt;/bs-form-check-label&gt;</span>
<span class="nt">&lt;/bs-form-check-group&gt;</span>
        
<span class="nt">&lt;bs-form-check-group</span> <span class="na">inline</span> <span class="na">disabled</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-form-checkbox-input</span> <span class="na">slot=</span><span class="s">"check"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-checkbox-input&gt;</span>
    <span class="nt">&lt;bs-form-check-label</span> <span class="na">slot=</span><span class="s">"label"</span><span class="nt">&gt;</span>3 (disabled)<span class="nt">&lt;/bs-form-check-label&gt;</span>
<span class="nt">&lt;/bs-form-check-group&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('check-inline-example', CheckInlineExample);