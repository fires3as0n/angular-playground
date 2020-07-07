import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit{
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    /* This will inline styles */
    this.elementRef.nativeElement.style.backgroundColor =
      'rgba(200,217,218,0.4)';
  }
}
