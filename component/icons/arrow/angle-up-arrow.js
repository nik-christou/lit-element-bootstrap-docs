
import { LitElement, html, css } from 'lit-element';

class AngleUpArrow extends LitElement {

    static get styles() {
        return [
            css`
                svg {
                    display: inline-block;
                    font-size: inherit;
                    height: 1em;
                    overflow: visible;
                    vertical-align: -.125em;
                }
            `
        ];
    }

    render () {
        return html`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"/>
            </svg>
        `;
    }
};

window.customElements.define('angle-up-arrow', AngleUpArrow);