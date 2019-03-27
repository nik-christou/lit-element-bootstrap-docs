
import { LitElement, html } from 'lit-element';
import { BsColumn } from 'lit-element-bootstrap/layout/grid';
import { BsForm, BsFormInput, BsFormGroup, BsFormLabel } from 'lit-element-bootstrap/components/form';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class HorizontalFormSizingExample extends LitElement {
    
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
                    <bs-form-group row>
                        <bs-form-label slot="label" sm-2 column-sm>Email</bs-form-label>
                        <bs-column slot="control" sm-10>
                            <bs-form-input sm type="email" placeholder="col-form-label-sm"></bs-form-input>
                        </bs-column>
                    </bs-form-group>
                    <bs-form-group row>
                        <bs-form-label slot="label" sm-2>Email</bs-form-label>
                        <bs-column slot="control" sm-10>
                            <bs-form-input type="email" placeholder="col-form-label"></bs-form-input>
                        </bs-column>
                    </bs-form-group>
                    <bs-form-group row>
                        <bs-form-label slot="label" sm-2 column-lg>Email</bs-form-label>
                        <bs-column slot="control" sm-10>
                            <bs-form-input lg type="email" placeholder="col-form-label-lg"></bs-form-input>
                        </bs-column>
                    </bs-form-group>
                </bs-form>

            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-form&gt;</span>
    <span class="nt">&lt;bs-form-group</span> <span class="na">row</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-form-label</span> <span class="na">slot=</span><span class="s">"label"</span> <span class="na">sm-2</span> <span class="na">column-sm</span><span class="nt">&gt;</span>Email<span class="nt">&lt;/bs-form-label&gt;</span>
        <span class="nt">&lt;bs-column</span> <span class="na">slot=</span><span class="s">"control"</span> <span class="na">sm-10</span><span class="nt">&gt;</span>
            <span class="nt">&lt;bs-form-input</span> <span class="na">sm</span> <span class="na">type=</span><span class="s">"email"</span> <span class="na">placeholder=</span><span class="s">"col-form-label-sm"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-input&gt;</span>
        <span class="nt">&lt;/bs-column&gt;</span>
    <span class="nt">&lt;/bs-form-group&gt;</span>
    <span class="nt">&lt;bs-form-group</span> <span class="na">row</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-form-label</span> <span class="na">slot=</span><span class="s">"label"</span> <span class="na">sm-2</span><span class="nt">&gt;</span>Email<span class="nt">&lt;/bs-form-label&gt;</span>
        <span class="nt">&lt;bs-column</span> <span class="na">slot=</span><span class="s">"control"</span> <span class="na">sm-10</span><span class="nt">&gt;</span>
            <span class="nt">&lt;bs-form-input</span> <span class="na">sm</span> <span class="na">type=</span><span class="s">"email"</span> <span class="na">placeholder=</span><span class="s">"col-form-label"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-input&gt;</span>
        <span class="nt">&lt;/bs-column&gt;</span>
    <span class="nt">&lt;/bs-form-group&gt;</span>
    <span class="nt">&lt;bs-form-group</span> <span class="na">row</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-form-label</span> <span class="na">slot=</span><span class="s">"label"</span> <span class="na">sm-2</span> <span class="na">column-lg</span><span class="nt">&gt;</span>Email<span class="nt">&lt;/bs-form-label&gt;</span>
        <span class="nt">&lt;bs-column</span> <span class="na">slot=</span><span class="s">"control"</span> <span class="na">sm-10</span><span class="nt">&gt;</span>
            <span class="nt">&lt;bs-form-input</span> <span class="na">lg</span> <span class="na">type=</span><span class="s">"email"</span> <span class="na">placeholder=</span><span class="s">"col-form-label-lg"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-input&gt;</span>
        <span class="nt">&lt;/bs-column&gt;</span>
    <span class="nt">&lt;/bs-form-group&gt;</span>
<span class="nt">&lt;/bs-form&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('horizontal-form-sizing-example', HorizontalFormSizingExample);