import {Recipe} from './recipe.model';
import {Injectable} from '@angular/core';

import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs/Subject';
import {HttpClient} from '@angular/common/http';

import 'rxjs/Rx';

@Injectable()
export class RecipeService
{
	recipesChanged = new Subject<Recipe[]>();

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

	constructor(private slService: ShoppingListService, private http: HttpClient){}

	getRecipes(){
		this.http.get('http://lang.local/api/recipe/all').subscribe(
			(recipes: Recipe[]) => {
				this.recipes = recipes;
				this.recipesChanged.next(this.recipes.slice());
			}
		);
	}

	getRecipeByIndex(index: number){
		return this.recipes[index];
	}

	addIngredientsToShoppingList(ingredients: Ingredient[]){
		this.slService.addIngredients(ingredients);
	}

	addRecipe(recipe: Recipe){
		this.recipes.push(recipe);
		this.recipesChanged.next(this.recipes.slice());
	}

	updateRecipe(index: number, newRecipe: Recipe){
		this.recipes[index] = newRecipe;
		this.recipesChanged.next(this.recipes.slice());
	}

	deleteRecipe(index: number){
		this.recipes.splice(index,1);
		this.recipesChanged.next(this.recipes.slice());
	}
}