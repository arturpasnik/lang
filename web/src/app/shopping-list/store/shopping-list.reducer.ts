import * as ShoppingListActions from './shopping-list.actions';
import {Ingredient} from '../../shared/ingredient.model';

const initialState = {
	ingredients: [
		new Ingredient('bolka', 1),
		new Ingredient('ser', 2),
	]
}

export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions){
	switch (action.type){
		case ShoppingListActions.ADD_INGREDIENT:
			return {
				...state,
				ingredients: [...state.ingredients, action.payload]
			}
		default:
			return state;
	}
}