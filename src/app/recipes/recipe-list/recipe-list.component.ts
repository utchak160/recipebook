import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
   @Output() recipeWasSelected = new EventEmitter<Recipe>()
    recipes: Recipe[]= [
      new Recipe('this is a test', 'nice dish', 'https://get.pxhere.com/photo/dish-meal-food-vegetable-recipe-cuisine-vegetarian-food-parmigiana-1417897.jpg'),
      new Recipe('this is a Another test', 'nice dish', 'https://get.pxhere.com/photo/dish-meal-food-vegetable-recipe-cuisine-vegetarian-food-parmigiana-1417897.jpg')
    ];
  constructor() { }

  ngOnInit() {
  }
onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
}
}
