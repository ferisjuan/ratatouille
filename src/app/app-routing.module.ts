import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { RecipesModule } from './recipes/recipes.module';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    loadChildren: () => RecipesModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
