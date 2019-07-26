import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
export class ShoppingListService {
    constructor() {
        this.ingredientsChanged = new EventEmitter();
        this.ingredients = [
            new Ingredient('Salt', 3),
            new Ingredient('Meat', 2)
        ];
    }
    getIngredients() {
        return this.ingredients.slice();
    }
    setIngredients(ingredients) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
    addItem(ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}
//# sourceMappingURL=shopping-list.service.js.map