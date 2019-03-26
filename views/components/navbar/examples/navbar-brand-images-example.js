
import { LitElement, html } from 'lit-element';
import { BsDisplayCss, BsVerticalAlignCss, BsBackgroundColorsCss } from 'lit-element-bootstrap/utilities';
import { BsNavbar, BsNavbarBrand, BsNavbarBrandLink } from 'lit-element-bootstrap/components/navbar';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class NavbarBrandImagesExample extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsContentCodeCss,
            BsCodeSyntaxCss,
            BsBackgroundColorsCss,
            BsDisplayCss,
            BsVerticalAlignCss
        ];
    }
    
    render() {
        return html`
            
            <bs-example>
                
                <bs-navbar navbar-light class="bg-light">
                    <bs-navbar-brand-link>
                        <img src="/views/components/navbar/examples/bootstrap-solid.svg" width="30" height="30" alt="" />
                    </bs-navbar-brand-link>
                </bs-navbar>

                <br />

                <bs-navbar navbar-light class="bg-light">
                    <bs-navbar-brand-link>
                        <img src="/views/components/navbar/examples/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="" />
                        Bootstrap
                    </bs-navbar-brand-link>
                </bs-navbar>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-navbar</span> <span class="na">navbar-light</span> <span class="na">class=</span><span class="s">"bg-light"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-navbar-brand-link&gt;</span>
        <span class="nt">&lt;img</span> <span class="na">src=</span><span class="s">"/img/bootstrap-solid.svg"</span> <span class="na">width=</span><span class="s">"30"</span> <span class="na">height=</span><span class="s">"30"</span> <span class="na">alt=</span><span class="s">""</span> <span class="nt">/&gt;</span>
    <span class="nt">&lt;/bs-navbar-brand-link&gt;</span>
<span class="nt">&lt;/bs-navbar&gt;</span>
<span class="nt">&lt;bs-navbar</span> <span class="na">navbar-light</span> <span class="na">class=</span><span class="s">"bg-light"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-navbar-brand&gt;</span>
        <span class="nt">&lt;img</span> <span class="na">src=</span><span class="s">"/img/bootstrap-solid.svg"</span> <span class="na">width=</span><span class="s">"30"</span> <span class="na">height=</span><span class="s">"30"</span> <span class="na">class=</span><span class="s">"d-inline-block align-top"</span> <span class="na">alt=</span><span class="s">""</span> <span class="nt">/&gt;</span>
        Bootstrap
    <span class="nt">&lt;/bs-navbar-brand&gt;</span>
<span class="nt">&lt;/bs-navbar&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('navbar-brand-images-example', NavbarBrandImagesExample);