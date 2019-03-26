
import { LitElement, html } from 'lit-element';
import { BsButton } from 'lit-element-bootstrap/components/button';
import { BsDropdown, BsDropdownMenu, BsDropdownItemButton } from 'lit-element-bootstrap/components/dropdown';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class MenuItemsExample extends LitElement {
    
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
                    <bs-button secondary dropdown-toggle>Dropdown button</bs-button>
                    <bs-dropdown-menu down x-placement="bottom-start">
                        <bs-dropdown-item-button title="Action" index="0"></bs-dropdown-item-button>
                        <bs-dropdown-item-button title="Another action" index="1"></bs-dropdown-item-button>
                        <bs-dropdown-item-button title="Something else here" index="2"></bs-dropdown-item-button>
                    </bs-dropdown-menu>
                </bs-dropdown>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html"><span class="nt">&lt;bs-dropdown&gt;</span> 
    <span class="nt">&lt;bs-button</span> <span class="na">secondary</span> <span class="na">dropdown-toggle</span><span class="nt">&gt;</span>Dropdown button<span class="nt">&lt;/bs-button&gt;</span>
    <span class="nt">&lt;bs-dropdown-menu</span> <span class="na">down</span> <span class="na">x-placement=</span><span class="s">"bottom-start"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-dropdown-item-button</span> <span class="na">title=</span><span class="s">"Action"</span> <span class="na">index=</span><span class="s">"0"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-dropdown-item-button&gt;</span>
        <span class="nt">&lt;bs-dropdown-item-button</span> <span class="na">title=</span><span class="s">"Another action"</span> <span class="na">index=</span><span class="s">"1"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-dropdown-item-button&gt;</span>
        <span class="nt">&lt;bs-dropdown-item-button</span> <span class="na">title=</span><span class="s">"Something else here"</span> <span class="na">index=</span><span class="s">"2"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-dropdown-item-button&gt;</span>
    <span class="nt">&lt;/bs-dropdown-menu&gt;</span>
<span class="nt">&lt;/bs-dropdown&gt;</span></code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('menu-items-example', MenuItemsExample);