import * as tslib_1 from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
let HeaderComponent = class HeaderComponent {
    constructor() {
        this.featureSelected = new EventEmitter();
    }
    onSelect(feature) {
        this.featureSelected.emit(feature);
    }
};
tslib_1.__decorate([
    Output()
], HeaderComponent.prototype, "featureSelected", void 0);
HeaderComponent = tslib_1.__decorate([
    Component({
        selector: 'app-header',
        templateUrl: './header.component.html'
    })
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map