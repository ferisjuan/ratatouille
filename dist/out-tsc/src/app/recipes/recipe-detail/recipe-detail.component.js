import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let RecipeDetailComponent = class RecipeDetailComponent {
    constructor(recipeServices, router, route) {
        this.recipeServices = recipeServices;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.paramsSubscription = this.route.params.subscribe((params) => {
            this.id = +params['id'];
            this.recipe = this.recipeServices.getRecipe(this.id);
        });
    }
    ngOnDestroy() { }
    onEditRecipe() {
        this.router.navigate(['edit'], { relativeTo: this.route });
    }
    onAddToShoppingList() {
        this.recipeServices.addIngredientsToShoppingList(this.recipe.ingredients);
    }
};
RecipeDetailComponent = tslib_1.__decorate([
    Component({
        selector: 'app-recipe-detail',
        templateUrl: './recipe-detail.component.html',
        styleUrls: ['./recipe-detail.component.css']
    })
], RecipeDetailComponent);
export { RecipeDetailComponent };
//# sourceMappingURL=recipe-detail.component.js.map