
import { LitElement, html } from 'lit-element';
import { BsLinkButton } from 'lit-element-bootstrap/components/button';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class ButtonLinkDisabledStateExample extends LitElement {
    
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
                
                <bs-link-button disabled>Basic</bs-link-button>
                <bs-link-button primary disabled>Primary</bs-link-button>
                <bs-link-button secondary disabled>Secondary</bs-link-button>
                <bs-link-button success disabled>Success</bs-link-button>
                <bs-link-button danger disabled>Danger</bs-link-button>    
                <bs-link-button warning disabled>Warning</bs-link-button>
                <bs-link-button info disabled>Info</bs-link-button>
                <bs-link-button light disabled>Light</bs-link-button>
                <bs-link-button dark disabled>Dark</bs-link-button>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html"><span class="nt">&lt;bs-link-button</span> <span class="na">primary</span> <span class="na">disabled</span><span class="nt">&gt;</span>Primary<span class="nt">&lt;/bs-link-button&gt;</span>
<span class="nt">&lt;bs-link-button</span> <span class="na">secondary</span> <span class="na">disabled</span><span class="nt">&gt;</span>Secondary<span class="nt">&lt;/bs-link-button&gt;</span>
<span class="nt">&lt;bs-link-button</span> <span class="na">success</span> <span class="na">disabled</span><span class="nt">&gt;</span>Success<span class="nt">&lt;/bs-link-button&gt;</span>
<span class="nt">&lt;bs-link-button</span> <span class="na">danger</span> <span class="na">disabled</span><span class="nt">&gt;</span>Danger<span class="nt">&lt;/bs-link-button&gt;</span>
<span class="nt">&lt;bs-link-button</span> <span class="na">warning</span> <span class="na">disabled</span><span class="nt">&gt;</span>Warning<span class="nt">&lt;/bs-link-button&gt;</span>
<span class="nt">&lt;bs-link-button</span> <span class="na">info</span> <span class="na">disabled</span><span class="nt">&gt;</span>Info<span class="nt">&lt;/bs-link-button&gt;</span>
<span class="nt">&lt;bs-link-button</span> <span class="na">light</span> <span class="na">disabled</span><span class="nt">&gt;</span>Light<span class="nt">&lt;/bs-link-button&gt;</span>
<span class="nt">&lt;bs-link-button</span> <span class="na">dark</span> <span class="na">disabled</span><span class="nt">&gt;</span>Dark<span class="nt">&lt;/bs-link-button&gt;</span>
<span class="nt">&lt;bs-link-button</span> <span class="na">link</span> <span class="na">disabled</span><span class="nt">&gt;</span>Link<span class="nt">&lt;/bs-link-button&gt;</span></code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('button-link-disabled-state-example', ButtonLinkDisabledStateExample);