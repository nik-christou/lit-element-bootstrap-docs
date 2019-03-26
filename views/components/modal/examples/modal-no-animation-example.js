
import { LitElement, html } from 'lit-element';
import { BsButton } from 'lit-element-bootstrap/components/button';
import { BsModal, BsModalBody, BsModalHeader, BsModalFooter } from 'lit-element-bootstrap/components/modal';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class ModalNoAnimationExample extends LitElement {
    
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
                
                <bs-button primary id="modalLauncher">Launch demo modal</bs-button primary>
                
                <bs-modal backdrop dismissable>
                    <bs-modal-header slot="header">
                        <h5>Modal title</h5>
                    </bs-modal-header>
                    <bs-modal-body slot="body">
                        <p>Woohoo, you're reading this text in a modal!</p>
                    </bs-modal-body>
                    <bs-modal-footer slot="footer">
                        <bs-button secondary id="closeModal">Close</bs-button>
                        <bs-button primary id="saveChanges">Save changes</bs-button>
                    </bs-modal-footer>
                </bs-modal>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-button</span> <span class="na">primary</span> <span class="na">id=</span><span class="s">"modalLauncher"</span><span class="nt">&gt;</span>Launch demo modal<span class="nt">&lt;/bs-button&gt;</span>

<span class="nt">&lt;bs-modal</span> <span class="na">backdrop</span> <span class="na">dismissable</span><span class="nt">&gt;</span>
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
        const modal = this.shadowRoot.querySelector('bs-modal');
        const modalLauncher = this.shadowRoot.querySelector('bs-button#modalLauncher');
        const closeModal = this.shadowRoot.querySelector('bs-button#closeModal');
        
        modalLauncher.addEventListener('bs-button-click', () => this._handleModalLauncher(modal));
        closeModal.addEventListener('bs-button-click', () => this._handleCloseModal(modal));
    }
    
    _handleModalLauncher(modal) {
        modal.toggle();
    }
    
    _handleCloseModal(modal) {
        modal.close();
    }
};

window.customElements.define('modal-no-animation-example', ModalNoAnimationExample);