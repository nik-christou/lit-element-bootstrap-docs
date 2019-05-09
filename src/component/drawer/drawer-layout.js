
import { LitElement, html, css } from 'lit-element';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query';
import { BsContentRebootCss } from 'lit-element-bootstrap/content';

import 'lit-element-bootstrap/layout/grid';

class DrawerLayout extends LitElement {

    static get styles() {
        return [
            BsContentRebootCss,
            css`
                :host {
                    display: block;
                }

                div.drawer-content-wrapper {
                    margin-top: 70px;
                    min-height: 100%;
                    overflow-x: hidden;
                    transition: margin-left 0.2s;
                }

                div.drawer-sidebar-wrapper.active {
                    /* left: 0px; */
                    transform: translateX(220px);
                }

                /*
                div.drawer-content-inner {
                    padding-left: 15px;
                    padding-right: 15px;
                }
                */

                div.drawer-sidebar-wrapper {
                    top: 0;
                    bottom: 0;
                    left: -220px;
                    width: 220px;
                    z-index: 1000;
                    background-color: #fff;
                    overflow: hidden;
                    position: fixed;
                    -webkit-transition: all 0.2s ease;
                    -o-transition: all 0.2s ease;
                    transition: all 0.2s ease;
                }

                div.drawer-sidebar-inner {
                    position: relative;
                    /* height: 100%; */
                }

                div.drawer-layout-backdrop {
                    position: fixed;
                    display: none;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(0, 0, 0, 0.4);
                    z-index: 1;
                }

                @media (min-width: 992px) {
                    
                    div.drawer-sidebar-wrapper {
                        /* left: -280px; */
                        transform: translateX(0px);
                    }
                }
                
                @media (min-width: 768px) {
                    
                    div.drawer-sidebar-wrapper {
                        /* left: 0px; */
                        transform: translateX(220px);
                    }

                    div.drawer-content-wrapper {
                        margin-left: 220px;
                    }

                    div.drawer-layout.hide-sidedrawer div.drawer-sidebar-wrapper {
                        /* left: -280px; */
                        transform: translateX(0px);
                    }

                    div.drawer-layout.hide-sidedrawer div.drawer-content-wrapper {
                        margin-left: 0;
                    }
                }
            `
        ];
    }

    render() {
        return html`
        
            <div class="drawer-layout">
                
                <!-- this element can be the backdrop which is enabled only for certain sizes -->
                <div class="drawer-layout-backdrop"></div>
                
                <div class="drawer-navbar">
                    <slot name="drawer-navbar"></slot>
                </div>
                
                <div class="drawer-body">
                    
                    <div class="drawer-sidebar-wrapper">
                        <div class="drawer-sidebar-inner">
                            <slot name="drawer-sidebar"></slot>
                        </div>
                    </div>
                
                    <div class="drawer-content-wrapper">
                        <div class="drawer-content-inner">
                            <bs-container fluid>
                                <bs-row>
                                    <bs-column xs-12>
                                        <slot></slot>
                                    </bs-column>
                                </bs-row>
                            </bs-container>
                        </div>
                    </div>
                
                </div>
                
            </div>
        `;
    }
    
    static get properties() {
        return {
            drawerOpened: Boolean
        };
    }
    
    constructor() {
        super();
        this.drawerOpened = true;
    }
    
    firstUpdated() {
        this._setInitialDrawerOpenState();
        installMediaQueryWatcher('(max-width: 768px)', (matches) => this._smallDevicesLayoutChanged(matches));
        
        const drawerLayoutBackdropElement = this.shadowRoot.querySelector('div.drawer-layout-backdrop');
        drawerLayoutBackdropElement.addEventListener('click', () => this._drawerLayoutBackdropClicked());

        this.addEventListener('toggleSidebarEvent', () => this._toggleSidebar());
    }
    
    _setInitialDrawerOpenState() {

        if(window.matchMedia('(max-width: 768px)').matches) {
            this.drawerOpened = false;
        } else {
            this.drawerOpened = true;
        }
    }

    _smallDevicesLayoutChanged(matches) {

        if(matches && this.drawerOpened) {
            this._enableDrawerLayoutBackdrop();
        } else {
            this._disableDrawerLayoutBackdrop();
        }
    }
    
    _toggleSidebar() {

        if(this.drawerOpened) {
            this.closeDrawer();
        } else {
            this.openDrawer();
        }
    }

    openDrawer() {

        const drawerLayoutElement = this.shadowRoot.querySelector('div.drawer-layout');
        const sidebarWrapperElement = this.shadowRoot.querySelector('div.drawer-sidebar-wrapper');

        this.drawerOpened = true;
        sidebarWrapperElement.classList.add('active');
        drawerLayoutElement.classList.remove('hide-sidedrawer');
        this._enableDrawerLayoutBackdrop();
    }

    closeDrawer() {

        const drawerLayoutElement = this.shadowRoot.querySelector('div.drawer-layout');
        const sidebarWrapperElement = this.shadowRoot.querySelector('div.drawer-sidebar-wrapper');
        
        this.drawerOpened = false;
        sidebarWrapperElement.classList.remove('active');
        drawerLayoutElement.classList.add('hide-sidedrawer');
        this._disableDrawerLayoutBackdrop();
    }

    _drawerLayoutBackdropClicked() {

        if(this.drawerOpened) {
            this.closeDrawer();
            this._disableDrawerLayoutBackdrop();
        }
    }

    _enableDrawerLayoutBackdrop() {

        const bodyElement = document.documentElement.querySelector('body');
        const drawerLayoutBackdropElement = this.shadowRoot.querySelector('div.drawer-layout-backdrop');

        if(window.matchMedia('(max-width: 768px)').matches) {
            
            drawerLayoutBackdropElement.style.display = 'block';
            bodyElement.style.overflow = 'hidden';
        }
    }

    _disableDrawerLayoutBackdrop() {

        const bodyElement = document.documentElement.querySelector('body');
        const drawerLayoutBackdropElement = this.shadowRoot.querySelector('div.drawer-layout-backdrop');
         
        bodyElement.style.overflow = 'auto';
        drawerLayoutBackdropElement.style.display = 'none';
    }
};

window.customElements.define('drawer-layout', DrawerLayout);