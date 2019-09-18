import * as tslib_1 from "tslib";
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
const appRoutes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    {
        path: 'recipes',
        component: RecipesComponent,
        children: [
            {
                path: '',
                component: RecipeStartComponent
            },
            {
                path: 'new',
                component: RecipeEditComponent
            },
            {
                path: ':id',
                component: RecipeDetailComponent
            },
            {
                path: ':id/edit',
                component: RecipeEditComponent
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