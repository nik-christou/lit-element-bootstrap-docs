
import { LitElement, html, css } from 'lit-element';
import { BsSizingCss, BsDisplayCss } from 'lit-element-bootstrap/utilities';
import { BsCarousel, BsCarouselItem, BsCarouselControlNext, BsCarouselControlPrev, BsCarouselCaption, BsCarouselIndicator, BsCarouselIndicators } from 'lit-element-bootstrap/components/carousel';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class SlidesWithCaptionsExample extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsContentCodeCss,
            BsCodeSyntaxCss,
            BsDisplayCss,
            BsSizingCss,
            css`
                .bd-placeholder-img {
                    font-size: 1.125rem;
                    text-anchor: middle;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                }
                
                .bd-placeholder-img-lg {
                    font-size: 3.5rem;
                }
            `
        ];
    }
    
    render() {
        return html`
            
            <bs-example>
            
                <bs-carousel>
                    <bs-carousel-indicators slot="indicators">
                        <bs-carousel-indicator index="0" active></bs-carousel-indicator>
                        <bs-carousel-indicator index="1"></bs-carousel-indicator>
                        <bs-carousel-indicator index="2"></bs-carousel-indicator>
                    </bs-carousel-indicators>
                    <bs-carousel-item active>
                        <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: First slide"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#555" dy=".3em">First slide</text></svg>
                        <bs-carousel-caption slot="caption">
                            <div class="d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </div>
                        </bs-carousel-caption>
                    </bs-carousel-item>
                    <bs-carousel-item>
                        <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Second slide"><title>Placeholder</title><rect width="100%" height="100%" fill="#666"></rect><text x="50%" y="50%" fill="#444" dy=".3em">Second slide</text></svg>
                        <bs-carousel-caption slot="caption">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </bs-carousel-caption>
                    </bs-carousel-item>
                    <bs-carousel-item>
                        <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Third slide"><title>Placeholder</title><rect width="100%" height="100%" fill="#555"></rect><text x="50%" y="50%" fill="#333" dy=".3em">Third slide</text></svg>
                        <bs-carousel-caption slot="caption">
                            <div class="d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </div>
                        </bs-carousel-caption>
                    </bs-carousel-item>
                    <bs-carousel-control-prev slot="control-prev"></bs-carousel-control-prev>
                    <bs-carousel-control-next slot="control-next"></bs-carousel-control-next>
                </bs-carousel>
            
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html"><span class="nt">&lt;bs-carousel&gt;</span>
    <span class="nt">&lt;bs-carousel-indicators&gt;</span>
        <span class="nt">&lt;bs-carousel-indicator</span> <span class="na">index</span><span class="s">"0"</span> <span class="na">active</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-carousel-indicator</span> <span class="na">index</span><span class="s">"1"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-carousel-indicator</span> <span class="na">index</span><span class="s">"2"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;/bs-carousel-indicators&gt;</span>
    <span class="nt">&lt;bs-carousel-item</span> <span class="na">active</span><span class="nt">&gt;</span>
        <span class="nt">&lt;img</span> <span class="na">class=</span><span class="s">"d-block w-100"</span> <span class="na">src=</span><span class="s">"/img/first-slide.svg"</span><span class="nt">/&gt;</span>
        <span class="nt">&lt;bs-carousel-caption</span> <span class="na">slot=</span><span class="s">"caption"</span> <span class="nt">&gt;</span>
            <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"d-none d-md-block"</span> <span class="nt">&gt;</span>
                <span class="nt">&lt;h5&gt;</span>First slide label<span class="nt">&lt;/h5&gt;</span>
                <span class="nt">&lt;p&gt;</span>Nulla vitae elit libero, a pharetra augue mollis interdum.<span class="nt">&lt;/p&gt;</span>
            <span class="nt">&lt;/div&gt;</span>
        <span class="nt">&lt;/bs-carousel-caption&gt;</span>
    <span class="nt">&lt;/bs-carousel-item&gt;</span>
    <span class="nt">&lt;bs-carousel-item&gt;</span>
        <span class="nt">&lt;img</span> <span class="na">class=</span><span class="s">"d-block w-100"</span> <span class="na">src=</span><span class="s">"/img/second-slide.svg"</span><span class="nt">/&gt;</span>
        <span class="nt">&lt;bs-carousel-caption</span> <span class="na">slot=</span><span class="s">"caption"</span> <span class="nt">&gt;</span>
            <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"d-none d-md-block"</span> <span class="nt">&gt;</span>
                <span class="nt">&lt;h5&gt;</span>Second slide label<span class="nt">&lt;/h5&gt;</span>
                <span class="nt">&lt;p&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<span class="nt">&lt;/p&gt;</span>
            <span class="nt">&lt;/div&gt;</span>
        <span class="nt">&lt;/bs-carousel-caption&gt;</span>
    <span class="nt">&lt;/bs-carousel-item&gt;</span>
    <span class="nt">&lt;bs-carousel-item&gt;</span>
        <span class="nt">&lt;img</span> <span class="na">class=</span><span class="s">"d-block w-100"</span> <span class="na">src=</span><span class="s">"/img/third-slide.svg"</span><span class="nt">/&gt;</span>
        <span class="nt">&lt;bs-carousel-caption</span> <span class="na">slot=</span><span class="s">"caption"</span> <span class="nt">&gt;</span>
            <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"d-none d-md-block"</span> <span class="nt">&gt;</span>
                <span class="nt">&lt;h5&gt;</span>Third slide label<span class="nt">&lt;/h5&gt;</span>
                <span class="nt">&lt;p&gt;</span>Praesent commodo cursus magna, vel scelerisque nisl consectetur.<span class="nt">&lt;/p&gt;</span>
            <span class="nt">&lt;/div&gt;</span>
        <span class="nt">&lt;/bs-carousel-caption&gt;</span>
    <span class="nt">&lt;/bs-carousel-item&gt;</span>
    <span class="nt">&lt;bs-carousel-control-prev</span> <span class="na">slot=</span><span class="s">"control-prev"</span><span class="nt">&lt;/bs-carousel-control-prev&gt;</span>
    <span class="nt">&lt;bs-carousel-control-next</span> <span class="na">slot=</span><span class="s">"control-next"</span><span class="nt">&lt;/bs-carousel-control-next&gt;</span>
<span class="nt">&lt;/bs-carousel&gt;</span></code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('slides-with-captions-example', SlidesWithCaptionsExample);