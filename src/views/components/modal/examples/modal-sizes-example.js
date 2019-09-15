
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import 'lit-element-bootstrap/components/button';
import 'lit-element-bootstrap/components/modal';

class ModalSizesExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
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