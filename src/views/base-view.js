
import '../component/example/bs-highlight.js';
import { PrismDefaultCss } from '../component/example/prism-default-css.js';

const BaseViewMixin = (superClass) => class extends superClass {

    static get styles() {
        return [
            PrismDefaultCss
        ];
    }

    _hightlightMarkup(text) {

        const grammar = window.Prism.languages.markup;
        const language = 'markup';
        const normilazedText = window.Prism.plugins.NormalizeWhitespace.normalize(text);
        const hightlightedText = window.Prism.highlight(normilazedText, grammar, language);

        return hightlightedText;
    }

    _hightlightJavascript(text) {

        const grammar = window.Prism.languages.javascript;
        const language = 'javascript';
        const normilazedText = window.Prism.plugins.NormalizeWhitespace.normalize(text);
        const hightlightedText = window.Prism.highlight(normilazedText, grammar, language);

        return hightlightedText;
    }
}

export { BaseViewMixin };