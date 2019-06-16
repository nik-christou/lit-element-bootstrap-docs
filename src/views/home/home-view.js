
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';
import { BsTextCss, BsTextColorCss, BsSpacingCss, BsDisplayCss } from 'lit-element-bootstrap/utilities';
import { BsFlexDisplayCss, BsFlexJustifyCss, BsFlexWrapCss, BsFlexAlignContentCss, BsFlexDirectionCss, BsFlexOrderCss } from 'lit-element-bootstrap/utilities/flex';

import 'lit-element-bootstrap/layout/grid';
import 'lit-element-bootstrap/components/button/bs-link-button';
import 'lit-element-bootstrap/components/jumbotron/bs-jumbotron'; 

class HomeView extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsTextCss,
            BsTextColorCss,
            BsDisplayCss,
            BsFlexWrapCss,
            BsFlexOrderCss,
            BsFlexDisplayCss,
            BsFlexDirectionCss,
            BsFlexJustifyCss,
            BsSpacingCss,
            BsFlexAlignContentCss,
            css`
                bs-jumbotron {
                    margin-top: 15px;
                }

                div#jumbotron-buttons {
                    margin-bottom: 20px;
                }

                div#jumbotron-buttons bs-link-button {
                    margin-right: 20px;
                }
            `
        ];
    }
    
    render() {
        return html`

            <bs-row>
                <bs-column xs-12>
                    <bs-jumbotron class="text-center">
                        <h1>lit-element-bootstrap</h1>    
                        <p class="lead">Combine the world's most popular front-end CSS - Bootstrap 4 - with the simplicity of LitElement.</p>
                        <br />
                        <div id="jumbotron-buttons">
                            <bs-link-button outline-primary large href="/getting-started">Get started</bs-link-button>
                            <bs-link-button outline-secondary large href="https://github.com/nik-christou/lit-element-bootstrap" target="_black">Github</bs-link-button>
                        </div>
                        <p class="text-muted">Current version: 1.0.0-alpha.13</p>
                    </bs-jumbotron>
                </bs-column>
            </bs-row>

            <bs-row>
                <bs-column md-4>
                    <div>
                        <h2 class="text-muted">Components</h2>
                        <p class="text-justify">
                            All components are independent ES6 classes and can be imported individually. There is no dependency 
                            to JQuery and thanks to <a href="https://www.webcomponents.org/specs">WebComponents</a> they can be used in 
                            <a href="https://reactjs.org/docs/web-components.html">React</a>, 
                            <a href="https://angular.io/guide/elements">Angular</a>, 
                            <a href="https://vuejsdevelopers.com/2018/05/21/vue-js-web-component/">VueJs</a> or any other framework.
                        </p>
                    </div>
                </bs-column>
                <bs-column md-4>
                    <div>
                        <h2 class="text-muted">CSS template literals</h2>
                        <p class="text-justify">
                            Bootstrap CSS utility classes as well as styles for almost all components
                            are exported as <a href="https://lit-element.polymer-project.org/guide/styles">css tagged template literals</a>. 
                            This allows you to re-use the same bootstrap css code when designing your own LitElement based components.
                        </p>
                    </div>
                </bs-column>
                <bs-column md-4>
                    <div>
                        <h2 class="text-muted">Extensibility</h2>
                        <p class="text-justify">
                            Most components expose template placeholders with <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot">&lt;slot&gt;</a>. 
                            Use the provided elements or slot-in your own. You can also extend from the given elements and inherit/ovveride the styles and/or behaviour.
                        </p>
                    </div>
                </bs-column>
            </bs-row>
        `;
    }
};

window.customElements.define('home-view', HomeView);