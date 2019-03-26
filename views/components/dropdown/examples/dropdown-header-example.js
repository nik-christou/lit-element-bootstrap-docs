
import { LitElement, html } from 'lit-element';
import { BsClearfixCss } from 'lit-element-bootstrap/utilities';
import { BsDropdown, BsDropdownMenu, BsDropdownItemLink } from 'lit-element-bootstrap/components/dropdown';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class DropdownHeaderExample extends LitElement {
    
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
                    <bs-dropdown-menu show static>
                        <bs-dropdown-header>Dropdown header</bs-dropdown-header>
                        <bs-dropdown-item-link title="Action" index="0"></bs-dropdown-item-link>
                        <bs-dropdown-item-link title="Another action" index="1"></bs-dropdown-item-link>
                    </bs-dropdown-menu>
                </div>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html"><span class="nt">&lt;bs-dropdown-menu</span> <span class="na">show</span> <span class="na">static</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-dropdown-header&gt;</span>Dropdown header<span class="nt">&lt;/bs-dropdown-header&gt;</span>
    <span class="nt">&lt;bs-dropdown-item-link</span> <span class="na">title=</span><span class="s">"Action"</span> <span class="na">index=</span><span class="s">"0"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-dropdown-item-link&gt;</span>
    <span class="nt">&lt;bs-dropdown-item-link</span> <span class="na">title=</span><span class="s">"Another action"</span> <span class="na">index=</span><span class="s">"1"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-dropdown-item-link&gt;</span>
<span class="nt">&lt;/bs-dropdown-menu&gt;</span></code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('dropdown-header-example', DropdownHeaderExample);