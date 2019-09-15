
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import 'lit-element-bootstrap/components/alert';

class ContextualAlertsExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <bs-alert primary>
                <div slot="message">A simple primary alert—check it out!</div>
            </bs-alert>

            <bs-alert secondary>
                <div slot="message">A simple primary alert—check it out!</div>
            </bs-alert>

            <bs-alert success>
                <div slot="message">A simple primary alert—check it out!</div>
            </bs-alert>

            <bs-alert danger>
                <div slot="message">A simple primary alert—check it out!</div>
            </bs-alert>

            <bs-alert warning>
                <div slot="message">A simple primary alert—check it out!</div>
            </bs-alert>

            <bs-alert info>
                <div slot="message">A simple primary alert—check it out!</div>
            </bs-alert>

            <bs-alert light>
                <div slot="message">A simple primary alert—check it out!</div>
            </bs-alert>

            <bs-alert dark>
                <div slot="message">A simple primary alert—check it out!</div>
            </bs-alert>
        `;
    }
};

window.customElements.define('contextual-alerts-example', ContextualAlertsExample);