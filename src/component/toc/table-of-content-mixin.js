
const TableOfContentMixin = (superClass) => class extends superClass {

    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('toc-link-event', event => this._handleTocLinkEvent(event));
    }

    disconnectedCallback() {
        this.removeEventListener('toc-link-event', event => this._handleTocLinkEvent(event));
        super.disconnectedCallback();
    }

    _handleTocLinkEvent(event) {

        const elementId = event.detail.elementId;
        const element = this.shadowRoot.querySelector(`#${elementId}`);

        if(element) {
            element.scrollIntoView();
        }
    }
};

export { TableOfContentMixin };