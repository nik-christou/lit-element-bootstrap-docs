
import { LitElement, html } from 'lit-element';
import { BsTextCss } from 'lit-element-bootstrap/utilities';
import { BsFlexWrapCss, BsFlexDirectionCss } from 'lit-element-bootstrap/utilities/flex';
import { BsNav, BsNavItem, BsNavLink } from 'lit-element-bootstrap/components/navs';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class FlexUtilitiesNavExample extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsContentCodeCss,
            BsCodeSyntaxCss,
            BsFlexDirectionCss,
            BsFlexWrapCss,
            BsTextCss
        ];
    }
    
    render() {
        return html`
            
            <bs-example>
                
                <bs-nav pills class="flex-column flex-sm-row">
                    <bs-nav-link active class="flex-sm-fill text-sm-center">Active</bs-nav-link>
                    <bs-nav-link class="flex-sm-fill text-sm-center">Link</bs-nav-link>
                    <bs-nav-link class="flex-sm-fill text-sm-center">Link</bs-nav-link>
                    <bs-nav-link disabled class="flex-sm-fill text-sm-center">Disabled</bs-nav-link>
                </bs-nav>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-nav</span> <span class="na">pills</span> <span class="na">class=</span><span class="s">"flex-column flex-sm-row"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-nav-link</span> <span class="na">active</span> <span class="na">class=</span><span class="s">"flex-sm-fill text-sm-center"</span><span class="nt">&gt;</span>Active<span class="nt">&lt;/bs-nav-link&gt;</span>
    <span class="nt">&lt;bs-nav-link</span> <span class="na">class=</span><span class="s">"flex-sm-fill text-sm-center"</span><span class="nt">&gt;</span>Link<span class="nt">&lt;/bs-nav-link&gt;</span>
    <span class="nt">&lt;bs-nav-link</span> <span class="na">class=</span><span class="s">"flex-sm-fill text-sm-center"</span><span class="nt">&gt;</span>Link<span class="nt">&lt;/bs-nav-link&gt;</span>
    <span class="nt">&lt;bs-nav-link</span> <span class="na">disabled</span> <span class="na">class=</span><span class="s">"flex-sm-fill text-sm-center"</span><span class="nt">&gt;</span>Disabled<span class="nt">&lt;/bs-nav-link&gt;</span>
<span class="nt">&lt;/bs-nav&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('flex-utilities-nav-example', FlexUtilitiesNavExample);