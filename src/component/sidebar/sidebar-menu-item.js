
import { LitElement, html, css } from 'lit-element';

class SidebarMenuItem extends LitElement {
    
    static get properties() {
        return {
            index: { type: Number, reflect: true },
            view: { type: String, reflect: true },
            title: { type: String, reflect: true },
            label: { type: String, reflect: true },
            active: { type: Boolean, reflect: true },
            target: { type: String, reflect: true },
            expandable: { type: Boolean, reflect: true }
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
                padding-left: 20px;
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
                <a href="${this.target}" title="${this.title}">
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
        this.target = '';
        this.expandable = false;
        this.active = false;
    }
    
    firstUpdated() {
        const linkElement = this.shadowRoot.querySelector('a');
        linkElement.addEventListener('click', _ => this._handleItemSelected());
    }
    
    activate() {
        this.active = true;
    }
    
    deactivate() {
        this.active = false;
    }
    
    _handleItemSelected() {

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
};

window.customElements.define('sidebar-menu-item', SidebarMenuItem);