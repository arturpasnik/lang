import {Component, OnInit, ViewChild, OnDestroy} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';
import {Store} from '@ngrx/store';
import * as ShoppingListActions from '../store/shopping-list.actions';
import * as fromAppReducers from '../../store/app.reducers';

@Component({
	selector: 'app-shopping-edit',
	templateUrl: './shopping-edit.component.html',
	styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy
{
	@ViewChild('f') form: NgForm;
	subscription: Subscription;
	editMode = false;
	editedItem: Ingredient;

	constructor(private store: Store<fromAppReducers.AppState>)
	{
	}

	ngOnInit()
	{
		this.subscription = this.store.select('shoppingList').subscribe(
			data => {
				if (data.editedIngredientIndex > -1) {
					this.editedItem = data.editedIngredient;
					this.editMode = true;
					this.form.setValue({
						name: this.editedItem.name,
						amount: this.editedItem.amount
					});
				} else {
					this.editMode = false;
				}
			}
		);
	}

	onAddItem()
	{
		const values = this.form.value;
		const newIngredient = new Ingredient(values.name, values.amount);
		if (this.editMode) {
			this.store.dispatch(new ShoppingListActions.UpdateIngredient({ingredient: newIngredient}));
		} else {
			this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient));
		}
		this.editMode = false;
		this.form.reset();
	}

	onClear()
	{
		this.editMode = false;
		this.form.reset();
	}

	onDelete()
	{
		this.store.dispatch(new ShoppingListActions.DeleteIngredient());
		this.onClear();
	}

	ngOnDestroy()
	{
		this.store.dispatch(new ShoppingListActions.StopEdit());
		this.subscription.unsubscribe();
	}

}
