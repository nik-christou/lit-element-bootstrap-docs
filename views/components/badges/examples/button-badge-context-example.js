
import { LitElement, html } from 'lit-element';
import { BsBadge } from 'lit-element-bootstrap/components/badge';
import { BsButton } from 'lit-element-bootstrap/components/button';
import { BsScreenreaderCss } from 'lit-element-bootstrap/utilities';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class ButtonBadgeContextExample extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsContentCodeCss,
            BsCodeSyntaxCss,
            BsScreenreaderCss
        ];
    }
    
    render() {
        return html`
            
            <bs-example>
            
                <bs-button primary> 
                    Profile <bs-badge light>9</bs-badge>
                    <span class="sr-only">unread messages</span>
                </bs-button>
            
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-button</span> <span class="na">primary</span><span class="nt">&gt;</span>
    Profile <span class="nt">&lt;bs-badge</span> <span class="na">light</span><span class="nt">&gt;</span>9<span class="nt">&lt;/bs-badge&gt;</span>
    <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"sr-only"</span><span class="nt">&gt;</span>unread messages<span class="nt">&lt;/span&gt;</span>
<span class="nt">&lt;/bs-button&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('button-badge-context-example', ButtonBadgeContextExample);