
import { LitElement } from 'lit-element';
import { BsSpacingCss } from 'lit-element-bootstrap/utilities';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import 'lit-element-bootstrap/components/media-object';

class MediaListExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsSpacingCss
        ];
    }
    
    _getExample() {
        return `
            <bs-media-group>
                <bs-media>
                    <img class="mr-3" src="/src/img/img-placeholder.svg" alt="Generic placeholder image" />
                    <bs-media-body>
                        <h5 class="mt-0 mb-1">List-based media object</h5>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </bs-media-body>
                </bs-media>
                <bs-media class="my-4">
                    <img class="mr-3" src="/src/img/img-placeholder.svg" alt="Generic placeholder image" />
                    <bs-media-body>
                        <h5 class="mt-0 mb-1">List-based media object</h5>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </bs-media-body>
                </bs-media>
                <bs-media>
                    <img class="mr-3" src="/src/img/img-placeholder.svg" alt="Generic placeholder image" />
                    <bs-media-body>
                        <h5 class="mt-0 mb-1">List-based media object</h5>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </bs-media-body>
                </bs-media>
            </bs-media-group>
        `;
    }
};

window.customElements.define('media-list-example', MediaListExample);