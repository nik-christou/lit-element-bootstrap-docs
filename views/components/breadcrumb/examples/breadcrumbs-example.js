
import { LitElement, html } from 'lit-element';
import { BsBreadrumb, BsBreadrumbItem } from 'lit-element-bootstrap/components/breadcrumb';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class BreadcrumBsExample extends LitElement {
    
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
                
                
                <bs-breadcrumb>
                    <bs-breadcrumb-item title="Home" target="/home" active></bs-breadcrumb-item>
                </bs-breadcrumb>
                
                <bs-breadcrumb>
                    <bs-breadcrumb-item title="Home" target="/home"></bs-breadcrumb-item>
                    <bs-breadcrumb-item title="Library" target="/library" active></bs-breadcrumb-item>
                </bs-breadcrumb>
                
                <bs-breadcrumb>
                    <bs-breadcrumb-item title="Home" target="/home"></bs-breadcrumb-item>
                    <bs-breadcrumb-item title="Library" target="/library"></bs-breadcrumb-item>
                    <bs-breadcrumb-item title="Data" target="/data" active></bs-breadcrumb-item>
                </bs-breadcrumb>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-breadcrumb&gt;</span>
    <span class="nt">&lt;bs-breadcrumb-item</span> <span class="na">title=</span><span class="s">"Home"</span> <span class="na">target=</span><span class="s">"/home"</span> <span class="na">active</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-breadcrumb-item&gt;</span>
<span class="nt">&lt;/bs-breadcrumb&gt;</span>
<span class="nt">&lt;bs-breadcrumb&gt;</span>
    <span class="nt">&lt;bs-breadcrumb-item</span> <span class="na">title=</span><span class="s">"Home"</span> <span class="na">target=</span><span class="s">"/home"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-breadcrumb-item&gt;</span>
    <span class="nt">&lt;bs-breadcrumb-item</span> <span class="na">title=</span><span class="s">"Library"</span> <span class="na">target=</span><span class="s">"/library"</span> <span class="na">active</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-breadcrumb-item&gt;</span>
<span class="nt">&lt;/bs-breadcrumb&gt;</span>
<span class="nt">&lt;bs-breadcrumb&gt;</span>
    <span class="nt">&lt;bs-breadcrumb-item</span> <span class="na">title=</span><span class="s">"Home"</span> <span class="na">target=</span><span class="s">"/home"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-breadcrumb-item&gt;</span>
    <span class="nt">&lt;bs-breadcrumb-item</span> <span class="na">title=</span><span class="s">"Library"</span> <span class="na">target=</span><span class="s">"/library"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-breadcrumb-item&gt;</span>
    <span class="nt">&lt;bs-breadcrumb-item</span> <span class="na">title=</span><span class="s">"Data"</span> <span class="na">target=</span><span class="s">"/data"</span> <span class="na">active</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-breadcrumb-item&gt;</span>    
<span class="nt">&lt;/bs-breadcrumb&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('breadcrumbs-example', BreadcrumBsExample);