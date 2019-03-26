
import { LitElement, html } from 'lit-element';
import { BsListGroupAction, BsListGroupItemActionLink } from 'lit-element-bootstrap/components/list-group';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class ContextualLinksListGroupExample extends LitElement {
    
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
                
                <bs-list-group-action>
                    <bs-list-group-item-action-link>Dapibus ac facilisis in</bs-list-group-item-action-link>
                    <bs-list-group-item-action-link primary active>A simple primary list group item</bs-list-group-item-action-link>
                    <bs-list-group-item-action-link secondary>A simple secondary list group item</bs-list-group-item-action-link>
                    <bs-list-group-item-action-link success>A simple success list group item</bs-list-group-item-action-link>
                    <bs-list-group-item-action-link danger>A simple danger list group item</bs-list-group-item-action-link>
                    <bs-list-group-item-action-link warning>A simple warning list group item</bs-list-group-item-action-link>
                    <bs-list-group-item-action-link info>A simple info list group item</bs-list-group-item-action-link>
                    <bs-list-group-item-action-link light>A simple light list group item</bs-list-group-item-action-link>
                    <bs-list-group-item-action-link dark>A simple dark list group item</bs-list-group-item-action-link>
                </bs-list-group-action>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-list-group&gt;</span> 
    <span class="nt">&lt;bs-list-group-item&gt;</span>Dapibus ac facilisis in<span class="nt">&lt;/bs-list-group-item&gt;</span>
    <span class="nt">&lt;bs-list-group-item</span> <span class="nt">primary</span><span class="nt">&gt;</span>A simple primary list group item<span class="nt">&lt;/bs-list-group-item&gt;</span>
    <span class="nt">&lt;bs-list-group-item</span> <span class="nt">secondary</span><span class="nt">&gt;</span>A simple secondary list group item<span class="nt">&lt;/bs-list-group-item&gt;</span>
    <span class="nt">&lt;bs-list-group-item</span> <span class="nt">success</span><span class="nt">&gt;</span>A simple success list group item<span class="nt">&lt;/bs-list-group-item&gt;</span>
    <span class="nt">&lt;bs-list-group-item</span> <span class="nt">danger</span><span class="nt">&gt;</span>A simple danger list group item<span class="nt">&lt;/bs-list-group-item&gt;</span>
    <span class="nt">&lt;bs-list-group-item</span> <span class="nt">warning</span><span class="nt">&gt;</span>A simple warning list group item<span class="nt">&lt;/bs-list-group-item&gt;</span>
    <span class="nt">&lt;bs-list-group-item</span> <span class="nt">info</span><span class="nt">&gt;</span>A simple info list group item<span class="nt">&lt;/bs-list-group-item&gt;</span>
    <span class="nt">&lt;bs-list-group-item</span> <span class="nt">light</span><span class="nt">&gt;</span>A simple light list group item<span class="nt">&lt;/bs-list-group-item&gt;</span>
    <span class="nt">&lt;bs-list-group-item</span> <span class="nt">dark</span><span class="nt">&gt;</span>A simple dark list group item<span class="nt">&lt;/bs-list-group-item&gt;</span>
<span class="nt">&lt;/bs-list-group&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('contextual-links-list-group-example', ContextualLinksListGroupExample);