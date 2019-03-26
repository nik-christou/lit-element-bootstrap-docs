
import { LitElement, html } from 'lit-element';
import { BsSpacingCss, BsBackgroundColorsCss } from 'lit-element-bootstrap/utilities';
import { BsNavItem, BsNavLink } from 'lit-element-bootstrap/components/navs';
import { BsForm, BsFormInput } from 'lit-element-bootstrap/components/form';
import { BsButton } from 'lit-element-bootstrap/components/button';
import { BsNavbar, BsNavbarNav, BsNavbarCollapse } from 'lit-element-bootstrap/components/navbar';
import { BsNavbarBrandLink, BsNavbarToggler, BsNavbarTogglerIcon } from 'lit-element-bootstrap/components/navbar';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class NavbarColorSchemeExample extends LitElement {
    
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
                
                <bs-navbar navbar-dark expand-lg class="bg-dark">
                    <bs-navbar-brand-link>Navbar</bs-navbar-brand-link>
                    <bs-navbar-toggler>
                        <bs-navbar-toggler-icon></bs-navbar-toggler-icon>
                    </bs-navbar-toggler>
                    <bs-navbar-collapse>
                        <bs-navbar-nav class="mr-auto">
                            <bs-nav-item><bs-nav-link active>Home</bs-nav-link></bs-nav-item>
                            <bs-nav-item><bs-nav-link>Features</bs-nav-link></bs-nav-item>
                            <bs-nav-item><bs-nav-link>Pricing</bs-nav-link></bs-nav-item>
                            <bs-nav-item><bs-nav-link>About</bs-nav-link></bs-nav-item>
                        </bs-navbar-nav>
                        <bs-form inline>
                            <bs-form-input class="mr-sm-2" type="search" placeholder="Search"></bs-form-input>
                            <bs-button class="my-2 my-sm-0" outline-info action="submit">Search</bs-button>
                        </bs-form>
                    </bs-navbar-collapse>
                </bs-navbar>
                
                <br />
                
                <bs-navbar navbar-dark expand-lg class="bg-primary">
                    <bs-navbar-brand-link>Navbar</bs-navbar-brand-link>
                    <bs-navbar-toggler>
                        <bs-navbar-toggler-icon></bs-navbar-toggler-icon>
                    </bs-navbar-toggler>
                    <bs-navbar-collapse>
                        <bs-navbar-nav class="mr-auto">
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
                                <bs-nav-link>About</bs-nav-link>
                            </bs-nav-item>
                        </bs-navbar-nav>
                        <bs-form inline>
                            <bs-form-input class="mr-sm-2" type="search" placeholder="Search"></bs-form-input>
                            <bs-button class="my-2 my-sm-0" outline-light action="submit">Search</bs-button>
                        </bs-form>
                    </bs-navbar-collapse>
                </bs-navbar>
                
                <br />
        
                <bs-navbar navbar-light expand-lg style="background-color: #e3f2fd;">
                    <bs-navbar-brand-link>Navbar</bs-navbar-brand-link>
                    <bs-navbar-toggler>
                        <bs-navbar-toggler-icon></bs-navbar-toggler-icon>
                    </bs-navbar-toggler>
                    <bs-navbar-collapse>
                        <bs-navbar-nav class="mr-auto">
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
                                <bs-nav-link>About</bs-nav-link>
                            </bs-nav-item>
                        </bs-navbar-nav>
                        <bs-form inline>
                            <bs-form-input class="mr-sm-2" type="search" placeholder="Search"></bs-form-input>
                            <bs-button class="my-2 my-sm-0" outline-primary action="submit">Search</bs-button>
                        </bs-form>
                    </bs-navbar-collapse>
                </bs-navbar>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-navbar</span> <span class="na">navbar-dark</span> <span class="na">expand-lg</span> <span class="na">class=</span><span class="s">"bg-dark"</span><span class="nt">&gt;</span> <span class="nt">&lt;!--</span> Navbar content <span class="nt">--&gt;</span> <span class="nt">&lt;/bs-navbar&gt;</span>

<span class="nt">&lt;bs-navbar</span> <span class="na">navbar-dark</span> <span class="na">expand-lg</span> <span class="na">class=</span><span class="s">"bg-primary"</span><span class="nt">&gt;</span> <span class="nt">&lt;!--</span> Navbar content <span class="nt">--&gt;</span> <span class="nt">&lt;/bs-navbar&gt;</span>

<span class="nt">&lt;bs-navbar</span> <span class="na">navbar-light</span> <span class="na">expand-lg</span> <span class="na">style=</span><span class="s">"background-color: #e3f2fd;"</span><span class="nt">&gt;</span> <span class="nt">&lt;!--</span> Navbar content <span class="nt">--&gt;</span> <span class="nt">&lt;/bs-navbar&gt;</span>
</code></pre></bs-highlight>`;
    }
};

window.customElements.define('navbar-color-scheme-example', NavbarColorSchemeExample);