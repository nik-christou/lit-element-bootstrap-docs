
import { LitElement, css } from 'lit-element';
import { BsSpacingCss } from '@lit-element-bootstrap/utilities';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import '@lit-element-bootstrap/layout';
import '@lit-element-bootstrap/modal';
import '@lit-element-bootstrap/button';

class ModalGridExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsSpacingCss,
            css`
                bs-column[demo] {
                    padding-top: 0.75rem;
                    padding-bottom: 0.75rem;
                    background-color: rgba(86,61,124,0.15);
                    border: 1px solid rgba(86,61,124,0.2);
                }
                
                bs-row + bs-row {
                    margin-top: 1rem;
                }
            `
        ];
    }
    
    _getExample() {
        return `
            <bs-button primary id="modalLauncher">Launch demo modal</bs-button primary>
                
            <bs-modal backdrop animated dismissable>
                <bs-modal-header slot="header">
                    <h5>Modal title</h5>
                </bs-modal-header>
                <bs-modal-body slot="body">
                    <bs-container fluid>
                        <bs-row>
                            <bs-column demo md-4>md-4</bs-column>
                            <bs-column demo md-4 class="ml-auto">md-4 .ml-auto</bs-column>
                        </bs-row>
                        <bs-row>
                            <bs-column demo md-3 class="ml-auto">md-3 .ml-auto</bs-column>
                            <bs-column demo md-2 class="ml-auto">md-2 .ml-auto</bs-column>
                        </bs-row>
                        <bs-row>
                            <bs-column demo md-6 class="ml-auto">md-6 .ml-auto</bs-column>
                        </bs-row>
                        <bs-row>
                            <bs-column demo sm-9>
                                Level 1: sm-9
                                <bs-row>
                                    <bs-column demo xs-8 sm-6>Level 2: xs-8 sm-6</bs-column>
                                    <bs-column demo xs-8 sm-6>Level 2: xs-8 sm-6</bs-column>
                                </bs-row>
                            </bs-column>
                        </bs-row>
                    </bs-container>
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

window.customElements.define('modal-grid-example', ModalGridExample);