
import { LitElement } from 'lit-element';
import { BsFlexAlignItemsCss } from 'lit-element-bootstrap/utilities';
import { BsSpacingCss, BsScreenreaderCss } from 'lit-element-bootstrap/utilities';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import 'lit-element-bootstrap/components/form';
import 'lit-element-bootstrap/components/input-group';

class InlineFormExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsSpacingCss,
            BsFlexAlignItemsCss,
            BsScreenreaderCss
        ];
    }
    
    _getExample() {
        return `
            <bs-form inline>
                <bs-form-row class="align-items-center">
                    <bs-form-label class="sr-only">Name</bs-form-label>
                    <bs-form-input class="mb-2 mr-sm-2" placeholder="Jane Doe"></bs-form-input>
                    <bs-form-label class="sr-only">Username</bs-form-label>
                    <bs-input-group class="mb-2 mr-sm-2">
                        <bs-input-group-prepend>
                            <bs-input-group-text>@</bs-input-group-text>
                        </bs-input-group-prepend>
                        <bs-form-input placeholder="Username"></bs-form-input>
                    </bs-input-group>
                    <bs-form-check-group class="mb-2 mr-sm-2">
                        <bs-form-checkbox-input slot="check"></bs-form-checkbox-input>
                        <bs-form-check-label slot="label">Remember me</bs-form-check-label>
                    </bs-form-check-group>
                    <bs-button primary action="submit" class="mb-2 mr-sm-2">Submit</bs-button>
                </bs-form-row>
            </bs-form>
        `;
    }
};

window.customElements.define('inline-form-example', InlineFormExample);