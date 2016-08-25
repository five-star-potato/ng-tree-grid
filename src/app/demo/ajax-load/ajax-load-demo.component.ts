import { Component, Directive, OnInit, ViewChild } from "@angular/core";
import { BROWSER_SANITIZATION_PROVIDERS, SafeHtml, DomSanitizationService } from  '@angular/platform-browser';
import { TreeGrid, TreeGridDef } from "../../treegrid/treegrid.component";

@Component({
    moduleId: module.id,
    templateUrl: 'ajax-load-demo.component.html',
    directives: [TreeGrid],
    providers: [DomSanitizationService, BROWSER_SANITIZATION_PROVIDERS]
})
export class AjaxLoadDemoComponent implements OnInit {
    @ViewChild(TreeGrid)
    private treeGrid: TreeGrid;
    treeDef: TreeGridDef = new TreeGridDef();

    constructor(private sanitizer: DomSanitizationService) {
    }
    ngOnInit() {
        this.treeDef.hierachy = {
            foreignKeyField: "report_to", primaryKeyField: "emp_id"
        };
        this.treeDef.ajax = {
            url: 'http://treegriddemoservice.azurewebsites.net/api/values/GetAllEmployees', method: "POST",
            //url: 'http://localhost:7774/api/values/GetEmployees', method: "POST",
            lazyLoad: false,
                childrenIndicatorField: 'hasChildren'
        };
        this.treeDef.columns = [
            { labelHtml: "Employee ID", dataField: "emp_id", sort: true, className: "column_sample_style" },
            { labelHtml: "Given<br/>name", dataField: "firstname" },
            { labelHtml: "Family<br/>name", dataField: "lastname", className: "tg-body-center tg-header-center" },
            { labelHtml: "Report To", dataField: "report_to" }];
    }
}