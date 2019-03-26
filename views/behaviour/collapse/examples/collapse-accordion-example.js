
import { LitElement, html } from 'lit-element';
import { BsButton } from 'lit-element-bootstrap/components/button';
import { BsSpacingCss } from 'lit-element-bootstrap/utilities';
import { BsCard, BsCardBody, BsCardHeader } from 'lit-element-bootstrap/components/card';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsAccordion, BsCollapsable, BsCollapseToggle } from 'lit-element-bootstrap/behaviour/collapse';
import { BsContentRebootCss, BsContentTypographyCss, BsContentCodeCss } from  'lit-element-bootstrap/content';

export class CollapseAccordionExample extends LitElement {
    
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
                
                <bs-accordion>
                    <bs-card>
                        <bs-card-header slot="card-header">
                            <bs-collapse-toggle target="collapseOne">
                                <h5 class="mb-0">
                                    <bs-button link>Collapsible Group Item #1</bs-button>
                                </h5>
                            </bs-collapse-toggle>
                        </bs-card-header>
                        <bs-collapsable collapsed id="collapseOne">
                            <bs-card-body>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </bs-card-body>
                        </bs-collapsable>
                    </bs-card>
                    <bs-card>
                        <bs-card-header slot="card-header">
                            <bs-collapse-toggle target="collapseTwo">
                                <h5 class="mb-0">
                                    <bs-button link>Collapsible Group Item #2</bs-button>
                                </h5>
                            </bs-collapse-toggle>
                        </bs-card-header>
                        <bs-collapsable collapsed id="collapseTwo">
                            <bs-card-body>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </bs-card-body>
                        </bs-collapsable>
                    </bs-card>
                    <bs-card>
                        <bs-card-header slot="card-header">
                            <bs-collapse-toggle target="collapseThree">
                                <h5 class="mb-0">
                                    <bs-button link>Collapsible Group Item #3</bs-button>
                                </h5>
                            </bs-collapse-toggle>
                        </bs-card-header>
                        <bs-collapsable collapsed id="collapseThree">
                            <bs-card-body>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </bs-card-body>
                        </bs-collapsable>
                    </bs-card>
                </bs-accordion>
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-accordion&gt;</span>
    <span class="nt">&lt;bs-card&gt;</span>
        <span class="nt">&lt;bs-card-header</span> <span class="na">slot=</span><span class="s">"card-header"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;bs-collapse-toggle</span> <span class="na">target=</span><span class="s">"collapseOne"</span><span class="nt">&gt;</span>
                <span class="nt">&lt;h5</span> <span class="na">class=</span><span class="s">"mb-0"</span><span class="nt">&gt;</span>
                    <span class="nt">&lt;bs-button</span> <span class="na">link</span><span class="nt">&gt;</span>Collapsible Group Item #1<span class="nt">&lt;/bs-button&gt;</span>
                <span class="nt">&lt;/h5&gt;</span>
            <span class="nt">&lt;/bs-collapse-toggle&gt;</span>
        <span class="nt">&lt;/bs-card-header&gt;</span>
        <span class="nt">&lt;bs-collapsable</span> <span class="na">id=</span><span class="s">"collapseOne"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;bs-card-body&gt;</span>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            <span class="nt">&lt;bs-card-body&gt;</span>
        <span class="nt">&lt;/bs-collapsable&gt;</span>
    <span class="nt">&lt;/bs-card&gt;</span>
    <span class="nt">&lt;bs-card&gt;</span>
        <span class="nt">&lt;bs-card-header</span> <span class="na">slot=</span><span class="s">"card-header"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;bs-collapse-toggle</span> <span class="na">target=</span><span class="s">"collapseTwo"</span><span class="nt">&gt;</span>
                <span class="nt">&lt;h5</span> <span class="na">class=</span><span class="s">"mb-0"</span><span class="nt">&gt;</span>
                    <span class="nt">&lt;bs-button</span> <span class="na">link</span><span class="nt">&gt;</span>Collapsible Group Item #2<span class="nt">&lt;/bs-button&gt;</span>
                <span class="nt">&lt;/h5&gt;</span>
            <span class="nt">&lt;/bs-collapse-toggle&gt;</span>
        <span class="nt">&lt;/bs-card-header&gt;</span>
        <span class="nt">&lt;bs-collapsable</span> <span class="na">id=</span><span class="s">"collapseTwo"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;bs-card-body&gt;</span>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            <span class="nt">&lt;bs-card-body&gt;</span>
        <span class="nt">&lt;/bs-collapsable&gt;</span>
    <span class="nt">&lt;/bs-card&gt;</span>
    <span class="nt">&lt;bs-card&gt;</span>
        <span class="nt">&lt;bs-card-header</span> <span class="na">slot=</span><span class="s">"card-header"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;bs-collapse-toggle</span> <span class="na">target=</span><span class="s">"collapseThree"</span><span class="nt">&gt;</span>
                <span class="nt">&lt;h5</span> <span class="na">class=</span><span class="s">"mb-0"</span><span class="nt">&gt;</span>
                    <span class="nt">&lt;bs-button</span> <span class="na">link</span><span class="nt">&gt;</span>Collapsible Group Item #3<span class="nt">&lt;/bs-button&gt;</span>
                <span class="nt">&lt;/h5&gt;</span>
            <span class="nt">&lt;/bs-collapse-toggle&gt;</span>
        <span class="nt">&lt;/bs-card-header&gt;</span>
        <span class="nt">&lt;bs-collapsable</span> <span class="na">id=</span><span class="s">"collapseThree"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;bs-card-body&gt;</span>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            <span class="nt">&lt;bs-card-body&gt;</span>
        <span class="nt">&lt;/bs-collapsable&gt;</span>
    <span class="nt">&lt;/bs-card&gt;</span>
<span class="nt">&lt;/bs-accordion&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('collapse-accordion-example', CollapseAccordionExample);