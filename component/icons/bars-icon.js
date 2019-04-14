
import { LitElement, html } from 'lit-element';

class BarsIcon extends LitElement {

    static get properties() {
        return {
            width: Number,
            height: Number
        };
    }

    render() {
        return html`
            <svg xmlns="http://www.w3.org/2000/svg" width="${this.width}" height="${this.height}" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
            </svg>
        `;
    }
    
    constructor() {
        super();
        this.width = 24;
        this.height = 24;
    }
}

window.customElements.define('bars-icon', BarsIcon);