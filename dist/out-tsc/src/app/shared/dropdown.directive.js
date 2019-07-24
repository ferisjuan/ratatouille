import * as tslib_1 from "tslib";
import { Directive, HostListener, HostBinding } from '@angular/core';
let DropdownDirective = class DropdownDirective {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.isOpen = false;
    }
    toggleOpen() {
        this.isOpen = !this.isOpen;
    }
};
tslib_1.__decorate([
    HostBinding('class.open')
], DropdownDirective.prototype, "isOpen", void 0);
tslib_1.__decorate([
    HostListener('click')
], DropdownDirective.prototype, "toggleOpen", null);
DropdownDirective = tslib_1.__decorate([
    Directive({
        selector: '[appDropdown]'
    })
], DropdownDirective);
export { DropdownDirective };
//# sourceMappingURL=dropdown.directive.js.map