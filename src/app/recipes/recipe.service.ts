import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
    new Recipe('Pancakes', 'Pancakes are good for you.',
     // tslint:disable-next-line:max-line-length
     '../../assets/pexels-photo-264727.jpeg', // tea-cake-cafe-desserts-162827.jpeg

    [
        new Ingredient('Flour', 1),
        new Ingredient('Egg', 1)
    ]),

     new Recipe('Waffles', 'Waffles are good for you.',
     // tslint:disable-next-line:max-line-length
     '../../assets/pexels-photo-227432.jpeg',

    [
        new Ingredient('Flour', 1),
        new Ingredient('Milk', 3),
        new Ingredient('Oil', 2)
    ])
  ];

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
      // tslint:disable-next-line:max-line-length
      return this.recipes.slice(); // Returns a new array which is an exact copy of the recipes array (as opposed to providing a reference to the recipes).
  }

  getRecipe(index: number) {
      return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
