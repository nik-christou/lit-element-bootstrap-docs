
import { LitElement, html } from 'lit-element';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsFormCheckboxInput, BsFormCheckGroup, BsFormCheckLabel, BsFormRadioInput } from 'lit-element-bootstrap/components/form';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class CheckRadioStaticExample extends LitElement {
    
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
                    <bs-form-checkbox-input static slot="check"></bs-form-checkbox-input>
                </bs-form-check-group>

                <bs-form-check-group>
                    <bs-form-radio-input static slot="check" value="option1" name="blankRadio"></bs-form-radio-input>
                </bs-form-check-group>
            
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html"><span class="nt">&lt;bs-form-check-group&gt;</span>
    <span class="nt">&lt;bs-form-checkbox-input</span> <span class="na">static</span> <span class="na">slot=</span><span class="s">"check"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-checkbox-input&gt;</span>
<span class="nt">&lt;/bs-form-check-group&gt;</span>

<span class="nt">&lt;bs-form-check-group&gt;</span>
    <span class="nt">&lt;bs-form-radio-input</span> <span class="na">static</span> <span class="na">slot=</span><span class="s">"check"</span> <span class="na">value=</span><span class="s">"option1"</span> <span class="na">name=</span><span class="s">"blankRadio"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-radio-input&gt;</span>
<span class="nt">&lt;/bs-form-check-group&gt;</span></code></pre>
</bs-highlight>
        `;
    }
};

window.customElements.define('check-radio-static-example', CheckRadioStaticExample);