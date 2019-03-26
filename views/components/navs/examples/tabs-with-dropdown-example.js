
import { LitElement, html } from 'lit-element';
import { BsButton } from 'lit-element-bootstrap/components/button';
import { BsDropdown, BsDropdownMenu, BsDropdownDivider, BsDropdownItemLink } from 'lit-element-bootstrap/components/dropdown';
import { BsNav, BsNavItem, BsNavLink } from 'lit-element-bootstrap/components/navs';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class TabsWithDropdownExample extends LitElement {
    
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
                
                <bs-nav tabs>
                    <bs-nav-item><bs-nav-link active>Active</bs-nav-link></bs-nav-item>
                    <bs-nav-item>
                        <bs-dropdown>
                            <bs-link-button dropdown-nav-link dropdown-toggle>Dropdown</bs-link-button>
                            <bs-dropdown-menu down x-placement="bottom-start">
                                <bs-dropdown-item-link title="Action" index="0"></bs-dropdown-item-link>
                                <bs-dropdown-item-link title="Another action" index="1"></bs-dropdown-item-link>
                                <bs-dropdown-item-link title="Something else here" index="2"></bs-dropdown-item-link>
                                <bs-dropdown-divider></bs-dropdown-divider>
                                <bs-dropdown-item-link title="Separated link" index="2"></bs-dropdown-item-link>
                            </bs-dropdown-menu>
                        </bs-dropdown>
                    </bs-nav-item>
                    <bs-nav-item><bs-nav-link>Link</bs-nav-link></bs-nav-item>
                    <bs-nav-item><bs-nav-link disabled>Disabled</bs-nav-link></bs-nav-item>
                </bs-nav>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-nav</span> <span class="na">tabs</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-nav-item&gt;</span> 
        <span class="nt">&lt;bs-nav-link</span> <span class="na">active</span><span class="nt">&gt;</span>Active<span class="nt">&lt;/bs-nav-link&gt;</span>
    <span class="nt">&lt;/bs-nav-item&gt;</span>
    <span class="nt">&lt;bs-nav-item&gt;</span>
        <span class="nt">&lt;bs-nav-link&gt;</span>Link<span class="nt">&lt;/bs-nav-link&gt;</span>
    <span class="nt">&lt;/bs-nav-item&gt;</span>
    <span class="nt">&lt;bs-nav-item&gt;</span>
        <span class="nt">&lt;bs-nav-link</span> <span class="na">disabled</span><span class="nt">&gt;</span>Disabled<span class="nt">&lt;/bs-nav-link&gt;</span>
    <span class="nt">&lt;/bs-nav-item&gt;</span>
<span class="nt">&lt;/bs-nav&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('tabs-with-dropdown-example', TabsWithDropdownExample);