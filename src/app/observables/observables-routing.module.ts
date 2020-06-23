import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

export const observablesRoutes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'user/:id', component: UserComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(observablesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ObservablesRoutingModule {

}
