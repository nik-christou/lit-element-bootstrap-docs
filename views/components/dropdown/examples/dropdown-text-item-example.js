
import { LitElement, html } from 'lit-element';
import { BsButton } from 'lit-element-bootstrap/components/button';
import { BsClearfixCss } from 'lit-element-bootstrap/utilities';
import { BsDropdown, BsDropdownMenu, BsDropdownItemText, BsDropdownItemLink } from 'lit-element-bootstrap/components/dropdown';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class DropdownTextItemExample extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsContentCodeCss,
            BsCodeSyntaxCss,
            BsClearfixCss
        ];
    }
    
    render() {
        return html`
            
            <bs-example>
                
                <div class="clearfix">
                    <bs-dropdown-menu show static x-placement="bottom-start">
                        <bs-dropdown-item-text>Dropdown item text</bs-dropdown-item-text>
                        <bs-dropdown-item-link title="Action" index="1"></bs-dropdown-item-link>
                        <bs-dropdown-item-link title="Another action" index="2"></bs-dropdown-item-link>
                        <bs-dropdown-item-link title="Something else here" index="3"></bs-dropdown-item-link>
                    </bs-dropdown-menu>
                </div>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html"><span class="nt">&lt;bs-dropdown-menu</span> <span class="na">show</span> <span class="na">static</span> <span class="na">x-placement=</span><span class="s">"bottom-start"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-dropdown-item-text&gt;</span>Dropdown item text<span class="nt">&lt;/bs-dropdown-item-text&gt;</span>
    <span class="nt">&lt;bs-dropdown-item-link</span> <span class="na">title=</span><span class="s">"Action"</span> <span class="na">index=</span><span class="s">"0"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-dropdown-item-link&gt;</span>
    <span class="nt">&lt;bs-dropdown-item-link</span> <span class="na">title=</span><span class="s">"Another action"</span> <span class="na">index=</span><span class="s">"1"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-dropdown-item-link&gt;</span>
    <span class="nt">&lt;bs-dropdown-item-link</span> <span class="na">title=</span><span class="s">"Something else here"</span> <span class="na">index=</span><span class="s">"2"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-dropdown-item-link&gt;</span>
<span class="nt">&lt;/bs-dropdown-menu&gt;</span></code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('dropdown-text-item-example', DropdownTextItemExample);