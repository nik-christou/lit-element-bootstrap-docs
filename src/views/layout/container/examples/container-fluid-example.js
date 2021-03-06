
import { LitElement, css } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

class ContainerFluidExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            css`
                .header {
                    height: 3rem;
                    margin-bottom: 0.5rem;
                    background-color: #eee;
                    border-radius: 0.25rem;
                }
                
                .sidebar {
                    float: right;
                    width: 4rem;
                    height: 8rem;
                    background-color: #80bdff;
                    border-radius: 0.25rem;
                }
        
                .body {
                    height: 8rem;
                    margin-right: 4.5rem;
                    background-color: #957bbe;
                    border-radius: 0.25rem;
                }
            `
        ];
    }

    _getExample() {
        return `
            <bs-container fluid>
                <div class="header"></div>
                <div class="sidebar"></div>
                <div class="body"></div>
            </bs-container>
        `;
    }
};

window.customElements.define('container-fluid-example', ContainerFluidExample);