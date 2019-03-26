
import { LitElement, html} from 'lit-element';
import { BsDocsContentCss } from '../../../component/content/bs-docs-content-css';
import { BsContentRebootCss, BsContentCodeCss, BsContenTableCss, BsContentTypographyCss } from 'lit-element-bootstrap/content';

import './examples/equal-width-columns-example.js';
import './examples/equal-width-example.js';
import './examples/equal-width-multiline-example.js';
import './examples/one-column-width-example.js';
import './examples/variable-width-content-example.js';
import './examples/equal-width-multi-row-example.js';
import './examples/all-breakpoints-example.js';
import './examples/stacked-to-horizontal-example.js';
import './examples/mix-and-match-example.js';
import './examples/vertical-alignment-example.js';
import './examples/vertical-alignment-column-example.js';
import './examples/horizontal-alignment-example.js';
import './examples/no-gutters-example.js';
import './examples/column-wrapping-example.js';
import './examples/column-break-example.js';
import './examples/column-break-with-utilities-example.js';
import './examples/reorder-columns-example.js';
import './examples/reorder-columns-responsive-example.js';
import './examples/offset-columns-example.js';
import './examples/offset-columns-reset-example.js';
import './examples/margin-utilities-example.js';
import './examples/nested-grid-example.js';

class GridView extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsDocsContentCss,
            BsContentCodeCss,
            BsContenTableCss
        ];
    }
    
    render() {
        return html`
           
            <h1 class="bd-title" id="content">Grid system</h1>
            
            <p class="bd-lead">Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve column system, five default responsive tiers, Sass variables and mixins, and dozens of predefined classes.</p>
            
            <div>How it works</div>
            
            <p>Bootstrap’s grid system uses a series of containers, rows, and columns to layout and align content. It’s built with <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">flexbox</a> and is fully responsive. Below is an example and an in-depth look at how the grid comes together.</p>
            
            <p><strong>New to or unfamiliar with flexbox?</strong> <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background">Read this CSS Tricks flexbox guide</a> for background, terminology, guidelines, and code snippets.</p>
            
            <equal-width-columns-example></equal-width-columns-example>
            
            <p>The above example creates three equal-width columns on small, medium, large, and extra large devices using our predefined grid classes. Those columns are centered in the page with the parent <code class="highlighter-rouge">.container</code>.</p>
            
            <p>Breaking it down, here’s how it works:</p>
            
            <ul>
                <li>Containers provide a means to center and horizontally pad your site’s contents. Use <code class="highlighter-rouge">.container</code> for a responsive pixel width or <code class="highlighter-rouge">.container-fluid</code> for <code class="highlighter-rouge">width: 100%</code> across all viewport and device sizes.</li>
                <li>Rows are wrappers for columns. Each column has horizontal <code class="highlighter-rouge">padding</code> (called a gutter) for controlling the space between them. This <code class="highlighter-rouge">padding</code> is then counteracted on the rows with negative margins. This way, all the content in your columns is visually aligned down the left side.</li>
                <li>In a grid layout, content must be placed within columns and only columns may be immediate children of rows.</li>
                <li>Thanks to flexbox, grid columns without a specified <code class="highlighter-rouge">width</code> will automatically layout as equal width columns. For example, four instances of <code class="highlighter-rouge">.col-sm</code> will each automatically be 25% wide from the small breakpoint and up. See the <a href="#auto-layout-columns">auto-layout columns</a> section for more examples.</li>
                <li>Column classes indicate the number of columns you’d like to use out of the possible 12 per row. So, if you want three equal-width columns across, you can use <code class="highlighter-rouge">.col-4</code>.</li>
                <li>Column <code class="highlighter-rouge">width</code>s are set in percentages, so they’re always fluid and sized relative to their parent element.</li>
                <li>Columns have horizontal <code class="highlighter-rouge">padding</code> to create the gutters between individual columns, however, you can remove the <code class="highlighter-rouge">margin</code> from rows and <code class="highlighter-rouge">padding</code> from columns with <code class="highlighter-rouge">.no-gutters</code> on the <code class="highlighter-rouge">.row</code>.</li>
                <li>To make the grid responsive, there are five grid breakpoints, one for each <a href="/docs/4.1/layout/overview/#responsive-breakpoints">responsive breakpoint</a>: all breakpoints (extra small), small, medium, large, and extra large.</li>
                <li>Grid breakpoints are based on minimum width media queries, meaning <strong>they apply to that one breakpoint and all those above it</strong> (e.g., <code class="highlighter-rouge">.col-sm-4</code> applies to small, medium, large, and extra large devices, but not the first <code class="highlighter-rouge">xs</code> breakpoint).</li>
                <li>You can use predefined grid classes (like <code class="highlighter-rouge">.col-4</code>) or <a href="#sass-mixins">Sass mixins</a> for more semantic markup.</li>
            </ul>
        
            <p>Be aware of the limitations and <a href="https://github.com/philipwalton/flexbugs">bugs around flexbox</a>, like the <a href="https://github.com/philipwalton/flexbugs#flexbug-9">inability to use some HTML elements as flex containers</a>.</p>
            
            <h2>Grid options</h2>
            
            <p>While Bootstrap uses <code class="highlighter-rouge">em</code>s or <code class="highlighter-rouge">rem</code>s for defining most sizes, <code class="highlighter-rouge">px</code>s are used for grid breakpoints and container widths. This is because the viewport width is in pixels and does not change with the <a href="https://drafts.csswg.org/mediaqueries-3/#units">font size</a>.</p>
            
            <p>See how aspects of the Bootstrap grid system work across multiple devices with a handy table.</p>
            
            <table class="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th></th>
                        <th class="text-center">Extra small<br><small>&lt;576px</small></th>
                        <th class="text-center">Small<br><small>≥576px</small></th>
                        <th class="text-center">Medium<br><small>≥768px</small></th>
                        <th class="text-center">Large<br><small>≥992px</small></th>
                        <th class="text-center">Extra large<br><small>≥1200px</small></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th class="text-nowrap" scope="row">Max container width</th>
                        <td>None (auto)</td>
                        <td>540px</td>
                        <td>720px</td>
                        <td>960px</td>
                        <td>1140px</td>
                    </tr>
                    <tr>
                        <th class="text-nowrap" scope="row">Class prefix</th>
                        <td><code>.col-</code></td>
                        <td><code>.col-sm-</code></td>
                        <td><code>.col-md-</code></td>
                        <td><code>.col-lg-</code></td>
                        <td><code>.col-xl-</code></td>
                    </tr>
                    <tr>
                        <th class="text-nowrap" scope="row"># of columns</th>
                        <td colspan="5">12</td>
                    </tr>
                    <tr>
                        <th class="text-nowrap" scope="row">Gutter width</th>
                        <td colspan="5">30px (15px on each side of a column)</td>
                    </tr>
                    <tr>
                        <th class="text-nowrap" scope="row">Nestable</th>
                        <td colspan="5">Yes</td>
                    </tr>
                    <tr>
                        <th class="text-nowrap" scope="row">Column ordering</th>
                        <td colspan="5">Yes</td>
                    </tr>
                </tbody>
            </table>
            
            <h2>Auto-layout columns</h2>
            
            <p>Utilize breakpoint-specific column classes for easy column sizing without an explicit numbered class like <code class="highlighter-rouge">.col-sm-6</code>.</p>
            
            <h3>Equal-width</h3>
            
            <p>For example, here are two grid layouts that apply to every device and viewport, from <code class="highlighter-rouge">xs</code> to <code class="highlighter-rouge">xl</code>. Add any number of unit-less classes for each breakpoint you need and every column will be the same width.</p>
           
            <equal-width-example></equal-width-example>
            
            <p>Equal-width columns can be broken into multiple lines, but there was a <a href="https://github.com/philipwalton/flexbugs#flexbug-11">Safari flexbox bug</a> that prevented this from working without an explicit <code class="highlighter-rouge">flex-basis</code> or <code class="highlighter-rouge">border</code>. There are workarounds for older browser versions, but they shouldn’t be necessary if you’re up-to-date.</p>
            
            <equal-width-multiline-example></equal-width-multiline-example>
            
            <h2>Setting one column width</h2>
            
            <p>Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it. You may use predefined grid classes (as shown below), grid mixins, or inline widths. Note that the other columns will resize no matter the width of the center column.</p>
           
            <one-column-width-example></one-column-width-example>
            
            <h2>Variable width content</h2>
            
            <p>Use <code class="highlighter-rouge">col-{breakpoint}-auto</code> classes to size columns based on the natural width of their content.</p>
        
            <variable-width-content-example></variable-width-content-example>
            
            <h2>Equal-width multi-row</h2>
            
            <p>Create equal-width columns that span multiple rows by inserting a <code class="highlighter-rouge">.w-100</code> where you want the columns to break to a new line. Make the breaks responsive by mixing the <code class="highlighter-rouge">.w-100</code> with some <a href="/docs/4.1/utilities/display/">responsive display utilities</a>.</p>
           
            <equal-width-multi-row-example></equal-width-multi-row-example>
            
            <h2>Responsive classes</h2>
            
            <p>Bootstrap’s grid includes five tiers of predefined classes for building complex responsive layouts. Customize the size of your columns on extra small, small, medium, large, or extra large devices however you see fit.</p>
            
            <h3></h3>
            
            <p>For grids that are the same from the smallest of devices to the largest, use the <code class="highlighter-rouge">.col</code> and <code class="highlighter-rouge">.col-*</code> classes. Specify a numbered class when you need a particularly sized column; otherwise, feel free to stick to <code class="highlighter-rouge">.col</code>.</p>
            
            <all-breakpoints-example></all-breakpoints-example>
            
            <h2>Stacked to horizontal</h2>
            
            <p>Using a single set of <code class="highlighter-rouge">.col-sm-*</code> classes, you can create a basic grid system that starts out stacked and becomes horizontal at the small breakpoint (<code class="highlighter-rouge">sm</code>).</p>
        
            <stacked-to-horizontal-example></stacked-to-horizontal-example>
            
            <h2>Mix and match</h2>
            
            <p>Don’t want your columns to simply stack in some grid tiers? Use a combination of different classes for each tier as needed. See the example below for a better idea of how it all works.</p>
        
            <mix-and-match-example></mix-and-match-example>
            
            <h2>Alignment</h2>
            
            <p>Use flexbox alignment utilities to vertically and horizontally align columns.</p>
            
            <h3>Vertical alignment</h3>
            
            <vertical-alignment-example></vertical-alignment-example>
            
            <vertical-alignment-column-example></vertical-alignment-column-example>
            
            <h3>Horizontal alignment</h3>
        
            <horizontal-alignment-example></horizontal-alignment-example>
            
            <h3>No gutters</h3>
            
            <p>The gutters between columns in our predefined grid classes can be removed with <code class="highlighter-rouge">.no-gutters</code>. This removes the negative <code class="highlighter-rouge">margin</code>s from <code class="highlighter-rouge">.row</code> and the horizontal <code class="highlighter-rouge">padding</code> from all immediate children columns.</p>
            
            <p>Here’s the source code for creating these styles. Note that column overrides are scoped to only the first children columns and are targeted via <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors">attribute selector</a>. While this generates a more specific selector, column padding can still be further customized with <a href="/docs/4.1/utilities/spacing/">spacing utilities</a>.</p>
            
            <p><strong>Need an edge-to-edge design?</strong> Drop the parent <code class="highlighter-rouge">.container</code> or <code class="highlighter-rouge">.container-fluid</code>.</p>
            
            <p>In practice, here’s how it looks. Note you can continue to use this with all other predefined grid classes (including column widths, responsive tiers, reorders, and more).</p>
        
            <no-gutters-example></no-gutters-example>
            
            <h3>Column wrapping</h3>
            
            <p>If more than 12 columns are placed within a single row, each group of extra columns will, as one unit, wrap onto a new line.</p>
        
            <column-wrapping-example></column-wrapping-example>
            
            <h3>Column breaks</h3>
            
            <p>Breaking columns to a new line in flexbox requires a small hack: add an element with <code class="highlighter-rouge">width: 100%</code> wherever you want to wrap your columns to a new line. Normally this is accomplished with multiple <code class="highlighter-rouge">.row</code>s, but not every implementation method can account for this.</p>
            
            <column-break-example></column-break-example>
            
            <p>You may also apply this break at specific breakpoints with our responsive display utilities.</p>
            
            <column-break-with-utilities-example></column-break-with-utilities-example>
            
            <h2>Reordering</h2>
            
            <h3>Order classes</h3>
            
            <p>Use <code class="highlighter-rouge">.order-</code> classes for controlling the <strong>visual order</strong> of your content. These classes are responsive, so you can set the <code class="highlighter-rouge">order</code> by breakpoint (e.g., <code class="highlighter-rouge">.order-1.order-md-2</code>). Includes support for <code class="highlighter-rouge">1</code> through <code class="highlighter-rouge">12</code> across all five grid tiers.</p>
        
            <reorder-columns-example></reorder-columns-example>
            
            <reorder-columns-responsive-example></reorder-columns-responsive-example>
            
            <h3>Offsetting columns</h3>
            
            <p>You can offset grid columns in two ways: our responsive <code class="highlighter-rouge">.offset-</code> grid classes and our <a href="/docs/4.1/utilities/spacing/">margin utilities</a>. Grid classes are sized to match columns while margins are more useful for quick layouts where the width of the offset is variable.</p>
            
            <h4>Offset classes</h4>
            
            <p>Move columns to the right using <code class="highlighter-rouge">.offset-md-*</code> classes. These classes increase the left margin of a column by <code class="highlighter-rouge">*</code> columns. For example, <code class="highlighter-rouge">.offset-md-4</code> moves <code class="highlighter-rouge">.col-md-4</code> over four columns.</p>
            
            <offset-columns-example></offset-columns-example>
            
            <offset-columns-reset-example></offset-columns-reset-example>
            
            <h4>Margin utilities</h4>
            
            <p>With the move to flexbox in v4, you can use margin utilities like <code class="highlighter-rouge">.mr-auto</code> to force sibling columns away from one another.</p>
            
            <margin-utilities-example></margin-utilities-example>
            
            <h2>Nesting</h2>
            
            <p>To nest your content with the default grid, add a new <code class="highlighter-rouge">.row</code> and set of <code class="highlighter-rouge">.col-sm-*</code> columns within an existing <code class="highlighter-rouge">.col-sm-*</code> column. Nested rows should include a set of columns that add up to 12 or fewer (it is not required that you use all 12 available columns).</p>
        
            <nested-grid-example></nested-grid-example>
            
            <br />
            <br />
            <br />
        `;
    }
};

window.customElements.define('grid-view', GridView);