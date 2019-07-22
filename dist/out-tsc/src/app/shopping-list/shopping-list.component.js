import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
let ShoppingListComponent = class ShoppingListComponent {
    constructor() {
        this.ingredients = [
            new Ingredient('Salt', 3),
            new Ingredient('Meat', 2)
        ];
    }
    ngOnInit() { }
    onIngredientAdded(ingredient) {
        this.ingredients.push(ingredient);
    }
};
ShoppingListComponent = tslib_1.__decorate([
    Component({
        selector: 'app-shopping-list',
        templateUrl: './shopping-list.component.html',
        styleUrls: ['./shopping-list.component.css']
    })
], ShoppingListComponent);
export { ShoppingListComponent };
//# sourceMappingURL=shopping-list.component.js.map