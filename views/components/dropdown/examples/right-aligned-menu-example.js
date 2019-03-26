
import { LitElement, html } from 'lit-element';
import { BsButton } from 'lit-element-bootstrap/components/button';
import { BsButtonGroup } from 'lit-element-bootstrap/components/button-group';
import { BsDropdown, BsDropdownMenu, BsDropdownDivider, BsDropdownItemLink } from 'lit-element-bootstrap/components/dropdown';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class RightAlignedMenuExample extends LitElement {
    
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
                
                <bs-button-group>
                    <bs-dropdown>
                        <bs-button secondary dropdown-toggle>Right aligned menu</bs-button>
                        <bs-dropdown-menu down align-right x-placement="bottom-end">
                            <bs-dropdown-item-link title="Action" index="0"></bs-dropdown-item-link>
                            <bs-dropdown-item-link title="Another action" index="1"></bs-dropdown-item-link>
                            <bs-dropdown-item-link title="Something else here" index="2"></bs-dropdown-item-link>
                        </bs-dropdown-menu>
                    </bs-dropdown>
                </bs-button-group>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html"><span class="nt">&lt;bs-button-group&gt;</span> 
    <span class="nt">&lt;bs-dropdown&gt;</span> 
        <span class="nt">&lt;bs-button</span> <span class="na">secondary</span> <span class="na">dropdown-toggle</span> <span class="na">dropdown-toggle-split</span><span class="nt">&gt;</span>Right aligned menu<span class="nt">&lt;/bs-button&gt;</span>
        <span class="nt">&lt;bs-dropdown-menu</span> <span class="na">down</span> <span class="na">align-right</span> <span class="na">x-placement=</span><span class="s">"bottom-end"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;bs-dropdown-item-link</span> <span class="na">title=</span><span class="s">"Action"</span> <span class="na">index=</span><span class="s">"0"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-dropdown-item-link&gt;</span>
            <span class="nt">&lt;bs-dropdown-item-link</span> <span class="na">title=</span><span class="s">"Another action"</span> <span class="na">index=</span><span class="s">"1"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-dropdown-item-link&gt;</span>
            <span class="nt">&lt;bs-dropdown-item-link</span> <span class="na">title=</span><span class="s">"Something else here"</span> <span class="na">index=</span><span class="s">"2"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-dropdown-item-link&gt;</span>
        <span class="nt">&lt;/bs-dropdown-menu&gt;</span>
    <span class="nt">&lt;/bs-dropdown&gt;</span>
<span class="nt">&lt;/bs-button-group&gt;</span></code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('right-aligned-menu-example', RightAlignedMenuExample);
