
import { LitElement, html, css } from 'lit-element';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsForm, BsFormInput, BsFormLabel, BsFormGroup, BsFormSelect, BsFormTextarea } from 'lit-element-bootstrap/components/form';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class FormControlsExample extends LitElement {
    
    static get properties() {
        return {
            _exampleData: Array,
            _jsonExampleData: JSON
        };
    }
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsContentCodeCss,
            BsCodeSyntaxCss,
            css`
                bs-form-group ~ bs-form-check-group {
                    margin-bottom: 1rem;
                }
            `
        ];
    }
    
    constructor() {
        super();
        this._exampleData = [1,2,3,4,5];
        this._jsonExampleData = [
            { "id": 1, "value": 1 }, 
            { "id": 2, "value": 2 },
            { "id": 3, "value": 3 },
            { "id": 4, "value": 4 },
            { "id": 5, "value": 5 }
        ];
    }
    
    render() {
        return html`
            
            <bs-example>
                
                <bs-form>
                
                    <bs-form-group>
                        <bs-form-label slot="label">Email address</bs-form-label>
                        <bs-form-input slot="control" type="email" placeholder="name@example.com"></bs-form-input>
                    </bs-form-group>
                    
                    <bs-form-group>
                        <bs-form-label slot="label">Example select</bs-form-label>
                        <bs-form-select slot="control" .arrayData=${this._exampleData}></bs-form-select>
                    </bs-form-group>
                    
                    <bs-form-group>
                        <bs-form-label slot="label">Example multiple select</bs-form-label>
                        <bs-form-select slot="control" multiple .jsonData=${this._jsonExampleData} json-id="id" json-text="value"></bs-form-select>
                    </bs-form-group>
                    
                    <bs-form-group>
                        <bs-form-label slot="label">Example textarea</bs-form-label>
                        <bs-form-textarea rows="3" slot="control"></bs-form-textarea>
                    </bs-form-group>
                
                </bs-form>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-form&gt;</span>
    <span class="nt">&lt;bs-form-group</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-form-label</span> <span class="na">slot=</span><span class="s">"label"</span><span class="nt">&gt;</span>Email address<span class="nt">&lt;/bs-form-label&gt;</span>
        <span class="nt">&lt;bs-form-input</span> <span class="na">slot=</span><span class="s">"control"</span> <span class="na">type=</span><span class="s">"email"</span> <span class="na">placeholder=</span><span class="s">"name@example.com"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-input&gt;</span>
        <span class="nt">&lt;bs-form-help-text </span><span class="na">slot=</span><span class="s">"helptext"</span><span class="nt">&gt;</span>We'll never share your email with anyone else.<span class="nt">&lt;/bs-form-help-text&gt;</span>
    <span class="nt">&lt;/bs-form-group&gt;</span>
    <span class="nt">&lt;bs-form-group</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-form-label</span> <span class="na">slot=</span><span class="s">"label"</span><span class="nt">&gt;</span>Example select<span class="nt">&lt;/bs-form-label&gt;</span>
        <span class="nt">&lt;bs-form-select</span> <span class="na">slot=</span><span class="s">"control"</span> <span class="na">value-property=</span><span class="s">"id"</span> <span class="na">text-property=</span><span class="s">"value"</span> <span class="na">options=</span><span class="s">"_selectExample1"</span> <span class="na">placeholder=</span><span class="s">"Password"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-select&gt;</span>
    <span class="nt">&lt;/bs-form-group&gt;</span>
    <span class="nt">&lt;bs-form-group</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-form-label</span> <span class="na">slot=</span><span class="s">"label"</span><span class="nt">&gt;</span>Example multiple select<span class="nt">&lt;/bs-form-label&gt;</span>
        <span class="nt">&lt;bs-form-select</span> <span class="na">slot=</span><span class="s">"control"</span> <span class="na">multiple</span> <span class="na">value-property=</span><span class="s">"id"</span> <span class="na">text-property=</span><span class="s">"value"</span> <span class="na">options=</span><span class="s">"_selectExample1"</span> <span class="na">placeholder=</span><span class="s">"Password"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-select&gt;</span>
    <span class="nt">&lt;/bs-form-group&gt;</span>
    <span class="nt">&lt;bs-form-group</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-form-label</span> <span class="na">slot=</span><span class="s">"label"</span><span class="nt">&gt;</span>Example textarea<span class="nt">&lt;/bs-form-label&gt;</span>
        <span class="nt">&lt;bs-form-textarea</span> <span class="na">slot=</span><span class="s">"control"</span> <span class="na">rows=</span><span class="s">"3"</span> <span class="nt">&gt;</span><span class="nt">&lt;/bs-form-textarea&gt;</span>
    <span class="nt">&lt;/bs-form-group&gt;</span>
<span class="nt">&lt;/bs-form&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('form-controls-example', FormControlsExample);