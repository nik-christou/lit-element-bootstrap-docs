
import { LitElement, html } from 'lit-element';
import { BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class CardColumnsCountExample extends LitElement {
    
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
            <bs-highlight><pre><code class="language-html" data-lang="html">
<span class="nt">&lt;style&gt;</span>
    --card-column-count: 4;
<span class="nt">&lt;/style&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('card-columns-count-example', CardColumnsCountExample);