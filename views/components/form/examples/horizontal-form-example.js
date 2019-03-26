
import { LitElement, html, css } from 'lit-element';
import { BsSpacingCss } from 'lit-element-bootstrap/utilities';
import { BsButton } from 'lit-element-bootstrap/components/button';
import { BsColumn } from 'lit-element-bootstrap/layout/grid';
import { BsFormCheckGroup, BsFormCheckboxInput, BsFormCheckLabel } from 'lit-element-bootstrap/components/form';
import { BsFormLabel, BsFormSelect, BsFormRadioInput, BsFormRadioGroup } from 'lit-element-bootstrap/components/form';
import { BsForm, BsFormRow, BsFormInput, BsFormGroup } from 'lit-element-bootstrap/components/form';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class HorizontalFormExample extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsContentCodeCss,
            BsCodeSyntaxCss,
            BsSpacingCss,
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
                    
                    <bs-form-group row>
                        <bs-form-label slot="label" sm-2 column>Email</bs-form-label>
                        <bs-column slot="control" sm-10>
                            <bs-form-input type="email" placeholder="Email"></bs-form-input>
                        </bs-column>
                    </bs-form-group>
                    
                    <bs-form-group row>
                        <bs-form-label slot="label" sm-2 column>Password</bs-form-label>
                        <bs-column slot="control" sm-10>
                            <bs-form-input type="password" placeholder="Password"></bs-form-input>
                        </bs-column>
                    </bs-form-group>
                    
                    <bs-form-group row>
                        <bs-form-label slot="label" sm-2 column class="pt-0">Radios</bs-form-label>
                        <bs-column slot="control" sm-10>
                            <bs-form-radio-group name="gridRadios">
                                <bs-form-check-group>
                                    <bs-form-radio-input slot="check" checked type="radio" value="option1"></bs-form-radio-input>
                                    <bs-form-check-label slot="label">First radio</bs-form-check-label>
                                </bs-form-check-group>
                                <bs-form-check-group>
                                    <bs-form-radio-input slot="check" type="radio" value="option2"></bs-form-radio-input>
                                    <bs-form-check-label slot="label">Second radio</bs-form-check-label>
                                </bs-form-check-group>
                                <bs-form-check-group disabled>
                                    <bs-form-radio-input slot="check" type="radio" value="option3"></bs-form-radio-input>
                                    <bs-form-check-label slot="label">Third disabled radio</bs-form-check-label>
                                </bs-form-check-group>
                            </bs-form-radio-name-group>
                        </bs-column>
                    </bs-form-group>
                    
                    <bs-form-group row>
                        <bs-form-label slot="label" sm-2>Checkbox</bs-form-label>
                        <bs-column slot="control" sm-10>
                            <bs-form-check-group>
                                <bs-form-checkbox-input slot="check"></bs-form-checkbox-input>
                                <bs-form-check-label slot="label">Example checkbox</bs-form-check-label>
                            </bs-form-check-group>
                        </bs-column>
                    </bs-form-group>
                    
                    <bs-form-group row>
                        <bs-column slot="control" sm-10>
                            <bs-button primary button-type="submit">Sign in</bs-button>
                        </bs-column>
                    </bs-form-group>

                </bs-form>

            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html"><span class="nt">&lt;bs-form&gt;</span>

    <span class="nt">&lt;bs-form-group</span> <span class="na">row</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-form-label</span> <span class="na">slot=</span><span class="s">"label"</span> <span class="na">sm-2</span> <span class="na">column</span><span class="nt">&gt;</span>Email<span class="nt">&lt;/bs-form-label&gt;</span>
        <span class="nt">&lt;bs-col</span> <span class="na">slot=</span><span class="s">"control"</span> <span class="na">sm-10</span><span class="nt">&gt;</span>
            <span class="nt">&lt;bs-form-input</span> <span class="na">type=</span><span class="s">"email"</span> <span class="na">placeholder=</span><span class="s">"Email"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-input&gt;</span>
        <span class="nt">&lt;/bs-column&gt;</span>
    <span class="nt">&lt;/bs-form-group&gt;</span>

    <span class="nt">&lt;bs-form-group</span> <span class="na">row</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-form-label</span> <span class="na">slot=</span><span class="s">"label"</span> <span class="na">sm-2</span><span class="nt">&gt;</span>Password<span class="nt">&lt;/bs-form-label&gt;</span>
        <span class="nt">&lt;bs-col</span> <span class="na">slot=</span><span class="s">"control"</span> <span class="na">sm-10</span><span class="nt">&gt;</span>
            <span class="nt">&lt;bs-form-input</span> <span class="na">type=</span><span class="s">"password"</span> <span class="na">placeholder=</span><span class="s">"Password"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-input&gt;</span>
        <span class="nt">&lt;/bs-column&gt;</span>
    <span class="nt">&lt;/bs-form-group&gt;</span>

    <span class="nt">&lt;bs-form-group</span> <span class="na">row</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-form-label</span> <span class="na">slot=</span><span class="s">"label"</span> <span class="na">column</span> <span class="na">sm-2</span> <span class="na">class=</span><span class="s">"pt-0"</span><span class="nt">&gt;</span>Radios<span class="nt">&lt;/bs-form-label&gt;</span>
        <span class="nt">&lt;bs-col</span> <span class="na">sm-10</span> <span class="na">slot=</span><span class="s">"control"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;bs-form-radio-name-group</span> <span class="na">name=</span><span class="s">"gridRadios"</span><span class="nt">&gt;</span>
                <span class="nt">&lt;bs-form-check-group&gt;</span>
                    <span class="nt">&lt;bs-form-radio-input</span> <span class="na">slot=</span><span class="s">"check"</span> <span class="na">checked</span> <span class="na">type=</span><span class="s">"radio"</span> <span class="na">value=</span><span class="s">"option1"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-radio-input&gt;</span>
                    <span class="nt">&lt;bs-form-check-label</span> <span class="na">slot=</span><span class="s">"label"</span><span class="nt">&gt;</span>First radio<span class="nt">&lt;/bs-form-check-label&gt;</span>
                <span class="nt">&lt;/bs-form-check-group&gt;</span>
                <span class="nt">&lt;bs-form-check-group&gt;</span>
                    <span class="nt">&lt;bs-form-radio-input</span> <span class="na">slot=</span><span class="s">"check"</span> <span class="na">checked</span> <span class="na">type=</span><span class="s">"radio"</span> <span class="na">value=</span><span class="s">"option2"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-radio-input&gt;</span>
                    <span class="nt">&lt;bs-form-check-label</span> <span class="na">slot=</span><span class="s">"label"</span><span class="nt">&gt;</span>Second radio<span class="nt">&lt;/bs-form-check-label&gt;</span>
                <span class="nt">&lt;/bs-form-check-group&gt;</span>
                <span class="nt">&lt;bs-form-check-group</span> <span class="na">disabled</span><span class="nt">&gt;</span>
                    <span class="nt">&lt;bs-form-radio-input</span> <span class="na">slot=</span><span class="s">"check"</span> <span class="na">checked</span> <span class="na">type=</span><span class="s">"radio"</span> <span class="na">value=</span><span class="s">"option3"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-radio-input&gt;</span>
                    <span class="nt">&lt;bs-form-check-label</span> <span class="na">slot=</span><span class="s">"label"</span><span class="nt">&gt;</span>Third disabled radio<span class="nt">&lt;/bs-form-check-label&gt;</span>
                <span class="nt">&lt;/bs-form-check-group&gt;</span>
            <span class="nt">&lt;/bs-form-radio-name-group&gt;</span>
        <span class="nt">&lt;/bs-column&gt;</span>
    <span class="nt">&lt;/bs-form-group&gt;</span>
    
    <span class="nt">&lt;bs-form-group</span> <span class="na">row</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-form-label</span> <span class="na">slot=</span><span class="s">"label"</span> <span class="na">sm-2</span><span class="nt">&gt;</span>Checkbox<span class="nt">&lt;/bs-form-label&gt;</span>
        <span class="nt">&lt;bs-col</span> <span class="na">slot=</span><span class="s">"control"</span> <span class="na">sm-10</span><span class="nt">&gt;</span>
            <span class="nt">&lt;bs-form-check-group&gt;</span>
                <span class="nt">&lt;bs-form-checkbox-input</span> <span class="na">slot=</span><span class="s">"check"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-checkbox-input&gt;</span>
                <span class="nt">&lt;bs-form-check-label</span> <span class="na">slot=</span><span class="s">"label"</span><span class="nt">&gt;</span>Example checkbox <span class="nt">&lt;/bs-form-check-label&gt;</span>
            <span class="nt">&lt;/bs-form-check-group&gt;</span>
        <span class="nt">&lt;/bs-column&gt;</span>
    <span class="nt">&lt;/bs-form-group&gt;</span>
    
    <span class="nt">&lt;bs-form-group</span> <span class="na">row</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-col</span> <span class="na">slot=</span><span class="s">"control"</span> <span class="na">sm-10</span><span class="nt">&gt;</span>
            <span class="nt">&lt;bs-button</span> <span class="na">primary</span> <span class="na">button-type</span><span class="s">"submit"</span> <span class="nt">&gt;</span>Sign in<span class="nt">&lt;/bs-button&gt;</span>
        <span class="nt">&lt;/bs-column&gt;</span>
    <span class="nt">&lt;/bs-form-group&gt;</span>

<span class="nt">&lt;/bs-form&gt;</span></code></pre>
</bs-highlight>
        `;
    }
};

window.customElements.define('horizontal-form-example', HorizontalFormExample);