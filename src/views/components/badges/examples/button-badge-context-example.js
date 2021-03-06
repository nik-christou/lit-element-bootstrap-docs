
import { LitElement } from 'lit-element';
import { BsScreenreaderCss } from '@lit-element-bootstrap/utilities';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import '@lit-element-bootstrap/badge';
import '@lit-element-bootstrap/button';

class ButtonBadgeContextExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsScreenreaderCss
        ];
    }

    _getExample() {
        return `
            <bs-button primary> 
                Profile <bs-badge light>9</bs-badge>
                <span class="sr-only">unread messages</span>
            </bs-button>
        `;
    }
};

window.customElements.define('button-badge-context-example', ButtonBadgeContextExample);