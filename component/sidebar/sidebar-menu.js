
import { LitElement, html, css } from 'lit-element';

class SidebarMenu extends LitElement {
    
    static get styles() {
        return css`
            
            div {
                border-right: 1px solid rgba(0,0,0,.0625);
                height: calc(100vh - 80px);
                margin: 0;
                padding-right: 0px;
                padding-left: 0px;
                padding-top: 15px;
                position: relative;
                margin-top: 55px;
                overflow-y: hidden;
            }

            @media (max-width: 768px) {
                div {
                    overflow-y: auto;
                }
            }

            @media (min-width: 768px) {
                div:hover {
                    overflow-y: auto;
                }
            }

            div ::slotted(*:last-child) {
                margin-bottom: 20px;
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
};

window.customElements.define('sidebar-menu', SidebarMenu);