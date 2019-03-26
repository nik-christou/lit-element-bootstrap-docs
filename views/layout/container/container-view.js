
import { LitElement, html } from 'lit-element';
import { BsDocsContentCss } from '../../../component/content/bs-docs-content-css';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

import './examples/container-example';
import './examples/container-fluid-example';

class ContainerView extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsDocsContentCss,
            BsContentCodeCss
        ];
    }
    
    render() {
        return html`
            
            <h1 class="bd-title" id="content">Container</h1>
        
            <p class="bd-lead">Containers are the most basic layout element in Bootstrap and are <strong>required when using our default grid system</strong>. Choose from a responsive, fixed-width container (meaning its <code class="highlighter-rouge">max-width</code> changes at each breakpoint) or fluid-width (meaning it’s <code class="highlighter-rouge">100%</code> wide all the time).</p>
            
            <p>While containers <em>can</em> be nested, most layouts do not require a nested container.</p>
            
            <container-example></container-example>
            
            <p>Use <code class="highlighter-rouge">.container-fluid</code> for a full width container, spanning the entire width of the viewport.</p>
            
            <container-fluid-example></container-fluid-example>
            
            <br />
            <br />
            <br />
        `;
    }
};

window.customElements.define('container-view', ContainerView);