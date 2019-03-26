
import { LitElement, html, css } from 'lit-element';
import { BsTextCss } from 'lit-element-bootstrap/utilities';
import { BsCard, BsCardBody, BsCardHeader } from 'lit-element-bootstrap/components/card';
import { BsNav, BsNavItem, BsNavLink } from 'lit-element-bootstrap/components/navs';
import { BsListGroupFlush, BsListGroupItem } from 'lit-element-bootstrap/components/list-group';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class CardNavigationPillsExample extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsContentCodeCss,
            BsCodeSyntaxCss,
            BsTextCss
        ];
    }
    
    render() {
        return html`
            
            <bs-example>
                
                <bs-card class="text-center">
                    <bs-card-header slot="card-header">
                        <bs-nav pills>
                            <bs-nav-item> 
                                <bs-nav-link active>Active</bs-nav-link>
                            </bs-nav-item>
                            <bs-nav-item>
                                <bs-nav-link>Link</bs-nav-link>
                            </bs-nav-item>
                            <bs-nav-item>
                                <bs-nav-link disabled>Disabled</bs-nav-link>
                            </bs-nav-item>
                        </bs-nav>
                    </bs-card-header>
                    <bs-card-body>
                        <bs-card-title slot="card-title">
                            <h5>Special title treatment</h5>
                        </bs-card-title>
                        <bs-card-text slot="card-text">
                            <p>With supporting text below as a natural lead-in to additional content.</p>
                        </bs-card-text>
                        <bs-button primary>Go somewhere</bs-button>
                    </bs-card-body>
                </bs-card>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-card&gt;</span>
    <span class="nt">&lt;bs-card-header</span> <span class="na">slot=</span><span class="s">"card-header"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-nav</span> <span class="na">pills</span><span class="nt">&gt;</span>
            <span class="nt">&lt;bs-nav-item&gt;</span>
                <span class="nt">&lt;bs-nav-link</span> <span class="na">active</span><span class="nt">&gt;</span>Active<span class="nt">&lt;/bs-nav-link&gt;</span>
            <span class="nt">&lt;/bs-nav-item&gt;</span>
            <span class="nt">&lt;bs-nav-item&gt;</span>
                <span class="nt">&lt;bs-nav-link&gt;</span>Link<span class="nt">&lt;/bs-nav-link&gt;</span>
            <span class="nt">&lt;/bs-nav-item&gt;</span>
            <span class="nt">&lt;bs-nav-item&gt;</span>
                <span class="nt">&lt;bs-nav-link</span> <span class="na">disabled</span><span class="nt">&gt;</span>Disabled<span class="nt">&lt;/bs-nav-link&gt;</span>
            <span class="nt">&lt;/bs-nav-item&gt;</span>
        <span class="nt">&lt;/bs-nav&gt;</span>
    <span class="nt">&lt;/bs-card-header&gt;</span>
    <span class="nt">&lt;bs-card-body&gt;</span>
        <span class="nt">&lt;bs-card-title</span> <span class="na">slot=</span><span class="s">"card-title"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;h5&gt;</span>Special title treatment<span class="nt">&lt;/h5&gt;</span>
        <span class="nt">&lt;/bs-card-title&gt;</span>
        <span class="nt">&lt;bs-card-text</span> <span class="na">slot=</span><span class="s">"card-text"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;p&gt;</span>With supporting text below as a natural lead-in to additional content.<span class="nt">&lt;/p&gt;</span>
        <span class="nt">&lt;/bs-card-text&gt;</span>
        <span class="nt">&lt;bs-button</span> <span class="na">primary</span><span class="nt">&gt;</span>Go somewhere<span class="nt">&lt;/bs-button&gt;</span>
    <span class="nt">&lt;/bs-card-body&gt;</span>
<span class="nt">&lt;/bs-card&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('card-navigation-pills-example', CardNavigationPillsExample);