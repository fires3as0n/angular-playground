import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ChangeDetectionComponent} from './change-detection.component';
import {OnPushComponent} from './components/on-push/on-push.component';
import {DefaultComponent} from './components/default/default.component';
import {FormsModule} from '@angular/forms';

const declarations = [
  ChangeDetectionComponent,
  OnPushComponent,
  DefaultComponent
];

@NgModule({
  declarations: declarations,
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  exports: declarations
})
export class ChangeDetectionModule {}
