import { css } from '../lit-element.js';

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

export { BsFlexJustifyCss as B, BsFlexDisplayCss as a, BsFlexAlignItemsCss as b };
