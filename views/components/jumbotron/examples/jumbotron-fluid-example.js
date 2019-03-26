
import { LitElement, html } from 'lit-element';
import { BsContainer } from 'lit-element-bootstrap/layout/grid';
import { BsJumbotron } from 'lit-element-bootstrap/components/jumbotron';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class JumbotronFluidExample extends LitElement {
    
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
                
                <bs-jumbotron fluid>
                    <bs-container>
                        <h1 class="display-4">Fluid jumbotron</h1>
                        <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                    </bs-container>
                </bs-jumbotron>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-jumbotron</span> <span class="na">fluid</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-container&gt;</span>
        <span class="nt">&lt;h1</span> <span class="na">class=</span><span class="s">"display-4"</span><span class="nt">&gt;</span>HFluid jumbotron<span class="nt">&lt;/h1&gt;</span>
        <span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"lead"</span><span class="nt">&gt;</span>This is a modified jumbotron that occupies the entire horizontal space of its parent.<span class="nt">&lt;/p&gt;</span>
    <span class="nt">&lt;/bs-container&gt;</span>
<span class="nt">&lt;/bs-jumbotron&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('jumbotron-fluid-example', JumbotronFluidExample);