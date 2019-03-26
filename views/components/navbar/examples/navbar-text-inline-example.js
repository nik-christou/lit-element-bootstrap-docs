
import { LitElement, html } from 'lit-element';
import { BsBackgroundColorsCss } from 'lit-element-bootstrap/utilities';
import { BsNavbar, BsNavbarText, BsNavbarLink } from 'lit-element-bootstrap/components/navbar';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class NavbarTextInlineExample extends LitElement {
    
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
                    <bs-navbar-text>Navbar text with an inline element</bs-navbar-text>
                    <bs-navbar-link>Navbar text with an inline element</bs-navbar-link>
                </bs-navbar>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-navbar</span> <span class="na">navbar-light</span> <span class="na">class=</span><span class="s">"bg-light"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-navbar-text&gt;</span>Navbar text with an inline element<span class="nt">&lt;/bs-navbar-text&gt;</span>
    <span class="nt">&lt;bs-navbar-link&gt;</span>Navbar text with an inline element<span class="nt">&lt;/bs-navbar-link&gt;</span>
<span class="nt">&lt;/bs-navbar&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('navbar-text-inline-example', NavbarTextInlineExample);