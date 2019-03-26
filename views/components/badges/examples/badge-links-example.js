
import { LitElement, html } from 'lit-element';
import { BsBadgeLink } from 'lit-element-bootstrap/components/badge';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class BadgeLinksExample extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsContentTypographyCss,
            BsCodeSyntaxCss
        ];
    }
    
    render() {
        return html`
            
            <bs-example>
        
                <bs-badge-link primary>Primary</bs-badge-link>
                <bs-badge-link secondary>Secondary</bs-badge-link>
                <bs-badge-link success>Success</bs-badge-link>
                <bs-badge-link info>Info</bs-badge-link>
                <bs-badge-link warning>Warning</bs-badge-link>
                <bs-badge-link danger>Danger</bs-badge-link>
                <bs-badge-link light>Light</bs-badge-link>
                <bs-badge-link dark>Dark</bs-badge-link>
            
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-badge-link</span> <span class="na">primary</span><span class="nt">&gt;</span>Primary<span class="nt">&lt;/bs-badge-link&gt;</span>
<span class="nt">&lt;bs-badge-link</span> <span class="na">secondary</span><span class="nt">&gt;</span>Secondary<span class="nt">&lt;/bs-badge-link&gt;</span>
<span class="nt">&lt;bs-badge-link</span> <span class="na">success</span><span class="nt">&gt;</span>Success<span class="nt">&lt;/bs-badge-link&gt;</span>
<span class="nt">&lt;bs-badge-link</span> <span class="na">info</span><span class="nt">&gt;</span>Info<span class="nt">&lt;/bs-badge-link&gt;</span>
<span class="nt">&lt;bs-badge-link</span> <span class="na">warning</span><span class="nt">&gt;</span>Warning<span class="nt">&lt;/bs-badge-link&gt;</span>
<span class="nt">&lt;bs-badge-link</span> <span class="na">danger</span><span class="nt">&gt;</span>Danger<span class="nt">&lt;/bs-badge-link&gt;</span>
<span class="nt">&lt;bs-badge-link</span> <span class="na">light</span><span class="nt">&gt;</span>Light<span class="nt">&lt;/bs-badge-link&gt;</span>
<span class="nt">&lt;bs-badge-link</span> <span class="na">dark</span><span class="nt">&gt;</span>Dark<span class="nt">&lt;/bs-badge-link&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('badge-links-example', BadgeLinksExample);