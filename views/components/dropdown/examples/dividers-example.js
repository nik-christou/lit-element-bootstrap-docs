
import { LitElement, html, css } from 'lit-element';
import { BsClearfixCss } from 'lit-element-bootstrap/utilities';
import { BsButtonGroup } from 'lit-element-bootstrap/components/button-group';
import { BsDropdown, BsDropdownMenu, BsDropdownDivider, BsDropdownItemLink } from 'lit-element-bootstrap/components/dropdown';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class DividersExample extends LitElement {
    
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
                        <bs-dropdown-item-link title="Action" index="0"></bs-dropdown-item-link>
                        <bs-dropdown-item-link title="Another action" index="1"></bs-dropdown-item-link>
                        <bs-dropdown-item-link title="Something else here" index="2"></bs-dropdown-item-link>
                        <bs-dropdown-divider></bs-dropdown-divider>
                        <bs-dropdown-item-link title="Separated link" index="3"></bs-dropdown-item-link>
                    </bs-dropdown-menu>
                </div>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-dropdown-menu</span> <span class="na">show</span> <span class="na">static</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-dropdown-item-link</span> <span class="na">title=</span><span class="s">"Action"</span> <span class="na">index=</span><span class="s">"0"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-dropdown-item-link&gt;</span>
    <span class="nt">&lt;bs-dropdown-item-link</span> <span class="na">title=</span><span class="s">"Another Action"</span> <span class="na">index=</span><span class="s">"1"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-dropdown-item-link&gt;</span>
    <span class="nt">&lt;bs-dropdown-item-link</span> <span class="na">title=</span><span class="s">"Something else here"</span> <span class="na">index=</span><span class="s">"2"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-dropdown-item-link&gt;</span>
    <span class="nt">&lt;bs-dropdown-divider&gt;</span><span class="nt">&lt;/bs-dropdown-divider&gt;</span>
    <span class="nt">&lt;bs-dropdown-item-link</span> <span class="na">title=</span><span class="s">"Separated link"</span> <span class="na">index=</span><span class="s">"3"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-dropdown-item-link&gt;</span>    
<span class="nt">&lt;/bs-dropdown-menu&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('dividers-example', DividersExample);