import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";

import { FormsReactiveStartComponent } from './forms-reactive-start.component';

@NgModule({
  declarations: [
    FormsReactiveStartComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [FormsReactiveStartComponent]
})
export class FormsReactiveStartModule { }
