import {Component, OnInit} from '@angular/core';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Recipe} from '../recipe.model';
import {Store} from '@ngrx/store';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';
import * as fromAppReducers from '../../store/app.reducers';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute, private store: Store<fromAppReducers.AppState>) { }

  ngOnInit() {
    const id = this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipeByIndex(this.id);
      }
    );
  }

	onAddToShoppingList(){
		this.store.dispatch(new ShoppingListActions.AddIngredients(this.recipe.ingredients));
  }

  onEditRecipe(){
  	//this.router.navigate(['edit'], {relativeTo:this.route}); that works too
	  this.router.navigate(['../', this.id, 'edit'], {relativeTo:this.route});
  }

	onDeleteRecipe(){
		this.recipeService.deleteRecipe(this.id);
		this.router.navigate(['/recipes']);
	}

}
