
import { LitElement, html } from 'lit-element';
import { BsAlert, BsAlertDismiss } from 'lit-element-bootstrap/components/alert';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class DismissingAlertExample extends LitElement {
    
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
        
                <bs-alert warning dismissable fade show>
                    <div slot="message">
                        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                    </div>
                    <bs-alert-dismiss slot="dismiss"></bs-alert-dismiss>
                </bs-alert>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html"><span class="nt">&lt;bs-alert</span> <span class="na">warning</span> <span class="na">dismissable</span> <span class="na">fade</span> <span class="na">show</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">slot=</span><span class="s">"message"</span><span class="nt">&gt;</span> 
        <span class="nt">&lt;strong&gt;</span>Holy guacamole!<span class="nt">&lt;/strong&gt;</span> You should check in on some of those fields below.
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;bs-alert-dismiss</span> <span class="na">slot=</span><span class="s">"dismiss"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-alert-dismiss&gt;</span>
<span class="nt">&lt;/bs-alert&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('dismissing-alert-example', DismissingAlertExample);