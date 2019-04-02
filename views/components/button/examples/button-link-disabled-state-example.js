
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';

import 'lit-element-bootstrap/components/button';

class ButtonLinkDisabledStateExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <bs-link-button disabled>Basic</bs-link-button>
            <bs-link-button primary disabled>Primary</bs-link-button>
            <bs-link-button secondary disabled>Secondary</bs-link-button>
            <bs-link-button success disabled>Success</bs-link-button>
            <bs-link-button danger disabled>Danger</bs-link-button>    
            <bs-link-button warning disabled>Warning</bs-link-button>
            <bs-link-button info disabled>Info</bs-link-button>
            <bs-link-button light disabled>Light</bs-link-button>
            <bs-link-button dark disabled>Dark</bs-link-button>
        `;
    }
};

window.customElements.define('button-link-disabled-state-example', ButtonLinkDisabledStateExample);