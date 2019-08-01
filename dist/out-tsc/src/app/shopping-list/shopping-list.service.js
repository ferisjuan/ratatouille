import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';
export class ShoppingListService {
    constructor() {
        this.ingredientsChanged = new Subject();
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
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    addItem(ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}
//# sourceMappingURL=shopping-list.service.js.map