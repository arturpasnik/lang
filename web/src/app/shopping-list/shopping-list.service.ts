import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs/Subject';

export class ShoppingListService
{
	ingredientsChanged = new Subject<Ingredient[]>();
	startEditing = new Subject<number>();

	private ingredients: Ingredient[] = [
		new Ingredient('bolka', 1),
		new Ingredient('ser', 1),
	];

	getIngredient(index: number){
		return this.ingredients[index];
	}

	updateIngredient(index:number, ingredient: Ingredient){
		this.ingredients[index] = ingredient;
		this.ingredientsChanged.next(this.ingredients.slice())
	}

	deleteIngredient(index:number){
		this.ingredients.splice(index,1);
		this.ingredientsChanged.next(this.ingredients.slice())
	}
}