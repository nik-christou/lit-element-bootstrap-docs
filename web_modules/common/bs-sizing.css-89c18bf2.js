import { css } from '../lit-element.js';

const BsTextCss = css`
    
    :host([text-monospace]), .text-monospace {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    }

    :host([text-justify]), .text-justify {
        text-align: justify !important;
    }
    
    :host([text-nowrap]), .text-nowrap {
        white-space: nowrap !important;
    }

    :host([text-truncate]), .text-truncate {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    :host([text-left]), .text-left {
        text-align: left !important;
    }

    :host([text-right]), .text-right {
        text-align: right !important;
    }

    :host([text-center]), .text-center {
        text-align: center !important;
    }

    @media (min-width: 576px) {
        
        :host([text-sm-left]), .text-sm-left {
            text-align: left !important;
        }

        :host([text-sm-right]), .text-sm-right {
            text-align: right !important;
        }

        :host([text-sm-center]), .text-sm-center {
            text-align: center !important;
        }
    }

    @media (min-width: 768px) {

        :host([text-md-left]), .text-md-left {
            text-align: left !important;
        }

        :host([text-md-right]), .text-md-right {
            text-align: right !important;
        }

        :host([text-md-center]), .text-md-center {
            text-align: center !important;
        }
    }

    @media (min-width: 992px) {
        
        :host([text-lg-left]), .text-lg-left {
            text-align: left !important;
        }

        :host([text-lg-right]), .text-lg-right {
            text-align: right !important;
        }

        :host([text-lg-center]), .text-lg-center {
            text-align: center !important;
        }
    }

    @media (min-width: 1200px) {

        :host([text-xl-left]), .text-xl-left {
            text-align: left !important;
        }

        :host([text-xl-right]), .text-xl-right {
            text-align: right !important;
        }

        :host([text-xl-center]), .text-xl-center {
            text-align: center !important;
        }
    }

    :host([text-lowercase]), .text-lowercase {
        text-transform: lowercase !important;
    }

    :host([text-uppercase]), .text-uppercase {
        text-transform: uppercase !important;
    }

    :host([text-capitalize]), .text-capitalize {
        text-transform: capitalize !important;
    }

    :host([font-weight-light]), .font-weight-light {
        font-weight: 300 !important;
    }

    :host([font-weight-normal]), .font-weight-normal {
        font-weight: 400 !important;
    }

    :host([font-weight-bold]), .font-weight-bold {
        font-weight: 700 !important;
    }

    :host([font-weight-bold]), .font-italic {
        font-style: italic !important;
    }
`;

const BsSizingCss = css`
    
    :host([w-25]), .w-25 {
        width: 25% !important;
    }

    :host([w-50]), .w-50 {
        width: 50% !important;
    }

    :host([w-75]), .w-75 {
        width: 75% !important;
    }

    :host([w-100]), .w-100 {
        width: 100% !important;
    }

    :host([w-auto]), .w-auto {
        width: auto !important;
    }

    :host([h-25]), .h-25 {
        height: 25% !important;
    }

    :host([h-50]), .h-50 {
        height: 50% !important;
    }

    :host([h-75]), .h-75 {
        height: 75% !important;
    }

    :host([h-100]), .h-100 {
        height: 100% !important;
    }

    :host([h-auto]), .h-auto {
        height: auto !important;
    }

    :host([mw-100]), .mw-100 {
        max-width: 100% !important;
    }

    :host([mh-100]), .mh-100 {
        max-height: 100% !important;
    }
`;

export { BsTextCss as B, BsSizingCss as a };
