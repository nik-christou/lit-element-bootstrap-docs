
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import 'lit-element-bootstrap/components/alert';

class DismissingAlertExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <bs-alert warning dismissable fade show>
                <div slot="message">
                    <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                </div>
                <bs-alert-dismiss slot="dismiss"></bs-alert-dismiss>
            </bs-alert>
        `;
    }
};

window.customElements.define('dismissing-alert-example', DismissingAlertExample);