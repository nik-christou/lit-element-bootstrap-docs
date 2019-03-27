
import { LitElement, html, css } from 'lit-element';
import { BsSpacingCss } from 'lit-element-bootstrap/utilities';
import { BsContainer, BsRow, BsColumn } from 'lit-element-bootstrap/layout/grid';
import { BsButton } from 'lit-element-bootstrap/components/button';
import { BsModal, BsModalBody, BsModalHeader, BsModalFooter } from 'lit-element-bootstrap/components/modal';
import { BsExample, BsHighlight, BsCodeSyntaxCss } from '../../../../component/example';
import { BsContentRebootCss, BsContentCodeCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

class ModalGridExample extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsContentCodeCss,
            BsCodeSyntaxCss,
            BsSpacingCss,
            css`
                bs-column[demo] {
                    padding-top: 0.75rem;
                    padding-bottom: 0.75rem;
                    background-color: rgba(86,61,124,0.15);
                    border: 1px solid rgba(86,61,124,0.2);
                }
                
                bs-row + bs-row {
                    margin-top: 1rem;
                }
            `
        ];
    }
    
    render() {
        return html`
            
            <bs-example>
                
                <bs-button primary id="modalLauncher">Launch demo modal</bs-button primary>
                
                <bs-modal backdrop animated dismissable>
                    <bs-modal-header slot="header">
                        <h5>Modal title</h5>
                    </bs-modal-header>
                    <bs-modal-body slot="body">
                        <bs-container fluid>
                            <bs-row>
                                <bs-column demo md-4>md-4</bs-column>
                                <bs-column demo md-4 class="ml-auto">md-4 .ml-auto</bs-column>
                            </bs-row>
                            <bs-row>
                                <bs-column demo md-3 class="ml-auto">md-3 .ml-auto</bs-column>
                                <bs-column demo md-2 class="ml-auto">md-2 .ml-auto</bs-column>
                            </bs-row>
                            <bs-row>
                                <bs-column demo md-6 class="ml-auto">md-6 .ml-auto</bs-column>
                            </bs-row>
                            <bs-row>
                                <bs-column demo sm-9>
                                    Level 1: sm-9
                                    <bs-row>
                                        <bs-column demo xs-8 sm-6>Level 2: xs-8 sm-6</bs-column>
                                        <bs-column demo xs-8 sm-6>Level 2: xs-8 sm-6</bs-column>
                                    </bs-row>
                                </bs-column>
                            </bs-row>
                        </bs-container>
                    </bs-modal-body>
                    <bs-modal-footer slot="footer">
                        <bs-button secondary id="closeModal">Close</bs-button>
                        <bs-button primary id="saveChanges">Save changes</bs-button>
                    </bs-modal-footer>
                </bs-modal>
                
            </bs-example>
            <bs-highlight>
                <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;bs-button</span> <span class="na">primary</span> <span class="na">id=</span><span class="s">"modalLauncher"</span><span class="nt">&gt;</span>Launch demo modal<span class="nt">&lt;/bs-button&gt;</span>

<span class="nt">&lt;bs-modal</span> <span class="na">backdrop</span> <span class="na">animated</span> <span class="na">dismissable</span><span class="nt">&gt;</span>
    <span class="nt">&lt;bs-modal-header</span> <span class="na">slot=</span><span class="s">"header"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;h5&gt;</span>Modal title<span class="nt">&lt;/h5&gt;</span>
    <span class="nt">&lt;/bs-modal-header&gt;</span>
    <span class="nt">&lt;bs-modal-body</span> <span class="na">slot=</span><span class="s">"body"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-container</span> <span class="na">fluid</span><span class="nt">&gt;</span>
            <span class="nt">&lt;bs-row&gt;</span>
                <span class="nt">&lt;bs-column</span> <span class="na">md-4</span><span class="nt">&gt;</span>md-4<span class="nt">&lt;/bs-column&gt;</span>
                <span class="nt">&lt;bs-column</span> <span class="na">md-4</span> <span class="na">class=</span><span class="s">"ml-auto"</span><span class="nt">&gt;</span>md-4 .ml-auto<span class="nt">&lt;/bs-column&gt;</span>
            <span class="nt">&lt;/bs-row&gt;</span>
            <span class="nt">&lt;bs-row&gt;</span>
                <span class="nt">&lt;bs-column</span> <span class="na">md-3</span> <span class="na">class=</span><span class="s">"ml-auto"</span><span class="nt">&gt;</span>md-3 .ml-auto<span class="nt">&lt;/bs-column&gt;</span>
                <span class="nt">&lt;bs-column</span> <span class="na">md-2</span> <span class="na">class=</span><span class="s">"ml-auto"</span><span class="nt">&gt;</span>md-2 .ml-auto<span class="nt">&lt;/bs-column&gt;</span>
            <span class="nt">&lt;/bs-row&gt;</span>
            <span class="nt">&lt;bs-row&gt;</span>
                <span class="nt">&lt;bs-column</span> <span class="na">md-6</span> <span class="na">class=</span><span class="s">"ml-auto"</span><span class="nt">&gt;</span>md-6 .ml-auto<span class="nt">&lt;/bs-column&gt;</span>
            <span class="nt">&lt;/bs-row&gt;</span>
            <span class="nt">&lt;bs-row&gt;</span>
                <span class="nt">&lt;bs-column</span> <span class="na">sm-9</span><span class="nt">&gt;</span>
                    Level 1: sm-9
                    <span class="nt">&lt;bs-row&gt;</span>
                        <span class="nt">&lt;bs-column</span> <span class="na">xs-8 sm-6</span><span class="nt">&gt;</span>Level 2: xs-8 sm-6<span class="nt">&lt;/bs-column&gt;</span>
                        <span class="nt">&lt;bs-column</span> <span class="na">xs-8 sm-6</span><span class="nt">&gt;</span>Level 2: xs-8 sm-6<span class="nt">&gt;</span><span class="nt">&lt;/bs-column&gt;</span>
                    <span class="nt">&lt;/bs-row&gt;</span>
                <span class="nt">&lt;/bs-column&gt;</span>
            <span class="nt">&lt;/bs-row&gt;</span>
        <span class="nt">&lt;/bs-container&gt;</span>
    <span class="nt">&lt;/bs-modal-body&gt;</span>
    <span class="nt">&lt;bs-modal-footer</span> <span class="na">slot=</span><span class="s">"footer"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;bs-button</span> <span class="na">secondary</span> <span class="na">id=</span><span class="s">"closeModal"</span><span class="nt">&gt;</span>Close<span class="nt">&lt;/bs-button&gt;</span>
        <span class="nt">&lt;bs-button</span> <span class="na">primary</span> <span class="na">id=</span><span class="s">"saveChanges"</span><span class="nt">&gt;</span>Save changes<span class="nt">&lt;/bs-button&gt;</span>
    <span class="nt">&lt;/bs-modal-footer&gt;</span>
<span class="nt">&lt;/bs-modal&gt;</span>
</code></pre></bs-highlight>
        `;
    }
    
    firstUpdated() {
        const modal = this.shadowRoot.querySelector('bs-modal');
        const modalLauncher = this.shadowRoot.querySelector('bs-button#modalLauncher');
        const closeModal = this.shadowRoot.querySelector('bs-button#closeModal');
        
        modalLauncher.addEventListener('bs-button-click', () => this._handleModalLauncher(modal));
        closeModal.addEventListener('bs-button-click', () => this._handleCloseModal(modal));
    }
    
    _handleModalLauncher(modal) {
        modal.toggle();
    }
    
    _handleCloseModal(modal) {
        modal.close();
    }
};

window.customElements.define('modal-grid-example', ModalGridExample);