
import { LitElement, html, css } from 'lit-element';
import { installRouter } from 'pwa-helpers/router';
import { BsContentRebootCss } from 'lit-element-bootstrap/content';
import { DefaultThemeCss } from 'lit-element-bootstrap/theme';
import { getTemplateToLoad, getViewCustomElementName,  getViewCustomElementPath } from './app-routing.js';

import { Workbox } from 'workbox-window';
import 'lit-element-bootstrap/components/alert';

import './component/drawer/drawer-layout.js';
import './component/drawer/drawer-sidebar.js';
import './component/drawer/drawer-navbar.js';
import './views/loading/loading-view.js';

export class AppDocs extends LitElement {
    
    static get properties() {
        return {
            _page: String,
            _workbox: Object
        };
    }
    
    static get styles() {
        return [
            BsContentRebootCss,
            DefaultThemeCss,
            css`
                bs-alert {
                    position: fixed;
                    right: 20px;
                    bottom: 0;
                    left: 20px;
                    z-index: 1030;
                }

                bs-alert-link {
                    margin-left: 10px;
                }
            `
        ];
    }

    render() {
        return html`
            
            <drawer-layout>
        
                <drawer-navbar slot="drawer-navbar"></drawer-navbar>
                <drawer-sidebar slot="drawer-sidebar"></drawer-sidebar>
                
                ${getTemplateToLoad(this._page)}
                
                <br />

                <bs-alert primary dismissable fade>
                    <div slot="message">
                        New version available <bs-alert-link id="refresh" primary>Refresh</bs-alert-link>
                    </div>
                    <bs-alert-dismiss slot="dismiss"></bs-alert-dismiss>
                </bs-alert>
                
            </drawer-layout>
        `;
    }
    
    constructor() {
        super();
        this._page = 'home';
        this._registerServiceWorker();
    }
    
    firstUpdated() {
        const drawerLayoutElement = this.shadowRoot.querySelector('drawer-layout');
        installRouter((location) => this._locationChanged(location, drawerLayoutElement));

        const refreshSWElement = this.shadowRoot.querySelector('#refresh');
        refreshSWElement.addEventListener('click', event => this._handleRefreshEvent(event));
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

    _handleRefreshEvent(event) {

        event.preventDefault();

        // set up a listener that will reload the page as soon 
        // as the previously waiting service worker has taken control
        this._workbox.addEventListener('controlling', (event) => {
            window.location.reload();
        });

        // Send a message telling the service worker to skip waiting.
        // This will trigger the `controlling` event handler above
        this._workbox.messageSW({type: 'SKIP_WAITING'});
    }

    _registerServiceWorker() {

        if (!'serviceWorker' in navigator) {
            return;
        }

        // path from baseUrl
        this._workbox = new Workbox('/service-worker.js');
    
        // Add an event listener to detect when the registered
        // service worker has installed but is waiting to activate.
        this._workbox.addEventListener('waiting', _ => {
            
            // alert component should provide a show/hide functions
            // to avoid the need to react on attributes changes
            const refreshAlertElement = this.shadowRoot.querySelector('bs-alert');
            refreshAlertElement.setAttribute('show', true);
        });
    
        // Register the service worker after event listeners have been added.
        this._workbox.register();
    }
};

window.customElements.define('app-docs', AppDocs);
