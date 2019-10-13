
import { css } from 'lit-element';

export const BsDocsContentCss = css`
    
    .bd-content {
        -ms-flex-order: 1;
        order: 1
    }
    
    .bd-content>h2[id],
    .bd-content>h3[id],
    .bd-content>h4[id] {
        pointer-events: none
    }

    .bd-content>h2[id]>a,
    .bd-content>h2[id]>div,
    .bd-content>h3[id]>a,
    .bd-content>h3[id]>div,
    .bd-content>h4[id]>a,
    .bd-content>h4[id]>div {
        pointer-events: auto
    }

    .bd-content>h2[id]::before,
    .bd-content>h3[id]::before,
    .bd-content>h4[id]::before {
        display: block;
        height: 6rem;
        margin-top: -6rem;
        visibility: hidden;
        content: 'http://www.w3.org/2000/svg'
    }

    .bd-content>table {
        width: 100%;
        max-width: 100%;
        margin-bottom: 1rem
    }

    @media (max-width:991.98px) {
        
        .bd-content>table {
            display: block;
            overflow-x: auto;
            -ms-overflow-style: -ms-autohiding-scrollbar
        }

        .bd-content>table.table-bordered {
            border: 0
        }
    }

    .bd-content>table>tbody>tr>td,
    .bd-content>table>tbody>tr>th,
    .bd-content>table>tfoot>tr>td,
    .bd-content>table>tfoot>tr>th,
    .bd-content>table>thead>tr>td,
    .bd-content>table>thead>tr>th {
        padding: .75rem;
        vertical-align: top;
        border: 1px solid #dee2e6
    }

    .bd-content>table>tbody>tr>td>p:last-child,
    .bd-content>table>tbody>tr>th>p:last-child,
    .bd-content>table>tfoot>tr>td>p:last-child,
    .bd-content>table>tfoot>tr>th>p:last-child,
    .bd-content>table>thead>tr>td>p:last-child,
    .bd-content>table>thead>tr>th>p:last-child {
        margin-bottom: 0
    }

    .bd-content>table td:first-child>code {
        white-space: nowrap
    }

    .bd-content>h2:not(:first-child) {
        margin-top: 3rem
    }

    .bd-content>h3 {
        margin-top: 1.5rem
    }

    .bd-content>ol li,
    .bd-content>ul li {
        margin-bottom: .25rem
    }

    @media (min-width:992px) {
        
        .bd-content>ol,
        .bd-content>p,
        .bd-content>ul {
            max-width: 80%
        }
    }

    .bd-title {
        margin-top: 1rem;
        margin-bottom: .5rem;
        font-weight: 300
    }

    @media (min-width:576px) {
        .bd-title {
            font-size: 3rem
        }
    }

    .bd-lead {
        font-size: 1.125rem;
        font-weight: 300
    }

    @media (min-width:576px) {
            
        .bd-lead {
            max-width: 80%;
            margin-bottom: 1rem;
            font-size: 1.5rem
        }
    }

    .bd-text-purple {
        color: #563d7c
    }

    .bd-text-purple-bright {
        color: #7952b3
    }

    @media (max-width: 576px) {
        pre {
            padding-top: 10px;
            padding-bottom: 10px;
        }
    }
`;