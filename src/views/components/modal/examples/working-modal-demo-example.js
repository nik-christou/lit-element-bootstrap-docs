
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import '@lit-element-bootstrap/button';
import '@lit-element-bootstrap/modal';

class WorkingModalDemoExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <bs-button primary id="modalLauncher">Launch demo modal</bs-button primary>
                
            <bs-modal backdrop animated dismissable>
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

window.customElements.define('working-modal-demo-example', WorkingModalDemoExample);