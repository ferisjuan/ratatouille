import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let RecipeEditComponent = class RecipeEditComponent {
    constructor(route) {
        this.route = route;
        this.editMode = false;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.id = +params['id'];
            this.editMode = params['id'] != null;
        });
    }
};
RecipeEditComponent = tslib_1.__decorate([
    Component({
        selector: 'app-recipe-edit',
        templateUrl: './recipe-edit.component.html',
        styleUrls: ['./recipe-edit.component.css']
    })
], RecipeEditComponent);
export { RecipeEditComponent };
//# sourceMappingURL=recipe-edit.component.js.map