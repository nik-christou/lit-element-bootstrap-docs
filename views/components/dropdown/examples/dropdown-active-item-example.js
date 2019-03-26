
import { LitElement, html } from 'lit-element';
import { BsClearfixCss } from 'lit-element-bootstrap/utilities';
import { BsDropdownMenu, BsDropdownItemLink } from 'lit-element-bootstrap/components/dropdown';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class DropdownActiveItemExample extends LitElement {
    
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
                        <bs-dropdown-item-link title="Regular link" index="0"></bs-dropdown-item-link>
                        <bs-dropdown-item-link active title="Active link" index="1"></bs-dropdown-item-link>
                        <bs-dropdown-item-link title="Another link" index="2"></bs-dropdown-item-link>
                    </bs-dropdown-menu>
                </div>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-dropdown-menu</span> <span class="na">show</span> <span class="na">static</span> <span class="na">x-placement=</span><span class="s">"bottom-start"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-dropdown-item-link</span> <span class="na">title=</span><span class="s">"Regular link"</span> <span class="na">index=</span><span class="s">"0"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-dropdown-item-link&gt;</span>
    <span class="nt">&lt;bs-dropdown-item-link</span> <span class="na">active</span> <span class="na">title=</span><span class="s">"Active link"</span> <span class="na">index=</span><span class="s">"1"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-dropdown-item-link&gt;</span>
    <span class="nt">&lt;bs-dropdown-item-link</span> <span class="na">title=</span><span class="s">"Another link"</span> <span class="na">index=</span><span class="s">"2"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-dropdown-item-link&gt;</span>
<span class="nt">&lt;/bs-dropdown-menu&gt;</span></code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('dropdown-active-item-example', DropdownActiveItemExample);