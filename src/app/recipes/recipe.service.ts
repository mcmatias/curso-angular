import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable() 
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Tasty Schnitzel',
            'A super-tasty Schnitzel - just awesome!', 
            'https://thecozyapron.com/wp-content/uploads/2012/02/schnitzel_thecozyapron_1.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe(
            'Big Fat Burger',
            'What else you need to say?',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZHt7IPwi1PYKAJ1RdwMrH7TUE-LO-ydUy1-fX5yGvWsE8uSE0',
            [  
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ])
      ];

    constructor(private slService: ShoppingListService) {}

   getRecipes() {
    return this.recipes.slice();
   }   

   getRecipe(index: number){
    return this.recipes[index];
   }

   addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
   }

}