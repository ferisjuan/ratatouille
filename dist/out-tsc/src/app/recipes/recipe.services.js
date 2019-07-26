import * as tslib_1 from "tslib";
import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
let RecipeService = class RecipeService {
    constructor(slService) {
        this.slService = slService;
        this.recipeSelected = new EventEmitter();
        this.recipes = [
            new Recipe('Ratatouille', 'A delicious french recipe', 'https://www.pequerecetas.com/wp-content/uploads/2019/02/ratatouille-receta.jpg', [new Ingredient('Eggplant', 1), new Ingredient('Butter', 0.2)]),
            new Recipe('Berenjenas', 'Buena con suero atollabuey', 'https://www.cuerpomente.com/medio/2019/03/20/cocinar-berenjena_a8cea140_1200x630.jpg', [new Ingredient('Eggplant', 1), new Ingredient('Suero Atollabuey', 3)])
        ];
    }
    getRecipes() {
        return this.recipes.slice(); // slice returns a copy
    }
    addIngredientsToShoppingList(ingredients) {
        this.slService.setIngredients(ingredients);
    }
};
RecipeService = tslib_1.__decorate([
    Injectable()
], RecipeService);
export { RecipeService };
//# sourceMappingURL=recipe.services.js.map