import '../common/lit-html-9b6153da.js';
import { css } from '../lit-element.js';

const BsContentCodeCss = css`
    
    code {
        font-size: 87.5%;
        color: #e83e8c;
        word-break: break-word;
    }

    a > code {
        color: inherit;
    }

    kbd {
        padding: 0.2rem 0.4rem;
        font-size: 87.5%;
        color: #fff;
        background-color: #212529;
        border-radius: 0.2rem;
    }

    kbd kbd {
        padding: 0;
        font-size: 100%;
        font-weight: 700;
    }

    pre {
        display: block;
        font-size: 87.5%;
        color: #212529;
    }

    pre code {
        font-size: inherit;
        color: inherit;
        word-break: normal;
    }

    .pre-scrollable {
        max-height: 340px;
        overflow-y: scroll;
    }
`;

const BsContenTableCss = css`
    
    .table {
        width: 100%;
        margin-bottom: 1rem;
        background-color: transparent;
    }

    .table th,
    .table td {
        padding: 0.75rem;
        vertical-align: top;
        border-top: 1px solid #dee2e6;
    }

    .table thead th {
        vertical-align: bottom;
        border-bottom: 2px solid #dee2e6;
    }

    .table tbody + tbody {
        border-top: 2px solid #dee2e6;
    }

    .table .table {
        background-color: #fff;
    }

    .table-sm th, .table-sm td {
        padding: 0.3rem;
    }

    .table-bordered {
        border: 1px solid #dee2e6;
    }

    .table-bordered th,
    .table-bordered td {
        border: 1px solid #dee2e6;
    }

    .table-bordered thead th,
    .table-bordered thead td {
        border-bottom-width: 2px;
    }

    .table-borderless th,
    .table-borderless td,
    .table-borderless thead th,
    .table-borderless tbody + tbody {
        border: 0;
    }

    .table-striped tbody tr:nth-of-type(odd) {
        background-color: rgba(0, 0, 0, 0.05);
    }

    .table-hover tbody tr:hover {
        background-color: rgba(0, 0, 0, 0.075);
    }

    .table-primary,
    .table-primary > th,
    .table-primary > td {
        background-color: #b8daff;
    }

    .table-hover .table-primary:hover {
        background-color: #9fcdff;
    }

    .table-hover .table-primary:hover > td,
    .table-hover .table-primary:hover > th {
        background-color: #9fcdff;
    }

    .table-secondary,
    .table-secondary > th,
    .table-secondary > td {
        background-color: #d6d8db;
    }

    .table-hover .table-secondary:hover {
        background-color: #c8cbcf;
    }

    .table-hover .table-secondary:hover > td,
    .table-hover .table-secondary:hover > th {
        background-color: #c8cbcf;
    }

    .table-success,
    .table-success > th,
    .table-success > td {
        background-color: #c3e6cb;
    }

    .table-hover .table-success:hover {
        background-color: #b1dfbb;
    }

    .table-hover .table-success:hover > td,
    .table-hover .table-success:hover > th {
        background-color: #b1dfbb;
    }

    .table-info,
    .table-info > th,
    .table-info > td {
        background-color: #bee5eb;
    }

    .table-hover .table-info:hover {
        background-color: #abdde5;
    }

    .table-hover .table-info:hover > td,
    .table-hover .table-info:hover > th {
        background-color: #abdde5;
    }

    .table-warning,
    .table-warning > th,
    .table-warning > td {
        background-color: #ffeeba;
    }

    .table-hover .table-warning:hover {
        background-color: #ffe8a1;
    }

    .table-hover .table-warning:hover > td,
    .table-hover .table-warning:hover > th {
        background-color: #ffe8a1;
    }

    .table-danger,
    .table-danger > th,
    .table-danger > td {
        background-color: #f5c6cb;
    }

    .table-hover .table-danger:hover {
        background-color: #f1b0b7;
    }

    .table-hover .table-danger:hover > td,
    .table-hover .table-danger:hover > th {
        background-color: #f1b0b7;
    }

    .table-light,
    .table-light > th,
    .table-light > td {
        background-color: #fdfdfe;
    }

    .table-hover .table-light:hover {
        background-color: #ececf6;
    }

    .table-hover .table-light:hover > td,
    .table-hover .table-light:hover > th {
        background-color: #ececf6;
    }

    .table-dark,
    .table-dark > th,
    .table-dark > td {
        background-color: #c6c8ca;
    }

    .table-hover .table-dark:hover {
        background-color: #b9bbbe;
    }

    .table-hover .table-dark:hover > td,
    .table-hover .table-dark:hover > th {
        background-color: #b9bbbe;
    }

    .table-active,
    .table-active > th,
    .table-active > td {
        background-color: rgba(0, 0, 0, 0.075);
    }

    .table-hover .table-active:hover {
        background-color: rgba(0, 0, 0, 0.075);
    }

    .table-hover .table-active:hover > td,
    .table-hover .table-active:hover > th {
        background-color: rgba(0, 0, 0, 0.075);
    }

    .table .thead-dark th {
    color: #fff;
        background-color: #212529;
        border-color: #32383e;
    }

    .table .thead-light th {
    color: #495057;
        background-color: #e9ecef;
        border-color: #dee2e6;
    }

    .table-dark {
    color: #fff;
        background-color: #212529;
    }

    .table-dark th,
    .table-dark td,
    .table-dark thead th {
        border-color: #32383e;
    }

    .table-dark.table-bordered {
        border: 0;
    }

    .table-dark.table-striped tbody tr:nth-of-type(odd) {
        background-color: rgba(255, 255, 255, 0.05);
    }

    .table-dark.table-hover tbody tr:hover {
        background-color: rgba(255, 255, 255, 0.075);
    }

    @media (max-width: 575.98px) {
        .table-responsive-sm {
            display: block;
            width: 100%;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            -ms-overflow-style: -ms-autohiding-scrollbar;
        }
        .table-responsive-sm > .table-bordered {
            border: 0;
        }
    }

    @media (max-width: 767.98px) {
        .table-responsive-md {
            display: block;
            width: 100%;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            -ms-overflow-style: -ms-autohiding-scrollbar;
        }
        .table-responsive-md > .table-bordered {
            border: 0;
        }
    }

    @media (max-width: 991.98px) {
        .table-responsive-lg {
            display: block;
            width: 100%;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            -ms-overflow-style: -ms-autohiding-scrollbar;
        }
        .table-responsive-lg > .table-bordered {
            border: 0;
        }
    }

    @media (max-width: 1199.98px) {
        .table-responsive-xl {
            display: block;
            width: 100%;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            -ms-overflow-style: -ms-autohiding-scrollbar;
        }
        .table-responsive-xl > .table-bordered {
            border: 0;
        }
    }

    .table-responsive {
        display: block;
        width: 100%;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: -ms-autohiding-scrollbar;
    }

    .table-responsive > .table-bordered {
        border: 0;
    }
`;

const BsContentImageCss = css`
    
    .img-fluid {
        max-width: 100%;
        height: auto;
    }

    .img-thumbnail {
        padding: 0.25rem;
        background-color: #fff;
        border: 1px solid #dee2e6;
        border-radius: 0.25rem;
        max-width: 100%;
        height: auto;
    }
`;

const BsContentRebootCss = css`

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
        display: block;
    }

    [tabindex="-1"]:focus {
        outline: 0 !important;
    }

    hr {
        box-sizing: content-box;
        height: 0;
        overflow: visible;
    }

    h1, h2, h3, h4, h5, h6 {
        margin-top: 0;
        margin-bottom: 0.5rem;
    }

    p {
        margin-top: 0;
        margin-bottom: 1rem;
    }

    abbr[title],
    abbr[data-original-title] {
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
        cursor: help;
        border-bottom: 0;
    }

    address {
        margin-bottom: 1rem;
        font-style: normal;
        line-height: inherit;
    }

    ol,
    ul,
    dl {
        margin-top: 0;
        margin-bottom: 1rem;
    }

    ol ol,
    ul ul,
    ol ul,
    ul ol {
        margin-bottom: 0;
    }

    dt {
        font-weight: 700;
    }

    dd {
        margin-bottom: .5rem;
        margin-left: 0;
    }

    blockquote {
        margin: 0 0 1rem;
    }

    dfn {
        font-style: italic;
    }

    b,
    strong {
        font-weight: bolder;
    }

    small {
        font-size: 80%;
    }

    sub,
    sup {
        position: relative;
        font-size: 75%;
        line-height: 0;
        vertical-align: baseline;
    }

    sub {
        bottom: -.25em;
    }

    sup {
        top: -.5em;
    }

    a {
        color: #007bff;
        text-decoration: none;
        background-color: transparent;
        -webkit-text-decoration-skip: objects;
    }

    a:hover {
        color: #0056b3;
        text-decoration: underline;
    }

    a:not([href]):not([tabindex]) {
        color: inherit;
        text-decoration: none;
    }

    a:not([href]):not([tabindex]):hover, a:not([href]):not([tabindex]):focus {
        color: inherit;
        text-decoration: none;
    }

    a:not([href]):not([tabindex]):focus {
        outline: 0;
    }

    pre,
    code,
    kbd,
    samp {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        font-size: 1em;
    }

    pre {
        margin-top: 0;
        margin-bottom: 1rem;
        overflow: auto;
        -ms-overflow-style: scrollbar;
    }

    figure {
        margin: 0 0 1rem;
    }

    img {
        vertical-align: middle;
        border-style: none;
    }

    svg {
        overflow: hidden;
        vertical-align: middle;
    }

    table {
        border-collapse: collapse;
    }

    caption {
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
        color: #6c757d;
        text-align: left;
        caption-side: bottom;
    }

    th {
        text-align: inherit;
    }

    label {
        display: inline-block;
        margin-bottom: 0.5rem;
    }

    button {
        border-radius: 0;
    }

    button:focus {
        outline: 1px dotted;
        outline: 5px auto -webkit-focus-ring-color;
    }

    input,
    button,
    select,
    optgroup,
    textarea {
        margin: 0;
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
    }

    button,
    input {
        overflow: visible;
    }

    button,
    select {
        text-transform: none;
    }

    button,
    html [type="button"],
    [type="reset"],
    [type="submit"] {
        -webkit-appearance: button;
    }

    button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
        padding: 0;
        border-style: none;
    }

    input[type="radio"],
    input[type="checkbox"] {
        box-sizing: border-box;
        padding: 0;
    }

    input[type="date"],
    input[type="time"],
    input[type="datetime-local"],
    input[type="month"] {
        -webkit-appearance: listbox;
    }

    textarea {
        overflow: auto;
        resize: vertical;
    }

    fieldset {
        min-width: 0;
        padding: 0;
        margin: 0;
        border: 0;
    }

    legend {
        display: block;
        width: 100%;
        max-width: 100%;
        padding: 0;
        margin-bottom: .5rem;
        font-size: 1.5rem;
        line-height: inherit;
        color: inherit;
        white-space: normal;
    }

    progress {
        vertical-align: baseline;
    }

    [type="number"]::-webkit-inner-spin-button,
    [type="number"]::-webkit-outer-spin-button {
        height: auto;
    }

    [type="search"] {
        outline-offset: -2px;
        -webkit-appearance: none;
    }

    [type="search"]::-webkit-search-cancel-button,
    [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none;
    }

    ::-webkit-file-upload-button {
        font: inherit;
        -webkit-appearance: button;
    }

    output {
        display: inline-block;
    }

    summary {
        display: list-item;
        cursor: pointer;
    }

    template {
        display: none;
    }

    [hidden] {
        display: none !important;
    }
`;

const BsContentFiguresCss = css`
    
    .figure {
        display: inline-block;
    }

    .figure-img {
        margin-bottom: 0.5rem;
        line-height: 1;
    }

    .figure-caption {
        font-size: 90%;
        color: #6c757d;
    }
`;

const BsContentTypographyCss = css`
    
    h1, h2, h3, h4, h5, h6,
    .h1, .h2, .h3, .h4, .h5, .h6 {
        margin-bottom: 0.5rem;
        font-family: inherit;
        font-weight: 500;
        line-height: 1.2;
        color: inherit;
    }
    
    h1, .h1 {
        font-size: 2.5rem;
    }
    
    h2, .h2 {
        font-size: 2rem;
    }
    
    h3, .h3 {
        font-size: 1.75rem;
    }
    
    h4, .h4 {
        font-size: 1.5rem;
    }
    
    h5, .h5 {
        font-size: 1.25rem;
    }
    
    h6, .h6 {
        font-size: 1rem;
    }
    
    .lead {
        font-size: 1.25rem;
        font-weight: 300;
    }
    
    .display-1 {
        font-size: 6rem;
        font-weight: 300;
        line-height: 1.2;
    }
    
    .display-2 {
        font-size: 5.5rem;
        font-weight: 300;
        line-height: 1.2;
    }
    
    .display-3 {
        font-size: 4.5rem;
        font-weight: 300;
        line-height: 1.2;
    }
    
    .display-4 {
        font-size: 3.5rem;
        font-weight: 300;
        line-height: 1.2;
    }
    
    hr {
        margin-top: 1rem;
        margin-bottom: 1rem;
        border: 0;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
    }
    
    small, .small {
        font-size: 80%;
        font-weight: 400;
    }
    
    mark, .mark {
        padding: 0.2em;
        background-color: #fcf8e3;
    }
    
    .list-unstyled {
        padding-left: 0;
        list-style: none;
    }
    
    .list-inline {
        padding-left: 0;
        list-style: none;
    }
    
    .list-inline-item {
        display: inline-block;
    }

    .list-inline-item:not(:last-child) {
        margin-right: 0.5rem;
    }
    
    .initialism {
        font-size: 90%;
        text-transform: uppercase;
    }
    
    .blockquote {
        margin-bottom: 1rem;
        font-size: 1.25rem;
    }
    
    .blockquote-footer {
        display: block;
        font-size: 80%;
        color: #6c757d;
    }
    
    .blockquote-footer::before {
        content: "\\2014 \\00A0";
    }
`;

export { BsContenTableCss, BsContentCodeCss, BsContentFiguresCss, BsContentImageCss, BsContentRebootCss, BsContentTypographyCss };