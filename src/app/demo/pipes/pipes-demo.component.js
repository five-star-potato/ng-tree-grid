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
var common_1 = require('@angular/common');
var treegrid_component_1 = require("../../treegrid/treegrid.component");
/****************************************************************************************************************/
/* Deomonstrate the use of Pipes in fomatting. You can chain pipes by supplying more than one pips             */
/****************************************************************************************************************/
var MyPipe = (function () {
    function MyPipe() {
    }
    MyPipe.prototype.transform = function (value, param) {
        return value + " " + param;
    };
    MyPipe = __decorate([
        core_1.Pipe({ name: 'MyPipe' }), 
        __metadata('design:paramtypes', [])
    ], MyPipe);
    return MyPipe;
}());
exports.MyPipe = MyPipe;
var PipesDemoComponent = (function () {
    function PipesDemoComponent() {
        this.treeDef = new treegrid_component_1.TreeGridDef();
    }
    PipesDemoComponent.prototype.ngAfterViewInit = function () {
        hljs.highlightBlock(this.codeElement.nativeElement);
    };
    PipesDemoComponent.prototype.ngOnInit = function () {
        this.treeDef.columns = [
            { labelHtml: "Employee ID", dataField: "emp_id" },
            { labelHtml: "Given name", dataField: "firstname" },
            { labelHtml: "Family name", dataField: "lastname", transforms: [{ pipe: new common_1.LowerCasePipe() }, { pipe: new MyPipe(), param: " - eh" }] },
            { labelHtml: "Birthdate", dataField: "dob", transforms: [{ pipe: new common_1.DatePipe(), param: "yMMMMd" }, { pipe: new common_1.UpperCasePipe() }] }
        ];
        this.treeDef.data = [
            { emp_id: "102", firstname: "Tommen", lastname: "Baratheon", dob: "1970-01-12T00:00:00" },
            { emp_id: "67", firstname: "Ramsay", lastname: "Bolton", dob: "1995-02-23T00:00:00" }
        ];
    };
    __decorate([
        core_1.ViewChild(treegrid_component_1.TreeGrid), 
        __metadata('design:type', treegrid_component_1.TreeGrid)
    ], PipesDemoComponent.prototype, "treeGrid", void 0);
    __decorate([
        core_1.ViewChild('code'), 
        __metadata('design:type', core_1.ElementRef)
    ], PipesDemoComponent.prototype, "codeElement", void 0);
    PipesDemoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            template: "\n    <h2>Formatting with Pipes</h2>\n    <h3>Description</h3>\n    Features included:\n    <ul>\n        <li>Using built-in pipes or custom pipes to format your data</li>\n    </ul>\n    \n<ul class=\"nav nav-tabs\">\n  <li class=\"active\"><a data-toggle=\"tab\" href=\"#demoTab\">Demo</a></li>\n  <li><a data-toggle=\"tab\" href=\"#srcTab\">Code and Explanation</a></li>\n</ul>    \n\n<div class=\"tab-content\">\n<div role=\"tabpanel\" class=\"tab-pane\" id=\"srcTab\">\n    <pre>\n        <code #code class=\"typescript\">\n/* we use this pipe to attch \"- eh\" at the end of <strong>value</strong> */\n@Pipe(&#123;name: 'MyPipe'&#125;)\nexport class MyPipe implements PipeTransform &#123;\n  transform(value: string, param: string): string &#123;\n    return &#96;$&#123;value&#125; $&#123;param&#125;&#96;;\n  &#125;\n&#125;\n\nexport class PipesDemoComponent implements OnInit &#123;\n    ngOnInit() &#123;\n        this.treeDef.columns = [\n            &#123; labelHtml: \"Employee ID\", dataField: \"emp_id\" &#125;,\n            &#123; labelHtml: \"Given name\", dataField: \"firstname\" &#125;,\n            &#123; labelHtml: \"Family name\", dataField: \"lastname\", transforms: [&#123; pipe: new LowerCasePipe() &#125;, &#123; pipe: new MyPipe(), param: \" - eh\"&#125;] &#125;,\n            &#123; labelHtml: \"Birthdate\", dataField: \"dob\", transforms: [&#123; pipe: new DatePipe(), param: \"yMMMMd\" &#125;, &#123; pipe: new UpperCasePipe() &#125;] &#125;\n        ];\n        /* ... */    \n    &#125;\n&#125;\n        </code>\n     </pre>\n</div>\n\n<div role=\"tabpanel\" class=\"tab-pane active\" id=\"demoTab\">\n    <tg-treegrid [treeGridDef]=\"treeDef\">\n    </tg-treegrid>\n</div>\n</div>\n    ",
            directives: [treegrid_component_1.TreeGrid]
        }), 
        __metadata('design:paramtypes', [])
    ], PipesDemoComponent);
    return PipesDemoComponent;
}());
exports.PipesDemoComponent = PipesDemoComponent;
//# sourceMappingURL=pipes-demo.component.js.map