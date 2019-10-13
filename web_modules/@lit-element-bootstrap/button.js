import { h as html } from '../common/lit-html-9b6153da.js';
import { css, LitElement } from '../lit-element.js';
import { B as BsContentRebootCss } from '../common/bs-content-reboot.css-c5865ddd.js';
import { B as BsContentTypographyCss } from '../common/bs-content-typography.css-0b50b318.js';
export { B as BsCloseButton } from '../common/bs-close-button-9021156f.js';

const defaultThemeColors = new Map([['primary', '#007bff'], ['secondary', '#6c757d'], ['success', '#28a745'], ['info', '#17a2b8'], ['warning', '#ffc107'], ['danger', '#dc3545'], ['light', '#f8f9fa'], ['dark', '#343a40']]);

const BsButtonMixin = superClass => class extends superClass {
  static get properties() {
    return {
      action: String,
      toggle: {
        type: Boolean,
        reflect: true
      },
      active: {
        type: Boolean,
        reflect: true
      },
      disabled: {
        type: Boolean,
        reflect: true
      },
      dropdownToggle: {
        type: Boolean,
        reflect: true,
        attribute: 'dropdown-toggle'
      }
    };
  }

  constructor() {
    super();
    this.active = false;
    this.toggle = false;
    this.action = 'button';
    this.disabled = false;
    this.dropdownToggle = false;
  }

  firstUpdated() {
    const btnElement = this._retrieveButtonElement();

    this._applyButtonActivateState(btnElement);

    this._applyButtonTypeIfApplicable();

    btnElement.addEventListener('click', event => this._handleButtonClick(event));
    btnElement.addEventListener('focusout', event => this._handleFocusOut(event));

    this._setupDefaultThemeColors();
  }

  updated(changedProperties) {
    super.updated();

    if (changedProperties.has('disabled')) {
      this._disabledChanged();
    }
  }

  _setupDefaultThemeColors() {
    const hostElement = this.shadowRoot.host;

    for (let [key, value] of defaultThemeColors) {
      if (hostElement.hasAttribute(key)) {
        this._updateCssProperty(hostElement, key, value);
      }
    }
  }

  _updateCssProperty(hostElement, cssPropName, cssPropValue) {
    const cssVarName = '--' + cssPropName;

    if (!getComputedStyle(hostElement).getPropertyValue(cssVarName)) {
      hostElement.style.setProperty(cssVarName, cssPropValue);
    }
  }

  _disabledChanged() {
    const buttonElement = this._retrieveButtonElement();

    if (this.disabled) {
      buttonElement.classList.add('disabled');
      buttonElement.setAttribute('disabled', '');
    } else {
      buttonElement.classList.remove('disabled');
      buttonElement.removeAttribute('disabled');
    }
  }

  _handleFocusOut(event) {
    if (this.disabled) {
      return;
    }

    if (this.active && !this.toggle) {
      this._updateToggleState();
    }

    const btnFocusOutEvent = new CustomEvent('bs-button-focusout', {
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(btnFocusOutEvent);
  }

  _handleButtonClick(event) {
    if (this._blockDefaultEvent()) {
      event.preventDefault();
    }

    if (this.disabled) {
      return;
    }

    this._updateButtonFocus();

    this._updateToggleState();

    const btnClickedEvent = new CustomEvent('bs-button-click', {
      bubbles: true,
      composed: true,
      detail: {
        active: this.active,
        action: this.action,
        toggle: this.toggle,
        dropdown: this.dropdownToggle
      }
    });
    this.dispatchEvent(btnClickedEvent);
  }

  _updateToggleState() {
    const buttonElement = this._retrieveButtonElement(); // added the this.dropdownToggle to enable "active"
    // look and feel during the dropdown menu opened


    if (this.toggle || this.dropdownToggle) {
      if (this.active) {
        buttonElement.classList.remove('active');
        buttonElement.removeAttribute('active');
      } else {
        buttonElement.classList.add('active');
        buttonElement.setAttribute('active', '');
      }

      this.active = !this.active;
    }
  }

  _blockDefaultEvent() {
    const linkButtonElement = this.shadowRoot.querySelector('a');

    if (linkButtonElement && this.href) {
      return false;
    }

    return true;
  }

  _retrieveButtonElement() {
    const buttonElement = this.shadowRoot.querySelector('button');
    const inputElement = this.shadowRoot.querySelector('input');
    const hrefElement = this.shadowRoot.querySelector('a');

    if (buttonElement) {
      return buttonElement;
    }

    if (inputElement) {
      return inputElement;
    }

    if (hrefElement) {
      return hrefElement;
    }
  }

  _updateButtonFocus() {
    const buttonElement = this.shadowRoot.querySelector('button');
    const inputElement = this.shadowRoot.querySelector('input');
    const hrefElement = this.shadowRoot.querySelector('a');

    if (buttonElement) {
      buttonElement.focus();
    }

    if (inputElement) {
      inputElement.focus();
    }

    if (hrefElement) {
      hrefElement.focus();
    }
  }

  _applyButtonActivateState(btnElement) {
    if (this.disabled && !this.active) {
      btnElement.classList.toggle('disabled');
    }

    if (!this.disabled && this.active) {
      btnElement.classList.toggle('active');
    }
  }

  _applyButtonTypeIfApplicable() {
    const buttonElement = this.shadowRoot.querySelector('button');
    const inputElement = this.shadowRoot.querySelector('input');

    if (buttonElement) {
      this._applyButtonType(buttonElement);
    }

    if (inputElement) {
      this._applyButtonType(inputElement);
    }
  }

  _applyButtonType(btnElement) {
    if (this.action === 'button') {
      btnElement.setAttribute('type', 'button');
    }

    if (this.action === 'reset') {
      btnElement.setAttribute('type', 'reset');
    }

    if (this.action === 'submit') {
      btnElement.setAttribute('type', 'submit');
    }
  }

};

const BsButtonsCommonCss = css`

    :host {
        display: inline-block;
        width: var(--bs-button-width);
        z-index: var(--bs-button-focus-z-index);
    }

    .btn {
        display: var(--bs-button-display, inline-block);
        font-weight: 400;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
        height: var(--bs-button-height);
        color: var(--bs-button-color);
        border-width: var(--bs-button-border-width, 1px);
        border-style: var(--bs-button-border-style, solid);
        border-color: var(--bs-button-border-color, transparent);
        padding-top: var(--bs-button-padding-top, 0.375rem);
        padding-bottom: var(--bs-button-padding-bottom, 0.375rem);
        padding-left: var(--bs-button-padding-left, 0.75rem);
        padding-right: var(--bs-button-padding-right, 0.75rem);
        font-size: var(--bs-button-font-size, 1rem);
        line-height: var(--bs-button-line-height, 1.5);
        width: var(--bs-button-width);
        position: var(--bs-button-position);
        flex: var(--bs-button-flex);
        margin-top: var(--bs-button-margin-top);
        margin-left: var(--bs-button-margin-left);
        margin-bottom: var(--bs-button-margin-bottom);
        background-color: var(--bs-button-background-color);
        border-top-left-radius: var(--bs-button-border-top-left-radius, 0.25rem);
        border-top-right-radius: var(--bs-button-border-top-right-radius, 0.25rem);
        border-bottom-right-radius: var(--bs-button-border-bottom-right-radius, 0.25rem);
        border-bottom-left-radius: var(--bs-button-border-bottom-left-radius, 0.25rem);
        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }
    
    .btn::after {
        display: var(--bs-button-after-display);
        width: var(--bs-button-after-width);
        height: var(--bs-button-after-height);
        margin-left: var(--bs-button-after-margin-left);
        vertical-align: var(--bs-button-after-vertical-align);
        content: var(--bs-button-after-content);
        border-top: var(--bs-button-after-border-top);
        border-right: var(--bs-button-after-border-right);
        border-bottom: var(--bs-button-after-border-bottom);
        border-left: var(--bs-button-after-border-left);
    }
    
    .btn:empty::after {
        margin-left: var(--bs-button-empty-after-margin-left);
    }

    .btn::before {
        display: var(--bs-button-before-display);
        width: var(--bs-button-before-width);
        height: var(--bs-button-before-height);
        margin-left: var(--bs-button-before-margin-left);
        vertical-align: var(--bs-button-before-vertical-align);
        content: var(--bs-button-before-content);
        border-top: var(--bs-button-before-border-top);
        border-right: var(--bs-button-before-border-right);
        border-bottom: var(--bs-button-before-border-bottom);
        border-left: var(--bs-button-before-border-left);
    }
    
    @media screen and (prefers-reduced-motion: reduce) {
        .btn {
            transition: none;
        }
    }
    
    .btn:hover {
        text-decoration: none;
        color: var(--bs-button-color-hover);
        box-shadow: var(--bs-button-box-shadow-hover);
        z-index: var(--bs-button-hover-z-index);
        border-color: var(--bs-button-border-color-hover);
    }
    
    .btn:focus,
    .btn.focus {
        outline: 0;
        text-decoration: none;
        color: var(--bs-button-color-focus);
        box-shadow: var(--bs-button-box-shadow-focus, 0 0 0 0.2rem rgba(0, 123, 255, 0.25));
        z-index: var(--bs-button-focus-z-index);
        border-color: var(--bs-button-border-color-focus);
    }

    :host([disabled]) .btn {
        opacity: 0.65;
        pointer-events: none;
    }
    
    :host(:not(:disabled):not(.disabled)) .btn {
        cursor: pointer;
        z-index: var(--bs-button-active-z-index);
    }
`;

const BsButtonPrimaryCss = css`
    
    :host([primary]) .btn {
        color: var(--btn-text-color, #fff);
        background-color: var(--btn-bg-color, var(--primary));
        border-color: var(--btn-border-color, var(--primary));
    }

    :host([primary]) .btn:hover {
        color: var(--btn-hover-text-color, #fff);
        background-color: var(--btn-hover-bg-color, #0069d9);
        border-color: var(--btn-hover-border-color, #0062cc);
    }

    :host([primary]) .btn:focus,
    :host([primary]) .btn.focus {
        box-shadow: var(--btn-focus-shadow, 0 0 0 0.2rem rgba(0, 123, 255, 0.5));
    }

    :host([primary]) .btn.disabled,
    :host([primary]) .btn:disabled {
        color: var(--btn-disabled-text-color, #fff);
        background-color: var(--btn-disabled-bg-color, var(--primary));
        border-color: var(--btn-disabled-border-color, var(--primary));
    }

    :host([primary]) .btn:not(:disabled):not(.disabled):active, 
    :host([primary]) .btn:not(:disabled):not(.disabled).active,
    :host([primary][dropdown-toggle][dropdown-show]) .btn {
        color: var(--btn-toggle-text-color, #fff);
        background-color: var(--btn-toggle-bg-color, #0062cc);
        border-color: var(--btn-toggle-border-color, #005cbf);
    }

    :host([primary]) .btn:not(:disabled):not(.disabled):active:focus, 
    :host([primary]) .btn:not(:disabled):not(.disabled).active:focus,
    :host([primary][dropdown-toggle][dropdown-show]) .btn:focus {
        box-shadow: var(--btn-toggle-focus-shadow, 0 0 0 0.2rem rgba(0, 123, 255, 0.5));
    }
`;

const BsButtonSecondaryCss = css`
    
    :host([secondary]) .btn {
        color: var(--btn-text-color, #fff);
        background-color: var(--btn-bg-color, var(--secondary));
        border-color: var(--btn-border-color, var(--secondary));
    }

    :host([secondary]) .btn:hover {
        color: var(--btn-hover-text-color, #fff);
        background-color: var(--btn-hover-bg-color, #5a6268);
        border-color: var(--btn-hover-border-color, #545b62);
    }

    :host([secondary]) .btn:focus, 
    :host([secondary]) .btn.focus {
        box-shadow: var(--btn-focus-shadow, 0 0 0 0.2rem rgba(108, 117, 125, 0.5));
    }

    :host([secondary]) .btn.disabled, 
    :host([secondary]) .btn:disabled {
        color: var(--btn-disabled-text-color, #fff);
        background-color: var(--btn-disabled-bg-color, var(--secondary));
        border-color: var(--btn-disabled-border-color, var(--secondary));
    }
    
    :host([secondary]) .btn:not(:disabled):not(.disabled):active, 
    :host([secondary]) .btn:not(:disabled):not(.disabled).active,
    :host([secondary][dropdown-toggle][dropdown-show]) .btn {
        color: var(--btn-toggle-text-color, #fff);
        background-color: var(--btn-toggle-bg-color, #545b62);
        border-color: var(--btn-toggle-border-color, #4e555b);
    }
    
    :host([secondary]) .btn:not(:disabled):not(.disabled):active:focus, 
    :host([secondary]) .btn:not(:disabled):not(.disabled).active:focus,
    :host([secondary][dropdown-toggle][dropdown-show]) .btn:focus {
        box-shadow: var(--btn-toggle-focus-shadow, 0 0 0 0.2rem rgba(108, 117, 125, 0.5));
    }
`;

const BsButtonSuccessCss = css`

    :host([success]) .btn {
        color: var(--btn-text-color, #fff);
        background-color: var(--btn-bg-color, var(--success));
        border-color: var(--btn-border-color, var(--success));
    }

    :host([success]) .btn:hover {
        color: var(--btn-hover-text-color, #fff);
        background-color: var(--btn-hover-bg-color, #218838);
        border-color: var(--btn-hover-border-color, #1e7e34);
    }

    :host([success]) .btn:focus, 
    :host([success]) .btn.focus {
        box-shadow: var(--btn-focus-shadow, 0 0 0 0.2rem rgba(40, 167, 69, 0.5));
    }

    :host([success]) .btn.disabled, 
    :host([success]) .btn:disabled {
        color: var(--btn-disabled-text-color, #fff);
        background-color: var(--btn-disabled-bg-color, var(--success));
        border-color: var(--btn-disabled-border-color, var(--success));
    }

    :host([success]) .btn:not(:disabled):not(.disabled):active, 
    :host([success]) .btn:not(:disabled):not(.disabled).active,
    :host([success][dropdown-toggle][dropdown-show]) .btn {
        color: var(--btn-toggle-text-color, #fff);
        background-color: var(--btn-toggle-bg-color, #1e7e34);
        border-color: var(--btn-toggle-border-color, #1c7430);
    }

    :host([success]) .btn:not(:disabled):not(.disabled):active:focus, 
    :host([success]) .btn:not(:disabled):not(.disabled).active:focus,
    :host([success][dropdown-toggle][dropdown-show]) .btn:focus {
        box-shadow: var(--btn-toggle-focus-shadow, 0 0 0 0.2rem rgba(40, 167, 69, 0.5));
    }
`;

const BsButtonInfoCss = css`
    
    :host([info]) .btn {
        color: var(--btn-text-color, #fff);
        background-color: var(--btn-bg-color, var(--info));
        border-color: var(--btn-border-color, var(--info));
    }

    :host([info]) .btn:hover {
        color: var(--btn-hover-text-color, #fff);
        background-color: var(--btn-hover-bg-color, #138496);
        border-color: var(--btn-hover-border-color, #117a8b);
    }

    :host([info]) .btn:focus, 
    :host([info]) .btn.focus {
        box-shadow: var(--btn-focus-shadow, 0 0 0 0.2rem rgba(23, 162, 184, 0.5));
    }

    :host([info]) .btn.disabled, 
    :host([info]) .btn:disabled {
        color: var(--btn-disabled-text-color, #fff);
        background-color: var(--btn-disabled-bg-color, var(--info));
        border-color: var(--btn-disabled-border-color, var(--info));
    }

    :host([info]) .btn:not(:disabled):not(.disabled):active, 
    :host([info]) .btn:not(:disabled):not(.disabled).active,
    :host([info][dropdown-toggle][dropdown-show]) .btn {
        color: var(--btn-toggle-text-color, #fff);
        background-color: var(--btn-toggle-bg-color, #117a8b);
        border-color: var(--btn-toggle-border-color, #10707f);
    }

    :host([info]) .btn:not(:disabled):not(.disabled):active:focus, 
    :host([info]) .btn:not(:disabled):not(.disabled).active:focus,
    :host([info][dropdown-toggle][dropdown-show]) .btn:focus {
        box-shadow: var(--btn-toggle-focus-shadow, 0 0 0 0.2rem rgba(23, 162, 184, 0.5));
    }
`;

const BsButtonWarningCss = css`
    
    :host([warning]) .btn {
        color: var(--btn-text-color, #212529);
        background-color: var(--btn-bg-color, var(--warning));
        border-color: var(--btn-border-color, var(--warning));
    }

    :host([warning]) .btn:hover {
        color: var(--btn-hover-text-color, #212529);
        background-color: var(--btn-hover-bg-color, #e0a800);
        border-color: var(--btn-hover-border-color, #d39e00);
    }

    :host([warning]) .btn:focus, 
    :host([warning]) .btn.focus {
        box-shadow: var(--btn-focus-shadow, 0 0 0 0.2rem rgba(255, 193, 7, 0.5));
    }

    :host([warning]) .btn.disabled, 
    :host([warning]) .btn:disabled {
        color: var(--btn-disabled-text-color, #212529);
        background-color: var(--btn-disabled-bg-color, var(--warning));
        border-color: var(--btn-disabled-border-color, var(--warning));
    }

    :host([warning]) .btn:not(:disabled):not(.disabled):active, 
    :host([warning]) .btn:not(:disabled):not(.disabled).active,
    :host([warning][dropdown-toggle][dropdown-show]) .btn {
        color: var(--btn-toggle-text-color, #212529);
        background-color: var(--btn-toggle-bg-color, #d39e00);
        border-color: var(--btn-toggle-border-color, #c69500);
    }

    :host([warning]) .btn:not(:disabled):not(.disabled):active:focus, 
    :host([warning]) .btn:not(:disabled):not(.disabled).active:focus,
    :host([warning][dropdown-toggle][dropdown-show]) .btn:focus {
        box-shadow: var(--btn-toggle-focus-shadow, 0 0 0 0.2rem rgba(255, 193, 7, 0.5));
    }
`;

const BsButtonDangerCss = css`
    
    :host([danger]) .btn {
        color: var(--btn-text-color, #fff);
        background-color: var(--btn-bg-color, var(--danger));
        border-color: var(--btn-border-color, var(--danger));
    }

    :host([danger]) .btn:hover {
        color: var(--btn-hover-text-color, #fff);
        background-color: var(--btn-hover-bg-color, #c82333);
        border-color: var(--btn-hover-border-color, #bd2130);
    }

    :host([danger]) .btn:focus, .btn-danger.focus {
        box-shadow: var(--btn-focus-shadow, 0 0 0 0.2rem rgba(220, 53, 69, 0.5));
    }

    :host([danger]) .btn.disabled, 
    :host([danger]) .btn:disabled {
        color: var(--btn-disabled-text-color, #fff);
        background-color: var(--btn-disabled-bg-color, var(--danger));
        border-color: var(--btn-disabled-border-color, var(--danger));
    }

    :host([danger]) .btn:not(:disabled):not(.disabled):active, 
    :host([danger]) .btn:not(:disabled):not(.disabled).active,
    :host([danger][dropdown-toggle][dropdown-show]) .btn {
        color: var(--btn-toggle-text-color, #fff);
        background-color: var(--btn-toggle-bg-color, #bd2130);
        border-color: var(--btn-toggle-border-color, #b21f2d);
    }

    :host([danger]) .btn:not(:disabled):not(.disabled):active:focus, 
    :host([danger]) .btn:not(:disabled):not(.disabled).active:focus,
    :host([danger][dropdown-toggle][dropdown-show]) .btn:focus {
        box-shadow: var(--btn-toggle-focus-shadow, 0 0 0 0.2rem rgba(220, 53, 69, 0.5));
    }
`;

const BsButtonLightCss = css`
    
    :host([light]) .btn {
        color: var(--btn-text-color, #212529);
        background-color: var(--btn-bg-color, var(--light));
        border-color: var(--btn-border-color, var(--light));
    }

    :host([light]) .btn:hover {
        color: var(--btn-hover-text-color, #212529);
        background-color: var(--btn-hover-bg-color, #e2e6ea);
        border-color: var(--btn-hover-border-color, #dae0e5);
    }

    :host([light]) .btn:focus, 
    :host([light]) .btn.focus {
        box-shadow: var(--btn-focus-shadow, 0 0 0 0.2rem rgba(248, 249, 250, 0.5));
    }

    :host([light]) .btn.disabled, 
    :host([light]) .btn:disabled {
        color: var(--btn-disabled-text-color, #212529);
        background-color: var(--btn-disabled-bg-color, var(--light));
        border-color: var(--btn-disabled-border-color, var(--light));
    }

    :host([light]) .btn:not(:disabled):not(.disabled):active, 
    :host([light]) .btn:not(:disabled):not(.disabled).active,
    :host([light][dropdown-toggle][dropdown-show]) .btn {
        color: var(--btn-toggle-text-color, #212529);
        background-color: var(--btn-toggle-bg-color, #dae0e5);
        border-color: var(--btn-toggle-border-color, #d3d9df);
    }

    :host([light]) .btn:not(:disabled):not(.disabled):active:focus, 
    :host([light]) .btn:not(:disabled):not(.disabled).active:focus,
    :host([light][dropdown-toggle][dropdown-show]) .btn:focus {
        box-shadow: var(--btn-toggle-focus-shadow, 0 0 0 0.2rem rgba(248, 249, 250, 0.5));
    }
`;

const BsButtonDarkCss = css`
    
    :host([dark]) .btn {
        color: var(--btn-text-color, #fff);
        background-color: var(--btn-bg-color, var(--dark));
        border-color: var(--btn-border-color, var(--dark));
    }

    :host([dark]) .btn:hover {
        color: var(--btn-hover-text-color, #fff);
        background-color: var(--btn-hover-bg-color, #23272b);
        border-color: var(--btn-hover-border-color, #1d2124);
    }

    :host([dark]) .btn:focus, 
    :host([dark]) .btn.focus {
        box-shadow: var(--btn-focus-shadow, 0 0 0 0.2rem rgba(52, 58, 64, 0.5));
    }

    :host([dark]) .btn.disabled, 
    :host([dark]) .btn:disabled {
        color: var(--btn-disabled-text-color, #fff);
        background-color: var(--btn-disabled-bg-color, var(--dark));
        border-color: var(--btn-disabled-border-color, var(--dark));
    }

    :host([dark]) .btn:not(:disabled):not(.disabled):active, 
    :host([dark]) .btn:not(:disabled):not(.disabled).active,
    :host([dark][dropdown-toggle][dropdown-show]) .btn {
        color: var(--btn-toggle-text-color, #fff);
        background-color: var(--btn-toggle-bg-color, #1d2124);
        border-color: var(--btn-toggle-border-color, #171a1d);
    }

    :host([dark]) .btn:not(:disabled):not(.disabled):active:focus, 
    :host([dark]) .btn:not(:disabled):not(.disabled).active:focus,
    :host([dark][dropdown-toggle][dropdown-show]) .btn:focus {
        box-shadow: var(--btn-toggle-focus-shadow, 0 0 0 0.2rem rgba(52, 58, 64, 0.5));
    }
`;

const BsButtonPrimaryOutlineCss = css`
    
    :host([outline-primary]) .btn {
        color: var(--btn-text-color, var(--primary));
        background-color: var(--btn-bg-color, transparent);
        background-image: var(--btn-bg-image, none);
        border-color: var(--btn-border-color, var(--primary));
    }

    :host([outline-primary]) .btn:hover {
        color: var(--btn-hover-text-color, #fff);
        background-color: var(--btn-hover-bg-color, var(--primary));
        border-color: var(--btn-hover-border-color, var(--primary));
    }

    :host([outline-primary]) .btn:focus, 
    :host([outline-primary]) .btn.focus {
        box-shadow: var(--btn-focus-shadow, 0 0 0 0.2rem rgba(0, 123, 255, 0.5));
    }

    :host([outline-primary]) .btn.disabled, 
    :host([outline-primary]) .btn:disabled {
        color: var(--btn-disabled-text-color, var(--primary));
        background-color: var(--btn-disabled-bg-color, transparent);
    }

    :host([outline-primary]) .btn:not(:disabled):not(.disabled):active, 
    :host([outline-primary]) .btn:not(:disabled):not(.disabled).active,
    :host([outline-primary][dropdown-toggle][dropdown-show]) .btn {
        color: var(--btn-toggle-text-color, #fff);
        background-color: var(--btn-toggle-bg-color, var(--primary));
        border-color: var(--btn-toggle-border-color, var(--primary));
    }

    :host([outline-primary]) .btn:not(:disabled):not(.disabled):active:focus, 
    :host([outline-primary]) .btn:not(:disabled):not(.disabled).active:focus,
    :host([outline-primary][dropdown-toggle][dropdown-show]) .btn:focus {
        box-shadow: var(--btn-toggle-focus-shadow, 0 0 0 0.2rem rgba(0, 123, 255, 0.5));
    }
`;

const BsButtonSecondaryOutlineCss = css`

    :host([outline-secondary]) .btn {
        color: var(--btn-text-color, var(--secondary));
        background-color: var(--btn-bg-color, transparent);
        background-image: var(--btn-bg-image, none);
        border-color: var(--btn-border-color, var(--secondary));
    }

    :host([outline-secondary]) .btn:hover {
        color: var(--btn-hover-text-color, #fff);
        background-color: var(--btn-hover-bg-color, var(--secondary));
        border-color: var(--btn-hover-border-color, var(--secondary));
    }

    :host([outline-secondary]) .btn:focus, 
    :host([outline-secondary]) .btn.focus {
        box-shadow: var(--btn-focus-shadow, 0 0 0 0.2rem rgba(108, 117, 125, 0.5));
    }

    :host([outline-secondary]) .btn.disabled, 
    :host([outline-secondary]) .btn:disabled {
        color: var(--btn-disabled-text-color, var(--secondary));
        background-color: var(--btn-disabled-bg-color, transparent);
    }

    :host([outline-secondary]) .btn:not(:disabled):not(.disabled):active, 
    :host([outline-secondary]) .btn:not(:disabled):not(.disabled).active,
    :host([outline-secondary][dropdown-toggle][dropdown-show]) .btn {
        color: var(--btn-toggle-text-color, #fff);
        background-color: var(--btn-toggle-bg-color, var(--secondary));
        border-color: var(--btn-toggle-border-color, var(--secondary));
    }

    :host([outline-secondary]) .btn:not(:disabled):not(.disabled):active:focus, 
    :host([outline-secondary]) .btn:not(:disabled):not(.disabled).active:focus,
    :host([outline-secondary][dropdown-toggle][dropdown-show]) .btn:focus {
        box-shadow: var(--btn-toggle-focus-shadow, 0 0 0 0.2rem rgba(108, 117, 125, 0.5));
    }
`;

const BsButtonSuccessOutlineCss = css`
    
    :host([outline-success]) .btn {
        color: var(--btn-text-color, var(--success));
        background-color: var(--btn-bg-color, transparent);
        background-image: var(--btn-bg-image, none);
        border-color: var(--btn-border-color, var(--success));
    }

    :host([outline-success]) .btn:hover {
        color: var(--btn-hover-text-color, #fff);
        background-color: var(--btn-hover-bg-color, var(--success));
        border-color: var(--btn-hover-border-color, var(--success));
    }

    :host([outline-success]) .btn:focus, 
    :host([outline-success]) .btn.focus {
        box-shadow: var(--btn-focus-shadow, 0 0 0 0.2rem rgba(40, 167, 69, 0.5));
    }

    :host([outline-success]) .btn.disabled, 
    :host([outline-success]) .btn:disabled {
        color: var(--btn-disabled-text-color, var(--success));
        background-color: var(--btn-disabled-bg-color, transparent);
    }

    :host([outline-success]) .btn:not(:disabled):not(.disabled):active, 
    :host([outline-success]) .btn:not(:disabled):not(.disabled).active,
    :host([outline-success][dropdown-toggle][dropdown-show]) .btn {
        color: var(--btn-toggle-text-color, #fff);
        background-color: var(--btn-toggle-bg-color, var(--success));
        border-color: var(--btn-toggle-border-color, var(--success));
    }

    :host([outline-success]) .btn:not(:disabled):not(.disabled):active:focus, 
    :host([outline-success]) .btn:not(:disabled):not(.disabled).active:focus,
    :host([outline-success][dropdown-toggle][dropdown-show]) .btn:focus {
        box-shadow: var(--btn-toggle-focus-shadow, 0 0 0 0.2rem rgba(40, 167, 69, 0.5));
    }
`;

const BsButtonInfoOutlineCss = css`
    
    :host([outline-info]) .btn {
        color: var(--btn-text-color, var(--info));
        background-color: var(--btn-bg-color, transparent);
        background-image: var(--btn-bg-image, none);
        border-color: var(--btn-border-color, var(--info));
    }

    :host([outline-info]) .btn:hover {
        color: var(--btn-hover-text-color, #fff);
        background-color: var(--btn-hover-bg-color, var(--info));
        border-color: var(--btn-hover-border-color, var(--info));
    }

    :host([outline-info]) .btn:focus, 
    :host([outline-info]) .btn.focus {
        box-shadow: var(--btn-focus-shadow, 0 0 0 0.2rem rgba(23, 162, 184, 0.5));
    }

    :host([outline-info]) .btn.disabled, 
    :host([outline-info]) .btn:disabled {
        color: var(--btn-disabled-text-color, var(--info));
        background-color: var(--btn-disabled-bg-color, transparent);
    }

    :host([outline-info]) .btn:not(:disabled):not(.disabled):active, 
    :host([outline-info]) .btn:not(:disabled):not(.disabled).active,
    :host([outline-info][dropdown-toggle][dropdown-show]) .btn {
        color: var(--btn-toggle-text-color, #fff);
        background-color: var(--btn-toggle-bg-color, var(--info));
        border-color: var(--btn-toggle-border-color, var(--info));
    }

    :host([outline-info]) .btn:not(:disabled):not(.disabled):active:focus, 
    :host([outline-info]) .btn:not(:disabled):not(.disabled).active:focus,
    :host([outline-info][dropdown-toggle][dropdown-show]) .btn:focus {
        box-shadow: var(--btn-toggle-focus-shadow, 0 0 0 0.2rem rgba(23, 162, 184, 0.5));
    }
`;

const BsButtonWarningOutlineCss = css`
    
    :host([outline-warning]) .btn {
        color: var(--btn-text-color, var(--warning));
        background-color: var(--btn-bg-color, transparent);
        background-image: var(--btn-bg-image, none);
        border-color: var(--btn-border-color, var(--warning));
    }

    :host([outline-warning]) .btn:hover {
        color: var(--btn-hover-text-color, #212529);
        background-color: var(--btn-hover-bg-color, var(--warning));
        border-color: var(--btn-hover-border-color, var(--warning));
    }

    :host([outline-warning]) .btn:focus, 
    :host([outline-warning]) .btn.focus {
        box-shadow: var(--btn-focus-shadow, 0 0 0 0.2rem rgba(255, 193, 7, 0.5));
    }

    :host([outline-warning]) .btn.disabled, 
    :host([outline-warning]) .btn:disabled {
        color: var(--btn-disabled-text-color, var(--warning));
        background-color: var(--btn-disabled-bg-color, transparent);
    }

    :host([outline-warning]) .btn:not(:disabled):not(.disabled):active, 
    :host([outline-warning]) .btn:not(:disabled):not(.disabled).active,
    :host([outline-warning][dropdown-toggle][dropdown-show]) .btn {
        color: var(--btn-toggle-text-color, #212529);
        background-color: var(--btn-toggle-bg-color, var(--warning));
        border-color: var(--btn-toggle-border-color, var(--warning));
    }

    :host([outline-warning]) .btn:not(:disabled):not(.disabled):active:focus, 
    :host([outline-warning]) .btn:not(:disabled):not(.disabled).active:focus,
    :host([outline-warning][dropdown-toggle][dropdown-show]) .btn:focus {
        box-shadow: var(--btn-toggle-focus-shadow, 0 0 0 0.2rem rgba(255, 193, 7, 0.5));
    }
`;

const BsButtonDangerOutlineCss = css`
    
    :host([outline-danger]) .btn {
        color: var(--btn-text-color, var(--danger));
        background-color: var(--btn-bg-color, transparent);
        background-image: var(--btn-bg-image, none);
        border-color: var(--btn-border-color, var(--danger));
    }

    :host([outline-danger]) .btn:hover {
        color: var(--btn-hover-text-color, #fff);
        background-color: var(--btn-hover-bg-color, var(--danger));
        border-color: var(--btn-hover-border-color, var(--danger));
    }

    :host([outline-danger]) .btn:focus, 
    :host([outline-danger]) .btn.focus {
        box-shadow: var(--btn-focus-shadow, 0 0 0 0.2rem rgba(220, 53, 69, 0.5));
    }

    :host([outline-danger]) .btn.disabled, 
    :host([outline-danger]) .btn:disabled {
        color: var(--btn-disabled-text-color, var(--danger));
        background-color: var(--btn-disabled-bg-color, transparent);
    }

    :host([outline-danger]) .btn:not(:disabled):not(.disabled):active, 
    :host([outline-danger]) .btn:not(:disabled):not(.disabled).active,
    :host([outline-danger][dropdown-toggle][dropdown-show]) .btn {
        color: var(--btn-toggle-text-color, #fff);
        background-color: var(--btn-toggle-bg-color, var(--danger));
        border-color: var(--btn-toggle-border-color, var(--danger));
    }

    :host([outline-danger]) .btn:not(:disabled):not(.disabled):active:focus, 
    :host([outline-danger]) .btn:not(:disabled):not(.disabled).active:focus,
    :host([outline-danger][dropdown-toggle][dropdown-show]) .btn:focus {
        box-shadow: var(--btn-toggle-focus-shadow, 0 0 0 0.2rem rgba(220, 53, 69, 0.5));
    }
`;

const BsButtonLightOutlineCss = css`
    
    :host([outline-light]) .btn {
        color: var(--btn-text-color, var(--light));
        background-color: var(--btn-bg-color, transparent);
        background-image: var(--btn-bg-image, none);
        border-color: var(--btn-border-color, var(--light));
    }

    :host([outline-light]) .btn:hover {
        color: var(--btn-hover-text-color, #212529);
        background-color: var(--btn-hover-bg-color, var(--light));
        border-color: var(--btn-hover-border-color, var(--light));
    }

    :host([outline-light]) .btn:focus, 
    :host([outline-light]) .btn.focus {
        box-shadow: var(--btn-focus-shadow, 0 0 0 0.2rem rgba(248, 249, 250, 0.5));
    }

    :host([outline-light]) .btn.disabled, 
    :host([outline-light]) .btn:disabled {
        color: var(--btn-disabled-text-color, var(--light));
        background-color: var(--btn-disabled-bg-color, transparent);
    }

    :host([outline-light]) .btn:not(:disabled):not(.disabled):active, 
    :host([outline-light]) .btn:not(:disabled):not(.disabled).active,
    :host([outline-light][dropdown-toggle][dropdown-show]) .btn {
        color: var(--btn-toggle-text-color, #212529);
        background-color: var(--btn-toggle-bg-color, var(--light));
        border-color: var(--btn-toggle-border-color, var(--light));
    }

    :host([outline-light]) .btn:not(:disabled):not(.disabled):active:focus, 
    :host([outline-light]) .btn:not(:disabled):not(.disabled).active:focus,
    :host([outline-light][dropdown-toggle][dropdown-show]) .btn:focus {
        box-shadow: var(--btn-toggle-focus-shadow, 0 0 0 0.2rem rgba(248, 249, 250, 0.5));
    }
`;

const BsButtonDarkOutlineCss = css`
    
    :host([outline-dark]) .btn {
        color: var(--btn-text-color, var(--dark));
        background-color: var(--btn-bg-color, transparent);
        background-image: var(--btn-bg-image, none);
        border-color: var(--btn-border-color, var(--dark));
    }

    :host([outline-dark]) .btn:hover {
        color: var(--btn-hover-text-color, #fff);
        background-color: var(--btn-hover-bg-color, var(--dark));
        border-color: var(--btn-hover-border-color, var(--dark));
    }

    :host([outline-dark]) .btn:focus, 
    :host([outline-dark]) .btn.focus {
        box-shadow: var(--btn-focus-shadow, 0 0 0 0.2rem rgba(52, 58, 64, 0.5));
    }

    :host([outline-dark]) .btn.disabled, 
    :host([outline-dark]) .btn:disabled {
        color: var(--btn-disabled-text-color, var(--dark));
        background-color: var(--btn-disabled-bg-color, transparent);
    }

    :host([outline-dark]) .btn:not(:disabled):not(.disabled):active, 
    :host([outline-dark]) .btn:not(:disabled):not(.disabled).active,
    :host([outline-dark][dropdown-toggle][dropdown-show]) .btn {
        color: var(--btn-toggle-text-color, #fff);
        background-color: var(--btn-toggle-bg-color, var(--dark));
        border-color: var(--btn-toggle-border-color, var(--dark));
    }

    :host([outline-dark]) .btn:not(:disabled):not(.disabled):active:focus, 
    :host([outline-dark]) .btn:not(:disabled):not(.disabled).active:focus,
    :host([outline-dark][dropdown-toggle][dropdown-show]) .btn:focus {
        box-shadow: var(--btn-toggle-focus-shadow, 0 0 0 0.2rem rgba(52, 58, 64, 0.5));
    }
`;

const BsButtonLinkCss = css`
    
    :host([link]) .btn {
        font-weight: 400;
        color: #007bff;
        background-color: transparent;
    }

    :host([link]) .btn:hover {
        color: #0056b3;
        text-decoration: underline;
        background-color: transparent;
        border-color: transparent;
    }

    :host([link]) .btn:focus, 
    :host([link]) .btn.focus {
        text-decoration: underline;
        border-color: transparent;
        box-shadow: none;
    }

    :host([link]) .btn:disabled, 
    :host([link]) .btn.disabled {
        color: #6c757d;
        pointer-events: none;
    }
`;

const BsButtonBlockCss = css`
    
    :host([block]) {
        display: block;
    }
    
    :host([block]) .btn {
        width: 100%;
    }

    :host([block]:not(:first-child)) .btn {
        margin-top: 0.5rem;
    }
`;

const BsButtonLargeCss = css`
    
    :host([large]) .btn {
        padding: 0.5rem 1rem;
        padding-top: var(--bs-button-large-top-padding, 0.5rem);
        padding-bottom: var(--bs-button-large-bottom-padding, 0.5rem);
        padding-left: var(--bs-button-large-left-padding, 1rem);
        padding-right: var(--bs-button-large-right-padding, 1rem);
        font-size: 1.25rem;
        line-height: 1.5;
        border-top-left-radius: var(--bs-button-border-top-left-radius,  0.3rem);
        border-top-right-radius: var(--bs-button-border-top-right-radius, 0.3rem);
        border-bottom-right-radius: var(--bs-button-border-bottom-right-radius,  0.3rem);
        border-bottom-left-radius: var(--bs-button-border-bottom-left-radius,  0.3rem);
    }
`;

const BsButtonSmallCss = css`
    
    :host([small]) .btn {
        padding-top: var(--bs-button-small-top-padding, 0.25rem);
        padding-bottom: var(--bs-button-small-bottom-padding, 0.25rem);
        padding-left: var(--bs-button-small-left-padding, 0.5rem);
        padding-right: var(--bs-button-small-right-padding, 0.5rem);
        font-size: 0.875rem;
        line-height: 1.5;
        border-top-left-radius: var(--bs-button-border-top-left-radius, 0.2rem);
        border-top-right-radius: var(--bs-button-border-top-right-radius, 0.2rem);
        border-bottom-right-radius: var(--bs-button-border-bottom-right-radius, 0.2rem);
        border-bottom-left-radius: var(--bs-button-border-bottom-left-radius, 0.2rem);
    }
`;

class BsButton extends BsButtonMixin(LitElement) {
  static get styles() {
    return [BsContentRebootCss, BsContentTypographyCss, BsButtonsCommonCss, BsButtonPrimaryCss, BsButtonSecondaryCss, BsButtonSuccessCss, BsButtonInfoCss, BsButtonWarningCss, BsButtonDangerCss, BsButtonLightCss, BsButtonDarkCss, BsButtonPrimaryOutlineCss, BsButtonSecondaryOutlineCss, BsButtonSuccessOutlineCss, BsButtonInfoOutlineCss, BsButtonWarningOutlineCss, BsButtonDangerOutlineCss, BsButtonLightOutlineCss, BsButtonDarkOutlineCss, BsButtonLinkCss, BsButtonBlockCss, BsButtonLargeCss, BsButtonSmallCss];
  }

  render() {
    return html`
            <button class="btn">
                <slot></slot>
            </button>
        `;
  }

}
if (!window.customElements.get("bs-button")) window.customElements.define('bs-button', BsButton);

class BsLinkButton extends BsButtonMixin(LitElement) {
  static get properties() {
    return {
      href: String,
      target: String
    };
  }

  static get styles() {
    return [BsContentRebootCss, BsContentTypographyCss, BsButtonsCommonCss, BsButtonPrimaryCss, BsButtonSecondaryCss, BsButtonSuccessCss, BsButtonInfoCss, BsButtonWarningCss, BsButtonDangerCss, BsButtonLightCss, BsButtonDarkCss, BsButtonPrimaryOutlineCss, BsButtonSecondaryOutlineCss, BsButtonSuccessOutlineCss, BsButtonInfoOutlineCss, BsButtonWarningOutlineCss, BsButtonDangerOutlineCss, BsButtonLightOutlineCss, BsButtonDarkOutlineCss, BsButtonLinkCss, BsButtonBlockCss, BsButtonLargeCss, BsButtonSmallCss];
  }

  render() {
    return html`
            <a href="${this.href}" .target="${this.target}" class="btn">
                <slot></slot>
            </a>
        `;
  }

  constructor() {
    super();
    this.href = '';
    this.target = '_self';
  }

}
if (!window.customElements.get("bs-link-button")) window.customElements.define('bs-link-button', BsLinkButton);

class BsInputButton extends BsButtonMixin(LitElement) {
  static get properties() {
    return {
      label: String
    };
  }

  static get styles() {
    return [BsContentRebootCss, BsContentTypographyCss, BsButtonsCommonCss, BsButtonPrimaryCss, BsButtonSecondaryCss, BsButtonSuccessCss, BsButtonInfoCss, BsButtonWarningCss, BsButtonDangerCss, BsButtonLightCss, BsButtonDarkCss, BsButtonPrimaryOutlineCss, BsButtonSecondaryOutlineCss, BsButtonSuccessOutlineCss, BsButtonInfoOutlineCss, BsButtonWarningOutlineCss, BsButtonDangerOutlineCss, BsButtonLightOutlineCss, BsButtonDarkOutlineCss, BsButtonLinkCss, BsButtonBlockCss, BsButtonLargeCss, BsButtonSmallCss];
  }

  render() {
    return html`
            <input class="btn" value="${this.label}" />
        `;
  }

  constructor() {
    super();
    this.label = '';
  }

}
if (!window.customElements.get("bs-input-button")) window.customElements.define('bs-input-button', BsInputButton);

const BsDropdownButtonNavLinkCss = css`
    
    :host([dropdown-nav-link]) .btn {
        display: block;
        padding-bottom: var(--dropdown-nav-link-padding-bottom);
        padding-left: var(--dropdown-nav-link-padding-left);
        padding-right: var(--dropdown-nav-link-padding-right);
        border: 1px solid transparent;
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
        margin-bottom: var(--dropdown-nav-margin-bottom);
        border-bottom-right-radius: var(--nav-link-active-border-bottom-right-radius, 0);
        border-bottom-left-radius: var(--nav-link-active-border-bottom-left-radius, 0);
        color: var(--dropdown-nav-link-color-show, #007bff);
        background-color: var(--dropdown-nav-link-background-color-show);
    }
    
    :host([dropdown-nav-link][active]) .btn {
        color: var(--nav-link-active-color, #495057);
        background-color: #fff;
        border-color: #dee2e6 #dee2e6 #fff;
    }
    
    :host([dropdown-nav-link]) .btn:hover,
    :host([dropdown-nav-link]) .btn:focus {
        border-color: var(--dropdown-nav-link-hover-border-color, #e9ecef #e9ecef #dee2e6);
        box-shadow: none;
        color: var(--dropdown-nav-link-hover-color);
    }

    :host([dropdown-nav-link][active]) .btn:hover,
    :host([dropdown-nav-link][active]) .btn:focus {
        color: var(--dropdown-nav-link-color-show);
        border-color: #dee2e6 #dee2e6 #fff;
        box-shadow: none;
    }
`;

export { BsButton, BsButtonBlockCss, BsButtonDangerCss, BsButtonDangerOutlineCss, BsButtonDarkCss, BsButtonDarkOutlineCss, BsButtonInfoCss, BsButtonInfoOutlineCss, BsButtonLargeCss, BsButtonLightCss, BsButtonLightOutlineCss, BsButtonLinkCss, BsButtonMixin, BsButtonPrimaryCss, BsButtonPrimaryOutlineCss, BsButtonSecondaryCss, BsButtonSecondaryOutlineCss, BsButtonSmallCss, BsButtonSuccessCss, BsButtonSuccessOutlineCss, BsButtonWarningCss, BsButtonWarningOutlineCss, BsButtonsCommonCss, BsDropdownButtonNavLinkCss, BsInputButton, BsLinkButton };
