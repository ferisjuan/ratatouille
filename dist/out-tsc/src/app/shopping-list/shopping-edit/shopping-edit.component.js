import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
let ShoppingEditComponent = class ShoppingEditComponent {
    constructor(slService) {
        this.slService = slService;
        this.editMode = false;
    }
    ngOnInit() {
        this.subscription = this.slService.startedEditing.subscribe((index) => {
            this.editedItemIndex = index;
            this.editMode = true;
            this.editedItem = this.slService.getIngredient(index);
            this.slForm.setValue({ name: this.editedItem.name, amount: this.editedItem.amount });
        });
    }
    onSubmit(form) {
        const value = form.value;
        const newIngredient = new Ingredient(value.name, value.amount);
        if (this.editMode) {
            this.slService.updateIngredient(this.editedItemIndex, newIngredient);
            this.editMode = false;
        }
        else {
            this.slService.addItem(newIngredient);
        }
        form.reset();
    }
    onClear() {
        this.slForm.reset();
        this.editMode = false;
    }
    onDelete() {
        this.slService.deleteIngredient(this.editedItemIndex);
        this.onClear();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
tslib_1.__decorate([
    ViewChild('f', { static: false })
], ShoppingEditComponent.prototype, "slForm", void 0);
ShoppingEditComponent = tslib_1.__decorate([
    Component({
        selector: 'app-shopping-edit',
        templateUrl: './shopping-edit.component.html',
        styleUrls: ['./shopping-edit.component.css']
    })
], ShoppingEditComponent);
export { ShoppingEditComponent };
//# sourceMappingURL=shopping-edit.component.js.map