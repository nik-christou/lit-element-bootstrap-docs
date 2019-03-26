
import { LitElement, html, css } from 'lit-element';
import { BsButton } from 'lit-element-bootstrap/components/button';
import { BsButtonGroup } from 'lit-element-bootstrap/components/button-group';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class SizingButtonGroupExample extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsContentCodeCss,
            BsCodeSyntaxCss,
            css`
                bs-button-group {
                    margin-top: 0.25rem;
                    margin-bottom: 0.25rem;
                }
            `
        ];
    }
    
    render() {
        return html`
            
            <bs-example>
                
                <bs-button-group horizontal large>
                    <bs-button secondary>Left</bs-button>
                    <bs-button secondary>Middle</bs-button>
                    <bs-button secondary>Right</bs-button>
                </bs-button-group>
        
                <br />
                
                <bs-button-group horizontal>
                    <bs-button secondary>Left</bs-button>
                    <bs-button secondary>Middle</bs-button>
                    <bs-button secondary>Right</bs-button>
                </bs-button-group>
                
                <br />
                
                <bs-button-group horizontal small>
                    <bs-button secondary>Left</bs-button>
                    <bs-button secondary>Middle</bs-button>
                    <bs-button secondary>Right</bs-button>
                </bs-button-group>
            
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-button-group</span> <span class="na">large</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-button</span> <span class="na">secondary</span><span class="nt">&gt;</span>Left<span class="nt">&lt;/bs-button&gt;</span>
    <span class="nt">&lt;bs-button</span> <span class="na">secondary</span><span class="nt">&gt;</span>Middle<span class="nt">&lt;/bs-button&gt;</span>
    <span class="nt">&lt;bs-button</span> <span class="na">secondary</span><span class="nt">&gt;</span>Right<span class="nt">&lt;/bs-button&gt;</span>
<span class="nt">&lt;/bs-button-group&gt;</span>

<span class="nt">&lt;bs-button-group&gt;</span> 
    <span class="nt">&lt;bs-button</span> <span class="na">secondary</span><span class="nt">&gt;</span>Left<span class="nt">&lt;/bs-button&gt;</span>
    <span class="nt">&lt;bs-button</span> <span class="na">secondary</span><span class="nt">&gt;</span>Middle<span class="nt">&lt;/bs-button&gt;</span>
    <span class="nt">&lt;bs-button</span> <span class="na">secondary</span><span class="nt">&gt;</span>Right<span class="nt">&lt;/bs-button&gt;</span>
<span class="nt">&lt;/bs-button-group&gt;</span>
        
<span class="nt">&lt;bs-button-group</span> <span class="na">small</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-button</span> <span class="na">secondary</span><span class="nt">&gt;</span>Left<span class="nt">&lt;/bs-button&gt;</span>
    <span class="nt">&lt;bs-button</span> <span class="na">secondary</span><span class="nt">&gt;</span>Middle<span class="nt">&lt;/bs-button&gt;</span>
    <span class="nt">&lt;bs-button</span> <span class="na">secondary</span><span class="nt">&gt;</span>Right<span class="nt">&lt;/bs-button&gt;</span>
<span class="nt">&lt;/bs-button-group&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('sizing-button-group-example', SizingButtonGroupExample);