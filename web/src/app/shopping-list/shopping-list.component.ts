import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import * as ShoppingListActions from './store/shopping-list.actions';
import * as fromAppReducers from '../store/app.reducers';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredientsState: Observable<{ingredients: Ingredient[]}>

  constructor(private store: Store<fromAppReducers.AppState>) { }

  ngOnInit() {
    this.ingredientsState = this.store.select('shoppingList');
  }

  onEditItem(index: number){
		this.store.dispatch(new ShoppingListActions.StartEdit(index))
  }
}
