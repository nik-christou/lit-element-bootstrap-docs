
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';

import 'lit-element-bootstrap/components/alert';

class LinkColorExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <bs-alert primary>
                <div slot="message">A simple primary alert with <bs-alert-link primary>an example link</bs-alert-link>. Give it a click if you like.</div>
            </bs-alert>

            <bs-alert secondary>
                <div slot="message">A simple primary alert with <bs-alert-link secondary>an example link</bs-alert-link>. Give it a click if you like.</div>
            </bs-alert>

            <bs-alert success>
                <div slot="message">A simple primary alert with <bs-alert-link success>an example link</bs-alert-link>. Give it a click if you like.</div>
            </bs-alert>

            <bs-alert danger>
                <div slot="message">A simple primary alert with <bs-alert-link danger>an example link</bs-alert-link>. Give it a click if you like.</div>
            </bs-alert>

            <bs-alert warning>
                <div slot="message">A simple primary alert with <bs-alert-link warning>an example link</bs-alert-link>. Give it a click if you like.</div>
            </bs-alert>
            
            <bs-alert info>
                <div slot="message">A simple primary alert with <bs-alert-link info>an example link</bs-alert-link>. Give it a click if you like.</div>
            </bs-alert>

            <bs-alert light>
                <div slot="message">A simple primary alert with <bs-alert-link light>an example link</bs-alert-link>. Give it a click if you like.</div>
            </bs-alert>
            
            <bs-alert dark>
                <div slot="message">A simple primary alert with <bs-alert-link dark>an example link</bs-alert-link>. Give it a click if you like.</div>
            </bs-alert>
        `;
    }
};

window.customElements.define('link-color-example', LinkColorExample);