
import { LitElement, html, css } from 'lit-element';
import { BsBreadrumb, BsBreadrumbItem } from 'lit-element-bootstrap/components/breadcrumb';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class BreadcrumbsSeparatorExample extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsContentCodeCss,
            BsCodeSyntaxCss,
            css`
                bs-breadcrumb.arrowSeparator {
                    --breadcrumb-divider: ">";
                }
        
                bs-breadcrumb.svgSeparator {
                    --breadcrumb-divider: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxwYXRoIGQ9Ik0yLjUgMEwxIDEuNSAzLjUgNCAxIDYuNSAyLjUgOGw0LTQtNC00eiIgZmlsbD0iY3VycmVudENvbG9yIi8+PC9zdmc+);
                }
            `
        ];
    }
    
    render() {
        return html`
            
            <bs-example>
                
                <bs-breadcrumb class="arrowSeparator">
                    <bs-breadcrumb-item title="Home" target="/home"></bs-breadcrumb-item>
                    <bs-breadcrumb-item title="Library" target="/library" active></bs-breadcrumb-item>
                </bs-breadcrumb>
        
                <bs-breadcrumb class="svgSeparator">
                    <bs-breadcrumb-item title="Home" target="/home"></bs-breadcrumb-item>
                    <bs-breadcrumb-item title="Library" target="/library" active></bs-breadcrumb-item>
                </bs-breadcrumb>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html"><span class="nt">&lt;style&gt;</span>
    bs-breadcrumb.arrowSeparator {
        --breadcrumb-divider: ">";
    }
        
    bs-breadcrumb.svgSeparator {
        --breadcrumb-divider: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxwYXRoIGQ9Ik0yLjUgMEwxIDEuNSAzLjUgNCAxIDYuNSAyLjUgOGw0LTQtNC00eiIgZmlsbD0iY3VycmVudENvbG9yIi8+PC9zdmc+);
    }
<span class="nt">&lt;/style&gt;</span>

<span class="nt">&lt;bs-breadcrumb</span> <span class="na">class=</span><span class="s">"arrowSeparator"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-breadcrumb-item</span> <span class="na">title=</span><span class="s">"Home"</span> <span class="na">target=</span><span class="s">"/home"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-breadcrumb-item&gt;</span>
    <span class="nt">&lt;bs-breadcrumb-item</span> <span class="na">title=</span><span class="s">"Library"</span> <span class="na">target=</span><span class="s">"/library"</span> <span class="na">active</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-breadcrumb-item&gt;</span>
<span class="nt">&lt;/bs-breadcrumb&gt;</span>

<span class="nt">&lt;bs-breadcrumb</span> <span class="na">class=</span><span class="s">"svgSeparator"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-breadcrumb-item</span> <span class="na">title=</span><span class="s">"Home"</span> <span class="na">target=</span><span class="s">"/home"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-breadcrumb-item&gt;</span>
    <span class="nt">&lt;bs-breadcrumb-item</span> <span class="na">title=</span><span class="s">"Library"</span> <span class="na">target=</span><span class="s">"/library"</span> <span class="na">active</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-breadcrumb-item&gt;</span>
<span class="nt">&lt;/bs-breadcrumb&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('breadcrumbs-separator-example', BreadcrumbsSeparatorExample);