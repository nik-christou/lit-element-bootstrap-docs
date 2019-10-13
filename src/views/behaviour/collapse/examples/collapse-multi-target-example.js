
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin.js';
import { BsCollapseMixin} from '@lit-element-bootstrap/collapse';

import '@lit-element-bootstrap/layout';
import '@lit-element-bootstrap/card';
import '@lit-element-bootstrap/button';
import '@lit-element-bootstrap/collapse';

export class CollapseMultiTargetExample extends BsExampleMixin(BsCollapseMixin(LitElement)) {
    
    _getExample() {
        return `
            <p>
                <bs-collapse-toggle target="multiCollapseExample1">
                    <bs-link-button primary>Toggle first element</bs-link-button>
                </bs-collapse-toggle>
                <bs-collapse-toggle target="multiCollapseExample2">
                    <bs-button primary>Toggle second element</bs-button>
                </bs-collapse-toggle>
                <bs-collapse-multi-toggle multitarget="multi-collapse">
                    <bs-button primary>Toggle both elements</bs-button>
                </bs-collapse-multi-toggle>
            </p>

            <bs-row>
                <bs-column xs>
                    <bs-collapsable expanded id="multiCollapseExample1" class="multi-collapse">
                        <bs-card>
                            <bs-card-body>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                            </bs-card-body>
                        </bs-card>
                    </bs-collapsable>
                </bs-column>
                <bs-column xs>
                    <bs-collapsable expanded id="multiCollapseExample2" class="multi-collapse">
                        <bs-card>
                            <bs-card-body>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                            </bs-card-body>
                        </bs-card>
                    </bs-collapsable>
                </bs-column>
            </bs-row>
        `;
    }
};

window.customElements.define('collapse-multi-target-example', CollapseMultiTargetExample);