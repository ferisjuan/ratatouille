import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { RecipeService } from './recipe.services';
let RecipesComponent = class RecipesComponent {
    constructor() { }
    ngOnInit() {
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