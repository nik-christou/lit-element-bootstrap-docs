
import { LitElement, html } from 'lit-element';
import { BsButton } from 'lit-element-bootstrap/components/button';
import { BsButtonGroup } from 'lit-element-bootstrap/components/button-group';
import { BsDropdown, BsDropdownMenu, BsDropdownItemLink } from 'lit-element-bootstrap/components/dropdown';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class NestingButtonGroupExample extends LitElement {
    
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
                
                <bs-button-group horizontal>
                    <bs-button secondary>1</bs-button>
                    <bs-button secondary>2</bs-button>
                    <bs-button-group>
                        <bs-dropdown>
                            <bs-button secondary dropdown-toggle>Dropdown</bs-button>
                            <bs-dropdown-menu down x-placement="bottom-start">
                                <bs-dropdown-item-link index="0" title="Dropdown link"></bs-dropdown-item-link>
                                <bs-dropdown-item-link index="1" title="Dropdown link"></bs-dropdown-item-link>
                            </bs-dropdown-menu>
                        </bs-dropdown>
                    </bs-button-group>
                </bs-button-group>
            
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-button-group&gt;</span>
    <span class="nt">&lt;bs-button</span> <span class="na">secondary</span><span class="nt">&gt;</span>1<span class="nt">&lt;/bs-button&gt;</span>
    <span class="nt">&lt;bs-button</span> <span class="na">secondary</span><span class="nt">&gt;</span>2<span class="nt">&lt;/bs-button&gt;</span>
    <span class="nt">&lt;bs-button-group&gt;</span>
        <span class="nt">&lt;bs-dropdown&gt;</span>
            <span class="nt">&lt;bs-button</span> <span class="na">secondary</span> <span class="na">dropdown-toggle</span><span class="nt">&gt;</span>Dropdown<span class="nt">&lt;/bs-button&gt;</span>
            <span class="nt">&lt;bs-dropdown-menu</span> <span class="na">down</span> <span class="na">x-placement=</span><span class="s">"bottom-start"</span><span class="nt">&gt;</span>
                <span class="nt">&lt;bs-dropdown-item-link</span> <span class="na">index=</span><span class="s">"0"</span> <span class="na">title=</span><span class="s">"Dropdown link"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-dropdown-item-link&gt;</span>
                <span class="nt">&lt;bs-dropdown-item-link</span> <span class="na">index=</span><span class="s">"1"</span> <span class="na">title=</span><span class="s">"Dropdown link"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-dropdown-item-link&gt;</span>
            <span class="nt">&lt;/bs-dropdown-menu&gt;</span>
        <span class="nt">&lt;/bs-dropdown&gt;</span>
    <span class="nt">&lt;/bs-button-group&gt;</span>
<span class="nt">&lt;/bs-button-group&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('nesting-button-group-example', NestingButtonGroupExample);