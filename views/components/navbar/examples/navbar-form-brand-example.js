
import { LitElement, html, css } from 'lit-element';
import { BsSpacingCss, BsBackgroundColorsCss } from 'lit-element-bootstrap/utilities';
import { BsNavbar, BsNavbarBrandLink } from 'lit-element-bootstrap/components/navbar';
import { BsForm, BsFormInput } from 'lit-element-bootstrap/components/form';
import { BsButton } from 'lit-element-bootstrap/components/button';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class NavbarFormBrandExample extends LitElement {
    
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
        
                <bs-navbar navbar-light class="bg-light">
                    <bs-navbar-brand-link>Navbar</bs-navbar-brand-link>
                    <bs-form inline>
                        <bs-form-input class="mr-sm-2" type="search" placeholder="Search"></bs-form-input>
                        <bs-button class="my-2 my-sm-0" outline-success action="submit">Search</bs-button>
                    </bs-form>
                </bs-navbar>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-navbar</span> <span class="na">navbar-light</span> <span class="na">expand-lg</span> <span class="na">class=</span><span class="s">"bg-light"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-navbar-brand-link&gt;</span>Navbar<span class="nt">&lt;/bs-navbar-brand-link&gt;</span>
    <span class="nt">&lt;bs-form</span> <span class="na">inline</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-form-input</span> <span class="na">type=</span><span class="s">"search"</span> <span class="na">placeholder=</span><span class="s">"Search"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-input&gt;</span>
        <span class="nt">&lt;bs-button</span> <span class="na">class=</span><span class="s">"my-2 my-sm-0"</span> <span class="na">ouline-success</span> <span class="na">action=</span><span class="s">"submit"</span><span class="nt">&gt;</span>Search<span class="nt">&lt;/bs-button&gt;</span>
    <span class="nt">&lt;/bs-form&gt;</span>
<span class="nt">&lt;/bs-navbar&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('navbar-form-brand-example', NavbarFormBrandExample);