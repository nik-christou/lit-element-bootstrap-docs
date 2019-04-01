
import { html } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

// import prismjs global in window 
import 'prismjs/components/prism-core.js';
import { PrismDefaultCss } from './prism-default-css';

import './bs-example';
import './bs-highlight';
import 'prismjs/components/prism-markup';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';

const BsExampleMixin = (superClass) => class extends superClass {

    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsContentCodeCss,
            PrismDefaultCss
        ];
    };

    _getExampleHighlighted() {

        const text = this._getExample();
        const grammar = window.Prism.languages.markup;
        const language = 'markup';
        const normilazedText = window.Prism.plugins.NormalizeWhitespace.normalize(text);
        const hightlightedText = window.Prism.highlight(normilazedText, grammar, language);

        return hightlightedText;
    }

    render() {
        return html`
            <bs-example>${unsafeHTML(this._getExample())}</bs-example>
            <bs-highlight>
                <pre><code>${unsafeHTML(this._getExampleHighlighted())}</code></pre>
            </bs-highlight>
        `;
    }
};

export { BsExampleMixin };