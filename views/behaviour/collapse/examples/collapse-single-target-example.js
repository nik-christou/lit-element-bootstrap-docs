
import { LitElement, html } from 'lit-element';
import { BsCard, BsCardBody } from 'lit-element-bootstrap/components/card';
import { BsButton, BsLinkButton } from 'lit-element-bootstrap/components/button';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentTypographyCss, BsContentCodeCss } from  'lit-element-bootstrap/content';
import { BsCollapseMixin, BsCollapsable, BsCollapseToggle, BsCollapseMultiToggle } from 'lit-element-bootstrap/behaviour/collapse';

export class CollapseSingleTargetExample extends BsCollapseMixin(LitElement) {
    
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
                
                <p>
                    <bs-collapse-toggle target="collapseExample">
                        <bs-link-button primary>Link</bs-link-button>
                        <bs-button primary>Button</bs-button>
                    </bs-collapse-toggle>
                </p>
                <bs-collapsable collapsed id="collapseExample">
                    <bs-card>
                        <bs-card-body>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                        </bs-card-body>
                    </bs-card>
                </bs-collapsable>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;p&gt;</span>
    <span class="nt">&lt;bs-collapse-toggle</span> <span class="na">target=</span><span class="s">"collapseExample"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-link-button</span> <span class="na">primary</span><span class="nt">&gt;</span>Link<span class="nt">&lt;/bs-link-button&gt;</span>
        <span class="nt">&lt;bs-button</span> <span class="na">primary</span><span class="nt">&gt;</span>Button<span class="nt">&lt;/bs-button&gt;</span>
    <span class="nt">&lt;/bs-collapse-toggle&gt;</span>
<span class="nt">&lt;/p&gt;</span>
<span class="nt">&lt;bs-collapsable</span> <span class="na">collapsed</span> <span class="na">id=</span><span class="s">"collapseExample"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-card&gt;</span>
        <span class="nt">&lt;bs-card-body&gt;</span>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
        <span class="nt">&lt;/bs-card-body&gt;</span>
    <span class="nt">&lt;/bs-card&gt;</span>
<span class="nt">&lt;/bs-collapsable&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('collapse-single-target-example', CollapseSingleTargetExample);