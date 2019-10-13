import '../common/lit-html-9b6153da.js';
import { css } from '../lit-element.js';
export { a as BsSizingCss, B as BsTextCss } from '../common/bs-sizing.css-89c18bf2.js';
export { B as BsPositionCss, a as BsTextColorCss } from '../common/bs-text-colors.css-1b784395.js';
export { B as BsSpacingCss } from '../common/bs-spacing.css-ba183fdb.js';
export { b as BsFlexAlignItemsCss, B as BsFlexDisplayCss, a as BsFlexJustifyCss } from '../common/bs-flex-align-items.css-e3493319.js';

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
        flex-wrap: wrap !important;
    }

    .flex-nowrap {
        flex-wrap: nowrap !important;
    }

    .flex-wrap-reverse {
        flex-wrap: wrap-reverse !important;
    }

    .flex-fill {
        flex: 1 1 auto !important;
    }

    .flex-grow-0 {
        flex-grow: 0 !important;
    }

    .flex-grow-1 {
        flex-grow: 1 !important;
    }

    .flex-shrink-0 {
        flex-shrink: 0 !important;
    }

    .flex-shrink-1 {
        flex-shrink: 1 !important;
    }

    @media (min-width: 576px) {

        .flex-sm-wrap {
            flex-wrap: wrap !important;
        }

        .flex-sm-nowrap {
            flex-wrap: nowrap !important;
        }

        .flex-sm-wrap-reverse {
            flex-wrap: wrap-reverse !important;
        }

        .flex-sm-fill {
            flex: 1 1 auto !important;
        }

        .flex-sm-grow-0 {
            flex-grow: 0 !important;
        }

        .flex-sm-grow-1 {
            flex-grow: 1 !important;
        }

        .flex-sm-shrink-0 {
            flex-shrink: 0 !important;
        }

        .flex-sm-shrink-1 {
            flex-shrink: 1 !important;
        }
    }

    @media (min-width: 768px) {

        .flex-md-wrap {
            flex-wrap: wrap !important;
        }

        .flex-md-nowrap {
            flex-wrap: nowrap !important;
        }

        .flex-md-wrap-reverse {
            flex-wrap: wrap-reverse !important;
        }

        .flex-md-fill {
            flex: 1 1 auto !important;
        }

        .flex-md-grow-0 {
            flex-grow: 0 !important;
        }

        .flex-md-grow-1 {
            flex-grow: 1 !important;
        }

        .flex-md-shrink-0 {
            flex-shrink: 0 !important;
        }

        .flex-md-shrink-1 {
            flex-shrink: 1 !important;
        }
    }

    @media (min-width: 992px) {

        .flex-lg-wrap {
            flex-wrap: wrap !important;
        }

        .flex-lg-nowrap {
            flex-wrap: nowrap !important;
        }

        .flex-lg-wrap-reverse {
            flex-wrap: wrap-reverse !important;
        }

        .flex-lg-fill {
            flex: 1 1 auto !important;
        }

        .flex-lg-grow-0 {
            flex-grow: 0 !important;
        }

        .flex-lg-grow-1 {
            flex-grow: 1 !important;
        }

        .flex-lg-shrink-0 {
            flex-shrink: 0 !important;
        }

        .flex-lg-shrink-1 {
            flex-shrink: 1 !important;
        }
    }

    @media (min-width: 1200px) {

        .flex-xl-wrap {
            flex-wrap: wrap !important;
        }

        .flex-xl-nowrap {
            flex-wrap: nowrap !important;
        }

        .flex-xl-wrap-reverse {
            flex-wrap: wrap-reverse !important;
        }

        .flex-xl-fill {
            flex: 1 1 auto !important;
        }

        .flex-xl-grow-0 {
            flex-grow: 0 !important;
        }

        .flex-xl-grow-1 {
            flex-grow: 1 !important;
        }

        .flex-xl-shrink-0 {
            flex-shrink: 0 !important;
        }

        .flex-xl-shrink-1 {
            flex-shrink: 1 !important;
        }
    }
`;

const BsFlexOrderCss = css`

    .order-first {
        order: -1;
    }

    .order-last {
        order: 13;
    }

    .order-0 {
        order: 0;
    }

    .order-1 {
        order: 1;
    }

    .order-2 {
        order: 2;
    }

    .order-3 {
        order: 3;
    }

    .order-4 {
        order: 4;
    }

    .order-5 {
        order: 5;
    }

    .order-6 {
        order: 6;
    }

    .order-7 {
        order: 7;
    }

    .order-8 {
        order: 8;
    }

    .order-9 {
        order: 9;
    }

    .order-10 {
        order: 10;
    }

    .order-11 {
        order: 11;
    }

    .order-12 {
        order: 12;
    }

    @media (min-width: 576px) {

        .order-sm-first {
            order: -1;
        }

        .order-sm-last {
            order: 13;
        }

        .order-sm-0 {
            order: 0;
        }

        .order-sm-1 {
            order: 1;
        }

        .order-sm-2 {
            order: 2;
        }

        .order-sm-3 {
            order: 3;
        }

        .order-sm-4 {
            order: 4;
        }

        .order-sm-5 {
            order: 5;
        }

        .order-sm-6 {
            order: 6;
        }

        .order-sm-7 {
            order: 7;
        }

        .order-sm-8 {
            order: 8;
        }

        .order-sm-9 {
            order: 9;
        }

        .order-sm-10 {
            order: 10;
        }

        .order-sm-11 {
            order: 11;
        }

        .order-sm-12 {
            order: 12;
        }
    }

    @media (min-width: 768px) {

        .order-md-first {
            order: -1;
        }

        .order-md-last {
            order: 13;
        }

        .order-md-0 {
            order: 0;
        }

        .order-md-1 {
            order: 1;
        }

        .order-md-2 {
            order: 2;
        }

        .order-md-3 {
            order: 3;
        }

        .order-md-4 {
            order: 4;
        }

        .order-md-5 {
            order: 5;
        }

        .order-md-6 {
            order: 6;
        }

        .order-md-7 {
            order: 7;
        }

        .order-md-8 {
            order: 8;
        }

        .order-md-9 {
            order: 9;
        }

        .order-md-10 {
            order: 10;
        }

        .order-md-11 {
            order: 11;
        }

        .order-md-12 {
            order: 12;
        }
    }

    @media (min-width: 992px) {

        .order-lg-first {
            order: -1;
        }

        .order-lg-last {
            order: 13;
        }

        .order-lg-0 {
            order: 0;
        }

        .order-lg-1 {
            order: 1;
        }

        .order-lg-2 {
            order: 2;
        }

        .order-lg-3 {
            order: 3;
        }

        .order-lg-4 {
            order: 4;
        }

        .order-lg-5 {
            order: 5;
        }

        .order-lg-6 {
            order: 6;
        }

        .order-lg-7 {
            order: 7;
        }

        .order-lg-8 {
            order: 8;
        }

        .order-lg-9 {
            order: 9;
        }

        .order-lg-10 {
            order: 10;
        }

        .order-lg-11 {
            order: 11;
        }

        .order-lg-12 {
            order: 12;
        }
    }

    @media (min-width: 1200px) {

        .order-xl-first {
            order: -1;
        }

        .order-xl-last {
            order: 13;
        }

        .order-xl-0 {
            order: 0;
        }

        .order-xl-1 {
            order: 1;
        }

        .order-xl-2 {
            order: 2;
        }

        .order-xl-3 {
            order: 3;
        }

        .order-xl-4 {
            order: 4;
        }

        .order-xl-5 {
            order: 5;
        }

        .order-xl-6 {
            order: 6;
        }

        .order-xl-7 {
            order: 7;
        }

        .order-xl-8 {
            order: 8;
        }

        .order-xl-9 {
            order: 9;
        }

        .order-xl-10 {
            order: 10;
        }

        .order-xl-11 {
            order: 11;
        }

        .order-xl-12 {
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

const BsFlexDirectionCss = css`

    .flex-row {
        flex-direction: row !important;
    }

    .flex-column {
        flex-direction: column !important;
    }

    .flex-row-reverse {
        flex-direction: row-reverse !important;
    }

    .flex-column-reverse {
        flex-direction: column-reverse !important;
    }

    @media (min-width: 576px) {

        .flex-sm-row {
            flex-direction: row !important;
        }

        .flex-sm-column {
            flex-direction: column !important;
        }

        .flex-sm-row-reverse {
            flex-direction: row-reverse !important;
        }

        .flex-sm-column-reverse {
            flex-direction: column-reverse !important;
        }
    }

    @media (min-width: 768px) {

        .flex-md-row {
            flex-direction: row !important;
        }

        .flex-md-column {
            flex-direction: column !important;
        }

        .flex-md-row-reverse {
            flex-direction: row-reverse !important;
        }

        .flex-md-column-reverse {
            flex-direction: column-reverse !important;
        }
    }

    @media (min-width: 992px) {

        .flex-lg-row {
            flex-direction: row !important;
        }

        .flex-lg-column {
            flex-direction: column !important;
        }

        .flex-lg-row-reverse {
            flex-direction: row-reverse !important;
        }

        .flex-lg-column-reverse {
            flex-direction: column-reverse !important;
        }
    }

    @media (min-width: 1200px) {

        .flex-xl-row {
            flex-direction: row !important;
        }

        .flex-xl-column {
            flex-direction: column !important;
        }

        .flex-xl-row-reverse {
            flex-direction: row-reverse !important;
        }

        .flex-xl-column-reverse {
            flex-direction: column-reverse !important;
        }
    }
`;

const BsFlexAlignSelfCss = css`

    .align-self-auto {
        align-self: auto !important;
    }

    .align-self-start {
        align-self: flex-start !important;
    }

    .align-self-end {
        align-self: flex-end !important;
    }

    .align-self-center {
        align-self: center !important;
    }

    .align-self-baseline {
        align-self: baseline !important;
    }

    .align-self-stretch {
        align-self: stretch !important;
    }

    @media (min-width: 576px) {

        .align-self-sm-auto {
            align-self: auto !important;
        }

        .align-self-sm-start {
            align-self: flex-start !important;
        }

        .align-self-sm-end {
            align-self: flex-end !important;
        }

        .align-self-sm-center {
            align-self: center !important;
        }

        .align-self-sm-baseline {
            align-self: baseline !important;
        }

        .align-self-sm-stretch {
            align-self: stretch !important;
        }
    }

    @media (min-width: 768px) {

        .align-self-md-auto {
            align-self: auto !important;
        }

        .align-self-md-start {
            align-self: flex-start !important;
        }

        .align-self-md-end {
            align-self: flex-end !important;
        }

        .align-self-md-center {
            align-self: center !important;
        }

        .align-self-md-baseline {
            align-self: baseline !important;
        }

        .align-self-md-stretch {
            align-self: stretch !important;
        }
    }

    @media (min-width: 992px) {

        .align-self-lg-auto {
            align-self: auto !important;
        }

        .align-self-lg-start {
            align-self: flex-start !important;
        }

        .align-self-lg-end {
            align-self: flex-end !important;
        }

        .align-self-lg-center {
            align-self: center !important;
        }

        .align-self-lg-baseline {
            align-self: baseline !important;
        }

        .align-self-lg-stretch {
            align-self: stretch !important;
        }
    }

    @media (min-width: 1200px) {

        .align-self-xl-auto {
            align-self: auto !important;
        }

        .align-self-xl-start {
            align-self: flex-start !important;
        }

        .align-self-xl-end {
            align-self: flex-end !important;
        }

        .align-self-xl-center {
            align-self: center !important;
        }

        .align-self-xl-baseline {
            align-self: baseline !important;
        }

        .align-self-xl-stretch {
            align-self: stretch !important;
        }
    }
`;

const BsFlexAlignContentCss = css`

    .align-content-start {
        align-content: flex-start !important;
    }

    .align-content-end {
        align-content: flex-end !important;
    }

    .align-content-center {
        align-content: center !important;
    }

    .align-content-between {
        align-content: space-between !important;
    }

    .align-content-around {
        align-content: space-around !important;
    }

    .align-content-stretch {
        align-content: stretch !important;
    }

    @media (min-width: 576px) {

        .align-content-sm-start {
            align-content: flex-start !important;
        }

        .align-content-sm-end {
            align-content: flex-end !important;
        }

        .align-content-sm-center {
            align-content: center !important;
        }

        .align-content-sm-between {
            align-content: space-between !important;
        }

        .align-content-sm-around {
            align-content: space-around !important;
        }

        .align-content-sm-stretch {
            align-content: stretch !important;
        }
    }

    @media (min-width: 768px) {

        .align-content-md-start {
            align-content: flex-start !important;
        }

        .align-content-md-end {
            align-content: flex-end !important;
        }

        .align-content-md-center {
            align-content: center !important;
        }

        .align-content-md-between {
            align-content: space-between !important;
        }

        .align-content-md-around {
            align-content: space-around !important;
        }

        .align-content-md-stretch {
            align-content: stretch !important;
        }
    }

    @media (min-width: 992px) {

        .align-content-lg-start {
            align-content: flex-start !important;
        }

        .align-content-lg-end {
            align-content: flex-end !important;
        }

        .align-content-lg-center {
            align-content: center !important;
        }

        .align-content-lg-between {
            align-content: space-between !important;
        }

        .align-content-lg-around {
            align-content: space-around !important;
        }

        .align-content-lg-stretch {
            align-content: stretch !important;
        }
    }

    @media (min-width: 1200px) {

        .align-content-xl-start {
            align-content: flex-start !important;
        }

        .align-content-xl-end {
            align-content: flex-end !important;
        }

        .align-content-xl-center {
            align-content: center !important;
        }

        .align-content-xl-between {
            align-content: space-between !important;
        }

        .align-content-xl-around {
            align-content: space-around !important;
        }

        .align-content-xl-stretch {
            align-content: stretch !important;
        }
    }
`;

export { BsBackgroundColorsCss, BsBordersCss, BsClearfixCss, BsDisplayCss, BsEmbeddedCss, BsFlexAlignContentCss, BsFlexAlignSelfCss, BsFlexDirectionCss, BsFlexOffsetCss, BsFlexOrderCss, BsFlexWrapCss, BsFloatCss, BsScreenreaderCss, BsVerticalAlignCss, BsVisibilityCss };
