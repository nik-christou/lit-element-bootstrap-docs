
import { LitElement, html } from 'lit-element';
import { BsColumn } from 'lit-element-bootstrap/layout/grid';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsForm, BsFormRow, BsFormInput } from 'lit-element-bootstrap/components/form';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class ColumnSizingExample extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsContentCodeCss,
            BsCodeSyntaxCss
        ];
    }
    
    render() {
        return html`
            
            <bs-example>
                
                <bs-form>
                    <bs-form-row>
                        <bs-column xs-7>
                            <bs-form-input placeholder="City"></bs-form-input>
                        </bs-column>
                        <bs-column xs>
                            <bs-form-input placeholder="State"></bs-form-input>
                        </bs-column>
                        <bs-column xs>
                            <bs-form-input placeholder="Zip"></bs-form-input>
                        </bs-column>
                    </bs-form-row>
                </bs-form>
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html"><span class="nt">&lt;bs-form&gt;</span>
    <span class="nt">&lt;bs-form-row&gt;</span>
        <span class="nt">&lt;bs-col</span> <span class="na">xs-7</span><span class="nt">&gt;</span>
            <span class="nt">&lt;bs-form-input</span> <span class="na">placeholder=</span><span class="s">"City"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-input&gt;</span>
        <span class="nt">&lt;/bs-column&gt;</span>
        <span class="nt">&lt;bs-col</span> <span class="na">xs</span><span class="nt">&gt;</span>
            <span class="nt">&lt;bs-form-input</span> <span class="na">placeholder=</span><span class="s">"State"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-input&gt;</span>
        <span class="nt">&lt;/bs-column&gt;</span>
        <span class="nt">&lt;bs-col</span> <span class="na">xs</span><span class="nt">&gt;</span>
            <span class="nt">&lt;bs-form-input</span> <span class="na">placeholder=</span><span class="s">"Zip"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-input&gt;</span>
        <span class="nt">&lt;/bs-column&gt;</span>
    <span class="nt">&lt;/bs-form-row&gt;</span>
<span class="nt">&lt;/bs-form&gt;</span></code></pre>
</bs-highlight>
        `;
    }
};

window.customElements.define('column-sizing-example', ColumnSizingExample);