
import { LitElement, html, css } from 'lit-element';
import { BsLinkButton } from 'lit-element-bootstrap/components/button';
import { BsDropdown, BsDropdownMenu, BsDropdownItemLink } from 'lit-element-bootstrap/components/dropdown';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class SingleLinkDropdownExample extends LitElement {
    
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
                
                <bs-dropdown>
                    <bs-link-button secondary dropdown-toggle>Dropdown button</bs-link-button>
                    <bs-dropdown-menu down x-placement="bottom-start">
                        <bs-dropdown-item-link title="Action" index="0"></bs-dropdown-item-link>
                        <bs-dropdown-item-link title="Another action" index="1"></bs-dropdown-item-link>
                        <bs-dropdown-item-link title="Something else here" index="2"></bs-dropdown-item-link>
                    </bs-dropdown-menu>
                </bs-dropdown>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html"><span class="nt">&lt;bs-dropdown&gt;</span> 
    <span class="nt">&lt;bs-link-button</span> <span class="na">secondary</span> <span class="na">dropdown-toggle</span><span class="nt">&gt;</span>Dropdown button<span class="nt">&lt;/bs-link-button&gt;</span>
    <span class="nt">&lt;bs-dropdown-menu</span> <span class="na">down</span> <span class="na">x-placement=</span><span class="s">"bottom-start"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-dropdown-item-link</span> <span class="na">title=</span><span class="s">"Action"</span> <span class="na">index=</span><span class="s">"0"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-dropdown-item-link&gt;</span>
        <span class="nt">&lt;bs-dropdown-item-link</span> <span class="na">title=</span><span class="s">"Another action"</span> <span class="na">index=</span><span class="s">"1"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-dropdown-item-link&gt;</span>
        <span class="nt">&lt;bs-dropdown-item-link</span> <span class="na">title=</span><span class="s">"Something else here"</span> <span class="na">index=</span><span class="s">"2"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-dropdown-item-link&gt;</span>
    <span class="nt">&lt;/bs-dropdown-menu&gt;</span>
<span class="nt">&lt;/bs-dropdown&gt;</span></code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('single-link-dropdown-example', SingleLinkDropdownExample);