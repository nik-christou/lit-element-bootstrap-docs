
import { LitElement } from 'lit-element';
import { BsSpacingCss } from 'lit-element-bootstrap/utilities';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';

import 'lit-element-bootstrap/components/alert';

class AdditionalContentExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsSpacingCss
        ];
    }

    _getExample() {
        return `
            <bs-alert success>
                <h4 slot="heading">Well done!</h4>
                <div slot="message">
                    Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
                    <bs-alert-hr success></bs-alert-hr>
                    <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                </div>
            </bs-alert>
        `;
    }
};

window.customElements.define('additional-content-example', AdditionalContentExample);