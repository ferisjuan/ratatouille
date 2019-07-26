import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
export class RecipeService {
    constructor() {
        this.recipeSelected = new EventEmitter();
        this.recipes = [
            new Recipe('Ratatouille', 'A delicious french recipe', 'https://www.pequerecetas.com/wp-content/uploads/2019/02/ratatouille-receta.jpg'),
            new Recipe('Berenjenas', 'Buena con suero atollabuey', 'https://www.cuerpomente.com/medio/2019/03/20/cocinar-berenjena_a8cea140_1200x630.jpg')
        ];
    }
    getRecipes() {
        return this.recipes.slice(); // slice returns a copy
    }
}
//# sourceMappingURL=recipe.services.js.map