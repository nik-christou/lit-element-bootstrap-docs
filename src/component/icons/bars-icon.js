
import { LitElement, html, css } from 'lit-element';

class BarsIcon extends LitElement {

    static get properties() {
        return {
            width: Number,
            height: Number
        };
    }

    static get styles() {
        return [
            css`

                :host {
                    display: inline-block;
                    padding-left: 12px;
                    padding-right: 12px;
                    padding-top: 12px;
                    padding-bottom: 10px;
                    border-radius: 50%;
                }

                :host(:hover) {
                    background-color: #eeeeee;
                    outline: none;
                }
            `
        ];
    }

    render() {
        return html`
            <svg focusable="false" width="${this.width}" height="${this.height}" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
        `;
    }
    
    constructor() {
        super();
        this.width = 24;
        this.height = 24;
    }
}

window.customElements.define('bars-icon', BarsIcon);