
import { LitElement, html } from 'lit-element';
import { BsSpacingCss } from 'lit-element-bootstrap//utilities';
import { BsFlexAlignSelfCss } from 'lit-element-bootstrap/utilities/flex';
import { BsMedia, BsMediaBody } from 'lit-element-bootstrap/components/media-object';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class TopAlignmentMediaExample extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsContentCodeCss,
            BsCodeSyntaxCss,
            BsSpacingCss,
            BsFlexAlignSelfCss
        ];
    }
    
    render() {
        return html`
            
            <bs-example>
                
                <bs-media>
                    <img class="mr-3 align-self-start" src="views/components/media-object/examples/img-placeholder.svg" alt="Generic placeholder image" />
                    <bs-media-body>
                        <h5 class="mt-0">Top-aligned media</h5>
                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                        <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                    </bs-media-body>
                </bs-media>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-media&gt;</span>
    <span class="nt">&lt;img</span> <span class="na">class=</span><span class="s">"mr-3 align-self-start"</span> <span class="na">src=</span><span class="s">"..."</span> <span class="na">alt=</span><span class="s">"Generic placeholder image"</span> <span class="nt">/&gt;</span>
    <span class="nt">&lt;bs-media-body&gt;</span>
        <span class="nt">&lt;h5</span> <span class="na">class=</span><span class="s">"mt-0"</span><span class="nt">&gt;</span>Top-aligned media<span class="nt">&lt;/h5&gt;</span>
        <span class="nt">&lt;p&gt;</span>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.<span class="nt">&lt;/p&gt;</span>
        <span class="nt">&lt;p&gt;</span>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.<span class="nt">&lt;/p&gt;</span>
    <span class="nt">&lt;/bs-media-body&gt;</span>
<span class="nt">&lt;/bs-media&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('top-alignment-media-example', TopAlignmentMediaExample);