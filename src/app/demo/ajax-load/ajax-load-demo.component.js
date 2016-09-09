"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var treegrid_component_1 = require("../../treegrid/treegrid.component");
var AjaxLoadDemoComponent = (function () {
    function AjaxLoadDemoComponent() {
        this.treeDef = new treegrid_component_1.TreeGridDef();
    }
    AjaxLoadDemoComponent.prototype.ngAfterViewInit = function () {
        hljs.highlightBlock(this.codeElement.nativeElement);
    };
    AjaxLoadDemoComponent.prototype.ngOnInit = function () {
        this.treeDef.hierachy = {
            foreignKeyField: "report_to", primaryKeyField: "emp_id"
        };
        this.treeDef.ajax = {
            url: 'http://treegriddemoservice.azurewebsites.net/api/values/GetAllEmployees', method: "POST",
            //url: 'http://localhost:7774/api/values/GetEmployees', method: "POST",
            lazyLoad: false,
            doNotLoad: false
        };
        this.treeDef.columns = [
            { labelHtml: "Employee ID", dataField: "emp_id", sort: true },
            { labelHtml: "Given<br/>name", dataField: "firstname" },
            { labelHtml: "Family<br/>name", dataField: "lastname", className: "tg-body-center tg-header-center" },
            { labelHtml: "Report To", dataField: "report_to" }];
    };
    __decorate([
        core_1.ViewChild(treegrid_component_1.TreeGrid), 
        __metadata('design:type', treegrid_component_1.TreeGrid)
    ], AjaxLoadDemoComponent.prototype, "treeGrid", void 0);
    __decorate([
        core_1.ViewChild('code'), 
        __metadata('design:type', core_1.ElementRef)
    ], AjaxLoadDemoComponent.prototype, "codeElement", void 0);
    AjaxLoadDemoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            template: "\n    <h2>Loading with Ajax</h2>\n    <h3>Description</h3>\n    Features included:\n    <ul>\n        <li>Loading table with Ajax</li>\n        <li>If <strong>lazyLoad</strong> is true, only the top level nodes are loaded initially; children nodes are loaded only when you expand the parent row. If it is set to false, all nodes are loaded</li>    \n        <li>If <strong>doNotLoad</strong> is true, ajax will not be called initially. You can call the method <strong>TreeGrid.loadAjaxData</strong> to load the data</li>    \n    </ul>\n \n <ul class=\"nav nav-tabs\">\n  <li class=\"active\"><a data-toggle=\"tab\" href=\"#demoTab\">Demo</a></li>\n  <li><a data-toggle=\"tab\" href=\"#srcTab\">Code and Explanation</a></li>\n</ul>    \n\n<div class=\"tab-content\">\n<div role=\"tabpanel\" class=\"tab-pane\" id=\"srcTab\">\n    <pre>\n        <code #code class=\"typescript\">\n@ViewChild(TreeGrid)\ntreeGrid: TreeGrid;\ntreeDef: TreeGridDef = new TreeGridDef();\n\nngOnInit&#40;&#41;  &#123;\n    this.treeDef.hierachy = [\n        foreignKeyField: \"report_to\", primaryKeyField: \"emp_id\"\n    &#125;;\n    this.treeDef.ajax = &#123;\n        url: 'http://treegriddemoservice.azurewebsites.net/api/values/GetAllEmployees', \n        method: \"POST\",\n        lazyLoad: false,\n        doNotLoad: false\n    &#125;;\n    this.treeDef.columns = [\n        &#123; labelHtml: \"Employee ID\", dataField: \"emp_id\", sort: true &#125;,\n        &#123; labelHtml: \"Given&lt;br/&gt;name\", dataField: \"firstname\" &#125;,\n        &#123; labelHtml: \"Family&lt;br/&gt;name\", dataField: \"lastname\", className: \"tg-body-center tg-header-center\" &#125;,\n        &#123; labelHtml: \"Report To\", dataField: \"report_to\" &#125;\n     ];\n&#125;\n        </code>\n     </pre>\n</div>\n\n\n<div role=\"tabpanel\" class=\"tab-pane active\" id=\"demoTab\">\n    <tg-treegrid [treeGridDef]=\"treeDef\">\n    </tg-treegrid>\n</div>\n</div>\n    ",
            directives: [treegrid_component_1.TreeGrid]
        }), 
        __metadata('design:paramtypes', [])
    ], AjaxLoadDemoComponent);
    return AjaxLoadDemoComponent;
}());
exports.AjaxLoadDemoComponent = AjaxLoadDemoComponent;
//# sourceMappingURL=ajax-load-demo.component.js.map