
import { LitElement } from 'lit-element';
import { BsSpacingCss } from '@lit-element-bootstrap/utilities';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import '@lit-element-bootstrap/jumbotron';
import '@lit-element-bootstrap/button';

class JumbotronExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsSpacingCss
        ];
    }
    
    _getExample() {
        return `
            <bs-jumbotron>
                <h1 class="display-4">Hello, world!</h1>
                <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr class="my-4">
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <bs-link-button primary>Learn more</bs-link-button>
            </bs-jumbotron>
        `;
    }
};

window.customElements.define('jumbotron-example', JumbotronExample);