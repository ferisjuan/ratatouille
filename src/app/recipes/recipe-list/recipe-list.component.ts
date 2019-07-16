import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Ratatouille',
      'A delicious french recipe',
      'https://www.pequerecetas.com/wp-content/uploads/2019/02/ratatouille-receta.jpg'
    ),
    new Recipe(
      'Ratatouille',
      'A delicious french recipe',
      'https://www.pequerecetas.com/wp-content/uploads/2019/02/ratatouille-receta.jpg'
    )
  ];

  constructor() {}

  ngOnInit() {}
}
