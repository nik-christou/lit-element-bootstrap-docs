
import { LitElement, html } from 'lit-element';
import { BsSizingCss, BsSpacingCss } from 'lit-element-bootstrap/utilities';
import { BsFlexDisplayCss, BsFlexJustifyCss, BsFlexAlignItemsCss, BsFlexDirectionCss } from 'lit-element-bootstrap/utilities/flex'; 
import { BsListGroupAction, BsListGroupItemActionLink } from 'lit-element-bootstrap/components/list-group';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class CustomContentListGroupExample extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsContentCodeCss,
            BsCodeSyntaxCss,
            BsFlexDisplayCss,
            BsFlexDirectionCss,
            BsFlexAlignItemsCss,
            BsFlexJustifyCss,
            BsSizingCss,
            BsSpacingCss
        ];
    }
    
    render() {
        return html`
            
            <bs-example>
                
                <bs-list-group-action>
                    <bs-list-group-item-action-link class="flex-column align-items-start">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">List group item heading</h5>
                            <small>3 days ago</small>
                        </div>
                        <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                        <small>Donec id elit non mi porta.</small>
                    </bs-list-group-item-action-link>
                    <bs-list-group-item-action-link class="flex-column align-items-start">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">List group item heading</h5>
                            <small>3 days ago</small>
                        </div>
                        <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                        <small>Donec id elit non mi porta.</small>
                    </bs-list-group-item-action-link>
                    <bs-list-group-item-action-link class="flex-column align-items-start">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">List group item heading</h5>
                            <small>3 days ago</small>
                        </div>
                        <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                        <small>Donec id elit non mi porta.</small>
                    </bs-list-group-item-action-link>
                </bs-list-group-action>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-list-group-action&gt;</span> 
    <span class="nt">&lt;bs-list-group-item-action-link</span> <span class="nt">class=</span><span class="s">"flex-column align-items-start"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;div</span> <span class="nt">class=</span><span class="s">"d-flex w-100 justify-content-between"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;h5</span> <span class="nt">class=</span><span class="s">"mb-1"</span><span class="nt">&gt;</span>List group item heading<span class="nt">&lt;/h5&gt;</span>
            <span class="nt">&lt;small&gt;</span>3 days ago<span class="nt">&lt;/small&gt;</span>
        <span class="nt">&lt;/div&gt;</span>
        <span class="nt">&lt;p</span> <span class="nt">class=</span><span class="s">"mb-1"</span><span class="nt">&gt;</span>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.<span class="nt">&lt;/p&gt;</span>
        <span class="nt">&lt;small&gt;</span>Donec id elit non mi porta.<span class="nt">&lt;/small&gt;</span>
    <span class="nt">&lt;/bs-list-group-item-action-link&gt;</span>
    <span class="nt">&lt;bs-list-group-item-action-link</span> <span class="nt">class=</span><span class="s">"flex-column align-items-start"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;div</span> <span class="nt">class=</span><span class="s">"d-flex w-100 justify-content-between"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;h5</span> <span class="nt">class=</span><span class="s">"mb-1"</span><span class="nt">&gt;</span>List group item heading<span class="nt">&lt;/h5&gt;</span>
            <span class="nt">&lt;small&gt;</span>3 days ago<span class="nt">&lt;/small&gt;</span>
        <span class="nt">&lt;/div&gt;</span>
        <span class="nt">&lt;p</span> <span class="nt">class=</span><span class="s">"mb-1"</span><span class="nt">&gt;</span>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.<span class="nt">&lt;/p&gt;</span>
        <span class="nt">&lt;small&gt;</span>Donec id elit non mi porta.<span class="nt">&lt;/small&gt;</span>
    <span class="nt">&lt;/bs-list-group-item-action-link&gt;</span>
    <span class="nt">&lt;bs-list-group-item-action-link</span> <span class="nt">class=</span><span class="s">"flex-column align-items-start"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;div</span> <span class="nt">class=</span><span class="s">"d-flex w-100 justify-content-between"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;h5</span> <span class="nt">class=</span><span class="s">"mb-1"</span><span class="nt">&gt;</span>List group item heading<span class="nt">&lt;/h5&gt;</span>
            <span class="nt">&lt;small&gt;</span>3 days ago<span class="nt">&lt;/small&gt;</span>
        <span class="nt">&lt;/div&gt;</span>
        <span class="nt">&lt;p</span> <span class="nt">class=</span><span class="s">"mb-1"</span><span class="nt">&gt;</span>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.<span class="nt">&lt;/p&gt;</span>
        <span class="nt">&lt;small&gt;</span>Donec id elit non mi porta.<span class="nt">&lt;/small&gt;</span>
    <span class="nt">&lt;/bs-list-group-item-action-link&gt;</span>
<span class="nt">&lt;/bs-list-group-action&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('custom-content-list-group-example', CustomContentListGroupExample);