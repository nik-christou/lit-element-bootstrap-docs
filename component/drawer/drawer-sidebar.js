
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from 'lit-element-bootstrap/content';
import { BsBackgroundColorsCss } from 'lit-element-bootstrap/utilities';

import '../sidebar/sidebar-menu.js';
import '../sidebar/sidebar-submenu.js';
import '../sidebar/sidebar-menu-item.js';
import '../sidebar/sidebar-submenu-item.js';
import '../sidebar/sidebar-menu-item-expandable.js';
import '../icons/arrow/angle-up-arrow.js';
import '../icons/arrow/angle-down-arrow.js';

class DrawerSidebar extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsBackgroundColorsCss,
            css`
                
                sidebar-menu, 
                sidebar-menu-item, 
                sidebar-submenu, 
                sidebar-submenu-item  {
                    display: block;
                }

                angle-down-arrow {
                    display: inline;
                    position: relative;
                    line-height: 40px; 
                    font-size: 1em;
                }
        
                angle-up-arrow {
                    display: inline;
                    position: relative;
                    line-height: 40px; 
                    font-size: 1em;
                }
            `
        ];
    }
    
    render() {
        return html`
            
            <sidebar-menu>
                <sidebar-menu-item 
                    title="Home" 
                    label="Home" 
                    target="/home" 
                    index="0" 
                    view="home">
                </sidebar-menu-item>
                <sidebar-menu-item-expandable 
                    title="Layout" 
                    label="Layout" 
                    index="1"
                    view="layout">
                        <angle-down-arrow slot="expandIcon"></angle-down-arrow>
                        <angle-up-arrow slot="minimizeIcon"></angle-up-arrow>
                        <sidebar-submenu slot="submenu">
                            <sidebar-submenu-item 
                                title="Containers" 
                                label="Containers" 
                                target="/layout/containers"
                                index="0"
                                view="containers">
                            </sidebar-submenu-item>
                            <sidebar-submenu-item 
                                title="Grid" 
                                label="Grid" 
                                target="/layout/grid" 
                                index="1"
                                view="grid">
                            </sidebar-submenu-item>
                        </sidebar-submenu>
                </sidebar-menu-item-expandable>
                <sidebar-menu-item-expandable 
                    title="Components"
                    label="Components"
                    index="2"
                    view="component">
                        <angle-down-arrow slot="expandIcon"></angle-down-arrow>
                        <angle-up-arrow slot="minimizeIcon"></angle-up-arrow>
                        <sidebar-submenu slot="submenu">
                            <sidebar-submenu-item 
                                title="Alerts" 
                                label="Alerts" 
                                target="/component/alerts" 
                                index="0"
                                view="alerts">
                            </sidebar-submenu-item>
                            <sidebar-submenu-item 
                                title="Badge" 
                                label="Badge" 
                                target="/component/badges" 
                                index="1"
                                view="badges">
                            </sidebar-submenu-item>
                            <sidebar-submenu-item 
                                title="Breadcrumb" 
                                label="Breadcrumb" 
                                target="/component/breadcrumbs" 
                                index="2"
                                view="breadcrumbs">
                            </sidebar-submenu-item>
                            <sidebar-submenu-item 
                                title="Buttons" 
                                label="Buttons" 
                                target="/component/buttons" 
                                index="3"
                                view="buttons">
                            </sidebar-submenu-item>
                            <sidebar-submenu-item 
                                title="Button Group" 
                                label="Button Group" 
                                target="/component/buttons-group" 
                                index="4"
                                view="buttons-group">
                            </sidebar-submenu-item>
                            <sidebar-submenu-item 
                                title="Card" 
                                label="Card" 
                                target="/component/cards" 
                                index="5"
                                view="cards">
                            </sidebar-submenu-item>
                            <sidebar-submenu-item 
                                title="Carousel" 
                                label="Carousel" 
                                target="/component/carousel" 
                                index="6"
                                view="carousel">
                            </sidebar-submenu-item>
                            <sidebar-submenu-item 
                                title="Dropdowns" 
                                label="Dropdowns" 
                                target="/component/dropdowns" 
                                index="7"
                                view="dropdowns">
                            </sidebar-submenu-item>
                            <sidebar-submenu-item 
                                title="Forms" 
                                label="Forms" 
                                target="/component/forms"
                                index="8"
                                view="forms">
                            </sidebar-submenu-item>
                            <sidebar-submenu-item 
                                title="Input Group" 
                                label="Input Group" 
                                target="/component/input-groups"
                                index="9"
                                view="input-groups">
                            </sidebar-submenu-item>
                            <sidebar-submenu-item 
                                title="Jumbotron" 
                                label="Jumbotron"
                                target="/component/jumbotron""
                                index="10"
                                view="jumbotron">
                            </sidebar-submenu-item>
                            <sidebar-submenu-item 
                                title="List Group" 
                                label="List Group" 
                                target="/component/list-groups" 
                                index="11"
                                view="list-groups">
                            </sidebar-submenu-item>
                            <sidebar-submenu-item 
                                title="Media object" 
                                label="Media object" 
                                target="/component/media-object" 
                                index="12"
                                view="media-object">
                            </sidebar-submenu-item>
                            <sidebar-submenu-item 
                                title="Modal" 
                                label="Modal" 
                                target="/component/modal" 
                                index="13"
                                view="modal">
                            </sidebar-submenu-item>
                            <sidebar-submenu-item 
                                title="Navs" 
                                label="Navs"
                                target="/component/navs"
                                index="14"
                                view="navs">
                            </sidebar-submenu-item>
                            <sidebar-submenu-item 
                                title="Navbar" 
                                label="Navbar" 
                                target="/component/navbar"
                                index="15"
                                view="navbar">
                            </sidebar-submenu-item>
                            <sidebar-submenu-item 
                                title="Pagination" 
                                label="Pagination" 
                                target="/component/pagination"
                                index="16"
                                view="pagination">
                            </sidebar-submenu-item>
                            <sidebar-submenu-item 
                                title="Progress" 
                                label="Progress"
                                target="/component/progress"
                                index="17"
                                view="progress">
                            </sidebar-submenu-item>
                        </sidebar-submenu>
                </sidebar-menu-item-expandable>
                <sidebar-menu-item-expandable 
                    title="Behaviours" 
                    label="Behaviours" 
                    index="3" 
                    view="behaviour">
                        <angle-down-arrow slot="expandIcon"></angle-down-arrow>
                        <angle-up-arrow slot="minimizeIcon"></angle-up-arrow>
                        <sidebar-submenu slot="submenu">
                            <sidebar-submenu-item 
                                title="Collapse" 
                                label="Collapse"
                                target="/behaviour/collapse" 
                                index="0"
                                view="collapse">
                            </sidebar-submenu-item>
                        </sidebar-submenu>
                </sidebar-menu-item-expandable>
            </sidebar-menu>
        `;
    }
    
    async updateView(view) {
        
        if(!view) {
            return;
        }
        
        super.performUpdate();
        
        this._deactivateAllActiveItems();
        this._activateMatchingViewElement(view);
    }
    
    async _deactivateAllActiveItems() {
        
        const activeElements = this.shadowRoot.querySelectorAll('sidebar-menu-item[active]');
        const activesSubMenuElements = this.shadowRoot.querySelectorAll('sidebar-submenu-item[active]');
        
        if(activeElements) {
            
            for(let index = 0; index < activeElements.length; index++) {
                const activeElement = activeElements[index];
                activeElement.deactivate();
            }
        }
        
        if(activesSubMenuElements) {
            
            for(let index = 0; index < activesSubMenuElements.length; index++) {
                const activeElement = activesSubMenuElements[index];
                activeElement.deactivate();
            }
        }
    }
    
    _activateMatchingViewElement(newView) {
        
        const pathParams = newView.split('/');
        
        for(let index=0; index < pathParams.length; index++) {
            
            const pathParam = pathParams[index];
            
            const sidebarMenuItem = this.shadowRoot.querySelector(`sidebar-menu-item[view='${pathParam}']`);
            
            if(sidebarMenuItem) {
                sidebarMenuItem.activate();
                return;
            }
            
            const sidebarMenuItemExpandable = this.shadowRoot.querySelector(`sidebar-menu-item-expandable[view='${pathParam}']`);
            
            if(sidebarMenuItemExpandable) {
                sidebarMenuItemExpandable.expand();
                sidebarMenuItemExpandable.scrollIntoView({behavior: "auto", block: "center", inline: "nearest"});
            }
            
            const sidebarSubmenuItem = this.shadowRoot.querySelector(`sidebar-submenu-item[view='${pathParam}']`);
            
            if(sidebarSubmenuItem) {
                sidebarSubmenuItem.activate();
                sidebarSubmenuItem.scrollIntoView({behavior: "auto", block: "center", inline: "nearest"});
            }
        }
    }
    
    _isInViewport(element) {
        
        const bounding = element.getBoundingClientRect();
        
        const topBounding = bounding.top >= 0;
        const leftBounding = bounding.left >= 0;
        const bottomBounding = bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight);
        const rightBounding = bounding.right <= (window.innerWidth || document.documentElement.clientWidth);
        
        const inViewport = topBounding && leftBounding && bottomBounding && rightBounding;
        
        return inViewport;
    }
};

window.customElements.define('drawer-sidebar', DrawerSidebar);