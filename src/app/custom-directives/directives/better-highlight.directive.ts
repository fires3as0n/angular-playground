import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2, TemplateRef} from '@angular/core';

/*
* All of the styling applied will inline them
 */
@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private templateRef: TemplateRef<any>,
  ) { console.log(arguments);}

  /*
  * [1] Access parent by @HostBinding
  *
  * Bind properties inside directive to properties of a DOM element
   */
  @HostBinding('style.boxShadow') boxShadow: string;
  @HostBinding('style.color') color: string;

  /*
  * [] Access parent inputs
  *
  * Use properties that can be bound on an element this directive is
  * applied to.
  * Also a default values can be provided
   */
  @Input() shadowColor: string = 'grey';
  @Input() textColor: string = 'blue';

  @HostListener('mouseenter', ['$event', '$event.target', '35'])
  mouseenter(event, eventTarget, thirdArg) {
    console.log(event);
    console.log(eventTarget);
    console.log(thirdArg);

    /*
    * [2] Access parent by DI in constructor
    *
    * Set style by renderer and accessing element to which
    * directive is applied by ref injected in constructor
    * still dont give a fuck how that injection works and injects correct element
    * fucking magic
     */
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'rgba(200,217,218,0.4)'
    );

    /*
    * [1] Access parent by @HostBinding
    *
    * Set style by accessing DOM properties
    * bound to directive properties by @HostBinding
    *
     */
    this.boxShadow = `0 0 5px ${this.shadowColor}`;

    /*
    * [3] Access parent by getting it from event passed to @HostListener
    *
    *
     */
    eventTarget.style.color = this.textColor
    // this.color = this.textColor;
  }

  /*
  *
  *
   */

  /**
   * Documentation says that array as a second argument is
   * A set of arguments to pass to the handler method when the event occurs.
   * Reality is that this is total bullshit. Here I explain how it really works:
   *
   * text arguments are ignored (undefined),
   * number arguments will be number arguments
   * only usable shit about this array of useless crap is to use
   * angular alias (or how this fuck should be called) to pass an event inside handler
   *
   * So instead of
   * @eventName	The DOM event to listen for.
   * @args A set of arguments to pass to the handler method when the event occurs.
   *
   * It is
   * @eventName	The DOM event to listen for.
   * @['$event'] Use this retarded construction as second argument to decorator
   * and decorated method will receive event as its first argument. Don't ask why.
   *
   */
  @HostListener('focusout', ['$event', '$event.target', 'c'])
  mouseleave(a,b: HTMLInputElement,c) {
    console.log(a);
    console.log(b);
    console.log(c);
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'initial'
    );
    this.boxShadow = 'none';
    this.color = 'initial';
  }
}
