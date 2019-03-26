
import { LitElement, html, css } from 'lit-element';
import { BsBackgroundColorsCss } from 'lit-element-bootstrap/utilities';
import { BsNavbar } from 'lit-element-bootstrap/components/navbar';
import { BsForm, BsFormInput } from 'lit-element-bootstrap/components/form';
import { BsButton } from 'lit-element-bootstrap/components/button';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class NavbarFormButtonsExample extends LitElement {
    
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
                    <bs-form inline>
                        <bs-button outline-success>Main button</bs-button>
                        <bs-button small outline-secondary>Smaller button</bs-button>
                    </bs-form>
                </bs-navbar>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-navbar</span> <span class="na">navbar-light</span> <span class="na">class=</span><span class="s">"bg-light"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-form</span> <span class="na">inline</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-button</span> <span class="na">ouline-success</span><span class="nt">&gt;</span>Main button<span class="nt">&lt;/bs-button&gt;</span>
        <span class="nt">&lt;bs-button</span> <span class="na">small</span> <span class="na">ouline-secondary</span><span class="nt">&gt;</span>Small button<span class="nt">&lt;/bs-button&gt;</span>
    <span class="nt">&lt;/bs-form&gt;</span>
<span class="nt">&lt;/bs-navbar&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('navbar-form-buttons-example', NavbarFormButtonsExample);