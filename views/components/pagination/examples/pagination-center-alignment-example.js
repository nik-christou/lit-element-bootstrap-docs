
import { LitElement, html } from 'lit-element';
import { BsFlexJustifyCss } from 'lit-element-bootstrap/utilities/flex';
import { BsPageLink, BsPageItem, BsPagination } from 'lit-element-bootstrap/components/pagination';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class PaginationCenterAlignmentExample extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsContentCodeCss,
            BsCodeSyntaxCss,
            BsFlexJustifyCss
        ];
    }

    render() {
        return html`
            
            <bs-example>
                
                <bs-pagination class="justify-content-center">
                    <bs-page-item><bs-page-link>Previous</bs-page-link></bs-page-item>
                    <bs-page-item><bs-page-link>1</bs-page-link></bs-page-item>
                    <bs-page-item><bs-page-link>2</bs-page-link></bs-page-item>
                    <bs-page-item><bs-page-link>3</bs-page-link></bs-page-item>
                    <bs-page-item><bs-page-link>Next</bs-page-link></bs-page-item>
                </bs-pagination>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-pagination</span> <span class="na">class=</span><span class="s">"justify-content-center"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-page-item&gt;</span>
        <span class="nt">&lt;bs-page-link&gt;</span>Previous<span class="nt">&lt;/bs-page-link&gt;</span>
    <span class="nt">&lt;/bs-page-item&gt;</span>
    <span class="nt">&lt;bs-page-item&gt;</span>
        <span class="nt">&lt;bs-page-link&gt;</span>1<span class="nt">&lt;/bs-page-link&gt;</span>
    <span class="nt">&lt;/bs-page-item&gt;</span>
    <span class="nt">&lt;bs-page-item&gt;</span>
        <span class="nt">&lt;bs-page-link&gt;</span>2<span class="nt">&lt;/bs-page-link&gt;</span>
    <span class="nt">&lt;/bs-page-item&gt;</span>
    <span class="nt">&lt;bs-page-item&gt;</span>
        <span class="nt">&lt;bs-page-link&gt;</span>3<span class="nt">&lt;/bs-page-link&gt;</span>
    <span class="nt">&lt;/bs-page-item&gt;</span>
    <span class="nt">&lt;bs-page-item&gt;</span>
        <span class="nt">&lt;bs-page-link&gt;</span>Next<span class="nt">&lt;/bs-page-link&gt;</span>
    <span class="nt">&lt;/bs-page-item&gt;</span>
<span class="nt">&lt;/bs-pagination&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('pagination-center-alignment-example', PaginationCenterAlignmentExample);