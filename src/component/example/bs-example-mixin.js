
import { html, css } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from '@lit-element-bootstrap/content';
import { PrismDefaultCss } from './prism-default.css.js';

import './bs-example.js';
import './bs-highlight.js';

const BsExampleMixin = (superClass) => class extends superClass {

    static get properties() {
        return {
            _isExampleTemplate: Boolean
        };
    }

    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsContentCodeCss,
            PrismDefaultCss,
            css`
                bs-example {
                    margin-top: 1rem;
                    --example-border-radius: 8px 8px 0px 0px;
                }

                bs-highlight {
                    --highlight-border-radius: 0px 0px 8px 8px;
                }
            `
        ];
    };

    constructor() {
        super();
        this._isExampleTemplate = false;
    }

    _getHighlightedExample() {
        return this._getExample();
    }

    _getExampleHighlighted() {

        const text = this._getHighlightedExample();
        const grammar = window.Prism.languages.markup;
        const language = 'markup';
        const normilazedText = window.Prism.plugins.NormalizeWhitespace.normalize(text);
        const hightlightedText = window.Prism.highlight(normilazedText, grammar, language);

        return hightlightedText;
    }

    render() {
        return html`
            <bs-example>
                ${this._isExampleTemplate
                    ? this._getExample()
                    : unsafeHTML(this._getExample())
                }
            </bs-example>
            <bs-highlight>
                <pre><code>${unsafeHTML(this._getExampleHighlighted())}</code></pre>
            </bs-highlight>
        `;
    }
};

export { BsExampleMixin };