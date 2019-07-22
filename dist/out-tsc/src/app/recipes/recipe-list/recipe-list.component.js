import * as tslib_1 from "tslib";
import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
let RecipeListComponent = class RecipeListComponent {
    constructor() {
        this.recipeWasSelected = new EventEmitter();
        this.recipes = [
            new Recipe('Ratatouille', 'A delicious french recipe', 'https://www.pequerecetas.com/wp-content/uploads/2019/02/ratatouille-receta.jpg'),
            new Recipe('Berenjenas', 'Buena con suero atollabuye', 'https://www.cuerpomente.com/medio/2019/03/20/cocinar-berenjena_a8cea140_1200x630.jpg')
        ];
    }
    ngOnInit() { }
    onRecipeSelected(recipe) {
        this.recipeWasSelected.emit(recipe);
    }
};
tslib_1.__decorate([
    Output()
], RecipeListComponent.prototype, "recipeWasSelected", void 0);
RecipeListComponent = tslib_1.__decorate([
    Component({
        selector: 'app-recipe-list',
        templateUrl: './recipe-list.component.html',
        styleUrls: ['./recipe-list.component.css']
    })
], RecipeListComponent);
export { RecipeListComponent };
//# sourceMappingURL=recipe-list.component.js.map