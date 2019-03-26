
import { LitElement, html } from 'lit-element';
import { BsRow, BsColumn } from 'lit-element-bootstrap/layout/grid';
import { BsCard, BsCardBody } from 'lit-element-bootstrap/components/card';
import { BsButton, BsLinkButton } from 'lit-element-bootstrap/components/button';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentTypographyCss, BsContentCodeCss } from  'lit-element-bootstrap/content';
import { BsCollapseMixin, BsCollapsable, BsCollapseToggle, BsCollapseMultiToggle } from 'lit-element-bootstrap/behaviour/collapse';

export class CollapseMultiTargetExample extends BsCollapseMixin(LitElement) {
    
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
                    <bs-collapse-toggle target="multiCollapseExample1">
                        <bs-link-button primary>Toggle first element</bs-link-button>
                    </bs-collapse-toggle>
                    <bs-collapse-toggle target="multiCollapseExample2">
                        <bs-button primary>Toggle second element</bs-button>
                    </bs-collapse-toggle>
                    <bs-collapse-multi-toggle multitarget="multi-collapse">
                        <bs-button primary>Toggle both elements</bs-button>
                    </bs-collapse-multi-toggle>
                </p>
                
                <bs-row>
                    <bs-column xs>
                        <bs-collapsable expanded id="multiCollapseExample1" class="multi-collapse">
                            <bs-card>
                                <bs-card-body>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                </bs-card-body>
                            </bs-card>
                        </bs-collapsable>
                    </bs-column>
                    <bs-column xs>
                        <bs-collapsable expanded id="multiCollapseExample2" class="multi-collapse">
                            <bs-card>
                                <bs-card-body>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                </bs-card-body>
                            </bs-card>
                        </bs-collapsable>
                    </bs-column>
                </bs-row>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;p&gt;</span>
    <span class="nt">&lt;bs-collapse-toggle</span> <span class="na">target=</span><span class="s">"multiCollapseExample1"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-link-button</span> <span class="na">primary</span><span class="nt">&gt;</span>Toggle first element<span class="nt">&lt;/bs-link-button&gt;</span>
    <span class="nt">&lt;/bs-collapse-toggle&gt;</span>
    <span class="nt">&lt;bs-collapse-toggle</span> <span class="na">target=</span><span class="s">"multiCollapseExample2"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-button</span> <span class="na">primary</span><span class="nt">&gt;</span>Toggle second element<span class="nt">&lt;/bs-button&gt;</span>
    <span class="nt">&lt;/bs-collapse-toggle&gt;</span>
    <span class="nt">&lt;bs-collapse-multi-toggle</span> <span class="na">multitarget=</span><span class="s">"multi-collapse"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-button</span> <span class="na">primary</span><span class="nt">&gt;</span>Toggle both elements<span class="nt">&lt;/bs-button&gt;</span>
    <span class="nt">&lt;/bs-collapse-multi-toggle&gt;</span>
<span class="nt">&lt;/p&gt;</span>
        
<span class="nt">&lt;bs-row&gt;</span>
    <span class="nt">&lt;bs-col</span> <span class="na">xs</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-collapsable</span> <span class="na">expanded</span> <span class="na">id=</span><span class="s">"multiCollapseExample1"</span> <span class="na">class=</span><span class="s">"multi-collapse"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;bs-card&gt;</span>
                <span class="nt">&lt;bs-card-body&gt;</span>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                <span class="nt">&lt;/bs-card-body&gt;</span>
            <span class="nt">&lt;/bs-card&gt;</span>
        <span class="nt">&lt;/bs-collapsable&gt;</span>
    <span class="nt">&lt;/bs-col&gt;</span>
    <span class="nt">&lt;bs-col</span> <span class="na">xs</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-collapsable</span> <span class="na">expanded</span> <span class="na">id=</span><span class="s">"multiCollapseExample2"</span> <span class="na">class=</span><span class="s">"multi-collapse"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;bs-card&gt;</span>
                <span class="nt">&lt;bs-card-body&gt;</span>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                <span class="nt">&lt;/bs-card-body&gt;</span>
            <span class="nt">&lt;/bs-card&gt;</span>
        <span class="nt">&lt;/bs-collapsable&gt;</span>
    <span class="nt">&lt;/bs-col&gt;</span>
<span class="nt">&lt;/bs-row&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('collapse-multi-target-example', CollapseMultiTargetExample);