
import { LitElement, html } from 'lit-element';
import { BsListGroup, BsListGroupItem } from 'lit-element-bootstrap/components/list-group';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class ActiveListGroupItemsExample extends LitElement {
    
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
                    <bs-list-group-item active>Cras justo odio</bs-list-group-item>
                    <bs-list-group-item>Dapibus ac facilisis in</bs-list-group-item>
                    <bs-list-group-item>Morbi leo risus</bs-list-group-item>
                    <bs-list-group-item>Porta ac consectetur ac</bs-list-group-item>
                    <bs-list-group-item>Vestibulum at eros</bs-list-group-item>
                </bs-list-group>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-list-group&gt;</span> 
    <span class="nt">&lt;bs-list-group-item</span> <span class="nt">active</span><span class="nt">&gt;</span>Cras justo odio<span class="nt">&lt;/bs-list-group-item&gt;</span>
    <span class="nt">&lt;bs-list-group-item&gt;</span>Dapibus ac facilisis in<span class="nt">&lt;/bs-list-group-item&gt;</span>
    <span class="nt">&lt;bs-list-group-item&gt;</span>Morbi leo risus<span class="nt">&lt;/bs-list-group-item&gt;</span>
    <span class="nt">&lt;bs-list-group-item&gt;</span>Porta ac consectetur ac<span class="nt">&lt;/bs-list-group-item&gt;</span>
    <span class="nt">&lt;bs-list-group-item&gt;</span>Vestibulum at eros<span class="nt">&lt;/bs-list-group-item&gt;</span>
<span class="nt">&lt;/bs-list-group&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('active-list-group-items-example', ActiveListGroupItemsExample);