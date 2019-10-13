
import { LitElement, css } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import '@lit-element-bootstrap/button';

class ButtonTagsExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            css`
                bs-link-button {
                    display: initial;
                }

                bs-button {
                    display: initial;
                }

                bs-input-button {
                    display: initial;
                }
            `
        ];
    }

    _getExample() {
        return `
            <bs-link-button primary>Link</bs-link-button>
            <bs-button primary button-type="submit">Button</bs-button>
            <bs-input-button primary label="Input"></bs-input-button>
            <bs-input-button primary label="Submit" button-type="submit"></bs-input-button>
            <bs-input-button primary label="Reset" button-type="reset"></bs-input-button>
        `;
    }
};

window.customElements.define('button-tags-example', ButtonTagsExample);