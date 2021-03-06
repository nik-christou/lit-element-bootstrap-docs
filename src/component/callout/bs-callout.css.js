
import { css } from 'lit-element';

export const BsCalloutCss = css`
    
    div {
        padding: 1.25rem;
        margin-top: 1.25rem;
        margin-bottom: 1.25rem;
        border: 1px solid #eee;
        border-left-width: .25rem;
        border-radius: .25rem;
    }

    :host([warning]) div {
        border-left-color: #f0ad4e;
    }

    ::slotted(h4) {
        margin-top: 0 !important;
        margin-bottom: 0.25rem !important;
    }

    ::slotted(p) {
        margin-top: 0 !important;
        margin-bottom: 1rem !important;
    }

    ::slotted(p:last-child) {
        margin-bottom: 0 !important;
    }

    :host([danger]) div {
        border-left-color: #d9534f;
    }

    :host([info]) div {
        border-left-color: #5bc0de;
    }

    :host([danger]) ::slotted(h4) {
        color: #d9534f !important;
    }
`;