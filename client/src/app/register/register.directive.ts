import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appReg]'
})
export class RegisterDirective {

  @Input('zoomSize') size: string;

  constructor(private element: ElementRef, private renderer: Renderer2) {

  }


  @HostListener("mouseenter") onMouseEnter() {
    this.setFontWeight("bold");
    console.log(this.size)
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.setFontWeight("normal");
  }

  private setFontWeight(val: string) {
    this.renderer.setStyle(this.element.nativeElement, "font-weight", val);
  }
}
