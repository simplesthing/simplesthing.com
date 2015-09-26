angular.module("simplesthing").run(["$templateCache", function($templateCache) {$templateCache.put("app/components/cg-busy/cg-busy-template.html","<div class=cg-busy-template><i class=\"fa fa-circle-o-notch fa-spin\"></i></div>");
$templateCache.put("app/views/charts/charts.html","<article ng-controller=\"ChartsController as ctrl\"><div class=one-col><div class=row><div class=\"col full\"><div class=\"ten-off-one full\"><div class=row><div class=col><d3-chart id=top-10 config=ctrl.chart><chart-header></chart-header><horizontal-bar></horizontal-bar><chart-footer></chart-footer></d3-chart></div></div></div></div></div><div class=row><div class=col><p>I\'m going to use alot of buzz words and mention the ues of frameworks that you\'re probably tired of hearing about, but I promise to be quick.</p><p>Every possible buzz word for D3 charts throw in some angular. The purpose is to be be able to compose charts out of reusable, extendable, directives to create D3 charts, using <a href=\"http://misoproject.com/d3-chart/\">miso d3.chart framework</a> from Bouccup. I originally set out to make my own angular D3 configuration but soon realized D3 needs it\'s own event and update system defined which felt like I was duplicating alor of work that I would need to add everything that the authors of miso already had.</p><p>Angular directives provide the reusable aspect of creating self contained, repeatable, extendable modules of code that can be easily implemented by passing in a configuration object that defines custom service providers and event callbacks.</p><p>The UI should be composable by optionally adding a directive to the DOM and have it appear as an integrated component of the chart. These components should be self contained and operate independently of each other, with their only dependency being on the chart controller.</p><pre>\n      &lt;d3-chart id=\"test\" config=\"ctrl.chart\"&gt;&lt;/d3-chart&gt;\n      </pre><p>The chart is the top level container and it\'s controller is the <a href=https://en.wikipedia.org/wiki/Observer_pattern>\'subject\'</a> in an observer pattern where it keeps a list of dependent directives and their callbacks, and notifies them when any state changes occur. The chart directive is responsible for attaching the chart SVG element to the DOM, connecting to the shared controller, listen for changes to the viewport or data and trigger the notifications in the controller.</p><p>The configuration object passes in width and height properties as proportional ratios which are processe by the chart service to calculate the chart\'s width and height.</p><p>The d3 directive responsible for drawing a chart type will be the initiator of data updates. It\'s responsibility is to add a miso d3.chart to the SVG element and to send draw updates to the miso chart when data changes. It does this by registering listeners with the chart controller for an init event, which is the initial adding of the DOM elements and the update event which occurs anytime there is a change in data.</p></div></div><div class=row><div class=col><h1>Chart</h1><h2>Chart Directive</h2><p><ul><li>Adds a class to the chart.</li><li>Assigns the config an id parameter.</li><li>Initializes chart.</li></ul></p><h2>Chart Controller</h2><p></p><h2>Chart Service</h2><p></p></div></div></div></article>");
$templateCache.put("app/views/home/home.html","<header><div class=site-title><a ui-sref=home class=logo title=\"Simplesthing | Home\">simplesthing</a></div><ul class=header-links><li><a href=//github.com/simplesthing title=\"find me on github\"><i class=\"octicon octicon-mark-github\"></i></a></li><li><a href=//www.linkedin.com/in/simplesthing title=\"find me on linkedIn\"><i class=\"fa fa-linkedin-square\"></i></a></li><li><a href=//twitter.com/simplesthing title=\"find me on twitter\"><i class=\"fa fa-twitter-square\"></i></a></li></ul></header><div class=one-col><div class=row><div class=\"col bg\"><div class=message><h2>Oops, looks like you are visiting during a cycle of renewal.</h2><p>Just like the ouroboros I am re-creating, check back soon for new content.</p></div></div></div></div>");
$templateCache.put("app/views/style-guide/style-guide.html","<div class=\"one-col styles\"><div class=row><div class=col><h1>Style Guide</h1></div></div><div class=row><div class=col><h2>Brand</h2></div></div><div class=row><div class=col><div class=\"six-col full colors\"><dl class=row><div class=col><dt class=black></dt><dd>$black</dd></div><div class=col><dt class=gray></dt><dd>$gray</dd></div><div class=col><dt class=gray-light></dt><dd>$gray-light</dd></div><div class=col><dt class=gray-dark></dt><dd>$gray-dark</dd></div><div class=col><dt class=green-lo></dt><dd>$green-lo</dd></div><div class=col><dt class=green-hi></dt><dd>$green-hi</dd></div></dl></div></div></div><div class=row><div class=col><h2>Colors</h2><div class=\"six-col full colors\"><dl class=row><div class=col><dt class=red></dt><dd>$red</dd></div><div class=col><dt class=orange></dt><dd>$orange</dd></div><div class=col><dt class=yellow></dt><dd>$yellow</dd></div><div class=col><dt class=blue></dt><dd>$blue</dd></div><div class=col><dt class=light-blue></dt><dd>$light-blue</dd></div><div class=col><dt class=pink></dt><dd>$pink</dd></div></dl></div></div></div><div class=row><div class=col><h2>Fonts</h2><div class=\"two-col full\"><div class=row><div class=col><h1>h1 or $font-size-h1</h1><h2>h2 or $font-size-h2</h2><h3>h3 or $font-size-h3</h3><h4>h4 or $font-size-h4</h4><h5>h5 or $font-size-h5</h5><h6>h6 or $font-size-h6</h6><p>Paragraph Text</p></div><div class=col><p>Base font-size 14px</p><p>body text color $black</p><p><a href=#>link text</a></p></div></div></div></div></div><div class=row><div class=col><h2>Buttons</h2><button class=\"btn btn-default\">Default</button> <button class=\"btn btn-primary\">Primary</button></div></div><div class=row><div class=col><h2>Grid Layouts</h2><h3>Even Column Layouts</h3><p>Use layout classes below on parent elements, followed by a .row wrapper element, followed by the class .col content elements.</p></div></div><div class=row><div class=\"col layouts\"><strong>one-col</strong><section class=one-col><div class=row><div class=col>col</div></div></section><strong>two-col</strong><section class=two-col><div class=row><div class=col>col</div><div class=col>col</div></div></section><strong>three-col</strong><section class=three-col><div class=row><div class=col>col</div><div class=col>col</div><div class=col>col</div></div></section><strong>four-col</strong><section class=four-col><div class=row><div class=col>col</div><div class=col>col</div><div class=col>col</div><div class=col>col</div></div></section><strong>six-col</strong><section class=six-col><div class=row><div class=col>col</div><div class=col>col</div><div class=col>col</div><div class=col>col</div><div class=col>col</div><div class=col>col</div></div></section><hr><h3>Uneven Column Layouts</h3><p>These layouts define larger and smaller columns that can be arranged in any order to equal 12.</p><strong>two-five</strong><p>Used on login.html and registration.html</p><section class=two-five><div class=row><div class=primary>primary</div><div class=secondary>secondary</div><div class=primary>primary</div></div></section><strong>three-four-five</strong><p>Used on table view of Career Exploration</p><section class=three-four-five><div class=row><div class=tertiary>tertiary</div><div class=secondary>secondary</div><div class=primary>primary</div></div></section><strong>two-three-seven</strong><section class=two-three-seven><div class=row><div class=tertiary>tertiary</div><div class=secondary>secondary</div><div class=primary>primary</div></div></section><strong>one-four-seven</strong><p></p><section class=one-four-seven><div class=row><div class=tertiary>tertiary</div><div class=secondary>secondary</div><div class=primary>primary</div></div></section><strong>one-five-six</strong><p>Used on dashboard milestones</p><section class=one-five-six><div class=row><div class=tertiary>tertiary</div><div class=secondary>secondary</div><div class=primary>primary</div></div></section><strong>five-seven</strong><p>Used on dashboard progress</p><section class=five-seven><div class=row><div class=secondary>secondary</div><div class=primary>primary</div></div></section><strong>three-six</strong><section class=three-six><div class=row><div class=secondary>secondary</div><div class=primary>primary</div><div class=secondary>secondary</div></div></section><strong>one-ten</strong><section class=one-ten><div class=row><div class=secondary>secondary</div><div class=primary>primary</div><div class=secondary>secondary</div></div></section><strong>one-eleven</strong><section class=one-eleven><div class=row><div class=secondary>secondary</div><div class=primary>primary</div></div></section><strong>two-eight</strong><section class=two-eight><div class=row><div class=secondary>secondary</div><div class=primary>primary</div><div class=secondary>secondary</div></div></section><strong>six-three</strong><section class=six-three><div class=row><div class=primary>primary</div><div class=secondary>secondary</div><div class=secondary>secondary</div></div></section><strong>four-eight</strong><section class=four-eight><div class=row><div class=primary>primary</div><div class=secondary>secondary</div></div></section><strong>three-nine</strong><section class=three-nine><div class=row><div class=primary>primary</div><div class=secondary>secondary</div></div></section><hr><h3>Offset Layouts</h3><p>These layouts are offsets for centering content.</p><strong>six-off-three</strong><section class=six-off-three><div class=row><div class=col>col</div></div></section><strong>eight-off-two</strong><section class=eight-off-two><div class=row><div class=col>col</div></div></section><strong>ten-off-one</strong><section class=ten-off-one><div class=row><div class=col>col</div></div></section><hr><h3>Nested Layouts</h3><p>Layouts can be nested to the extent of the page size, collapsing will occur if there is not enough room.</p><strong>two-col with a six-off-three on left and two-col on right</strong><section class=two-col><div class=row><div class=col><div class=six-off-three><div class=row><div class=col>col</div></div></div></div><div class=col><div class=two-col><div class=row><div class=col>col</div><div class=col>col</div></div></div></div></div></section></div></div></div>");}]);