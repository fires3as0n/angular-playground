import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DatabindingAssignmentComponent} from "./databinding-assignment/databinding-assignment.component";

export const assignmentsRoutes: Routes = [
  { path: 'databinding', component: DatabindingAssignmentComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(assignmentsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AssignmentsRoutingModule {

}
