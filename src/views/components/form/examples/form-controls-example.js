
import { LitElement, html, css } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import '@lit-element-bootstrap/form';

class FormControlsExample extends BsExampleMixin(LitElement) {
    
    static get properties() {
        return {
            _exampleData: Array,
            _jsonExampleData: JSON
        };
    }
    
    static get styles() {
        return [
            super.styles,
            css`
                bs-form-group ~ bs-form-check-group {
                    margin-bottom: 1rem;
                }
            `
        ];
    }
    
    constructor() {
        super();
        this._isExampleTemplate = true;
        this._exampleData = [1,2,3,4,5];
        this._jsonExampleData = [
            { "id": 1, "value": 1 }, 
            { "id": 2, "value": 2 },
            { "id": 3, "value": 3 },
            { "id": 4, "value": 4 },
            { "id": 5, "value": 5 }
        ];
    }
    
    _getExample() {
        return html`
            <bs-form>
                <bs-form-group>
                    <bs-form-label slot="label">Email address</bs-form-label>
                    <bs-form-input slot="control" type="email" placeholder="name@example.com"></bs-form-input>
                </bs-form-group>

                <bs-form-group>
                    <bs-form-label slot="label">Example select</bs-form-label>
                    <bs-form-select 
                        slot="control" 
                        .arrayData=${this._exampleData}>
                    </bs-form-select>
                </bs-form-group>

                <bs-form-group>
                    <bs-form-label slot="label">Example multiple select</bs-form-label>
                    <bs-form-select 
                        slot="control" 
                        multiple 
                        .jsonData=${this._jsonExampleData} 
                        json-id="id"
                        json-text="value">
                    </bs-form-select>
                </bs-form-group>

                <bs-form-group>
                    <bs-form-label slot="label">Example textarea</bs-form-label>
                    <bs-form-textarea rows="3" slot="control"></bs-form-textarea>
                </bs-form-group>
            </bs-form>
        `;
    }
    
    _getHighlightedExample() {
        return `
            <bs-form>
                <bs-form-group>
                    <bs-form-label slot="label">Email address</bs-form-label>
                    <bs-form-input slot="control" type="email" placeholder="name@example.com"></bs-form-input>
                </bs-form-group>

                <bs-form-group>
                    <bs-form-label slot="label">Example select</bs-form-label>
                    <bs-form-select slot="control" .arrayData="array data"></bs-form-select>
                </bs-form-group>

                <bs-form-group>
                    <bs-form-label slot="label">Example multiple select</bs-form-label>
                    <bs-form-select slot="control" multiple .jsonData="json data" json-id="id" json-text="value"></bs-form-select>
                </bs-form-group>

                <bs-form-group>
                    <bs-form-label slot="label">Example textarea</bs-form-label>
                    <bs-form-textarea rows="3" slot="control"></bs-form-textarea>
                </bs-form-group>
            </bs-form>
        `;
    }
};

window.customElements.define('form-controls-example', FormControlsExample);