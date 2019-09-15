import { d as directive, A as AttributePart, h as html } from '../../common/lit-html-9b6153da.js';
import { LitElement, css } from '../../lit-element.js';
import { BsContentRebootCss as BsContentRebootCss$1 } from '../content.js';
import { B as BsContentTypographyCss } from '../../common/index-603f562a.js';
import { B as BsContentRebootCss } from '../../common/bs-content-reboot-css-ebf48278.js';
import { B as BsPositionCss, a as BsTextColorCss } from '../../common/bs-text-colors-css-726ad9ac.js';

/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * For AttributeParts, sets the attribute if the value is defined and removes
 * the attribute if the value is undefined.
 *
 * For other part types, this directive is a no-op.
 */
const ifDefined = directive((value) => (part) => {
    if (value === undefined && part instanceof AttributePart) {
        if (value !== part.value) {
            const name = part.committer.name;
            part.committer.element.removeAttribute(name);
        }
    }
    else {
        part.setValue(value);
    }
});

class BsForm extends LitElement {
    
    static get properties() {
        return {
            name: String,
            action: String,
            ajax: Boolean,
            method: {type: String, reflect: true},
            enctype: {type: String, reflect: true},
            inline: {type: Boolean, reflect: true},
            novalidate: {type: Boolean, reflect: true},
            autocomplete: {type: String, reflect: true},
            acceptCharset: {type: String, reflect: true}
        };
    }
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                :host(:not([inline])) {
                    display: block;
                }
                
                :host([inline]) {
                    display: flex;
                    flex-flow: row wrap;
                    align-items: center;
                }
                
                :host([inline]) form {
                    display: flex;
                    flex-flow: row wrap;
                    align-items: center;
                }
        
                @media (min-width: 576px) {
                    :host([inline]) {
                        --bs-form-control-display: inline-block;
                        --bs-form-control-width: auto;
                        --bs-form-control-vertical-align: middle;
                        --bs-input-group-width: auto;
                    }
                }
            `
        ];
    }
    
    render() {
        return html`
            <form
                name=${ifDefined(this.name)}
                action=${ifDefined(this.action)}
                .method=${this.method}
                .enctype=${this.enctype}
                accept-charset=${this.acceptCharset}
                ?novalidate=${this.novalidate}
                .autocomplete=${this.autocomplete}>
                <slot></slot>
            </form>
        `;
    }
    
    constructor() {
        super();
        this.inline = false;
        this.novalidate = false;
        this.autocomplete = 'off';
        this.ajax = false;
        this.method = "get";
        this.enctype = "application/x-www-form-urlencoded";
        this.acceptCharset = "UTF-8";
    }
    
    firstUpdated() {
        this._setFormGroupsToInline();
        this.addEventListener('bs-button-click', event => this._handleButton(event));
    }
    
    _handleButton(event) {
        
        const action = event.detail.action;
        const formElement = this.shadowRoot.querySelector('form');
        
        if(action === 'submit') {
            this._handleSubmit(formElement);
        }
        
        if(action === 'reset') {
            formElement.reset();
        }
    }
    
    _handleSubmit(formElement) {
        
        const formInputValidation = this._validateFormInputs();
        
        if(!formInputValidation) {
            return;
        }
        
        if (this.ajax) {
            
            const formData = new FormData(formElement);
            this._populateFormDataFromInputControls(formData);
            
            this._executeAjaxFormSubmission(formData);
            
            return;
        }
            
        const formData = new FormData(formElement);
        this._populateFormDataFromInputControls(formData);
            
        // formElement.submit();
    }
    
    _executeAjaxFormSubmission(formData) {
        
        const request = new XMLHttpRequest();
        
        // the fired event should contain the XMLHttpRequest object
        // so that users can post on their own
        const eventPrevented = this._firePreSubmitEvent(request);
        
        if(eventPrevented) {
            return;
        }
        
        request.open('POST', this.action);
        request.send(formData);
    }
    
    _firePreSubmitEvent(request) {
        
        const presubmitEvent = new CustomEvent('bs-form-presubmit', {
            bubbles: true, 
            composed: true,
            cancelable: true,
            detail: {
                request: request
            }
        });

        this.dispatchEvent(presubmitEvent);
        
        const presubmitEventPrevented = presubmitEvent.defaultPrevented;
        
        return presubmitEventPrevented;
    }
    
    _validateFormInputs() {
        
        if(this.novalidate) {
            return true;
        }
        
        // TODO also find and include all native elements 
        
        const customFormInputValidationStates = [];
        
        const formInputElements = this._retrieveFormInputElements(true);
        
        for(let index = 0; index < formInputElements.length; index++) {
            
            const formInputElement = formInputElements[index];
            const formInputValid = formInputElement.validate();
            
            customFormInputValidationStates.push(formInputValid);
        }
        
        // has any of the custom form input elements failed validation
        const atLeastOneInputFailedValidation = customFormInputValidationStates.includes(false);
        
        return !atLeastOneInputFailedValidation;
    }
    
    _populateFormDataFromInputControls(formData) {
        
        const formInputElements = this._retrieveFormInputElements(false);
        
        for(let index = 0; index < formInputElements.length; index++) {
            
            const formInputElement = formInputElements[index];
            this._extractInputData(formData, formInputElement);
        }
    }
    
    _extractInputData(formData, formInput) {
        
        if(this._isInputDisabled(formInput)) {
            return;
        }
        
        const name = formInput.getInputName();
        const value = formInput.getInputValue();

        if(name && value) {
            formData.append(name, value);
        }
    }
    
    _setFormGroupsToInline() {
        
        if(!this.inline) {
            return;
        }
        
        const slotElement = this.shadowRoot.querySelector('slot');
        const slotNodes = slotElement.assignedNodes();
        const formGroupElements = this._retrieveFormGroupElements(slotNodes);
        
        for(let index = 0; index < formGroupElements.length; index++) {
            
            const formGroupElement = formGroupElements[index];
            
            if(formGroupElement) {
                formGroupElement.setAttribute('inline', '');
            }
        }
    }
    
    _retrieveFormGroupElements(slotNodes) {
        
        const formGroupElements = [];
        
        for (let index = 0; index < slotNodes.length; ++index) {
            const slotNode = slotNodes[index];
            if (this._isFormGroupElement(slotNode)) {
                formGroupElements.push(slotNode);
            }
        }
        
        return formGroupElements;
    }
    
    _retrieveFormInputElements(validatableOnlyElements) {
        
        const formInputElements = [];
        
        const slotElement = this.shadowRoot.querySelector('slot');
        const slotNodes = slotElement.assignedNodes();
        
        for(let index = 0; index < slotNodes.length; index++) {
            
            const slotNode = slotNodes[index];
            
            if(this._isFormGroupElement(slotNode) || this._isFormCheckGroupElement(slotNode)) {
            
                if(this._isGroupDisabled(slotNode)) {
                    continue;
                }
                
                const groupChildren = slotNode.children;
                
                for(let index = 0; index < groupChildren.length; index++) {

                    const formGroupChild = groupChildren[index];

                    if(this._isFormInputElement(formGroupChild) || this._isFormCheckboxInput(formGroupChild)) {
                        
                        if(validatableOnlyElements) {
                            
                            if(formGroupChild.isValidatable()) {
                                formInputElements.push(formGroupChild);
                            }
                            
                        } else {
                            formInputElements.push(formGroupChild);
                        }
                    }
                }
            }
        }
        
        return formInputElements;
    }
    
    _isGroupDisabled(formGroupElement) {
        return formGroupElement.isDisabled();
    }
    
    _isInputDisabled(formInputElement) {
        return formInputElement.isDisabled();
    }
    
    _isElementSubmittable(element) {
        return element.nodeType === Node.ELEMENT_NODE &&
                !element.disabled && 
                !element.name;
    }
    
    _isFormFileInput(element) {
        return element.nodeType === Node.ELEMENT_NODE && 
                element.localName === 'bs-form-file-input';
    }
    
    _isFormTextAreaElement(element) {
        return element.nodeType === Node.ELEMENT_NODE && 
                element.localName === 'bs-form-textarea';
    }
    
    _isFormInputElement(element) {
        return element.nodeType === Node.ELEMENT_NODE && 
                element.localName === 'bs-form-input';
    }
    
    _isFormCheckboxInput(element) {
        return element.nodeType === Node.ELEMENT_NODE && 
                element.localName === 'bs-form-checkbox-input';
    }
    
    _isFormRadioInput(element) {
        return element.nodeType === Node.ELEMENT_NODE && 
                element.localName === 'bs-form-radio-input';
    }
    
    _isFormGroupElement(element) {
        return element.nodeType === Node.ELEMENT_NODE && 
                element.localName === 'bs-form-group';
    }
    
    _isFormCheckGroupElement(element) {
        return element.nodeType === Node.ELEMENT_NODE && 
                element.localName === 'bs-form-check-group';
    }
}
if(!window.customElements.get('bs-form')) 
    window.customElements.define('bs-form', BsForm);

const BsFormControlCss = css`
    
    :host {
        display: block;
        width: var(--bs-form-control-width, 100%);
    }
    
    .form-control {
        display: var(--bs-form-control-display, block);
        position: var(--bs-form-control-position);
        width: var(--bs-form-control-width, 100%);
        height: var(--bs-form-control-height, calc(2.25rem + 2px));
        padding: var(--bs-form-control-padding, 0.375rem 0.75rem);
        font-size: var(--bs-form-control-font-size, 1rem);
        line-height: var(--bs-form-control-line-height, 1.5);
        color: #495057;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        margin-left: var(--bs-form-control-margin-left);
        border-top-left-radius: var(--bs-form-control-border-top-left-radius, 0.25rem);
        border-top-right-radius: var(--bs-form-control-border-top-right-radius, 0.25rem);
        border-bottom-right-radius: var(--bs-form-control-border-bottom-right-radius, 0.25rem);
        border-bottom-left-radius: var(--bs-form-control-border-bottom-left-radius, 0.25rem);
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }

    .form-control {
        vertical-align: var(--bs-form-control-vertical-align);
    }

    @media screen and (prefers-reduced-motion: reduce) {
      
        .form-control {
            transition: none;
        }
    }

    .form-control::-ms-expand {
        background-color: transparent;
        border: 0;
    }
    
    .form-control:focus {
        color: #495057;
        background-color: #fff;
        border-color: #80bdff;
        outline: 0;
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
        z-index: var(--bs-form-control-z-index);
    }
    
    .form-control::-webkit-input-placeholder {
        color: #6c757d;
        opacity: 1;
    }

    .form-control::-moz-placeholder {
        color: #6c757d;
        opacity: 1;
    }

    .form-control:-ms-input-placeholder {
        color: #6c757d;
        opacity: 1;
    }

    .form-control::-ms-input-placeholder {
        color: #6c757d;
        opacity: 1;
    }

    .form-control::placeholder {
        color: #6c757d;
        opacity: 1;
    }

    .form-control:disabled, 
    .form-control[readonly] {
        background-color: #e9ecef;
        opacity: 1;
    }

    :host([valid]) .form-control {
        border-color: #28a745;
    }
    
    :host([valid]) .form-control:focus {
        border-color: #28a745;
        box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
    }

    :host([invalid]) .form-control {
        border-color: #dc3545;
    }

    :host([invalid]) .form-control:focus {
        border-color: #dc3545;
        box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
    }
    
    /* Below styles are necessary because of: */
    /* https://developer.mozilla.org/en-US/docs/Web/CSS/:-moz-ui-invalid */
    
    .form-control:-moz-submit-invalid {
        box-shadow: none;
    }

    .form-control:-moz-ui-invalid {
        box-shadow:none;
    }
`;

const BsFormControlSizeCss = css`

    :host([sm]) .form-control {
        height: calc(1.8125rem + 2px);
        padding: 0.25rem 0.5rem;
        font-size: 0.875rem;
        line-height: 1.5;
        border-radius: 0.2rem;
    }
    
    :host([lg]) .form-control {
        height: calc(2.875rem + 2px);
        padding: 0.5rem 1rem;
        font-size: 1.25rem;
        line-height: 1.5;
        border-radius: 0.3rem;
    }
`;

class BsFormSelect extends LitElement {
    
    static get properties() {
        return {
            arrayData: Array,
            jsonData: JSON,
            jsonId: {type: String, attribute: 'json-id'},
            jsonText: {type: String, attribute: 'json-text'},
            selected: Object,
            caption: String,
            multiple: {type: Boolean, reflect: true},
            disabled: {type: Boolean, reflect: true},
            valid: {type: Boolean, reflect: true},
            invalid: {type: Boolean, reflect: true},
            _currentSelected: Object
        };
    }
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsFormControlCss,
            BsFormControlSizeCss,
            css`
                :host {
                    display: block;
                }
                
                select.form-control:focus::-ms-value {
                    color: #495057;
                    background-color: #fff;
                }

                select.form-control[size], 
                select.form-control[multiple] {
                    height: auto;
                }
            `
        ];
    }
    
    render() {
        return html`
            <select 
                class="form-control"
                ?multiple=${this.multiple}
                ?disabled=${this.disabled}>
            </select>
        `;
    }
    
    constructor() {
        super();
        this.arrayData = [];
        this.jsonId = '';
        this.jsonText = '';
        this.caption = '';
        this.multiple = false;
        this.disabled = false;
        this.valid = false;
        this.invalid = false;
    }
    
    firstUpdated() {
        const selectElement = this.shadowRoot.querySelector('select');
        this._generateOptions(selectElement);
        selectElement.addEventListener('change', event => this._handleSelection(event));
    }
    
    setFocus() {
        const selectElement = this.shadowRoot.querySelector('select');
        selectElement.focus();
    }
    
    validate() {
        const selectElement = this.shadowRoot.querySelector('select');
        return selectElement.checkValidity();
    }
    
    getValidity() {
        const selectElement = this.shadowRoot.querySelector('select');
        return selectElement.validity;
    }
    
    getValue() {
        return this._currentSelected;
    }
    
    _handleSelection(event) {
        this._currentSelected = event.target.value;
    }
    
    _generateOptions(selectElement) {
        
        if(this.caption) {
            const captionOptionItem = this._createCaptionOptionItem();
            selectElement.add(captionOptionItem);
        }
        
        if (this.arrayData && this.arrayData.length) {
            this._createOptionItemsFromArray(selectElement);
            return;
        }
        
        if(this.jsonData && this.jsonData.length && this.jsonId && this.jsonText) {
            this._createOptionItemsFromJsonData(selectElement);
            return;
        }
    }
    
    _createCaptionOptionItem() {
        
        let captionSelected = false;
        
        if(!this.selected) {
            captionSelected = true;
        }
        
        const captionOptionItem = new Option(this.caption, '', captionSelected, captionSelected);
        captionOptionItem.setAttribute('disabled', '');
        
        return captionOptionItem;
    }
    
    _createOptionItemsFromArray(selectElement) {
        
        for(let index = 0; index < this.arrayData.length; index++) {
            
            const item = this.arrayData[index];
            const selectedItem = (item.toString() === this.selected);
            const optionItem = new Option(item, item, selectedItem, selectedItem);
            
            selectElement.add(optionItem);
        }
    }
    
    _createOptionItemsFromJsonData(selectElement) {
        
        for(let index = 0; index < this.jsonData.length; index++) {
            
            const item = this.jsonData[index];
            const id = item[this.jsonId];
            const value = item[this.jsonText];
            const selectedItem = (value.toString() === this.selected);
            const optionItem = new Option(value, id, selectedItem, selectedItem);

            selectElement.add(optionItem);
        }
    }
}
if(!window.customElements.get('bs-form-select')) 
    window.customElements.define('bs-form-select', BsFormSelect);

class BsFormRow extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                :host {
                    display: flex;
                    flex-wrap: wrap;
                    margin-right: -5px;
                    margin-left: -5px;
                }
                
                ::slotted(bs-column) {
                    padding-right: 5px !important;
                    padding-left: 5px !important;
                }
                
                /* 
                 * the below assumes that the bs-form-group 
                 * has column attributes like md-6
                 */
                
                ::slotted(bs-form-group) {
                    padding-right: 5px !important;
                    padding-left: 5px !important;
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
if(!window.customElements.get('bs-form-row')) 
    window.customElements.define('bs-form-row', BsFormRow);

class BsFormRange extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                :host {
                    display: block;
                }
                
                .form-control-range {
                    display: block;
                    width: 100%;
                }
            `
        ];
    }
    
    render() {
        return html`
            <input type="range" class="form-control-range" />
        `;
    }
}
if(!window.customElements.get('bs-form-range')) 
    window.customElements.define('bs-form-range', BsFormRange);

class BsFormRadioGroup extends LitElement {
    
    static get properties() {
        return {
            name: String
        };
    }
    
    render() {
        return html`
            <slot></slot>
        `;
    }
    
    firstUpdated() {
        this._updateInputsWithGroupName();
        this.addEventListener('bs-form-radio-click', event => this._handleRadioClick(event));
    }
    
    _updateInputsWithGroupName() {
        
        if(!this.name) {
            return;
        }
        
        const slotNode = this.shadowRoot.querySelector('slot');
        const slotNodes = slotNode.assignedNodes();
        
        const formCheckGroupElements = this._retrieveFormCheckGroups(slotNodes);
        
        for (let index = 0; index < formCheckGroupElements.length; index++) {
            
            const formGroupElement = formCheckGroupElements[index];
            const formRadioInputElement = this._retrieveFormRadioInput(formGroupElement);
            
            formRadioInputElement.setAttribute('name', this.name);
        }
    }
    
    _handleRadioClick(event) {
        
        const name = event.detail.name;
        const value = event.detail.value;
        
        const slotNode = this.shadowRoot.querySelector('slot');
        const slotNodes = slotNode.assignedNodes();
        
        const formCheckGroupElements = this._retrieveFormCheckGroups(slotNodes);
        
        for (let index = 0; index < formCheckGroupElements.length; index++) {
            
            const formGroupElement = formCheckGroupElements[index];
            const formRadioInputElement = this._retrieveFormRadioInput(formGroupElement);
            
            formRadioInputElement.radioGroupItemSelected(name, value);
        }
    }
    
    _retrieveFormRadioInput(formCheckGroup) {
        
        const formCheckGroupChildren = formCheckGroup.children;
        
        for(let index = 0; index < formCheckGroupChildren.length; index++) {
            
            const childrenItem = formCheckGroupChildren[index];
            
            if (this._isFormRadioInputElement(childrenItem)) {
                
                return childrenItem;
            }
        }
    }
    
    _retrieveFormCheckGroups(slotNodes) {
        
        const elementNodes = [];
        
        for (let index = 0; index < slotNodes.length; index++) {
            const slotItem = slotNodes[index];
            
            if (this._isFormCheckGroupElement(slotItem)) {
                elementNodes.push(slotItem);
            }
        }
        
        return elementNodes;
    }
    
    _isFormRadioInputElement(element) {
        return element.nodeType === Node.ELEMENT_NODE 
                && (element.localName === 'bs-form-radio-input');
    }
    
    _isFormCheckGroupElement(element) {
        return element.nodeType === Node.ELEMENT_NODE 
                && (element.localName === 'bs-form-check-group');
    }
}
if(!window.customElements.get('bs-form-radio-group')) 
    window.customElements.define('bs-form-radio-group', BsFormRadioGroup);

class BsFormRadioInput extends LitElement {
    
    static get properties() {
        return {
            name: String,
            value: String,
            static: {type: Boolean, reflect: true},
            disabled: {type: Boolean, reflect: true},
            checked: {type: Boolean, reflect: true}
        };
    }
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsPositionCss,
            css`
                input {
                    position: var(--bs-form-radio-input-position, absolute);
                    margin-top: var(--bs-form-radio-input-margin-top, 0.3rem);
                    margin-left: var(--bs-form-radio-input-margin-left, -1.25rem);
                }
            
                :host([inline]) {
                    display: inline-flex;
                }
                
                :host([inline]) input {
                    position: static;
                    margin-top: 0;
                    margin-right: 0.3125rem;
                    margin-left: 0;
                }
        
                @media (min-width: 576px) {
        
                    :host([inline]) input {
                        position: relative;
                        margin-top: 0;
                        margin-right: 0.25rem;
                        margin-left: 0;
                    }
                }
            `
        ];
    }
    
    render() {
        return html`
            <input 
                type="radio"
                .value=${this.value}
                name=${this.name}
                ?checked=${this.checked}
                ?disabled=${this.disabled} />
        `;
    }
    
    constructor() {
        super();
        this.name = '';
        this.value = '';
        this.static = false;
        this.disabled = false;
        this.checked = false;
    }
    
    firstUpdated() {
        const inputElement = this.shadowRoot.querySelector('input');
        inputElement.addEventListener('click', event => this._handleClick(event));
        this._applyStaticCss();
    }
    
    _handleClick() {
        
        const radioInputClickEvent = new CustomEvent('bs-form-radio-click', {
            bubbles: true, 
            composed: true,
            detail: {
                name: this.name,
                value: this.value
            }
        });

        this.dispatchEvent(radioInputClickEvent);
    }
    
    radioGroupItemSelected(name, value) {
        
        if(name === this.name && value === this.value) {
            this.check();
        } else {
            this.uncheck();
        }
    }
    
    _applyStaticCss() {
        
        if(this.static) {
            const checkboxElement = this.shadowRoot.querySelector('input');
            checkboxElement.classList.add('position-static');
        }
    }
    
    check() {
        const radioInputElement = this.shadowRoot.querySelector('input');
        radioInputElement.checked = true;
        this.checked = true;
    }
    
    uncheck() {
        const radioInputElement = this.shadowRoot.querySelector('input');
        radioInputElement.checked = false;
        this.checked = false;
    }
    
    toggle() {
        const radioInputElement = this.shadowRoot.querySelector('input');
        radioInputElement.checked = !radioInputElement.checked;
        this._handleClick();
    }
}
if(!window.customElements.get('bs-form-radio-input'))  
    window.customElements.define('bs-form-radio-input', BsFormRadioInput);

class BsRow extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                :host {
                    display: flex;
                    flex-wrap: wrap;
                    margin-right: -15px;
                    margin-left: -15px;
                }

                :host([no-gutters]) {
                    margin-right: 0;
                    margin-left: 0;
                }

                :host([no-gutters]) ::slotted(*) {
                    padding-right: 0;
                    padding-left: 0;
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
if(!window.customElements.get('bs-row')) 
    window.customElements.define('bs-row', BsRow);

const BsColumnExtraSmallCss = css`
    
    :host([xs]), 
    :host([xs-1]), 
    :host([xs-2]), 
    :host([xs-3]), 
    :host([xs-4]), 
    :host([xs-5]), 
    :host([xs-6]), 
    :host([xs-7]), 
    :host([xs-8]), 
    :host([xs-9]), 
    :host([xs-10]), 
    :host([xs-11]),
    :host([xs-12]), 
    :host([xs-auto]) {
        display: block;
        position: relative;
        width: 100%;
        min-height: 1px;
        padding-right: 15px;
        padding-left: 15px;
    }

    :host([xs-auto]) {
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
        width: auto;
        max-width: none;
    }

    :host([xs]) {
        -ms-flex-preferred-size: 0;
        flex-basis: 0;
        -ms-flex-positive: 1;
        flex-grow: 1;
        max-width: 100%;
    }

    :host([xs-1]) {
        -ms-flex: 0 0 8.333333%;
        flex: 0 0 8.333333%;
        max-width: 8.333333%;
    }
    
    :host([xs-2]) {
        -ms-flex: 0 0 16.666667%;
        flex: 0 0 16.666667%;
        max-width: 16.666667%;
    }

    :host([xs-3]) {
        -ms-flex: 0 0 25%;
        flex: 0 0 25%;
        max-width: 25%;
    }

    :host([xs-4]) {
        -ms-flex: 0 0 33.333333%;
        flex: 0 0 33.333333%;
        max-width: 33.333333%;
    }

    :host([xs-5]) {
        -ms-flex: 0 0 41.666667%;
        flex: 0 0 41.666667%;
        max-width: 41.666667%;
    }

    :host([xs-6]) {
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%;
    }
    
    :host([xs-7]) {
        -ms-flex: 0 0 58.333333%;
        flex: 0 0 58.333333%;
        max-width: 58.333333%;
    }

    :host([xs-8]) {
        -ms-flex: 0 0 66.666667%;
        flex: 0 0 66.666667%;
        max-width: 66.666667%;
    }

    :host([xs-9]) {
        -ms-flex: 0 0 75%;
        flex: 0 0 75%;
        max-width: 75%;
    }
    
    :host([xs-10]) {
        -ms-flex: 0 0 83.333333%;
        flex: 0 0 83.333333%;
        max-width: 83.333333%;
    }
    
    :host([xs-11]) {
        -ms-flex: 0 0 91.666667%;
        flex: 0 0 91.666667%;
        max-width: 91.666667%;
    }
    
    :host([xs-12]) {
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%;
    }

    :host([order-xs-first]) {
        -ms-flex-order: -1;
        order: -1;
    }

    :host([order-xs-last]) {
        -ms-flex-order: 13;
        order: 13;
    }

    :host([order-xs-0]) {
        -ms-flex-order: 0;
        order: 0;
    }

    :host([order-xs-1]) {
        -ms-flex-order: 1;
        order: 1;
    }

    :host([order-xs-2]) {
        -ms-flex-order: 2;
        order: 2;
    }

    :host([order-xs-3]) {
        -ms-flex-order: 3;
        order: 3;
    }

    :host([order-xs-4]) {
        -ms-flex-order: 4;
        order: 4;
    }

    :host([order-xs-5]) {
        -ms-flex-order: 5;
        order: 5;
    }

    :host([order-xs-6]) {
        -ms-flex-order: 6;
        order: 6;
    }

    :host([order-xs-7]) {
        -ms-flex-order: 7;
        order: 7;
    }

    :host([order-xs-8]) {
        -ms-flex-order: 8;
        order: 8;
    }

    :host([order-xs-9]) {
        -ms-flex-order: 9;
        order: 9;
    }

    :host([order-xs-10]) {
        -ms-flex-order: 10;
        order: 10;
    }

    :host([order-xs-11]) {
        -ms-flex-order: 11;
        order: 11;
    }

    :host([order-xs-12]) {
        -ms-flex-order: 12;
        order: 12;
    }

    :host([offset-xs-1]) {
        margin-left: 8.333333%;
    }

    :host([offset-xs-2]) {
        margin-left: 16.666667%;
    }

    :host([offset-xs-2]) {
        margin-left: 25%;
    }

    :host([offset-xs-4]) {
        margin-left: 33.333333%;
    }

    :host([offset-xs-5]) {
        margin-left: 41.666667%;
    }

    :host([offset-xs-6]) {
        margin-left: 50%;
    }

    :host([offset-xs-7]) {
        margin-left: 58.333333%;
    }

    :host([offset-xs-8]) {
        margin-left: 66.666667%;
    }

    :host([offset-xs-9]) {
        margin-left: 75%;
    }

    :host([offset-xs-10]) {
        margin-left: 83.333333%;
    }

    :host([offset-xs-11]) {
        margin-left: 91.666667%;
    }
`;

const BsColumnSmallCss = css`
    
    :host([sm]), 
    :host([sm-1]), 
    :host([sm-2]), 
    :host([sm-3]), 
    :host([sm-4]), 
    :host([sm-5]), 
    :host([sm-6]), 
    :host([sm-7]), 
    :host([sm-8]), 
    :host([sm-9]), 
    :host([sm-10]), 
    :host([sm-11]), 
    :host([sm-12]), 
    :host([sm-auto]) {
        display: block;
        position: relative;
        width: 100%;
        min-height: 1px;
        padding-right: 15px;
        padding-left: 15px;
    }
    
    @media (min-width: 576px) {
        
        :host([sm-auto]) {
            -ms-flex: 0 0 auto;
            flex: 0 0 auto;
            width: auto;
            max-width: none;
        }
        
        :host([sm]) {
            -ms-flex-preferred-size: 0;
            flex-basis: 0;
            -ms-flex-positive: 1;
            flex-grow: 1;
            max-width: 100%;
        }
        
        :host([sm-1]) {
            -ms-flex: 0 0 8.333333%;
            flex: 0 0 8.333333%;
            max-width: 8.333333%;
        }

        :host([sm-2]) {
            -ms-flex: 0 0 16.666667%;
            flex: 0 0 16.666667%;
            max-width: 16.666667%;
        }
        
        :host([sm-3]) {
            -ms-flex: 0 0 25%;
            flex: 0 0 25%;
            max-width: 25%;
        }

        :host([sm-4]) {
            -ms-flex: 0 0 33.333333%;
            flex: 0 0 33.333333%;
            max-width: 33.333333%;
        }

        :host([sm-5]) {
            -ms-flex: 0 0 41.666667%;
            flex: 0 0 41.666667%;
            max-width: 41.666667%;
        }
        
        :host([sm-6]) {
            -ms-flex: 0 0 50%;
            flex: 0 0 50%;
            max-width: 50%;
        }

        :host([sm-7]) {
            -ms-flex: 0 0 58.333333%;
            flex: 0 0 58.333333%;
            max-width: 58.333333%;
        }

        :host([sm-8]) {
            -ms-flex: 0 0 66.666667%;
            flex: 0 0 66.666667%;
            max-width: 66.666667%;
        }
        
        :host([sm-9]) {
            -ms-flex: 0 0 75%;
            flex: 0 0 75%;
            max-width: 75%;
        }

        :host([sm-10]) {
            -ms-flex: 0 0 83.333333%;
            flex: 0 0 83.333333%;
            max-width: 83.333333%;
        }
        
        :host([sm-11]) {
            -ms-flex: 0 0 91.666667%;
            flex: 0 0 91.666667%;
            max-width: 91.666667%;
        }

        :host([sm-12]) {
            -ms-flex: 0 0 100%;
            flex: 0 0 100%;
            max-width: 100%;
        }
        
        :host([order-sm-first]) {
            -ms-flex-order: -1;
            order: -1;
        }

        :host([order-sm-last]) {
            -ms-flex-order: 13;
            order: 13;
        }
        
        :host([order-sm-0]) {
            -ms-flex-order: 0;
            order: 0;
        }

        :host([order-sm-1]) {
            -ms-flex-order: 1;
            order: 1;
        }

        :host([order-sm-2]) {
            -ms-flex-order: 2;
            order: 2;
        }

        :host([order-sm-3]) {
            -ms-flex-order: 3;
            order: 3;
        }

        :host([order-sm-4]) {
            -ms-flex-order: 4;
            order: 4;
        }

        :host([order-sm-5]) {
            -ms-flex-order: 5;
            order: 5;
        }

        :host([order-sm-6]) {
            -ms-flex-order: 6;
            order: 6;
        }

        :host([order-sm-7]) {
            -ms-flex-order: 7;
            order: 7;
        }

        :host([order-sm-8]) {
            -ms-flex-order: 8;
            order: 8;
        }

        :host([order-sm-9]) {
            -ms-flex-order: 9;
            order: 9;
        }

        :host([order-sm-10]) {
            -ms-flex-order: 10;
            order: 10;
        }

        :host([order-sm-11]) {
            -ms-flex-order: 11;
            order: 11;
        }

        :host([order-sm-12]) {
            -ms-flex-order: 12;
            order: 12;
        }

        :host([offset-sm-0]) {
            margin-left: 0;
        }

        :host([offset-sm-1]) {
            margin-left: 8.333333%;
        }

        :host([offset-sm-2]) {
            margin-left: 16.666667%;
        }
        
        :host([offset-sm-3]) {
            margin-left: 25%;
        }
        
        :host([offset-sm-4]) {
            margin-left: 33.333333%;
        }

        :host([offset-sm-5]) {
            margin-left: 41.666667%;
        }

        :host([offset-sm-6]) {
            margin-left: 50%;
        }

        :host([offset-sm-7]) {
            margin-left: 58.333333%;
        }

        :host([offset-sm-8]) {
            margin-left: 66.666667%;
        }

        :host([offset-sm-9]) {
            margin-left: 75%;
        }

        :host([offset-sm-10]) {
            margin-left: 83.333333%;
        }

        :host([offset-sm-11]) {
            margin-left: 91.666667%;
        }
    }
`;

const BsColumnMediumCss = css`
    
    :host([md]), 
    :host([md-1]), 
    :host([md-2]), 
    :host([md-3]), 
    :host([md-4]), 
    :host([md-5]), 
    :host([md-6]), 
    :host([md-7]), 
    :host([md-8]), 
    :host([md-9]), 
    :host([md-10]), 
    :host([md-11]), 
    :host([md-12]), 
    :host([md-auto]) {
        display: block;
        position: relative;
        width: 100%;
        min-height: 1px;
        padding-right: 15px;
        padding-left: 15px;
    }
    
    @media (min-width: 768px) {
        
        :host([md-auto]) {
            -ms-flex: 0 0 auto;
            flex: 0 0 auto;
            width: auto;
            max-width: none;
        }
        
        :host([md]) {
            -ms-flex-preferred-size: 0;
            flex-basis: 0;
            -ms-flex-positive: 1;
            flex-grow: 1;
            max-width: 100%;
        }

        :host([md-1]) {
            -ms-flex: 0 0 8.333333%;
            flex: 0 0 8.333333%;
            max-width: 8.333333%;
        }

        :host([md-2]) {
            -ms-flex: 0 0 16.666667%;
            flex: 0 0 16.666667%;
            max-width: 16.666667%;
        }

        :host([md-3]) {
            -ms-flex: 0 0 25%;
            flex: 0 0 25%;
            max-width: 25%;
        }

        :host([md-4]) {
            -ms-flex: 0 0 33.333333%;
            flex: 0 0 33.333333%;
            max-width: 33.333333%;
        }

        :host([md-5]) {
            -ms-flex: 0 0 41.666667%;
            flex: 0 0 41.666667%;
            max-width: 41.666667%;
        }
        
        :host([md-6]) {
            -ms-flex: 0 0 50%;
            flex: 0 0 50%;
            max-width: 50%;
        }

        :host([md-7]) {
            -ms-flex: 0 0 58.333333%;
            flex: 0 0 58.333333%;
            max-width: 58.333333%;
        }

        :host([md-8]) {
            -ms-flex: 0 0 66.666667%;
            flex: 0 0 66.666667%;
            max-width: 66.666667%;
        }

        :host([md-9]) {
            -ms-flex: 0 0 75%;
            flex: 0 0 75%;
            max-width: 75%;
        }

        :host([md-10]) {
            -ms-flex: 0 0 83.333333%;
            flex: 0 0 83.333333%;
            max-width: 83.333333%;
        }

        :host([md-11]) {
            -ms-flex: 0 0 91.666667%;
            flex: 0 0 91.666667%;
            max-width: 91.666667%;
        }

        :host([md-12]) {
            -ms-flex: 0 0 100%;
            flex: 0 0 100%;
            max-width: 100%;
        }

        :host([order-md-first]) {
            -ms-flex-order: -1;
            order: -1;
        }

        :host([order-md-last]) {
            -ms-flex-order: 13;
            order: 13;
        }

        :host([order-md-0]) {
            -ms-flex-order: 0;
            order: 0;
        }

        :host([order-md-1]) {
            -ms-flex-order: 1;
            order: 1;
        }

        :host([order-md-2]) {
            -ms-flex-order: 2;
            order: 2;
        }

        :host([order-md-3]) {
            -ms-flex-order: 3;
            order: 3;
        }

        :host([order-md-4]) {
            -ms-flex-order: 4;
            order: 4;
        }

        :host([order-md-5]) {
            -ms-flex-order: 5;
            order: 5;
        }

        :host([order-md-6]) {
            -ms-flex-order: 6;
            order: 6;
        }

        :host([order-md-7]) {
            -ms-flex-order: 7;
            order: 7;
        }

        :host([order-md-8]) {
            -ms-flex-order: 8;
            order: 8;
        }

        :host([order-md-9]) {
            -ms-flex-order: 9;
            order: 9;
        }

        :host([order-md-10]) {
            -ms-flex-order: 10;
            order: 10;
        }

        :host([order-md-11]) {
            -ms-flex-order: 11;
            order: 11;
        }

        :host([order-md-12]) {
            -ms-flex-order: 12;
            order: 12;
        }

        :host([offset-md-0]) {
            margin-left: 0;
        }

        :host([offset-md-1]) {
            margin-left: 8.333333%;
        }

        :host([offset-md-2]) {
            margin-left: 16.666667%;
        }

        :host([offset-md-3]) {
            margin-left: 25%;
        }

        :host([offset-md-4]) {
            margin-left: 33.333333%;
        }

        :host([offset-md-5]) {
            margin-left: 41.666667%;
        }

        :host([offset-md-6]) {
            margin-left: 50%;
        }

        :host([offset-md-7]) {
            margin-left: 58.333333%;
        }

        :host([offset-md-8]) {
            margin-left: 66.666667%;
        }

        :host([offset-md-9]) {
            margin-left: 75%;
        }

        :host([offset-md-10]) {
            margin-left: 83.333333%;
        }

        :host([offset-md-11]) {
            margin-left: 91.666667%;
        }
    }
`;

const BsColumnLargeCss = css`
    
    :host([lg]), 
    :host([lg-1]), 
    :host([lg-2]), 
    :host([lg-3]), 
    :host([lg-4]), 
    :host([lg-5]), 
    :host([lg-6]), 
    :host([lg-7]), 
    :host([lg-8]), 
    :host([lg-9]), 
    :host([lg-10]), 
    :host([lg-11]), 
    :host([lg-12]), 
    :host([lg-auto]) {
        display: block;
        position: relative;
        width: 100%;
        min-height: 1px;
        padding-right: 15px;
        padding-left: 15px;
    }
    
    @media (min-width: 992px) {
        
        :host([lg-auto]) {
            -ms-flex: 0 0 auto;
            flex: 0 0 auto;
            width: auto;
            max-width: none;
        }
        
        :host([lg]) {
            -ms-flex-preferred-size: 0;
            flex-basis: 0;
            -ms-flex-positive: 1;
            flex-grow: 1;
            max-width: 100%;
        }

        :host([lg-1]) {
            -ms-flex: 0 0 8.333333%;
            flex: 0 0 8.333333%;
            max-width: 8.333333%;
        }

        :host([lg-2]) {
            -ms-flex: 0 0 16.666667%;
            flex: 0 0 16.666667%;
            max-width: 16.666667%;
        }

        :host([lg-3]) {
            -ms-flex: 0 0 25%;
            flex: 0 0 25%;
            max-width: 25%;
        }

        :host([lg-4]) {
            -ms-flex: 0 0 33.333333%;
            flex: 0 0 33.333333%;
            max-width: 33.333333%;
        }

        :host([lg-5]) {
            -ms-flex: 0 0 41.666667%;
            flex: 0 0 41.666667%;
            max-width: 41.666667%;
        }

        :host([lg-6]) {
            -ms-flex: 0 0 50%;
            flex: 0 0 50%;
            max-width: 50%;
        }

        :host([lg-7]) {
            -ms-flex: 0 0 58.333333%;
            flex: 0 0 58.333333%;
            max-width: 58.333333%;
        }

        :host([lg-8]) {
            -ms-flex: 0 0 66.666667%;
            flex: 0 0 66.666667%;
            max-width: 66.666667%;
        }

        :host([lg-9]) {
            -ms-flex: 0 0 75%;
            flex: 0 0 75%;
            max-width: 75%;
        }

        :host([lg-10]) {
            -ms-flex: 0 0 83.333333%;
            flex: 0 0 83.333333%;
            max-width: 83.333333%;
        }

        :host([lg-11]) {
            -ms-flex: 0 0 91.666667%;
            flex: 0 0 91.666667%;
            max-width: 91.666667%;
        }

        :host([lg-12]) {
            -ms-flex: 0 0 100%;
            flex: 0 0 100%;
            max-width: 100%;
        }

        :host([order-lg-first]) {
            -ms-flex-order: -1;
            order: -1;
        }

        :host([order-lg-last]) {
            -ms-flex-order: 13;
            order: 13;
        }

        :host([order-lg-0]) {
            -ms-flex-order: 0;
            order: 0;
        }

        :host([order-lg-1]) {
            -ms-flex-order: 1;
            order: 1;
        }

        :host([order-lg-2]) {
            -ms-flex-order: 2;
            order: 2;
        }

        :host([order-lg-3]) {
            -ms-flex-order: 3;
            order: 3;
        }

        :host([order-lg-4]) {
            -ms-flex-order: 4;
            order: 4;
        }

        :host([order-lg-5]) {
            -ms-flex-order: 5;
            order: 5;
        }

        :host([order-lg-6]) {
            -ms-flex-order: 6;
            order: 6;
        }

        :host([order-lg-7]) {
            -ms-flex-order: 7;
            order: 7;
        }

        :host([order-lg-8]) {
            -ms-flex-order: 8;
            order: 8;
        }

        :host([order-lg-9]) {
            -ms-flex-order: 9;
            order: 9;
        }

        :host([order-lg-10]) {
            -ms-flex-order: 10;
            order: 10;
        }

        :host([order-lg-11]) {
            -ms-flex-order: 11;
            order: 11;
        }

        :host([order-lg-12]) {
            -ms-flex-order: 12;
            order: 12;
        }

        :host([offset-lg-0]) {
            margin-left: 0;
        }

        :host([offset-lg-1]) {
            margin-left: 8.333333%;
        }

        :host([offset-lg-2]) {
            margin-left: 16.666667%;
        }

        :host([offset-lg-3]) {
            margin-left: 25%;
        }

        :host([offset-lg-4]) {
            margin-left: 33.333333%;
        }

        :host([offset-lg-5]) {
            margin-left: 41.666667%;
        }

        :host([offset-lg-6]) {
            margin-left: 50%;
        }

        :host([offset-lg-7]) {
            margin-left: 58.333333%;
        }

        :host([offset-lg-8]) {
            margin-left: 66.666667%;
        }

        :host([offset-lg-9]) {
            margin-left: 75%;
        }

        :host([offset-lg-10]) {
            margin-left: 83.333333%;
        }

        :host([offset-lg-11]) {
            margin-left: 91.666667%;
        }
    }
`;

const BsColumnExtraLargeCss = css`
    
    :host([xl]), 
    :host([xl-1]), 
    :host([xl-2]), 
    :host([xl-3]), 
    :host([xl-4]), 
    :host([xl-5]), 
    :host([xl-6]), 
    :host([xl-7]), 
    :host([xl-8]), 
    :host([xl-9]), 
    :host([xl-10]), 
    :host([xl-11]), 
    :host([xl-12]), 
    :host([xl-auto]) {
        display: block;
        position: relative;
        width: 100%;
        min-height: 1px;
        padding-right: 15px;
        padding-left: 15px;
    }
    
    @media (min-width: 1200px) {
        
        :host([xl-auto]) {
            -ms-flex: 0 0 auto;
            flex: 0 0 auto;
            width: auto;
            max-width: none;
        }
        
        :host([xl]) {
            -ms-flex-preferred-size: 0;
            flex-basis: 0;
            -ms-flex-positive: 1;
            flex-grow: 1;
            max-width: 100%;
        }

        :host([xl-1]) {
            -ms-flex: 0 0 8.333333%;
            flex: 0 0 8.333333%;
            max-width: 8.333333%;
        }
        
        :host([xl-2]) {
            -ms-flex: 0 0 16.666667%;
            flex: 0 0 16.666667%;
            max-width: 16.666667%;
        }
        
        :host([xl-3]) {
            -ms-flex: 0 0 25%;
            flex: 0 0 25%;
            max-width: 25%;
        }
        
        :host([xl-4]) {
            -ms-flex: 0 0 33.333333%;
            flex: 0 0 33.333333%;
            max-width: 33.333333%;
        }
        
        :host([xl-5]) {
            -ms-flex: 0 0 41.666667%;
            flex: 0 0 41.666667%;
            max-width: 41.666667%;
        }
        
        :host([xl-6]) {
            -ms-flex: 0 0 50%;
            flex: 0 0 50%;
            max-width: 50%;
        }
        
        :host([xl-7]) {
            -ms-flex: 0 0 58.333333%;
            flex: 0 0 58.333333%;
            max-width: 58.333333%;
        }
        
        :host([xl-8]) {
            -ms-flex: 0 0 66.666667%;
            flex: 0 0 66.666667%;
            max-width: 66.666667%;
        }
        
        :host([xl-9]) {
            -ms-flex: 0 0 75%;
            flex: 0 0 75%;
            max-width: 75%;
        }
        
        :host([xl-10]) {
            -ms-flex: 0 0 83.333333%;
            flex: 0 0 83.333333%;
            max-width: 83.333333%;
        }
        
        :host([xl-11]) {
            -ms-flex: 0 0 91.666667%;
            flex: 0 0 91.666667%;
            max-width: 91.666667%;
        }
        
        :host([xl-12]) {
            -ms-flex: 0 0 100%;
            flex: 0 0 100%;
            max-width: 100%;
        }
        
        :host([order-xl-first]) {
            -ms-flex-order: -1;
            order: -1;
        }
        
        :host([order-xl-last]) {
            -ms-flex-order: 13;
            order: 13;
        }
        
        :host([order-xl-0]) {
            -ms-flex-order: 0;
            order: 0;
        }
        
        :host([order-xl-1]) {
            -ms-flex-order: 1;
            order: 1;
        }
        
        :host([order-xl-2]) {
            -ms-flex-order: 2;
            order: 2;
        }
        
        :host([order-xl-3]) {
            -ms-flex-order: 3;
            order: 3;
        }
        
        :host([order-xl-4]) {
            -ms-flex-order: 4;
            order: 4;
        }
        
        :host([order-xl-5]) {
            -ms-flex-order: 5;
            order: 5;
        }
        
        :host([order-xl-6]) {
            -ms-flex-order: 6;
            order: 6;
        }
        
        :host([order-xl-7]) {
            -ms-flex-order: 7;
            order: 7;
        }
        
        :host([order-xl-8]) {
            -ms-flex-order: 8;
            order: 8;
        }
        
        :host([order-xl-9]) {
            -ms-flex-order: 9;
            order: 9;
        }
        
        :host([order-xl-10]) {
            -ms-flex-order: 10;
            order: 10;
        }
        
        :host([order-xl-11]) {
            -ms-flex-order: 11;
            order: 11;
        }

        :host([order-xl-12]) {
            -ms-flex-order: 12;
            order: 12;
        }

        :host([offset-xl-0]) {
            margin-left: 0;
        }

        :host([offset-xl-1]) {
            margin-left: 8.333333%;
        }

        :host([offset-xl-2]) {
            margin-left: 16.666667%;
        }

        :host([offset-xl-3]) {
            margin-left: 25%;
        }

        :host([offset-xl-4]) {
            margin-left: 33.333333%;
        }

        :host([offset-xl-5]) {
            margin-left: 41.666667%;
        }

        :host([offset-xl-6]) {
            margin-left: 50%;
        }

        :host([offset-xl-7]) {
            margin-left: 58.333333%;
        }

        :host([offset-xl-8]) {
            margin-left: 66.666667%;
        }

        :host([offset-xl-9]) {
            margin-left: 75%;
        }

        :host([offset-xl-10]) {
            margin-left: 83.333333%;
        }

        :host([offset-xl-11]) {
            margin-left: 91.666667%;
        }
    }
`;

class BsColumn extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsColumnExtraSmallCss,
            BsColumnSmallCss,
            BsColumnMediumCss,
            BsColumnLargeCss,
            BsColumnExtraLargeCss
        ];
    }
    
    render() {
        return html`
            <slot></slot>
        `;
    }
}
if(!window.customElements.get('bs-column')) 
    window.customElements.define('bs-column', BsColumn);

class BsContainer extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                
                :host {
                    width: 100%;
                    display: block;
                    padding-right: 15px;
                    padding-left: 15px;
                    margin-right: auto;
                    margin-left: auto;
                }
        
                @media (min-width: 576px) {
                    :host:not([fluid]) {
                        max-width: 540px;
                    }
                }

                @media (min-width: 768px) {
                    :host:not([fluid]) {
                        max-width: 720px;
                    }
                }

                @media (min-width: 992px) {
                    :host:not([fluid]) {
                        max-width: 960px;
                    }
                }

                @media (min-width: 1200px) {
                    :host:not([fluid]) {
                        max-width: 1140px;
                    }
                }
        
                :host([fluid]) {
                    width: 100%;
                    display: block;
                    padding-right: 15px;
                    padding-left: 15px;
                    margin-right: auto;
                    margin-left: auto;
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
if(!window.customElements.get('bs-container'))  
    window.customElements.define('bs-container', BsContainer);

class BsFormLabel extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsColumnExtraSmallCss,
            BsColumnSmallCss,
            BsColumnMediumCss,
            BsColumnLargeCss,
            BsColumnExtraLargeCss,
            css`
                :host([column]) {
                    padding-top: calc(0.375rem + 1px);
                    padding-bottom: calc(0.375rem + 1px);
                    margin-bottom: 0;
                    font-size: inherit;
                    line-height: 1.5;
                }

                :host([column-lg]) {
                    padding-top: calc(0.5rem + 1px);
                    padding-bottom: calc(0.5rem + 1px);
                    font-size: 1.25rem;
                    line-height: 1.5;
                }

                :host([column-sm]) {
                    padding-top: calc(0.25rem + 1px);
                    padding-bottom: calc(0.25rem + 1px);
                    font-size: 0.875rem;
                    line-height: 1.5;
                }
        
                @media (min-width: 576px) {
                    
                    :host([inline]) {
                        display: -ms-flexbox;
                        display: flex;
                        -ms-flex-align: center;
                        align-items: center;
                        -ms-flex-pack: center;
                        justify-content: center;
                        margin-bottom: 0;
                    }
                }
            `
        ];
    }
    
    render() {
        return html`
            <label><slot></slot></label>
        `;
    }
    
    firstUpdated() {
        const labelElement = this.shadowRoot.querySelector('label');
        labelElement.addEventListener('click', event => this._handleEvent(event));
    }
    
    _handleEvent(event) {
        
        event.preventDefault();
        
        const disabledAttribute = this.hasAttribute('disabled');
        
        if(disabledAttribute) {
            return;
        }
        
        const labelClickedEvent = new CustomEvent('bs-form-label-click', {
            bubbles: true, 
            composed: true
        });

        this.dispatchEvent(labelClickedEvent);
    }
}
if(!window.customElements.get('bs-form-label'))  
    window.customElements.define('bs-form-label', BsFormLabel);

const BsFormInputMixin = (superClass) => class extends superClass {
    
    static get properties() {
        return {
            name: String,
            value: String,
            placeholder: String,
            type: String,
            pattern: String,
            maxlength: Number,
            minlength: Number,
            min: Number,
            max: Number,
            step: Number,
            readonly: {type: Boolean, reflect: true},
            inline: {type: Boolean, reflect: true},
            disabled: {type: Boolean, reflect: true},
            required: {type: Boolean, reflect: true},
            valid: {type: Boolean, reflect: true},
            invalid: {type: Boolean, reflect: true},
            skipValidation: {type: Boolean, attribute: 'skip-validation'},
            browserValidation: {type: Boolean, attribute: 'browser-validation'},
            browserMissingValueMsg: {type: String, attribute: 'browser-missing-value-msg'},
            browserMismatchValueMsg: {type: String, attribute: 'browser-mismatch-value-msg'},
            browserPatternValueMsg: {type: String, attribute: 'browser-pattern-value-msg'},
            browserTooLongValueMsg: {type: String, attribute: 'browser-too-long-value-msg'},
            browserTooShortValueMsg: {type: String, attribute: 'browser-too-short-value-msg'},
            browserRangeUnderflowMsg: {type: String, attribute: 'browser-range-underflow-msg'},
            browserRangeOverflowMsg: {type: String, attribute: 'browser-range-overflow-msg'},
            browserStepMismatchMsg: {type: String, attribute: 'browser-step-mismatch-msg'},
            browserBadInputValueMsg: {type: String, attribute: 'browser-bad-input-value-msg'}
        };
    }
    
    constructor() {
        super();
        this.type = 'text';
        this.value = undefined;
        this.readonly = false;
        this.inline = false;
        this.disabled = false;
        this.required = false;
        this.valid = false;
        this.invalid = false;
        this.skipValidation = false;
        this.browserValidation = false;
        this.browserMissingValueMsg = '';
        this.browserMismatchValueMsg = '';
        this.browserPatternValueMsg = '';
        this.browserTooLongValueMsg = '';
        this.browserTooShortValueMsg = '';
        this.browserRangeUnderflowMsg = '';
        this.browserRangeOverflowMsg = '';
        this.browserStepMismatchMsg = '';
        this.browserBadInputValueMsg = '';
    }
    
    firstUpdated() {
        const inputElement = this.shadowRoot.querySelector('input');
        inputElement.addEventListener('keyup', () => this._handleKeyUp());
    }
    
    _handleKeyUp() {
        
        // if element has been called to be validated before
        // both valid and invalid start out as false
        if(this.valid || this.invalid) {
            this.validate();
        }
    }
    
    isDisabled() {
        return this.disabled;
    }
    
    setFocus() {
        const inputElement = this.shadowRoot.querySelector('input');
        inputElement.focus();
    }
    
    getInputName() {
        return this.name;
    }

    getInputValue() {
        const inputElement = this.shadowRoot.querySelector('input');
        return inputElement.value;
    }
    
    isValidatable() {
        return !this.skipValidation;
    }
    
    validate() {

        if(this.skipValidation) {
            return;
        }
        
        const inputElement = this.shadowRoot.querySelector('input');

        const validityState = inputElement.validity;
        
        if(this.browserValidation) {
            this._executeBrowserValidation(inputElement, validityState);
            return;
        }
        
        this._executeCustomValidation(validityState);
        
        return validityState.valid;
    }
    
    _executeCustomValidation(validityState) {
        
        if(validityState.valid) {
            this.valid = true;
            this.invalid = false;
        } else {
            this.valid = false;
            this.invalid = true;
        }
        
        const formInputValidationEvent = new CustomEvent('bs-form-input-validation', {
            bubbles: true, 
            composed: true,
            detail: {
                validityState: validityState
            }
        });
            
        this.dispatchEvent(formInputValidationEvent);
    }
    
    _executeBrowserValidation(inputElement, validityState) {

        // has user specified custom message
        const customValidationMessage = this._getCustomValidationMessage(validityState);

        if(customValidationMessage) {
            inputElement.setCustomValidity(customValidationMessage);
        }

        inputElement.reportValidity();
    }
    
    _getCustomValidationMessage(validityState) {
        
        // true if the element has a required attribute, but no value
        // false if the element has a required attribute, with value
        if(validityState.valueMissing) {
            return this.browserMissingValueMsg;
        }
        
        // true if the value is not in the required syntax (when type is email or url)
        // false if the syntax is correct
        if(validityState.typeMismatch) {
            return this.browserMismatchValueMsg;
        }
        
        // true if the value does not match the specified pattern
        // false if it does match the specified pattern
        if(validityState.patternMismatch) {
            return this.browserPatternValueMsg;
        }
        
        // true if the value exceeds the specified maxlength
        // false if its length is less than or equal to the maximum length
        if(validityState.tooLong) {
            return this.browserTooLongValueMsg;
        }
        
        // true if the value fails to meet the specified minlength
        // false if its length is greater than or equal to the minimum length
        if(validityState.tooShort) {
            return this.browserTooShortValueMsg;
        }
        
        // true if the value is less than the minimum specified by the min attribute
        // false if it is greater than or equal to the minimum
        if(validityState.rangeUnderflow) {
            return this.browserRangeUnderflowMsg;
        }
        
        // true if the value is greater than the maximum specified by the max attribute
        // false if it is less than or equal to the maximum
        if(validityState.rangeOverflow) {
            return this.browserRangeOverflowMsg;
        }
        
        // true if the value does not fit the rules determined by the step attribute 
        // (that is, it's not evenly divisible by the step value)
        // false if it does fit the step rule
        if(validityState.stepMismatch) {
            return this.browserStepMismatchMsg;
        }
        
        // true if the user has provided input that the browser is unable to convert
        if(validityState.badInput) {
            return this.browserBadInputValueMsg;
        }
    }
};

class BsFormInput extends BsFormInputMixin(LitElement) {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsFormControlCss,
            BsFormControlSizeCss
        ];
    }
    
    render() {
        return html`
            <input 
                class="form-control"
                .type=${this.type}
                value=${ifDefined(this.value)}
                name=${ifDefined(this.name)}
                maxlength=${ifDefined(this.maxlength)}
                minlength=${ifDefined(this.minlength)}
                max=${ifDefined(this.max)}
                min=${ifDefined(this.min)}
                step=${ifDefined(this.step)}
                pattern=${ifDefined(this.pattern)}
                placeholder=${ifDefined(this.placeholder)}
                ?readonly=${this.readonly}
                ?required=${this.required}
                ?disabled=${this.disabled} />
        `;
    }
}
if(!window.customElements.get('bs-form-input'))
    window.customElements.define('bs-form-input', BsFormInput);

class BsFormInputPlaintext extends BsFormInputMixin(LitElement) {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsFormControlSizeCss,
            css`
                :host {
                    display: block;
                }
                
                input {
                    display: block;
                    width: 100%;
                    padding-top: 0.375rem;
                    padding-bottom: 0.375rem;
                    margin-bottom: 0;
                    line-height: 1.5;
                    color: #212529;
                    background-color: transparent;
                    border: solid transparent;
                    border-width: 1px 0;
                }

                :host([sm]) input,
                :host([lg]) input {
                    padding-right: 0;
                    padding-left: 0;
                }
        
                @media (min-width: 576px) {
                    
                    :host([inline]) input {
                        display: inline-block;
                    }
                }
            `
        ];
    }
    
    render() {
        return html`
            <input 
                type="text"
                .value=${this.value}
                name=${ifDefined(this.name)}
                maxlength=${ifDefined(this.maxlength)}
                minlength=${ifDefined(this.minlength)}
                pattern=${ifDefined(this.pattern)}
                placeholder=${ifDefined(this.placeholder)}
                ?readonly=${this.readonly}
                ?required=${this.required}
                ?disabled=${this.disabled} />
        `;
    }
}
if(!window.customElements.get('bs-form-input-plaintext')) 
    window.customElements.define('bs-form-input-plaintext', BsFormInputPlaintext);

class BsFormInputFeedback extends LitElement {
    
    static get properties() {
        return {
            validValueMsg: {type: String, attribute: 'valid-value-msg'},
            missingValueMsg: {type: String, attribute: 'missing-value-msg'},
            mismatchValueMsg: {type: String, attribute: 'mismatch-value-msg'},
            patternValueMsg: {type: String, attribute: 'pattern-value-msg'},
            tooLongValueMsg: {type: String, attribute: 'too-long-value-msg'},
            tooShortValueMsg: {type: String, attribute: 'too-short-value-msg'},
            rangeUnderflowMsg: {type: String, attribute: 'range-underflow-msg'},
            rangeOverflowMsg: {type: String, attribute: 'range-overflow-msg'},
            stepMismatchMsg: {type: String, attribute: 'step-mismatch-msg'},
            badInputValueMsg: {type: String, attribute: 'bad-input-value-msg'},
            feedbackMsg: {type: String, reflect: true},
            valid: {type: Boolean, reflect: true},
            invalid: {type: Boolean, reflect: true}
        };
    }
    
    static get styles() {
        return [
            BsContentRebootCss$1,
            css`
                :host {
                    display: none;
                }
                
                :host([valid]) {
                    display: block;
                    width: 100%;
                    margin-top: .25rem;
                    font-size: 80%;
                    color: #28a745;
                }
                
                :host([invalid]) {
                    display: block;
                    width: 100%;
                    margin-top: .25rem;
                    font-size: 80%;
                    color: #dc3545;
                }
            `
        ];
    }
    
    render() {
        return html`
            ${this.feedbackMsg}
        `;
    }
    
    constructor() {
        super();
        this.feedbackMsg = '';
        this.validValueMsg = '';
        this.missingValueMsg = '';
        this.mismatchValueMsg = '';
        this.patternValueMsg = '';
        this.tooLongValueMsg = '';
        this.tooShortValueMsg = '';
        this.rangeUnderflowMsg = '';
        this.rangeOverflowMsg = '';
        this.stepMismatchMsg = '';
        this.badInputValueMsg = '';
        this.valid = false;
        this.invalid = false;
    }
    
    showValidationFeedback(validityState) {
        
        if(validityState.valid) {
            
            this.valid = true;
            this.invalid = false;
            
            if(this.validValueMsg) {
                this.feedbackMsg = this.validValueMsg;
            } else {
                this.feedbackMsg = '';
            }
            
        } else {
            
            this.valid = false;
            this.invalid = true;
            
            const validationMsg = this._getCustomValidationMessage(validityState);
            
            if(validationMsg) {
                this.feedbackMsg = validationMsg;
            }
        }
    }
    
    _getCustomValidationMessage(validityState) {
        
        if(validityState.valueMissing) {
            return this.missingValueMsg;
        }
        
        if(validityState.typeMismatch) {
            return this.mismatchValueMsg;
        }
        
        if(validityState.patternMismatch) {
            return this.patternValueMsg;
        }
        
        if(validityState.tooLong) {
            return this.tooLongValueMsg;
        }
        
        if(validityState.tooShort) {
            return this.tooShortValueMsg;
        }
        
        if(validityState.rangeUnderflow) {
            return this.rangeUnderflowMsg;
        }
        
        if(validityState.rangeOverflow) {
            return this.rangeOverflowMsg;
        }
        
        if(validityState.stepMismatch) {
            return this.stepMismatchMsg;
        }
        
        if(validityState.badInput) {
            return this.badInputValueMsg;
        }
    }
}
if(!window.customElements.get('bs-form-input-feedback')) 
    window.customElements.define('bs-form-input-feedback', BsFormInputFeedback);

class BsFormHelpText extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsTextColorCss,
            css`
                .form-text {
                    display: block;
                    margin-top: 0.25rem;
                }
            `
        ];
    }
    
    render() {
        return html`
            <small class="form-text text-muted">
                <slot></slot>
            </small>
        `;
    }
}
if(!window.customElements.get('bs-form-help-text')) 
    window.customElements.define('bs-form-help-text', BsFormHelpText);

class BsFormGroup extends LitElement {
    
    static get properties() {
        return {
            inline: {type: Boolean, reflect: true},
            disabled: {type: Boolean, reflect: true}
        };
    }
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsColumnExtraSmallCss,
            BsColumnSmallCss,
            BsColumnMediumCss,
            BsColumnLargeCss,
            BsColumnExtraLargeCss,
            css`
                :host {
                    display: block;
                    margin-bottom: 1rem;
                }
        
                :host([row]) {
                    display: -ms-flexbox;
                    display: flex;
                    -ms-flex-wrap: wrap;
                    flex-wrap: wrap;
                    margin-right: -15px;
                    margin-left: -15px;
                }
        
                @media (min-width: 576px) {
                    
                    :host([inline]) {
                        display: -ms-flexbox;
                        display: flex;
                        -ms-flex: 0 0 auto;
                        flex: 0 0 auto;
                        -ms-flex-flow: row wrap;
                        flex-flow: row wrap;
                        -ms-flex-align: center;
                        align-items: center;
                        margin-bottom: 0;
                    }
                }
            `
        ];
    }
    
    render() {
        return html`
            <slot name="label"></slot>
            <slot name="control"></slot>
            <slot name="feedback"></slot>
            <slot name="helptext"></slot>
        `;
    }
    
    constructor() {
        super();
        this.inline = false;
        this.disabled = false;
    }
    
    firstUpdated() {
        this.addEventListener('bs-form-label-click', () => this._handleLabelClickEvent());
        this.addEventListener('bs-form-input-validation', event => this._handleInputValidationEvent(event));
    }
    
    updated(changedProperties) {
        super.updated();
        
        if (changedProperties.has('disabled')) {
            this._disabledChanged();
        }
        
        if (changedProperties.has('inline')) {
            this._inlineChanged();
        }
    }
    
    isDisabled() {
        return this.disabled;
    }
    
    _handleInputValidationEvent(event) {
        
        const validityState = event.detail.validityState;
        const inputFeedbackElement = this._retrieveFeedbackElement();
        
        if(inputFeedbackElement) {
            inputFeedbackElement.showValidationFeedback(validityState);
        }
    }
    
    _handleLabelClickEvent() {
        
        const inputElement = this._retrieveInputElement();
        
        if(inputElement) {
            inputElement.setFocus();
        }
    }
    
    _inlineChanged() {
        
        if(this.inline) {
            this._setElementsToInline();
        }
    }
    
    _disabledChanged() {
        
        if(this.disabled) {
            this._setElementsToDisabled();
        }
    }
    
    _setElementsToDisabled() {
        
        const inputElement = this._retrieveInputElement();
        const labelElement = this._retrieveLabelElement();
        
        if(inputElement) {
            inputElement.setAttribute('disabled', '');
        }
        
        if(labelElement) {
            labelElement.setAttribute('disabled', '');
        }
    }
    
    _setElementsToInline() {
        
        const inputElement = this._retrieveInputElement();
        const labelElement = this._retrieveLabelElement();
        
        if(inputElement) {
            inputElement.setAttribute('inline', '');
        }

        if(labelElement) {
            labelElement.setAttribute('inline', '');
        }
    }
    
    _retrieveInputElement() {
        
        const controlSlotElement = this.shadowRoot.querySelector('slot[name="control"]');
        const controlSlotNodes = controlSlotElement.assignedNodes();
        
        const inputElement = this._findInputElement(controlSlotNodes);
        
        return inputElement;
    }
    
    _retrieveLabelElement() {
        
        const labelSlotElement = this.shadowRoot.querySelector('slot[name="label"]');
        const labelSlotNodes = labelSlotElement.assignedNodes();
        
        const labelElement = this._findLabelElement(labelSlotNodes);
        
        return labelElement;
    }
    
    _retrieveFeedbackElement() {
        
        const feedbackSlotElement = this.shadowRoot.querySelector('slot[name="feedback"]');
        const feedbackSlotNodes = feedbackSlotElement.assignedNodes();
        
        const feedbackElement = this._findInputFeedbackElement(feedbackSlotNodes);
        
        return feedbackElement;
    }
    
    _findInputFeedbackElement(slotNodes) {
        
        for (let index = 0; index < slotNodes.length; index++) {
            const slotItem = slotNodes[index];
            if(this._isInputFeedbackElement(slotItem)) {
                return slotItem;
            }
        }
    }
    
    _findInputElement(slotNodes) {

        for (let index = 0; index < slotNodes.length; index++) {
            const slotItem = slotNodes[index];
            if (this._isInputElement(slotItem) 
                    || this._isPlainTextInputElement(slotItem) 
                    || this._isSelectInputElement(slotItem)
                    || this._isTextAreaElement(slotItem)) {
                return slotItem;
            }
        }
    }
    
    _findLabelElement(slotNodes) {

        for (let index = 0; index < slotNodes.length; index++) {
            const slotItem = slotNodes[index];
            if (this._isLabelElement(slotItem)) {
                return slotItem;
            }
        }
    }
    
    _isInputFeedbackElement(element) {
        return element.nodeType === Node.ELEMENT_NODE
                && (element.localName === 'bs-form-input-feedback');
    }
    
    _isInputElement(element) {
        return element.nodeType === Node.ELEMENT_NODE
                && (element.localName === 'bs-form-input');
    }
    
    _isSelectInputElement(element) {
        return element.nodeType === Node.ELEMENT_NODE
                && (element.localName === 'bs-form-select');
    }
    
    _isTextAreaElement(element) {
        return element.nodeType === Node.ELEMENT_NODE
                && (element.localName === 'bs-form-textarea');
    }
    
    _isPlainTextInputElement(element) {
        return element.nodeType === Node.ELEMENT_NODE
                && (element.localName === 'bs-form-input-plaintext');
    }
    
    _isLabelElement(element) {
        return element.nodeType === Node.ELEMENT_NODE
                && (element.localName === 'bs-form-label');
    }
}
if(!window.customElements.get('bs-form-group'))  
    window.customElements.define('bs-form-group', BsFormGroup);

class BsFormFileInput extends LitElement {
    
    static get properties() {
        return {
            placeholder: {type: String, reflect: true}
        };
    }
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                .form-control-file {
                    display: block;
                    width: 100%;
                }
            `
        ];
    }
    
    render() {
        return html`
            <input 
                type="file"
                class="form-control-file"
                .placeholder=${this.placeholder} />
        `;
    }
    
    constructor() {
        super();
        this.placeholder = '';
    }
    
    setFocus() {
        const inputElement = this.shadowRoot.querySelector('input');
        inputElement.focus();
    }
}
if(!window.customElements.get('bs-form-file-input')) 
    window.customElements.define('bs-form-file-input', BsFormFileInput);

class BsFormFieldset extends LitElement {

    static get properties() {
        return {
            disabled: {type: Boolean, value: false}
        };
    }
    
    static get styles() {
        return [
            BsContentRebootCss
        ];
    }

    render() {
        return html`
            <fieldset>
                <slot></slot>
            </fieldset>
        `;
    }
    
    constructor() {
        super();
        this.disabled = false;
    }
    
    firstUpdated() {
        this._disableElements();
    }
    
    _disableElements() {
        
        if(!this.disabled) {
            return;
        }
        
        const slotElement = this.shadowRoot.querySelector('slot');
        const slotNodes = slotElement.assignedNodes();
        
        this._disableFormGroups(slotNodes);
        this._disableFormCheckGroups(slotNodes);
        this._disableButtons(slotNodes);
    }
    
    _disableButtons(slotNodes) {
        
        const buttonElements = this._retrieveButtonElements(slotNodes);
        
        for(let index = 0; index < buttonElements.length; index++) {
            
            const buttonItem = buttonElements[index];
            buttonItem.setAttribute('disabled', '');
        }
    }
    
    _disableFormCheckGroups(slotNodes) {
        
        const formCheckGroupElements = this._retrieveFormCheckGroupElements(slotNodes);
        
        for(let index = 0; index < formCheckGroupElements.length; index++) {
            
            const formGroupItem = formCheckGroupElements[index];
            formGroupItem.setAttribute('disabled', '');
        }
    }
    
    _disableFormGroups(slotNodes) {
        
        const formGroupElements = this._retrieveFormGroupElements(slotNodes);
        
        for(let index = 0; index < formGroupElements.length; index++) {
            
            const formGroupItem = formGroupElements[index];
            formGroupItem.setAttribute('disabled', '');
        }
    }
    
    _retrieveFormGroupElements(slotNodes) {
        
        const formGroupNodes = [];
        
        for (let index = 0; index < slotNodes.length; index++) {
            const slotElement = slotNodes[index];
            if (this._isFormGroupElement(slotElement)) {
                formGroupNodes.push(slotElement);
            }
        }
        
        return formGroupNodes;
    }
    
    _retrieveFormCheckGroupElements(slotNodes) {
        
        const formCheckGroupNodes = [];
        
        for (let index = 0; index < slotNodes.length; index++) {
            const slotElement = slotNodes[index];
            if (this._isFormCheckGroupElement(slotElement)) {
                formCheckGroupNodes.push(slotElement);
            }
        }
        
        return formCheckGroupNodes;
    }
    
    _retrieveButtonElements(slotNodes) {
        
        const buttonNodes = [];
        
        for (let index = 0; index < slotNodes.length; index++) {
            const slotElement = slotNodes[index];
            if (this._isButtonElement(slotElement)) {
                buttonNodes.push(slotElement);
            }
        }
        
        return buttonNodes;
    }
    
    _isButtonElement(element) {
        return element.nodeType === Node.ELEMENT_NODE
                && ((element.localName === 'bs-button')
                || (element.localName === 'bs-input-button')
                || (element.localName === 'bs-link-button'));
    }
    
    _isFormGroupElement(element) {
        return element.nodeType === Node.ELEMENT_NODE
                && (element.localName === 'bs-form-group');
    }
    
    _isFormCheckGroupElement(element) {
        return element.nodeType === Node.ELEMENT_NODE
                && (element.localName === 'bs-form-check-group');
    }
}
if(!window.customElements.get('bs-form-fieldset')) 
    window.customElements.define('bs-form-fieldset', BsFormFieldset);

class BsFormCheckboxInput extends BsFormInputMixin(LitElement) {
    
    static get properties() {
        return {
            static: {type: Boolean, reflect: true},
            checked: {type: Boolean, reflect: true}
        };
    }
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsPositionCss,
            css`
                input {
                    position: var(--bs-form-checkbox-input-position, absolute);
                    margin-top: var(--bs-form-checkbox-input-margin-top, 0.3rem);
                    margin-left: var(--bs-form-checkbox-input-margin-left, -1.25rem);
                }
                
                :host([inline]) {
                    display: inline-flex;
                }
                
                :host([inline]) input {
                    position: static;
                    margin-top: 0;
                    margin-right: 0.3125rem;
                    margin-left: 0;
                }
                
                @media (min-width: 576px) {
        
                    :host([inline]) input {
                        position: relative;
                        margin-top: 0;
                        margin-right: 0.25rem;
                        margin-left: 0;
                    }
                }
            `
        ];
    }
    
    render() {
        return html`
            <input 
                type="checkbox"
                name=${this.name}
                ?checked=${this.checked}
                ?required=${this.required}
                ?disabled=${this.disabled} />
        `;
    }
    
    constructor() {
        super();
        this.static = false;
        this.checked = false;
    }
    
    firstUpdated() {
        this._applyStaticCss();
    }
    
    _applyStaticCss() {
        
        if(this.static) {
            const checkboxElement = this.shadowRoot.querySelector('input');
            checkboxElement.classList.add('position-static');
        }
    }
    
    check() {
        const checkboxElement = this.shadowRoot.querySelector('input');
        checkboxElement.checked = true;
    }
    
    uncheck() {
        const checkboxElement = this.shadowRoot.querySelector('input');
        checkboxElement.checked = false;
    }
    
    toggle() {
        const checkboxElement = this.shadowRoot.querySelector('input');
        checkboxElement.checked = !checkboxElement.checked;
    }
    
    getInputValue() {
        const checkboxElement = this.shadowRoot.querySelector('input');
        return checkboxElement.checked;
    }
}
if(!window.customElements.get('bs-form-checkbox-input'))  
    window.customElements.define('bs-form-checkbox-input', BsFormCheckboxInput);

class BsFormCheckLabel extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            css`
                label {
                    margin-bottom: 0;
                }
        
                :host([disabled]) label {
                    color: #6c757d;
                }
                
                :host([valid]) label {
                    color: #28a745;
                }
                
                :host([invalid]) label {
                    color: #dc3545;
                }
            `
        ];
    }
    
    render() {
        return html`
            <label><slot></slot></label>
        `;
    }
    
    firstUpdated() {
        const labelElement = this.shadowRoot.querySelector('label');
        labelElement.addEventListener('click', event => this._handleEvent(event));
    }
    
    _handleEvent(event) {
        
        event.preventDefault();
        
        const disabledAttribute = this.hasAttribute('disabled');
        
        if(disabledAttribute) {
            return;
        }
        
        const labelClickedEvent = new CustomEvent('bs-form-check-label-click', {
            bubbles: true, 
            composed: true
        });

        this.dispatchEvent(labelClickedEvent);
    }
}
if(!window.customElements.get('bs-form-check-label')) 
    window.customElements.define('bs-form-check-label', BsFormCheckLabel);

class BsFormCheckGroup extends LitElement {
    
    static get properties() {
        return {
            inline: {type: Boolean, reflect: true},
            disabled: {type: Boolean, reflect: true}
        };
    }
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                :host {
                    position: relative;
                    display: block;
                    padding-left: 1.25rem;
                }
                
                :host([inline]) {
                    display: -ms-inline-flexbox;
                    display: inline-flex;
                    align-items: center;
                    padding-left: 0;
                    margin-right: 0.75rem;
                }
            `
        ];
    }
    
    render() {
        return html`
            <slot name="check"></slot>
            <slot name="label"></slot>
            <slot name="feedback"></slot>
            <slot></slot>
        `;
    }
    
    constructor() {
        super();
        this.disabled = false;
        this.inline = false;
    }
    
    firstUpdated() {
        this.addEventListener('bs-form-check-label-click', () => this._handleLabelClick());
        this.addEventListener('bs-form-input-validation', event => this._handleInputValidationEvent(event));
    }
    
    updated(changedProperties) {
        
        if (changedProperties.has('disabled')) {
            this._disabledChanged();
        }
        
        if (changedProperties.has('inline')) {
            this._inlineChanged();
        }
    }
    
    isDisabled() {
        return this.disabled;
    }
    
    _handleInputValidationEvent(event) {
        
        const validityState = event.detail.validityState;
        const inputFeedbackElement = this._retrieveFeedbackElement();
        const labelElement = this._retrieveLabelElement();
        
        if(inputFeedbackElement) {
            inputFeedbackElement.showValidationFeedback(validityState);
        }
        
        if(validityState.valid) {
            labelElement.setAttribute('valid', '');
            labelElement.removeAttribute('invalid');
        } else {
            labelElement.setAttribute('invalid', '');
            labelElement.removeAttribute('valid');
        }
    }
    
    _handleLabelClick() {
        
        const inputElement = this._retrieveInputElement();
        
        if(inputElement) {
            inputElement.toggle();
        }
    }
    
    _inlineChanged() {
        
        if(this.inline) {
            this._setElementsToInline();
        }
    }
    
    _disabledChanged() {
        
        if(this.disabled) {
            this._setElementsToDisabled();
        }
    }
    
    // TODO this is not optiomal. instead of
    // setting attributes we should instead use css properties
    
    _setElementsToDisabled() {
        
        const inputElement = this._retrieveInputElement();
        const labelElement = this._retrieveLabelElement();
        
        if(inputElement) {
            inputElement.setAttribute('disabled', '');
        }
        
        if(labelElement) {
            labelElement.setAttribute('disabled', '');
        }
    }
    
    _setElementsToInline() {
        
        const inputElement = this._retrieveInputElement();
        const labelElement = this._retrieveLabelElement();
        
        if(inputElement) {
            inputElement.setAttribute('inline', '');
        }

        if(labelElement) {
            labelElement.setAttribute('inline', '');
        }
    }
    
    _retrieveInputElement() {
        
        const checkSlotElement = this.shadowRoot.querySelector('slot[name="check"]');
        const checkSlotNodes = checkSlotElement.assignedNodes();
        const inputElement = this._findFormCheckInputElement(checkSlotNodes);
        
        return inputElement;
    }
    
    _retrieveLabelElement() {
        
        const labelSlotElement = this.shadowRoot.querySelector('slot[name="label"]');
        const labelSlotNodes = labelSlotElement.assignedNodes();
        const labelElement = this._findLabelElement(labelSlotNodes);
        
        return labelElement;
    }
    
    _retrieveFeedbackElement() {
        
        const feedbackSlotElement = this.shadowRoot.querySelector('slot[name="feedback"]');
        const feedbackSlotNodes = feedbackSlotElement.assignedNodes();
        
        const feedbackElement = this._findInputFeedbackElement(feedbackSlotNodes);
        
        return feedbackElement;
    }
    
    _findFormCheckInputElement(slotNodes) {

        for (let index = 0; index < slotNodes.length; index++) {
            
            const slotItem = slotNodes[index];
            
            if (this._isFormCheckboxInputElement(slotItem) || 
                this._isFormRadioInputElement(slotItem)) {
                return slotItem;
            }
        }
    }
    
    _findLabelElement(slotNodes) {
        
        for (let index = 0; index < slotNodes.length; index++) {
            
            const slotItem = slotNodes[index];
            
            if (this._isLabelElement(slotItem)) {
                return slotItem;
            }
        }
    }
    
    _findInputFeedbackElement(slotNodes) {
        
        for (let index = 0; index < slotNodes.length; index++) {
            const slotItem = slotNodes[index];
            if(this._isInputFeedbackElement(slotItem)) {
                return slotItem;
            }
        }
    }
    
    _isInputFeedbackElement(element) {
        return element.nodeType === Node.ELEMENT_NODE
                && (element.localName === 'bs-form-input-feedback');
    }
    
    _isFormCheckboxInputElement(element) {
        return element.nodeType === Node.ELEMENT_NODE
                && (element.localName === 'bs-form-checkbox-input');
    }
    
    _isFormRadioInputElement(element) {
        return element.nodeType === Node.ELEMENT_NODE
                && (element.localName === 'bs-form-radio-input');
    }
    
    _isLabelElement(element) {
        return element.nodeType === Node.ELEMENT_NODE
                && (element.localName === 'bs-form-check-label');
    }
}
if(!window.customElements.get('bs-form-check-group')) 
    window.customElements.define('bs-form-check-group', BsFormCheckGroup);

class BsFormTextarea extends LitElement {
    
    static get properties() {
        return {
            rows: Number,
            cols: Number,
            maxlength: Number,
            minlength: Number,
            tabIndex: Number,
            placeholder: String,
            wrap: {type: String, reflect: true},
            required: {type: Boolean, reflect: true},
            disabled: {type: Boolean, reflect: true},
            valid: {type: Boolean, reflect: true},
            invalid: {type: Boolean, reflect: true},
            value: {type: String, reflect: true}
        };
    }
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsFormControlCss,
            css`
                textarea.form-control {
                    height: auto;
                }
            `
        ];
    }
    
    render() {
        return html`
            
            <textarea 
                class="form-control"
                tabIndex=${ifDefined(this.tabIndex)}
                .wrap=${this.wrap}
                rows=${ifDefined(this.rows)}
                cols=${ifDefined(this.cols)}
                minlength=${ifDefined(this.minlength)}
                maxlength=${ifDefined(this.maxlength)}
                ?required=${this.required}
                ?disabled=${this.disabled}
                .value=${this.value}
                placeholder=${ifDefined(this.placeholder)}>
            </textarea>
        `;
    }
    
    constructor() {
        super();
        this.value = '';
        this.wrap = 'off';
        this.required = false;
        this.disabled = false;
        this.valid = false;
        this.invalid = false;
    }
    
    setFocus() {
        const textareaElement = this.shadowRoot.querySelector('textarea');
        textareaElement.focus();
    }
    
    validate() {
        const textareaElement = this.shadowRoot.querySelector('textarea');
        return textareaElement.checkValidity();
    }
    
    getValidity() {
        const textareaElement = this.shadowRoot.querySelector('textarea');
        return textareaElement.validity;
    }
}
if(!window.customElements.get('bs-form-textarea'))  
    window.customElements.define('bs-form-textarea', BsFormTextarea);

export { BsForm, BsFormCheckGroup, BsFormCheckLabel, BsFormCheckboxInput, BsFormFieldset, BsFormFileInput, BsFormGroup, BsFormHelpText, BsFormInput, BsFormInputFeedback, BsFormInputMixin, BsFormInputPlaintext, BsFormLabel, BsFormRadioGroup, BsFormRadioInput, BsFormRange, BsFormRow, BsFormSelect, BsFormTextarea };
