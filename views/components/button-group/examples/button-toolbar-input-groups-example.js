
import { LitElement, css } from 'lit-element';
import { BsSpacingCss } from 'lit-element-bootstrap/utilities';
import { BsFlexJustifyCss } from 'lit-element-bootstrap/utilities/flex';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';

import 'lit-element-bootstrap/components/button';
import 'lit-element-bootstrap/components/form';
import 'lit-element-bootstrap/components/input-group';
import 'lit-element-bootstrap/components/button-group';

class ButtonToolbarInputGroupsExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsSpacingCss,
            BsFlexJustifyCss,
            css`
                bs-button-toolbar + bs-button-toolbar {
                    margin-top: 0.5rem;
                }
            `
        ];
    }
    
    _getExample() {
        return `
            <bs-button-toolbar class="mb-3">
                <bs-button-group horizontal class="mr-2">
                    <bs-button secondary>1</bs-button>
                    <bs-button secondary>2</bs-button>
                    <bs-button secondary>3</bs-button>
                    <bs-button secondary>4</bs-button>
                </bs-button-group>
                <bs-input-group>
                    <bs-input-group-prepend>
                        <bs-input-group-text>@</bs-input-group-text>
                    </bs-input-group-prepend>
                    <bs-form-input placeholder="Input group example"></bs-form-input>
                </bs-input-group>
            </bs-button-toolbar>
            
            <bs-button-toolbar class="justify-content-between">
                <bs-button-group horizontal>
                    <bs-button secondary>1</bs-button>
                    <bs-button secondary>2</bs-button>
                    <bs-button secondary>3</bs-button>
                    <bs-button secondary>4</bs-button>
                </bs-button-group>
                <bs-input-group>
                    <bs-input-group-prepend>
                        <bs-input-group-text>@</bs-input-group-text>
                    </bs-input-group-prepend>
                    <bs-form-input placeholder="Input group example"></bs-form-input>
                </bs-input-group>
            </bs-button-toolbar>
        `;
    }
};

window.customElements.define('button-toolbar-input-groups-example', ButtonToolbarInputGroupsExample);