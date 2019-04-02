
import { LitElement, css } from 'lit-element';
import { BsTextColorCss, BsSpacingCss, BsBackgroundColorsCss } from 'lit-element-bootstrap/utilities';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';

import 'lit-element-bootstrap/components/card';

class CardColumnsExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
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

    _getExample() {
        return `
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
        `;
    }
};

window.customElements.define('card-columns-example', CardColumnsExample);