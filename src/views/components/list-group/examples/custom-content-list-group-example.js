
import { LitElement } from 'lit-element';
import { BsSizingCss, BsSpacingCss } from 'lit-element-bootstrap/utilities';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';
import { BsFlexDisplayCss, BsFlexJustifyCss, BsFlexAlignItemsCss, BsFlexDirectionCss } from 'lit-element-bootstrap/utilities'; 

import 'lit-element-bootstrap/components/list-group';

class CustomContentListGroupExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsFlexDisplayCss,
            BsFlexDirectionCss,
            BsFlexAlignItemsCss,
            BsFlexJustifyCss,
            BsSizingCss,
            BsSpacingCss
        ];
    }
    
    _getExample() {
        return `
            <bs-list-group-action>
                <bs-list-group-item-action-link class="flex-column align-items-start">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">List group item heading</h5>
                        <small>3 days ago</small>
                    </div>
                    <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                    <small>Donec id elit non mi porta.</small>
                </bs-list-group-item-action-link>
                <bs-list-group-item-action-link class="flex-column align-items-start">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">List group item heading</h5>
                        <small>3 days ago</small>
                    </div>
                    <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                    <small>Donec id elit non mi porta.</small>
                </bs-list-group-item-action-link>
                <bs-list-group-item-action-link class="flex-column align-items-start">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">List group item heading</h5>
                        <small>3 days ago</small>
                    </div>
                    <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                    <small>Donec id elit non mi porta.</small>
                </bs-list-group-item-action-link>
            </bs-list-group-action>
        `;
    }
};

window.customElements.define('custom-content-list-group-example', CustomContentListGroupExample);