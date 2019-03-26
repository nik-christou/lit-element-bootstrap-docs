
import { LitElement, html } from 'lit-element';
import { BsButton } from 'lit-element-bootstrap/components/button';
import { BsButtonGroup } from 'lit-element-bootstrap/components/button-group';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class VerticalButtonGroupExample extends LitElement {
    
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
                
                <bs-button-group vertical>
                    <bs-button secondary>Button</bs-button>
                    <bs-button secondary>Button</bs-button>
                    <bs-button secondary>Button</bs-button>
                    <bs-button secondary>Button</bs-button>
                    <bs-button secondary>Button</bs-button>
                    <bs-button secondary>Button</bs-button>
                </bs-button-group>
            
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-button-group</span> <span class="na">vertical</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-button</span> <span class="na">secondary</span><span class="nt">&gt;</span>Button<span class="nt">&lt;/bs-button&gt;</span>
    <span class="nt">&lt;bs-button</span> <span class="na">secondary</span><span class="nt">&gt;</span>Button<span class="nt">&lt;/bs-button&gt;</span>
    <span class="nt">&lt;bs-button</span> <span class="na">secondary</span><span class="nt">&gt;</span>Button<span class="nt">&lt;/bs-button&gt;</span>
    <span class="nt">&lt;bs-button</span> <span class="na">secondary</span><span class="nt">&gt;</span>Button<span class="nt">&lt;/bs-button&gt;</span>
    <span class="nt">&lt;bs-button</span> <span class="na">secondary</span><span class="nt">&gt;</span>Button<span class="nt">&lt;/bs-button&gt;</span>
    <span class="nt">&lt;bs-button</span> <span class="na">secondary</span><span class="nt">&gt;</span>Button<span class="nt">&lt;/bs-button&gt;</span>    
<span class="nt">&lt;/bs-button-group&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('vertical-button-group-example', VerticalButtonGroupExample);