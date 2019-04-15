
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';

import 'lit-element-bootstrap/components/modal';
import 'lit-element-bootstrap/components/button';

class ModalCenteredExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <bs-button primary id="modalLauncher">Launch demo modal</bs-button primary>
                
            <bs-modal backdrop animated centered dismissable>
                <bs-modal-header slot="header">
                    <h5>Modal title</h5>
                </bs-modal-header>
                <bs-modal-body slot="body">
                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                </bs-modal-body>
                <bs-modal-footer slot="footer">
                    <bs-button secondary id="closeModal">Close</bs-button>
                    <bs-button primary id="saveChanges">Save changes</bs-button>
                </bs-modal-footer>
            </bs-modal>
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

window.customElements.define('modal-centered-example', ModalCenteredExample);