import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

/*
* All of the styling applied will inline them
 */
@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  /*
  * Bind properties inside directive to properties of a DOM element
   */
  @HostBinding('style.boxShadow') boxShadow: string;
  @HostBinding('style.color') color: string;

  /*
  * Use properties that can be bound on an element this directive is
  * applied to.
  * Also a default values can be provided
   */
  @Input() shadowColor: string = 'grey';
  @Input() textColor: string = 'blue';

  @HostListener('mouseenter', ['$event', '$event.target'])
  mouseenter(event, eventTarget) {
    console.log(event);
    console.log(eventTarget);

    /*
    * Set style by renderer
     */
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'rgba(200,217,218,0.4)'
    );

    /*
    * Set style by accessing DOM properties
    * bound to directive properties by @HostBinding
    *
     */
    this.boxShadow = `0 0 5px ${this.shadowColor}`;
    this.color = this.textColor;
  }

  @HostListener('mouseleave')
  mouseleave() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'initial'
    );
    this.boxShadow = 'none';
    this.color = 'initial';
  }
}
