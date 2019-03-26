
import { LitElement, html } from 'lit-element';
import { BsNav, BsNavItem, BsNavLink } from 'lit-element-bootstrap/components/navs';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class FillPillsNavExample extends LitElement {
    
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
                
                <bs-nav pills fill>
                    <bs-nav-item><bs-nav-link active>Active</bs-nav-link></bs-nav-item>
                    <bs-nav-item><bs-nav-link>Link</bs-nav-link></bs-nav-item>
                    <bs-nav-item><bs-nav-link>Link</bs-nav-link></bs-nav-item>
                    <bs-nav-item><bs-nav-link disabled>Disabled</bs-nav-link></bs-nav-item>
                </bs-nav>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-nav</span> <span class="na">pills</span> <span class="na">fill</span><span class="nt">&gt;</span>
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

window.customElements.define('fill-pills-nav-example', FillPillsNavExample);