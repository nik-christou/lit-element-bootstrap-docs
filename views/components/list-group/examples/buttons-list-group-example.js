
import { LitElement, html } from 'lit-element';
import { BsListGroupAction, BsListGroupItemActionButton } from 'lit-element-bootstrap/components/list-group';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class ButtonsListGroupExample extends LitElement {
    
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
                    <bs-list-group-item-action-button active>Cras justo odio</bs-list-group-item-action-button>
                    <bs-list-group-item-action-button>Dapibus ac facilisis in</bs-list-group-item-action-button>
                    <bs-list-group-item-action-button>Morbi leo risus</bs-list-group-item-action-button>
                    <bs-list-group-item-action-button>Porta ac consectetur ac</bs-list-group-item-action-button>
                    <bs-list-group-item-action-button disabled>Vestibulum at eros</bs-list-group-item-action-button>
                </bs-list-group-action>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-list-group-action&gt;</span> 
    <span class="nt">&lt;bs-list-group-item-action-button</span> <span class="nt">active</span><span class="nt">&gt;</span>Cras justo odio<span class="nt">&lt;/bs-list-group-item-action-button&gt;</span>
    <span class="nt">&lt;bs-list-group-item-action-button&gt;</span>Dapibus ac facilisis in<span class="nt">&lt;/bs-list-group-item-action-button&gt;</span>
    <span class="nt">&lt;bs-list-group-item-action-button&gt;</span>Morbi leo risus<span class="nt">&lt;/bs-list-group-item-action-button&gt;</span>
    <span class="nt">&lt;bs-list-group-item-action-button&gt;</span>Porta ac consectetur ac<span class="nt">&lt;/bs-list-group-item-action-button&gt;</span>
    <span class="nt">&lt;bs-list-group-item-action-button</span> <span class="nt">disabled</span><span class="nt">&gt;</span>Vestibulum at eros<span class="nt">&lt;/bs-list-group-item-action-button&gt;</span>
<span class="nt">&lt;/bs-list-group-action&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('buttons-list-group-example', ButtonsListGroupExample);