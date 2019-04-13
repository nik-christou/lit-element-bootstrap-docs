
import { LitElement } from 'lit-element';
import { BsExampleMixin } from '../../../../component/example/bs-example-mixin';

import 'lit-element-bootstrap/components/button';
import 'lit-element-bootstrap/components/progress';

class ProgressAnimatedStripedExample extends BsExampleMixin(LitElement) {
    
    _getExample() {
        return `
            <p>
                <bs-progress>
                    <bs-progress-bar striped completed="75"></bs-progress-bar>
                </bs-progress>
            </p>

            <bs-button toggle secondary>Toggle animation</bs-button>
        `;
    }
    
    firstUpdated() {
        this.addEventListener('bs-button-click', () => this._toggleAnimation());
    }
    
    _toggleAnimation() {
        
        const progressBarElement = this.shadowRoot.querySelector('bs-progress-bar');
        
        if(progressBarElement.hasAttribute('animated')) {
            progressBarElement.removeAttribute('animated');
        } else {
            progressBarElement.setAttribute('animated', '');
        }
    }
};

window.customElements.define('progress-animated-striped-example', ProgressAnimatedStripedExample);