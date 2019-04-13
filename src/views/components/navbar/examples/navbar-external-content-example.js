
import { LitElement, css } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';
import { BsTextColorCss, BsSpacingCss, BsBackgroundColorsCss } from 'lit-element-bootstrap/utilities';

import 'lit-element-bootstrap/components/navbar';

class NavbarExternalContentExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsBackgroundColorsCss,
            BsSpacingCss,
            BsTextColorCss,
            css`
                .pos-f-t {
                    position: relative;
                    margin: -1rem;
                }
        
                @media (min-width: 576px) {
                    
                    .pos-f-t {
                        margin: -1.5rem;
                    }
                }
        
                div#navbarToggleExternalContent {
                    display: block;
                    height: auto;
                    transition: height 0.35s ease;
                }
        
                @media screen and (prefers-reduced-motion: reduce) {
                    
                    div#navbarToggleExternalContent {
                        transition: none;
                    }
                }
            `
        ];
    }
    
    _getExample() {
        return `
            <div class="pos-f-t">
                <div id="navbarToggleExternalContent">
                    <div class="bg-dark p-4">
                        <h5 class="text-white h4">Collapsed content</h5>
                        <span class="text-muted">Toggleable via the navbar brand.</span>
                    </div>
                </div>

                <bs-navbar navbar-dark class="bg-dark">
                    <bs-navbar-toggler>
                        <bs-navbar-toggler-icon></bs-navbar-toggler-icon>
                    </bs-navbar-toggler>
                </bs-navbar>
            </div> 
        `;
    }
    
    static get properties() {
        return {
            expanded: {type: Boolean, reflect: true},
            collapsed: {type: Boolean, reflect: true},
            transitioning: {type: Boolean, reflect: true}
        };
    }
    
    constructor() {
        super();
        this.expanded = true;
        this.collapsed = false;
        this.transitioning = false;
    }
    
    firstUpdated() {
        const navbarToggler = this.shadowRoot.querySelector('bs-navbar-toggler');
        const externalContent = this.shadowRoot.querySelector('div#navbarToggleExternalContent');
        
        navbarToggler.addEventListener('bs-navbar-toggler-click', () => this._handleTogglerClick());
        externalContent.addEventListener('transitionend', () => this._afterCollapsingTransition());
    }
    
    _afterCollapsingTransition() {
        
        if(this.expanded) {
            
            const externalContent = this.shadowRoot.querySelector('div#navbarToggleExternalContent');
            
            externalContent.style.overflow = 'inherit';
            externalContent.style.height = 'auto';
        }

        this.transitioning = false;
    }
    
    _handleTogglerClick() {
        this._toggle();
    }
    
    _toggle() {
        
        const externalContent = this.shadowRoot.querySelector('div#navbarToggleExternalContent');
        
        externalContent.style.transitioning = true;

        if(this.expanded) {
            this._collapse(externalContent);
        } else {
            this._expand(externalContent);
        }
    }
    
    _expand(externalContent) {
        this.expanded = true;
        this.collapsed = false;
        externalContent.style.height = this._getSlottedElementsHeight(externalContent)+'px';
    }
    
    _collapse(externalContent) {
        this.collapsed = true;
        this.expanded = false;
        
        this._updateHeightBeforeCollapse(externalContent);
        
        externalContent.style.overflow = 'hidden';
        externalContent.style.height = '0';
    }
    
    _updateHeightBeforeCollapse(externalContent) {

        const existingHeight = externalContent.style.height;
        
        if(!existingHeight || existingHeight === 'auto') {
            
            externalContent.style.transition = 'none';
            externalContent.style.height = window.getComputedStyle(externalContent).height;
            
            //force browser to repaint after we change the height
            window.getComputedStyle(externalContent).height;
            
            externalContent.style.transition = 'height 0.35s ease';
        }
    }
    
    _getSlottedElementsHeight(externalContent) {
        
        const childElements = externalContent.childNodes;

        let totalHeight = 0;

        for(let index = 0; index <childElements.length; index++) {

            const childElement = childElements[index];
            
            if(childElement.nodeType === Node.ELEMENT_NODE) {
                
                const slotElementHeight = childElement.offsetHeight;
                
                const marginTopValue = window.getComputedStyle(childElement).marginTop;
                const marginBottomValue = window.getComputedStyle(childElement).marginBottom;
                
                const marginTop = new Number(marginTopValue.slice(0, marginTopValue.length-2));
                const marginBottom = new Number(marginBottomValue.slice(0, marginBottomValue.length-2));
                
                totalHeight += (slotElementHeight+marginTop+marginBottom);
            }
        }

        return totalHeight;
    }
};

window.customElements.define('navbar-external-content-example', NavbarExternalContentExample);