
import { LitElement, css } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import 'lit-element-bootstrap/components/breadcrumb';

class BreadcrumbsSeparatorExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            css`
                bs-breadcrumb.arrowSeparator {
                    --breadcrumb-divider: ">";
                }
        
                bs-breadcrumb.svgSeparator {
                    --breadcrumb-divider: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxwYXRoIGQ9Ik0yLjUgMEwxIDEuNSAzLjUgNCAxIDYuNSAyLjUgOGw0LTQtNC00eiIgZmlsbD0iY3VycmVudENvbG9yIi8+PC9zdmc+);
                }
            `
        ];
    }

    _getExample() {
        return `

            <style>
                bs-breadcrumb.arrowSeparator {
                    --breadcrumb-divider: ">";
                }
                    
                bs-breadcrumb.svgSeparator {
                    --breadcrumb-divider: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxwYXRoIGQ9Ik0yLjUgMEwxIDEuNSAzLjUgNCAxIDYuNSAyLjUgOGw0LTQtNC00eiIgZmlsbD0iY3VycmVudENvbG9yIi8+PC9zdmc+);
                }
            </style>

            <bs-breadcrumb class="arrowSeparator">
                <bs-breadcrumb-item title="Home" href="/home"></bs-breadcrumb-item>
                <bs-breadcrumb-item title="Library" href="/library" active></bs-breadcrumb-item>
            </bs-breadcrumb>

            <bs-breadcrumb class="svgSeparator">
                <bs-breadcrumb-item title="Home" href="/home"></bs-breadcrumb-item>
                <bs-breadcrumb-item title="Library" href="/library" active></bs-breadcrumb-item>
            </bs-breadcrumb>
        `;
    }
};

window.customElements.define('breadcrumbs-separator-example', BreadcrumbsSeparatorExample);