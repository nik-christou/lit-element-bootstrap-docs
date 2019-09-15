import { h as html } from '../../common/lit-html-9b6153da.js';
import { LitElement, css } from '../../lit-element.js';
import { B as BsContentRebootCss } from '../../common/bs-content-reboot-css-ebf48278.js';
import '../../common/bs-close-button-35d76861.js';

class BsModal extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                .modal {
                    position: var(--bs-modal-position, fixed);
                    top: var(--bs-modal-top, 0);
                    right: var(--bs-modal-right, 0);
                    bottom: var(--bs-modal-bottom, 0);
                    left: var(--bs-modal-left, 0);
                    z-index: var(--bs-modal-z-index, 1050);
                    display: var(--bs-modal-display, none);
                    overflow: hidden;
                    outline: 0;
                    opacity: var(--bs-modal-opacity, 0);
                    transition: opacity 0.15s linear;
                }
                
                :host([opened]) .modal {
                    overflow-x: hidden;
                    overflow-y: auto;
                }
        
                .modal-dialog {
                    position: relative;
                    width: auto;
                    left: var(--bs-modal-dialog-left);
                    margin-top: 0.5rem;
                    margin-bottom: 0.5rem;
                    margin-right: 0.5rem;
                    margin-left: 0.5rem;
                    pointer-events: none;
                    transition: -webkit-transform 0.3s ease-out;
                    transition: transform 0.3s ease-out;
                    transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;
                    -webkit-transform: translate(0, -25%);
                    transform: translate(0, -25%);
                }
        
                :host([opened]) .modal-dialog {
                    -webkit-transform: translate(0, 0);
                    transform: translate(0, 0);
                }
                
                @media screen and (prefers-reduced-motion: reduce) {
                    .modal-dialog {
                        transition: none;
                    }
                }
                
                :host([centered]) .modal-dialog {
                    display: -ms-flexbox;
                    display: flex;
                    -ms-flex-align: center;
                    align-items: center;
                    min-height: calc(100% - (0.5rem * 2));
                }
                
                :host([centered]) .modal-dialog::before {
                    display: block;
                    height: calc(100vh - (0.5rem * 2));
                    content: "";
                }
                
                .modal-content {
                    position: relative;
                    display: -ms-flexbox;
                    display: flex;
                    -ms-flex-direction: column;
                    flex-direction: column;
                    width: 100%;
                    pointer-events: auto;
                    background-color: #fff;
                    background-clip: padding-box;
                    border: 1px solid rgba(0, 0, 0, 0.2);
                    border-radius: 0.3rem;
                    outline: 0;
                }
                
                .modal-backdrop {
                    opacity: 0;
                }
                
                .modal-backdrop.show {
                    position: fixed;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    z-index: 1040;
                    background-color: #000;
                    transition: opacity 0.15s linear;
                }
                
                .modal-scrollbar-measure {
                    position: absolute;
                    top: -9999px;
                    width: 50px;
                    height: 50px;
                    overflow: scroll;
                }
                
                @media (min-width: 576px) {
                    
                    .modal-dialog {
                        max-width: 500px;
                        margin: 1.75rem auto;
                    }
                    
                    :host([centered]) .modal-dialog {
                        min-height: calc(100% - (1.75rem * 2));
                    }
                    
                    :host([centered]) .modal-dialog::before {
                        height: calc(100vh - (1.75rem * 2));
                    }
                    
                    :host([small]) .modal-dialog {
                        max-width: 300px;
                    }
                }
        
                @media (min-width: 992px) {
                        
                    :host([large]) .modal-dialog {
                        max-width: 800px;
                    }
                }
            `
        ];
    }
    
    render() {
        return html`
            <div class="modal-backdrop"></div>
            <div class="modal">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <slot name="header"></slot>
                        <slot name="body"></slot>
                        <slot name="footer"></slot>
                    </div>
                </div>
            </div>
        `;
    }
    
    static get properties() {
        return {
            large: Boolean,
            small: {type: Boolean, reflect: true},
            centered: {type: Boolean, reflect: true},
            _openTransition: Boolean,
            _closeTransition: Boolean,
            opened: {type: Boolean, reflect: true},
            dismissable: {type: Boolean, reflect: true},
            backdrop: {type: Boolean, reflect: true},
            animated: {type: Boolean, reflect: true}
        };
    }
    
    constructor() {
        super();
        this.opened = false;
        this.centered = false;
        this.dismissable = false;
        this.backdrop = false;
        this.animated = false;
        this.large = false;
        this.small = false;
        this._openTransition = false;
        this._closeTransition = false;
    }
    
    firstUpdated() {
        
        if(!this.animated) {
            this._removeTransitions();
        }
        
        this.addEventListener('bs-modal-dismiss', () => this._handleDismissEvent());
        
        const modalElement = this.shadowRoot.querySelector('.modal');
        modalElement.addEventListener('click', () => this._handleModalClick());
        
        const modalContentElement = this.shadowRoot.querySelector('.modal-content');
        modalContentElement.addEventListener('click', event => this._handleModalContentClick(event));
    
        const modalBackdrop = this.shadowRoot.querySelector('.modal-backdrop');
        modalBackdrop.addEventListener('transitionend', () => this._handleModalBackdropTransitionEnd());
        
        const modalDialogElement = this.shadowRoot.querySelector('.modal-dialog');
        modalDialogElement.addEventListener('transitionend', () => this._handleModalDialogTransitionEnd());
    }
    
    _handleDismissEvent() {
        if(this.dismissable) {
            this.close();
        }
    }
    
    _handleModalClick() {
        if(this.opened) {
            this.close();
        }
    }
    
    _handleModalContentClick(event) {
        event.stopPropagation();
        event.preventDefault();
    }
    
    _handleBackdropClickEvent() {
        if(this.opened) {
            this.close();
        }
    }
    
    _removeTransitions() {
        
        const modalElement = this.shadowRoot.querySelector('.modal');
        const modalDialogElement = this.shadowRoot.querySelector('.modal-dialog');
        const modalBackdropElement = this.shadowRoot.querySelector('.modal-backdrop');
        
        modalElement.style.transition = 'none';
        modalDialogElement.style.transition = 'none';
        modalBackdropElement.style.transition = 'none';
    }
    
    toggle() {
        
        if(this.opened) {
            this.close();
        } else {
            this.open();
        }
    }
    
    open() {
        
        this._sendModalOpenEvent();
        this._openTransition = true;
        
        if(this.animated) {
            this._openWithAnimation();
        } else {
            this._openWithNoAnimation();
        }
    }
    
    close() {
        
        this._sendModalCloseEvent();
        this.opened = false;
        
        if(this.animated) {
            this._closeWithAnimation();
        } else {
            this._closeWithNoAnimation();
        }
    }
    
    _closeWithAnimation() {
        this._hideModal();
    }
    
    _closeWithNoAnimation() {
        
        this._closeTransition = true;
            
        if(this.backdrop) {
            this._hideBackdrop();
            this._dismissBackdrop();
        } 
        
        this._dismissModal();
        this._closeTransition = false;
        this._sendModalClosedEvent();
    }
    
    _openWithAnimation() {
        
        if(this.backdrop) {
            this._showBackdrop();
        } else {
            this._showModal();
            this.opened = true;
        }
    }
    
    _openWithNoAnimation() {
        
        if(this.backdrop) {
            this._showBackdrop();
        }

        this._showModal();
        this.opened = true;
        this._openTransition = false;
        this._sendModalOpenedEvent();
    }
    
    _handleModalDialogTransitionEnd() {
        
        if(this._openTransition) {
            
            this._sendModalOpenedEvent();
            this._openTransition = false;
            
        } else {
            
            this._closeTransition = true;
            
            if(this.backdrop) {
                this._hideBackdrop();
            } else {
                this._dismissModal();
                this._closeTransition = false;
                this._sendModalClosedEvent();
            }
        }
    }
    
    _handleModalBackdropTransitionEnd() {
        
        if(this._openTransition) {
            this._showModal();
            this.opened = true;
        }
            
        if(this._closeTransition) {
            this._dismissModal();
            this._dismissBackdrop();
            this._closeTransition = false;
        }
    }
    
    _showModal() {
        const modalElement = this.shadowRoot.querySelector('.modal');
        modalElement.style.setProperty('--bs-modal-display', 'block');
        window.getComputedStyle(modalElement).display;
        modalElement.style.opacity = '1';
    }
    
    _hideModal() {
        const modalElement = this.shadowRoot.querySelector('.modal');
        modalElement.style.opacity = '0';
    }
    
    _dismissModal() {
        const modalElement = this.shadowRoot.querySelector('.modal');
        modalElement.style.setProperty('--bs-modal-display', 'none');
    }
    
    _showBackdrop() {
        const modalBackdropElement = this.shadowRoot.querySelector('.modal-backdrop');
        modalBackdropElement.classList.add('show');
        modalBackdropElement.style.opacity = '0.5';
    }
    
    _hideBackdrop() {
        const modalBackdropElement = this.shadowRoot.querySelector('.modal-backdrop');
        modalBackdropElement.style.opacity = '0';
    }
    
    _dismissBackdrop() {
        const modalBackdropElement = this.shadowRoot.querySelector('.modal-backdrop');
        modalBackdropElement.classList.remove('show');
    }

    _sendModalOpenEvent() {

        const modalOpenEvent = new CustomEvent('bs.modal.open', {
            bubbles: true, 
            composed: true
        });

        this.dispatchEvent(modalOpenEvent);
    }

    _sendModalOpenedEvent() {

        const modalOpenedEvent = new CustomEvent('bs.modal.opened', {
            bubbles: true, 
            composed: true
        });

        this.dispatchEvent(modalOpenedEvent);
    }

    _sendModalCloseEvent() {
        
        const modalCloseEvent = new CustomEvent('bs.modal.close', {
            bubbles: true, 
            composed: true
        });

        this.dispatchEvent(modalCloseEvent);
    }

    _sendModalClosedEvent() {

        const modalClosedEvent = new CustomEvent('bs.modal.closed', {
            bubbles: true, 
            composed: true
        });

        this.dispatchEvent(modalClosedEvent);
    }
}
if(!window.customElements.get('bs-modal'))  
    window.customElements.define('bs-modal', BsModal);

class BsModalBody extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                .modal-body {
                    position: relative;
                    flex: 1 1 auto;
                    padding: 1rem;
                }
            `
        ];
    }
    
    render() {
        return html`
            <div class="modal-body">
                <slot></slot>
            </div>
        `;
    }
}
if(!window.customElements.get('bs-modal-body')) 
    window.customElements.define('bs-modal-body', BsModalBody);

class BsModalFooter extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                .modal-footer {
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    padding: 1rem;
                    border-top: 1px solid #e9ecef;
                }

                :host ::slotted(:not(:first-child)) {
                    margin-left: .25rem;
                }

                :host ::slotted(:not(:last-child)) {
                    margin-right: .25rem;
                }
            `
        ];
    }
    
    render() {
        return html`
            <div class="modal-footer">
                <slot></slot>
            </div>
        `;
    }
}
if(!window.customElements.get('bs-modal-footer')) 
    window.customElements.define('bs-modal-footer', BsModalFooter);

class BsModalHeader extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                .modal-header {
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    padding: 1rem;
                    border-bottom: 1px solid #e9ecef;
                    border-top-left-radius: 0.3rem;
                    border-top-right-radius: 0.3rem;
                }
                
                bs-close-button {
                    --bs-close-button-padding: 1rem;
                    --bs-close-button-margin: -1rem -1rem -1rem auto;
                }
                
                .modal-title {
                    margin-bottom: 0;
                    line-height: 1.5;
                }
            `
        ];
    }
    
    render() {
        return html`
            <div class="modal-header">
                <div class="modal-title">
                    <slot></slot>
                </div>
                <bs-close-button></bs-close-button>
            </div>
        `;
    }
    
    firstUpdated() {
        this.addEventListener('close-button-click', () => this._handleCloseEvent());
    }
    
    _handleCloseEvent() {
        
        const modalDismissEvent = new CustomEvent('bs-modal-dismiss', {
            bubbles: true, 
            composed: true
        });
        
        this.dispatchEvent(modalDismissEvent);
    }
}
if(!window.customElements.get('bs-modal-header')) 
    window.customElements.define('bs-modal-header', BsModalHeader);

export { BsModal, BsModalBody, BsModalFooter, BsModalHeader };
