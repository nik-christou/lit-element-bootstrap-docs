
import { LitElement, html, css } from 'lit-element';
import { BsFormInput, BsFormSelect } from 'lit-element-bootstrap/components/form';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class SizingSelectControlExample extends LitElement {
    
    static get properties() {
        return {
            _largeExampleData: Array,
            _defaultExampleData: Array,
            _smallExampleData: Array
        };
    }
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsContentCodeCss,
            BsCodeSyntaxCss,
            css`
                bs-form-select + bs-form-select {
                    margin-top: 0.5rem;
                }
            `
        ];
    }
    
    constructor() {
        super();
        this._largeExampleData = ['Large select'];
        this._defaultExampleData = ['Default select'];
        this._smallExampleData = ['Small select'];
    }
    
    render() {
        return html`
            
            <bs-example>
                
                <bs-form-select lg .arrayData=${this._largeExampleData}></bs-form-select>
                <bs-form-select .arrayData=${this._defaultExampleData}></bs-form-select>
                <bs-form-select sm .arrayData=${this._smallExampleData}></bs-form-select>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-form-select</span> <span class="na">lg</span> <span class="na">value-property=</span><span class="s">"id"</span> <span class="na">text-property=</span><span class="s">"value"</span> <span class="na">options=</span><span class="s">"array of objects"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-select&gt;</span>
<span class="nt">&lt;bs-form-select</span> <span class="na">value-property=</span><span class="s">"id"</span> <span class="na">text-property=</span><span class="s">"value"</span> <span class="na">options=</span><span class="s">"array of objects"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-select&gt;</span>
<span class="nt">&lt;bs-form-select</span> <span class="na">sm</span> <span class="na">value-property=</span><span class="s">"id"</span> <span class="na">text-property=</span><span class="s">"value"</span> <span class="na">options=</span><span class="s">"array of objects"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-select&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('sizing-select-control-example', SizingSelectControlExample);