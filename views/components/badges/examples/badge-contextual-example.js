
import { LitElement, html } from 'lit-element';
import { BsBadge } from 'lit-element-bootstrap/components/badge';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class BadgeContextualExample extends LitElement {
    
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
        
                <span><bs-badge primary>Primary</bs-badge></span>
                <span><bs-badge secondary>Seconday</bs-badge></span>
                <span><bs-badge success>Success</bs-badge></span>
                <span><bs-badge info>Info</bs-badge></span>
                <span><bs-badge warning>Warining</bs-badge></span>
                <span><bs-badge danger>Danger</bs-badge></span>
                <span><bs-badge light>Light</bs-badge></span>
                <span><bs-badge dark>Dark</bs-badge></span>
            
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html"><span class="nt">&lt;span&gt;</span><span class="nt">&lt;bs-badge</span> <span class="na">primary</span><span class="nt">&gt;</span>Primary<span class="nt">&lt;/bs-badge&gt;</span><span class="nt">&lt;/span&gt;</span> 
<span class="nt">&lt;span&gt;</span><span class="nt">&lt;bs-badge</span> <span class="na">secondary</span><span class="nt">&gt;</span>Secondary<span class="nt">&lt;/bs-badge&gt;</span><span class="nt">&lt;/span&gt;</span>
<span class="nt">&lt;span&gt;</span><span class="nt">&lt;bs-badge</span> <span class="na">success</span><span class="nt">&gt;</span>Success<span class="nt">&lt;/bs-badge&gt;</span><span class="nt">&lt;/span&gt;</span>
<span class="nt">&lt;span&gt;</span><span class="nt">&lt;bs-badge</span> <span class="na">info</span><span class="nt">&gt;</span>Info<span class="nt">&lt;/bs-badge&gt;</span><span class="nt">&lt;/span&gt;</span>
<span class="nt">&lt;span&gt;</span><span class="nt">&lt;bs-badge</span> <span class="na">warning</span><span class="nt">&gt;</span>Warning<span class="nt">&lt;/bs-badge&gt;</span><span class="nt">&lt;/span&gt;</span>
<span class="nt">&lt;span&gt;</span><span class="nt">&lt;bs-badge</span> <span class="na">danger</span><span class="nt">&gt;</span>Danger<span class="nt">&lt;/bs-badge&gt;</span><span class="nt">&lt;/span&gt;</span>
<span class="nt">&lt;span&gt;</span><span class="nt">&lt;bs-badge</span> <span class="na">light</span><span class="nt">&gt;</span>Light<span class="nt">&lt;/bs-badge&gt;</span><span class="nt">&lt;/span&gt;</span>
<span class="nt">&lt;span&gt;</span><span class="nt">&lt;bs-badge</span> <span class="na">dark</span><span class="nt">&gt;</span>Dark<span class="nt">&lt;/bs-badge&gt;</span><span class="nt">&lt;/span&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('badge-contextual-example', BadgeContextualExample);