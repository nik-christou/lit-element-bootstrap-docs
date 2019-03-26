
import { LitElement, html } from 'lit-element';
import { BsButton } from 'lit-element-bootstrap/components/button';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class ButtonDisabledStateExample extends LitElement {
    
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
                
                <bs-button disabled>Basic</bs-button>
                <bs-button primary disabled>Primary</bs-button>
                <bs-button secondary disabled>Secondary</bs-button>
                <bs-button success disabled>Success</bs-button>
                <bs-button danger disabled>Danger</bs-button>    
                <bs-button warning disabled>Warning</bs-button>
                <bs-button info disabled>Info</bs-button>
                <bs-button light disabled>Light</bs-button>
                <bs-button dark disabled>Dark</bs-button>
                <bs-button link disabled>Link</bs-button>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html"><span class="nt">&lt;bs-button</span> <span class="na">primary</span> <span class="na">disabled</span><span class="nt">&gt;</span>Primary<span class="nt">&lt;/bs-button&gt;</span>
<span class="nt">&lt;bs-button</span> <span class="na">secondary</span> <span class="na">disabled</span><span class="nt">&gt;</span>Secondary<span class="nt">&lt;/bs-button&gt;</span>
<span class="nt">&lt;bs-button</span> <span class="na">success</span> <span class="na">disabled</span><span class="nt">&gt;</span>Success<span class="nt">&lt;/bs-button&gt;</span>
<span class="nt">&lt;bs-button</span> <span class="na">danger</span> <span class="na">disabled</span><span class="nt">&gt;</span>Danger<span class="nt">&lt;/bs-button&gt;</span>
<span class="nt">&lt;bs-button</span> <span class="na">warning</span> <span class="na">disabled</span><span class="nt">&gt;</span>Warning<span class="nt">&lt;/bs-button&gt;</span>
<span class="nt">&lt;bs-button</span> <span class="na">info</span> <span class="na">disabled</span><span class="nt">&gt;</span>Info<span class="nt">&lt;/bs-button&gt;</span>
<span class="nt">&lt;bs-button</span> <span class="na">light</span> <span class="na">disabled</span><span class="nt">&gt;</span>Light<span class="nt">&lt;/bs-button&gt;</span>
<span class="nt">&lt;bs-button</span> <span class="na">dark</span> <span class="na">disabled</span><span class="nt">&gt;</span>Dark<span class="nt">&lt;/bs-button&gt;</span>
<span class="nt">&lt;bs-button</span> <span class="na">link</span> <span class="na">disabled</span><span class="nt">&gt;</span>Link<span class="nt">&lt;/bs-button&gt;</span></code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('button-disabled-state-example', ButtonDisabledStateExample);