
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';

import 'lit-element-bootstrap/components/form';
import 'lit-element-bootstrap/components/modal';
import 'lit-element-bootstrap/components/button';

class ModalVaryingContentExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
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