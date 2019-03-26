
import { LitElement, html } from 'lit-element';
import { BsButton } from 'lit-element-bootstrap/components/button';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class ButtonOutlinesExample extends LitElement {
    
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
                
                <bs-button outline-primary>Primary</bs-button>
                <bs-button outline-secondary>Secondary</bs-button>
                <bs-button outline-success>Success</bs-button>
                <bs-button outline-danger>Danger</bs-button>
                <bs-button outline-warning>Warning</bs-button>
                <bs-button outline-info>Info</bs-button>
                <bs-button outline-light>Light</bs-button>
                <bs-button outline-dark>Dark</bs-button>
                <bs-button outline-link>Link</bs-button>
        
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html"><span class="nt">&lt;bs-button</span> <span class="na">outline-primary</span><span class="nt">&gt;</span>Primary<span class="nt">&lt;/bs-button&gt;</span>
<span class="nt">&lt;bs-button</span> <span class="na">outline-secondary</span><span class="nt">&gt;</span>Secondary<span class="nt">&lt;/bs-button&gt;</span>
<span class="nt">&lt;bs-button</span> <span class="na">outline-success</span><span class="nt">&gt;</span>Success<span class="nt">&lt;/bs-button&gt;</span>
<span class="nt">&lt;bs-button</span> <span class="na">outline-danger</span><span class="nt">&gt;</span>Danger<span class="nt">&lt;/bs-button&gt;</span>
<span class="nt">&lt;bs-button</span> <span class="na">outline-warning</span><span class="nt">&gt;</span>Warning<span class="nt">&lt;/bs-button&gt;</span>
<span class="nt">&lt;bs-button</span> <span class="na">outline-info</span><span class="nt">&gt;</span>Info<span class="nt">&lt;/bs-button&gt;</span>
<span class="nt">&lt;bs-button</span> <span class="na">outline-light</span><span class="nt">&gt;</span>Light<span class="nt">&lt;/bs-button&gt;</span>
<span class="nt">&lt;bs-button</span> <span class="na">outline-dark</span><span class="nt">&gt;</span>Dark<span class="nt">&lt;/bs-button&gt;</span>
<span class="nt">&lt;bs-button</span> <span class="na">outline-link</span><span class="nt">&gt;</span>Link<span class="nt">&lt;/bs-button&gt;</span></code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('button-outlines-example', ButtonOutlinesExample);