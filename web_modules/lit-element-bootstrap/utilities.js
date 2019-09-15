import '../common/lit-html-9b6153da.js';
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

const BsFloatCss = css`
    
    .float-left {
        float: left !important;
    }

    .float-right {
        float: right !important;
    }

    .float-none {
        float: none !important;
    }

    @media (min-width: 576px) {
        
        .float-sm-left {
            float: left !important;
        }
        
        .float-sm-right {
            float: right !important;
        }

        .float-sm-none {
            float: none !important;
        }
    }

    @media (min-width: 768px) {
      
        .float-md-left {
            float: left !important;
        }
        
        .float-md-right {
            float: right !important;
        }

        .float-md-none {
            float: none !important;
        }
    }

    @media (min-width: 992px) {
    
        .float-lg-left {
            float: left !important;
        }

        .float-lg-right {
            float: right !important;
        }
        
        .float-lg-none {
            float: none !important;
        }
    }

    @media (min-width: 1200px) {
    
        .float-xl-left {
            float: left !important;
        }

        .float-xl-right {
            float: right !important;
        }

        .float-xl-none {
            float: none !important;
        }
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

const BsBordersCss = css`
    
    .border {
        border: 1px solid #dee2e6 !important;
    }

    .border-top {
        border-top: 1px solid #dee2e6 !important;
    }

    .border-right {
        border-right: 1px solid #dee2e6 !important;
    }

    .border-bottom {
        border-bottom: 1px solid #dee2e6 !important;
    }

    .border-left {
        border-left: 1px solid #dee2e6 !important;
    }

    .border-0 {
        border: 0 !important;
    }

    .border-top-0 {
        border-top: 0 !important;
    }

    .border-right-0 {
        border-right: 0 !important;
    }

    .border-bottom-0 {
        border-bottom: 0 !important;
    }

    .border-left-0 {
        border-left: 0 !important;
    }

    .border-primary {
        border-color: #007bff !important;
    }

    .border-secondary {
        border-color: #6c757d !important;
    }

    .border-success {
        border-color: #28a745 !important;
    }

    .border-info {
        border-color: #17a2b8 !important;
    }

    .border-warning {
        border-color: #ffc107 !important;
    }

    .border-danger {
        border-color: #dc3545 !important;
    }

    .border-light {
        border-color: #f8f9fa !important;
    }

    .border-dark {
        border-color: #343a40 !important;
    }

    .border-white {
        border-color: #fff !important;
    }

    .rounded {
        border-radius: 0.25rem !important;
    }

    .rounded-top {
        border-top-left-radius: 0.25rem !important;
        border-top-right-radius: 0.25rem !important;
    }

    .rounded-right {
        border-top-right-radius: 0.25rem !important;
        border-bottom-right-radius: 0.25rem !important;
    }

    .rounded-bottom {
        border-bottom-right-radius: 0.25rem !important;
        border-bottom-left-radius: 0.25rem !important;
    }

    .rounded-left {
        border-top-left-radius: 0.25rem !important;
        border-bottom-left-radius: 0.25rem !important;
    }

    .rounded-circle {
        border-radius: 50% !important;
    }

    .rounded-0 {
        border-radius: 0 !important;
    }
`;

const BsEmbeddedCss = css`
    
    .embed-responsive {
         position: relative;
         display: block;
         width: 100%;
         padding: 0;
         overflow: hidden;
       }

       .embed-responsive::before {
         display: block;
         content: "";
       }

       .embed-responsive .embed-responsive-item,
       .embed-responsive iframe,
       .embed-responsive embed,
       .embed-responsive object,
       .embed-responsive video {
         position: absolute;
         top: 0;
         bottom: 0;
         left: 0;
         width: 100%;
         height: 100%;
         border: 0;
       }

       .embed-responsive-21by9::before {
         padding-top: 42.857143%;
       }

       .embed-responsive-16by9::before {
         padding-top: 56.25%;
       }

       .embed-responsive-4by3::before {
         padding-top: 75%;
       }

       .embed-responsive-1by1::before {
         padding-top: 100%;
       }
`;

const BsDisplayCss = css`
    
    .d-none {
        display: none !important;
    }

    .d-inline {
        display: inline !important;
    }

    .d-inline-block {
        display: inline-block !important;
    }

    .d-block {
        display: block !important;
    }

    .d-table {
        display: table !important;
    }

    .d-table-row {
        display: table-row !important;
    }

    .d-table-cell {
        display: table-cell !important;
    }

    @media (min-width: 576px) {
        
        .d-sm-none {
            display: none !important;
        }
        
        .d-sm-inline {
            display: inline !important;
        }
        
        .d-sm-inline-block {
            display: inline-block !important;
        }
        
        .d-sm-block {
            display: block !important;
        }
        
        .d-sm-table {
            display: table !important;
        }
        
        .d-sm-table-row {
            display: table-row !important;
        }
        
        .d-sm-table-cell {
            display: table-cell !important;
        }
    }

    @media (min-width: 768px) {
        
        .d-md-none {
            display: none !important;
        }

        .d-md-inline {
            display: inline !important;
        }
        
        .d-md-inline-block {
            display: inline-block !important;
        }

        .d-md-block {
            display: block !important;
        }
        
        .d-md-table {
            display: table !important;
        }
        
        .d-md-table-row {
            display: table-row !important;
        }
        
        .d-md-table-cell {
            display: table-cell !important;
        }
    }

    @media (min-width: 992px) {
        
        .d-lg-none {
            display: none !important;
        }
        
        .d-lg-inline {
            display: inline !important;
        }
        
        .d-lg-inline-block {
            display: inline-block !important;
        }
        
        .d-lg-block {
            display: block !important;
        }
        
        .d-lg-table {
            display: table !important;
        }
        
        .d-lg-table-row {
            display: table-row !important;
        }
        
        .d-lg-table-cell {
            display: table-cell !important;
        }
    }

    @media (min-width: 1200px) {
        
        .d-xl-none {
            display: none !important;
        }
        
        .d-xl-inline {
            display: inline !important;
        }
        
        .d-xl-inline-block {
            display: inline-block !important;
        }
        
        .d-xl-block {
            display: block !important;
        }
        
        .d-xl-table {
            display: table !important;
        }
        
        .d-xl-table-row {
            display: table-row !important;
        }
        
        .d-xl-table-cell {
            display: table-cell !important;
        }
    }

    @media print {
    
        .d-print-none {
            display: none !important;
        }
        
        .d-print-inline {
            display: inline !important;
        }
        
        .d-print-inline-block {
            display: inline-block !important;
        }
        
        .d-print-block {
            display: block !important;
        }
        
        .d-print-table {
            display: table !important;
        }
        
        .d-print-table-row {
            display: table-row !important;
        }
        
        .d-print-table-cell {
            display: table-cell !important;
        }
    }
`;

const BsClearfixCss = css`
    
    .clearfix::after {
        display: block;
        clear: both;
        content: "";
    }
`;

const BsPositionCss = css`
    
    .position-static {
        position: static !important;
    }

    .position-relative {
        position: relative !important;
    }

    .position-absolute {
        position: absolute !important;
    }

    .position-fixed {
        position: fixed !important;
    }

    .position-sticky {
        position: -webkit-sticky !important;
        position: sticky !important;
    }

    .fixed-top {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        z-index: 1030;
    }

    .fixed-bottom {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1030;
    }

    @supports ((position: -webkit-sticky) or (position: sticky)) {
        .sticky-top {
            position: -webkit-sticky;
            position: sticky;
            top: 0;
            z-index: 1020;
        }
    }
`;

const BsSpacingCss = css`
    
    .m-0 {
        margin: 0 !important;
    }

    .mt-0, .my-0 {
        margin-top: 0 !important;
    }

    .mr-0, .mx-0 {
        margin-right: 0 !important;
    }

    .mb-0, .my-0 {
        margin-bottom: 0 !important;
    }

    .ml-0, .mx-0 {
        margin-left: 0 !important;
    }

    .m-1 {
        margin: 0.25rem !important;
    }

    .mt-1, .my-1 {
        margin-top: 0.25rem !important;
    }

    .mr-1, .mx-1 {
        margin-right: 0.25rem !important;
    }

    .mb-1, .my-1 {
        margin-bottom: 0.25rem !important;
    }

    .ml-1, .mx-1 {
        margin-left: 0.25rem !important;
    }

    .m-2 {
        margin: 0.5rem !important;
    }

    .mt-2, .my-2 {
        margin-top: 0.5rem !important;
    }

    .mr-2, .mx-2 {
        margin-right: 0.5rem !important;
    }

    .mb-2, .my-2 {
        margin-bottom: 0.5rem !important;
    }

    .ml-2, .mx-2 {
        margin-left: 0.5rem !important;
    }

    .m-3 {
        margin: 1rem !important;
    }

    .mt-3, .my-3 {
        margin-top: 1rem !important;
    }

    .mr-3, .mx-3 {
        margin-right: 1rem !important;
    }

    .mb-3, .my-3 {
        margin-bottom: 1rem !important;
    }

    .ml-3, .mx-3 {
        margin-left: 1rem !important;
    }

    .m-4 {
        margin: 1.5rem !important;
    }

    .mt-4, .my-4 {
        margin-top: 1.5rem !important;
    }

    .mr-4, .mx-4 {
        margin-right: 1.5rem !important;
    }

    .mb-4, .my-4 {
        margin-bottom: 1.5rem !important;
    }

    .ml-4, .mx-4 {
        margin-left: 1.5rem !important;
    }

    .m-5 {
        margin: 3rem !important;
    }

    .mt-5, .my-5 {
        margin-top: 3rem !important;
    }

    .mr-5, .mx-5 {
        margin-right: 3rem !important;
    }

    .mb-5, .my-5 {
        margin-bottom: 3rem !important;
    }

    .ml-5, .mx-5 {
        margin-left: 3rem !important;
    }

    .p-0 {
        padding: 0 !important;
    }

    .pt-0, .py-0 {
        padding-top: 0 !important;
    }

    .pr-0, .px-0 {
        padding-right: 0 !important;
    }

    .pb-0, .py-0 {
        padding-bottom: 0 !important;
    }

    .pl-0, .px-0 {
        padding-left: 0 !important;
    }

    .p-1 {
        padding: 0.25rem !important;
    }

    .pt-1, .py-1 {
        padding-top: 0.25rem !important;
    }

    .pr-1, .px-1 {
        padding-right: 0.25rem !important;
    }

    .pb-1, .py-1 {
        padding-bottom: 0.25rem !important;
    }

    .pl-1, .px-1 {
        padding-left: 0.25rem !important;
    }

    .p-2 {
     padding: 0.5rem !important;
    }

    .pt-2, .py-2 {
        padding-top: 0.5rem !important;
    }

    .pr-2, .px-2 {
        padding-right: 0.5rem !important;
    }

    .pb-2, .py-2 {
        padding-bottom: 0.5rem !important;
    }

    .pl-2, .px-2 {
        padding-left: 0.5rem !important;
    }

    .p-3 {
        padding: 1rem !important;
    }

    .pt-3, .py-3 {
        padding-top: 1rem !important;
    }

    .pr-3, .px-3 {
        padding-right: 1rem !important;
    }

    .pb-3, .py-3 {
        padding-bottom: 1rem !important;
    }

    .pl-3, .px-3 {
        padding-left: 1rem !important;
    }

    .p-4 {
        padding: 1.5rem !important;
    }

    .pt-4, .py-4 {
        padding-top: 1.5rem !important;
    }

    .pr-4, .px-4 {
        padding-right: 1.5rem !important;
    }

    .pb-4, .py-4 {
        padding-bottom: 1.5rem !important;
    }

    .pl-4, .px-4 {
        padding-left: 1.5rem !important;
    }

    .p-5 {
        padding: 3rem !important;
    }

    .pt-5, .py-5 {
        padding-top: 3rem !important;
    }

    .pr-5, .px-5 {
        padding-right: 3rem !important;
    }

    .pb-5, .py-5 {
        padding-bottom: 3rem !important;
    }

    .pl-5, .px-5 {
        padding-left: 3rem !important;
    }

    .m-auto {
        margin: auto !important;
    }

    .mt-auto, .my-auto {
        margin-top: auto !important;
    }

    .mr-auto, .mx-auto {
        margin-right: auto !important;
    }

    .mb-auto, .my-auto {
        margin-bottom: auto !important;
    }

    .ml-auto, .mx-auto {
        margin-left: auto !important;
    }

    @media (min-width: 576px) {
     .m-sm-0 {
       margin: 0 !important;
     }
     .mt-sm-0,
     .my-sm-0 {
       margin-top: 0 !important;
     }
     .mr-sm-0,
     .mx-sm-0 {
       margin-right: 0 !important;
     }
     .mb-sm-0,
     .my-sm-0 {
       margin-bottom: 0 !important;
     }
     .ml-sm-0,
     .mx-sm-0 {
       margin-left: 0 !important;
     }
     .m-sm-1 {
       margin: 0.25rem !important;
     }
     .mt-sm-1,
     .my-sm-1 {
       margin-top: 0.25rem !important;
     }
     .mr-sm-1,
     .mx-sm-1 {
       margin-right: 0.25rem !important;
     }
     .mb-sm-1,
     .my-sm-1 {
       margin-bottom: 0.25rem !important;
     }
     .ml-sm-1,
     .mx-sm-1 {
       margin-left: 0.25rem !important;
     }
     .m-sm-2 {
       margin: 0.5rem !important;
     }
     .mt-sm-2,
     .my-sm-2 {
       margin-top: 0.5rem !important;
     }
     .mr-sm-2,
     .mx-sm-2 {
       margin-right: 0.5rem !important;
     }
     .mb-sm-2,
     .my-sm-2 {
       margin-bottom: 0.5rem !important;
     }
     .ml-sm-2,
     .mx-sm-2 {
       margin-left: 0.5rem !important;
     }
     .m-sm-3 {
       margin: 1rem !important;
     }
     .mt-sm-3,
     .my-sm-3 {
       margin-top: 1rem !important;
     }
     .mr-sm-3,
     .mx-sm-3 {
       margin-right: 1rem !important;
     }
     .mb-sm-3,
     .my-sm-3 {
       margin-bottom: 1rem !important;
     }
     .ml-sm-3,
     .mx-sm-3 {
       margin-left: 1rem !important;
     }
     .m-sm-4 {
       margin: 1.5rem !important;
     }
     .mt-sm-4,
     .my-sm-4 {
       margin-top: 1.5rem !important;
     }
     .mr-sm-4,
     .mx-sm-4 {
       margin-right: 1.5rem !important;
     }
     .mb-sm-4,
     .my-sm-4 {
       margin-bottom: 1.5rem !important;
     }
     .ml-sm-4,
     .mx-sm-4 {
       margin-left: 1.5rem !important;
     }
     .m-sm-5 {
       margin: 3rem !important;
     }
     .mt-sm-5,
     .my-sm-5 {
       margin-top: 3rem !important;
     }
     .mr-sm-5,
     .mx-sm-5 {
       margin-right: 3rem !important;
     }
     .mb-sm-5,
     .my-sm-5 {
       margin-bottom: 3rem !important;
     }
     .ml-sm-5,
     .mx-sm-5 {
       margin-left: 3rem !important;
     }
     .p-sm-0 {
       padding: 0 !important;
     }
     .pt-sm-0,
     .py-sm-0 {
       padding-top: 0 !important;
     }
     .pr-sm-0,
     .px-sm-0 {
       padding-right: 0 !important;
     }
     .pb-sm-0,
     .py-sm-0 {
       padding-bottom: 0 !important;
     }
     .pl-sm-0,
     .px-sm-0 {
       padding-left: 0 !important;
     }
     .p-sm-1 {
       padding: 0.25rem !important;
     }
     .pt-sm-1,
     .py-sm-1 {
       padding-top: 0.25rem !important;
     }
     .pr-sm-1,
     .px-sm-1 {
       padding-right: 0.25rem !important;
     }
     .pb-sm-1,
     .py-sm-1 {
       padding-bottom: 0.25rem !important;
     }
     .pl-sm-1,
     .px-sm-1 {
       padding-left: 0.25rem !important;
     }
     .p-sm-2 {
       padding: 0.5rem !important;
     }
     .pt-sm-2,
     .py-sm-2 {
       padding-top: 0.5rem !important;
     }
     .pr-sm-2,
     .px-sm-2 {
       padding-right: 0.5rem !important;
     }
     .pb-sm-2,
     .py-sm-2 {
       padding-bottom: 0.5rem !important;
     }
     .pl-sm-2,
     .px-sm-2 {
       padding-left: 0.5rem !important;
     }
     .p-sm-3 {
       padding: 1rem !important;
     }
     .pt-sm-3,
     .py-sm-3 {
       padding-top: 1rem !important;
     }
     .pr-sm-3,
     .px-sm-3 {
       padding-right: 1rem !important;
     }
     .pb-sm-3,
     .py-sm-3 {
       padding-bottom: 1rem !important;
     }
     .pl-sm-3,
     .px-sm-3 {
       padding-left: 1rem !important;
     }
     .p-sm-4 {
       padding: 1.5rem !important;
     }
     .pt-sm-4,
     .py-sm-4 {
       padding-top: 1.5rem !important;
     }
     .pr-sm-4,
     .px-sm-4 {
       padding-right: 1.5rem !important;
     }
     .pb-sm-4,
     .py-sm-4 {
       padding-bottom: 1.5rem !important;
     }
     .pl-sm-4,
     .px-sm-4 {
       padding-left: 1.5rem !important;
     }
     .p-sm-5 {
       padding: 3rem !important;
     }
     .pt-sm-5,
     .py-sm-5 {
       padding-top: 3rem !important;
     }
     .pr-sm-5,
     .px-sm-5 {
       padding-right: 3rem !important;
     }
     .pb-sm-5,
     .py-sm-5 {
       padding-bottom: 3rem !important;
     }
     .pl-sm-5,
     .px-sm-5 {
       padding-left: 3rem !important;
     }
     .m-sm-auto {
       margin: auto !important;
     }
     .mt-sm-auto,
     .my-sm-auto {
       margin-top: auto !important;
     }
     .mr-sm-auto,
     .mx-sm-auto {
       margin-right: auto !important;
     }
     .mb-sm-auto,
     .my-sm-auto {
       margin-bottom: auto !important;
     }
     .ml-sm-auto,
     .mx-sm-auto {
       margin-left: auto !important;
     }
    }

    @media (min-width: 768px) {
     .m-md-0 {
       margin: 0 !important;
     }
     .mt-md-0,
     .my-md-0 {
       margin-top: 0 !important;
     }
     .mr-md-0,
     .mx-md-0 {
       margin-right: 0 !important;
     }
     .mb-md-0,
     .my-md-0 {
       margin-bottom: 0 !important;
     }
     .ml-md-0,
     .mx-md-0 {
       margin-left: 0 !important;
     }
     .m-md-1 {
       margin: 0.25rem !important;
     }
     .mt-md-1,
     .my-md-1 {
       margin-top: 0.25rem !important;
     }
     .mr-md-1,
     .mx-md-1 {
       margin-right: 0.25rem !important;
     }
     .mb-md-1,
     .my-md-1 {
       margin-bottom: 0.25rem !important;
     }
     .ml-md-1,
     .mx-md-1 {
       margin-left: 0.25rem !important;
     }
     .m-md-2 {
       margin: 0.5rem !important;
     }
     .mt-md-2,
     .my-md-2 {
       margin-top: 0.5rem !important;
     }
     .mr-md-2,
     .mx-md-2 {
       margin-right: 0.5rem !important;
     }
     .mb-md-2,
     .my-md-2 {
       margin-bottom: 0.5rem !important;
     }
     .ml-md-2,
     .mx-md-2 {
       margin-left: 0.5rem !important;
     }
     .m-md-3 {
       margin: 1rem !important;
     }
     .mt-md-3,
     .my-md-3 {
       margin-top: 1rem !important;
     }
     .mr-md-3,
     .mx-md-3 {
       margin-right: 1rem !important;
     }
     .mb-md-3,
     .my-md-3 {
       margin-bottom: 1rem !important;
     }
     .ml-md-3,
     .mx-md-3 {
       margin-left: 1rem !important;
     }
     .m-md-4 {
       margin: 1.5rem !important;
     }
     .mt-md-4,
     .my-md-4 {
       margin-top: 1.5rem !important;
     }
     .mr-md-4,
     .mx-md-4 {
       margin-right: 1.5rem !important;
     }
     .mb-md-4,
     .my-md-4 {
       margin-bottom: 1.5rem !important;
     }
     .ml-md-4,
     .mx-md-4 {
       margin-left: 1.5rem !important;
     }
     .m-md-5 {
       margin: 3rem !important;
     }
     .mt-md-5,
     .my-md-5 {
       margin-top: 3rem !important;
     }
     .mr-md-5,
     .mx-md-5 {
       margin-right: 3rem !important;
     }
     .mb-md-5,
     .my-md-5 {
       margin-bottom: 3rem !important;
     }
     .ml-md-5,
     .mx-md-5 {
       margin-left: 3rem !important;
     }
     .p-md-0 {
       padding: 0 !important;
     }
     .pt-md-0,
     .py-md-0 {
       padding-top: 0 !important;
     }
     .pr-md-0,
     .px-md-0 {
       padding-right: 0 !important;
     }
     .pb-md-0,
     .py-md-0 {
       padding-bottom: 0 !important;
     }
     .pl-md-0,
     .px-md-0 {
       padding-left: 0 !important;
     }
     .p-md-1 {
       padding: 0.25rem !important;
     }
     .pt-md-1,
     .py-md-1 {
       padding-top: 0.25rem !important;
     }
     .pr-md-1,
     .px-md-1 {
       padding-right: 0.25rem !important;
     }
     .pb-md-1,
     .py-md-1 {
       padding-bottom: 0.25rem !important;
     }
     .pl-md-1,
     .px-md-1 {
       padding-left: 0.25rem !important;
     }
     .p-md-2 {
       padding: 0.5rem !important;
     }
     .pt-md-2,
     .py-md-2 {
       padding-top: 0.5rem !important;
     }
     .pr-md-2,
     .px-md-2 {
       padding-right: 0.5rem !important;
     }
     .pb-md-2,
     .py-md-2 {
       padding-bottom: 0.5rem !important;
     }
     .pl-md-2,
     .px-md-2 {
       padding-left: 0.5rem !important;
     }
     .p-md-3 {
       padding: 1rem !important;
     }
     .pt-md-3,
     .py-md-3 {
       padding-top: 1rem !important;
     }
     .pr-md-3,
     .px-md-3 {
       padding-right: 1rem !important;
     }
     .pb-md-3,
     .py-md-3 {
       padding-bottom: 1rem !important;
     }
     .pl-md-3,
     .px-md-3 {
       padding-left: 1rem !important;
     }
     .p-md-4 {
       padding: 1.5rem !important;
     }
     .pt-md-4,
     .py-md-4 {
       padding-top: 1.5rem !important;
     }
     .pr-md-4,
     .px-md-4 {
       padding-right: 1.5rem !important;
     }
     .pb-md-4,
     .py-md-4 {
       padding-bottom: 1.5rem !important;
     }
     .pl-md-4,
     .px-md-4 {
       padding-left: 1.5rem !important;
     }
     .p-md-5 {
       padding: 3rem !important;
     }
     .pt-md-5,
     .py-md-5 {
       padding-top: 3rem !important;
     }
     .pr-md-5,
     .px-md-5 {
       padding-right: 3rem !important;
     }
     .pb-md-5,
     .py-md-5 {
       padding-bottom: 3rem !important;
     }
     .pl-md-5,
     .px-md-5 {
       padding-left: 3rem !important;
     }
     .m-md-auto {
       margin: auto !important;
     }
     .mt-md-auto,
     .my-md-auto {
       margin-top: auto !important;
     }
     .mr-md-auto,
     .mx-md-auto {
       margin-right: auto !important;
     }
     .mb-md-auto,
     .my-md-auto {
       margin-bottom: auto !important;
     }
     .ml-md-auto,
     .mx-md-auto {
       margin-left: auto !important;
     }
    }

    @media (min-width: 992px) {
     .m-lg-0 {
       margin: 0 !important;
     }
     .mt-lg-0,
     .my-lg-0 {
       margin-top: 0 !important;
     }
     .mr-lg-0,
     .mx-lg-0 {
       margin-right: 0 !important;
     }
     .mb-lg-0,
     .my-lg-0 {
       margin-bottom: 0 !important;
     }
     .ml-lg-0,
     .mx-lg-0 {
       margin-left: 0 !important;
     }
     .m-lg-1 {
       margin: 0.25rem !important;
     }
     .mt-lg-1,
     .my-lg-1 {
       margin-top: 0.25rem !important;
     }
     .mr-lg-1,
     .mx-lg-1 {
       margin-right: 0.25rem !important;
     }
     .mb-lg-1,
     .my-lg-1 {
       margin-bottom: 0.25rem !important;
     }
     .ml-lg-1,
     .mx-lg-1 {
       margin-left: 0.25rem !important;
     }
     .m-lg-2 {
       margin: 0.5rem !important;
     }
     .mt-lg-2,
     .my-lg-2 {
       margin-top: 0.5rem !important;
     }
     .mr-lg-2,
     .mx-lg-2 {
       margin-right: 0.5rem !important;
     }
     .mb-lg-2,
     .my-lg-2 {
       margin-bottom: 0.5rem !important;
     }
     .ml-lg-2,
     .mx-lg-2 {
       margin-left: 0.5rem !important;
     }
     .m-lg-3 {
       margin: 1rem !important;
     }
     .mt-lg-3,
     .my-lg-3 {
       margin-top: 1rem !important;
     }
     .mr-lg-3,
     .mx-lg-3 {
       margin-right: 1rem !important;
     }
     .mb-lg-3,
     .my-lg-3 {
       margin-bottom: 1rem !important;
     }
     .ml-lg-3,
     .mx-lg-3 {
       margin-left: 1rem !important;
     }
     .m-lg-4 {
       margin: 1.5rem !important;
     }
     .mt-lg-4,
     .my-lg-4 {
       margin-top: 1.5rem !important;
     }
     .mr-lg-4,
     .mx-lg-4 {
       margin-right: 1.5rem !important;
     }
     .mb-lg-4,
     .my-lg-4 {
       margin-bottom: 1.5rem !important;
     }
     .ml-lg-4,
     .mx-lg-4 {
       margin-left: 1.5rem !important;
     }
     .m-lg-5 {
       margin: 3rem !important;
     }
     .mt-lg-5,
     .my-lg-5 {
       margin-top: 3rem !important;
     }
     .mr-lg-5,
     .mx-lg-5 {
       margin-right: 3rem !important;
     }
     .mb-lg-5,
     .my-lg-5 {
       margin-bottom: 3rem !important;
     }
     .ml-lg-5,
     .mx-lg-5 {
       margin-left: 3rem !important;
     }
     .p-lg-0 {
       padding: 0 !important;
     }
     .pt-lg-0,
     .py-lg-0 {
       padding-top: 0 !important;
     }
     .pr-lg-0,
     .px-lg-0 {
       padding-right: 0 !important;
     }
     .pb-lg-0,
     .py-lg-0 {
       padding-bottom: 0 !important;
     }
     .pl-lg-0,
     .px-lg-0 {
       padding-left: 0 !important;
     }
     .p-lg-1 {
       padding: 0.25rem !important;
     }
     .pt-lg-1,
     .py-lg-1 {
       padding-top: 0.25rem !important;
     }
     .pr-lg-1,
     .px-lg-1 {
       padding-right: 0.25rem !important;
     }
     .pb-lg-1,
     .py-lg-1 {
       padding-bottom: 0.25rem !important;
     }
     .pl-lg-1,
     .px-lg-1 {
       padding-left: 0.25rem !important;
     }
     .p-lg-2 {
       padding: 0.5rem !important;
     }
     .pt-lg-2,
     .py-lg-2 {
       padding-top: 0.5rem !important;
     }
     .pr-lg-2,
     .px-lg-2 {
       padding-right: 0.5rem !important;
     }
     .pb-lg-2,
     .py-lg-2 {
       padding-bottom: 0.5rem !important;
     }
     .pl-lg-2,
     .px-lg-2 {
       padding-left: 0.5rem !important;
     }
     .p-lg-3 {
       padding: 1rem !important;
     }
     .pt-lg-3,
     .py-lg-3 {
       padding-top: 1rem !important;
     }
     .pr-lg-3,
     .px-lg-3 {
       padding-right: 1rem !important;
     }
     .pb-lg-3,
     .py-lg-3 {
       padding-bottom: 1rem !important;
     }
     .pl-lg-3,
     .px-lg-3 {
       padding-left: 1rem !important;
     }
     .p-lg-4 {
       padding: 1.5rem !important;
     }
     .pt-lg-4,
     .py-lg-4 {
       padding-top: 1.5rem !important;
     }
     .pr-lg-4,
     .px-lg-4 {
       padding-right: 1.5rem !important;
     }
     .pb-lg-4,
     .py-lg-4 {
       padding-bottom: 1.5rem !important;
     }
     .pl-lg-4,
     .px-lg-4 {
       padding-left: 1.5rem !important;
     }
     .p-lg-5 {
       padding: 3rem !important;
     }
     .pt-lg-5,
     .py-lg-5 {
       padding-top: 3rem !important;
     }
     .pr-lg-5,
     .px-lg-5 {
       padding-right: 3rem !important;
     }
     .pb-lg-5,
     .py-lg-5 {
       padding-bottom: 3rem !important;
     }
     .pl-lg-5,
     .px-lg-5 {
       padding-left: 3rem !important;
     }
     .m-lg-auto {
       margin: auto !important;
     }
     .mt-lg-auto,
     .my-lg-auto {
       margin-top: auto !important;
     }
     .mr-lg-auto,
     .mx-lg-auto {
       margin-right: auto !important;
     }
     .mb-lg-auto,
     .my-lg-auto {
       margin-bottom: auto !important;
     }
     .ml-lg-auto,
     .mx-lg-auto {
       margin-left: auto !important;
     }
    }

    @media (min-width: 1200px) {
     .m-xl-0 {
       margin: 0 !important;
     }
     .mt-xl-0,
     .my-xl-0 {
       margin-top: 0 !important;
     }
     .mr-xl-0,
     .mx-xl-0 {
       margin-right: 0 !important;
     }
     .mb-xl-0,
     .my-xl-0 {
       margin-bottom: 0 !important;
     }
     .ml-xl-0,
     .mx-xl-0 {
       margin-left: 0 !important;
     }
     .m-xl-1 {
       margin: 0.25rem !important;
     }
     .mt-xl-1,
     .my-xl-1 {
       margin-top: 0.25rem !important;
     }
     .mr-xl-1,
     .mx-xl-1 {
       margin-right: 0.25rem !important;
     }
     .mb-xl-1,
     .my-xl-1 {
       margin-bottom: 0.25rem !important;
     }
     .ml-xl-1,
     .mx-xl-1 {
       margin-left: 0.25rem !important;
     }
     .m-xl-2 {
       margin: 0.5rem !important;
     }
     .mt-xl-2,
     .my-xl-2 {
       margin-top: 0.5rem !important;
     }
     .mr-xl-2,
     .mx-xl-2 {
       margin-right: 0.5rem !important;
     }
     .mb-xl-2,
     .my-xl-2 {
       margin-bottom: 0.5rem !important;
     }
     .ml-xl-2,
     .mx-xl-2 {
       margin-left: 0.5rem !important;
     }
     .m-xl-3 {
       margin: 1rem !important;
     }
     .mt-xl-3,
     .my-xl-3 {
       margin-top: 1rem !important;
     }
     .mr-xl-3,
     .mx-xl-3 {
       margin-right: 1rem !important;
     }
     .mb-xl-3,
     .my-xl-3 {
       margin-bottom: 1rem !important;
     }
     .ml-xl-3,
     .mx-xl-3 {
       margin-left: 1rem !important;
     }
     .m-xl-4 {
       margin: 1.5rem !important;
     }
     .mt-xl-4,
     .my-xl-4 {
       margin-top: 1.5rem !important;
     }
     .mr-xl-4,
     .mx-xl-4 {
       margin-right: 1.5rem !important;
     }
     .mb-xl-4,
     .my-xl-4 {
       margin-bottom: 1.5rem !important;
     }
     .ml-xl-4,
     .mx-xl-4 {
       margin-left: 1.5rem !important;
     }
     .m-xl-5 {
       margin: 3rem !important;
     }
     .mt-xl-5,
     .my-xl-5 {
       margin-top: 3rem !important;
     }
     .mr-xl-5,
     .mx-xl-5 {
       margin-right: 3rem !important;
     }
     .mb-xl-5,
     .my-xl-5 {
       margin-bottom: 3rem !important;
     }
     .ml-xl-5,
     .mx-xl-5 {
       margin-left: 3rem !important;
     }
     .p-xl-0 {
       padding: 0 !important;
     }
     .pt-xl-0,
     .py-xl-0 {
       padding-top: 0 !important;
     }
     .pr-xl-0,
     .px-xl-0 {
       padding-right: 0 !important;
     }
     .pb-xl-0,
     .py-xl-0 {
       padding-bottom: 0 !important;
     }
     .pl-xl-0,
     .px-xl-0 {
       padding-left: 0 !important;
     }
     .p-xl-1 {
       padding: 0.25rem !important;
     }
     .pt-xl-1,
     .py-xl-1 {
       padding-top: 0.25rem !important;
     }
     .pr-xl-1,
     .px-xl-1 {
       padding-right: 0.25rem !important;
     }
     .pb-xl-1,
     .py-xl-1 {
       padding-bottom: 0.25rem !important;
     }
     .pl-xl-1,
     .px-xl-1 {
       padding-left: 0.25rem !important;
     }
     .p-xl-2 {
       padding: 0.5rem !important;
     }
     .pt-xl-2,
     .py-xl-2 {
       padding-top: 0.5rem !important;
     }
     .pr-xl-2,
     .px-xl-2 {
       padding-right: 0.5rem !important;
     }
     .pb-xl-2,
     .py-xl-2 {
       padding-bottom: 0.5rem !important;
     }
     .pl-xl-2,
     .px-xl-2 {
       padding-left: 0.5rem !important;
     }
     .p-xl-3 {
       padding: 1rem !important;
     }
     .pt-xl-3,
     .py-xl-3 {
       padding-top: 1rem !important;
     }
     .pr-xl-3,
     .px-xl-3 {
       padding-right: 1rem !important;
     }
     .pb-xl-3,
     .py-xl-3 {
       padding-bottom: 1rem !important;
     }
     .pl-xl-3,
     .px-xl-3 {
       padding-left: 1rem !important;
     }
     .p-xl-4 {
       padding: 1.5rem !important;
     }
     .pt-xl-4,
     .py-xl-4 {
       padding-top: 1.5rem !important;
     }
     .pr-xl-4,
     .px-xl-4 {
       padding-right: 1.5rem !important;
     }
     .pb-xl-4,
     .py-xl-4 {
       padding-bottom: 1.5rem !important;
     }
     .pl-xl-4,
     .px-xl-4 {
       padding-left: 1.5rem !important;
     }
     .p-xl-5 {
       padding: 3rem !important;
     }
     .pt-xl-5,
     .py-xl-5 {
       padding-top: 3rem !important;
     }
     .pr-xl-5,
     .px-xl-5 {
       padding-right: 3rem !important;
     }
     .pb-xl-5,
     .py-xl-5 {
       padding-bottom: 3rem !important;
     }
     .pl-xl-5,
     .px-xl-5 {
       padding-left: 3rem !important;
     }
     .m-xl-auto {
       margin: auto !important;
     }
     .mt-xl-auto,
     .my-xl-auto {
       margin-top: auto !important;
     }
     .mr-xl-auto,
     .mx-xl-auto {
       margin-right: auto !important;
     }
     .mb-xl-auto,
     .my-xl-auto {
       margin-bottom: auto !important;
     }
     .ml-xl-auto,
     .mx-xl-auto {
       margin-left: auto !important;
     }
    }
`;

const BsTextColorCss = css`
    
    .text-white {
        color: #fff !important;
    }

    .text-primary {
        color: #007bff !important;
    }

    a.text-primary:hover, a.text-primary:focus {
        color: #0062cc !important;
    }

    .text-secondary {
        color: #6c757d !important;
    }

    a.text-secondary:hover, a.text-secondary:focus {
        color: #545b62 !important;
    }

    .text-success {
        color: #28a745 !important;
    }

    a.text-success:hover, a.text-success:focus {
        color: #1e7e34 !important;
    }

    .text-info {
        color: #17a2b8 !important;
    }

    a.text-info:hover, a.text-info:focus {
        color: #117a8b !important;
    }

    .text-warning {
        color: #ffc107 !important;
    }

    a.text-warning:hover, a.text-warning:focus {
        color: #d39e00 !important;
    }

    .text-danger {
        color: #dc3545 !important;
    }

    a.text-danger:hover, a.text-danger:focus {
        color: #bd2130 !important;
    }

    .text-light {
        color: #f8f9fa !important;
    }

    a.text-light:hover, a.text-light:focus {
        color: #dae0e5 !important;
    }

    .text-dark {
        color: #343a40 !important;
    }

    a.text-dark:hover, a.text-dark:focus {
        color: #1d2124 !important;
    }

    .text-body {
        color: #212529 !important;
    }

    .text-muted {
        color: #6c757d !important;
    }

    .text-black-50 {
        color: rgba(0, 0, 0, 0.5) !important;
    }

    .text-white-50 {
        color: rgba(255, 255, 255, 0.5) !important;
    }

    .text-hide {
        font: 0/0 a;
        color: transparent;
        text-shadow: none;
        background-color: transparent;
        border: 0;
    }
`;

const BsVerticalAlignCss = css`

    .align-baseline {
        vertical-align: baseline !important;
    }

    .align-top {
        vertical-align: top !important;
    }

    .align-middle {
        vertical-align: middle !important;
    }

    .align-bottom {
        vertical-align: bottom !important;
    }

    .align-text-bottom {
        vertical-align: text-bottom !important;
    }

    .align-text-top {
        vertical-align: text-top !important;
    }
`;

const BsVisibilityCss = css`
    
    .visible {
        visibility: visible !important;
    }

    .invisible {
        visibility: hidden !important;
    }
`;

const BsBackgroundColorsCss = css`
    
    .bg-primary {
        background-color: #007bff !important;
    }

    a.bg-primary:hover, 
    a.bg-primary:focus,
        button.bg-primary:hover,
        button.bg-primary:focus {
        background-color: #0062cc !important;
    }

    .bg-secondary {
        background-color: #6c757d !important;
    }

    a.bg-secondary:hover, 
    a.bg-secondary:focus,
        button.bg-secondary:hover,
        button.bg-secondary:focus {
        background-color: #545b62 !important;
    }

    .bg-success {
        background-color: #28a745 !important;
    }

    a.bg-success:hover, 
    a.bg-success:focus,
        button.bg-success:hover,
        button.bg-success:focus {
        background-color: #1e7e34 !important;
    }

    .bg-info {
        background-color: #17a2b8 !important;
    }

    a.bg-info:hover, 
    a.bg-info:focus,
        button.bg-info:hover,
        button.bg-info:focus {
        background-color: #117a8b !important;
    }

    .bg-warning {
        background-color: #ffc107 !important;
    }

    a.bg-warning:hover, 
    a.bg-warning:focus,
        button.bg-warning:hover,
        button.bg-warning:focus {
        background-color: #d39e00 !important;
    }

    .bg-danger {
        background-color: #dc3545 !important;
    }

    a.bg-danger:hover, 
    a.bg-danger:focus,
        button.bg-danger:hover,
        button.bg-danger:focus {
        background-color: #bd2130 !important;
    }

    .bg-light {
        background-color: #f8f9fa !important;
    }

    a.bg-light:hover, 
    a.bg-light:focus,
        button.bg-light:hover,
        button.bg-light:focus {
        background-color: #dae0e5 !important;
    }

    .bg-dark {
        background-color: #343a40 !important;
    }

    a.bg-dark:hover, 
    a.bg-dark:focus,
        button.bg-dark:hover,
        button.bg-dark:focus {
        background-color: #1d2124 !important;
    }

    .bg-white {
        background-color: #fff !important;
    }

    .bg-transparent {
        background-color: transparent !important;
    }
`;

const BsScreenreaderCss = css`
    
    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
    }

    .sr-only-focusable:active, 
    .sr-only-focusable:focus {
        position: static;
        width: auto;
        height: auto;
        overflow: visible;
        clip: auto;
        white-space: normal;
    }
`;

const BsFlexWrapCss = css`
    
    .flex-wrap {
        -ms-flex-wrap: wrap !important;
        flex-wrap: wrap !important;
    }

    .flex-nowrap {
        -ms-flex-wrap: nowrap !important;
        flex-wrap: nowrap !important;
    }

    .flex-wrap-reverse {
        -ms-flex-wrap: wrap-reverse !important;
        flex-wrap: wrap-reverse !important;
    }

    .flex-fill {
        -ms-flex: 1 1 auto !important;
        flex: 1 1 auto !important;
    }
      
    .flex-grow-0 {
        -ms-flex-positive: 0 !important;
        flex-grow: 0 !important;
    }
      
    .flex-grow-1 {
        -ms-flex-positive: 1 !important;
        flex-grow: 1 !important;
    }
      
    .flex-shrink-0 {
        -ms-flex-negative: 0 !important;
        flex-shrink: 0 !important;
    }
      
    .flex-shrink-1 {
        -ms-flex-negative: 1 !important;
        flex-shrink: 1 !important;
    }

    @media (min-width: 576px) {
        
        .flex-sm-wrap {
            -ms-flex-wrap: wrap !important;
            flex-wrap: wrap !important;
        }
         
        .flex-sm-nowrap {
            -ms-flex-wrap: nowrap !important;
            flex-wrap: nowrap !important;
        }
        
        .flex-sm-wrap-reverse {
            -ms-flex-wrap: wrap-reverse !important;
            flex-wrap: wrap-reverse !important;
        }

        .flex-sm-fill {
            -ms-flex: 1 1 auto !important;
            flex: 1 1 auto !important;
        }
        
        .flex-sm-grow-0 {
            -ms-flex-positive: 0 !important;
            flex-grow: 0 !important;
        }
        
        .flex-sm-grow-1 {
            -ms-flex-positive: 1 !important;
            flex-grow: 1 !important;
        }
        
        .flex-sm-shrink-0 {
            -ms-flex-negative: 0 !important;
            flex-shrink: 0 !important;
        }
        
        .flex-sm-shrink-1 {
            -ms-flex-negative: 1 !important;
            flex-shrink: 1 !important;
        }
    }

    @media (min-width: 768px) {

        .flex-md-wrap {
            -ms-flex-wrap: wrap !important;
            flex-wrap: wrap !important;
        }
         
        .flex-md-nowrap {
            -ms-flex-wrap: nowrap !important;
            flex-wrap: nowrap !important;
        }
        
        .flex-md-wrap-reverse {
            -ms-flex-wrap: wrap-reverse !important;
            flex-wrap: wrap-reverse !important;
        }

        .flex-md-fill {
            -ms-flex: 1 1 auto !important;
            flex: 1 1 auto !important;
        }
        
        .flex-md-grow-0 {
            -ms-flex-positive: 0 !important;
            flex-grow: 0 !important;
        }
        
        .flex-md-grow-1 {
            -ms-flex-positive: 1 !important;
            flex-grow: 1 !important;
        }
        
        .flex-md-shrink-0 {
            -ms-flex-negative: 0 !important;
            flex-shrink: 0 !important;
        }
        
        .flex-md-shrink-1 {
            -ms-flex-negative: 1 !important;
            flex-shrink: 1 !important;
        }
    }

    @media (min-width: 992px) {
        
        .flex-lg-wrap {
            -ms-flex-wrap: wrap !important;
            flex-wrap: wrap !important;
        }
        
        .flex-lg-nowrap {
            -ms-flex-wrap: nowrap !important;
            flex-wrap: nowrap !important;
        }
        
        .flex-lg-wrap-reverse {
            -ms-flex-wrap: wrap-reverse !important;
            flex-wrap: wrap-reverse !important;
        }

        .flex-lg-fill {
            -ms-flex: 1 1 auto !important;
            flex: 1 1 auto !important;
        }
        
        .flex-lg-grow-0 {
            -ms-flex-positive: 0 !important;
            flex-grow: 0 !important;
        }
        
        .flex-lg-grow-1 {
            -ms-flex-positive: 1 !important;
            flex-grow: 1 !important;
        }
        
        .flex-lg-shrink-0 {
            -ms-flex-negative: 0 !important;
            flex-shrink: 0 !important;
        }
        
        .flex-lg-shrink-1 {
            -ms-flex-negative: 1 !important;
            flex-shrink: 1 !important;
        }
    }

    @media (min-width: 1200px) {

        .flex-xl-wrap {
            -ms-flex-wrap: wrap !important;
            flex-wrap: wrap !important;
        }
        
        .flex-xl-nowrap {
            -ms-flex-wrap: nowrap !important;
            flex-wrap: nowrap !important;
        }
        
        .flex-xl-wrap-reverse {
            -ms-flex-wrap: wrap-reverse !important;
            flex-wrap: wrap-reverse !important;
        }

        .flex-xl-fill {
            -ms-flex: 1 1 auto !important;
            flex: 1 1 auto !important;
        }
        
        .flex-xl-grow-0 {
            -ms-flex-positive: 0 !important;
            flex-grow: 0 !important;
        }
        
        .flex-xl-grow-1 {
            -ms-flex-positive: 1 !important;
            flex-grow: 1 !important;
        }
        
        .flex-xl-shrink-0 {
            -ms-flex-negative: 0 !important;
            flex-shrink: 0 !important;
        }
        
        .flex-xl-shrink-1 {
            -ms-flex-negative: 1 !important;
            flex-shrink: 1 !important;
        }
    }
`;

const BsFlexOrderCss = css`
    
    .order-first {
        -webkit-box-ordinal-group: 0;
        -ms-flex-order: -1;
        order: -1;
    }

    .order-last {
        -webkit-box-ordinal-group: 14;
        -ms-flex-order: 13;
        order: 13;
    }

    .order-0 {
        -webkit-box-ordinal-group: 1;
        -ms-flex-order: 0;
        order: 0;
    }

    .order-1 {
        -webkit-box-ordinal-group: 2;
        -ms-flex-order: 1;
        order: 1;
    }

    .order-2 {
        -webkit-box-ordinal-group: 3;
        -ms-flex-order: 2;
        order: 2;
    }

    .order-3 {
        -webkit-box-ordinal-group: 4;
        -ms-flex-order: 3;
        order: 3;
    }

    .order-4 {
        -webkit-box-ordinal-group: 5;
        -ms-flex-order: 4;
        order: 4;
    }

    .order-5 {
        -webkit-box-ordinal-group: 6;
        -ms-flex-order: 5;
        order: 5;
    }

    .order-6 {
        -webkit-box-ordinal-group: 7;
        -ms-flex-order: 6;
        order: 6;
    }

    .order-7 {
        -webkit-box-ordinal-group: 8;
        -ms-flex-order: 7;
        order: 7;
    }

    .order-8 {
        -webkit-box-ordinal-group: 9;
        -ms-flex-order: 8;
        order: 8;
    }

    .order-9 {
        -webkit-box-ordinal-group: 10;
        -ms-flex-order: 9;
        order: 9;
    }

    .order-10 {
        -webkit-box-ordinal-group: 11;
        -ms-flex-order: 10;
        order: 10;
    }

    .order-11 {
        -webkit-box-ordinal-group: 12;
        -ms-flex-order: 11;
        order: 11;
    }

    .order-12 {
        -webkit-box-ordinal-group: 13;
        -ms-flex-order: 12;
        order: 12;
    }

    @media (min-width: 576px) {
        
        .order-sm-first {
            -webkit-box-ordinal-group: 0;
            -ms-flex-order: -1;
            order: -1;
        }

        .order-sm-last {
            -webkit-box-ordinal-group: 14;
            -ms-flex-order: 13;
            order: 13;
        }

        .order-sm-0 {
            -webkit-box-ordinal-group: 1;
            -ms-flex-order: 0;
            order: 0;
        }

        .order-sm-1 {
            -webkit-box-ordinal-group: 2;
            -ms-flex-order: 1;
            order: 1;
        }

        .order-sm-2 {
            -webkit-box-ordinal-group: 3;
            -ms-flex-order: 2;
            order: 2;
        }

        .order-sm-3 {
            -webkit-box-ordinal-group: 4;
            -ms-flex-order: 3;
            order: 3;
        }

        .order-sm-4 {
            -webkit-box-ordinal-group: 5;
            -ms-flex-order: 4;
            order: 4;
        }

        .order-sm-5 {
            -webkit-box-ordinal-group: 6;
            -ms-flex-order: 5;
            order: 5;
        }

        .order-sm-6 {
            -webkit-box-ordinal-group: 7;
            -ms-flex-order: 6;
            order: 6;
        }

        .order-sm-7 {
            -webkit-box-ordinal-group: 8;
            -ms-flex-order: 7;
            order: 7;
        }

        .order-sm-8 {
            -webkit-box-ordinal-group: 9;
            -ms-flex-order: 8;
            order: 8;
        }

        .order-sm-9 {
            -webkit-box-ordinal-group: 10;
            -ms-flex-order: 9;
            order: 9;
        }

        .order-sm-10 {
            -webkit-box-ordinal-group: 11;
            -ms-flex-order: 10;
            order: 10;
        }

        .order-sm-11 {
            -webkit-box-ordinal-group: 12;
            -ms-flex-order: 11;
            order: 11;
        }

        .order-sm-12 {
            -webkit-box-ordinal-group: 13;
            -ms-flex-order: 12;
            order: 12;
        }
    }

    @media (min-width: 768px) {
        
        .order-md-first {
            -webkit-box-ordinal-group: 0;
            -ms-flex-order: -1;
            order: -1;
        }

        .order-md-last {
            -webkit-box-ordinal-group: 14;
            -ms-flex-order: 13;
            order: 13;
        }

        .order-md-0 {
            -webkit-box-ordinal-group: 1;
            -ms-flex-order: 0;
            order: 0;
        }

        .order-md-1 {
            -webkit-box-ordinal-group: 2;
            -ms-flex-order: 1;
            order: 1;
        }

        .order-md-2 {
            -webkit-box-ordinal-group: 3;
            -ms-flex-order: 2;
            order: 2;
        }

        .order-md-3 {
            -webkit-box-ordinal-group: 4;
            -ms-flex-order: 3;
            order: 3;
        }

        .order-md-4 {
            -webkit-box-ordinal-group: 5;
            -ms-flex-order: 4;
            order: 4;
        }

        .order-md-5 {
            -webkit-box-ordinal-group: 6;
            -ms-flex-order: 5;
            order: 5;
        }

        .order-md-6 {
            -webkit-box-ordinal-group: 7;
            -ms-flex-order: 6;
            order: 6;
        }

        .order-md-7 {
            -webkit-box-ordinal-group: 8;
            -ms-flex-order: 7;
            order: 7;
        }

        .order-md-8 {
            -webkit-box-ordinal-group: 9;
            -ms-flex-order: 8;
            order: 8;
        }

        .order-md-9 {
            -webkit-box-ordinal-group: 10;
            -ms-flex-order: 9;
            order: 9;
        }

        .order-md-10 {
            -webkit-box-ordinal-group: 11;
            -ms-flex-order: 10;
            order: 10;
        }

        .order-md-11 {
            -webkit-box-ordinal-group: 12;
            -ms-flex-order: 11;
            order: 11;
        }

        .order-md-12 {
            -webkit-box-ordinal-group: 13;
            -ms-flex-order: 12;
            order: 12;
        }
    }

    @media (min-width: 992px) {
        
        .order-lg-first {
            -webkit-box-ordinal-group: 0;
            -ms-flex-order: -1;
            order: -1;
        }

        .order-lg-last {
            -webkit-box-ordinal-group: 14;
            -ms-flex-order: 13;
            order: 13;
        }

        .order-lg-0 {
            -webkit-box-ordinal-group: 1;
            -ms-flex-order: 0;
            order: 0;
        }

        .order-lg-1 {
            -webkit-box-ordinal-group: 2;
            -ms-flex-order: 1;
            order: 1;
        }

        .order-lg-2 {
            -webkit-box-ordinal-group: 3;
            -ms-flex-order: 2;
            order: 2;
        }

        .order-lg-3 {
            -webkit-box-ordinal-group: 4;
            -ms-flex-order: 3;
            order: 3;
        }

        .order-lg-4 {
            -webkit-box-ordinal-group: 5;
            -ms-flex-order: 4;
            order: 4;
        }

        .order-lg-5 {
            -webkit-box-ordinal-group: 6;
            -ms-flex-order: 5;
            order: 5;
        }

        .order-lg-6 {
            -webkit-box-ordinal-group: 7;
            -ms-flex-order: 6;
            order: 6;
        }

        .order-lg-7 {
            -webkit-box-ordinal-group: 8;
            -ms-flex-order: 7;
            order: 7;
        }

        .order-lg-8 {
            -webkit-box-ordinal-group: 9;
            -ms-flex-order: 8;
            order: 8;
        }

        .order-lg-9 {
            -webkit-box-ordinal-group: 10;
            -ms-flex-order: 9;
            order: 9;
        }

        .order-lg-10 {
            -webkit-box-ordinal-group: 11;
            -ms-flex-order: 10;
            order: 10;
        }

        .order-lg-11 {
            -webkit-box-ordinal-group: 12;
            -ms-flex-order: 11;
            order: 11;
        }

        .order-lg-12 {
            -webkit-box-ordinal-group: 13;
            -ms-flex-order: 12;
            order: 12;
        }
    }
    
    @media (min-width: 1200px) {
        
        .order-xl-first {
            -webkit-box-ordinal-group: 0;
            -ms-flex-order: -1;
            order: -1;
        }

        .order-xl-last {
            -webkit-box-ordinal-group: 14;
            -ms-flex-order: 13;
            order: 13;
        }

        .order-xl-0 {
            -webkit-box-ordinal-group: 1;
            -ms-flex-order: 0;
            order: 0;
        }

        .order-xl-1 {
            -webkit-box-ordinal-group: 2;
            -ms-flex-order: 1;
            order: 1;
        }

        .order-xl-2 {
            -webkit-box-ordinal-group: 3;
            -ms-flex-order: 2;
            order: 2;
        }

        .order-xl-3 {
            -webkit-box-ordinal-group: 4;
            -ms-flex-order: 3;
            order: 3;
        }

        .order-xl-4 {
            -webkit-box-ordinal-group: 5;
            -ms-flex-order: 4;
            order: 4;
        }

        .order-xl-5 {
            -webkit-box-ordinal-group: 6;
            -ms-flex-order: 5;
            order: 5;
        }

        .order-xl-6 {
            -webkit-box-ordinal-group: 7;
            -ms-flex-order: 6;
            order: 6;
        }

        .order-xl-7 {
            -webkit-box-ordinal-group: 8;
            -ms-flex-order: 7;
            order: 7;
        }

        .order-xl-8 {
            -webkit-box-ordinal-group: 9;
            -ms-flex-order: 8;
            order: 8;
        }

        .order-xl-9 {
            -webkit-box-ordinal-group: 10;
            -ms-flex-order: 9;
            order: 9;
        }

        .order-xl-10 {
            -webkit-box-ordinal-group: 11;
            -ms-flex-order: 10;
            order: 10;
        }

        .order-xl-11 {
            -webkit-box-ordinal-group: 12;
            -ms-flex-order: 11;
            order: 11;
        }

        .order-xl-12 {
            -webkit-box-ordinal-group: 13;
            -ms-flex-order: 12;
            order: 12;
        }
    }
`;

const BsFlexOffsetCss = css`
    
    .offset-1 {
        margin-left: 8.333333%;
    }

    .offset-2 {
        margin-left: 16.666667%;
    }

    .offset-3 {
        margin-left: 25%;
    }

    .offset-4 {
        margin-left: 33.333333%;
    }

    .offset-5 {
        margin-left: 41.666667%;
    }

    .offset-6 {
        margin-left: 50%;
    }

    .offset-7 {
        margin-left: 58.333333%;
    }

    .offset-8 {
        margin-left: 66.666667%;
    }

    .offset-9 {
        margin-left: 75%;
    }

    .offset-10 {
        margin-left: 83.333333%;
    }

    .offset-11 {
        margin-left: 91.666667%;
    }
    
    @media (min-width: 576px) {
        
        .offset-sm-0 {
            margin-left: 0;
        }

        .offset-sm-1 {
            margin-left: 8.333333%;
        }

        .offset-sm-2 {
            margin-left: 16.666667%;
        }

        .offset-sm-3 {
            margin-left: 25%;
        }

        .offset-sm-4 {
            margin-left: 33.333333%;
        }

        .offset-sm-5 {
            margin-left: 41.666667%;
        }

        .offset-sm-6 {
            margin-left: 50%;
        }

        .offset-sm-7 {
            margin-left: 58.333333%;
        }

        .offset-sm-8 {
            margin-left: 66.666667%;
        }

        .offset-sm-9 {
            margin-left: 75%;
        }

        .offset-sm-10 {
            margin-left: 83.333333%;
        }

        .offset-sm-11 {
            margin-left: 91.666667%;
        }
    }

    @media (min-width: 768px) {
        
        .offset-md-0 {
            margin-left: 0;
        }

        .offset-md-1 {
            margin-left: 8.333333%;
        }

        .offset-md-2 {
            margin-left: 16.666667%;
        }

        .offset-md-3 {
            margin-left: 25%;
        }

        .offset-md-4 {
            margin-left: 33.333333%;
        }

        .offset-md-5 {
            margin-left: 41.666667%;
        }

        .offset-md-6 {
            margin-left: 50%;
        }

        .offset-md-7 {
            margin-left: 58.333333%;
        }

        .offset-md-8 {
            margin-left: 66.666667%;
        }

        .offset-md-9 {
            margin-left: 75%;
        }

        .offset-md-10 {
            margin-left: 83.333333%;
        }

        .offset-md-11 {
            margin-left: 91.666667%;
        }
    }
    
    @media (min-width: 992px) {
        
        .offset-lg-0 {
            margin-left: 0;
        }

        .offset-lg-1 {
            margin-left: 8.333333%;
        }

        .offset-lg-2 {
            margin-left: 16.666667%;
        }

        .offset-lg-3 {
            margin-left: 25%;
        }

        .offset-lg-4 {
            margin-left: 33.333333%;
        }

        .offset-lg-5 {
            margin-left: 41.666667%;
        }

        .offset-lg-6 {
            margin-left: 50%;
        }

        .offset-lg-7 {
            margin-left: 58.333333%;
        }

        .offset-lg-8 {
            margin-left: 66.666667%;
        }

        .offset-lg-9 {
            margin-left: 75%;
        }

        .offset-lg-10 {
            margin-left: 83.333333%;
        }

        .offset-lg-11 {
            margin-left: 91.666667%;
        }
    }
    
    @media (min-width: 1200px) {
        
        .offset-xl-0 {
            margin-left: 0;
        }

        .offset-xl-1 {
            margin-left: 8.333333%;
        }

        .offset-xl-2 {
            margin-left: 16.666667%;
        }

        .offset-xl-3 {
            margin-left: 25%;
        }

        .offset-xl-4 {
            margin-left: 33.333333%;
        }

        .offset-xl-5 {
            margin-left: 41.666667%;
        }

        .offset-xl-6 {
            margin-left: 50%;
        }

        .offset-xl-7 {
            margin-left: 58.333333%;
        }

        .offset-xl-8 {
            margin-left: 66.666667%;
        }

        .offset-xl-9 {
            margin-left: 75%;
        }

        .offset-xl-10 {
            margin-left: 83.333333%;
        }

        .offset-xl-11 {
            margin-left: 91.666667%;
        }
    }
`;

const BsFlexDisplayCss = css`
    
    .d-flex {
        display: -ms-flexbox !important;
        display: flex !important;
    }

    .d-inline-flex {
        display: -ms-inline-flexbox !important;
        display: inline-flex !important;
    }

    @media (min-width: 576px) {

        .d-sm-flex {
            display: -ms-flexbox !important;
            display: flex !important;
        }

        .d-sm-inline-flex {
            display: -ms-inline-flexbox !important;
            display: inline-flex !important;
        }
    }

    @media (min-width: 768px) {

        .d-md-flex {
            display: -ms-flexbox !important;
            display: flex !important;
        }

        .d-md-inline-flex {
            display: -ms-inline-flexbox !important;
            display: inline-flex !important;
        }
    }

    @media (min-width: 992px) {

        .d-lg-flex {
            display: -ms-flexbox !important;
            display: flex !important;
        }

        .d-lg-inline-flex {
            display: -ms-inline-flexbox !important;
            display: inline-flex !important;
        }
    }

    @media (min-width: 1200px) {

        .d-xl-flex {
            display: -ms-flexbox !important;
            display: flex !important;
        }

        .d-xl-inline-flex {
            display: -ms-inline-flexbox !important;
            display: inline-flex !important;
        }
    }

    @media print {

        .d-print-flex {
            display: -ms-flexbox !important;
            display: flex !important;
        }

        .d-print-inline-flex {
            display: -ms-inline-flexbox !important;
            display: inline-flex !important;
        }
    }
`;

const BsFlexJustifyCss = css`

    .justify-content-start {
        -ms-flex-pack: start !important;
        justify-content: flex-start !important;
    }

    .justify-content-end {
        -ms-flex-pack: end !important;
        justify-content: flex-end !important;
    }

    .justify-content-center {
        -ms-flex-pack: center !important;
        justify-content: center !important;
    }

    .justify-content-between {
        -ms-flex-pack: justify !important;
        justify-content: space-between !important;
    }

    .justify-content-around {
        -ms-flex-pack: distribute !important;
        justify-content: space-around !important;
    }
       
    @media (min-width: 576px) {
        
        .justify-content-sm-start {
            -ms-flex-pack: start !important;
            justify-content: flex-start !important;
        }

        .justify-content-sm-end {
            -ms-flex-pack: end !important;
            justify-content: flex-end !important;
        }

        .justify-content-sm-center {
            -ms-flex-pack: center !important;
            justify-content: center !important;
        }

        .justify-content-sm-between {
            -ms-flex-pack: justify !important;
            justify-content: space-between !important;
        }

        .justify-content-sm-around {
            -ms-flex-pack: distribute !important;
            justify-content: space-around !important;
        }
    }

    @media (min-width: 768px) {
        
        .justify-content-md-start {
            -ms-flex-pack: start !important;
            justify-content: flex-start !important;
        }

        .justify-content-md-end {
            -ms-flex-pack: end !important;
            justify-content: flex-end !important;
        }

        .justify-content-md-center {
            -ms-flex-pack: center !important;
            justify-content: center !important;
        }

        .justify-content-md-between {
            -ms-flex-pack: justify !important;
            justify-content: space-between !important;
        }

        .justify-content-md-around {
            -ms-flex-pack: distribute !important;
            justify-content: space-around !important;
        }
    }

    @media (min-width: 992px) {
        
        .justify-content-lg-start {
            -ms-flex-pack: start !important;
            justify-content: flex-start !important;
        }

        .justify-content-lg-end {
            -ms-flex-pack: end !important;
            justify-content: flex-end !important;
        }

        .justify-content-lg-center {
            -ms-flex-pack: center !important;
            justify-content: center !important;
        }

        .justify-content-lg-between {
            -ms-flex-pack: justify !important;
            justify-content: space-between !important;
        }

        .justify-content-lg-around {
            -ms-flex-pack: distribute !important;
            justify-content: space-around !important;
        }
    }

    @media (min-width: 1200px) {
        
        .justify-content-xl-start {
            -ms-flex-pack: start !important;
            justify-content: flex-start !important;
        }

        .justify-content-xl-end {
            -ms-flex-pack: end !important;
            justify-content: flex-end !important;
        }

        .justify-content-xl-center {
            -ms-flex-pack: center !important;
            justify-content: center !important;
        }

        .justify-content-xl-between {
            -ms-flex-pack: justify !important;
            justify-content: space-between !important;
        }

        .justify-content-xl-around {
            -ms-flex-pack: distribute !important;
            justify-content: space-around !important;
        }
    }
`;

const BsFlexDirectionCss = css`
    
    .flex-row {
        -ms-flex-direction: row !important;
        flex-direction: row !important;
    }

    .flex-column {
        -ms-flex-direction: column !important;
        flex-direction: column !important;
    }

    .flex-row-reverse {
        -ms-flex-direction: row-reverse !important;
        flex-direction: row-reverse !important;
    }

    .flex-column-reverse {
        -ms-flex-direction: column-reverse !important;
        flex-direction: column-reverse !important;
    }

    @media (min-width: 576px) {
    
        .flex-sm-row {
            -ms-flex-direction: row !important;
            flex-direction: row !important;
        }

        .flex-sm-column {
            -ms-flex-direction: column !important;
            flex-direction: column !important;
        }

        .flex-sm-row-reverse {
            -ms-flex-direction: row-reverse !important;
            flex-direction: row-reverse !important;
        }
         
        .flex-sm-column-reverse {
            -ms-flex-direction: column-reverse !important;
            flex-direction: column-reverse !important;
        }
    }

    @media (min-width: 768px) {
        
        .flex-md-row {
            -ms-flex-direction: row !important;
            flex-direction: row !important;
        }

        .flex-md-column {
            -ms-flex-direction: column !important;
            flex-direction: column !important;
        }

        .flex-md-row-reverse {
            -ms-flex-direction: row-reverse !important;
            flex-direction: row-reverse !important;
        }

        .flex-md-column-reverse {
            -ms-flex-direction: column-reverse !important;
            flex-direction: column-reverse !important;
        }
    }

    @media (min-width: 992px) {
        
        .flex-lg-row {
            -ms-flex-direction: row !important;
            flex-direction: row !important;
        }

        .flex-lg-column {
            -ms-flex-direction: column !important;
            flex-direction: column !important;
        }

        .flex-lg-row-reverse {
            -ms-flex-direction: row-reverse !important;
            flex-direction: row-reverse !important;
        }

        .flex-lg-column-reverse {
            -ms-flex-direction: column-reverse !important;
            flex-direction: column-reverse !important;
        }
    }

    @media (min-width: 1200px) {
        
        .flex-xl-row {
            -ms-flex-direction: row !important;
            flex-direction: row !important;
        }

        .flex-xl-column {
            -ms-flex-direction: column !important;
            flex-direction: column !important;
        }

        .flex-xl-row-reverse {
            -ms-flex-direction: row-reverse !important;
            flex-direction: row-reverse !important;
        }

        .flex-xl-column-reverse {
            -ms-flex-direction: column-reverse !important;
            flex-direction: column-reverse !important;
        }
    }
`;

const BsFlexAlignSelfCss = css`
    
    .align-self-auto {
        -ms-flex-item-align: auto !important;
        align-self: auto !important;
    }

    .align-self-start {
        -ms-flex-item-align: start !important;
        align-self: flex-start !important;
    }

    .align-self-end {
        -ms-flex-item-align: end !important;
        align-self: flex-end !important;
    }

    .align-self-center {
        -ms-flex-item-align: center !important;
        align-self: center !important;
    }

    .align-self-baseline {
        -ms-flex-item-align: baseline !important;
        align-self: baseline !important;
    }

    .align-self-stretch {
        -ms-flex-item-align: stretch !important;
        align-self: stretch !important;
    }

    @media (min-width: 576px) {
        
        .align-self-sm-auto {
            -ms-flex-item-align: auto !important;
            align-self: auto !important;
        }

        .align-self-sm-start {
            -ms-flex-item-align: start !important;
            align-self: flex-start !important;
        }

        .align-self-sm-end {
            -ms-flex-item-align: end !important;
            align-self: flex-end !important;
        }

        .align-self-sm-center {
            -ms-flex-item-align: center !important;
            align-self: center !important;
        }

        .align-self-sm-baseline {
            -ms-flex-item-align: baseline !important;
            align-self: baseline !important;
        }

        .align-self-sm-stretch {
            -ms-flex-item-align: stretch !important;
            align-self: stretch !important;
        }
    }

    @media (min-width: 768px) {
        
        .align-self-md-auto {
            -ms-flex-item-align: auto !important;
            align-self: auto !important;
        }

        .align-self-md-start {
            -ms-flex-item-align: start !important;
            align-self: flex-start !important;
        }

        .align-self-md-end {
            -ms-flex-item-align: end !important;
            align-self: flex-end !important;
        }

        .align-self-md-center {
            -ms-flex-item-align: center !important;
            align-self: center !important;
        }

        .align-self-md-baseline {
            -ms-flex-item-align: baseline !important;
            align-self: baseline !important;
        }

        .align-self-md-stretch {
            -ms-flex-item-align: stretch !important;
            align-self: stretch !important;
        }
    }

    @media (min-width: 992px) {
        
        .align-self-lg-auto {
            -ms-flex-item-align: auto !important;
            align-self: auto !important;
        }

        .align-self-lg-start {
            -ms-flex-item-align: start !important;
            align-self: flex-start !important;
        }

        .align-self-lg-end {
            -ms-flex-item-align: end !important;
            align-self: flex-end !important;
        }

        .align-self-lg-center {
            -ms-flex-item-align: center !important;
            align-self: center !important;
        }

        .align-self-lg-baseline {
            -ms-flex-item-align: baseline !important;
            align-self: baseline !important;
        }

        .align-self-lg-stretch {
            -ms-flex-item-align: stretch !important;
            align-self: stretch !important;
        }
    }

    @media (min-width: 1200px) {
        
        .align-self-xl-auto {
            -ms-flex-item-align: auto !important;
            align-self: auto !important;
        }

        .align-self-xl-start {
            -ms-flex-item-align: start !important;
            align-self: flex-start !important;
        }

        .align-self-xl-end {
            -ms-flex-item-align: end !important;
            align-self: flex-end !important;
        }

        .align-self-xl-center {
            -ms-flex-item-align: center !important;
            align-self: center !important;
        }

        .align-self-xl-baseline {
            -ms-flex-item-align: baseline !important;
            align-self: baseline !important;
        }

        .align-self-xl-stretch {
            -ms-flex-item-align: stretch !important;
            align-self: stretch !important;
        }
    }
`;

const BsFlexAlignItemsCss = css`
    
    .align-items-start {
        -ms-flex-align: start !important;
        align-items: flex-start !important;
    }
    
    .align-items-end {
        -ms-flex-align: end !important;
        align-items: flex-end !important;
    }
    
    .align-items-center {
        -ms-flex-align: center !important;
        align-items: center !important;
    }

    .align-items-baseline {
        -ms-flex-align: baseline !important;
        align-items: baseline !important;
    }

    .align-items-stretch {
        -ms-flex-align: stretch !important;
        align-items: stretch !important;
    }

    @media (min-width: 576px) {
        
        .align-items-sm-start {
            -ms-flex-align: start !important;
            align-items: flex-start !important;
        }

        .align-items-sm-end {
            -ms-flex-align: end !important;
            align-items: flex-end !important;
        }

        .align-items-sm-center {
            -ms-flex-align: center !important;
            align-items: center !important;
        }

        .align-items-sm-baseline {
            -ms-flex-align: baseline !important;
            align-items: baseline !important;
        }

        .align-items-sm-stretch {
            -ms-flex-align: stretch !important;
            align-items: stretch !important;
        }
    }

    @media (min-width: 768px) {
        
        .align-items-md-start {
            -ms-flex-align: start !important;
            align-items: flex-start !important;
        }

        .align-items-md-end {
            -ms-flex-align: end !important;
            align-items: flex-end !important;
        }

        .align-items-md-center {
            -ms-flex-align: center !important;
            align-items: center !important;
        }
        
        .align-items-md-baseline {
            -ms-flex-align: baseline !important;
            align-items: baseline !important;
        }
        
        .align-items-md-stretch {
            -ms-flex-align: stretch !important;
            align-items: stretch !important;
        }
    }

    @media (min-width: 992px) {
        
        .align-items-lg-start {
            -ms-flex-align: start !important;
            align-items: flex-start !important;
        }
        
        .align-items-lg-end {
            -ms-flex-align: end !important;
            align-items: flex-end !important;
        }

        .align-items-lg-center {
            align-items: center !important;
        }

        .align-items-lg-baseline {
            -ms-flex-align: baseline !important;
            align-items: baseline !important;
        }
        
        .align-items-lg-stretch {
            -ms-flex-align: stretch !important;
            align-items: stretch !important;
        }
    }

    @media (min-width: 1200px) {
        
        .align-items-xl-start {
            -ms-flex-align: start !important;
            align-items: flex-start !important;
        }
        
        .align-items-xl-end {
            -ms-flex-align: end !important;
            align-items: flex-end !important;
        }

        .align-items-xl-center {
            -ms-flex-align: center !important;
            align-items: center !important;
        }
        
        .align-items-xl-baseline {
            -ms-flex-align: baseline !important;
            align-items: baseline !important;
        }
        
        .align-items-xl-stretch {
            -ms-flex-align: stretch !important;
            align-items: stretch !important;
        }
    }
`;

const BsFlexAlignContentCss = css`
    
    .align-content-start {
        -ms-flex-line-pack: start !important;
        align-content: flex-start !important;
    }

    .align-content-end {
        -ms-flex-line-pack: end !important;
        align-content: flex-end !important;
    }

    .align-content-center {
        -ms-flex-line-pack: center !important;
        align-content: center !important;
    }

    .align-content-between {
        -ms-flex-line-pack: justify !important;
        align-content: space-between !important;
    }

    .align-content-around {
        -ms-flex-line-pack: distribute !important;
        align-content: space-around !important;
    }

    .align-content-stretch {
        -ms-flex-line-pack: stretch !important;
        align-content: stretch !important;
    }
    
    @media (min-width: 576px) {
        
        .align-content-sm-start {
            -ms-flex-line-pack: start !important;
            align-content: flex-start !important;
        }

        .align-content-sm-end {
            -ms-flex-line-pack: end !important;
            align-content: flex-end !important;
        }

        .align-content-sm-center {
            -ms-flex-line-pack: center !important;
            align-content: center !important;
        }

        .align-content-sm-between {
            -ms-flex-line-pack: justify !important;
            align-content: space-between !important;
        }

        .align-content-sm-around {
            -ms-flex-line-pack: distribute !important;
            align-content: space-around !important;
        }

        .align-content-sm-stretch {
            -ms-flex-line-pack: stretch !important;
            align-content: stretch !important;
        }
    }
    
    @media (min-width: 768px) {
        
        .align-content-md-start {
            -ms-flex-line-pack: start !important;
            align-content: flex-start !important;
        }

        .align-content-md-end {
            -ms-flex-line-pack: end !important;
            align-content: flex-end !important;
        }

        .align-content-md-center {
            -ms-flex-line-pack: center !important;
            align-content: center !important;
        }

        .align-content-md-between {
            -ms-flex-line-pack: justify !important;
            align-content: space-between !important;
        }

        .align-content-md-around {
            -ms-flex-line-pack: distribute !important;
            align-content: space-around !important;
        }

        .align-content-md-stretch {
            -ms-flex-line-pack: stretch !important;
            align-content: stretch !important;
        }
    }

    @media (min-width: 992px) {
        
        .align-content-lg-start {
            -ms-flex-line-pack: start !important;
            align-content: flex-start !important;
        }

        .align-content-lg-end {
            -ms-flex-line-pack: end !important;
            align-content: flex-end !important;
        }

        .align-content-lg-center {
            -ms-flex-line-pack: center !important;
            align-content: center !important;
        }

        .align-content-lg-between {
            -ms-flex-line-pack: justify !important;
            align-content: space-between !important;
        }

        .align-content-lg-around {
            -ms-flex-line-pack: distribute !important;
            align-content: space-around !important;
        }

        .align-content-lg-stretch {
            -ms-flex-line-pack: stretch !important;
            align-content: stretch !important;
        }
    }

    @media (min-width: 1200px) {
    
        .align-content-xl-start {
            -ms-flex-line-pack: start !important;
            align-content: flex-start !important;
        }

        .align-content-xl-end {
            -ms-flex-line-pack: end !important;
            align-content: flex-end !important;
        }

        .align-content-xl-center {
            -ms-flex-line-pack: center !important;
            align-content: center !important;
        }

        .align-content-xl-between {
            -ms-flex-line-pack: justify !important;
            align-content: space-between !important;
        }

        .align-content-xl-around {
            -ms-flex-line-pack: distribute !important;
            align-content: space-around !important;
        }

        .align-content-xl-stretch {
            -ms-flex-line-pack: stretch !important;
            align-content: stretch !important;
        }
    }
`;

export { BsBackgroundColorsCss, BsBordersCss, BsClearfixCss, BsDisplayCss, BsEmbeddedCss, BsFlexAlignContentCss, BsFlexAlignItemsCss, BsFlexAlignSelfCss, BsFlexDirectionCss, BsFlexDisplayCss, BsFlexJustifyCss, BsFlexOffsetCss, BsFlexOrderCss, BsFlexWrapCss, BsFloatCss, BsPositionCss, BsScreenreaderCss, BsSizingCss, BsSpacingCss, BsTextColorCss, BsTextCss, BsVerticalAlignCss, BsVisibilityCss };
