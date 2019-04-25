
import { html } from 'lit-element';

function getTemplateToLoad(viewPath) {
            
    switch(viewPath) {
        case 'loading':                 return html`<loading-view></loading-view>`;
        case 'home':                    return html`<home-view></home-view>`;
        case 'getting-started':         return html`<getting-started-view></getting-started-view>`;
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

function getViewCustomElementName(view) {
        
    switch (view) {
        case 'home':                    return 'home-view';
        case 'getting-started':         return 'getting-started-view';
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

function getViewCustomElementPath(view) {
        
    switch (view) {
        case 'home':                    return './views/home/home-view.js';
        case 'getting-started':         return './views/getting-started/getting-started-view.js';
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

export { getTemplateToLoad, getViewCustomElementName,  getViewCustomElementPath };