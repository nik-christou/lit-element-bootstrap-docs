
import { LitElement, html } from 'lit-element';
import { BsListGroupFlush, BsListGroupItem } from 'lit-element-bootstrap/components/list-group';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class FlushListGroupExample extends LitElement {
    
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
                
                <bs-list-group-flush>
                    <bs-list-group-item>Cras justo odio</bs-list-group-item>
                    <bs-list-group-item active>Dapibus ac facilisis in</bs-list-group-item>
                    <bs-list-group-item>Morbi leo risus</bs-list-group-item>
                    <bs-list-group-item>Porta ac consectetur ac</bs-list-group-item>
                    <bs-list-group-item disabled>Vestibulum at eros</bs-list-group-item>
                </bs-list-group-flush>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-list-group-flush&gt;</span>
    <span class="nt">&lt;bs-list-group-item&gt;</span>Cras justo odio<span class="nt">&lt;/bs-list-group-item&gt;</span>
    <span class="nt">&lt;bs-list-group-item&gt;</span>Dapibus ac facilisis in<span class="nt">&lt;/bs-list-group-item&gt;</span>
    <span class="nt">&lt;bs-list-group-item&gt;</span>Morbi leo risus<span class="nt">&lt;/bs-list-group-item&gt;</span>
    <span class="nt">&lt;bs-list-group-item&gt;</span>Porta ac consectetur ac<span class="nt">&lt;/bs-list-group-item&gt;</span>
    <span class="nt">&lt;bs-list-group-item&gt;</span>Vestibulum at eros<span class="nt">&lt;/bs-list-group-item&gt;</span>
<span class="nt">&lt;/bs-list-group-flush&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('flush-list-group-example', FlushListGroupExample);