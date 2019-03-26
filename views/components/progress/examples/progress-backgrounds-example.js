
import { LitElement, html } from 'lit-element';
import { BsBackgroundColorsCss } from 'lit-element-bootstrap/utilities';
import { BsProgress, BsProgressBar } from 'lit-element-bootstrap/components/progress';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class ProgressBackgroundsExample extends LitElement {
    
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
                    <bs-progress-bar completed="25" class="bg-success"></bs-progress-bar>
                </bs-progress>
                
                <br />
                
                <bs-progress>
                    <bs-progress-bar completed="50" class="bg-info"></bs-progress-bar>
                </bs-progress>
                
                <br />
                
                <bs-progress>
                    <bs-progress-bar completed="75" class="bg-warning"></bs-progress-bar>
                </bs-progress>
                
                <br />
                
                <bs-progress>
                    <bs-progress-bar completed="100" class="bg-danger"></bs-progress-bar>
                </bs-progress>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-progress&gt;</span>
    <span class="nt">&lt;bs-progress-bar</span> <span class="na">completed=</span><span class="s">"25"</span> <span class="na">class=</span><span class="s">"bg-success"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-progress-bar&gt;</span>
<span class="nt">&lt;bs-progress&gt;</span>
<span class="nt">&lt;bs-progress&gt;</span>
    <span class="nt">&lt;bs-progress-bar</span> <span class="na">completed=</span><span class="s">"50"</span> <span class="na">class=</span><span class="s">"bg-info"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-progress-bar&gt;</span>
<span class="nt">&lt;bs-progress&gt;</span>
<span class="nt">&lt;bs-progress&gt;</span>
    <span class="nt">&lt;bs-progress-bar</span> <span class="na">completed=</span><span class="s">"75"</span> <span class="na">class=</span><span class="s">"bg-warning"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-progress-bar&gt;</span>
<span class="nt">&lt;bs-progress&gt;</span>
<span class="nt">&lt;bs-progress&gt;</span>
    <span class="nt">&lt;bs-progress-bar</span> <span class="na">completed=</span><span class="s">"100"</span> <span class="na">class=</span><span class="s">"bg-danger"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-progress-bar&gt;</span>
<span class="nt">&lt;bs-progress&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('progress-backgrounds-example', ProgressBackgroundsExample);