
import { LitElement } from 'lit-element';
import { BsSpacingCss } from 'lit-element-bootstrap/utilities';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';

import 'lit-element-bootstrap/components/card';
import 'lit-element-bootstrap/components/button';
import 'lit-element-bootstrap/behaviour/collapse';

export class CollapseAccordionExample extends BsExampleMixin(LitElement) {
    
    static get styles() {
        return [
            super.styles,
            BsSpacingCss
        ];
    }
    
    _getExample() {
        return `
            <bs-accordion>
                <bs-card>
                    <bs-card-header slot="card-header">
                        <bs-collapse-toggle target="collapseOne">
                            <h5 class="mb-0">
                                <bs-button link>Collapsible Group Item #1</bs-button>
                            </h5>
                        </bs-collapse-toggle>
                    </bs-card-header>
                    <bs-collapsable collapsed id="collapseOne">
                        <bs-card-body>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </bs-card-body>
                    </bs-collapsable>
                </bs-card>
                <bs-card>
                    <bs-card-header slot="card-header">
                        <bs-collapse-toggle target="collapseTwo">
                            <h5 class="mb-0">
                                <bs-button link>Collapsible Group Item #2</bs-button>
                            </h5>
                        </bs-collapse-toggle>
                    </bs-card-header>
                    <bs-collapsable collapsed id="collapseTwo">
                        <bs-card-body>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </bs-card-body>
                    </bs-collapsable>
                </bs-card>
                <bs-card>
                    <bs-card-header slot="card-header">
                        <bs-collapse-toggle target="collapseThree">
                            <h5 class="mb-0">
                                <bs-button link>Collapsible Group Item #3</bs-button>
                            </h5>
                        </bs-collapse-toggle>
                    </bs-card-header>
                    <bs-collapsable collapsed id="collapseThree">
                        <bs-card-body>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </bs-card-body>
                    </bs-collapsable>
                </bs-card>
            </bs-accordion>
        `;
    }
};

window.customElements.define('collapse-accordion-example', CollapseAccordionExample);