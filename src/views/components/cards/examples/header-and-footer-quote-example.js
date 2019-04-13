
import { LitElement } from 'lit-element';
import { BsSpacingCss } from 'lit-element-bootstrap/utilities';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';

import 'lit-element-bootstrap/components/button';
import 'lit-element-bootstrap/components/card';

class HeaderAndFooterQuoteExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsSpacingCss
        ];
    }
    
    _getExample() {
        return `
            <bs-card>
                <bs-card-header slot="card-header">Quote</bs-card-header>
                <bs-card-body>
                    <blockquote class="blockquote mb-0">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                    </blockquote>
                </bs-card-body>
            </bs-card>
        `;
    }
};

window.customElements.define('header-and-footer-quote-example', HeaderAndFooterQuoteExample);