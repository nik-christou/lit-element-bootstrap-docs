
import { LitElement, html } from 'lit-element';
import { BsForm, BsFormInput, BsFormGroup, BsFormLabel } from 'lit-element-bootstrap/components/form';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class FormGroupsExample extends LitElement {
    
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
                        <bs-form-label slot="label">Example label</bs-form-label>
                        <bs-form-input slot="control" placeholder="Example input"></bs-form-input>
                    </bs-form-group>
            
                    <bs-form-group>
                        <bs-form-label slot="label">Another label</bs-form-label>
                        <bs-form-input slot="control" placeholder="Another input"></bs-form-input>
                    </bs-form-group>
                    
                </bs-form>

            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-form&gt;</span>
    <span class="nt">&lt;bs-form-group</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-form-label</span> <span class="na">slot=</span><span class="s">"label"</span><span class="nt">&gt;</span>Example label<span class="nt">&lt;/bs-form-label&gt;</span>
        <span class="nt">&lt;bs-form-input</span> <span class="na">slot=</span><span class="s">"control"</span> <span class="na">placeholder=</span><span class="s">"Example input"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-input&gt;</span>
    <span class="nt">&lt;/bs-form-group&gt;</span>
    <span class="nt">&lt;bs-form-group</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-form-label</span> <span class="na">slot=</span><span class="s">"label"</span><span class="nt">&gt;</span>Another label<span class="nt">&lt;/bs-form-label&gt;</span>
        <span class="nt">&lt;bs-form-input</span> <span class="na">slot=</span><span class="s">"control"</span> <span class="na">placeholder=</span><span class="s">"Another input"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-input&gt;</span>
    <span class="nt">&lt;/bs-form-group&gt;</span>
<span class="nt">&lt;/bs-form&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('form-groups-example', FormGroupsExample);