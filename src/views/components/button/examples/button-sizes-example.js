
import { LitElement, css } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import '@lit-element-bootstrap/button';

class ButtonSizesExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            css`
                bs-button {
                    display: initial;
                }
            `
        ];
    }

    _getExample() {
        return `
            <bs-button primary large>Large button</bs-button>
            <bs-button secondary large>Large button</bs-button>
        `;
    }
};

window.customElements.define('button-sizes-example', ButtonSizesExample);