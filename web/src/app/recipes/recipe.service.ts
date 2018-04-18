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

	private recipes: Recipe[];

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