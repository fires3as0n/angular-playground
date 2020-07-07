import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgTemplateNgContainerComponent} from "./ng-template-ng-container.component";
import {FormsModule} from "@angular/forms";

const declarations = [ NgTemplateNgContainerComponent ]

@NgModule({
  declarations: declarations,
  exports: declarations,
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class NgTemplateNgContainerModule { }
