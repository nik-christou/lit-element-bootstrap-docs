
import { LitElement, html } from 'lit-element';
import { BsSpacingCss } from 'lit-element-bootstrap/utilities';
import { BsButton } from 'lit-element-bootstrap/components/button';
import { BsFormInput } from 'lit-element-bootstrap/components/form';
import { BsDropdown, BsDropdownMenu, BsDropdownDivider, BsDropdownItemLink }  from 'lit-element-bootstrap/components/dropdown';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';
import { BsInputGroup, BsInputGroupText, BsInputGroupPrepend, BsInputGroupAppend } from 'lit-element-bootstrap/components/input-group';

class InputGroupDropdownsExample extends LitElement {
    
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
            
            <bs-example>
                
                <bs-input-group class="mb-3">
                    <bs-input-group-prepend>
                        <bs-dropdown> 
                            <bs-button outline-secondary dropdown-toggle>Dropdown</bs-button>
                            <bs-dropdown-menu down x-placement="bottom-start">
                                <bs-dropdown-item-link title="Action" index="0"></bs-dropdown-item-link>
                                <bs-dropdown-item-link title="Another action" index="1"></bs-dropdown-item-link>
                                <bs-dropdown-item-link title="Something else here" index="2"></bs-dropdown-item-link>
                                <bs-dropdown-divider></bs-dropdown-divider>
                                <bs-dropdown-item-link title="Separated link" index="3"></bs-dropdown-item-link>
                            </bs-dropdown-menu>
                        </bs-dropdown>
                    </bs-input-group-prepend>
                    <bs-form-input></bs-form-input>
                </bs-input-group>
                
                <bs-input-group class="mb-3">
                    <bs-form-input></bs-form-input>
                    <bs-input-group-append>
                        <bs-dropdown> 
                            <bs-button outline-secondary dropdown-toggle>Dropdown</bs-button>
                            <bs-dropdown-menu down x-placement="bottom-start">
                                <bs-dropdown-item-link title="Action" index="0"></bs-dropdown-item-link>
                                <bs-dropdown-item-link title="Another action" index="1"></bs-dropdown-item-link>
                                <bs-dropdown-item-link title="Something else here" index="2"></bs-dropdown-item-link>
                                <bs-dropdown-divider></bs-dropdown-divider>
                                <bs-dropdown-item-link title="Separated link" index="3"></bs-dropdown-item-link>
                            </bs-dropdown-menu>
                        </bs-dropdown>
                    </bs-input-group-append>
                </bs-input-group>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-input-group</span> <span class="na">class=</span><span class="s">"mb-3"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-input-group-prepend&gt;</span>
        <span class="nt">&lt;bs-dropdown&gt;</span> 
            <span class="nt">&lt;bs-button</span> <span class="na">outline-secondary</span> <span class="na">dropdown-toggle</span><span class="nt">&gt;</span>Dropdown<span class="nt">&lt;/bs-button&gt;</span>
            <span class="nt">&lt;bs-dropdown-menu</span> <span class="na">down</span> <span class="na">x-placement=</span><span class="s">"bottom-start"</span><span class="nt">&gt;</span>
                <span class="nt">&lt;bs-dropdown-item-link</span> <span class="na">title=</span><span class="s">"Action"</span> <span class="na">index=</span><span class="s">"0"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-dropdown-item-link&gt;</span>
                <span class="nt">&lt;bs-dropdown-item-link</span> <span class="na">title=</span><span class="s">"Another action"</span> <span class="na">index=</span><span class="s">"1"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-dropdown-item-link&gt;</span>
                <span class="nt">&lt;bs-dropdown-item-link</span> <span class="na">title=</span><span class="s">"Something else here"</span> <span class="na">index=</span><span class="s">"2"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-dropdown-item-link&gt;</span>
                <span class="nt">&lt;bs-dropdown-divider&gt;</span><span class="nt">&lt;/bs-dropdown-divider&gt;</span>
                <span class="nt">&lt;bs-dropdown-item-link</span> <span class="na">title=</span><span class="s">"Separated link"</span> <span class="na">index=</span><span class="s">"3"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-dropdown-item-link&gt;</span>
            <span class="nt">&lt;/bs-dropdown-menu&gt;</span>
        <span class="nt">&lt;/bs-dropdown&gt;</span>
    <span class="nt">&lt;/bs-input-group-prepend&gt;</span>
    <span class="nt">&lt;bs-form-input&gt;</span><span class="nt">&lt;/bs-form-input&gt;</span>
<span class="nt">&lt;/bs-input-group&gt;</span>
<span class="nt">&lt;bs-input-group</span> <span class="na">class=</span><span class="s">"mb-3"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-form-input&gt;</span><span class="nt">&lt;/bs-form-input&gt;</span>
    <span class="nt">&lt;bs-input-group-append&gt;</span>
        <span class="nt">&lt;bs-dropdown&gt;</span> 
            <span class="nt">&lt;bs-button</span> <span class="na">outline-secondary</span> <span class="na">dropdown-toggle</span><span class="nt">&gt;</span>Dropdown<span class="nt">&lt;/bs-button&gt;</span>
            <span class="nt">&lt;bs-dropdown-menu</span> <span class="na">down</span> <span class="na">x-placement=</span><span class="s">"bottom-start"</span><span class="nt">&gt;</span>
                <span class="nt">&lt;bs-dropdown-item-link</span> <span class="na">title=</span><span class="s">"Action"</span> <span class="na">index=</span><span class="s">"0"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-dropdown-item-link&gt;</span>
                <span class="nt">&lt;bs-dropdown-item-link</span> <span class="na">title=</span><span class="s">"Another action"</span> <span class="na">index=</span><span class="s">"1"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-dropdown-item-link&gt;</span>
                <span class="nt">&lt;bs-dropdown-item-link</span> <span class="na">title=</span><span class="s">"Something else here"</span> <span class="na">index=</span><span class="s">"2"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-dropdown-item-link&gt;</span>
                <span class="nt">&lt;bs-dropdown-divider&gt;</span><span class="nt">&lt;/bs-dropdown-divider&gt;</span>
                <span class="nt">&lt;bs-dropdown-item-link</span> <span class="na">title=</span><span class="s">"Separated link"</span> <span class="na">index=</span><span class="s">"3"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-dropdown-item-link&gt;</span>
            <span class="nt">&lt;/bs-dropdown-menu&gt;</span>
        <span class="nt">&lt;/bs-dropdown&gt;</span>
    <span class="nt">&lt;/bs-input-group-append&gt;</span>
<span class="nt">&lt;/bs-input-group&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('input-group-dropdowns-example', InputGroupDropdownsExample);