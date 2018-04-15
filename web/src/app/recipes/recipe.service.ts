import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';

import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService
{

	recipeSelected = new EventEmitter<Recipe>()

	private recipes: Recipe[] = [
		new Recipe(
			'Cheeseburger',
			'Everyones favourite Cheeseburger.',
			'https://d1nqx6es26drid.cloudfront.net/app/uploads/2015/04/04043431/product-cheeseburger.png',
			[
				new Ingredient('bulka',1),
				new Ingredient('ser',2),
			]
		),
		new Recipe(
			'Quarter Pounder',
			'Everyones favourite Quarter Pounder.',
			'https://www.mcdonalds.co.za/sites/default/files/productThumbnail/mcd-food-beef-quarter-pounder-w-cheese.png',
			[
				new Ingredient('bulka',1),
				new Ingredient('ogorek',1),
			]
		)
	];

	constructor(private slService: ShoppingListService){}

	getRecipes(){
		return this.recipes.slice();
	}

	addIngredientsToShoppingList(ingredients: Ingredient[]){
		this.slService.addIngredients(ingredients);
	}
}