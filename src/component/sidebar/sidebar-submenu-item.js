
import { LitElement, html, css } from 'lit-element';

class SidebarSubmenuItem extends LitElement {
    
    static get properties() {
        return {
            index: { type: Number, reflect: true },
            view: { type: String, reflect: true },
            title: { type: String, reflect: true },
            label: { type: String, reflect: true },
            active: { type: Boolean, reflect: true },
            href: { type: String, reflect: true }
        };
    }
    
    static get styles() {
        return css`
            
            div {
                display: block;
                font-size: 16px;
                min-height: 40px;
                line-height: 40px;
            }

            a {
                padding-left: 40px;
                display: block;
                overflow: hidden;
                text-decoration: none;
                color: #666;
                font-weight: 400;
                white-space: nowrap;
                cursor: pointer;
            }

            a:hover, 
            a:hover span {
                color: #000;
                background-color: #dddddd; 
            }

            :host([active]) a {
                color: #000;
                background-color: #eeeeee;
            }

            :host([active]) a:hover, 
            :host([active]) a:hover span {
                color: #000;
                background-color: #dddddd; 
            }
        `;
    }
    
    render() {
        return html`
            <div>
                <a href="${this.href}" title="${this.title}">
                    <span>${this.label}</span>
                </a>
            </div>
        `;
    }
    
    constructor() {
        super();
        this.view = '';
        this.title = '';
        this.label = '';
        this.href = '#';
        this.active = false;
    }
    
    firstUpdated() {
        const labelElement = this.shadowRoot.querySelector('a');
        labelElement.addEventListener('click', () => this._handleSubMenuItemSelected());
    }
    
    disconnectedCallback() {
        const labelElement = this.shadowRoot.querySelector('a');
        labelElement.removeEventListener('click', () => this._handleSubMenuItemSelected());
        super.disconnectedCallback();
    }
    
    _handleSubMenuItemSelected() {
        
        const submenuItemSelectedEvent = new CustomEvent(
            'submenuItemSelected', {
                bubbles: true, 
                composed: true,
                detail: {
                    submenuItemIndex: this.index
                }
            });

        this.dispatchEvent(submenuItemSelectedEvent);
    }
    
    activate() {
        this.active = true;
    }
    
    deactivate() {
        this.active = false;
    }
};

window.customElements.define('sidebar-submenu-item', SidebarSubmenuItem);