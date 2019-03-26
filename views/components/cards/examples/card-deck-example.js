
import { LitElement, html, css } from 'lit-element';
import { BsTextColorCss } from 'lit-element-bootstrap/utilities';
import { BsCard, BsCardImg, BsCardText, BsCardDeck, BsCardBody } from 'lit-element-bootstrap/components/card';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class CardDeckExample extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsContentCodeCss,
            BsCodeSyntaxCss,
            BsTextColorCss,
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
                
                <bs-card-deck>
                    <bs-card>
                        <bs-card-img position="top" slot="top-image">
                            <svg class="bd-placeholder-img" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Image cap"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
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
                    <bs-card>
                        <bs-card-img position="top" slot="top-image">
                            <svg class="bd-placeholder-img" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Image cap"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
                        </bs-card-img>
                        <bs-card-body>
                            <bs-card-title slot="card-title">
                                <h5>Card title</h5>
                            </bs-card-title>
                            <bs-card-text slot="card-text">
                                <p>This card has supporting text below as a natural lead-in to additional content.</p>
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </bs-card-text>
                        </bs-card-body>
                    </bs-card>
                    <bs-card>
                        <bs-card-img position="top" slot="top-image">
                            <svg class="bd-placeholder-img" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Image cap"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
                        </bs-card-img>
                        <bs-card-body>
                            <bs-card-title slot="card-title">
                                <h5>Card title</h5>
                            </bs-card-title>
                            <bs-card-text slot="card-text">
                                <p>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </bs-card-text>
                        </bs-card-body>
                    </bs-card>
                </bs-card-deck>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-card-deck&gt;</span>
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
    <span class="nt">&lt;bs-card&gt;</span>
        <span class="nt">&lt;bs-card-img</span> <span class="na">position=</span><span class="s">"top"</span> <span class="na">slot=</span><span class="s">"top-image"</span> <span class="na">img-src=</span><span class="s">"/img/card-deck-example.svg"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-card-img&gt;</span>
        <span class="nt">&lt;bs-card-body&gt;</span>
            <span class="nt">&lt;bs-card-title</span> <span class="na">slot=</span><span class="s">"card-title"</span><span class="nt">&gt;</span>
                <span class="nt">&lt;h5&gt;</span>Card title<span class="nt">&lt;/h5&gt;</span>
            <span class="nt">&lt;/bs-card-title&gt;</span>
            <span class="nt">&lt;bs-card-text</span> <span class="na">slot=</span><span class="s">"card-text"</span><span class="nt">&gt;</span>
                <span class="nt">&lt;p&gt;</span>This card has supporting text below as a natural lead-in to additional content.<span class="nt">&lt;/p&gt;</span>
                <span class="nt">&lt;small</span> <span class="na">class=</span><span class="s">"text-muted"</span><span class="nt">&gt;</span>Last updated 3 mins ago<span class="nt">&lt;/small&gt;</span>
            <span class="nt">&lt;/bs-card-text&gt;</span>
        <span class="nt">&lt;/bs-card-body&gt;</span>
    <span class="nt">&lt;/bs-card&gt;</span>
    <span class="nt">&lt;bs-card&gt;</span>
        <span class="nt">&lt;bs-card-img</span> <span class="na">position=</span><span class="s">"top"</span> <span class="na">slot=</span><span class="s">"top-image"</span> <span class="na">img-src=</span><span class="s">"/img/card-deck-example.svg"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-card-img&gt;</span>
        <span class="nt">&lt;bs-card-body&gt;</span>
            <span class="nt">&lt;bs-card-title</span> <span class="na">slot=</span><span class="s">"card-title"</span><span class="nt">&gt;</span>
                <span class="nt">&lt;h5&gt;</span>Card title<span class="nt">&lt;/h5&gt;</span>
            <span class="nt">&lt;/bs-card-title&gt;</span>
            <span class="nt">&lt;bs-card-text</span> <span class="na">slot=</span><span class="s">"card-text"</span><span class="nt">&gt;</span>
                <span class="nt">&lt;p&gt;</span>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.<span class="nt">&lt;/p&gt;</span>
                <span class="nt">&lt;small</span> <span class="na">class=</span><span class="s">"text-muted"</span><span class="nt">&gt;</span>Last updated 3 mins ago<span class="nt">&lt;/small&gt;</span>
            <span class="nt">&lt;/bs-card-text&gt;</span>
        <span class="nt">&lt;/bs-card-body&gt;</span>
    <span class="nt">&lt;/bs-card&gt;</span>
<span class="nt">&lt;bs-card-deck&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('card-deck-example', CardDeckExample);