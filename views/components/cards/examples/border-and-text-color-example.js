
import { LitElement, html, css } from 'lit-element';
import { BsCard, BsCardBody, BsCardHeader } from 'lit-element-bootstrap/components/card';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsTextColorCss, BsSpacingCss, BsBordersCss } from 'lit-element-bootstrap/utilities';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class BorderAndTextColorExample extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsContentCodeCss,
            BsCodeSyntaxCss,
            BsTextColorCss,
            BsBordersCss,
            BsSpacingCss,
            css`
                bs-card {
                    max-width: 18rem;
                }
            `
        ];
    }
    
    render() {
        return html`
            
            <bs-example>
                
                <bs-card class="border-primary mb-3">
                    <bs-card-header slot="card-header">Header</bs-card-header>
                    <bs-card-body class="text-primary">
                        <bs-card-title slot="card-title">
                            <h5>Primary card title</h5>
                        </bs-card-title>
                        <bs-card-text slot="card-text">
                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </bs-card-text>
                    </bs-card-body>
                </bs-card>
        
                <bs-card class="border-secondary mb-3">
                    <bs-card-header slot="card-header">Header</bs-card-header>
                    <bs-card-body class="text-secondary">
                        <bs-card-title slot="card-title">
                            <h5>Primary card title</h5>
                        </bs-card-title>
                        <bs-card-text slot="card-text">
                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </bs-card-text>
                    </bs-card-body>
                </bs-card>
        
                <bs-card class="border-success mb-3">
                    <bs-card-header slot="card-header">Header</bs-card-header>
                    <bs-card-body class="text-success">
                        <bs-card-title slot="card-title">
                            <h5>Primary card title</h5>
                        </bs-card-title>
                        <bs-card-text slot="card-text">
                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </bs-card-text>
                    </bs-card-body>
                </bs-card>
        
                <bs-card class="border-danger mb-3">
                    <bs-card-header slot="card-header">Header</bs-card-header>
                    <bs-card-body class="text-danger">
                        <bs-card-title slot="card-title">
                            <h5>Primary card title</h5>
                        </bs-card-title>
                        <bs-card-text slot="card-text">
                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </bs-card-text>
                    </bs-card-body>
                </bs-card>
        
                <bs-card class="border-warning mb-3">
                    <bs-card-header slot="card-header">Header</bs-card-header>
                    <bs-card-body class="text-warning">
                        <bs-card-title slot="card-title">
                            <h5>Primary card title</h5>
                        </bs-card-title>
                        <bs-card-text slot="card-text">
                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </bs-card-text>
                    </bs-card-body>
                </bs-card>
        
                <bs-card class="border-info mb-3">
                    <bs-card-header slot="card-header">Header</bs-card-header>
                    <bs-card-body class="text-info">
                        <bs-card-title slot="card-title">
                            <h5>Primary card title</h5>
                        </bs-card-title>
                        <bs-card-text slot="card-text">
                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </bs-card-text>
                    </bs-card-body>
                </bs-card>
        
                <bs-card class="border-light mb-3">
                    <bs-card-header slot="card-header">Header</bs-card-header>
                    <bs-card-body>
                        <bs-card-title slot="card-title">
                            <h5>Primary card title</h5>
                        </bs-card-title>
                        <bs-card-text slot="card-text">
                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </bs-card-text>
                    </bs-card-body>
                </bs-card>
        
                <bs-card class="border-dark mb-3">
                    <bs-card-header slot="card-header">Header</bs-card-header>
                    <bs-card-body class="text-dark">
                        <bs-card-title slot="card-title">
                            <h5>Primary card title</h5>
                        </bs-card-title>
                        <bs-card-text slot="card-text">
                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </bs-card-text>
                    </bs-card-body>
                </bs-card>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html"><span class="nt">&lt;bs-card</span> <span class="na">class=</span><span class="s">"border-primary mb-3"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-card-header</span> <span class="na">slot=</span><span class="s">"card-header"</span><span class="nt">&gt;</span>Header<span class="nt">&lt;/bs-card-header&gt;</span>    
    <span class="nt">&lt;bs-card-body</span> <span class="na">class=</span><span class="s">"text-primary"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-card-title</span> <span class="na">slot=</span><span class="s">"card-title"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;h5&gt;</span>Primary card title<span class="nt">&lt;/h5&gt;</span>    
        <span class="nt">&lt;/bs-card-title&gt;</span>
        <span class="nt">&lt;bs-card-text</span> <span class="na">slot=</span><span class="s">"card-text"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;p&gt;</span>Some quick example text to build on the card title and make up the bulk of the card's content.<span class="nt">&lt;/p&gt;</span>
        <span class="nt">&lt;/bs-card-text&gt;</span>
    <span class="nt">&lt;/bs-card-body&gt;</span>
<span class="nt">&lt;/bs-card&gt;</span>

<span class="nt">&lt;bs-card</span> <span class="na">class=</span><span class="s">"border-secondary mb-3"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-card-header</span> <span class="na">slot=</span><span class="s">"card-header"</span><span class="nt">&gt;</span>Header<span class="nt">&lt;/bs-card-header&gt;</span>    
    <span class="nt">&lt;bs-card-body</span> <span class="na">class=</span><span class="s">"text-secondary"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-card-title</span> <span class="na">slot=</span><span class="s">"card-title"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;h5&gt;</span>Primary card title<span class="nt">&lt;/h5&gt;</span>    
        <span class="nt">&lt;/bs-card-title&gt;</span>
        <span class="nt">&lt;bs-card-text</span> <span class="na">slot=</span><span class="s">"card-text"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;p&gt;</span>Some quick example text to build on the card title and make up the bulk of the card's content.<span class="nt">&lt;/p&gt;</span>
        <span class="nt">&lt;/bs-card-text&gt;</span>
    <span class="nt">&lt;/bs-card-body&gt;</span>
<span class="nt">&lt;/bs-card&gt;</span>
        
<span class="nt">&lt;bs-card</span> <span class="na">class=</span><span class="s">"border-success mb-3"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-card-header</span> <span class="na">slot=</span><span class="s">"card-header"</span><span class="nt">&gt;</span>Header<span class="nt">&lt;/bs-card-header&gt;</span>    
    <span class="nt">&lt;bs-card-body</span> <span class="na">class=</span><span class="s">"text-success"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-card-title</span> <span class="na">slot=</span><span class="s">"card-title"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;h5&gt;</span>Primary card title<span class="nt">&lt;/h5&gt;</span>    
        <span class="nt">&lt;/bs-card-title&gt;</span>
        <span class="nt">&lt;bs-card-text</span> <span class="na">slot=</span><span class="s">"card-text"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;p&gt;</span>Some quick example text to build on the card title and make up the bulk of the card's content.<span class="nt">&lt;/p&gt;</span>
        <span class="nt">&lt;/bs-card-text&gt;</span>
    <span class="nt">&lt;/bs-card-body&gt;</span>
<span class="nt">&lt;/bs-card&gt;</span>
        
<span class="nt">&lt;bs-card</span> <span class="na">class=</span><span class="s">"border-danger mb-3"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-card-header</span> <span class="na">slot=</span><span class="s">"card-header"</span><span class="nt">&gt;</span>Header<span class="nt">&lt;/bs-card-header&gt;</span>    
    <span class="nt">&lt;bs-card-body</span> <span class="na">class=</span><span class="s">"text-danger"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-card-title</span> <span class="na">slot=</span><span class="s">"card-title"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;h5&gt;</span>Primary card title<span class="nt">&lt;/h5&gt;</span>    
        <span class="nt">&lt;/bs-card-title&gt;</span>
        <span class="nt">&lt;bs-card-text</span> <span class="na">slot=</span><span class="s">"card-text"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;p&gt;</span>Some quick example text to build on the card title and make up the bulk of the card's content.<span class="nt">&lt;/p&gt;</span>
        <span class="nt">&lt;/bs-card-text&gt;</span>
    <span class="nt">&lt;/bs-card-body&gt;</span>
<span class="nt">&lt;/bs-card&gt;</span>
        
<span class="nt">&lt;bs-card</span> <span class="na">class=</span><span class="s">"border-warning mb-3"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-card-header</span> <span class="na">slot=</span><span class="s">"card-header"</span><span class="nt">&gt;</span>Header<span class="nt">&lt;/bs-card-header&gt;</span>    
    <span class="nt">&lt;bs-card-body</span> <span class="na">class=</span><span class="s">"text-warning"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-card-title</span> <span class="na">slot=</span><span class="s">"card-title"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;h5&gt;</span>Primary card title<span class="nt">&lt;/h5&gt;</span>    
        <span class="nt">&lt;/bs-card-title&gt;</span>
        <span class="nt">&lt;bs-card-text</span> <span class="na">slot=</span><span class="s">"card-text"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;p&gt;</span>Some quick example text to build on the card title and make up the bulk of the card's content.<span class="nt">&lt;/p&gt;</span>
        <span class="nt">&lt;/bs-card-text&gt;</span>
    <span class="nt">&lt;/bs-card-body&gt;</span>
<span class="nt">&lt;/bs-card&gt;</span>

<span class="nt">&lt;bs-card</span> <span class="na">class=</span><span class="s">"border-info mb-3"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-card-header</span> <span class="na">slot=</span><span class="s">"card-header"</span><span class="nt">&gt;</span>Header<span class="nt">&lt;/bs-card-header&gt;</span>    
    <span class="nt">&lt;bs-card-body</span> <span class="na">class=</span><span class="s">"text-info"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-card-title</span> <span class="na">slot=</span><span class="s">"card-title"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;h5&gt;</span>Primary card title<span class="nt">&lt;/h5&gt;</span>    
        <span class="nt">&lt;/bs-card-title&gt;</span>
        <span class="nt">&lt;bs-card-text</span> <span class="na">slot=</span><span class="s">"card-text"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;p&gt;</span>Some quick example text to build on the card title and make up the bulk of the card's content.<span class="nt">&lt;/p&gt;</span>
        <span class="nt">&lt;/bs-card-text&gt;</span>
    <span class="nt">&lt;/bs-card-body&gt;</span>
<span class="nt">&lt;/bs-card&gt;</span>
        
<span class="nt">&lt;bs-card</span> <span class="na">class=</span><span class="s">"border-light mb-3"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-card-header</span> <span class="na">slot=</span><span class="s">"card-header"</span><span class="nt">&gt;</span>Header<span class="nt">&lt;/bs-card-header&gt;</span>    
    <span class="nt">&lt;bs-card-body&</span>
        <span class="nt">&lt;bs-card-title</span> <span class="na">slot=</span><span class="s">"card-title"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;h5&gt;</span>Primary card title<span class="nt">&lt;/h5&gt;</span>    
        <span class="nt">&lt;/bs-card-title&gt;</span>
        <span class="nt">&lt;bs-card-text</span> <span class="na">slot=</span><span class="s">"card-text"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;p&gt;</span>Some quick example text to build on the card title and make up the bulk of the card's content.<span class="nt">&lt;/p&gt;</span>
        <span class="nt">&lt;/bs-card-text&gt;</span>
    <span class="nt">&lt;/bs-card-body&gt;</span>
<span class="nt">&lt;/bs-card&gt;</span>
        
<span class="nt">&lt;bs-card</span> <span class="na">class=</span><span class="s">"border-dark mb-3"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-card-header</span> <span class="na">slot=</span><span class="s">"card-header"</span><span class="nt">&gt;</span>Header<span class="nt">&lt;/bs-card-header&gt;</span>    
    <span class="nt">&lt;bs-card-body</span> <span class="na">class=</span><span class="s">"text-dark"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-card-title</span> <span class="na">slot=</span><span class="s">"card-title"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;h5&gt;</span>Primary card title<span class="nt">&lt;/h5&gt;</span>    
        <span class="nt">&lt;/bs-card-title&gt;</span>
        <span class="nt">&lt;bs-card-text</span> <span class="na">slot=</span><span class="s">"card-text"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;p&gt;</span>Some quick example text to build on the card title and make up the bulk of the card's content.<span class="nt">&lt;/p&gt;</span>
        <span class="nt">&lt;/bs-card-text&gt;</span>
    <span class="nt">&lt;/bs-card-body&gt;</span>
<span class="nt">&lt;/bs-card&gt;</span></code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('border-and-text-color-example', BorderAndTextColorExample);