
import { LitElement, html, css } from 'lit-element';
import { BsButton } from 'lit-element-bootstrap/components/button';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsFormInput, BsFormSelect, BsFormCheckGroup, BsFormCheckboxInput, BsFormCheckLabel } from 'lit-element-bootstrap/components/form';
import { BsForm, BsFormRow, BsFormLabel, BsFormGroup } from 'lit-element-bootstrap/components/form';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class FormGridComplexExample extends LitElement {
    
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
    
    render() {
        return html`

            <bs-example>

                <bs-form>
                    <bs-form-row>
                        <bs-form-group md-6>
                            <bs-form-label slot="label">Email</bs-form-label>
                            <bs-form-input slot="control" type="email" placeholder="Email"></bs-form-input>
                        </bs-form-group>
                        
                        <bs-form-group md-6>
                            <bs-form-label slot="label">Password</bs-form-label>
                            <bs-form-input slot="control" type="password" placeholder="Password"></bs-form-input>
                        </bs-form-group>
                    </bs-form-row>
                    
                    <bs-form-group>
                        <bs-form-label slot="label">Address</bs-form-label>
                        <bs-form-input slot="control" placeholder="1234 Main St"></bs-form-input>
                    </bs-form-group>
            
                    <bs-form-group>
                        <bs-form-label slot="label">Address 2</bs-form-label>
                        <bs-form-input slot="control" placeholder="Apartment, studio, or floor"></bs-form-input>
                    </bs-form-group>
                    
                    <bs-form-row>
                        <bs-form-group md-6>
                            <bs-form-label slot="label">City</bs-form-label>
                            <bs-form-input slot="control"></bs-form-input>
                        </bs-form-group>
                        <bs-form-group md-4>
                            <bs-form-label slot="label">State</bs-form-label>
                            <bs-form-select slot="control" caption="Choose"></bs-form-select>
                        </bs-form-group>
                        <bs-form-group md-2>
                            <bs-form-label slot="label">Zip</bs-form-label>
                            <bs-form-input slot="control"></bs-form-input>
                        </bs-form-group>
                    </bs-form-row>
            
                    <bs-form-check-group>
                        <bs-form-checkbox-input slot="check"></bs-form-checkbox-input>
                        <bs-form-check-label slot="label">Check me out</bs-form-check-label>
                    </bs-form-check-group>
            
                    <bs-button primary button-type="submit">Sign in</bs-button>
                    
                </bs-form>

            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-form&gt;</span>
    <span class="nt">&lt;bs-form-row&gt;</span>
        <span class="nt">&lt;bs-form-group</span> <span class="na">md-6</span><span class="nt">&gt;</span>
            <span class="nt">&lt;bs-form-label</span> <span class="na">slot=</span><span class="s">"label"</span><span class="nt">&gt;</span>Email<span class="nt">&lt;/bs-form-label&gt;</span>
            <span class="nt">&lt;bs-form-input</span> <span class="na">slot=</span><span class="s">"control"</span><span class="na">type=</span><span class="s">"email"</span> <span class="na">placeholder=</span><span class="s">"Email"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-input&gt;</span>
        <span class="nt">&lt;/bs-form-group&gt;</span>
        <span class="nt">&lt;bs-form-group</span> <span class="na">md-6</span><span class="nt">&gt;</span>
            <span class="nt">&lt;bs-form-label</span> <span class="na">slot=</span><span class="s">"label"</span><span class="nt">&gt;</span>Password<span class="nt">&lt;/bs-form-label&gt;</span>
            <span class="nt">&lt;bs-form-input</span> <span class="na">slot=</span><span class="s">"control"</span><span class="na">type=</span><span class="s">"password"</span> <span class="na">placeholder=</span><span class="s">"Password"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-input&gt;</span>
        <span class="nt">&lt;/bs-form-group&gt;</span>
    <span class="nt">&lt;/bs-form-row&gt;</span>
    <span class="nt">&lt;bs-form-group&gt;</span>
        <span class="nt">&lt;bs-form-label</span> <span class="na">slot=</span><span class="s">"label"</span><span class="nt">&gt;</span>Address<span class="nt">&lt;/bs-form-label&gt;</span>
        <span class="nt">&lt;bs-form-input</span> <span class="na">slot=</span><span class="s">"control"</span><span class="na">placeholder=</span><span class="s">"1234 Main St"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-input&gt;</span>
    <span class="nt">&lt;/bs-form-group&gt;</span>
    <span class="nt">&lt;bs-form-group&gt;</span>
        <span class="nt">&lt;bs-form-label</span> <span class="na">slot=</span><span class="s">"label"</span><span class="nt">&gt;</span>Address 2<span class="nt">&lt;/bs-form-label&gt;</span>
        <span class="nt">&lt;bs-form-input</span> <span class="na">slot=</span><span class="s">"control"</span><span class="na">placeholder=</span><span class="s">"Apartment, studio, or floor"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-input&gt;</span>
    <span class="nt">&lt;/bs-form-group&gt;</span>

    <span class="nt">&lt;bs-form-row&gt;</span>
        <span class="nt">&lt;bs-form-group</span> <span class="na">md-6</span><span class="nt">&gt;</span>
            <span class="nt">&lt;bs-form-label</span> <span class="na">slot=</span><span class="s">"label"</span><span class="nt">&gt;</span>City<span class="nt">&lt;/bs-form-label&gt;</span>
            <span class="nt">&lt;bs-form-input</span> <span class="na">slot=</span><span class="s">"control"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-input&gt;</span>
        <span class="nt">&lt;/bs-form-group&gt;</span>
        <span class="nt">&lt;bs-form-group</span> <span class="na">md-4</span><span class="nt">&gt;</span>
            <span class="nt">&lt;bs-form-label</span> <span class="na">slot=</span><span class="s">"label"</span><span class="nt">&gt;</span>State<span class="nt">&lt;/bs-form-label&gt;</span>
            <span class="nt">&lt;bs-form-select</span> <span class="na">slot=</span><span class="s">"control"</span><span class="na">caption-text=</span><span class="s">"Choose"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-select&gt;</span>
        <span class="nt">&lt;/bs-form-group&gt;</span>
        <span class="nt">&lt;bs-form-group</span> <span class="na">md-2</span><span class="nt">&gt;</span>
            <span class="nt">&lt;bs-form-label</span> <span class="na">slot=</span><span class="s">"label"</span><span class="nt">&gt;</span>Zip<span class="nt">&lt;/bs-form-label&gt;</span>
            <span class="nt">&lt;bs-form-input</span> <span class="na">slot=</span><span class="s">"control"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-input&gt;</span>
        <span class="nt">&lt;/bs-form-group&gt;</span>
    <span class="nt">&lt;/bs-form-row&gt;</span>

     <span class="nt">&lt;bs-form-check-group&gt;</span>
        <span class="nt">&lt;bs-form-checkbox-input</span> <span class="na">slot=</span><span class="s">"check"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-checkbox-input&gt;</span>
        <span class="nt">&lt;bs-form-check-label</span> <span class="na">slot=</span><span class="s">"label"</span><span class="nt">&gt;</span>Check me out<span class="nt">&lt;/bs-form-check-label&gt;</span>
    <span class="nt">&lt;/bs-form-check-group&gt;</span>
        
    <span class="nt">&lt;bs-button</span> <span class="na">primary</span> <span class="na">button-type=</span><span class="s">"submit"</span><span class="nt">&gt;</span>Sign in<span class="nt">&lt;/bs-button&gt;</span>

<span class="nt">&lt;/bs-form&gt;</span></code></pre></code></pre>
</bs-highlight>
        `;
    }
};

window.customElements.define('form-grid-complex-example', FormGridComplexExample);