import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let RecipeListComponent = class RecipeListComponent {
    constructor(recipeService) {
        this.recipeService = recipeService;
    }
    ngOnInit() {
        this.recipes = this.recipeService.getRecipes();
    }
};
RecipeListComponent = tslib_1.__decorate([
    Component({
        selector: 'app-recipe-list',
        templateUrl: './recipe-list.component.html',
        styleUrls: ['./recipe-list.component.css']
    })
], RecipeListComponent);
export { RecipeListComponent };
//# sourceMappingURL=recipe-list.component.js.map