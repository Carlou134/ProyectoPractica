import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appRotator]',
  standalone: true,
  host: {
    '(click)':'rotate()'
  }
})
export class RotatorDirective {
 @Input() appRotator = '180';

  constructor(private element: ElementRef){

  }

  rotate(){
    this.element.nativeElement.style.transform = `rotate(${this.appRotator}deg)`;
  }
}
