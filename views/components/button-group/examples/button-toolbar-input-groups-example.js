
import { LitElement, html, css } from 'lit-element';
import { BsSpacingCss } from 'lit-element-bootstrap/utilities';
import { BsFlexJustifyCss } from 'lit-element-bootstrap/utilities/flex';
import { BsButton } from 'lit-element-bootstrap/components/button';
import { BsFormInput } from 'lit-element-bootstrap/components/form';
import { BsInputGroup, BsInputGroupText, BsInputGroupPrepend } from 'lit-element-bootstrap/components/input-group';
import { BsButtonGroup, BsButtonToolbar } from 'lit-element-bootstrap/components/button-group';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class ButtonToolbarInputGroupsExample extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsContentCodeCss,
            BsCodeSyntaxCss,
            BsSpacingCss,
            BsFlexJustifyCss,
            css`
                bs-button-toolbar + bs-button-toolbar {
                    margin-top: 0.5rem;
                }
            `
        ];
    }
    
    render() {
        return html`
            
            <bs-example>
                
                <bs-button-toolbar class="mb-3">
                    <bs-button-group horizontal class="mr-2">
                        <bs-button secondary>1</bs-button>
                        <bs-button secondary>2</bs-button>
                        <bs-button secondary>3</bs-button>
                        <bs-button secondary>4</bs-button>
                    </bs-button-group>
                    <bs-input-group>
                        <bs-input-group-prepend>
                            <bs-input-group-text>@</bs-input-group-text>
                        </bs-input-group-prepend>
                        <bs-form-input placeholder="Input group example"></bs-form-input>
                    </bs-input-group>
                </bs-button-toolbar>
                
                <bs-button-toolbar class="justify-content-between">
                    <bs-button-group horizontal>
                        <bs-button secondary>1</bs-button>
                        <bs-button secondary>2</bs-button>
                        <bs-button secondary>3</bs-button>
                        <bs-button secondary>4</bs-button>
                    </bs-button-group>
                    <bs-input-group>
                        <bs-input-group-prepend>
                            <bs-input-group-text>@</bs-input-group-text>
                        </bs-input-group-prepend>
                        <bs-form-input placeholder="Input group example"></bs-form-input>
                    </bs-input-group>
                </bs-button-toolbar>
            
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-button-toolbar</span> <span class="na">class=</span><span class="s">"mb-3"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-button-group</span> <span class="na">class=</span><span class="s">"mr-2"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-button</span> <span class="na">secondary</span><span class="nt">&gt;</span>1<span class="nt">&lt;/bs-button&gt;</span>
        <span class="nt">&lt;bs-button</span> <span class="na">secondary</span><span class="nt">&gt;</span>2<span class="nt">&lt;/bs-button&gt;</span>
        <span class="nt">&lt;bs-button</span> <span class="na">secondary</span><span class="nt">&gt;</span>3<span class="nt">&lt;/bs-button&gt;</span>
        <span class="nt">&lt;bs-button</span> <span class="na">secondary</span><span class="nt">&gt;</span>4<span class="nt">&lt;/bs-button&gt;</span>
    <span class="nt">&lt;/bs-button-group&gt;</span>
    <span class="nt">&lt;bs-input-group&gt;</span>
        <span class="nt">&lt;bs-input-group-prepend&gt;</span>
            <span class="nt">&lt;bs-input-group-text&gt;</span>@<span class="nt">&lt;/bs-input-group-text&gt;</span>            
        <span class="nt">&lt;/bs-input-group-prepend&gt;</span>
        <span class="nt">&lt;bs-form-input</span> <span class="na">placeholder=</span><span class="s">"Input group example"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-input&gt;</span>
    <span class="nt">&lt;/bs-input-group&gt;</span>
<span class="nt">&lt;/bs-button-toolbar&gt;</span>

<span class="nt">&lt;bs-button-toolbar</span> <span class="na">class=</span><span class="s">justify-content-between"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-button-group&gt;</span>
        <span class="nt">&lt;bs-button</span> <span class="na">secondary</span><span class="nt">&gt;</span>1<span class="nt">&lt;/bs-button&gt;</span>
        <span class="nt">&lt;bs-button</span> <span class="na">secondary</span><span class="nt">&gt;</span>2<span class="nt">&lt;/bs-button&gt;</span>
        <span class="nt">&lt;bs-button</span> <span class="na">secondary</span><span class="nt">&gt;</span>3<span class="nt">&lt;/bs-button&gt;</span>
        <span class="nt">&lt;bs-button</span> <span class="na">secondary</span><span class="nt">&gt;</span>4<span class="nt">&lt;/bs-button&gt;</span>
    <span class="nt">&lt;/bs-button-group&gt;</span>
    <span class="nt">&lt;bs-input-group&gt;</span>
        <span class="nt">&lt;bs-input-group-prepend&gt;</span>
            <span class="nt">&lt;bs-input-group-text&gt;</span>@<span class="nt">&lt;/bs-input-group-text&gt;</span>
        <span class="nt">&lt;/bs-input-group-prepend&gt;</span>
        <span class="nt">&lt;bs-form-input</span> <span class="na">placeholder=</span><span class="s">"Input group example"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-input&gt;</span>
    <span class="nt">&lt;/bs-input-group&gt;</span>
<span class="nt">&lt;/bs-button-toolbar&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('button-toolbar-input-groups-example', ButtonToolbarInputGroupsExample);