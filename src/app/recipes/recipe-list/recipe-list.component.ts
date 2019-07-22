import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Ratatouille',
      'A delicious french recipe',
      'https://www.pequerecetas.com/wp-content/uploads/2019/02/ratatouille-receta.jpg'
    ),
    new Recipe(
      'Berenjenas',
      'Buena con suero atollabuye',
      'https://www.cuerpomente.com/medio/2019/03/20/cocinar-berenjena_a8cea140_1200x630.jpg'
    )
  ];

  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
