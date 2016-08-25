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
var platform_browser_1 = require('@angular/platform-browser');
var treegrid_component_1 = require("../treegrid/treegrid.component");
/****************************************************************************************************************/
/* Deomonstrate the use of Pipes in fomatting. You can chain pipes by supplying more than one pips             */
/****************************************************************************************************************/
var Demo4Component = (function () {
    function Demo4Component() {
        this.treeDef = new treegrid_component_1.TreeGridDef();
    }
    Demo4Component.prototype.ngOnInit = function () {
        this.treeDef.columns = [
            { labelHtml: "Employee ID", dataField: "emp_id" },
            { labelHtml: "Given name", dataField: "firstname" },
            { labelHtml: "Family name", dataField: "lastname", transforms: [{ pipe: new common_1.LowerCasePipe() }] },
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
    ], Demo4Component.prototype, "treeGrid", void 0);
    Demo4Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'demo4.component.html',
            directives: [treegrid_component_1.TreeGrid],
            providers: [platform_browser_1.DomSanitizationService, platform_browser_1.BROWSER_SANITIZATION_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [])
    ], Demo4Component);
    return Demo4Component;
}());
exports.Demo4Component = Demo4Component;
//# sourceMappingURL=demo4.component.js.map