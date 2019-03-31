
import { LitElement, html } from 'lit-element';
import { BsSpacingCss } from 'lit-element-bootstrap/utilities';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsFormCheckboxInput, BsFormCheckGroup, BsFormSelect } from 'lit-element-bootstrap/components/form';
import { BsForm, BsFormInput, BsFormLabel, BsFormGroup, BsFormFieldset } from 'lit-element-bootstrap/components/form';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

import '../../../../component/callout/bs-callout';

class DisabledFormsExample extends LitElement {

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

            <bs-highlight><pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-form-input</span> <span class="na">disabled</span> <span class="na">placeholder=</span><span class="s">"Disabled input here..."</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-input&gt;</span>
</code></pre></bs-highlight>

            <bs-example>
                <bs-form>
                    <bs-form-fieldset disabled>
                    
                        <bs-form-group>
                            <bs-form-label slot="label">Disabled input</bs-form-label>
                            <bs-form-input slot="control" placeholder="Disabled input"></bs-form-input>
                        </bs-form-group>
                        
                        <bs-form-group>
                            <bs-form-label slot="label">Disabled select menu</bs-form-label>
                            <bs-form-select slot="control" caption-text="Disabled select"></bs-form-select>
                        </bs-form-group>
            
                        <bs-form-check-group>
                            <bs-form-checkbox-input slot="check"></bs-form-checkbox-input>
                            <bs-form-check-label slot="label">Can't check this</bs-form-check-label>
                        </bs-form-check-group>
                        
                        <bs-button primary button-type="submit">Submit</bs-button>
                        
                    </bs-form-fieldset>
                </bs-form>
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-form&gt;</span>
    <span class="nt">&lt;bs-form-fieldset</span> <span class="na">disabled</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-form-group&gt;</span>
            <span class="nt">&lt;bs-form-label</span> <span class="na">slot=</span><span class="s">"label"</span><span class="nt">&gt;</span>Disabled input<span class="nt">&lt;/bs-form-label&gt;</span>
            <span class="nt">&lt;bs-form-input</span> <span class="na">slot=</span><span class="s">"control"</span> <span class="na">placeholder=</span><span class="s">"Disabled input"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-input&gt;</span>
        <span class="nt">&lt;/bs-form-group&gt;</span>
        <span class="nt">&lt;bs-form-group&gt;</span>
            <span class="nt">&lt;bs-form-label</span> <span class="na">slot=</span><span class="s">"label"</span><span class="nt">&gt;</span>Disabled select menu<span class="nt">&lt;/bs-form-label&gt;</span>
            <span class="nt">&lt;bs-form-select</span> <span class="na">slot=</span><span class="s">"control"</span> <span class="na">caption-text=</span><span class="s">"Disabled select"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-select&gt;</span>
        <span class="nt">&lt;/bs-form-group&gt;</span>
        <span class="nt">&lt;bs-form-check-group&gt;</span>
            <span class="nt">&lt;bs-form-checkbox-input</span> <span class="na">slot=</span><span class="s">"check"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-checkbox-input&gt;</span>
            <span class="nt">&lt;bs-form-check-label</span> <span class="na">slot=</span><span class="s">"label"</span><span class="nt">&gt;</span>Can't check this<span class="nt">&lt;/bs-form-check-label&gt;</span>
        <span class="nt">&lt;/bs-form-check-group&gt;</span>
        <span class="nt">&lt;bs-button</span> <span class="na">primary</span> <span class="na">button-type=</span><span class="s">"submit"</span><span class="nt">&gt;</span>Submit<span class="nt">&lt;/bs-button&gt;</span>
    <span class="nt">&lt;/bs-form-fieldset&gt;</span>
<span class="nt">&lt;/bs-form&gt;</span>
</code></pre></bs-highlight>
            
<bs-callout danger>
    <h4 slot="title">Cross-browser compatibility</h4>
    <p>While Bootstrap will apply these styles in all browsers, Internet Explorer 11 and below don’t fully support the <code class="highlighter-rouge">disabled</code> attribute on a <code class="highlighter-rouge">&lt;fieldset&gt;</code>. Use custom JavaScript to disable the fieldset in these browsers.</p>
</bs-callout>
        `;
    }
};

window.customElements.define('disabled-forms-example', DisabledFormsExample);