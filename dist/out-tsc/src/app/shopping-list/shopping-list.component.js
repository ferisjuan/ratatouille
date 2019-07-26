import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ShoppingListComponent = class ShoppingListComponent {
    constructor(shoppingListService) {
        this.shoppingListService = shoppingListService;
    }
    ngOnInit() {
        this.ingredients = this.shoppingListService.getIngredients();
        this.shoppingListService.ingredientsChanged.subscribe((ingredients) => (this.ingredients = ingredients));
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