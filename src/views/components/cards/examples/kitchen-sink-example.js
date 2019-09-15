
import { LitElement, css } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import 'lit-element-bootstrap/components/list-group';
import 'lit-element-bootstrap/components/card';

class KitchenSinkExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            css`
                bs-card {
                    width: 18rem;
                }
                
                bs-card-img {
                    height: 180px; 
                }
                
                .bd-placeholder-img {
                    font-size: 1.125rem;
                    text-anchor: middle;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                }
            `
        ];
    }

    _getExample() {
        return `
            <bs-card>
                <bs-card-img position="top" slot="top-image">
                    <svg class="bd-placeholder-img" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Image cap"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
                </bs-card-img>
                <bs-card-body>
                    <bs-card-title slot="card-title">
                        <h5>Card title</h5>
                    </bs-card-title>
                    <bs-card-text slot="card-text">
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </bs-card-text>
                </bs-card-body>
                <bs-list-group-flush>
                    <bs-list-group-item>Cras justo odio</bs-list-group-item>
                    <bs-list-group-item>Dapibus ac facilisis in</bs-list-group-item>
                    <bs-list-group-item>Morbi leo risus</bs-list-group-item>
                    <bs-list-group-item>Porta ac consectetur ac</bs-list-group-item>
                    <bs-list-group-item disabled>Vestibulum at eros</bs-list-group-item>
                </bs-list-group-flush>
                <bs-card-body>
                    <bs-card-links slot="card-links">
                        <bs-card-link label="Action1"></bs-card-link>
                        <bs-card-link label="Action2"></bs-card-link>
                        <bs-card-link label="Action3"></bs-card-link>
                    </bs-card-links>
                </bs-card-body>
            </bs-card>
        `;
    }
};

window.customElements.define('kitchen-sink-example', KitchenSinkExample);