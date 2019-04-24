
import { LitElement, html,css } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { BsContentRebootCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';
import { BsDocsContentCss } from '../../component/content/bs-docs-content-css';
import { BsFlexOrderCss } from 'lit-element-bootstrap/utilities/flex/bs-flex-order-css';
import { PrismDefaultCss } from '../../component/example/prism-default-css';

import '../../component/example/bs-highlight';

import 'lit-element-bootstrap/layout/grid';
import 'lit-element-bootstrap/components/navs';

class GettingStartedView extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsDocsContentCss,
            BsFlexOrderCss,
            PrismDefaultCss,
            css`
                :host {
                    display: block;
                }
            `
        ];
    }
    
    render() {
        return html`
            
            <h1 class="bd-title" id="content">Getting Started</h1>
            
            <br />

            <h3>Introduction</h3>
            <p>lit-element-bootstrap is an implementation of Bootstrap CSS (v4.1.3) components using <a href="https://lit-element.polymer-project.org/">LitElement</a> with no dependency on jquery.
                Each component can be used individually and independently of the other components as well as the majority of the CSS code which is exported as css tagged template literals
                allowing for re-usability when developing new components.
            </p>

            <br />

            <h3>Installation</h3>
            <bs-highlight>
                <pre><code>${unsafeHTML(this._hightlightJavascript(
                    `npm install lit-element-bootstrap`
                ))}</code></pre>
            </bs-highlight>

            <br />

            <h3>How to import</h3>
            <p>
                In most cases it is preferabled to only import just the components that you use. 
                Once the component is loaded in the browser it is registered as a custom element and available to be used via its tag.
                The name of the component file usually matches the ES6 class and its tag. Take for example the alert component: 
                The file is named bs-alert.js, it exports the class BsAlert and it's registered tag is &lt;bs-alert&gt;. 
            </p>
            <bs-highlight>
                <pre><code>${unsafeHTML(this._hightlightJavascript(`
                    // e.g import only bs-alert
                    import 'lit-element-bootstrap/components/alert/bs-alert';

                    // e.g import all alert components
                    import 'lit-element-bootstrap/components/alert';

                    // e.g import all components (should be avoided)
                    import 'lit-element-bootstrap';

                `))}</code></pre>
            </bs-highlight>
            
            <br />

            <h3>Browser Compatibility</h3>
            <p>
                Since lit-element-bootstrap is build using LitElement it has the same compatibility. 
                All components are exported as ES6 classes and re-usable CSS is exported via the <a href="https://lit-element.polymer-project.org/guide/styles">css tagged template literal.</a> 
            </p>

        `;
    }

    // import 'lit-element-bootstrap/components/alert/';

    _hightlightJavascript(text) {

        const grammar = window.Prism.languages.javascript;
        const language = 'javascript';
        const normilazedText = window.Prism.plugins.NormalizeWhitespace.normalize(text);
        const hightlightedText = window.Prism.highlight(normilazedText, grammar, language);

        return hightlightedText;
    }
};

window.customElements.define('getting-started-view', GettingStartedView);