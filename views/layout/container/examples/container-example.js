
import { LitElement, html, css } from 'lit-element';
import { BsContainer } from 'lit-element-bootstrap/layout/grid';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class ContainerExample extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsContentCodeCss,
            BsCodeSyntaxCss,
            css`
                bs-container {
                    min-width: 16rem;
                    max-width: 25rem;
                    margin-right: auto;
                    margin-left: auto;
                }
                
                .header {
                    height: 3rem;
                    margin-bottom: 0.5rem;
                    background-color: #eee;
                    border-radius: 0.25rem;
                }
                
                .sidebar {
                    float: right;
                    width: 4rem;
                    height: 8rem;
                    background-color: #80bdff;
                    border-radius: 0.25rem;
                }
        
                .body {
                    height: 8rem;
                    margin-right: 4.5rem;
                    background-color: #957bbe;
                    border-radius: 0.25rem;
                }
            `
        ];
    }
    
    render() {
        return html`
        
            <bs-example>
                
                <bs-container>
                    <div class="header"></div>
                    <div class="sidebar"></div>
                    <div class="body"></div>
                </bs-container>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-container&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"header"</span><span class="nt">&gt;</span><span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"sidebar"</span><span class="nt">&gt;</span><span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"body"</span><span class="nt">&gt;</span><span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/bs-container&gt;</span>
</code></pre></bs-highlight>
        `;
    }
};

window.customElements.define('container-example', ContainerExample);