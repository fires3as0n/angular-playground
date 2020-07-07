import {Directive, Input, TemplateRef, ViewContainerRef} from "@angular/core";

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {
    console.log("======appUnless======");
    console.log(this.appUnless);
    console.log("======appUnless.templateRef======");
    console.log(this.templateRef);
    console.log("======appUnless.viewContainerRef======");
    console.log(this.viewContainerRef);
  }

  @Input()
  set appUnless(condition: boolean) {
    if (!condition) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
    else {
      this.viewContainerRef.clear();
    }
  }
}
