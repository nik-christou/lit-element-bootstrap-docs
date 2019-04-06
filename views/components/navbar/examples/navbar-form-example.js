
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';
import { BsSpacingCss, BsBackgroundColorsCss } from 'lit-element-bootstrap/utilities';

import 'lit-element-bootstrap/components/form';
import 'lit-element-bootstrap/components/navbar';
import 'lit-element-bootstrap/components/button';

class NavbarFormExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsBackgroundColorsCss,
            BsSpacingCss
        ];
    }
    
    _getExample() {
        return `
            <bs-navbar navbar-light expand-lg class="bg-light">
                <bs-form inline>
                    <bs-form-input class="mr-sm-2" type="search" placeholder="Search"></bs-form-input>
                    <bs-button class="my-2 my-sm-0" outline-success action="submit">Search</bs-button>
                </bs-form>
            </bs-navbar> 
        `;
    }
};

window.customElements.define('navbar-form-example', NavbarFormExample);