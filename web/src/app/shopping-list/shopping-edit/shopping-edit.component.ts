import {Component, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from '@angular/forms';

@Component({
	selector: 'app-shopping-edit',
	templateUrl: './shopping-edit.component.html',
	styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit
{
	@ViewChild('f') form: NgForm;

	constructor(private slService: ShoppingListService)
	{
	}

	ngOnInit()
	{
	}

	onAddItem(){
		const values = this.form.value;
		const newIngredient = new Ingredient(values.name, values.amount);
		this.slService.addIngredient(newIngredient);
	}

}
