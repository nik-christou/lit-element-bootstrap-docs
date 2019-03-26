
import { LitElement, html } from 'lit-element';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsForm, BsFormFileInput, BsFormLabel, BsFormGroup } from 'lit-element-bootstrap/components/form';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class FileInputExample extends LitElement {
    
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
                
                <bs-form>
                    <bs-form-group>
                        <bs-form-label slot="label">Example file input</bs-form-label>
                        <bs-form-file-input slot="control"></bs-form-file-input>
                    </bs-form-group>
                </bs-form>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html"><span class="nt">&lt;bs-form&gt;</span>
    <span class="nt">&lt;bs-form-group</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-form-label</span> <span class="na">slot=</span><span class="s">"label"</span><span class="nt">&gt;</span>Example file input<span class="nt">&lt;/bs-form-label&gt;</span>
        <span class="nt">&lt;bs-form-file-input</span> <span class="na">slot=</span><span class="s">"control"</span> <span class="nt">&gt;</span><span class="nt">&lt;/bs-form-file-input&gt;</span>
    <span class="nt">&lt;/bs-form-group&gt;</span>
<span class="nt">&lt;/bs-form&gt;</span></code></pre>
</bs-highlight>
        `;
    }
};

window.customElements.define('file-input-example', FileInputExample);