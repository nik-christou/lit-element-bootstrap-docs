
import { LitElement, html } from 'lit-element';
import { BsButton } from 'lit-element-bootstrap/components/button';
import { BsModal, BsModalBody, BsModalHeader, BsModalFooter } from 'lit-element-bootstrap/components/modal';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class ModalSizesExample extends LitElement {
    
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
                
                <bs-button primary id="large-modal-launcher">Large modal</bs-button primary>
                <bs-button primary id="small-modal-launcher">Small modal</bs-button primary>
                
                <bs-modal large backdrop animated dismissable>
                    <bs-modal-header slot="header">
                        <h5>Modal title</h5>
                    </bs-modal-header>
                    <bs-modal-body slot="body">
                        <p>Woohoo, you're reading this text in a large modal!</p>
                    </bs-modal-body>
                    <bs-modal-footer slot="footer">
                        <bs-button secondary id="close-large-modal">Close</bs-button>
                        <bs-button primary>Save changes</bs-button>
                    </bs-modal-footer>
                </bs-modal>
        
                <bs-modal small backdrop animated dismissable>
                    <bs-modal-header slot="header">
                        <h5>Modal title</h5>
                    </bs-modal-header>
                    <bs-modal-body slot="body">
                        <p>Woohoo, you're reading this text in a small modal!</p>
                    </bs-modal-body>
                    <bs-modal-footer slot="footer">
                        <bs-button secondary id="close-small-modal">Close</bs-button>
                        <bs-button primary>Save changes</bs-button>
                    </bs-modal-footer>
                </bs-modal>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-button</span> <span class="na">primary</span> <span class="na">id=</span><span class="s">"modalLauncher"</span><span class="nt">&gt;</span>Launch demo modal<span class="nt">&lt;/bs-button&gt;</span>

<span class="nt">&lt;bs-modal</span> <span class="na">dismissable</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-modal-header</span> <span class="na">slot=</span><span class="s">"header"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;h5&gt;</span>Modal title<span class="nt">&lt;/h5&gt;</span>
    <span class="nt">&lt;/bs-modal-header&gt;</span>
    <span class="nt">&lt;bs-modal-body</span> <span class="na">slot=</span><span class="s">"body"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;p&gt;</span>Woohoo, you're reading this text in a modal!<span class="nt">&lt;/p&gt;</span>
    <span class="nt">&lt;/bs-modal-body&gt;</span>
    <span class="nt">&lt;bs-modal-footer</span> <span class="na">slot=</span><span class="s">"footer"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-button</span> <span class="na">secondary</span> <span class="na">id=</span><span class="s">"closeModal"</span><span class="nt">&gt;</span>Close<span class="nt">&lt;/bs-button&gt;</span>
        <span class="nt">&lt;bs-button</span> <span class="na">primary</span> <span class="na">id=</span><span class="s">"saveChanges"</span><span class="nt">&gt;</span>Save changes<span class="nt">&lt;/bs-button&gt;</span>
    <span class="nt">&lt;/bs-modal-footer&gt;</span>
<span class="nt">&lt;/bs-modal&gt;</span>
</code></pre></bs-highlight>
        `;
    }
    
    firstUpdated() {
        const closeLargeModal = this.shadowRoot.querySelector('bs-button#close-large-modal');
        closeLargeModal.addEventListener('bs-button-click', () => this._handleCloseLargeModal());
        
        const largeModalLauncher = this.shadowRoot.querySelector('bs-button#large-modal-launcher');
        largeModalLauncher.addEventListener('bs-button-click', () => this._handleLargeModalLauncher());
        
        const smallModalLauncher = this.shadowRoot.querySelector('bs-button#small-modal-launcher');
        smallModalLauncher.addEventListener('bs-button-click', () => this._handleSmallModalLauncher());
        
        const closeSmallModal = this.shadowRoot.querySelector('bs-button#close-small-modal');
        closeSmallModal.addEventListener('bs-button-click', () => this._handleCloseSmallModal());
    }
    
    _handleLargeModalLauncher() {
        const modal = this.shadowRoot.querySelector('bs-modal[large]');
        modal.toggle();
    }
    
    _handleSmallModalLauncher() {
        const modal = this.shadowRoot.querySelector('bs-modal[small]');
        modal.toggle();
    }
    
    _handleCloseLargeModal() {
        const modal = this.shadowRoot.querySelector('bs-modal[large]');
        modal.close();
    }
    
    _handleCloseSmallModal() {
        const modal = this.shadowRoot.querySelector('bs-modal[small]');
        modal.close();
    }
};

window.customElements.define('modal-sizes-example', ModalSizesExample);