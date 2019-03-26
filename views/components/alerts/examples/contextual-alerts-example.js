
import { LitElement, html } from 'lit-element';
import { BsAlert } from 'lit-element-bootstrap/components/alert';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class ContextualAlertsExample extends LitElement {
    
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
                    <div slot="message">A simple primary alert—check it out!</div>
                </bs-alert>
        
                <bs-alert secondary>
                    <div slot="message">A simple primary alert—check it out!</div>
                </bs-alert>
        
                <bs-alert success>
                    <div slot="message">A simple primary alert—check it out!</div>
                </bs-alert>
        
                <bs-alert danger>
                    <div slot="message">A simple primary alert—check it out!</div>
                </bs-alert>
        
                <bs-alert warning>
                    <div slot="message">A simple primary alert—check it out!</div>
                </bs-alert>
        
                <bs-alert info>
                    <div slot="message">A simple primary alert—check it out!</div>
                </bs-alert>
        
                <bs-alert light>
                    <div slot="message">A simple primary alert—check it out!</div>
                </bs-alert>
        
                <bs-alert dark>
                    <div slot="message">A simple primary alert—check it out!</div>
                </bs-alert>
        
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html"><span class="nt">&lt;bs-alert</span> <span class="na">primary</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">slot=</span><span class="s">"message"</span><span class="nt">&gt;</span>A simple primary alert—check it out!<span class="nt">&lt;div&gt;</span>
<span class="nt">&lt;/bs-alert&gt;</span>

<span class="nt">&lt;bs-alert</span> <span class="na">secondary</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">slot=</span><span class="s">"message"</span><span class="nt">&gt;</span>A simple primary alert—check it out!<span class="nt">&lt;div&gt;</span>
<span class="nt">&lt;/bs-alert&gt;</span>

<span class="nt">&lt;bs-alert</span> <span class="na">success</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">slot=</span><span class="s">"message"</span><span class="nt">&gt;</span>A simple primary alert—check it out!<span class="nt">&lt;div&gt;</span>
<span class="nt">&lt;/bs-alert&gt;</span>

<span class="nt">&lt;bs-alert</span> <span class="na">danger</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">slot=</span><span class="s">"message"</span><span class="nt">&gt;</span>A simple primary alert—check it out!<span class="nt">&lt;div&gt;</span>
<span class="nt">&lt;/bs-alert&gt;</span>

<span class="nt">&lt;bs-alert</span> <span class="na">warning</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">slot=</span><span class="s">"message"</span><span class="nt">&gt;</span>A simple primary alert—check it out!<span class="nt">&lt;div&gt;</span>
<span class="nt">&lt;/bs-alert&gt;</span>

<span class="nt">&lt;bs-alert</span> <span class="na">info</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">slot=</span><span class="s">"message"</span><span class="nt">&gt;</span>A simple primary alert—check it out!<span class="nt">&lt;div&gt;</span>
<span class="nt">&lt;/bs-alert&gt;</span>

<span class="nt">&lt;bs-alert</span> <span class="na">light</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">slot=</span><span class="s">"message"</span><span class="nt">&gt;</span>A simple primary alert—check it out!<span class="nt">&lt;div&gt;</span>
<span class="nt">&lt;/bs-alert&gt;</span>

<span class="nt">&lt;bs-alert</span> <span class="na">dark</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">slot=</span><span class="s">"message"</span><span class="nt">&gt;</span>A simple primary alert—check it out!<span class="nt">&lt;div&gt;</span>
<span class="nt">&lt;/bs-alert&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('contextual-alerts-example', ContextualAlertsExample);