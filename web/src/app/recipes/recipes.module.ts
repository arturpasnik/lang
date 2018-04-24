import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RecipesComponent} from './recipes.component';
import {RecipesStartComponent} from './recipes-start/recipes-start.component';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {RecipeListComponent} from './recipe-list/recipe-list.component';
import {RecipeItemComponent} from './recipe-list/recipe-item/recipe-item.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {RecipesRoutesModule} from './recipes-routes.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
	declarations:[
		RecipesComponent,
		RecipesStartComponent,
		RecipeDetailComponent,
		RecipeListComponent,
		RecipeItemComponent,
		RecipeEditComponent
	],
	imports:[
		CommonModule,
		ReactiveFormsModule,
		RecipesRoutesModule,
		SharedModule
	]
})
export class RecipesModule
{

}