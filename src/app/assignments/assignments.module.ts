import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AssignmentsRoutingModule} from "./assignments-routing.module";

const declarations: [] = [

];

@NgModule({
  declarations: declarations,
  imports: [
    CommonModule,
    AssignmentsRoutingModule
  ],
  exports: declarations
})
export class AssignmentsModule { }
