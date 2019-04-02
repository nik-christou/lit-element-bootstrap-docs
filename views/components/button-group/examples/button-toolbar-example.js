
import { LitElement } from 'lit-element';
import { BsSpacingCss } from 'lit-element-bootstrap/utilities/';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';

import 'lit-element-bootstrap/components/button';
import 'lit-element-bootstrap/components/button-group';

class ButtonToolbarExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsSpacingCss
        ];
    }

    _getExample() {
        return `
            <bs-button-toolbar>
                <bs-button-group horizontal class="mr-2">
                    <bs-button secondary>1</bs-button>
                    <bs-button secondary>2</bs-button>
                    <bs-button secondary>3</bs-button>
                    <bs-button secondary>4</bs-button>
                </bs-button-group>
                <bs-button-group horizontal class="mr-2">
                    <bs-button secondary>5</bs-button>
                    <bs-button secondary>6</bs-button>
                    <bs-button secondary>7</bs-button>
                </bs-button-group>
                <bs-button-group horizontal class="mr-2">
                    <bs-button secondary>8</bs-button>
                </bs-button-group>
            </bs-button-toolbar>
        `;
    }
};

window.customElements.define('button-toolbar-example', ButtonToolbarExample);