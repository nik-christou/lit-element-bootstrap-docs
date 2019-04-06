
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';
import { BsCollapseMixin} from 'lit-element-bootstrap/behaviour/collapse';

import 'lit-element-bootstrap/components/card';
import 'lit-element-bootstrap/components/button';
import 'lit-element-bootstrap/behaviour/collapse';

export class CollapseSingleTargetExample extends BsExampleMixin(BsCollapseMixin(LitElement)) {
    
    _getExample() {
        return `
            <p>
                <bs-collapse-toggle target="collapseExample">
                    <bs-link-button primary>Link</bs-link-button>
                    <bs-button primary>Button</bs-button>
                </bs-collapse-toggle>
            </p>
            <bs-collapsable collapsed id="collapseExample">
                <bs-card>
                    <bs-card-body>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    </bs-card-body>
                </bs-card>
            </bs-collapsable>
        `;
    }
};

window.customElements.define('collapse-single-target-example', CollapseSingleTargetExample);