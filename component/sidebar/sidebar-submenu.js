
import { LitElement, html, css } from 'lit-element';

class SidebarSubmenu extends LitElement {
    
    static get properties() {
        return {
            expanded: { type: Boolean, reflect: true }
        };
    }
    
    static get styles() {
        return css`
            
            div {
                display: none;
                margin-top: 0px;
                margin-bottom: 0px;
                padding-left: 0px;
                padding-bottom: 0px;
            }

            :host([expanded]) div {
                display: block;
                -moz-transition: all 0.40s linear;
                -webkit-transition: all 0.40s linear;
                transition: all 0.40s linear;
            }
        `;
    }
    
    render() {
        return html`
            <div>
                <slot></slot>
            </div>
        `;
    }
    
    constructor() {
        super();
        this.expanded = false;
    }
    
    expand() {
        this.expanded = true;
    }
    
    collapse() {
        this.expanded = false;
    }
};

window.customElements.define('sidebar-submenu', SidebarSubmenu);