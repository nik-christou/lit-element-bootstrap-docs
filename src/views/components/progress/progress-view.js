
import { LitElement, html } from 'lit-element';
import { BsDocsContentCss } from '../../../component/content/bs-docs-content-css';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

import './examples/progress-width-example';
import './examples/progress-label-example';
import './examples/progress-height-example';
import './examples/progress-backgrounds-example';
import './examples/progress-multiple-bars-example';
import './examples/progress-striped-example';
import './examples/progress-animated-stripes-example';

class ProgressView extends LitElement {
    
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
          
            <h1 class="bd-title" id="content">Progress</h1>
            
            <progress-width-example></progress-width-example>
          
            <h2>Labels</h2>
            
            <progress-label-example></progress-label-example>
            
            <h2>Height</h2>
            
            <progress-height-example></progress-height-example>
            
            <h2>Backgrounds</h2>
            
            <progress-backgrounds-example></progress-backgrounds-example>
           
            <h2>Multiple bars</h2>
            
            <progress-multiple-bars-example></progress-multiple-bars-example>
            
            <h2>Striped</h2>
            
            <progress-striped-example></progress-striped-example>
           
            <h2>Animated striped</h2>
            
            <progress-animated-striped-example></progress-animated-striped-example>
          
            <br />
            <br />
            <br />
        `;
    }
};

window.customElements.define('progress-view', ProgressView);