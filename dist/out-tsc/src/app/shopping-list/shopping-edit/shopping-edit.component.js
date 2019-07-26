import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
let ShoppingEditComponent = class ShoppingEditComponent {
    constructor(shoppingListService) {
        this.shoppingListService = shoppingListService;
    }
    ngOnInit() { }
    onAddItem() {
        const ingredientName = this.nameInputRef.nativeElement.value;
        const ingredientAmount = this.amountInputRef.nativeElement.value;
        const newIngredient = new Ingredient(ingredientName, ingredientAmount);
        this.shoppingListService.addItem(newIngredient);
    }
};
tslib_1.__decorate([
    ViewChild('nameInput', { static: false })
], ShoppingEditComponent.prototype, "nameInputRef", void 0);
tslib_1.__decorate([
    ViewChild('amountInput', { static: false })
], ShoppingEditComponent.prototype, "amountInputRef", void 0);
ShoppingEditComponent = tslib_1.__decorate([
    Component({
        selector: 'app-shopping-edit',
        templateUrl: './shopping-edit.component.html',
        styleUrls: ['./shopping-edit.component.css']
    })
], ShoppingEditComponent);
export { ShoppingEditComponent };
//# sourceMappingURL=shopping-edit.component.js.map