
import { LitElement, html, css } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import 'lit-element-bootstrap/components/form';

class SizingSelectControlExample extends BsExampleMixin(LitElement) {
    
    static get properties() {
        return {
            _largeExampleData: Array,
            _defaultExampleData: Array,
            _smallExampleData: Array
        };
    }
    
    static get styles() {
        return [
            super.styles,
            css`
                bs-form-select + bs-form-select {
                    margin-top: 0.5rem;
                }
            `
        ];
    }
    
    constructor() {
        super();
        this._isExampleTemplate = true;
        this._largeExampleData = ['Large select'];
        this._defaultExampleData = ['Default select'];
        this._smallExampleData = ['Small select'];
    }
    
    _getExample() {
        return html`
            <bs-form-select lg .arrayData=${this._largeExampleData}></bs-form-select>
            <bs-form-select .arrayData=${this._defaultExampleData}></bs-form-select>
            <bs-form-select sm .arrayData=${this._smallExampleData}></bs-form-select>
        `;
    }
    
    _getHighlightedExample() {
        return `
            <bs-form-select lg .arrayData="array data"></bs-form-select>
            <bs-form-select .arrayData="array data"></bs-form-select>
            <bs-form-select sm .arrayData="array data"></bs-form-select>
        `;
    }
};

window.customElements.define('sizing-select-control-example', SizingSelectControlExample);