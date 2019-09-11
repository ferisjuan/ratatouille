import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
let RecipeEditComponent = class RecipeEditComponent {
    constructor(route, recipeService) {
        this.route = route;
        this.recipeService = recipeService;
        this.editMode = false;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.id = +params['id'];
            this.editMode = params['id'] != null;
            this.initForm();
        });
    }
    initForm() {
        let recipeName = '';
        let recipeImagePath = '';
        let recipeDescription = '';
        let recipeIngredients = new FormArray([]);
        if (this.editMode) {
            const recipe = this.recipeService.getRecipe(this.id);
            recipeName = recipe.name;
            recipeImagePath = recipe.imagePath;
            recipeDescription = recipe.description;
            if (recipe['ingredients']) {
                for (const ingredient of recipe.ingredients) {
                    recipeIngredients.push(new FormGroup({
                        name: new FormControl(ingredient.name, Validators.required),
                        amount: new FormControl(ingredient.amount, [
                            Validators.required,
                            Validators.pattern(/^[1-9]+[0-9]*$/)
                        ])
                    }));
                }
            }
        }
        this.recipeForm = new FormGroup({
            name: new FormControl(recipeName, Validators.required),
            description: new FormControl(recipeDescription, Validators.required),
            imagePath: new FormControl(recipeImagePath, Validators.required),
            ingredients: recipeIngredients
        });
    }
    getControls() {
        return this.recipeForm.get('ingredients').controls;
    }
    onSubmit() {
        console.log(this.recipeForm.value);
    }
    onAddIngredient() {
        this.recipeForm.get('ingredients').push(new FormGroup({
            name: new FormControl(null, Validators.required),
            amount: new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
        }));
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