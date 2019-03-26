
import { LitElement, html } from 'lit-element';
import { BsButton } from 'lit-element-bootstrap/components/button';
import { BsProgress, BsProgressBar } from 'lit-element-bootstrap/components/progress';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class ProgressAnimatedStripedExample extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsContentCodeCss,
            BsCodeSyntaxCss
        ];
    }

    render() {
        return html`
            
            <bs-example>
                
                <p>
                    <bs-progress>
                        <bs-progress-bar striped completed="75"></bs-progress-bar>
                    </bs-progress>
                </p>
                
                <bs-button toggle secondary>Toggle animation</bs-button>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-progress&gt;</span>
    <span class="nt">&lt;bs-progress-bar</span> <span class="na">striped</span> <span class="na">animated</span> <span class="na">percent-completed=</span><span class="s">"5"</span><span class="nt">&gt;</span><span class="nt">&lt;/bs-progress-bar&gt;</span>
<span class="nt">&lt;bs-progress&gt;</span>
</code></pre></bs-highlight>
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