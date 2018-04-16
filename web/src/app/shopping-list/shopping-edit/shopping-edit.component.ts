import {Component, OnInit, ViewChild, OnDestroy} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';

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
	editedItemIndex: number;
	editedItem: Ingredient;

	constructor(private slService: ShoppingListService)
	{
	}

	ngOnInit()
	{
		this.subscription = this.slService.startEditing.subscribe(
			(index: number) => {
				this.editedItemIndex = index;
				this.editMode = true;
				this.editedItem = this.slService.getIngredient(index);
				this.form.setValue({
					name: this.editedItem.name,
					amount: this.editedItem.amount
				})
			}
		);
	}

	onAddItem(){
		const values = this.form.value;
		const newIngredient = new Ingredient(values.name, values.amount);
		if (this.editMode){
			this.slService.updateIngredient(this.editedItemIndex, newIngredient);
		} else {
			this.slService.addIngredient(newIngredient);
		}
	}

	ngOnDestroy()
	{
		this.subscription.unsubscribe();
	}

}
