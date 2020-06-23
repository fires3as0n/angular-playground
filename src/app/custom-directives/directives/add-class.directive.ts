import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from "@angular/core";

@Directive({
  selector: '[appAddClass]'
})
export class AddClassDirective implements OnInit{
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    console.log("\n======AddClassDirective in constructor======");
    console.log(this);
  }

  ngOnInit() {
    console.log("\n======AddClassDirective in ngOnInit()======");
    console.log(this);
  }

  @Input() firstClass: string;
  @Input() secondClass: string;

  /*
  * May think that could be a good idea to bind to
  * classList property to operate it from directive,
  * BUT @HostBinding is only applicable to HTML
  * properties, not DOM properties, thus
  * classListBind will be undefined
  *
  * also, this binding will add 'undefined' to class of
  * element and override all other classes applied via HTML attribute
   */
  //@HostBinding('classList') classListBind;

  /*
  * Can't pass thirdClass from host here, because
  * it would require string-interpolation to bind it
  * which is not possible.
  * Thus while this method is the most concise
  * it is less configurable as classname must be hardcoded
   */
  @HostBinding('class.third-class') thirdClassBind;
  @HostBinding('class.forth-class') forthClassBind;

  @HostListener('click')
  onClick() {
    /*
    * Toggle class by directly accessing DOM element
    * and its methods
     */
    this.elementRef.nativeElement.classList.toggle(this.firstClass);

    /*
    * Toggle class by using Renderer2
     */
    if (this.elementRef.nativeElement.classList.contains(this.secondClass)) {
      this.renderer
        .removeClass(this.elementRef.nativeElement, this.secondClass);
    } else {
      this.renderer
        .addClass(this.elementRef.nativeElement, this.secondClass);
    }

    /*
    * Most concise but less configurable and obvious way
    * to toggle class
     */
    console.log(this.thirdClassBind);
    this.thirdClassBind = !this.thirdClassBind;
  }

  /*
  * Can listen not only to this element events
  * this will remove class if clicked outside of element
   */
  @HostListener('document:click', ['$event'])
  toggleClass(event: Event) {
    this.forthClassBind =
      this.elementRef.nativeElement.contains(event.target)
        ? !this.forthClassBind
        : false;
  }
}
