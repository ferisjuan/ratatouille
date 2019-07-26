import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let RecipeItemComponent = class RecipeItemComponent {
    constructor(recipeService) {
        this.recipeService = recipeService;
    }
    onSelected() {
        this.recipeService.recipeSelected.emit(this.recipe);
    }
    ngOnInit() { }
};
tslib_1.__decorate([
    Input()
], RecipeItemComponent.prototype, "recipe", void 0);
RecipeItemComponent = tslib_1.__decorate([
    Component({
        selector: 'app-recipe-item',
        templateUrl: './recipe-item.component.html',
        styleUrls: ['./recipe-item.component.css']
    })
], RecipeItemComponent);
export { RecipeItemComponent };
//# sourceMappingURL=recipe-item.component.js.map