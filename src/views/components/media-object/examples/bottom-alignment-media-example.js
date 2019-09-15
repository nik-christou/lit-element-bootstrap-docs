
import { LitElement } from 'lit-element';
import { BsSpacingCss } from 'lit-element-bootstrap/utilities';
import { BsFlexAlignSelfCss } from 'lit-element-bootstrap/utilities';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import 'lit-element-bootstrap/components/media-object';

class BottomAlignmentMediaExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsSpacingCss,
            BsFlexAlignSelfCss
        ];
    }
    
    _getExample() {
        return `
            <bs-media>
                <img class="mr-3 align-self-end" src="/src/img/img-placeholder.svg" alt="Generic placeholder image" />
                <bs-media-body>
                    <h5 class="mt-0">Bottom-aligned media</h5>
                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                    <p class="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                </bs-media-body>
            </bs-media> 
        `;
    }
};

window.customElements.define('bottom-alignment-media-example', BottomAlignmentMediaExample);