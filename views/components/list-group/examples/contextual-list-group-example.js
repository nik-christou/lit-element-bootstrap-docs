
import { LitElement, html } from 'lit-element';
import { BsListGroup, BsListGroupItem } from 'lit-element-bootstrap/components/list-group';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class ContextualListGroupExample extends LitElement {
    
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
                
                <bs-list-group>
                    <bs-list-group-item>Dapibus ac facilisis in</bs-list-group-item>
                    <bs-list-group-item primary>A simple primary list group item</bs-list-group-item>
                    <bs-list-group-item secondary>A simple secondary list group item</bs-list-group-item>
                    <bs-list-group-item success>A simple success list group item</bs-list-group-item>
                    <bs-list-group-item danger>A simple danger list group item</bs-list-group-item>
                    <bs-list-group-item warning>A simple warning list group item</bs-list-group-item>
                    <bs-list-group-item info>A simple info list group item</bs-list-group-item>
                    <bs-list-group-item light>A simple light list group item</bs-list-group-item>
                    <bs-list-group-item dark>A simple dark list group item</bs-list-group-item>
                </bs-list-group>
                
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

window.customElements.define('contextual-list-group-example', ContextualListGroupExample);