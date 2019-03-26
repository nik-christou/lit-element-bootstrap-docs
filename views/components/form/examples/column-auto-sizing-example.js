
import { LitElement, html } from 'lit-element';
import { BsColumn } from 'lit-element-bootstrap/layout/grid';
import { BsFlexAlignItemsCss } from 'lit-element-bootstrap/utilities/flex';
import { BsSpacingCss, BsScreenreaderCss } from 'lit-element-bootstrap/utilities';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsForm, BsFormRow, BsFormLabel, BsFormInput } from 'lit-element-bootstrap/components/form';
import { BsInputGroup, BsInputGroupText, BsInputGroupPrepend } from 'lit-element-bootstrap/components/input-group'
import { BsFormCheckboxInput, BsFormCheckGroup, BsFormCheckLabel } from 'lit-element-bootstrap/components/form';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class ColumnAutoSizingExample extends LitElement {
    
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
            
                <bs-form>
                    <bs-form-row class="align-items-center">
                        <bs-column xs-auto>
                            <bs-form-label class="sr-only">Name</bs-form-label>
                            <bs-form-input class="mb-2" placeholder="Jane Doe"></bs-form-input>
                        </bs-column>
                        <bs-column xs-auto>
                            <bs-form-label class="sr-only">Username</bs-form-label>
                            <bs-input-group class="mb-2">
                                <bs-input-group-prepend>
                                    <bs-input-group-text>@</bs-input-group-text>
                                </bs-input-group-prepend>
                                <bs-form-input placeholder="Username"></bs-form-input>
                            </bs-input-group>
                        </bs-column>
                        <bs-column xs-auto>
                            <bs-form-check-group class="mb-2">
                                <bs-form-checkbox-input slot="check"></bs-form-checkbox-input>
                                <bs-form-check-label slot="label">Remember me</bs-form-check-label>
                            </bs-form-check-group>
                        </bs-column>
                        <bs-column xs-auto>
                            <bs-button primary action="submit" class="mb-2">Submit</bs-button>
                        </bs-column>
                    </bs-form-row>
                </bs-form>
            
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-form&gt;</span>
    <span class="nt">&lt;bs-form-row</span> <span class="na">class=</span><span class="s">"align-items-center"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-col</span> <span class="na">xs-auto</span><span class="nt">&gt;</span>
            <span class="nt">&lt;bs-form-label</span> <span class="na">class=</span><span class="s">"sr-only"</span><span class="nt">&gt;</span>Name<span class="nt">&lt;/bs-form-label&gt;</span>
            <span class="nt">&lt;bs-form-input</span> <span class="na">class=</span><span class="s">"mb-2"</span> <span class="na">placeholder=</span><span class="s">"Jane Doe"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-input&gt;</span>
        <span class="nt">&lt;/bs-column&gt;</span>
        <span class="nt">&lt;bs-col</span> <span class="na">xs-auto</span><span class="nt">&gt;</span>
            <span class="nt">&lt;bs-form-label</span> <span class="na">class=</span><span class="s">"sr-only"</span><span class="nt">&gt;</span>Username<span class="nt">&lt;/bs-form-label&gt;</span>
        <span class="nt">&lt;/bs-column&gt;</span>
        <span class="nt">&lt;bs-col</span> <span class="na">xs-auto</span> <span class="na">class=</span><span class="s">"my-1"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;bs-form-check-group&gt;</span> 
                <span class="nt">&lt;bs-form-checkbox-input</span> <span class="na">slot=</span><span class="s">"check"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-checkbox-input&gt;</span>
                <span class="nt">&lt;bs-form-check-label</span> <span class="na">slot=</span><span class="s">"label"</span><span class="nt">&gt;</span>Remember me<span class="nt">&lt;/bs-form-check-label&gt;</span>
            <span class="nt">&lt;/bs-form-check-group&gt;</span>
        <span class="nt">&lt;/bs-column&gt;</span>
        <span class="nt">&lt;bs-col</span> <span class="na">xs-auto</span> <span class="na">class=</span><span class="s">"my-1"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;bs-button</span> <span class="na">primary</span> <span class="na">button-type=</span><span class="s">"submit"</span><span class="nt">&gt;</span>Submit<span class="nt">&lt;/bs-button&gt;</span>
        <span class="nt">&lt;/bs-column&gt;</span>
    <span class="nt">&lt;/bs-form-row&gt;</span>
<span class="nt">&lt;/bs-form&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('column-auto-sizing-example', ColumnAutoSizingExample);