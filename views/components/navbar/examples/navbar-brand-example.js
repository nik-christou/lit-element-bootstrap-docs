
import { LitElement, html } from 'lit-element';
import { BsBackgroundColorsCss } from 'lit-element-bootstrap/utilities';
import { BsNavbar, BsNavbarBrand, BsNavbarBrandLink } from 'lit-element-bootstrap/components/navbar';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class NavbarBrandExample extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsContentCodeCss,
            BsCodeSyntaxCss,
            BsBackgroundColorsCss
        ];
    }
    
    render() {
        return html`
            
            <bs-example>
        
                <bs-navbar navbar-light class="bg-light">
                    <bs-navbar-brand-link>Navbar</bs-navbar-brand-link>
                </bs-navbar>

                <br />

                <bs-navbar navbar-light class="bg-light">
                    <bs-navbar-brand>Navbar</bs-navbar-brand>
                </bs-navbar>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-navbar</span> <span class="na">navbar-light</span> <span class="na">class=</span><span class="s">"bg-light"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-navbar-brand-link&gt;</span>Navbar<span class="nt">&lt;/bs-navbar-brand-link&gt;</span>
<span class="nt">&lt;/bs-navbar&gt;</span>
<span class="nt">&lt;bs-navbar</span> <span class="na">navbar-light</span> <span class="na">class=</span><span class="s">"bg-light"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-navbar-brand&gt;</span>Navbar<span class="nt">&lt;/bs-navbar-brand&gt;</span>
<span class="nt">&lt;/bs-navbar&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('navbar-brand-example', NavbarBrandExample);