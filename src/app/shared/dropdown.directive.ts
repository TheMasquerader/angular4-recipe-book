// 8.93
// The directive is supposed to add a CSS class to the element once it's clicked and remove the class once we click again.

import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {

    @HostBinding('class.open') isOpen = false;

    // My solution:
    // constructor(private elemRef: ElementRef, private renderer: Renderer2) {}

    @HostListener('click') toggleOpen(eventData: Event) {

        // My solution:
        /* if (!this.isOpen) {
            this.renderer.setAttribute(this.elemRef.nativeElement, 'class', 'open');
        } else {
            this.renderer.removeAttribute(this.elemRef.nativeElement, 'class');
        } */
        this.isOpen = !this.isOpen;
    }
}
