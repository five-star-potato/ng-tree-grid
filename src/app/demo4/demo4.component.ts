import { Component, Directive, OnInit, ViewChild } from "@angular/core";
import { DatePipe, UpperCasePipe, LowerCasePipe } from '@angular/common';
import { BROWSER_SANITIZATION_PROVIDERS, SafeHtml, DomSanitizationService } from  '@angular/platform-browser';
import { TreeGrid, TreeGridDef } from "../treegrid/treegrid.component";

/****************************************************************************************************************/
/* Deomonstrate the use of Pipes in fomatting. You can chain pipes by supplying more than one pips             */
/****************************************************************************************************************/
@Component({
    moduleId: module.id,
    templateUrl: 'demo4.component.html',
    directives: [TreeGrid],
    providers: [DomSanitizationService, BROWSER_SANITIZATION_PROVIDERS]
})
export class Demo4Component implements OnInit {
    @ViewChild(TreeGrid)
    private treeGrid: TreeGrid;
    treeDef: TreeGridDef = new TreeGridDef();

    constructor() {
    }

    ngOnInit() {
        this.treeDef.columns = [
            { labelHtml: "Employee ID", dataField: "emp_id" },
            { labelHtml: "Given name", dataField: "firstname" },
            { labelHtml: "Family name", dataField: "lastname", transforms: [{ pipe: new LowerCasePipe() }] },
            { labelHtml: "Birthdate", dataField: "dob", transforms: [{ pipe: new DatePipe(), param: "yMMMMd" }, { pipe: new UpperCasePipe() }] }
        ];
        this.treeDef.data = [
            { emp_id: "102", firstname: "Tommen", lastname: "Baratheon", dob: "1970-01-12T00:00:00" },
            { emp_id: "67", firstname: "Ramsay", lastname: "Bolton", dob: "1995-02-23T00:00:00"  }
        ];
    }
}