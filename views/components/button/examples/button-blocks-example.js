
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';

import 'lit-element-bootstrap/components/button';

class ButtonBlocksExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <bs-button primary large block>Block level button</bs-button>
            <bs-button secondary large block>Block level button</bs-button>

            <bs-input-button label="Input Block level button" primary large block></bs-input-button>
            <bs-input-button label="Input Block level button" secondary large block></bs-input-button>
        `;
    }
};

window.customElements.define('button-blocks-example', ButtonBlocksExample);