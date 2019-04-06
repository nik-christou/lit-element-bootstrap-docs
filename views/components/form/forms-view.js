
import { LitElement, html, css } from 'lit-element';
import { BsDocsContentCss } from '../../../component/content/bs-docs-content-css';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

import './examples/overview-example';
import './examples/form-controls-example';
import './examples/file-input-example';
import './examples/sizing-form-control-example';
import './examples/sizing-select-control-example';
import './examples/readonly-form-control-example';
import './examples/readonly-plaintext-example';
import './examples/readonly-inline-example';
import './examples/range-input-example';
import './examples/check-stacked-example';
import './examples/radio-stacked-example';
import './examples/check-inline-example';
import './examples/radio-inline-example';
import './examples/check-radio-static-example';
import './examples/form-groups-example';
import './examples/form-grid-example';
import './examples/form-row-example';
import './examples/form-grid-complex-example';
import './examples/horizontal-form-example';
import './examples/horizontal-form-sizing-example';
import './examples/column-sizing-example';
import './examples/column-auto-sizing-example';
import './examples/inline-form-example';
import './examples/help-text-example';
import './examples/help-text-inline-example';
import './examples/disabled-forms-example';

class FormsView extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsDocsContentCss,
            BsContentCodeCss,
            css`
                bs-form-group ~ bs-form-check-group {
                    margin-bottom: 1rem;
                }
        
                bs-callout+bs-callout {
                    margin-top: -0.25rem;
                }
            `
        ];
    }
    
    render() {
        return html`
        
            <h1 class="bd-title" id="content">Forms</h1>
            
            <overview-example></overview-example>
           
            <h2>Form controls</h2>
            
            <form-controls-example></form-controls-example>
            
            <file-input-example></file-input-example>
            
            <h4>Sizing</h4>
            
            <sizing-form-control-example></sizing-form-control-example>
          
            <br />
            <sizing-select-control-example></sizing-select-control-example>
        
            <br />
            
            <h4>Readonly</h4>
        
            <readonly-form-control-example></readonly-form-control-example>
            
            <br />
          
            <h4>Readonly plain text</h4>
            
            <readonly-plaintext-example></readonly-plaintext-example>
            
            <readonly-inline-example></readonly-inline-example>
           
            <br />
            
            <h4>Range Inputs</h4>
            
            <range-input-example></range-input-example>
            
            <br />
        
            <h4>Checkboxes and radios</h4>

            <br />
            <br />
        
            <h4>Default (stacked)</h4>
            
            <check-stacked-example></check-stacked-example>

            <radio-stacked-example></radio-stacked-example>
            
            <br />
            
            <h4>Inline</h4>
            
            <check-inline-example></check-inline-example>
            
            <radio-inline-example></radio-inline-example>
            
            <br />
            
            <h4>Without labels</h4>
            
            <check-radio-static-example></check-radio-static-example>
            
            <br />
            
            <h4>Form groups</h4>
            
            <form-groups-example></form-groups-example>
            
            <br />
        
            <h4>Form grid</h4>
            
            <form-grid-example></form-grid-example>
            
            <br />
        
            <h4>Form row</h4>
            
            <form-row-example></form-row-example>
            
            <br />
            <form-grid-complex-example></form-grid-complex-example>
            
            <br />
            
            <h4>Horizontal form</h4>
            
            <horizontal-form-example></horizontal-form-example>
            
            <br />
        
            <h4>Horizontal form label sizing</h4>
            
            <horizontal-form-sizing-example></horizontal-form-sizing-example>
            
            <br />
            
            <h4>Column sizing</h4>
            
            <column-sizing-example></column-sizing-example>
            
            <br />
            
            <h4>Auto-sizing</h4>
            
            <column-auto-sizing-example></column-auto-sizing-example>
            
            <br />
            
            <h3 style="color:red;">Custom control example here</h3>
                
            <br />
            
            <h4>Inline forms</h4>
            
            <inline-form-example></inline-form-example>
            
            <br />

            <h4>Help text</h4>
            
            <help-text-example></help-text-example>
    
            <br />
        
            <help-text-inline-example></help-text-inline-example>
            
            <br />
           
            <h4>Disabled forms</h4>
            
            <disabled-forms-example></disabled-forms-example>
        
            <br />
            <br />
            <br />
        `;
    }
};

window.customElements.define('forms-view', FormsView);