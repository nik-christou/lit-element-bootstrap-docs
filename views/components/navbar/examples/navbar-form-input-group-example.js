
import { LitElement, html } from 'lit-element';
import { BsSpacingCss, BsBackgroundColorsCss } from 'lit-element-bootstrap/utilities';
import { BsNavbar } from 'lit-element-bootstrap/components/navbar';
import { BsForm, BsFormInput } from 'lit-element-bootstrap/components/form';
import { BsButton } from 'lit-element-bootstrap/components/button';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';
import { BsInputGroup, BsInputGroupPrepend, BsInputGroupText } from 'lit-element-bootstrap/components/input-group';

class NavbarFormInputGroupExample extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsContentCodeCss,
            BsCodeSyntaxCss,
            BsBackgroundColorsCss,
            BsSpacingCss
        ];
    }
    
    render() {
        return html`
            
            <bs-example>
                
                <bs-navbar navbar-light class="bg-light">
                    <bs-form inline>
                        <bs-input-group>
                            <bs-input-group-prepend>
                                <bs-input-group-text>@</bs-input-group-text>
                            </bs-input-group-prepend>
                            <bs-form-input placeholder="Username"></bs-form-input>
                        </bs-input-group>
                    </bs-form inline>
                </bs-navbar>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-navbar</span> <span class="na">navbar-light</span> <span class="na">expand-lg</span> <span class="na">class=</span><span class="s">"bg-light"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-form</span> <span class="na">inline</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-input-group&gt;</span>
            <span class="nt">&lt;bs-input-group-prepend&gt;</span>
                <span class="nt">&lt;bs-input-group-text&gt;</span>@<span class="nt">&lt;/bs-input-group-text&gt;</span>
            <span class="nt">&lt;/bs-input-group-prepend&gt;</span>
            <span class="nt">&lt;bs-form-input</span> <span class="na">placeholder=</span><span class="s">"Username"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-input&gt;</span>
        <span class="nt">&lt;/bs-input-group&gt;</span>
    <span class="nt">&lt;/bs-form&gt;</span>
<span class="nt">&lt;/bs-navbar&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('navbar-form-input-group-example', NavbarFormInputGroupExample);