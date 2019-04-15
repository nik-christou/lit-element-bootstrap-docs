
import { LitElement } from 'lit-element';
import { BsSpacingCss } from 'lit-element-bootstrap//utilities';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';

import 'lit-element-bootstrap/components/media-object';

class NestedMediaExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsSpacingCss
        ];
    }
    
    _getExample() {
        return `
            <bs-media>
                <img class="mr-3" src="views/components/media-object/examples/img-placeholder.svg" alt="Generic placeholder image" />
                <bs-media-body>
                    <h5 class="mt-0">Media heading</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    <bs-media class="mt-3">
                        <a class="pr-3" href="#"><img src="views/components/media-object/examples/img-placeholder.svg" alt="Generic placeholder image"/></a>
                        <bs-media-body>
                            <h5 class="mt-0">Media heading</h5>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </bs-media-body>
                    </bs-media>
                </bs-media-body>
            </bs-media> 
        `;
    }
};

window.customElements.define('nested-media-example', NestedMediaExample);