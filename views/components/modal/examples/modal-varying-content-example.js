
import { LitElement, html } from 'lit-element';
import { BsForm, BsFormGroup, BsFormLabel, BsFormInput, BsFormTextarea } from 'lit-element-bootstrap/components/form';
import { BsButton } from 'lit-element-bootstrap/components/button';
import { BsModal, BsModalBody, BsModalHeader, BsModalFooter } from 'lit-element-bootstrap/components/modal';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class ModalVaryingContentExample extends LitElement {
    
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
                
                <bs-button class="modal-launcher" primary data-whatever="@mdo">Open modal for @mdo</bs-button primary>
                <bs-button class="modal-launcher" primary data-whatever="@fat">Open modal for @fat</bs-button primary>
                <bs-button class="modal-launcher" primary data-whatever="@getbootstrap">Open modal for @getbootstrap</bs-button primary>
        
                <bs-modal backdrop animated dismissable>
                    <bs-modal-header slot="header">
                        <h5>New message</h5>
                    </bs-modal-header>
                    <bs-modal-body slot="body">
                        <bs-form>
                            <bs-form-group>
                                <bs-form-label column slot="label">Recipient:</bs-form-label>
                                <bs-form-input id="recipient-name" slot="control"></bs-form-input>
                            </bs-form-group>
                            <bs-form-group>
                                <bs-form-label column slot="label">Message:</bs-form-label>
                                <bs-form-textarea id="message-text" slot="control"></bs-form-textarea>
                            </bs-form-group>
                        </bs-form>
                    </bs-modal-body>
                    <bs-modal-footer slot="footer">
                        <bs-button secondary id="closeModal">Close</bs-button>
                        <bs-button primary id="saveChanges">Save changes</bs-button>
                    </bs-modal-footer>
                </bs-modal>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-button</span> <span class="na">primary</span> <span class="na">class=</span><span class="s">"modal-launcher"</span> <span class="na">data-whatever=</span><span class="s">"@mdo"</span><span class="nt">&gt;</span>Open modal for @mdo<span class="nt">&lt;/bs-button&gt;</span>
<span class="nt">&lt;bs-button</span> <span class="na">primary</span> <span class="na">class=</span><span class="s">"modal-launcher"</span> <span class="na">data-whatever=</span><span class="s">"@fat"</span><span class="nt">&gt;</span>Open modal for @fat<span class="nt">&lt;/bs-button&gt;</span>
<span class="nt">&lt;bs-button</span> <span class="na">primary</span> <span class="na">class=</span><span class="s">"modal-launcher"</span> <span class="na">data-whatever=</span><span class="s">"@getbootstrap"</span><span class="nt">&gt;</span>Open modal for @getbootstrap<span class="nt">&lt;/bs-button&gt;</span>

<span class="nt">&lt;bs-modal</span> <span class="na">backdrop</span> <span class="na">animated</span> <span class="na">dismissable</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-modal-header</span> <span class="na">slot=</span><span class="s">"header"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;&gt;</span>New message<span class="nt">&lt;/h5&gt;</span>
    <span class="nt">&lt;/bs-modal-header&gt;</span>
    <span class="nt">&lt;bs-modal-body</span> <span class="na">slot=</span><span class="s">"body"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-form&gt;</span>
            <span class="nt">&lt;bs-form-group&gt;</span>
                <span class="nt">&lt;bs-form-label</span> <span class="na">column</span> <span class="na">slot=</span><span class="s">"label"</span><span class="nt">&gt;</span>Recipient:<span class="nt">&lt;/bs-form-label&gt;</span>
                <span class="nt">&lt;bs-form-input</span> <span class="na">id=</span><span class="s">"recipient-name"</span> <span class="na">slot=</span><span class="s">"control"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-input&gt;</span>
            <span class="nt">&lt;/bs-form-group&gt;</span>
            <span class="nt">&lt;bs-form-group&gt;</span>
                <span class="nt">&lt;bs-form-label</span> <span class="na">column</span> <span class="na">slot=</span><span class="s">"label"</span><span class="nt">&gt;</span>Message:<span class="nt">&lt;/bs-form-label&gt;</span>
                <span class="nt">&lt;bs-form-textarea</span> <span class="na">id=</span><span class="s">"message-text-name"</span> <span class="na">slot=</span><span class="s">"control"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-textarea&gt;</span>
            <span class="nt">&lt;/bs-form-group&gt;</span>
        <span class="nt">&lt;/bs-form&gt;</span>
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
        const closeModal = this.shadowRoot.querySelector('bs-button#closeModal');
        closeModal.addEventListener('bs-button-click', () => this._handleCloseModal());
        
        const modalLaunchers = this.shadowRoot.querySelectorAll('bs-button.modal-launcher');
        modalLaunchers.forEach(modalLauncher => {
            modalLauncher.addEventListener('bs-button-click', event => this._handleModalLauncher(event));
        });
    }
    
    disconnectedCallback() {
        const closeModal = this.shadowRoot.querySelector('bs-button#closeModal');
        closeModal.removeEventListener('bs-button-click', () => this._handleCloseModal());
        
        const modalLaunchers = this.shadowRoot.querySelectorAll('bs-button.modal-launcher');
        modalLaunchers.forEach(modalLauncher => {
            modalLauncher.removeEventListener('bs-button-click', event => this._handleModalLauncher(event));
        });
        
        super.disconnectedCallback();
    }
    
    _handleModalLauncher(event) {
        
        const modalLauncher = event.target;
        const recipient = modalLauncher.getAttribute('data-whatever');
        
        const modalHeaderTitle = this.shadowRoot.querySelector('bs-modal-header h5');
        modalHeaderTitle.textContent = `New message to ${recipient}`;
        
        const recipientInput = this.shadowRoot.querySelector('bs-form-input#recipient-name');
        recipientInput.value = recipient;
        
        const modal = this.shadowRoot.querySelector('bs-modal');
        
        modal.toggle();
    }
    
    _handleCloseModal() {
        
        const modal = this.shadowRoot.querySelector('bs-modal');
        
        modal.close();
    }
};

window.customElements.define('modal-varying-content-example', ModalVaryingContentExample);