
import { LitElement, html, css } from 'lit-element';
import { BsListGroupFlush, BsListGroupItem } from 'lit-element-bootstrap/components/list-group';
import { BsCard, BsCardImg, BsCardText, BsCardLink, BsCardLinks, BsCardBody, BsCardTitle, BsCardHeader, BsCardSubtitle, BsCardFooter } from 'lit-element-bootstrap/components/card';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class KitchenSinkExample extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsContentCodeCss,
            BsCodeSyntaxCss,
            css`
                bs-card {
                    width: 18rem;
                }
                
                bs-card-img {
                    height: 180px; 
                }
                
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
                
                <bs-card>
                    <bs-card-img position="top" slot="top-image">
                        <svg class="bd-placeholder-img" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Image cap"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
                    </bs-card-img>
                    <bs-card-body>
                        <bs-card-title slot="card-title">
                            <h5>Card title</h5>
                        </bs-card-title>
                        <bs-card-text slot="card-text">
                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </bs-card-text>
                    </bs-card-body>
                    <bs-list-group-flush>
                        <bs-list-group-item>Cras justo odio</bs-list-group-item>
                        <bs-list-group-item>Dapibus ac facilisis in</bs-list-group-item>
                        <bs-list-group-item>Morbi leo risus</bs-list-group-item>
                        <bs-list-group-item>Porta ac consectetur ac</bs-list-group-item>
                        <bs-list-group-item disabled>Vestibulum at eros</bs-list-group-item>
                    </bs-list-group-flush>
                    <bs-card-body>
                        <bs-card-links slot="card-links">
                            <bs-card-link label="Action1" target="https://www.google.com"></bs-card-link>
                            <bs-card-link label="Action2" target="https://www.google.com"></bs-card-link>
                            <bs-card-link label="Action3" target="https://www.google.com"></bs-card-link>
                        </bs-card-links>
                    </bs-card-body>
                </bs-card>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html"><span class="nt">&lt;bs-card&gt;</span> 
    <span class="nt">&lt;bs-card-img</span> <span class="na">position=</span><span class="s">"top"</span> <span class="na">slot=</span><span class="s">"top-image"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;img</span> <span class="na">src=</span><span class="s">"..."</span><span class="nt">&gt;</span><span class="nt">&lt;/img&gt;</span>
    <span class="nt">&lt;/bs-card-img&gt;</span>
    <span class="nt">&lt;bs-card-body&gt;</span>
        <span class="nt">&lt;bs-card-title</span> <span class="na">slot=</span><span class="s">"card-title"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;h5&gt;</span>Card title<span class="nt">&lt;/h5&gt;</span>
        <span class="nt">&lt;/bs-card-title&gt;</span>
    <span class="nt">&lt;/bs-card-body&gt;</span>
    <span class="nt">&lt;bs-list-group-flush&gt;</span>
        <span class="nt">&lt;bs-list-group-item&gt;</span>Cras justo odio<span class="nt">&lt;/bs-list-group-item&gt;</span>
        <span class="nt">&lt;bs-list-group-item&gt;</span>pibus ac facilisis in<span class="nt">&lt;/bs-list-group-item&gt;</span>
        <span class="nt">&lt;bs-list-group-item&gt;</span>Morbi leo risus<span class="nt">&lt;/bs-list-group-item&gt;</span>
        <span class="nt">&lt;bs-list-group-item&gt;</span>Porta ac consectetur ac<span class="nt">&lt;/bs-list-group-item&gt;</span>
        <span class="nt">&lt;bs-list-group-item</span> <span class="na">disabled</span><span class="nt">&gt;</span>Vestibulum at eros<span class="nt">&lt;/bs-list-group-item&gt;</span>
    <span class="nt">&lt;/bs-list-group-flush&gt;</span>
    <span class="nt">&lt;bs-card-body&gt;</span>
        <span class="nt">&lt;bs-card-links</span> <span class="na">slot=</span><span class="s">"card-links"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;bs-card-link</span> <span class="na">label=</span><span class="s">"Action1"</span> <span class="na">target=</span><span class="s">"https://www.google.com"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-card-link&gt;</span>
            <span class="nt">&lt;bs-card-link</span> <span class="na">label=</span><span class="s">"Action2"</span> <span class="na">target=</span><span class="s">"https://www.google.com"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-card-link&gt;</span>
            <span class="nt">&lt;bs-card-link</span> <span class="na">label=</span><span class="s">"Action3"</span> <span class="na">target=</span><span class="s">"https://www.google.com"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-card-link&gt;</span>
        <span class="nt">&lt;/bs-card-links&gt;</span>
    <span class="nt">&lt;/bs-card-body&gt;</span>    
<span class="nt">&lt;/bs-card&gt;</span></code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('kitchen-sink-example', KitchenSinkExample);