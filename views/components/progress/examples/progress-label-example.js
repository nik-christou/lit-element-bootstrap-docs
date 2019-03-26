
import { LitElement, html } from 'lit-element';
import { BsProgress, BsProgressBar } from 'lit-element-bootstrap/components/progress';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class ProgressLabelExample extends LitElement {
    
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
                
                <bs-progress>
                    <bs-progress-bar completed="25">25%</bs-progress-bar>
                </bs-progress>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-progress&gt;</span>
    <span class="nt">&lt;bs-progress-bar</span> <span class="na">completed=</span><span class="s">"25"</span><span class="nt">&gt;</span>25%<span class="nt">&lt;/bs-progress-bar&gt;</span>
<span class="nt">&lt;bs-progress&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('progress-label-example', ProgressLabelExample);