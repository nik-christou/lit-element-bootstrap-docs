import { h as html } from '../../common/lit-html-9b6153da.js';
import { css, LitElement } from '../../lit-element.js';
import '../../common/index-603f562a.js';
import { B as BsContentRebootCss } from '../../common/bs-content-reboot-css-ebf48278.js';

const BsBadgeCss = css`
                
    .badge {
        display: inline-block;
        padding: 0.25em 0.4em;
        font-size: 75%;
        font-weight: 700;
        line-height: 1;
        text-align: center;
        white-space: nowrap;
        vertical-align: baseline;
        border-radius: 0.25rem;
    }

    .badge:empty {
        display: none;
    }

    :host-context(.btn) .badge {
        position: relative;
        top: -1px;
    }

    :host([pill]) .badge {
        padding-right: 0.6em;
        padding-left: 0.6em;
        border-radius: 10rem;
    }

    :host([primary]) .badge {
        color: #fff;
        background-color: #007bff;
    }

    :host([secondary]) .badge {
        color: #fff;
        background-color: #6c757d;
    }

    :host([success]) .badge {
        color: #fff;
        background-color: #28a745;
    }

    :host([info]) .badge {
        color: #fff;
        background-color: #17a2b8;
    }

    :host([warning]) .badge {
        color: #212529;
        background-color: #ffc107;
    }

    :host([danger]) .badge {
        color: #fff;
        background-color: #dc3545;
    }

    :host([light]) .badge {
        color: #212529;
        background-color: #f8f9fa;
    }

    :host([dark]) .badge {
        color: #fff;
        background-color: #343a40;
    }
`;

class BsBadge extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsBadgeCss
        ];
    }
    
    render() {
        return html`
            <span class="badge">
                <slot></slot>
            </span>
        `;
    }
}
if (!window.customElements.get("bs-badge")) 
    window.customElements.define('bs-badge', BsBadge);

class BsBadgeLink extends LitElement {
    
    static get properties() {
        return {
            href: String
        };
    }
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsBadgeCss,
            css`
                
                :host([primary]) a {
                    text-decoration: none;
                }
                
                :host([secondary]) a {
                    text-decoration: none;
                }
                
                :host([success]) a {
                    text-decoration: none;
                }
        
                :host([info]) a {
                    text-decoration: none;
                }
                
                :host([warning]) a {
                    text-decoration: none;
                }
                
                :host([danger]) a {
                    text-decoration: none;
                }

                :host([light]) a {
                    text-decoration: none;
                }

                :host([dark]) a {
                    text-decoration: none;
                }
        
                :host([primary]) a:hover,
                :host([primary]) a:focus {
                    color: #fff;
                    text-decoration: none;
                    background-color: #0062cc;
                }
        
                :host([secondary]) a:hover,
                :host([secondary]) a:focus {
                    color: #fff;
                    text-decoration: none;
                    background-color: #545b62;
                }
        
                :host([success]) a:hover,
                :host([seccess]) a:focus {
                    color: #fff;
                    text-decoration: none;
                    background-color: #1e7e34;
                }
        
                :host([info]) a:hover,
                :host([info]) a:focus {
                    color: #fff;
                    text-decoration: none;
                    background-color: #117a8b;
                }
        
                :host([warning]) a:hover,
                :host([warning]) a:focus {
                    color: #212529;
                    text-decoration: none;
                    background-color: #d39e00;
                }
        
                :host([danger]) a:hover,
                :host([danger]) a:focus {
                    color: #fff;
                    text-decoration: none;
                    background-color: #bd2130;
                }
        
                :host([light]) a:hover,
                :host([light]) a:focus {
                    color: #212529;
                    text-decoration: none;
                    background-color: #dae0e5;
                }
        
                :host([dark][href]) a:hover,
                :host([dark][href]) a:focus {
                    color: #fff;
                    text-decoration: none;
                    background-color: #1d2124;
                }
            `
        ];
    }
    
    render() {
        return html`
            <a href="${this.href}" class="badge">
                <slot></slot>
            </a>
        `;
    }
    
    constructor() {
        super();
        this.href = '#';
    }
}
if (!window.customElements.get("bs-badge-link"))  
    window.customElements.define('bs-badge-link', BsBadgeLink);

export { BsBadge, BsBadgeLink };
