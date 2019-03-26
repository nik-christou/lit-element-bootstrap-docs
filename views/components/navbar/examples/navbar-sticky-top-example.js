
import { LitElement, html, css } from 'lit-element';
import { BsPositionCss, BsBackgroundColorsCss } from 'lit-element-bootstrap/utilities';
import { BsNavbar, BsNavbarBrand } from 'lit-element-bootstrap/components/navbar';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class NavbarStickyTopExample extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsContentCodeCss,
            BsCodeSyntaxCss,
            BsBackgroundColorsCss,
            BsPositionCss,
            css`
                bs-navbar.sticky-top {
                    position: static;
                    margin: -1rem -1rem 1rem;
                }
        
                @media (min-width: 576px) {
                    
                    bs-navbar.sticky-top {
                        margin: -1.5rem -1.5rem 1rem;
                    }
                }
            `
        ];
    }
    
    render() {
        return html`
            
            <bs-example>
                
                <bs-navbar navbar-light class="bg-light sticky-top">
                    <bs-navbar-brand-link>Sticky top</bs-navbar-brand-link>
                </bs-navbar>

            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-navbar</span> <span class="na">navbar-light</span> <span class="na">class=</span><span class="s">"bg-light sticky-top"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-navbar-brand-link&gt;</span>Fixed top<span class="nt">&lt;/bs-navbar-brand-link&gt;</span>
<span class="nt">&lt;/bs-navbar&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('navbar-sticky-top-example', NavbarStickyTopExample);