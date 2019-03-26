
import { LitElement, html } from 'lit-element';
import { BsDropdownMenu } from 'lit-element-bootstrap/components/dropdown';
import { BsClearfixCss, BsTextColorCss, BsSpacingCss } from 'lit-element-bootstrap/utilities';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class DropdownMenuTextExample extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsContentCodeCss,
            BsCodeSyntaxCss,
            BsClearfixCss,
            BsTextColorCss,
            BsSpacingCss
        ];
    }
    
    render() {
        return html`
            
            <bs-example>
                
                <div class="clearfix">
                    <bs-dropdown-menu show static>
                        <div class="p-4 text-muted" style="max-width: 200px;">
                            <p>Some example text that's free-flowing within the dropdown menu.</p>
                            <p class="mb-0">And this is more example text.</p>
                        </div>
                    </bs-dropdown-menu>
                </div>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html"><span class="nt">&lt;bs-dropdown-menu</span> <span class="na">show</span> <span class="na">static</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"p-4 text-muted"</span> <span class="na">style=</span><span class="s">"max-width: 200px;"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;p&gt;</span>Some example text that's free-flowing within the dropdown menu.<span class="nt">&lt;/p&gt;</span>
        <span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"mb-0"</span> And this is more example text.<span class="nt">&lt;/p&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/bs-dropdown-menu&gt;</span></code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('dropdown-menu-text-example', DropdownMenuTextExample);