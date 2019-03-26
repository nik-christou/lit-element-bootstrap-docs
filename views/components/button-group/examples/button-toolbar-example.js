
import { LitElement, html } from 'lit-element';
import { BsSpacingCss } from 'lit-element-bootstrap/utilities';
import { BsButton } from 'lit-element-bootstrap/components/button';
import { BsButtonGroup, BsButtonToolbar } from 'lit-element-bootstrap/components/button-group';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class ButtonToolbarExample extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsContentCodeCss,
            BsCodeSyntaxCss,
            BsSpacingCss
        ];
    }
    
    render() {
        return html`
            
            <bs-example>
                
                <bs-button-toolbar>
                    <bs-button-group horizontal class="mr-2">
                        <bs-button secondary>1</bs-button>
                        <bs-button secondary>2</bs-button>
                        <bs-button secondary>3</bs-button>
                        <bs-button secondary>4</bs-button>
                    </bs-button-group>
                    <bs-button-group horizontal class="mr-2">
                        <bs-button secondary>5</bs-button>
                        <bs-button secondary>6</bs-button>
                        <bs-button secondary>7</bs-button>
                    </bs-button-group>
                    <bs-button-group horizontal class="mr-2">
                        <bs-button secondary>8</bs-button>
                    </bs-button-group>
                </bs-button-toolbar>
            
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html"><span class="nt">&lt;bs-button-toolbar&gt;</span>
    <span class="nt">&lt;bs-button-group</span> <span class="na">class=</span><span class="s">"mr-2"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-button</span> <span class="na">secondary</span><span class="nt">&gt;</span>1<span class="nt">&lt;/bs-button&gt;</span>
        <span class="nt">&lt;bs-button</span> <span class="na">secondary</span><span class="nt">&gt;</span>2<span class="nt">&lt;/bs-button&gt;</span>
        <span class="nt">&lt;bs-button</span> <span class="na">secondary</span><span class="nt">&gt;</span>3<span class="nt">&lt;/bs-button&gt;</span>
        <span class="nt">&lt;bs-button</span> <span class="na">secondary</span><span class="nt">&gt;</span>4<span class="nt">&lt;/bs-button&gt;</span>
    <span class="nt">&lt;/bs-button-group&gt;</span>
    <span class="nt">&lt;bs-button-group</span> <span class="na">class=</span><span class="s">"mr-2"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-button</span> <span class="na">secondary</span><span class="nt">&gt;</span>5<span class="nt">&lt;/bs-button&gt;</span>
        <span class="nt">&lt;bs-button</span> <span class="na">secondary</span><span class="nt">&gt;</span>6<span class="nt">&lt;/bs-button&gt;</span>
        <span class="nt">&lt;bs-button</span> <span class="na">secondary</span><span class="nt">&gt;</span>7<span class="nt">&lt;/bs-button&gt;</span>
    <span class="nt">&lt;/bs-button-group&gt;</span>
    <span class="nt">&lt;bs-button-group</span> <span class="na">class=</span><span class="s">"mr-2"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-button</span> <span class="na">secondary</span><span class="nt">&gt;</span>8<span class="nt">&lt;/bs-button&gt;</span>
    <span class="nt">&lt;/bs-button-group&gt;</span>
<span class="nt">&lt;/bs-button-toolbar&gt;</span></code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('button-toolbar-example', ButtonToolbarExample);