
import { LitElement, html } from 'lit-element';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsFormRadioInput, BsFormRadioGroup, BsFormCheckGroup, BsFormCheckLabel } from 'lit-element-bootstrap/components/form';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class RadioStackedExample extends LitElement {
    
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
            
                <bs-form-radio-name-group name="exampleRadios">

                    <bs-form-check-group>
                        <bs-form-radio-input slot="check" checked type="radio" value="option1"></bs-form-radio-input>
                        <bs-form-check-label slot="label">Default radio</bs-form-check-label>
                    </bs-form-check-group>

                    <bs-form-check-group>
                        <bs-form-radio-input slot="check" type="radio" value="option2"></bs-form-radio-input>
                        <bs-form-check-label slot="label">Second default radio</bs-form-check-label>
                    </bs-form-check-group>

                    <bs-form-check-group disabled>
                        <bs-form-radio-input slot="check" type="radio" value="option3"></bs-form-radio-input>
                        <bs-form-check-label slot="label">Disabled radio</bs-form-check-label>
                    </bs-form-check-group>

                </bs-form-radio-name-group>
            
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-form-radio-name-group</span> <span class="na">name=</span><span class="s">"exampleRadios"</span><span class="nt">&gt;</span>    
    <span class="nt">&lt;bs-form-check-group&gt;</span>
        <span class="nt">&lt;bs-form-radio-input</span> <span class="na">checked</span> <span class="na">slot=</span><span class="s">"check"</span> <span class="na">type=</span><span class="s">"radio"</span> <span class="na">value=</span><span class="s">"option1"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-radio-input&gt;</span>
        <span class="nt">&lt;bs-form-check-label</span> <span class="na">slot=</span><span class="s">"label"</span><span class="nt">&gt;</span>Default radio<span class="nt">&lt;/bs-form-check-label&gt;</span>
    <span class="nt">&lt;/bs-form-check-group&gt;</span>
    <span class="nt">&lt;bs-form-check-group&gt;</span>
        <span class="nt">&lt;bs-form-radio-input</span> <span class="na">slot=</span><span class="s">"check"</span> <span class="na">type=</span><span class="s">"radio"</span> <span class="na">value=</span><span class="s">"option2"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-radio-input&gt;</span>
        <span class="nt">&lt;bs-form-check-label</span> <span class="na">slot=</span><span class="s">"label"</span><span class="nt">&gt;</span>Second default radio<span class="nt">&lt;/bs-form-check-label&gt;</span>
    <span class="nt">&lt;/bs-form-check-group&gt;</span>
    <span class="nt">&lt;bs-form-check-group</span> <span class="na">disabled</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-form-radio-input</span> <span class="na">slot=</span><span class="s">"check"</span> <span class="na">type=</span><span class="s">"radio"</span> <span class="na">value=</span><span class="s">"option3"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-radio-input&gt;</span>
        <span class="nt">&lt;bs-form-check-label</span> <span class="na">slot=</span><span class="s">"label"</span><span class="nt">&gt;</span>Disabled radio<span class="nt">&lt;/bs-form-check-label&gt;</span>
    <span class="nt">&lt;/bs-form-check-group&gt;</span>
<span class="nt">&lt;/bs-form-radio-name-group&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('radio-stacked-example', RadioStackedExample);