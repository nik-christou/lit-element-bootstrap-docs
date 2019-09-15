import { h as html } from '../../common/lit-html-9b6153da.js';
import { css, LitElement } from '../../lit-element.js';
import { B as BsContentRebootCss } from '../../common/bs-content-reboot-css-ebf48278.js';

const BsInputGroupCss = css`
    
    :host {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
        width: var(--bs-input-group-width, 100%);
    }

    :host ::slotted(bs-form-input),
    :host ::slotted(bs-form-select),
    :host ::slotted(bs-form-textarea),
    :host ::slotted(bs-custom-select),
    :host ::slotted(bs-custom-file) {
        flex: 1 1 auto;
        width: 1%;
        margin-bottom: 0;
        
        --bs-form-control-position: relative;
        --bs-form-control-z-index: 3;
        --bs-custom-select-position: relative;
        --bs-custom-select-z-index: 3;
        --bs-custom-file-position: relative;
        --bs-custom-file-z-index: 3;
    }
    
    /* 
        remember to add this inside the bs-custom-file component 
       
        .input-group > .custom-file .custom-file-input:focus ~ .custom-file-label 
    */
    
    /* 
        remember to add this inside the bs-custom-file component
        
        .input-group > .custom-file .custom-file-input:focus {
            z-index: 4;
        } 
    */
    
    :host ::slotted(bs-form-input:not(:last-child)),
    :host ::slotted(bs-form-select:not(:last-child)),
    :host ::slotted(bs-form-textarea:not(:last-child)),
    :host ::slotted(bs-custom-select:not(:last-child)) {
        --bs-form-control-border-top-right-radius: 0;
        --bs-form-control-border-bottom-right-radius: 0;
    }
    
    :host ::slotted(bs-form-input:not(:first-child)),
    :host ::slotted(bs-form-select:not(:first-child)),
    :host ::slotted(bs-form-textarea:not(:first-child)),
    :host ::slotted(bs-custom-select:not(:first-child)) {
        --bs-form-control-border-top-left-radius: 0;
        --bs-form-control-border-bottom-left-radius: 0;
    }
    
    :host ::slotted(bs-custom-file) {
        display: flex;
        align-items: center;
    }
    
    /*
        remember to add this inside the bs-custom-file component

        .input-group > .custom-file:not(:last-child) .custom-file-label,
        .input-group > .custom-file:not(:last-child) .custom-file-label::after {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
        }
        
        .input-group > .custom-file:not(:first-child) .custom-file-label {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
          }
    */
`;

const BsInputGroupLargeCss = css`
    
    :host([small]) ::slotted(bs-form-input),
    :host([small]) ::slotted(bs-form-select),
    :host([small]) ::slotted(bs-form-textarea),
    :host([small]) ::slotted(bs-input-group-append),
    :host([small]) ::slotted(bs-input-group-prepend) {
        
        --bs-button-height: calc(2.875rem + 2px);
        --bs-button-padding-top: 0.5rem;
        --bs-button-padding-bottom: 0.5rem;
        --bs-button-padding-left: 1rem;
        --bs-button-padding-right: 1rem;
        --bs-button-font-size: 1.25rem;
        --bs-button-line-height: 1.5;
        --bs-button-border-top-left-radius: 0.3rem;
        --bs-button-border-top-right-radius: 0.3rem;
        --bs-button-border-bottom-left-radius: 0.3rem;
        --bs-button-border-bottom-right-radius: 0.3rem;

        --bs-form-control-height: calc(2.875rem + 2px);
        --bs-form-control-padding: 0.5rem 1rem;
        --bs-form-control-font-size: 1.25rem;
        --bs-form-control-line-height: 1.5;
        --bs-form-control-border-top-left-radius: 0.3rem;
        --bs-form-control-border-top-right-radius: 0.3rem;
        --bs-form-control-border-bottom-left-radius: 0.3rem;
        --bs-form-control-border-bottom-right-radius: 0.3rem;

        --bs-input-group-text-height: calc(2.875rem + 2px);
        --bs-input-group-text-padding: 0.5rem 1rem;
        --bs-input-group-text-font-size: 1.25rem;
        --bs-input-group-text-line-height: 1.5;
        --bs-input-group-text-border-top-left-radius: 0.3rem;
        --bs-input-group-text-border-top-right-radius: 0.3rem;
        --bs-input-group-text-border-bottom-left-radius: 0.3rem;
        --bs-input-group-text-border-bottom-right-radius: 0.3rem;
    }
`;

const BsInputGroupSmallCss = css`
    
    :host([small]) ::slotted(bs-form-input),
    :host([small]) ::slotted(bs-form-select),
    :host([small]) ::slotted(bs-form-textarea),
    :host([small]) ::slotted(bs-input-group-append),
    :host([small]) ::slotted(bs-input-group-prepend) {
        --bs-button-height: calc(1.8125rem + 2px);
        --bs-button-padding-top: 0.25rem;
        --bs-button-padding-bottom: 0.25rem;
        --bs-button-padding-left: 0.5rem;
        --bs-button-padding-right: 0.5rem;
        --bs-button-font-size: 0.875rem;
        --bs-button-line-height: 1.5;
        --bs-button-border-top-left-radius: 0.2rem;
        --bs-button-border-top-right-radius: 0.2rem;
        --bs-button-border-bottom-left-radius: 0.2rem;
        --bs-button-border-bottom-right-radius: 0.2rem;

        --bs-form-control-height: calc(1.8125rem + 2px);
        --bs-form-control-padding: 0.25rem 0.5rem;
        --bs-form-control-font-size: 0.875rem;
        --bs-form-control-line-height: 1.5;
        --bs-form-control-border-top-left-radius: 0.2rem;
        --bs-form-control-border-top-right-radius: 0.2rem;
        --bs-form-control-border-bottom-left-radius: 0.2rem;
        --bs-form-control-border-bottom-right-radius: 0.2rem;

        --bs-input-group-text-height: calc(1.8125rem + 2px);
        --bs-input-group-text-padding: 0.25rem 0.5rem;
        --bs-input-group-text-font-size: 0.875rem;
        --bs-input-group-text-line-height: 1.5;
        --bs-input-group-text-border-top-left-radius: 0.2rem;
        --bs-input-group-text-border-top-right-radius: 0.2rem;
        --bs-input-group-text-border-bottom-left-radius: 0.2rem;
        --bs-input-group-text-border-bottom-right-radius: 0.2rem;
    }
`;

class BsInputGroup extends LitElement {
    
    static get properties() {
        return {
            large: { type: Boolean, reflect: true },
            small: { type: Boolean, reflect: true }
        };
    }
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsInputGroupCss,
            BsInputGroupLargeCss,
            BsInputGroupSmallCss
        ];
    }
    
    render() {
        return html`
            <slot></slot>
        `;
    }
    
    constructor() {
        super();
        this.large = false;
        this.small = false;
    }
    
    firstUpdated() {
        this._adjustMarginOnMultipleFormControlElements();
    }
    
    // :slotted can only accept simple selectors and not combinators
    // since the adjucent sibling selector cannot be used, we apply css via javascript
    
   _adjustMarginOnMultipleFormControlElements() {
        
        const slotNode = this.shadowRoot.querySelector('slot');
        const slottedNodes = slotNode.assignedNodes();
        
        slottedNodes.forEach(slotElement => {
            this._applyCssForFormInputElement(slotElement);
            this._applyCssForFormSelectElement(slotElement);
            this._applyCssForFormTextAreaElement(slotElement);
            this._applyCssForCustomSelectElement(slotElement);
            this._applyCssForCustomFileElement(slotElement);
        });
    }
    
    _applyCssForFormTextAreaElement(slotElement) {
        
        if(this._isFormTextAreaElement(slotElement)) {
            
            if(this._isFormTextAreaElement(slotElement.previousElementSibling)) {
                slotElement.style.setProperty('--bs-form-control-margin-left', '-1px');
            }
            
            if(this._isCustomSelectElement(slotElement.previousElementSibling)) {
                slotElement.style.setProperty('--bs-form-control-margin-left', '-1px');
            }
            
            if(this._isCustomFileElement(slotElement.previousElementSibling)) {
                slotElement.style.setProperty('--bs-form-control-margin-left', '-1px');
            }
        }
    }
    
    _applyCssForFormSelectElement(slotElement) {
        
        if(this._isFormSelectElement(slotElement)) {
            
            if(this._isFormSelectElement(slotElement.previousElementSibling)) {
                slotElement.style.setProperty('--bs-form-control-margin-left', '-1px');
            }
            
            if(this._isCustomSelectElement(slotElement.previousElementSibling)) {
                slotElement.style.setProperty('--bs-form-control-margin-left', '-1px');
            }
            
            if(this._isCustomFileElement(slotElement.previousElementSibling)) {
                slotElement.style.setProperty('--bs-form-control-margin-left', '-1px');
            }
        }
    }
    
    _applyCssForFormInputElement(slotElement) {
        
        if(this._isFormInputElement(slotElement)) {
            
            if(this._isFormInputElement(slotElement.previousElementSibling)) {
                slotElement.style.setProperty('--bs-form-control-margin-left', '-1px');
            }
            
            if(this._isCustomSelectElement(slotElement.previousElementSibling)) {
                slotElement.style.setProperty('--bs-form-control-margin-left', '-1px');
            }
            
            if(this._isCustomFileElement(slotElement.previousElementSibling)) {
                slotElement.style.setProperty('--bs-form-control-margin-left', '-1px');
            }
        }
    }
    
    _applyCssForCustomSelectElement(slotElement) {
        
        if(this._isCustomSelectElement(slotElement)) {
            
            if(this._isCustomSelectElement(slotElement.previousElementSibling)) {
                slotElement.style.setProperty('--bs-custom-select-margin-left', '-1px');
            }
            
            if(this._isCustomFileElement(slotElement.previousElementSibling)) {
                slotElement.style.setProperty('--bs-custom-select-margin-left', '-1px');
            }
            
            if(this._isFormInputElement(slotElement.previousElementSibling)) {
                slotElement.style.setProperty('--bs-custom-select-margin-left', '-1px');
            }
            
            if(this._isFormSelectElement(slotElement.previousElementSibling)) {
                slotElement.style.setProperty('--bs-custom-select-margin-left', '-1px');
            }
            
            if(this._isFormTextAreaElement(slotElement.previousElementSibling)) {
                slotElement.style.setProperty('--bs-custom-select-margin-left', '-1px');
            }
        }
    }
    
    _applyCssForCustomFileElement(slotElement) {
        
        if(this._isCustomFileElement(slotElement)) {
            
            if(this._isCustomFileElement(slotElement.previousElementSibling)) {
                slotElement.style.setProperty('--bs-custom-file-margin-left', '-1px');
            }
            
            if(this._isCustomSelectElement(slotElement.previousElementSibling)) {
                slotElement.style.setProperty('--bs-custom-file-margin-left', '-1px');
            }
            
            if(this._isFormInputElement(slotElement.previousElementSibling)) {
                slotElement.style.setProperty('--bs-custom-file-margin-left', '-1px');
            }
            
            if(this._isFormSelectElement(slotElement.previousElementSibling)) {
                slotElement.style.setProperty('--bs-custom-file-margin-left', '-1px');
            }
            
            if(this._isFormTextAreaElement(slotElement.previousElementSibling)) {
                 slotElement.style.setProperty('--bs-custom-file-margin-left', '-1px');
            }
        }
    }
    
    _isFormSelectElement(element) {
        if(element) {
            return element.nodeType === Node.ELEMENT_NODE 
                    && element.localName === 'bs-form-select';
        }
    }
    
    _isFormInputElement(element) {
        if(element) {
            return element.nodeType === Node.ELEMENT_NODE 
                    && element.localName === 'bs-form-input';
        }
    }
    
    _isFormTextAreaElement(element) {
        if(element) {
            return element.nodeType === Node.ELEMENT_NODE 
                    && element.localName === 'bs-form-textarea';
        }
    }
    
    _isCustomFileElement(element) {
        if(element) {
            return element.nodeType === Node.ELEMENT_NODE 
                    && element.localName === 'bs-custom-file';
        }
    }
    
    _isCustomSelectElement(element) {
        if(element) {
            return element.nodeType === Node.ELEMENT_NODE 
                    && element.localName === 'bs-custom-select';
        }
    }
}
if(!window.customElements.get('bs-input-group')) 
    window.customElements.define('bs-input-group', BsInputGroup);

class BsInputGroupText extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                :host {
                    display: flex;
                    align-items: center;
                    padding: var(--bs-input-group-text-padding, 0.375rem 0.75rem);
                    margin-bottom: 0;
                    margin-left: var(--bs-input-group-text-margin-left);
                    font-size: var(--bs-input-group-text-font-size, 1rem);
                    font-weight: 400;
                    line-height: var(--bs-input-group-text-line-height, 1.5);
                    color: #495057;
                    text-align: center;
                    white-space: nowrap;
                    background-color: #e9ecef;
                    border: 1px solid #ced4da;
                    height: var(--bs-input-group-text-height);
                    border-top-left-radius: var(--bs-input-group-text-border-top-left-radius, 0.25rem);
                    border-top-right-radius: var(--bs-input-group-text-border-top-right-radius, 0.25rem);
                    border-bottom-right-radius: var(--bs-input-group-text-border-bottom-right-radius, 0.25rem);
                    border-bottom-left-radius: var(--bs-input-group-text-border-bottom-left-radius, 0.25rem);
                }
                
                :host ::slotted(bs-form-radio-input),
                :host ::slotted(bs-form-checkbox-input) {
                    --bs-form-checkbox-input-position: static;
                    --bs-form-checkbox-input-margin-top: 0;
                    --bs-form-checkbox-input-margin-left: 0;
                    --bs-form-radio-input-position: static;
                    --bs-form-radio-input-margin-top: 0;
                    --bs-form-radio-input-margin-left: 0;
                }
            `
        ];
    }
    
    render() {
        return html`
            <slot></slot>
        `;
    }
}
if(!window.customElements.get('bs-input-group-text')) 
    window.customElements.define('bs-input-group-text', BsInputGroupText);

class BsInputGroupAppend extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                :host {
                    display: flex;
                    margin-left: -1px;
                }
                
                :host ::slotted(bs-button),
                :host ::slotted(bs-link-button),
                :host ::slotted(bs-input-button),
                :host ::slotted(bs-dropdown),
                :host ::slotted(bs-input-group-text) {
                    --bs-button-border-top-left-radius: 0;
                    --bs-button-border-bottom-left-radius: 0;
                    --bs-input-group-text-border-top-left-radius: 0;
                    --bs-input-group-text-border-bottom-left-radius: 0;
                    --bs-button-position: relative;
                    --bs-button-focus-z-index: 2;
                }
        
                :host(:not(:last-child)) ::slotted(bs-button),
                :host(:not(:last-child)) ::slotted(bs-link-button),
                :host(:not(:last-child)) ::slotted(bs-input-button),
                :host(:not(:last-child)) ::slotted(bs-dropdown),
                :host(:not(:last-child)) ::slotted(bs-input-group-text) {
                    --bs-button-border-top-right-radius: 0;
                    --bs-button-border-bottom-right-radius: 0;
                    --bs-input-group-text-border-top-right-radius: 0;
                    --bs-input-group-text-border-bottom-right-radius: 0;
                }
        
                :host(:last-child) ::slotted(bs-button:not(:last-child)),
                :host(:last-child) ::slotted(bs-link-button:not(:last-child)),
                :host(:last-child) ::slotted(bs-input-button:not(:last-child)),
                :host(:last-child) ::slotted(bs-dropdown:not(:last-child)),
                :host(:last-child) ::slotted(bs-input-group-text:not(:last-child)) {
                    --bs-button-border-top-right-radius: 0;
                    --bs-button-border-bottom-right-radius: 0;
                    --bs-input-group-text-border-top-right-radius: 0;
                    --bs-input-group-text-border-bottom-right-radius: 0;
                }
            `
        ];
    }
    
    render() {
        return html`
            <slot></slot>
        `;
    }
    
    firstUpdated() {
        this._adjustMarginOnMultipleAddonsElements();
    }
    
    _adjustMarginOnMultipleAddonsElements() {
        
        const slotNode = this.shadowRoot.querySelector('slot');
        const slottedNodes = slotNode.assignedNodes();
        
        slottedNodes.forEach(slotElement => {
            this._applyCssForInputGroupTextElement(slotElement);
            this._applyCssForButtonElement(slotElement);
            this._applyCssForDropdownSplitElement(slotElement);
        });
    }
    
    _applyCssForInputGroupTextElement(slotElement) {
        
        if(this._isInputGroupTextElement(slotElement)) {
            
            if(this._isInputGroupTextElement(slotElement.previousElementSibling)) {
                slotElement.style.setProperty('--bs-input-group-text-margin-left', '-1px');
            }
            
            if(this._isButtonElement(slotElement.previousElementSibling)) {
                slotElement.style.setProperty('--bs-input-group-text-margin-left', '-1px');
            }
        }
    }
    
    _applyCssForButtonElement(slotElement) {
        
        if(this._isButtonElement(slotElement)) {
            
            if(this._isButtonElement(slotElement.previousElementSibling)) {
                slotElement.style.setProperty('--bs-button-margin-left', '-1px');
            }
            
            if(this._isInputGroupTextElement(slotElement.previousElementSibling)) {
                slotElement.style.setProperty('--bs-button-margin-left', '-1px');
            }
        }
    }
    
    _applyCssForDropdownSplitElement(slotElement) {
        
        if(this._isDropdownElement(slotElement)) {
            slotElement.style.setProperty('--dropdown-toggle-margin-left', '-1px');
        }
    }
    
    _isInputGroupTextElement(element) {
        if(element) {
            return element.nodeType === Node.ELEMENT_NODE 
                    && element.localName === 'bs-input-group-text';
        }
    }
    
    _isDropdownElement(element) {
        if(element) {
            return element.nodeType === Node.ELEMENT_NODE 
                    && element.localName === 'bs-dropdown';
        }
    }
    
    _isButtonElement(element) {
        if(element) {
            return element.nodeType === Node.ELEMENT_NODE && 
                    (element.localName === 'bs-button' ||
                     element.localName === 'bs-link-button' ||
                     element.localName === 'bs-input-button');
        }
    }
}
if(!window.customElements.get('bs-input-group-append'))  
    window.customElements.define('bs-input-group-append', BsInputGroupAppend);

class BsInputGroupPrepend extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                :host {
                    display: flex;
                    margin-right: -1px;
                }
                
                :host ::slotted(bs-button),
                :host ::slotted(bs-link-button),
                :host ::slotted(bs-input-button),
                :host ::slotted(bs-dropdown),
                :host ::slotted(bs-input-group-text) {
                    --bs-button-border-top-right-radius: 0;
                    --bs-button-border-bottom-right-radius: 0;
                    --bs-input-group-text-border-top-right-radius: 0;
                    --bs-input-group-text-border-bottom-right-radius: 0;
                    --bs-button-position: relative;
                    --bs-button-focus-z-index: 2;
                }
                
                :host(:not(:first-child)) ::slotted(bs-button:not(:first-child)),
                :host(:not(:first-child)) ::slotted(bs-link-button:not(:first-child)),
                :host(:not(:first-child)) ::slotted(bs-input-button:not(:first-child)),
                :host(:not(:first-child)) ::slotted(bs-dropdown:not(:first-child)),
                :host(:not(:first-child)) ::slotted(bs-input-group-text:not(:first-child)) {
                    --bs-button-border-top-left-radius: 0;
                    --bs-button-border-bottom-left-radius: 0;
                    --bs-input-group-text-border-top-left-radius: 0;
                    --bs-input-group-text-border-bottom-left-radius: 0;
                }
                
                :host(:first-child) ::slotted(bs-button:not(:first-child)),
                :host(:first-child) ::slotted(bs-link-button:not(:first-child)),
                :host(:first-child) ::slotted(bs-input-button:not(:first-child)),
                :host(:first-child) ::slotted(bs-dropdown:not(:first-child)),
                :host(:first-child) ::slotted(bs-input-group-text:not(:first-child)) {
                    --bs-button-border-top-left-radius: 0;
                    --bs-button-border-bottom-left-radius: 0;
                    --bs-input-group-text-border-top-left-radius: 0;
                    --bs-input-group-text-border-bottom-left-radius: 0;
                }
            `
        ];
    }
    
    render() {
        return html`
            <slot></slot>
        `;
    }
    
    firstUpdated() {
        this._adjustMarginOnMultipleAddonsElements();
    }
    
    _adjustMarginOnMultipleAddonsElements() {
        
        const slotNode = this.shadowRoot.querySelector('slot');
        const slottedNodes = slotNode.assignedNodes();
        
        slottedNodes.forEach(slotElement => {
            this._applyCssForInputGroupTextElement(slotElement);
            this._applyCssForButtonElement(slotElement);
            this._applyCssForDropdownSplitElement(slotElement);
        });
    }
    
    _applyCssForInputGroupTextElement(slotElement) {
        
        if(this._isInputGroupTextElement(slotElement)) {
            
            if(this._isInputGroupTextElement(slotElement.previousElementSibling)) {
                slotElement.style.setProperty('--bs-input-group-text-margin-left', '-1px');
            }
            
            if(this._isButtonElement(slotElement.previousElementSibling)) {
                slotElement.style.setProperty('--bs-input-group-text-margin-left', '-1px');
            }
        }
    }
    
    _applyCssForButtonElement(slotElement) {
        
        if(this._isButtonElement(slotElement)) {
            
            if(this._isButtonElement(slotElement.previousElementSibling)) {
                slotElement.style.setProperty('--bs-button-margin-left', '-1px');
            }
            
            if(this._isInputGroupTextElement(slotElement.previousElementSibling)) {
                slotElement.style.setProperty('--bs-button-margin-left', '-1px');
            }
        }
    }
    
    _applyCssForDropdownSplitElement(slotElement) {
        
        if(this._isDropdownElement(slotElement)) {
            slotElement.style.setProperty('--dropdown-toggle-margin-left', '-1px');
            slotElement.style.setProperty('--dropdown-toggle-border-top-right', '0');
            slotElement.style.setProperty('--dropdown-toggle-border-bottom-right', '0');
        }
    }
    
    _isInputGroupTextElement(element) {
        if(element) {
            return element.nodeType === Node.ELEMENT_NODE 
                    && element.localName === 'bs-input-group-text';
        }
    }
    
    _isDropdownElement(element) {
        if(element) {
            return element.nodeType === Node.ELEMENT_NODE 
                    && element.localName === 'bs-dropdown';
        }
    }
    
    _isButtonElement(element) {
        if(element) {
            return element.nodeType === Node.ELEMENT_NODE && 
                    (element.localName === 'bs-button' ||
                     element.localName === 'bs-link-button' ||
                     element.localName === 'bs-input-button');
        }
    }
}
if(!window.customElements.get('bs-input-group-prepend')) window.customElements.define('bs-input-group-prepend', BsInputGroupPrepend);

export { BsInputGroup, BsInputGroupAppend, BsInputGroupPrepend, BsInputGroupText };
