import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>()

  recipes: Recipe[] = [
    new Recipe('Cheeseburger', 'Everyones favourite Cheeseburger.', 'https://d1nqx6es26drid.cloudfront.net/app/uploads/2015/04/04043431/product-cheeseburger.png'),
    new Recipe('Quarter Pounder', 'Everyones favourite Quarter Pounder.', 'https://www.mcdonalds.co.za/sites/default/files/productThumbnail/mcd-food-beef-quarter-pounder-w-cheese.png')
  ];

  constructor() { }

  ngOnInit() {
  }

	onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
