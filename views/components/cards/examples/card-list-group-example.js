
import { LitElement, html, css } from 'lit-element';
import { BsCard, BsCardBody } from 'lit-element-bootstrap/components/card';
import { BsListGroupFlush, BsListGroupItem } from 'lit-element-bootstrap/components/list-group';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class CardListGroupExample extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsContentCodeCss,
            BsCodeSyntaxCss,
            css`
                bs-card {
                    width: 18rem;
                }
            `
        ];
    }
    
    render() {
        return html`
            
            <bs-example>
                
                <bs-card>
                    <bs-list-group-flush>
                        <bs-list-group-item>Cras justo odio</bs-list-group-item>
                        <bs-list-group-item>Dapibus ac facilisis in</bs-list-group-item>
                        <bs-list-group-item>Morbi leo risus</bs-list-group-item>
                        <bs-list-group-item>Porta ac consectetur ac</bs-list-group-item>
                        <bs-list-group-item disabled>Vestibulum at eros</bs-list-group-item>
                    </bs-list-group-flush>
                </bs-card>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html"><span class="nt">&lt;bs-card&gt;</span> 
    <span class="nt">&lt;bs-list-group-flush&gt;</span>
        <span class="nt">&lt;bs-list-group-item&gt;</span>Cras justo odio<span class="nt">&lt;/bs-list-group-item&gt;</span>
        <span class="nt">&lt;bs-list-group-item&gt;</span>pibus ac facilisis in<span class="nt">&lt;/bs-list-group-item&gt;</span>
        <span class="nt">&lt;bs-list-group-item&gt;</span>Morbi leo risus<span class="nt">&lt;/bs-list-group-item&gt;</span>
        <span class="nt">&lt;bs-list-group-item&gt;</span>Porta ac consectetur ac<span class="nt">&lt;/bs-list-group-item&gt;</span>
        <span class="nt">&lt;bs-list-group-item</span> <span class="na">disabled</span><span class="nt">&gt;</span>Vestibulum at eros<span class="nt">&lt;/bs-list-group-item&gt;</span>
    <span class="nt">&lt;/bs-list-group-flush&gt;</span>
<span class="nt">&lt;/bs-card&gt;</span></code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('card-list-group-example', CardListGroupExample);