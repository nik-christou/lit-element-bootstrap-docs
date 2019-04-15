
import { LitElement, html, css } from 'lit-element';
import { installRouter } from 'pwa-helpers/router';
import { BsContentRebootCss } from 'lit-element-bootstrap/content';

import './component/drawer/drawer-layout';
import './component/drawer/drawer-sidebar';
import './component/drawer/drawer-navbar';
import './views/loading/loading-view';

class AppDocs extends LitElement {
    
    static get properties() {
        return {
            _page: String
        };
    }
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                :host {
                    --blue: #007bff;
                    --indigo: #6610f2;
                    --purple: #6f42c1;
                    --pink: #e83e8c;
                    --red: #dc3545;
                    --orange: #fd7e14;
                    --yellow: #ffc107;
                    --green: #28a745;
                    --teal: #20c997;
                    --cyan: #17a2b8;
                    --white: #fff;
                    --gray: #6c757d;
                    --gray-dark: #343a40;
                    --primary: #007bff;
                    --secondary: #6c757d;
                    --success: #28a745;
                    --info: #17a2b8;
                    --warning: #ffc107;
                    --danger: #dc3545;
                    --light: #f8f9fa;
                    --dark: #343a40;
                    --breakpoint-xs: 0;
                    --breakpoint-sm: 576px;
                    --breakpoint-md: 768px;
                    --breakpoint-lg: 992px;
                    --breakpoint-xl: 1200px;
                    --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
                    --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
                    -webkit-text-size-adjust: 100%;
                    -ms-text-size-adjust: 100%;
                    -ms-overflow-style: scrollbar;
                    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

                    margin: 0;
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
                    font-size: 1rem;
                    font-weight: 400;
                    line-height: 1.5;
                    color: #212529;
                    text-align: left;
                    background-color: #fff;
                }

                @-ms-viewport {
                    width: device-width;
                }
            `
        ];
    }
    
    render() {
        return html`
            
            <drawer-layout>
        
                <drawer-navbar slot="drawer-navbar"></drawer-navbar>
                <drawer-sidebar slot="drawer-sidebar"></drawer-sidebar>
                
                ${this._selectTemplateToLoad(this._page)}
                
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
        
        const customElementName = this._getViewCustomElementName(view);
        const customElement = window.customElements.get(customElementName);

        if(!customElement) {
            this._page = 'loading';
        }

        this._loadView(view)
            .then(this._updateSidebar(view))
            .then(this._closeDrawerOnMobileDevices(drawerLayoutElement));
    }

    async _loadView(view) {
        
        const viewCustomElementPath = this._getViewCustomElementPath(view);
        await import(viewCustomElementPath);
        
        this._page = view;
    }
    
    async _updateSidebar(view) {
        const drawerSidebar = this.shadowRoot.querySelector('drawer-sidebar');
        drawerSidebar.updateView(view);
    }
         
    _closeDrawerOnMobileDevices(drawerLayoutElement) {
        
        if(window.matchMedia('(max-width: 768px)').matches) {
            drawerLayoutElement.closeDrawer();
        }
    }
    
    _selectTemplateToLoad(viewPath) {
        
        switch(viewPath) {
            case 'loading':                 return html`<loading-view></loading-view>`;
            case 'home':                    return html`<home-view></home-view>`;
            case 'layout/containers':       return html`<container-view></container-view>`;
            case 'layout/grid':             return html`<grid-view></grid-view>`;
            case 'component/alerts':        return html`<alerts-view></alerts-view>`;
            case 'component/badges':        return html`<badges-view></badges-view>`;
            case 'component/breadcrumbs':   return html`<breadcrumbs-view></breadcrumbs-view>`;
            case 'component/buttons':       return html`<buttons-view></buttons-view>`;
            case 'component/buttons-group': return html`<button-group-view></button-group-view>`;
            case 'component/cards':         return html`<cards-view></cards-view>`;
            case 'component/carousel':      return html`<carousel-view></carousel-view>`;
            case 'component/dropdowns':     return html`<dropdowns-view></dropdowns-view>`;
            case 'component/forms':         return html`<forms-view></forms-view>`;
            case 'component/input-groups':  return html`<input-group-view></input-group-view>`;
            case 'component/list-groups':   return html`<list-groups-view></list-groups-view>`;
            case 'component/jumbotron':     return html`<jumbotron-view></jumbotron-view>`;
            case 'component/media-object':  return html`<media-object-view></media-object-view>`;
            case 'component/modal':         return html`<modal-view></modal-view>`;
            case 'component/navs':          return html`<navs-view></navs-view>`;
            case 'component/navbar':        return html`<navbar-view></navbar-view>`;
            case 'component/pagination':    return html`<pagination-view></pagination-view>`;
            case 'component/progress':      return html`<progress-view></progress-view>`;
            case 'behaviour/collapse':      return html`<collapse-view></collapse-view>`;
            default:                        return html`<home-view></home-view>`; // TODO this should be a 404 view
        }
    }

    _getViewCustomElementName(view) {
        
        switch (view) {
            case 'home':                    return 'home-view';
            case 'layout/containers':       return 'container-view';
            case 'layout/grid':             return 'grid-view';
            case 'component/alerts':        return 'alerts-view';
            case 'component/badges':        return 'badges-view';
            case 'component/breadcrumbs':   return 'breadcrumbs-view';
            case 'component/buttons':       return 'buttons-view';
            case 'component/buttons-group': return 'button-group-view';
            case 'component/cards':         return 'cards-view';
            case 'component/carousel':      return 'carousel-view';
            case 'component/dropdowns':     return 'dropdowns-view';
            case 'component/forms':         return 'forms-view';
            case 'component/input-groups':  return 'input-group-view';
            case 'component/list-groups':   return 'list-groups-view';
            case 'component/jumbotron':     return 'jumbotron-view';
            case 'component/media-object':  return 'media-object-view';
            case 'component/modal':         return 'modal-view';
            case 'component/navs':          return 'navs-view';
            case 'component/navbar':        return 'navbar-view';
            case 'component/pagination':    return 'pagination-view';
            case 'component/progress':      return 'progress-view';
            case 'behaviour/collapse':      return 'collapse-view';
            default:                        return 'home-view'; // TODO this should be a 404 view
        }
    }

    _getViewCustomElementPath(view) {
        
        switch (view) {
            case 'home':                    return './views/home/home-view.js';
            case 'layout/containers':       return './views/layout/container/container-view.js';
            case 'layout/grid':             return './views/layout/grid/grid-view.js';
            case 'component/alerts':        return './views/components/alerts/alerts-view.js';
            case 'component/badges':        return './views/components/badges/badges-view.js';
            case 'component/breadcrumbs':   return './views/components/breadcrumb/breadcrumbs-view.js';
            case 'component/buttons':       return './views/components/button/buttons-view.js';
            case 'component/buttons-group': return './views/components/button-group/buttons-group-view.js';
            case 'component/cards':         return './views/components/cards/cards-view.js';
            case 'component/carousel':      return './views/components/carousel/carousel-view.js';
            case 'component/dropdowns':     return './views/components/dropdown/dropdowns-view.js';
            case 'component/forms':         return './views/components/form/forms-view.js';
            case 'component/input-groups':  return './views/components/input-group/input-group-view.js';
            case 'component/list-groups':   return './views/components/list-group/list-groups-view.js';
            case 'component/jumbotron':     return './views/components/jumbotron/jumbotron-view.js';
            case 'component/media-object':  return './views/components/media-object/media-object-view.js';
            case 'component/modal':         return './views/components/modal/modal-view.js';
            case 'component/navs':          return './views/components/navs/navs-view.js';
            case 'component/navbar':        return './views/components/navbar/navbar-view.js';
            case 'component/pagination':    return './views/components/pagination/pagination-view.js';
            case 'component/progress':      return './views/components/progress/progress-view.js';
            case 'behaviour/collapse':      return './views/behaviour/collapse/collapse-view.js';
            default:                        return './views/home/home-view.js'; // TODO this should be a 404 view
        }
    }
};

window.customElements.define('app-docs', AppDocs);
