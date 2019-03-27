
import { LitElement, html } from 'lit-element';
import { BsRow, BsColumn } from 'lit-element-bootstrap/layout/grid';
import { BsForm, BsFormInput } from 'lit-element-bootstrap/components/form';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class FormGridExample extends LitElement {
    
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
                    <bs-row>
                        <bs-column xs>
                            <bs-form-input placeholder="First name"></bs-form-input>
                        </bs-column>
                        <bs-column xs>
                            <bs-form-input placeholder="Last name"></bs-form-input>
                        </bs-column>
                    </bs-row>
                </bs-form>

            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-form&gt;</span>
    <span class="nt">&lt;bs-row&gt;</span>
        <span class="nt">&lt;bs-column</span> <span class="na">xs</span><span class="nt">&gt;</span>
            <span class="nt">&lt;bs-form-input</span> <span class="na">placeholder=</span><span class="s">"First name"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-input&gt;</span>
        <span class="nt">&lt;/bs-column&gt;</span>
        <span class="nt">&lt;bs-column</span> <span class="na">xs</span><span class="nt">&gt;</span>
            <span class="nt">&lt;bs-form-input</span> <span class="na">placeholder=</span><span class="s">"Last name"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-input&gt;</span>
        <span class="nt">&lt;/bs-column&gt;</span>
    <span class="nt">&lt;/bs-row&gt;</span>
<span class="nt">&lt;/bs-form&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('form-grid-example', FormGridExample);