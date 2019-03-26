
import { LitElement, html } from 'lit-element';
import { BsBadge } from 'lit-element-bootstrap/components/badge';
import { BsListGroup, BsListGroupBadgeItem } from 'lit-element-bootstrap/components/list-group';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class BadgesListGroupExample extends LitElement {
    
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
                    <bs-list-group-badge-item>Cras justo odio <bs-badge pill primary>14</bs-badge></bs-list-group-badge-item>
                    <bs-list-group-badge-item>Dapibus ac facilisis in <bs-badge pill primary>2</bs-badge></bs-list-group-badge-item>
                    <bs-list-group-badge-item>Morbi leo risus <bs-badge pill primary>1</bs-badge></bs-list-group-badge-item>
                </bs-list-group>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-list-group&gt;</span> 
    <span class="nt">&lt;bs-list-group-item&gt;</span>Cras justo odio <span class="nt">&lt;bs-badge</span> <span class="nt">pill</span> <span class="nt">primary</span><span class="nt">&gt;</span>14<span class="nt">&lt;/bs-badge&gt;</span><span class="nt">&lt;/bs-list-group-item&gt;</span>
    <span class="nt">&lt;bs-list-group-item</span>Dapibus ac facilisis in <span class="nt">&lt;bs-badge</span> <span class="nt">pill</span> <span class="nt">primary</span><span class="nt">&gt;</span>2<span class="nt">&lt;/bs-badge&gt;</span><span class="nt">&lt;/bs-list-group-item&gt;</span>
    <span class="nt">&lt;bs-list-group-item&gt;</span>Morbi leo risus <span class="nt">&lt;bs-badge</span> <span class="nt">pill</span> <span class="nt">primary</span><span class="nt">&gt;</span>1<span class="nt">&lt;/bs-badge&gt;</span><span class="nt">&lt;/bs-list-group-item&gt;</span>
<span class="nt">&lt;/bs-list-group&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('badges-list-group-example', BadgesListGroupExample);