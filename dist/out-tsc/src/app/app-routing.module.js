import * as tslib_1 from "tslib";
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
const appRoutes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    {
        path: 'recipes',
        component: RecipesComponent,
        children: [
            {
                path: 'recipe-list',
                component: RecipeListComponent
            },
            {
                path: 'recipe-item',
                component: RecipeItemComponent
            },
            {
                path: 'recipe-detail',
                component: RecipeDetailComponent
            }
        ]
    },
    {
        path: 'shopping-list',
        component: ShoppingListComponent,
        children: [
            {
                path: 'shopping-list',
                component: ShoppingListComponent
            },
            {
                path: 'shopping-edit',
                component: ShoppingEditComponent
            }
        ]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(appRoutes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map