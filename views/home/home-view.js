
import { LitElement, html } from 'lit-element';
import { BsContentRebootCss } from 'lit-element-bootstrap/content';

class HomeView extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss
        ];
    }
    
    render() {
        return html`
            <h1>lit-element-bootstrap</h1>
            <p>Implementation of Bootstrap v4.1.3 as LitElement web components.</p>
            <p>Current version: 1.0.0-alpha.1</p>
        `;
    }
};

window.customElements.define('home-view', HomeView);