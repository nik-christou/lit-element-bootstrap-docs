
import { LitElement, html } from 'lit-element';
import { BsSpacingCss, BsBackgroundColorsCss } from 'lit-element-bootstrap/utilities';
import { BsNavbar, BsNavbarNav, BsNavbarText, BsNavbarCollapse } from 'lit-element-bootstrap/components/navbar';
import { BsNavbarBrandLink, BsNavbarToggler, BsNavbarTogglerIcon } from 'lit-element-bootstrap/components/navbar';
import { BsNavItem, BsNavLink } from 'lit-element-bootstrap/components/navs';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class NavbarTextMixElementsExample extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsContentCodeCss,
            BsCodeSyntaxCss,
            BsBackgroundColorsCss,
            BsSpacingCss
        ];
    }
    
    render() {
        return html`
            
            <bs-example>
        
                <bs-navbar navbar-light expand-lg class="bg-light">
                    <bs-navbar-brand-link>Navbar w/ text</bs-navbar-brand-link>
                    <bs-navbar-toggler>
                        <bs-navbar-toggler-icon></bs-navbar-toggler-icon>
                    </bs-navbar-toggler>
                    <bs-navbar-collapse>
                        <bs-navbar-nav class="mr-auto">
                            <bs-nav-item><bs-nav-link active>Home</bs-nav-link></bs-nav-item>
                            <bs-nav-item><bs-nav-link>Features</bs-nav-link></bs-nav-item>
                            <bs-nav-item><bs-nav-link>Pricing</bs-nav-link></bs-nav-item>
                        </bs-navbar-nav>
                        <bs-navbar-text>Navbar text with an inline element</bs-navbar-text>
                    </bs-navbar-collapse>
                </bs-navbar>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-navbar</span> <span class="na">navbar-light</span> <span class="na">expand-lg</span> <span class="na">class=</span><span class="s">"bg-light"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-navbar-brand-link&gt;</span>Navbar w/ text<span class="nt">&lt;/bs-navbar-brand-link&gt;</span>
    <span class="nt">&lt;bs-navbar-collapse&gt;</span>
        <span class="nt">&lt;bs-navbar-nav</span> <span class="na">class=</span><span class="s">"mr-auto"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;bs-nav-item&gt;</span>
                <span class="nt">&lt;bs-nav-link</span> <span class="na">active</span><span class="nt">&gt;</span>Home<span class="nt">&lt;/bs-nav-link&gt;</span>
            <span class="nt">&lt;/bs-nav-item&gt;</span>
            <span class="nt">&lt;bs-nav-item&gt;</span>
                <span class="nt">&lt;bs-nav-link&gt;</span>Features<span class="nt">&lt;/bs-nav-link&gt;</span>
            <span class="nt">&lt;/bs-nav-item&gt;</span>
            <span class="nt">&lt;bs-nav-item&gt;</span>
                <span class="nt">&lt;bs-nav-link&gt;</span>Pricing<span class="nt">&lt;/bs-nav-link&gt;</span>
            <span class="nt">&lt;/bs-nav-item&gt;</span>
        <span class="nt">&lt;bs-navbar-nav&gt;</span>
        <span class="nt">&lt;bs-navbar-text&gt;</span>Navbar text with an inline element<span class="nt">&lt;/bs-navbar-text&gt;</span>
    <span class="nt">&lt;/bs-navbar-collapse&gt;</span>
<span class="nt">&lt;/bs-navbar&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('navbar-text-mix-elements-example', NavbarTextMixElementsExample);