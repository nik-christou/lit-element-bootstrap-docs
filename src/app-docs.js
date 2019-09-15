
import { LitElement, html } from 'lit-element';
import { installRouter } from 'pwa-helpers/router';
import { BsContentRebootCss } from 'lit-element-bootstrap/content';
import { DefaultThemeCss } from 'lit-element-bootstrap/theme';
import { getTemplateToLoad, getViewCustomElementName,  getViewCustomElementPath } from './app-routing.js';

import './component/drawer/drawer-layout.js';
import './component/drawer/drawer-sidebar.js';
import './component/drawer/drawer-navbar.js';
import './views/loading/loading-view.js';

export class AppDocs extends LitElement {
    
    static get properties() {
        return {
            _page: String
        };
    }
    
    static get styles() {
        return [
            BsContentRebootCss,
            DefaultThemeCss
        ];
    }

    render() {
        return html`
            
            <drawer-layout>
        
                <drawer-navbar slot="drawer-navbar"></drawer-navbar>
                <drawer-sidebar slot="drawer-sidebar"></drawer-sidebar>
                
                ${getTemplateToLoad(this._page)}
                
            </drawer-layout>
            
        `;
    }
    
    constructor() {
        super();
        this._page = 'home';
    }
    
    firstUpdated() {
        const drawerLayoutElement = this.shadowRoot.querySelector('drawer-layout');
        installRouter((location) => this._locationChanged(location, drawerLayoutElement));
    }
    
    _locationChanged(location, drawerLayoutElement) {
        
        const path = window.decodeURIComponent(location.pathname);
        const view = path === '/' ? 'home' : path.slice(1);
        
        const customElementName = getViewCustomElementName(view);
        const customElement = window.customElements.get(customElementName);

        if(!customElement) {
            this._page = 'loading';
        }

        this._loadView(view)
            .then(this._updateSidebar(view))
            .then(this._updateDrawer(view, drawerLayoutElement));
    }

    async _loadView(view) {
        
        const viewCustomElementPath = getViewCustomElementPath(view);
        await import(viewCustomElementPath);
        
        this._page = view;
    }
    
    async _updateSidebar(view) {
        const drawerSidebar = this.shadowRoot.querySelector('drawer-sidebar');
        drawerSidebar.updateView(view);
    }

    async _updateDrawer(view, drawerLayoutElement) {
        
        // if on mobile device or home page close sidebar drawer
        if(window.matchMedia('(max-width: 768px)').matches || view === 'home') {
            
            drawerLayoutElement.updateComplete.then(() => {
                drawerLayoutElement.closeDrawer();
            });
        
        // if not on a mobile device and not on home page
        } else if(view !== 'home') {
            
            drawerLayoutElement.updateComplete.then(() => {
                drawerLayoutElement.openDrawer();
            });
        }
    }
};

window.customElements.define('app-docs', AppDocs);
