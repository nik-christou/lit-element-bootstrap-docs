
import { LitElement, html } from 'lit-element';
import { BsButton } from 'lit-element-bootstrap/components/button';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class ButtonToggleExample extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsContentCodeCss,
            BsCodeSyntaxCss
        ];
    }
    
    render() {
        return html`
            
            <bs-example>
                
                <bs-button primary toggle>Single toggle</bs-button>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-button</span> <span class="na">primary</span> <span class="na">toggle</span><span class="nt">&gt;</span>Single toggle<span class="nt">&lt;/bs-button&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('button-toggle-example', ButtonToggleExample);