
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';

import 'lit-element-bootstrap/components/button';

class ButtonTagsExample extends BsExampleMixin(LitElement) {
    
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