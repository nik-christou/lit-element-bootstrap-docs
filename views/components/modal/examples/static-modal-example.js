
import { LitElement, html, css } from 'lit-element';
import { BsButton } from 'lit-element-bootstrap/components/button';
import { BsModal, BsModalBody, BsModalHeader, BsModalFooter } from 'lit-element-bootstrap/components/modal';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class StaticModalExample extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsContentCodeCss,
            BsCodeSyntaxCss,
            css`
                bs-example {
                    background-color: #fafafa;
                }
                
                bs-modal {
                    --bs-modal-position: relative;
                    --bs-modal-top: auto;
                    --bs-modal-right: auto;
                    --bs-modal-bottom: auto;
                    --bs-modal-left: auto;
                    --bs-modal-z-index: 1;
                    --bs-modal-display: block;
                    --bs-modal-opacity: 1;
                    --bs-modal-dialog-left: auto;
                    margin-right: auto;
                    margin-left: auto;
                }
            `
        ];
    }
    
    render() {
        return html`
            
            <bs-example>
                
                <bs-modal opened>
                    <bs-modal-header slot="header">
                        <h5>Modal title</h5>
                    </bs-modal-header>
                    <bs-modal-body slot="body">
                        <p>Modal body text goes here.</p>
                    </bs-modal-body>
                    <bs-modal-footer slot="footer">
                        <bs-button secondary>Close</bs-button>
                        <bs-button primary>Save changes</bs-button>
                    </bs-modal-footer>
                </bs-modal>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-modal</span> <span class="na">opened</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-modal-header</span> <span class="na">slot=</span><span class="s">"header"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;h5&gt;</span>Modal title<span class="nt">&lt;/h5&gt;</span>
    <span class="nt">&lt;/bs-modal-header&gt;</span>
    <span class="nt">&lt;bs-modal-body</span> <span class="na">slot=</span><span class="s">"body"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;p&gt;</span>Modal body text goes here.<span class="nt">&lt;/p&gt;</span>
    <span class="nt">&lt;/bs-modal-body&gt;</span>
    <span class="nt">&lt;bs-modal-footer</span> <span class="na">slot=</span><span class="s">"footer"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-button</span> <span class="na">secondary</span><span class="nt">&gt;</span>Close<span class="nt">&lt;/bs-button&gt;</span>
        <span class="nt">&lt;bs-button</span> <span class="na">primary</span><span class="nt">&gt;</span>Save changes<span class="nt">&lt;/bs-button&gt;</span>
    <span class="nt">&lt;/bs-modal-footer&gt;</span>
<span class="nt">&lt;/bs-modal&gt;</span>
</code></pre></bs-highlight>
        `;
    }
    
    firstUpdated() {
        this.addEventListener('close-button-click', event => this._handleCloseEvent(event));
    }
    
    _handleCloseEvent(event) {
        event.preventDefault();
        event.stopPropagation();
    }
};

window.customElements.define('static-modal-example', StaticModalExample);