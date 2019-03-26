
import { LitElement, html } from 'lit-element';
import { BsSpacingCss } from 'lit-element-bootstrap/utilities';
import { BsButton } from 'lit-element-bootstrap/components/button';
import { BsButtonGroup, BsButtonToolbar } from 'lit-element-bootstrap/components/button-group';
import { BsDropdown, BsDropdownMenu, BsDropdownItemLink } from 'lit-element-bootstrap/components/dropdown';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class SizingDropdownExample extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsContentCodeCss,
            BsCodeSyntaxCss,
            BsSpacingCss
        ];
    }
    
    render() {
        return html`
            
            <bs-example>
                
                <bs-button-toolbar>
                    <bs-button-group>
                        <bs-dropdown>
                            <bs-button secondary large dropdown-toggle>Large button</bs-button>
                            <bs-dropdown-menu down x-placement="bottom-start">
                                <bs-dropdown-item-link title="Action" index="0"></bs-dropdown-item-link>
                                <bs-dropdown-item-link title="Another action" index="1"></bs-dropdown-item-link>
                                <bs-dropdown-item-link title="Something else here" index="2"></bs-dropdown-item-link>
                                <bs-dropdown-divider></bs-dropdown-divider>
                                <bs-dropdown-item-link title="Separated link" index="3"></bs-dropdown-item-link>
                            </bs-dropdown-menu>
                        </bs-dropdown>
                    </bs-button-group>

                    <bs-button-group class="ml-2">
                        <bs-dropdown split>
                            <bs-button secondary large>Large button</bs-button>
                            <bs-button secondary large dropdown-toggle></bs-button>
                            <bs-dropdown-menu down x-placement="bottom-start">
                                <bs-dropdown-item-link title="Action" index="0"></bs-dropdown-item-link>
                                <bs-dropdown-item-link title="Another action" index="1"></bs-dropdown-item-link>
                                <bs-dropdown-item-link title="Something else here" index="2"></bs-dropdown-item-link>
                                <bs-dropdown-divider></bs-dropdown-divider>
                                <bs-dropdown-item-link title="Separated link" index="3"></bs-dropdown-item-link>
                            </bs-dropdown-menu>
                        </bs-dropdown>
                    </bs-button-group>

                </bs-button-toolbar>
                
                <br />
                
                <bs-button-toolbar>
                    <bs-button-group>
                        <bs-dropdown>
                            <bs-button secondary small dropdown-toggle>Small button</bs-button>
                            <bs-dropdown-menu down x-placement="bottom-start">
                                <bs-dropdown-item-link title="Action" index="0"></bs-dropdown-item-link>
                                <bs-dropdown-item-link title="Another action" index="1"></bs-dropdown-item-link>
                                <bs-dropdown-item-link title="Something else here" index="2"></bs-dropdown-item-link>
                                <bs-dropdown-divider></bs-dropdown-divider>
                                <bs-dropdown-item-link title="Separated link" index="3"></bs-dropdown-item-link>
                            </bs-dropdown-menu>
                        </bs-dropdown>
                    </bs-button-group>

                    <bs-button-group class="ml-2">
                        <bs-dropdown split>
                            <bs-button secondary small>Small button</bs-button>
                            <bs-button secondary small dropdown-toggle></bs-button>
                            <bs-dropdown-menu down x-placement="bottom-start">
                                <bs-dropdown-item-link title="Action" index="0"></bs-dropdown-item-link>
                                <bs-dropdown-item-link title="Another action" index="1"></bs-dropdown-item-link>
                                <bs-dropdown-item-link title="Something else here" index="2"></bs-dropdown-item-link>
                                <bs-dropdown-divider></bs-dropdown-divider>
                                <bs-dropdown-item-link title="Separated link" index="3"></bs-dropdown-item-link>
                            </bs-dropdown-menu>
                        </bs-dropdown>
                    </bs-button-group>

                </bs-button-toolbar>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html"><span class="nt">&lt;bs-button-toolbar&gt;</span> 
    <span class="nt">&lt;bs-button-group&gt;</span>
        <span class="nt">&lt;bs-dropdown&gt;</span>
            <span class="nt">&lt;bs-button</span> <span class="na">secondary</span> <span class="na">large</span> <span class="na">dropdown-toggle</span><span class="nt">&gt;</span>Large button<span class="nt">&lt;/bs-button&gt;</span>
            <span class="nt">&lt;bs-dropdown-menu</span> <span class="na">down</span> <span class="na">x-placement=</span><span class="s">"bottom-start"</span><span class="nt">&gt;</span>
                <span class="nt">&lt;bs-dropdown-item-link</span> <span class="na">title=</span><span class="s">"Action"</span> <span class="na">index=</span><span class="s">"0"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-dropdown-item-link&gt;</span>
                <span class="nt">&lt;bs-dropdown-item-link</span> <span class="na">title=</span><span class="s">"Another action"</span> <span class="na">index=</span><span class="s">"1"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-dropdown-item-link&gt;</span>
                <span class="nt">&lt;bs-dropdown-item-link</span> <span class="na">title=</span><span class="s">"Something else here"</span> <span class="na">index=</span><span class="s">"2"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-dropdown-item-link&gt;</span>
            <span class="nt">&lt;/bs-dropdown-menu&gt;</span>
        <span class="nt">&lt;/bs-dropdown&gt;</span>
    <span class="nt">&lt;/bs-button-group&gt;</span>
    <span class="nt">&lt;bs-button-group</span> <span class="na">class=</span><span class="s">"ml-2"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-dropdown</span> <span class="na">split</span><span class="nt">&gt;</span>
            <span class="nt">&lt;bs-button</span> <span class="na">secondary</span> <span class="na">large</span><span class="nt">&gt;</span>Large button<span class="nt">&lt;/bs-button&gt;</span>
            <span class="nt">&lt;bs-button</span> <span class="na">secondary</span> <span class="na">large</span> <span class="na">dropdown-toggle</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-button&gt;</span>
            <span class="nt">&lt;bs-dropdown-menu</span> <span class="na">down</span> <span class="na">x-placement=</span><span class="s">"bottom-start"</span><span class="nt">&gt;</span>
                <span class="nt">&lt;bs-dropdown-item-link</span> <span class="na">title=</span><span class="s">"Action"</span> <span class="na">index=</span><span class="s">"0"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-dropdown-item-link&gt;</span>
                <span class="nt">&lt;bs-dropdown-item-link</span> <span class="na">title=</span><span class="s">"Another action"</span> <span class="na">index=</span><span class="s">"1"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-dropdown-item-link&gt;</span>
                <span class="nt">&lt;bs-dropdown-item-link</span> <span class="na">title=</span><span class="s">"Something else here"</span> <span class="na">index=</span><span class="s">"2"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-dropdown-item-link&gt;</span>
            <span class="nt">&lt;/bs-dropdown-menu&gt;</span>
        <span class="nt">&lt;/bs-dropdown&gt;</span>
    <span class="nt">&lt;/bs-button-group&gt;</span>
<span class="nt">&lt;/bs-button-toolbar&gt;</span>

<span class="nt">&lt;bs-button-toolbar&gt;</span> 
    <span class="nt">&lt;bs-button-group&gt;</span>
        <span class="nt">&lt;bs-dropdown&gt;</span>
            <span class="nt">&lt;bs-button</span> <span class="na">secondary</span> <span class="na">small</span> <span class="na">dropdown-toggle</span><span class="nt">&gt;</span>Small button<span class="nt">&lt;/bs-button&gt;</span>
            <span class="nt">&lt;bs-dropdown-menu</span> <span class="na">down</span> <span class="na">x-placement=</span><span class="s">"bottom-start"</span><span class="nt">&gt;</span>
                <span class="nt">&lt;bs-dropdown-item-link</span> <span class="na">title=</span><span class="s">"Action"</span> <span class="na">index=</span><span class="s">"0"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-dropdown-item-link&gt;</span>
                <span class="nt">&lt;bs-dropdown-item-link</span> <span class="na">title=</span><span class="s">"Another action"</span> <span class="na">index=</span><span class="s">"1"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-dropdown-item-link&gt;</span>
                <span class="nt">&lt;bs-dropdown-item-link</span> <span class="na">title=</span><span class="s">"Something else here"</span> <span class="na">index=</span><span class="s">"2"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-dropdown-item-link&gt;</span>
            <span class="nt">&lt;/bs-dropdown-menu&gt;</span>
        <span class="nt">&lt;/bs-dropdown&gt;</span>
    <span class="nt">&lt;/bs-button-group&gt;</span>
    <span class="nt">&lt;bs-button-group</span> <span class="na">class=</span><span class="s">"ml-2"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-dropdown</span> <span class="na">split</span><span class="nt">&gt;</span>
            <span class="nt">&lt;bs-button</span> <span class="na">secondary</span> <span class="na">small</span><span class="nt">&gt;</span>Small button<span class="nt">&lt;/bs-button&gt;</span>
            <span class="nt">&lt;bs-button</span> <span class="na">secondary</span> <span class="na">small</span> <span class="na">dropdown-toggle</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-button&gt;</span>
            <span class="nt">&lt;bs-dropdown-menu</span> <span class="na">down</span> <span class="na">x-placement=</span><span class="s">"bottom-start"</span><span class="nt">&gt;</span>
                <span class="nt">&lt;bs-dropdown-item-link</span> <span class="na">title=</span><span class="s">"Action"</span> <span class="na">index=</span><span class="s">"0"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-dropdown-item-link&gt;</span>
                <span class="nt">&lt;bs-dropdown-item-link</span> <span class="na">title=</span><span class="s">"Another action"</span> <span class="na">index=</span><span class="s">"1"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-dropdown-item-link&gt;</span>
                <span class="nt">&lt;bs-dropdown-item-link</span> <span class="na">title=</span><span class="s">"Something else here"</span> <span class="na">index=</span><span class="s">"2"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-dropdown-item-link&gt;</span>
            <span class="nt">&lt;/bs-dropdown-menu&gt;</span>
        <span class="nt">&lt;/bs-dropdown&gt;</span>
    <span class="nt">&lt;/bs-button-group&gt;</span>
<span class="nt">&lt;/bs-button-toolbar&gt;</span></code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('sizing-dropdown-example', SizingDropdownExample);