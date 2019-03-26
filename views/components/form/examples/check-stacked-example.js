
import { LitElement, html } from 'lit-element';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsFormCheckboxInput, BsFormCheckGroup, BsFormCheckLabel } from 'lit-element-bootstrap/components/form';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class CheckStackedExample extends LitElement {
    
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
            
                <bs-form-check-group>
                    <bs-form-checkbox-input slot="check"></bs-form-checkbox-input>
                    <bs-form-check-label slot="label">Default checkbox</bs-form-check-label>
                </bs-form-check-group>

                <bs-form-check-group disabled>
                    <bs-form-checkbox-input slot="check"></bs-form-checkbox-input>
                    <bs-form-check-label slot="label">Disabled checkbox</bs-form-check-label>
                </bs-form-check-group>

            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html"><span class="nt">&lt;bs-form-check-group&gt;</span>
    <span class="nt">&lt;bs-form-radio-input</span> <span class="na">slot=</span><span class="s">"check"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-radio-input&gt;</span>
    <span class="nt">&lt;bs-form-check-label</span> <span class="na">slot=</span><span class="s">"label"</span><span class="nt">&gt;</span>Default checkbox<span class="nt">&lt;/bs-form-check-label&gt;</span>
<span class="nt">&lt;/bs-form-check-group&gt;</span>

<span class="nt">&lt;bs-form-check-group</span> <span class="na">disabled</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-form-radio-input</span> <span class="na">slot=</span><span class="s">"check"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-radio-input&gt;</span>
    <span class="nt">&lt;bs-form-check-label</span> <span class="na">slot=</span><span class="s">"label"</span><span class="nt">&gt;</span>Disabled checkbox<span class="nt">&lt;/bs-form-check-label&gt;</span>
<span class="nt">&lt;/bs-form-check-group&gt;</span></code></pre>
</bs-highlight>
        `;
    }
};

window.customElements.define('check-stacked-example', CheckStackedExample);