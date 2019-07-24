import * as tslib_1 from "tslib";
import { Directive, HostListener } from '@angular/core';
let DropdownDirective = class DropdownDirective {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    mouseOver(event) {
        this.renderer.addClass(this.elementRef, 'open');
    }
    mouseLeave(event) {
        this.renderer.removeClass(this.elementRef, 'open');
    }
};
tslib_1.__decorate([
    HostListener('mouseenter')
], DropdownDirective.prototype, "mouseOver", null);
tslib_1.__decorate([
    HostListener('mouseleave')
], DropdownDirective.prototype, "mouseLeave", null);
DropdownDirective = tslib_1.__decorate([
    Directive({
        selector: '[appDropdown]'
    })
], DropdownDirective);
export { DropdownDirective };
//# sourceMappingURL=dropdown.directive.js.map