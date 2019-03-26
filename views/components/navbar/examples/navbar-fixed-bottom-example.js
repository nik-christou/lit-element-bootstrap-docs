
import { LitElement, html, css } from 'lit-element';
import { BsPositionCss, BsBackgroundColorsCss } from 'lit-element-bootstrap/utilities';
import { BsNavbar, BsNavbarBrand } from 'lit-element-bootstrap/components/navbar';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class NavbarFixedBottomExample extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsContentCodeCss,
            BsCodeSyntaxCss,
            BsBackgroundColorsCss,
            BsPositionCss,
            css`
                bs-navbar.fixed-bottom {
                    position: static;
                    margin: 1rem -1rem -1rem;
                }
        
                @media (min-width: 576px) {
                    
                    bs-navbar.fixed-bottom {
                        margin: 1rem -1.5rem -1.5rem;
                    }
                }
            `
        ];
    }
    
    render() {
        return html`
        
            <bs-example>
                
                <bs-navbar navbar-light class="bg-light fixed-bottom">
                    <bs-navbar-brand-link>Fixed bottom</bs-navbar-brand-link>
                </bs-navbar>

            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-navbar</span> <span class="na">navbar-light</span> <span class="na">class=</span><span class="s">"bg-light fixed-bottom"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-navbar-brand-link&gt;</span>Fixed top<span class="nt">&lt;/bs-navbar-brand-link&gt;</span>
<span class="nt">&lt;/bs-navbar&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('navbar-fixed-bottom-example', NavbarFixedBottomExample);