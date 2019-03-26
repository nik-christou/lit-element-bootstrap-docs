
import { LitElement, html } from 'lit-element';
import { BsBackgroundColorsCss } from 'lit-element-bootstrap/utilities';
import { BsProgress, BsProgressBar } from 'lit-element-bootstrap/components/progress';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class ProgressMultipleBarsExample extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsContentCodeCss,
            BsCodeSyntaxCss,
            BsBackgroundColorsCss
        ];
    }

    render() {
        return html`
            
            <bs-example>
                
                <bs-progress>
                    <bs-progress-bar completed="15"></bs-progress-bar>
                    <bs-progress-bar completed="30" class="bg-success"></bs-progress-bar>
                    <bs-progress-bar completed="20" class="bg-info"></bs-progress-bar>
                </bs-progress>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-progress&gt;</span>
    <span class="nt">&lt;bs-progress-bar</span> <span class="na">completed=</span><span class="s">"15"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-progress-bar&gt;</span>
    <span class="nt">&lt;bs-progress-bar</span> <span class="na">completed=</span><span class="s">"30"</span> <span class="na">class=</span><span class="s">"bg-success"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-progress-bar&gt;</span>
    <span class="nt">&lt;bs-progress-bar</span> <span class="na">completed=</span><span class="s">"20"</span> <span class="na">class=</span><span class="s">"bg-info"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-progress-bar&gt;</span>
<span class="nt">&lt;bs-progress&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('progress-multiple-bars-example', ProgressMultipleBarsExample);