
import { LitElement, html } from 'lit-element';
import { BsAlert, BsAlertLink } from 'lit-element-bootstrap/components/alert';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class LinkColorExample extends LitElement {
    
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
        
                <bs-alert primary>
                    <div slot="message">A simple primary alert with <bs-alert-link primary>an example link</bs-alert-link>. Give it a click if you like.</div>
                </bs-alert>
        
                <bs-alert secondary>
                    <div slot="message">A simple primary alert with <bs-alert-link secondary>an example link</bs-alert-link>. Give it a click if you like.</div>
                </bs-alert>
        
                <bs-alert success>
                    <div slot="message">A simple primary alert with <bs-alert-link success>an example link</bs-alert-link>. Give it a click if you like.</div>
                </bs-alert>
        
                <bs-alert danger>
                    <div slot="message">A simple primary alert with <bs-alert-link danger>an example link</bs-alert-link>. Give it a click if you like.</div>
                </bs-alert>
        
                <bs-alert warning>
                    <div slot="message">A simple primary alert with <bs-alert-link warning>an example link</bs-alert-link>. Give it a click if you like.</div>
                </bs-alert>
                
                <bs-alert info>
                    <div slot="message">A simple primary alert with <bs-alert-link info>an example link</bs-alert-link>. Give it a click if you like.</div>
                </bs-alert>
        
                <bs-alert light>
                    <div slot="message">A simple primary alert with <bs-alert-link light>an example link</bs-alert-link>. Give it a click if you like.</div>
                </bs-alert>
                
                <bs-alert dark>
                    <div slot="message">A simple primary alert with <bs-alert-link dark>an example link</bs-alert-link>. Give it a click if you like.</div>
                </bs-alert>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html"><span class="nt">&lt;bs-alert</span> <span class="na">primary</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">slot=</span><span class="s">"message"</span><span class="nt">&gt;</span>A simple primary alert with <span class="nt">&lt;bs-alert-link</span> <span class="na">primary</span><span class="nt">&gt;</span>an example link<span class="nt">&lt;/bs-alert-link&gt;</span>. Give it a click if you like.<span class="nt">&lt;div&gt;</span>
<span class="nt">&lt;/bs-alert&gt;</span>

<span class="nt">&lt;bs-alert</span> <span class="na">secondary</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">slot=</span><span class="s">"message"</span><span class="nt">&gt;</span>A simple primary alert with <span class="nt">&lt;bs-alert-link</span> <span class="na">secondary</span><span class="nt">&gt;</span>an example link<span class="nt">&lt;/bs-alert-link&gt;</span>. Give it a click if you like.<span class="nt">&lt;div&gt;</span>
<span class="nt">&lt;/bs-alert&gt;</span>
        
<span class="nt">&lt;bs-alert</span> <span class="na">success</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">slot=</span><span class="s">"message"</span><span class="nt">&gt;</span>A simple primary alert with <span class="nt">&lt;bs-alert-link</span> <span class="na">success</span><span class="nt">&gt;</span>an example link<span class="nt">&lt;/bs-alert-link&gt;</span>. Give it a click if you like.<span class="nt">&lt;div&gt;</span>
<span class="nt">&lt;/bs-alert&gt;</span>
 
<span class="nt">&lt;bs-alert</span> <span class="na">danger</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">slot=</span><span class="s">"message"</span><span class="nt">&gt;</span>A simple primary alert with <span class="nt">&lt;bs-alert-link</span> <span class="na">danger</span><span class="nt">&gt;</span>an example link<span class="nt">&lt;/bs-alert-link&gt;</span>. Give it a click if you like.<span class="nt">&lt;div&gt;</span>
<span class="nt">&lt;/bs-alert&gt;</span>
        
<span class="nt">&lt;bs-alert</span> <span class="na">warning</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">slot=</span><span class="s">"message"</span><span class="nt">&gt;</span>A simple primary alert with <span class="nt">&lt;bs-alert-link</span> <span class="na">warning</span><span class="nt">&gt;</span>an example link<span class="nt">&lt;/bs-alert-link&gt;</span>. Give it a click if you like.<span class="nt">&lt;div&gt;</span>
<span class="nt">&lt;/bs-alert&gt;</span>
        
<span class="nt">&lt;bs-alert</span> <span class="na">info</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">slot=</span><span class="s">"message"</span><span class="nt">&gt;</span>A simple primary alert with <span class="nt">&lt;bs-alert-link</span> <span class="na">info</span><span class="nt">&gt;</span>an example link<span class="nt">&lt;/bs-alert-link&gt;</span>. Give it a click if you like.<span class="nt">&lt;div&gt;</span>
<span class="nt">&lt;/bs-alert&gt;</span>
        
<span class="nt">&lt;bs-alert</span> <span class="na">light</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">slot=</span><span class="s">"message"</span><span class="nt">&gt;</span>A simple primary alert with <span class="nt">&lt;bs-alert-link</span> <span class="na">light</span><span class="nt">&gt;</span>an example link<span class="nt">&lt;/bs-alert-link&gt;</span>. Give it a click if you like.<span class="nt">&lt;div&gt;</span>
<span class="nt">&lt;/bs-alert&gt;</span>        

<span class="nt">&lt;bs-alert</span> <span class="na">dark</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">slot=</span><span class="s">"message"</span><span class="nt">&gt;</span>A simple primary alert with <span class="nt">&lt;bs-alert-link</span> <span class="na">dark</span><span class="nt">&gt;</span>an example link<span class="nt">&lt;/bs-alert-link&gt;</span>. Give it a click if you like.<span class="nt">&lt;div&gt;</span>
<span class="nt">&lt;/bs-alert&gt;</span>

</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('link-color-example', LinkColorExample);