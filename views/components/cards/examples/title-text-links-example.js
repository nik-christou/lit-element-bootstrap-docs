
import { LitElement, css } from 'lit-element';
import { BsTextColorCss, BsSpacingCss } from 'lit-element-bootstrap/utilities';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';

import 'lit-element-bootstrap/components/card';

class TitleTextLinksExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsSpacingCss,
            BsTextColorCss,
            css`
                bs-card {
                    width: 18rem;
                }
            `
        ]; 
    }

    _getExample() {
        return `
            <bs-card>
                <bs-card-body>
                    <bs-card-title slot="card-title">
                        <h5>Card title</h5>
                    </bs-card-title>
                    <bs-card-subtitle slot="card-subtitle">
                        <h6 class="mb-2 text-muted">Card subtitle</h6>
                    </bs-card-subtitle>
                    <bs-card-text slot="card-text">
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </bs-card-text>
                    <bs-card-links slot="card-links">
                        <bs-card-link label="Card link"></bs-card-link>
                        <bs-card-link label="Another link"></bs-card-link>
                    </bs-card-links>
                </bs-card-body>
            </bs-card> 
        `;
    }
};

window.customElements.define('title-text-links-example', TitleTextLinksExample);