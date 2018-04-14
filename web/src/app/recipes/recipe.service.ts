import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService
{

	recipeSelected = new EventEmitter<Recipe>()

	private recipes: Recipe[] = [
		new Recipe(
			'Cheeseburger',
			'Everyones favourite Cheeseburger.',
			'https://d1nqx6es26drid.cloudfront.net/app/uploads/2015/04/04043431/product-cheeseburger.png'),
		new Recipe(
			'Quarter Pounder',
			'Everyones favourite Quarter Pounder.',
			'https://www.mcdonalds.co.za/sites/default/files/productThumbnail/mcd-food-beef-quarter-pounder-w-cheese.png')
	];

	getRecipes(){
		return this.recipes.slice();
	}
}