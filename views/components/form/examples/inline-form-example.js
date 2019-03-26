
import { LitElement, html } from 'lit-element';
import { BsFlexAlignItemsCss } from 'lit-element-bootstrap/utilities/flex';
import { BsSpacingCss, BsScreenreaderCss } from 'lit-element-bootstrap/utilities';
import { BsInputGroup, BsInputGroupText, BsInputGroupPrepend } from 'lit-element-bootstrap/components/input-group';
import { BsFormCheckLabel, BsFormCheckGroup, BsFormCheckboxInput } from 'lit-element-bootstrap/components/form';
import { BsForm, BsFormInput, BsFormLabel, BsFormRow } from 'lit-element-bootstrap/components/form';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class InlineFormExample extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsContentCodeCss,
            BsCodeSyntaxCss,
            BsSpacingCss,
            BsFlexAlignItemsCss,
            BsScreenreaderCss
        ];
    }
    
    render() {
        return html`
            
            <bs-example>
            
                <bs-form inline>
                    <bs-form-row class="align-items-center">
                        <bs-form-label class="sr-only">Name</bs-form-label>
                        <bs-form-input class="mb-2 mr-sm-2" placeholder="Jane Doe"></bs-form-input>
                        <bs-form-label class="sr-only">Username</bs-form-label>
                        <bs-input-group class="mb-2 mr-sm-2">
                            <bs-input-group-prepend>
                                <bs-input-group-text>@</bs-input-group-text>
                            </bs-input-group-prepend>
                            <bs-form-input placeholder="Username"></bs-form-input>
                        </bs-input-group>
                        <bs-form-check-group class="mb-2 mr-sm-2">
                            <bs-form-checkbox-input slot="check"></bs-form-checkbox-input>
                            <bs-form-check-label slot="label">Remember me</bs-form-check-label>
                        </bs-form-check-group>
                        <bs-button primary action="submit" class="mb-2 mr-sm-2">Submit</bs-button>
                    </bs-form-row>
                </bs-form>
            
            </bs-example>
            <bs-highlight><pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-form</span> <span class="na">inline</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-form-label</span> <span class="na">class=</span><span class="s">"sr-only"</span><span class="nt">&gt;</span>Name<span class="nt">&lt;/bs-form-label&gt;</span>
    <span class="nt">&lt;bs-form-input</span> <span class="na">class=</span><span class="s">"mb-2 mr-sm-2"</span> <span class="na">placeholder=</span><span class="s">"Jane Doe"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-input&gt;</span>
    <span class="nt">&lt;bs-form-label</span> <span class="na">class=</span><span class="s">"sr-only"</span><span class="nt">&gt;</span>Username<span class="nt">&lt;/bs-form-label&gt;</span>
    <span class="nt">&lt;bs-input-group</span> <span class="na">class=</span><span class="s">"mb-2 mr-sm-2"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-input-group-prepend</span>
            <span class="nt">&lt;bs-input-group-text</span><span class="nt">&gt;</span>@<span class="nt">&lt;/bs-input-group-text&gt;</span>
            <span class="nt">&lt;bs-form-input</span> <span class="na">placeholder=</span><span class="s">"Username"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-input&gt;</span>
        <span class="nt">&lt;/bs-input-group-prepend&gt;</span>
    <span class="nt">&lt;/bs-input-group&gt;</span>
    <span class="nt">&lt;bs-form-check-group</span> <span class="na">class=</span><span class="s">"mb-2 mr-sm-2"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-form-checkbox-input</span> <span class="na">slot=</span><span class="s">"check"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-checkbox-input&gt;</span>
        <span class="nt">&lt;bs-form-check-label</span> <span class="na">slot=</span><span class="s">"label"</span><span class="nt">&gt;</span>Remember me<span class="nt">&lt;/bs-form-check-label&gt;</span>
    <span class="nt">&lt;/bs-form-check-group&gt;</span>
    <span class="nt">&lt;bs-button</span> <span class="na">primary</span> <span class="na">action</span><span class="s">"submit"</span><span class="nt">&gt;</span>Submit<span class="nt">&lt;/bs-button&gt;</span>
<span class="nt">&lt;/bs-form&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('inline-form-example', InlineFormExample);