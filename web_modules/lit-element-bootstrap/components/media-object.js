import { h as html } from '../../common/lit-html-9b6153da.js';
import { LitElement, css } from '../../lit-element.js';
import { B as BsContentRebootCss } from '../../common/bs-content-reboot-css-ebf48278.js';

class BsMedia extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                :host {
                    display: flex;
                    align-items: flex-start;
                }
            `
        ];
    }
    
    render() {
        return html`
            <slot></slot>
        `;
    }
}
if(!window.customElements.get('bs-media')) 
    window.customElements.define('bs-media', BsMedia);

class BsMediaBody extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                :host {
                    flex: 1;
                }
            `
        ];
    }
    
    render() {
        return html`
            <slot></slot>
        `;
    }
}
if(!window.customElements.get('bs-media-body')) 
    window.customElements.define('bs-media-body', BsMediaBody);

class BsMediaGroup extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                :host {
                    margin-top: 0;
                    margin-bottom: 1rem;
                }
            `
        ];
    }
    
    render() {
        return html`
            <slot></slot>
        `;
    }
}
if(!window.customElements.get('bs-media-group')) 
    window.customElements.define('bs-media-group', BsMediaGroup);

export { BsMedia, BsMediaBody, BsMediaGroup };
