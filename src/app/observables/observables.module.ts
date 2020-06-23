import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ObservablesComponent } from './observables.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ObservablesRoutingModule } from './observables-routing.module';

@NgModule({
  declarations: [
    ObservablesComponent,
    HomeComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    ObservablesRoutingModule
  ],
  providers: [],
})
export class ObservablesModule { }
