
import { LitElement, css } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';

import 'lit-element-bootstrap/components/modal';
import 'lit-element-bootstrap/components/button';

class StaticModalExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
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
    
    _getExample() {
        return `
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