import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {BasicHighlightDirective} from "./directives/basic-highlight.directive";
import {BetterHighlightDirective} from "./directives/better-highlight.directive";
import {UnlessDirective} from "./directives/unless.directive";
import {AddClassDirective} from "./directives/add-class.directive";

const declarations = [
  BasicHighlightDirective,
  BetterHighlightDirective,
  UnlessDirective,
  AddClassDirective
];

@NgModule({
  declarations: declarations,
  imports: [
    BrowserModule,
  ],
  providers: [],
  exports: declarations
})
export class CustomDirectivesModule {}
