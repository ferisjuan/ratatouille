import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Ratatouille',
      'A delicious french recipe',
      'https://www.pequerecetas.com/wp-content/uploads/2019/02/ratatouille-receta.jpg',
      [
        new Ingredient('Eggplant', 1),
        new Ingredient('Butter', 0.2)
      ]
    ),
    new Recipe(
      'Berenjenas',
      'Buena con suero atollabuey',
      'https://www.cuerpomente.com/medio/2019/03/20/cocinar-berenjena_a8cea140_1200x630.jpg',
      [
        new Ingredient('Eggplant', 1),
        new Ingredient('Suero Atollabuey', 3)
      ]
    )
  ];

  getRecipes() {
    return this.recipes.slice(); // slice returns a copy
  }
}
