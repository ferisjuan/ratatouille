import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { RecipeService } from './recipe.services';
let RecipesComponent = class RecipesComponent {
    constructor(recipeService) {
        this.recipeService = recipeService;
    }
    ngOnInit() {
        this.recipeService.recipeSelected
            .subscribe((recipe) => this.selectedRecipe = recipe);
    }
};
RecipesComponent = tslib_1.__decorate([
    Component({
        selector: 'app-recipes',
        templateUrl: './recipes.component.html',
        styleUrls: ['./recipes.component.css'],
        providers: [RecipeService],
    })
], RecipesComponent);
export { RecipesComponent };
//# sourceMappingURL=recipes.component.js.map