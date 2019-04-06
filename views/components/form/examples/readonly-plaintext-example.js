
import { LitElement, html } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';

import 'lit-element-bootstrap/layout/grid';
import 'lit-element-bootstrap/components/form';

class ReadonlyPlaintextExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <bs-form>
                <bs-form-group row>
                    <bs-form-label column sm-2 slot="label">Email</bs-form-label>
                    <bs-column sm-10 slot="control">
                        <bs-form-input-plaintext readonly value="email@example.com"></bs-form-input-plaintext>
                    </bs-column>
                </bs-form-group>
                <bs-form-group row>
                    <bs-form-label column sm-2 slot="label">Password</bs-form-label>
                    <bs-column sm-10 slot="control">
                        <bs-form-input type="password" placeholder="Password"></bs-form-input>
                    </bs-column>
                </bs-form-group>
            </bs-form>
        `;
    }
    
    render() {
        return html`
            
            <bs-example>
                <bs-form>
                    <bs-form-group row>
                        <bs-form-label column sm-2 slot="label">Email</bs-form-label>
                        <bs-column sm-10 slot="control">
                            <bs-form-input-plaintext readonly value="email@example.com"></bs-form-input-plaintext>
                        </bs-column>
                    </bs-form-group>
                    <bs-form-group row>
                        <bs-form-label column sm-2 slot="label">Password</bs-form-label>
                        <bs-column sm-10 slot="control">
                            <bs-form-input type="password" placeholder="Password"></bs-form-input>
                        </bs-column>
                    </bs-form-group>
                </bs-form>
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-form</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-form-group</span> <span class="na">row</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-form-label</span> <span class="na">column</span> <span class="na">sm-2</span> <span class="na">slot=</span><span class="s">"label"</span><span class="nt">&gt;</span>Email<span class="nt">&lt;/bs-form-label&gt;</span>
        <span class="nt">&lt;bs-column</span> <span class="na">sm-10</span> <span class="na">slot=</span><span class="s">"control"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;bs-form-input-plaintext</span> <span class="na">readonly</span> <span class="na">value=</span><span class="s">"email@example.com"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-input-plaintext&gt;</span>
        <span class="nt">&lt;/bs-column&gt;</span>
    <span class="nt">&lt;/bs-form-group&gt;</span>
    <span class="nt">&lt;bs-form-group</span> <span class="na">row</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-form-label</span> <span class="na">column</span> <span class="na">sm-2</span> <span class="na">slot=</span><span class="s">"label"</span><span class="nt">&gt;</span>Password<span class="nt">&lt;/bs-form-label&gt;</span>
        <span class="nt">&lt;bs-column</span> <span class="na">sm-10</span> <span class="na">slot=</span><span class="s">"control"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;bs-form-input</span> <span class="na">type=</span><span class="s">"password"</span> <span class="na">placeholder=</span><span class="s">"Password"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-form-input&gt;</span>
        <span class="nt">&lt;/bs-column&gt;</span>
    <span class="nt">&lt;/bs-form-group&gt;</span>
<span class="nt">&lt;/bs-form&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('readonly-plaintext-example', ReadonlyPlaintextExample);