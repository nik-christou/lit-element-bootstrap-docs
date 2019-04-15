
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';

import 'lit-element-bootstrap/components/button';

class ButtonSizesExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <bs-button primary large>Large button</bs-button>
            <bs-button secondary large>Large button</bs-button>
        `;
    }
};

window.customElements.define('button-sizes-example', ButtonSizesExample);