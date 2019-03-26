
import { LitElement, html } from 'lit-element';
import { BsBackgroundColorsCss } from 'lit-element-bootstrap/utilities';
import { BsNavbar, BsNavbarNav, BsNavbarCollapse } from 'lit-element-bootstrap/components/navbar';
import { BsNavbarBrandLink, BsNavbarToggler, BsNavbarTogglerIcon } from 'lit-element-bootstrap/components/navbar';
import { BsDropdown, BsDropdownMenu, BsDropdownItemLink } from 'lit-element-bootstrap/components/dropdown';
import { BsNavItem, BsNavLink } from 'lit-element-bootstrap/components/navs';
import { BsForm, BsFormInput } from 'lit-element-bootstrap/components/form';
import { BsLinkButton } from 'lit-element-bootstrap/components/button';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class NavbarNavDropdownExample extends LitElement {
    
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
        
            <bs-navbar navbar-light expand-lg class="bg-light">
                <bs-navbar-brand-link>Navbar</bs-navbar-brand-link>
                <bs-navbar-toggler>
                    <bs-navbar-toggler-icon></bs-navbar-toggler-icon>
                </bs-navbar-toggler>
                <bs-navbar-collapse>
                    <bs-navbar-nav>
                        <bs-nav-item>
                            <bs-nav-link active>Home</bs-nav-link>
                        </bs-nav-item>
                        <bs-nav-item>
                            <bs-nav-link>Features</bs-nav-link>
                        </bs-nav-item>
                        <bs-nav-item>
                            <bs-nav-link>Pricing</bs-nav-link>
                        </bs-nav-item>
                        <bs-nav-item>
                            <bs-dropdown>
                                <bs-link-button dropdown-nav-link dropdown-toggle>Dropdown link</bs-link-button>
                                <bs-dropdown-menu down x-placement="bottom-start">
                                    <bs-dropdown-item-link title="Action" index="0"></bs-dropdown-item-link>
                                    <bs-dropdown-item-link title="Another action" index="1"></bs-dropdown-item-link>
                                    <bs-dropdown-item-link title="Something else here" index="2"></bs-dropdown-item-link>
                                </bs-dropdown-menu>
                            </bs-dropdown>
                        </bs-nav-item>
                    </bs-navbar-nav>
                </bs-navbar-collapse>
            </bs-navbar>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-navbar</span> <span class="na">navbar-light</span> <span class="na">expand-lg</span> <span class="na">class=</span><span class="s">"bg-light"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-navbar-brand-link&gt;</span>Navbar<span class="nt">&lt;/bs-navbar-brand-link&gt;</span>
    <span class="nt">&lt;bs-navbar-toggler&gt;</span>
        <span class="nt">&lt;bs-navbar-toggler-icon&gt;</span><span class="nt">&lt;/bs-navbar-toggler-icon&gt;</span>
    <span class="nt">&lt;/bs-navbar-toggler&gt;</span>
    <span class="nt">&lt;bs-navbar-collapse&gt;</span>
        <span class="nt">&lt;bs-navbar-nav&gt;</span>
            <span class="nt">&lt;bs-nav-item&gt;</span>
                <span class="nt">&lt;bs-nav-link</span> <span class="na">active</span><span class="nt">&gt;</span>Home<span class="nt">&lt;/bs-nav-link&gt;</span>
            <span class="nt">&lt;/bs-nav-item&gt;</span>
            <span class="nt">&lt;bs-nav-item&gt;</span>
                <span class="nt">&lt;bs-nav-link&gt;</span>Features<span class="nt">&lt;/bs-nav-link&gt;</span>
            <span class="nt">&lt;/bs-nav-item&gt;</span>
            <span class="nt">&lt;bs-nav-item&gt;</span>
                <span class="nt">&lt;bs-nav-link&gt;</span>Pricing<span class="nt">&lt;/bs-nav-link&gt;</span>
            <span class="nt">&lt;/bs-nav-item&gt;</span>
            <span class="nt">&lt;bs-nav-item&gt;</span>
                <span class="nt">&lt;bs-dropdown&gt;</span>
                    <span class="nt">&lt;bs-link-button</span> <span class="na">dropdown-nav-link</span> <span class="na">dropdown-toggle</span><span class="nt">&gt;</span>Dropdown link<span class="nt">&lt;/bs-link-button&gt;</span>
                    <span class="nt">&lt;bs-dropdown-menu</span> <span class="na">down</span> <span class="na">x-placement=</span><span class="s">"bottom-start"</span><span class="nt">&gt;</span>
                        <span class="nt">&lt;bs-dropdown-item-link</span> <span class="na">title=</span><span class="s">"Action"</span> <span class="na">index=</span><span class="s">"0"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-dropdown-item-link&gt;</span>
                        <span class="nt">&lt;bs-dropdown-item-link</span> <span class="na">title=</span><span class="s">"Another action"</span> <span class="na">index=</span><span class="s">"1"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-dropdown-item-link&gt;</span>
                        <span class="nt">&lt;bs-dropdown-divider&gt;</span><span class="nt">&lt;/bs-dropdown-divider&gt;</span>
                        <span class="nt">&lt;bs-dropdown-item-link</span> <span class="na">title=</span><span class="s">"Something else here"</span> <span class="na">index=</span><span class="s">"2"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-dropdown-item-link&gt;</span>
                    <span class="nt">&lt;/bs-dropdown-menu&gt;</span>
                <span class="nt">&lt;/bs-dropdown&gt;</span>
            <span class="nt">&lt;/bs-nav-item&gt;</span>
        <span class="nt">&lt;bs-navbar-nav&gt;</span>
    <span class="nt">&lt;/bs-navbar-collapse&gt;</span>
<span class="nt">&lt;/bs-navbar&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('navbar-nav-dropdown-example', NavbarNavDropdownExample);