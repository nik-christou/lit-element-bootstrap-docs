
import { LitElement, html } from 'lit-element';
import { BsBadge } from 'lit-element-bootstrap/components/badge';
import { BsButton } from 'lit-element-bootstrap/components/button';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class ButtonBadgeExample extends LitElement {
    
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
            
                <bs-button primary> Notifications <bs-badge light>4</bs-badge></bs-button>
            
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-button</span> <span class="na">primary</span><span class="nt">&gt;</span>Notifications <span class="nt">&lt;bs-badge</span> <span class="na">light</span><span class="nt">&gt;</span>4<span class="nt">&lt;/bs-badge&gt;</span><span class="nt">&lt;/bs-button&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('button-badge-example', ButtonBadgeExample);