
import { LitElement, html, css } from 'lit-element';

class SidebarMenuItemExpandable extends LitElement {
    
    static get properties() {
        return {
            title: String,
            label: String,
            index: { type: Number, reflect: true },
            expanded: { type: Boolean, reflect: true }
        };
    }
    
    static get styles() {
        return css`
            
            :host {
                display: block;
            }

            div {
                display: block;
                font-size: 16px;
                min-height: 40px;
                line-height: 40px;
            }

            a {
                display: block;
                overflow: hidden;
                text-decoration: none;
                color: #666;
                font-weight: 400;
                white-space: nowrap;
                cursor: pointer;
            }

            @media (min-width: 768px) {
                a:hover, 
                a:hover span {
                    color: #000;
                    background-color: #dddddd; 
                }
            }

            div.wrapper {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                width: 160px;
                padding-left: 20px;
                font-weight: 400;
            }
        `;
    }
    
    render() {
        return html`
            <div>
                <a href="${this.target}" title="${this.title}">
                    <div class="wrapper">
                        <span>${this.label}</span>
                        <slot name="expandIcon"></slot>
                        <slot name="minimizeIcon"></slot>
                    </div>
                </a>
            </div>
            
            <slot name="submenu"></slot>
        `;
    }
    
    constructor() {
        super();
        this.title = '';
        this.label = '';
        this.expanded = false;
    }
    
    firstUpdated() {
        this._itemExpansionChanged();
        const sidebarLinkElement = this.shadowRoot.querySelector('a');
        sidebarLinkElement.addEventListener('click', event => this._handleItemSelected(event));
    }
    
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('submenuItemSelected', () => this._handleSubmenuItemSelected());
    }
    
    disconnectedCallback() {
        const sidebarLinkElement = this.shadowRoot.querySelector('a');
        sidebarLinkElement.removeEventListener('click', event => this._handleItemSelected(event));
        this.removeEventListener('submenuItemSelected', () => this._handleSubmenuItemSelected());
        super.disconnectedCallback();
    }
    
    expand() {
        this.expanded = true;
        this._itemExpansionChanged();
    }
    
    collapse() {
        this.expanded = false;
        this._itemExpansionChanged();
    }
    
    _handleSubmenuItemSelected() {

        const menuItemSelectedEvent = new CustomEvent(
            'menuItemSelected', {
                bubbles: true, 
                composed: true,
                detail: {
                    menuItemIndex: this.index
                }
            });

        this.dispatchEvent(menuItemSelectedEvent);
    }

    _handleItemSelected(event) {
        this.expanded = !this.expanded;
        this._itemExpansionChanged();
        event.preventDefault();
    }

    _itemExpansionChanged() {
        
        this.updateComplete.then(() => {
            this._configureExpansionIcons(this.expanded);
            this._passExpansionStateToSubmenu(this.expanded);
        });
    }
    
    _configureExpansionIcons(newValue) {
        
        const expandIconSlot = this.shadowRoot.querySelector('slot[name="expandIcon"]');
        const minimizeIconSlot = this.shadowRoot.querySelector('slot[name="minimizeIcon"]');
        
        const expandIconSlotComponent = expandIconSlot.assignedNodes()[0];
        const minimizeIconSlotComponent = minimizeIconSlot.assignedNodes()[0];
        
        if(newValue) {
            expandIconSlotComponent.style.display = 'none';
            minimizeIconSlotComponent.style.display = 'inline';
        } else {
            expandIconSlotComponent.style.display = 'inline';
            minimizeIconSlotComponent.style.display = 'none';
        }
    }
    
    _passExpansionStateToSubmenu(expandedValue) {
        
        const submenuSlot = this.shadowRoot.querySelector('slot[name="submenu"]');
        const submenuComponent = submenuSlot.assignedNodes()[0];
        
        if(submenuComponent) {
            if(expandedValue) {
                submenuComponent.expand();
            } else {
                submenuComponent.collapse();
            }
        }
    }
};

window.customElements.define('sidebar-menu-item-expandable', SidebarMenuItemExpandable);