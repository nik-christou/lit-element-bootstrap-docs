
import { LitElement, html, css } from 'lit-element';
import { BsCard, BsCardImg, BsCardText, BsCardColumns, BsCardBody } from 'lit-element-bootstrap/components/card';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsTextColorCss, BsSpacingCss, BsBackgroundColorsCss } from 'lit-element-bootstrap/utilities';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class CardColumnsExample extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsContentCodeCss,
            BsCodeSyntaxCss,
            BsTextColorCss,
            BsSpacingCss,
            BsBackgroundColorsCss,
            css`
                .bd-placeholder-img {
                    font-size: 1.125rem;
                    text-anchor: middle;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                }
            `
        ];
    }
    
    render() {
        return html`
            
            <bs-example>
                
                <bs-card-columns>
                    <bs-card>
                        <bs-card-img position="top" slot="top-image">
                            <svg class="bd-placeholder-img" width="100%" height="160" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Image cap"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
                        </bs-card-img>
                        <bs-card-body>
                            <bs-card-title slot="card-title">
                                <h5>Card title that wraps to a new line</h5>
                            </bs-card-title>
                            <bs-card-text slot="card-text">
                                <p>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </bs-card-text>
                        </bs-card-body>
                    </bs-card>
                    <bs-card class="p-3">
                        <bs-card-body>
                            <blockquote class="blockquote mb-0">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                <footer class="blockquote-footer">
                                    <small class="text-muted">Someone famous in <cite title="Source Title">Source Title</cite></small>
                                </footer>
                            </blockquote>
                        </bs-card-body>
                    </bs-card>
                    <bs-card>
                        <bs-card-img position="top" slot="top-image">
                            <svg class="bd-placeholder-img" width="100%" height="160" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Image cap"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
                        </bs-card-img>
                        <bs-card-body>
                            <bs-card-title slot="card-title">
                                <h5>Card title</h5>
                            </bs-card-title>
                            <bs-card-text slot="card-text">
                                <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </bs-card-text>
                        </bs-card-body>
                    </bs-card>
                    <bs-card class="bg-primary text-white text-center p-3">
                        <blockquote class="blockquote mb-0">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
                            <footer class="blockquote-footer">
                                <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
                            </footer>
                        </blockquote>
                    </bs-card>
                    <bs-card class="text-center">
                        <bs-card-body>
                            <bs-card-title slot="card-title">
                                <h5>Card title</h5>
                            </bs-card-title>
                            <bs-card-text slot="card-text">
                                <p>This card has a regular title and short paragraphy of text below it.</p>
                                <p><small class="text-muted">Last updated 3 mins ago</small></p>
                            </bs-card-text>
                        </bs-card-body>
                    </bs-card>
                    <bs-card>
                        <bs-card-img slot="top-image"">
                        <svg class="bd-placeholder-img" width="100%" height="260" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Card image"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Card image</text></svg>
                        </bs-card-img>
                    </bs-card>
                    <bs-card class="text-right p-3">
                        <blockquote class="blockquote mb-0">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                            <footer class="blockquote-footer">
                                <small class="text-muted">Someone famous in <cite title="Source Title">Source Title</cite></small>
                            </footer>
                        </blockquote>
                    </bs-card>
                    <bs-card>
                        <bs-card-body>
                            <bs-card-title slot="card-title">
                                <h5>Card title</h5>
                            </bs-card-title>
                            <bs-card-text slot="card-text">
                                <p>This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.</p>
                                <p><small class="text-muted">Last updated 3 mins ago</small></p>
                            </bs-card-text>
                        </bs-card-body>
                    </bs-card>
                </bs-card-columns>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-card-columns&gt;</span>
    <span class="nt">&lt;bs-card&gt;</span>
        <span class="nt">&lt;bs-card-img</span> <span class="na">position=</span><span class="s">"top"</span> <span class="na">slot=</span><span class="s">"top-image"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;img</span> <span class="na">src=</span><span class="s">"..."</span><span class="nt">&gt;</span><span class="nt">&lt;/img&gt;</span>
        <span class="nt">&lt;/bs-card-img&gt;</span>
        <span class="nt">&lt;bs-card-body&gt;</span>
            <span class="nt">&lt;bs-card-title</span> <span class="na">slot=</span><span class="s">"card-title"</span><span class="nt">&gt;</span>
                <span class="nt">&lt;h5&gt;</span>Card title that wraps to a new line<span class="nt">&lt;/h5&gt;</span>
            <span class="nt">&lt;/bs-card-title&gt;</span>
            <span class="nt">&lt;bs-card-text</span> <span class="na">slot=</span><span class="s">"card-text"</span><span class="nt">&gt;</span>
                <span class="nt">&lt;p&gt;</span>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.<span class="nt">&lt;/p&gt;</span>
            <span class="nt">&lt;/bs-card-text&gt;</span>
        <span class="nt">&lt;/bs-card-body&gt;</span>
    <span class="nt">&lt;/bs-card&gt;</span>    
    <span class="nt">&lt;bs-card</span> <span class="na">class=</span><span class="s">"p-3"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-card-body&gt;</span>
            <span class="nt">&lt;blockquote</span> <span class="na">class=</span><span class="s">"blockquote mb-0"</span><span class="nt">&gt;</span>
                <span class="nt">&lt;p&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.<span class="nt">&lt;/p&gt;</span>
                <span class="nt">&lt;footer</span> <span class="na">class=</span><span class="s">"blockquote-footer"</span><span class="nt">&gt;</span>
                    <span class="nt">&lt;small</span> <span class="na">class=</span><span class="s">"text-muted"</span><span class="nt">&gt;</span>
                        Someone famous in <span class="nt">&lt;cite</span> <span class="na">title=</span><span class="s">"Source Title"</span><span class="nt">&gt;</span>Source Title<span class="nt">&lt;/cite&gt;</span>
                    <span class="nt">&lt;/small&gt;</span>
                <span class="nt">&lt;/footer&gt;</span>
            <span class="nt">&lt;/blockquote&gt;</span>
        <span class="nt">&lt;/bs-card-body&gt;</span>
    <span class="nt">&lt;/bs-card&gt;</span>    
    <span class="nt">&lt;bs-card&gt;</span>
        <span class="nt">&lt;bs-card-img</span> <span class="na">position=</span><span class="s">"top"</span> <span class="na">slot=</span><span class="s">"top-image"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;img</span> <span class="na">src=</span><span class="s">"..."</span><span class="nt">&gt;</span><span class="nt">&lt;/img&gt;</span>
        <span class="nt">&lt;/bs-card-img&gt;</span>
        <span class="nt">&lt;bs-card-body&gt;</span>
            <span class="nt">&lt;bs-card-title</span> <span class="na">slot=</span><span class="s">"card-title"</span><span class="nt">&gt;</span>
                <span class="nt">&lt;h5&gt;</span>Card title<span class="nt">&lt;/h5&gt;</span>
            <span class="nt">&lt;/bs-card-title&gt;</span>
            <span class="nt">&lt;bs-card-text</span> <span class="na">slot=</span><span class="s">"card-text"</span><span class="nt">&gt;</span>
                <span class="nt">&lt;p&gt;</span>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.<span class="nt">&lt;/p&gt;</span>
                <span class="nt">&lt;small</span> <span class="na">class=</span><span class="s">"text-muted"</span><span class="nt">&gt;</span>Last updated 3 mins ago<span class="nt">&lt;/small&gt;</span>
            <span class="nt">&lt;/bs-card-text&gt;</span>
        <span class="nt">&lt;/bs-card-body&gt;</span>
    <span class="nt">&lt;/bs-card&gt;</span>
    <span class="nt">&lt;bs-card</span> <span class="na">class=</span><span class="s">"bg-primary text-white text-center p-3"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;blockquote</span> <span class="na">class=</span><span class="s">"blockquote mb-0"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;p&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.<span class="nt">&lt;/p&gt;</span>
            <span class="nt">&lt;footer</span> <span class="na">class=</span><span class="s">"blockquote-footer"</span><span class="nt">&gt;</span>
                <span class="nt">&lt;small</span> <span class="na">class=</span><span class="s">"text-muted"</span><span class="nt">&gt;</span>
                    Someone famous in <span class="nt">&lt;cite</span> <span class="na">title=</span><span class="s">"Source Title"</span><span class="nt">&gt;</span>Source Title<span class="nt">&lt;/cite&gt;</span>
                <span class="nt">&lt;/small&gt;</span>
            <span class="nt">&lt;/footer&gt;</span>
        <span class="nt">&lt;/blockquote&gt;</span>
    <span class="nt">&lt;/bs-card&gt;</span>
    <span class="nt">&lt;bs-card</span> <span class="na">class=</span><span class="s">"text-center"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-card-body&gt;</span>
            <span class="nt">&lt;bs-card-title</span> <span class="na">slot=</span><span class="s">"card-title"</span><span class="nt">&gt;</span>
                <span class="nt">&lt;h5&gt;</span>Card title<span class="nt">&lt;/h5&gt;</span>
            <span class="nt">&lt;/bs-card-title&gt;</span>
            <span class="nt">&lt;bs-card-text</span> <span class="na">slot=</span><span class="s">"card-text"</span><span class="nt">&gt;</span>
                <span class="nt">&lt;p&gt;</span>This card has a regular title and short paragraphy of text below it.<span class="nt">&lt;/p&gt;</span>
                <span class="nt">&lt;p&gt;</span><span class="nt">&lt;small</span> <span class="na">class=</span><span class="s">"text-muted"</span><span class="nt">&gt;</span>
                    Last updated 3 mins ago
                <span class="nt">&lt;/small&gt;</span><span class="nt">&lt;/p&gt;</span>
            <span class="nt">&lt;/bs-card-text&gt;</span>
        <span class="nt">&lt;/bs-card-body&gt;</span>
    <span class="nt">&lt;/bs-card&gt;</span>
    <span class="nt">&lt;bs-card&gt;</span>
        <span class="nt">&lt;bs-card-img</span> <span class="na">position=</span><span class="s">"top"</span> <span class="na">slot=</span><span class="s">"top-image"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;img</span> <span class="na">src=</span><span class="s">"..."</span><span class="nt">&gt;</span><span class="nt">&lt;/img&gt;</span>
        <span class="nt">&lt;/bs-card-img&gt;</span>
    <span class="nt">&lt;/bs-card&gt;</span>
    <span class="nt">&lt;bs-card</span> <span class="na">class=</span><span class="s">"text-right p-3"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;blockquote</span> <span class="na">class=</span><span class="s">"blockquote mb-0"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;p&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.<span class="nt">&lt;/p&gt;</span>
            <span class="nt">&lt;footer</span> <span class="na">class=</span><span class="s">"blockquote-footer"</span><span class="nt">&gt;</span>
                <span class="nt">&lt;small</span> <span class="na">class=</span><span class="s">"text-muted"</span><span class="nt">&gt;</span>
                    Someone famous in <span class="nt">&lt;cite</span> <span class="na">title=</span><span class="s">"Source Title"</span><span class="nt">&gt;</span>Source Title<span class="nt">&lt;/cite&gt;</span>
                <span class="nt">&lt;/small&gt;</span>
            <span class="nt">&lt;/footer&gt;</span>
        <span class="nt">&lt;/blockquote&gt;</span>
    <span class="nt">&lt;/bs-card&gt;</span>
    <span class="nt">&lt;bs-card&gt;</span>
       <span class="nt">&lt;bs-card-title</span> <span class="na">slot=</span><span class="s">"card-title"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;h5&gt;</span>Card title<span class="nt">&lt;/h5&gt;</span>
        <span class="nt">&lt;/bs-card-title&gt;</span>
        <span class="nt">&lt;bs-card-text</span> <span class="na">slot=</span><span class="s">"card-text"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;p&gt;</span>This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.<span class="nt">&lt;/p&gt;</span>
            <span class="nt">&lt;p&gt;</span><span class="nt">&lt;small</span> <span class="na">class=</span><span class="s">"text-muted"</span><span class="nt">&gt;</span>
                Last updated 3 mins ago
            <span class="nt">&lt;/small&gt;</span><span class="nt">&lt;/p&gt;</span>
        <span class="nt">&lt;/bs-card-text&gt;</span>
    <span class="nt">&lt;/bs-card&gt;</span>
<span class="nt">&lt;/bs-card-columns&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('card-columns-example', CardColumnsExample);