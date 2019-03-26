
import { LitElement, html, css } from 'lit-element';
import { BsButton } from 'lit-element-bootstrap/components/button';
import { BsFormInputFeedback, BsFormHelpText } from 'lit-element-bootstrap/components/form';
import { BsForm, BsFormInput, BsFormGroup, BsFormLabel } from 'lit-element-bootstrap/components/form';
import { BsFormCheckGroup, BsFormCheckLabel, BsFormCheckboxInput } from 'lit-element-bootstrap/components/form';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class OverviewExample extends LitElement {
    
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
                
                    <bs-form-group>
                        <bs-form-label slot="label">Email address</bs-form-label>
                        <bs-form-input slot="control" required type="email" name="email" placeholder="Enter email"></bs-form-input>
                        <bs-form-input-feedback
                            slot="feedback"
                            valid-value-msg="Valid email address"
                            missing-value-msg="Please enter an email address"
                            mismatch-value-msg="Please enter a valid email address">
                        </bs-form-input-feedback>
                        <bs-form-help-text slot="helptext">We'll never share your email with anyone else.</bs-form-help-text>
                    </bs-form-group>

                    <bs-form-group>
                        <bs-form-label slot="label">Password</bs-form-label>
                        <bs-form-input slot="control" required type="password" name="password" placeholder="Password"></bs-form-input>
                        <bs-form-input-feedback
                            slot="feedback"
                            missing-value-msg="Please enter your password">
                        </bs-form-input-feedback>
                    </bs-form-group>

                    <bs-form-check-group>
                        <bs-form-checkbox-input slot="check" required name="checkmeout"></bs-form-checkbox-input>
                        <bs-form-check-label slot="label">Check me out</bs-form-check-label>
                        <bs-form-input-feedback
                            slot="feedback"
                            missing-value-msg="You must agree before submitting.">
                        </bs-form-input-feedback>
                    </bs-form-check-group>

                    <bs-button primary action="submit">Submit</bs-button>

                </bs-form>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-form&gt;</span>
    <span class="nt">&lt;bs-form-group&gt;</span>
        <span class="nt">&lt;bs-form-label</span> <span class="na">slot=</span><span class="s">"label"</span><span class="nt">&gt;</span>Email address<span class="nt">&lt;/bs-form-label&gt;</span>
        <span class="nt">&lt;bs-form-input</span> <span class="na">slot=</span><span class="s">"control"</span> <span class="na">type=</span><span class="s">"email"</span> <span class="na">placeholder=</span><span class="s">"Enter email"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-input&gt;</span>
        <span class="nt">&lt;bs-form-help-text </span><span class="na">slot=</span><span class="s">"helptext"</span><span class="nt">&gt;</span>We'll never share your email with anyone else.<span class="nt">&lt;/bs-form-help-text&gt;</span>
    <span class="nt">&lt;/bs-form-group&gt;</span>
    <span class="nt">&lt;bs-form-group&gt;</span>
        <span class="nt">&lt;bs-form-label</span> <span class="na">slot=</span><span class="s">"label"</span><span class="nt">&gt;</span>Password<span class="nt">&lt;/bs-form-label&gt;</span>
        <span class="nt">&lt;bs-form-input</span> <span class="na">slot=</span><span class="s">"control"</span> <span class="na">type=</span><span class="s">"password"</span> <span class="na">placeholder=</span><span class="s">"Password"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-input&gt;</span>
    <span class="nt">&lt;/bs-form-group&gt;</span>
    <span class="nt">&lt;bs-form-check-group&gt;</span>
        <span class="nt">&lt;bs-form-checkbox-input</span> <span class="na">slot=</span><span class="s">"check"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-checkbox-input&gt;</span>
        <span class="nt">&lt;bs-form-check-label</span> <span class="na">slot=</span><span class="s">"label"</span><span class="nt">&gt;</span>Check me out<span class="nt">&lt;/bs-form-check-label&gt;</span>
    <span class="nt">&lt;/bs-form-check-group&gt;</span>
    <span class="nt">&lt;bs-button</span> <span class="na">primary</span> <span class="na">action=</span><span class="s">"submit"</span><span class="nt">&gt;</span>Submit<span class="nt">&lt;/bs-button&gt;</span>
<span class="nt">&lt;/bs-form&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('overview-example', OverviewExample);