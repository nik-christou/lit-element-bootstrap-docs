
import { LitElement, html } from 'lit-element';
import { BsSpacingCss } from 'lit-element-bootstrap//utilities';
import { BsMedia, BsMediaBody } from 'lit-element-bootstrap/components/media-object';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class OrderPlacementMediaExample extends LitElement {
    
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
                
                <bs-media>
                    <bs-media-body>
                        <h5 class="mt-0 mb-1">Media heading</h5>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </bs-media-body>
                    <img class="ml-3" src="views/components/media-object/examples/img-placeholder.svg" alt="Generic placeholder image" />
                </bs-media>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-media&gt;</span>
    <span class="nt">&lt;bs-media-body&gt;</span>
        <span class="nt">&lt;h5</span> <span class="na">class=</span><span class="s">"mt-0 mb-1"</span><span class="nt">&gt;</span>Media heading<span class="nt">&lt;/h5&gt;</span>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    <span class="nt">&lt;/bs-media-body&gt;</span>
    <span class="nt">&lt;img</span> <span class="na">class=</span><span class="s">"ml-3"</span> <span class="na">src=</span><span class="s">"..."</span> <span class="na">alt=</span><span class="s">"Generic placeholder image"</span> <span class="nt">/&gt;</span>
<span class="nt">&lt;/bs-media&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('order-placement-media-example', OrderPlacementMediaExample);