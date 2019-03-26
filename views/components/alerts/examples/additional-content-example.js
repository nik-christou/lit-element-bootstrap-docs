
import { LitElement, html } from 'lit-element';
import { BsSpacingCss } from 'lit-element-bootstrap/utilities';
import { BsAlert, BsAlertHr } from 'lit-element-bootstrap/components/alert';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class AdditionalContentExample extends LitElement {
    
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
            
                <bs-alert success>
                    <h4 slot="heading">Well done!</h4>
                    <div slot="message">
                        Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
                        <bs-alert-hr success></bs-alert-hr>
                        <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                    </div>
                </bs-alert>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html"><span class="nt">&lt;bs-alert</span> <span class="na">success</span><span class="nt">&gt;</span>
    <span class="nt">&lt;h4</span> <span class="na">slot=</span><span class="s">"heading"</span><span class="nt">&gt;</span>Well done!<span class="nt">&lt;/h4&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">slot=</span><span class="s">"message"</span><span class="nt">&gt;</span>
        Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
        <span class="nt">&lt;bs-alert-hr</span> <span class="na">success</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-alert-hr&gt;</span>
        <span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"mb-0"</span><span class="nt">&gt;</span>Whenever you need to, be sure to use margin utilities to keep things nice and tidy.<span class="nt">&lt;/p&gt;</span>
    <span class="nt">&lt;/div&gt;</span>    
<span class="nt">&lt;/bs-alert&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('additional-content-example', AdditionalContentExample);