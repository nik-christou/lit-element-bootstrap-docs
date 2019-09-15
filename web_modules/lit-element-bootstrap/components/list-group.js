import { h as html } from '../../common/lit-html-9b6153da.js';
import { css, LitElement } from '../../lit-element.js';
import { B as BsContentTypographyCss } from '../../common/index-603f562a.js';
import { B as BsContentRebootCss } from '../../common/bs-content-reboot-css-ebf48278.js';
import { B as BsFlexJustifyCss, a as BsFlexDisplayCss, b as BsFlexAlignItemsCss } from '../../common/bs-flex-align-content-css-b099adc1.js';

const BsListGroupCommonCss = css`
    
    .list-group {
        display: flex;
        flex-direction: column;
        padding-left: 0;
        margin-bottom: 0;
        max-width: var(--list-group-max-width, 400px);
    }
`;

class BsListGroup extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsListGroupCommonCss,
            css`
                ul ::slotted(*:first-child) {
                    --list-group-item-border-radius-top-left: 0.25rem;
                    --list-group-item-border-radius-top-right: 0.25rem;
                }
                
                ul ::slotted(*:last-child) {
                    margin-bottom: 0;
                    --list-group-item-border-radius-bottom-left: 0.25rem;
                    --list-group-item-border-radius-bottom-right: 0.25rem;
                }
            `
        ];
    }
    
    render() {
        return html`
            <ul class="list-group">
                <slot></slot>
            </ul>
        `;
    }
}
if(!window.customElements.get('bs-list-group')) 
    window.customElements.define('bs-list-group', BsListGroup);

const BsListGroupItemCommonCss = css`
                
    .list-group-item {
        position: relative;
        display: block;
        padding: 0.75rem 1.25rem;
        margin-bottom: -1px;
        background-color: #fff;

        border-bottom-right-radius: var(--list-group-item-border-radius-bottom-right);
        border-bottom-left-radius: var(--list-group-item-border-radius-bottom-left);
        border-top-left-radius: var(--list-group-item-border-radius-top-left);
        border-top-right-radius: var(--list-group-item-border-radius-top-right);

        border-top: var(--list-group-item-border-top, 1px solid rgba(0, 0, 0, 0.125));
        border-bottom: var(--list-group-item-border-bottom, 1px solid rgba(0, 0, 0, 0.125));
        border-right: var(--list-group-item-border-right, 1px solid rgba(0, 0, 0, 0.125));
        border-left: var(--list-group-item-border-left, 1px solid rgba(0, 0, 0, 0.125));
    }

    .list-group-item:hover, 
    .list-group-item:focus {
        z-index: 1;
        text-decoration: none;
    }

    :host([disabled]) .list-group-item, 
    :host([disabled]) .list-group-item:disabled {
        color: #6c757d;
        background-color: #fff;
    }

    :host([active]) .list-group-item {
        z-index: 2;
        color: #fff;
        background-color: #007bff;
        border-color: #007bff;
    }

    :host([primary]) .list-group-item {
        color: #004085;
        background-color: #b8daff;
    }

    :host([secondary]) .list-group-item {
        color: #383d41;
        background-color: #d6d8db;
    }

    :host([success]) .list-group-item {
        color: #155724;
        background-color: #c3e6cb;
    }

    :host([info]) .list-group-item {
        color: #0c5460;
        background-color: #bee5eb;
    }

    :host([warning]) .list-group-item {
        color: #856404;
        background-color: #ffeeba;
    }

    :host([danger]) .list-group-item {
        color: #721c24;
        background-color: #f5c6cb;
    }

    :host([light]) .list-group-item {
        color: #818182;
        background-color: #fdfdfe;
    }

    :host([dark]) .list-group-item {
        color: #1b1e21;
        background-color: #c6c8ca;
    }
`;

class BsListGroupItem extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsListGroupItemCommonCss
        ];
    }
    
    render() {
        return html`
            <li class="list-group-item">
                <slot></slot>
            </li>
        `;
    }
}
if(!window.customElements.get('bs-list-group-item'))  
    window.customElements.define('bs-list-group-item', BsListGroupItem);

const BsListGroupItemActionCommonCss = css`

    .list-group-item-action {
        width: 100%;
        color: #495057;
        text-align: inherit;
    }

    .list-group-item-action:hover, 
    .list-group-item-action:focus {
        color: #495057;
        text-decoration: none;
        background-color: #f8f9fa;
    }

    :host([active]) .list-group-item-action {
        color: #212529;
        background-color: #e9ecef;
    }

    :host([primary]) .list-group-item-action:hover, 
    :host([primary]) .list-group-item-action:focus {
        color: #004085;
        background-color: #9fcdff;
    }

    :host([primary][active]) .list-group-item-action {
        color: #fff;
        background-color: #004085;
        border-color: #004085;
    }

    :host([secondary]) .list-group-item-action:hover, 
    :host([secondary]) .list-group-item-action:focus {
        color: #383d41;
        background-color: #c8cbcf;
    }

    :host([secondary][active]) .list-group-item-action {
        color: #fff;
        background-color: #383d41;
        border-color: #383d41;
    }

    :host([success]) .list-group-item-action:hover, 
    :host([success]) .list-group-item-action:focus {
        color: #155724;
        background-color: #b1dfbb;
    }

    :host([success][active]) .list-group-item-action {
        color: #fff;
        background-color: #155724;
        border-color: #155724;
    }

    :host([info]) .list-group-item-action:hover, 
    :host([info]) .list-group-item-action:focus {
        color: #0c5460;
        background-color: #abdde5;
    }

    :host([info][active]) .list-group-item-action {
        color: #fff;
        background-color: #0c5460;
        border-color: #0c5460;
    }

    :host([warning]) .list-group-item-action:hover, 
    :host([warning]) .list-group-item-action:focus {
        color: #856404;
        background-color: #ffe8a1;
    }

    :host([warning][active]) .list-group-item-action {
        color: #fff;
        background-color: #856404;
        border-color: #856404;
    }

    :host([danger]) .list-group-item-action:hover, 
    :host([danger]) .list-group-item-action:focus {
        color: #721c24;
        background-color: #f1b0b7;
    }

    :host([danger][active]) .list-group-item-action {
        color: #fff;
        background-color: #721c24;
        border-color: #721c24;
    }

    :host([light]) .list-group-item-action:hover, 
    :host([light]) .list-group-item-action:focus {
        color: #818182;
        background-color: #ececf6;
    }

    :host([light][active]) .list-group-item-action {
        color: #fff;
        background-color: #818182;
        border-color: #818182;
    }

    :host([dark]) .list-group-item-action:hover, 
    :host([dark]) .list-group-item-action:focus {
        color: #1b1e21;
        background-color: #b9bbbe;
    }

    :host([dark][active]) .list-group-item-action {
        color: #fff;
        background-color: #1b1e21;
        border-color: #1b1e21;
    }
`;

class BsListGroupItemActionLink extends LitElement {

    static get properties() {
        return {
            index: Number,
            href: String,
            target: String,
            active: {type: Boolean, reflect: true},
            disabled: {type: Boolean, reflect: true}
        };
    }
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsListGroupItemActionCommonCss,
            BsListGroupItemCommonCss
        ];
    }

    render() {
        return html`
            <a href="${this.href}" .target="${this.target}" class="list-group-item list-group-item-action">
                <slot></slot>
            </a>
        `;
    }

    constructor() {
        super();
        this.index = -1;
        this.active = false;
        this.href = '#';
        this.target = '_self';
        this.disabled = false;
    }

    firstUpdated() {
       const listGroupItemAction = this.shadowRoot.querySelector('a.list-group-item-action');
        listGroupItemAction.addEventListener('click', event => this._handleClickEvent(event)); 
    }

    _handleClickEvent(event) {

        if (this.disabled) {
            event.preventDefault();
            return;
        }
        
        if(this.target === '#') {
            event.preventDefault();
        }

        const listGroupItemSelectedEvent = new CustomEvent('list-group-item-selected', {
            bubbles: true,
            composed: true,
            detail: {
                index: this.index
            }
        });

        this.dispatchEvent(listGroupItemSelectedEvent);
    }
}
if(!window.customElements.get('bs-list-group-item-action-link')) 
    window.customElements.define('bs-list-group-item-action-link', BsListGroupItemActionLink);

class BsListGroupItemActionButton extends LitElement {
    
    static get properties() {
        return {
            index: Number,
            button: {type: Boolean, reflect: true},
            reset: {type: Boolean, reflect: true},
            submit: {type: Boolean, reflect: true},
            active: {type: Boolean, reflect: true},
            disabled: {type: Boolean, reflect: true}
        };
    }
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsListGroupItemActionCommonCss,
            BsListGroupItemCommonCss
        ];
    }
    
    render() {
        return html`
            <button class="list-group-item list-group-item-action">
                <slot></slot>
            </button>
        `;
    }
    
    constructor() {
        super();
        this.index = 0;
        this.button = true;
        this.reset = false;
        this.submit = false;
        this.active = false;
        this.disabled = false;
    }
    
    firstUpdated() {
        const buttonElement = this.shadowRoot.querySelector('button');
        buttonElement.addEventListener('click', event => this._handleClickEvent(event));
        
        this._setActiveState(buttonElement);
        this._setButtonType(buttonElement);
    }
    
    _setActiveState(buttonElement) {
        
        if(this.disabled && !this.active) {
            buttonElement.setAttribute('disabled', '');
        }
        
        if(!this.disabled && this.active) {
            buttonElement.classList.toggle('active');
        }
    }
    
    _setButtonType(buttonElement) {
        
        if(this.button) {
            buttonElement.setAttribute('type', 'button');
        }
        
        if(this.reset) {
            buttonElement.setAttribute('type', 'reset');
        }
        
        if(this.submit) {
            buttonElement.setAttribute('type', 'submit');
        }
    }
    
    _handleClickEvent(event) {

        if (this.disabled) {
            event.preventDefault();
        }

        const listGroupItemSelectedEvent = new CustomEvent('list-group-item-selected', {
            bubbles: true,
            composed: true,
            detail: {
                index: this.index
            }
        });

        this.dispatchEvent(listGroupItemSelectedEvent);
    }
}
if(!window.customElements.get('bs-list-group-item-action-button')) 
    window.customElements.define('bs-list-group-item-action-button', BsListGroupItemActionButton);

class BsListGroupFlush extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsListGroupCommonCss,
            css`
                ul ::slotted(*) {
                    --list-group-item-border-right: 0px;
                    --list-group-item-border-left: 0px;
                    --list-group-item-border-radius-bottom-right: 0;
                    --list-group-item-border-radius-bottom-left: 0;
                    --list-group-item-border-radius-top-left: 0;
                    --list-group-item-border-radius-top-right: 0;
                }
                
                ul ::slotted(*:first-child) {
                    --list-group-item-border-top: var(--flush-list-group-item-top-border, 0);
                    --list-group-item-border-radius-top-left: var(--flush-list-group-item-top-left-radius, 0);
                    --list-group-item-border-radius-top-right: var(--flush-list-group-item-top-right-radius, 0);
                }
                
                ul ::slotted(*:last-child) {
                    --list-group-item-border-bottom: var(--flush-list-group-item-bottom-border, 0);
                    --list-group-item-border-radius-bottom-left: var(--flush-list-group-item-bottom-left-radius, 0);
                    --list-group-item-border-radius-bottom-right: var(--flush-list-group-item-bottom-right-radius, 0);
                }
            `
        ];
    }
    
    render() {
        return html`
            <ul class="list-group">
                <slot></slot>
            </ul>
        `;
    }
}
if(!window.customElements.get('bs-list-group-flush'))  
    window.customElements.define('bs-list-group-flush', BsListGroupFlush);

class BsListGroupBadgeItem extends LitElement {
    
    static get properties() {
        return {
            align: String,
            justify: String
        };
    }
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsListGroupItemCommonCss,
            BsFlexJustifyCss,
            BsFlexDisplayCss,
            BsFlexAlignItemsCss
        ];
    }
    
    render() {
        return html`
            <li class="list-group-item d-flex">
                <slot></slot>
            </li>
        `;
    }
    
    constructor() {
        super();
        this.justify = 'between';
        this.align = 'center';
    }
    
    firstUpdated() {
        const groupItemElement = this.shadowRoot.querySelector('li');
        this._handleAlignItems(groupItemElement);
        this._handleJustification(groupItemElement);
    }
    
    _handleAlignItems(groupItemElement) {

        if(this.align === 'start') {
            groupItemElement.classList.add('align-items-start');
        }

        if(this.align === 'end') {
            groupItemElement.classList.add('align-items-end');
        }

        if(this.align === 'center') {
            groupItemElement.classList.add('align-items-center');
        }

        if(this.align === 'baseline') {
            groupItemElement.classList.add('align-items-baseline');
        }

        if(this.align === 'stretch') {
            groupItemElement.classList.add('align-items-stretch');
        }
    }

    _handleJustification(groupItemElement) {

        if(this.justify === 'start') {
            groupItemElement.classList.add('justify-content-start');
        }

        if(this.justify === 'end') {
            groupItemElement.classList.add('justify-content-end');
        }

        if(this.justify === 'center') {
            groupItemElement.classList.add('justify-content-center');
        }

        if(this.justify === 'between') {
            groupItemElement.classList.add('justify-content-between');
        }

        if(this.justify === 'around') {
            groupItemElement.classList.add('justify-content-around');
        }
    }
}
if(!window.customElements.get('bs-list-group-badge-item')) 
    window.customElements.define('bs-list-group-badge-item', BsListGroupBadgeItem);

class BsListGroupAction extends LitElement {
    
    static get properties() {
        return {
            selectedItem: { type: Number, reflect: true }
        };
    }
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsListGroupCommonCss,
            css`
                div ::slotted(*:first-child) {
                    --list-group-item-border-radius-top-left: 0.25rem;
                    --list-group-item-border-radius-top-right: 0.25rem;
                }
                
                div ::slotted(*:last-child) {
                    margin-bottom: 0;
                    --list-group-item-border-radius-bottom-left: 0.25rem;
                    --list-group-item-border-radius-bottom-right: 0.25rem;
                }
            `
        ];
    }
    
    render() {
        return html`
            <div class="list-group">
                <slot></slot>
            </div>
        `;
    }
    
    constructor() {
        super();
        this.selectedItem = 0;
    }
    
    firstUpdated() {
        this._addGroupActionItemsIndex();
        this.addEventListener('list-group-item-selected', event => this._handleListGroupItemSelected(event));
    }
    
    updated(changedProperties) {
        
        if (changedProperties.has('selecteditem')) {
            this._updateSelectedItem();
       }
    }
    
    _handleListGroupItemSelected(event) {
        this.selectedItem = event.detail.index;
    }
    
    _addGroupActionItemsIndex() {
        
        const groupItems = this._retrieveGroupItems();
        
        for(let index = 0; index < groupItems.length; ++index) {
            const groupItem = groupItems[index];
            groupItem.setAttribute('index', index);
        }
    }
    
    _updateSelectedItem() {
        
        const groupItems = this._retrieveGroupItems();
        
        for(let index = 0; index < groupItems.length; ++index) {
            
            const groupItem = groupItems[index];
            
            if(index === this.selectedItem) {
                groupItem.setAttribute('active', '');
            } else {
                groupItem.removeAttribute('active');
            }
        }
    }
    
    _retrieveGroupItems() {
        
        const slotNodes = this.shadowRoot.querySelector('slot').assignedNodes();
        const groupActionItemNodes = this._retrieveGroupItemNodes(slotNodes);
        
        return groupActionItemNodes;
    }
    
    _retrieveGroupItemNodes(nodes) {
        
        const groupActionItemNodes = [];
        
        for (let index = 0; index < nodes.length; ++index) {
            const el = nodes[index];
            if (this._isGroupActionItem(el)) {
                groupActionItemNodes.push(el);
            }
        }
        
        return groupActionItemNodes;
    }
    
    _isGroupActionItem(el) {
        return el.nodeType === Node.ELEMENT_NODE && (
                el.localName === 'bs-list-group-item-action-link' || 
                el.localName === 'bs-list-group-item-action-button');
    }
}
if(!window.customElements.get('bs-list-group-action'))  
    window.customElements.define('bs-list-group-action', BsListGroupAction);

class BsListGroupActionFlush extends LitElement {
    
    static get properties() {
        return {
            selectedItem: { type: Number, reflect: true }
        };
    }
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsListGroupCommonCss,
            css`
                div ::slotted(*) {
                    --list-group-item-border-right: 0px;
                    --list-group-item-border-left: 0px;
                    --list-group-item-border-radius-bottom-right: 0;
                    --list-group-item-border-radius-bottom-left: 0;
                    --list-group-item-border-radius-top-left: 0;
                    --list-group-item-border-radius-top-right: 0;
                }
                
                div ::slotted(*:first-child) {
                    --list-group-item-border-top: var(--flush-list-group-item-top-border, 0);
                    --list-group-item-border-radius-top-left: var(--flush-list-group-item-top-left-radius, 0);
                    --list-group-item-border-radius-top-right: var(--flush-list-group-item-top-right-radius, 0);
                }
                
                div ::slotted(*:last-child) {
                    --list-group-item-border-bottom: var(--flush-list-group-item-bottom-border, 0);
                    --list-group-item-border-radius-bottom-left: var(--flush-list-group-item-bottom-left-radius , 0);
                    --list-group-item-border-radius-bottom-right: var(--flush-list-group-item-bottom-right-radius , 0);
                }
            `
        ];
    }
    
    render() {
        return html`
            <div class="list-group">
                <slot></slot>
            </div>
        `;
    }
    
    constructor() {
        super();
        this.selectedItem = 0;
    }
    
    firstUpdated() {
        this._addGroupActionItemsIndex();
        this.addEventListener('list-group-item-selected', event => this._handleListGroupItemSelected(event));
    }
    
    updated(changedProperties) {
        
        if (changedProperties.has('selecteditem')) {
            this._updateSelectedItem();
       }
    }
    
    _handleListGroupItemSelected(event) {
        this.selectedItem = event.detail.index;
    }
    
    _addGroupActionItemsIndex() {
        
        const groupItems = this._retrieveGroupItems();
        
        for(let index = 0; index < groupItems.length; ++index) {
            const groupItem = groupItems[index];
            groupItem.setAttribute('index', index);
        }
    }
    
    _updateSelectedItem() {
        
        const groupItems = this._retrieveGroupItems();
        
        for(let index = 0; index < groupItems.length; ++index) {
            
            const groupItem = groupItems[index];
            
            if(index === this.selectedItem) {
                groupItem.setAttribute('active', '');
            } else {
                groupItem.removeAttribute('active');
            }
        }
    }
    
    _retrieveGroupItems() {
        
        const slotNodes = this.shadowRoot.querySelector('slot').assignedNodes();
        const groupActionItemNodes = this._retrieveGroupItemNodes(slotNodes);
        
        return groupActionItemNodes;
    }
    
    _retrieveGroupItemNodes(nodes) {
        
        const groupActionItemNodes = [];
        
        for (let index = 0; index < nodes.length; ++index) {
            const el = nodes[index];
            if (this._isGroupActionItem(el)) {
                groupActionItemNodes.push(el);
            }
        }
        
        return groupActionItemNodes;
    }
    
    _isGroupActionItem(el) {
        return el.nodeType === Node.ELEMENT_NODE && (
                el.localName === 'bs-list-group-item-action-link' || 
                el.localName === 'bs-list-group-item-action-button');
    }
}
if(!window.customElements.get('bs-list-group-action-flush')) 
    window.customElements.define('bs-list-group-action-flush', BsListGroupActionFlush);

export { BsListGroup, BsListGroupAction, BsListGroupActionFlush, BsListGroupBadgeItem, BsListGroupFlush, BsListGroupItem, BsListGroupItemActionButton, BsListGroupItemActionLink };
