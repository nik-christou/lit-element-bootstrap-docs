
import { LitElement, html } from 'lit-element';
import { BsButton } from 'lit-element-bootstrap/components/button';
import { BsButtonGroup } from 'lit-element-bootstrap/components/button-group';
import { BsDropdown, BsDropdownMenu, BsDropdownDivider, BsDropdownItemLink } from 'lit-element-bootstrap/components/dropdown';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class SplitButtonDropdownExample extends LitElement {
    
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
                
                <div>
                
                    <bs-button-group>
                        <bs-dropdown split>
                            <bs-button primary>Primary</bs-button>
                            <bs-button primary dropdown-toggle></bs-button>
                            <bs-dropdown-menu down x-placement="bottom-start">
                                <bs-dropdown-item-link title="Action" index="0"></bs-dropdown-item-link>
                                <bs-dropdown-item-link title="Another action" index="1"></bs-dropdown-item-link>
                                <bs-dropdown-item-link title="Something else here" index="2"></bs-dropdown-item-link>
                                <bs-dropdown-divider></bs-dropdown-divider>
                                <bs-dropdown-item-link title="Separated link" index="3"></bs-dropdown-item-link>
                            </bs-dropdown-menu>
                        </bs-dropdown>
                    </bs-button-group>

                    <bs-button-group>
                        <bs-dropdown split>
                            <bs-button secondary>Secondary</bs-button>
                            <bs-button secondary dropdown-toggle></bs-button>
                            <bs-dropdown-menu down x-placement="bottom-start">
                                <bs-dropdown-item-link title="Action" index="0"></bs-dropdown-item-link>
                                <bs-dropdown-item-link title="Another action" index="1"></bs-dropdown-item-link>
                                <bs-dropdown-item-link title="Something else here" index="2"></bs-dropdown-item-link>
                                <bs-dropdown-divider></bs-dropdown-divider>
                                <bs-dropdown-item-link title="Separated link" index="3"></bs-dropdown-item-link>
                            </bs-dropdown-menu>
                        </bs-dropdown>
                    </bs-button-group>

                    <bs-button-group>
                        <bs-dropdown split>
                            <bs-button success>Success</bs-button>
                            <bs-button success dropdown-toggle></bs-button>
                            <bs-dropdown-menu down x-placement="bottom-start">
                                <bs-dropdown-item-link title="Action" index="0"></bs-dropdown-item-link>
                                <bs-dropdown-item-link title="Another action" index="1"></bs-dropdown-item-link>
                                <bs-dropdown-item-link title="Something else here" index="2"></bs-dropdown-item-link>
                                <bs-dropdown-divider></bs-dropdown-divider>
                                <bs-dropdown-item-link title="Separated link" index="3"></bs-dropdown-item-link>
                            </bs-dropdown-menu>
                        </bs-dropdown>
                    </bs-button-group>

                    <bs-button-group>
                        <bs-dropdown split>
                            <bs-button info>Info</bs-button>
                            <bs-button info dropdown-toggle></bs-button>
                            <bs-dropdown-menu down x-placement="bottom-start">
                                <bs-dropdown-item-link title="Action" index="0"></bs-dropdown-item-link>
                                <bs-dropdown-item-link title="Another action" index="1"></bs-dropdown-item-link>
                                <bs-dropdown-item-link title="Something else here" index="2"></bs-dropdown-item-link>
                                <bs-dropdown-divider></bs-dropdown-divider>
                                <bs-dropdown-item-link title="Separated link" index="3"></bs-dropdown-item-link>
                            </bs-dropdown-menu>
                        </bs-dropdown>
                    </bs-button-group>

                    <bs-button-group>
                        <bs-dropdown split>
                            <bs-button warning>Warning</bs-button>
                            <bs-button warning dropdown-toggle></bs-button>
                            <bs-dropdown-menu down x-placement="bottom-start">
                                <bs-dropdown-item-link title="Action" index="0"></bs-dropdown-item-link>
                                <bs-dropdown-item-link title="Another action" index="1"></bs-dropdown-item-link>
                                <bs-dropdown-item-link title="Something else here" index="2"></bs-dropdown-item-link>
                                <bs-dropdown-divider></bs-dropdown-divider>
                                <bs-dropdown-item-link title="Separated link" index="3"></bs-dropdown-item-link>
                            </bs-dropdown-menu>
                        </bs-dropdown>
                    </bs-button-group>

                    <bs-button-group>
                        <bs-dropdown split>
                            <bs-button danger>Danger</bs-button>
                            <bs-button danger dropdown-toggle></bs-button>
                            <bs-dropdown-menu down x-placement="bottom-start">
                                <bs-dropdown-item-link title="Action" index="0"></bs-dropdown-item-link>
                                <bs-dropdown-item-link title="Another action" index="1"></bs-dropdown-item-link>
                                <bs-dropdown-item-link title="Something else here" index="2"></bs-dropdown-item-link>
                                <bs-dropdown-divider></bs-dropdown-divider>
                                <bs-dropdown-item-link title="Separated link" index="3"></bs-dropdown-item-link>
                            </bs-dropdown-menu>
                        </bs-dropdown>
                    </bs-button-group>
                </div>
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html"><span class="nt">&lt;bs-button-group&gt;</span> 
    <span class="nt">&lt;bs-dropdown</span> <span class="na">split</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-button</span> <span class="na">primary</span><span class="nt">&gt;</span>Primary<span class="nt">&lt;/bs-button&gt;</span>
        <span class="nt">&lt;bs-button</span> <span class="na">primary</span> <span class="na">dropdown-toggle</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-button&gt;</span>
        <span class="nt">&lt;bs-dropdown-menu</span> <span class="na">down</span> <span class="na">x-placement=</span><span class="s">"bottom-start"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;bs-dropdown-item-link</span> <span class="na">title=</span><span class="s">"Action"</span> <span class="na">index=</span><span class="s">"0"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-dropdown-item-link&gt;</span>
            <span class="nt">&lt;bs-dropdown-item-link</span> <span class="na">title=</span><span class="s">"Another action"</span> <span class="na">index=</span><span class="s">"1"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-dropdown-item-link&gt;</span>
            <span class="nt">&lt;bs-dropdown-item-link</span> <span class="na">title=</span><span class="s">"Something else here"</span> <span class="na">index=</span><span class="s">"2"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-dropdown-item-link&gt;</span>
            <span class="nt">&lt;bs-dropdown-divider&gt;</span><span class="nt">&lt;/bs-dropdown-divider&gt;</span>
            <span class="nt">&lt;bs-dropdown-item-link</span> <span class="na">title=</span><span class="s">"Separated link"</span> <span class="na">index=</span><span class="s">"3"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-dropdown-item-link&gt;</span>
        <span class="nt">&lt;/bs-dropdown-menu&gt;</span>
    <span class="nt">&lt;/bs-dropdown&gt;</span>
<span class="nt">&lt;/bs-button-group&gt;</span></code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('split-button-dropdown-example', SplitButtonDropdownExample);
