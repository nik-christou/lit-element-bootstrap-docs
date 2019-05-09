
import { LitElement, html, css } from 'lit-element';
import { BsFlexJustifyCss } from 'lit-element-bootstrap/utilities/flex';
import { BsContentRebootCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';
import { BsPositionCss, BsSpacingCss, BsBackgroundColorsCss } from 'lit-element-bootstrap/utilities';

import '../icons/bars-icon';
import 'lit-element-bootstrap/components/navs';
import 'lit-element-bootstrap/components/navbar';

class DrawerNavbar extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsSpacingCss,
            BsFlexJustifyCss,
            BsBackgroundColorsCss,
            css`
                :host {
                    display: block;
                }

                bs-navbar {
                    border-bottom: 1px solid rgba(0,0,0,0.0625);
                }

                bs-navbar-brand-link {
                    margin-right: 0;
                }
                
                bs-navbar > bs-navbar-toggler {
                    --navbar-toggler-border: none;
                    --navbar-toggler-outline-focus: none;
                    --navbar-toggler-padding: 0;
                }

                bs-navbar-nav {
                    --navbar-nav-flex-direction: row;
                }

                @media (max-width: 576px) {
                    bs-nav-link#githubLink {
                        padding: 0;
                    }
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
                <bs-navbar-brand-link class="pl-2" target="/home">lit-element-bootstrap</bs-navbar-brand-link>
                <bs-navbar-nav class="ml-auto">
                    <bs-nav-item>
                        <bs-nav-link id="githubLink" href="https://github.com/nik-christou/lit-element-bootstrap">
                            <img width="24" src="/src/img/github_mark.png" />
                        </bs-nav-link>
                    </bs-nav-item>
                </bs-navbar-nav>
            </bs-navbar>
        `;
    }
    
    firstUpdated() {
        this.addEventListener('bs-navbar-toggler-click', () => this._toggleSidedrawer());
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