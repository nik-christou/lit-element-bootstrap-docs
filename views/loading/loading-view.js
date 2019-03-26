
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

import '../../component/icons/loading-spinner.js';

class LoadingView extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            css`
                :host {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    height: 85vh;
                }
        
                h4 {
                    margin-left: 10px;
                    margin-top: 10px;
                }
            `
        ];
    }
    
    render() {
        return html`
            <loading-spinner-icon width="25px" height="25px"></loading-spinner-icon> <h4>Loading...</h4>
        `;
    }
};

window.customElements.define('loading-view', LoadingView);