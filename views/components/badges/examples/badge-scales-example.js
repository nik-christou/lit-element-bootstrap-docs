
import { LitElement, html } from 'lit-element';
import { BsBadge } from 'lit-element-bootstrap/components/badge';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class BadgeScalesExample extends LitElement {
    
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
                
                <h1>Example heading <bs-badge secondary>New</bs-badge></h1>
                <h2>Example heading <bs-badge secondary>New</bs-badge></h2>
                <h3>Example heading <bs-badge secondary>New</bs-badge></h3>
                <h4>Example heading <bs-badge secondary>New</bs-badge></h4>
                <h5>Example heading <bs-badge secondary>New</bs-badge></h5>
                <h6>Example heading <bs-badge secondary>New</bs-badge></h6>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;h1&gt;</span>Example heading <span class="nt">&lt;bs-badge</span> <span class="na">secondary</span><span class="nt">&gt;</span>New<span class="nt">&lt;/bs-badge&gt;</span><span class="nt">&lt;h1&gt;</span>
<span class="nt">&lt;h2&gt;</span>Example heading <span class="nt">&lt;bs-badge</span> <span class="na">secondary</span><span class="nt">&gt;</span>New<span class="nt">&lt;/bs-badge&gt;</span><span class="nt">&lt;h2&gt;</span>
<span class="nt">&lt;h3&gt;</span>Example heading <span class="nt">&lt;bs-badge</span> <span class="na">secondary</span><span class="nt">&gt;</span>New<span class="nt">&lt;/bs-badge&gt;</span><span class="nt">&lt;h3&gt;</span>
<span class="nt">&lt;h4&gt;</span>Example heading <span class="nt">&lt;bs-badge</span> <span class="na">secondary</span><span class="nt">&gt;</span>New<span class="nt">&lt;/bs-badge&gt;</span><span class="nt">&lt;h4&gt;</span>
<span class="nt">&lt;h5&gt;</span>Example heading <span class="nt">&lt;bs-badge</span> <span class="na">secondary</span><span class="nt">&gt;</span>New<span class="nt">&lt;/bs-badge&gt;</span><span class="nt">&lt;h5&gt;</span>
<span class="nt">&lt;h6&gt;</span>Example heading <span class="nt">&lt;bs-badge</span> <span class="na">secondary</span><span class="nt">&gt;</span>New<span class="nt">&lt;/bs-badge&gt;</span><span class="nt">&lt;h6&gt;</span>    
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('badge-scales-example', BadgeScalesExample);