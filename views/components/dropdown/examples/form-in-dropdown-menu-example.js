
import { LitElement, html } from 'lit-element';
import { BsForm, BsFormGroup, BsFormLabel, BsFormInput, BsFormCheckGroup, BsFormCheckLabel, BsFormCheckboxInput } from 'lit-element-bootstrap/components/form';
import { BsButton } from 'lit-element-bootstrap/components/button';
import { BsButtonGroup } from 'lit-element-bootstrap/components/button-group';
import { BsClearfixCss, BsSpacingCss } from 'lit-element-bootstrap/utilities';
import { BsDropdownMenu, BsDropdownDivider, BsDropdownItemLink } from 'lit-element-bootstrap/components/dropdown';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class FormInDropdownMenuExample extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsContentCodeCss,
            BsCodeSyntaxCss,
            BsClearfixCss,
            BsSpacingCss
        ];
    }
    
    render() {
        return html`
            
            <bs-example>
                
                <div class="clearfix">
                    <bs-dropdown-menu show static>
                        
                        <bs-form class="px-4 py-3">
                            
                            <bs-form-group>
                                <bs-form-label slot="label">Email address</bs-form-label>
                                <bs-form-input slot="control" type="email" placeholder="email@example.com"></bs-form-input>
                            </bs-form-group>
                        
                            <bs-form-group>
                                <bs-form-label slot="label">Password</bs-form-label>
                                <bs-form-input slot="control" type="password" placeholder="Password"></bs-form-input>
                            </bs-form-group>

                            <bs-form-check-group>
                                <bs-form-checkbox-input slot="check"></bs-form-checkbox-input>
                                <bs-form-check-label slot="label">Remember me</bs-form-check-label>
                            </bs-form-check-group>

                            <bs-button primary action="submit">Sign in</bs-button>
                            
                        </bs-form>
                        
                        <bs-dropdown-divider></bs-dropdown-divider>
                        <bs-dropdown-item-link title="New around here? Sign up" index="0"></bs-dropdown-item-link>
                        <bs-dropdown-item-link title="Forgot password?" index="1"></bs-dropdown-item-link>
                        
                    </bs-dropdown-menu>
                </div>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html"><span class="nt">&lt;bs-dropdown-menu</span> <span class="na">show</span> <span class="na">static</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-form</span> <span class="na">class=</span><span class="s">"px-4 py-3"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-form-group&gt;</span>
            <span class="nt">&lt;bs-form-label</span> <span class="na">slot=</span><span class="s">"label"</span><span class="nt">&gt;</span>Email address<span class="nt">&lt;/bs-form-label&gt;</span>
            <span class="nt">&lt;bs-form-input</span> <span class="na">slot=</span><span class="s">"control"</span> <span class="na">type=</span><span class="s">"email"</span> <span class="na">placeholder=</span><span class="s">"email@example.com"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-input&gt;</span>
        <span class="nt">&lt;/bs-form-group&gt;</span>
        <span class="nt">&lt;bs-form-group&gt;</span>
            <span class="nt">&lt;bs-form-label</span> <span class="na">slot=</span><span class="s">"label"</span><span class="nt">&gt;</span>Password<span class="nt">&lt;/bs-form-label&gt;</span>
            <span class="nt">&lt;bs-form-input</span> <span class="na">slot=</span><span class="s">"control"</span> <span class="na">type=</span><span class="s">"password"</span> <span class="na">placeholder=</span><span class="s">"Password"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-input&gt;</span>
        <span class="nt">&lt;/bs-form-group&gt;</span>
        <span class="nt">&lt;bs-form-check-group&gt;</span>
            <span class="nt">&lt;bs-form-checkbox-input</span> <span class="na">slot=</span><span class="s">"check"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-checkbox-input&gt;</span>
            <span class="nt">&lt;bs-form-check-label</span> <span class="na">slot=</span><span class="s">"label"</span><span class="nt">&gt;</span>Remember me<span class="nt">&lt;/bs-form-check-label&gt;</span>
        <span class="nt">&lt;/bs-form-check-group&gt;</span>
        <span class="nt">&lt;bs-button</span> <span class="na">primary</span> <span class="na">action=</span><span class="s">"submit"</span><span class="nt">&gt;</span>Sign in<span class="nt">&lt;/bs-button&gt;</span>
    <span class="nt">&lt;/bs-form&gt;</span>
    <span class="nt">&lt;bs-dropdown-divider&gt;</span><span class="nt">&lt;/bs-dropdown-divider&gt;</span>
    <span class="nt">&lt;bs-dropdown-item-link</span> <span class="na">title=</span><span class="s">"New around here? Sign up"</span> <span class="na">index=</span><span class="s">"0"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-dropdown-item-link&gt;</span>
    <span class="nt">&lt;bs-dropdown-item-link</span> <span class="na">title=</span><span class="s">"Forgot password?"</span> <span class="na">index=</span><span class="s">"1"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-dropdown-item-link&gt;</span>
<span class="nt">&lt;/bs-dropdown-menu&gt;</span></code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('form-in-dropdown-menu-example', FormInDropdownMenuExample);