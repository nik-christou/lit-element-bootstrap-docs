
import { LitElement, html, css } from 'lit-element';
import { BsFlexJustifyCss } from 'lit-element-bootstrap/utilities/flex';
import { BsContentRebootCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';
import { BsPositionCss, BsSpacingCss, BsBackgroundColorsCss } from 'lit-element-bootstrap/utilities';
import { BsNavbar, BsNavbarToggler, BsNavbarBrandLink } from 'lit-element-bootstrap/components/navbar';

import '../icons/bars-icon';

class DrawerNavbar extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsSpacingCss,
            BsFlexJustifyCss,
            BsBackgroundColorsCss,
            css`
                bs-navbar {
                    border-bottom: 1px solid rgba(0,0,0,0.0625);
                }
                
                bs-navbar > bs-navbar-toggler {
                    --navbar-toggler-border: none;
                    --navbar-toggler-outline-focus: none;
                }
            `,
            BsPositionCss
        ];
    }
    
    render() {
        return html`
            <bs-navbar navbar-light class="bg-light fixed-top justify-content-start">
                <bs-navbar-toggler>
                    <bars-icon></bars-icon>
                </bs-navbar-toggler>
                <bs-navbar-brand-link class="pl-2">Polymer Bootstrap</bs-navbar-brand-link>
            </bs-navbar>
        `;
    }
    
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('bs-navbar-toggler-click', () => this._toggleSidedrawer());
    }
    
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('bs-navbar-toggler-click', () => this._toggleSidedrawer());
    }
    
    _toggleSidedrawer() {
        
        const toggleSidebarEvent = new CustomEvent(
            'toggleSidebarEvent', {
                bubbles: true, 
                composed: true
            });

        this.dispatchEvent(toggleSidebarEvent);
    }
};

window.customElements.define('drawer-navbar', DrawerNavbar);