
import { LitElement } from 'lit-element';
import { BsSpacingCss } from 'lit-element-bootstrap//utilities';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';

import 'lit-element-bootstrap/components/media-object';

class OrderPlacementMediaExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsSpacingCss
        ];
    }
    
    _getExample() {
        return `
            <bs-media>
                <bs-media-body>
                    <h5 class="mt-0 mb-1">Media heading</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </bs-media-body>
                <img class="ml-3" src="/src/img/img-placeholder.svg" alt="Generic placeholder image" />
            </bs-media>
        `;
    }
};

window.customElements.define('order-placement-media-example', OrderPlacementMediaExample);