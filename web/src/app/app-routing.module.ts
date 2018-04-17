import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from './recipes/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipesStartComponent} from './recipes/recipes-start/recipes-start.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {RecipeEditComponent} from './recipes/recipe-edit/recipe-edit.component';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {FilterExampleComponent} from './filter-example/filter-example.component';

const appRoutes: Routes = [
	{path: '', redirectTo: '/recipes', pathMatch: 'full'},
	{path: 'login', component: LoginComponent},
	{path: 'register', component: RegisterComponent},
	{path: 'recipes', component: RecipesComponent,
		children: [
			{path: '', component: RecipesStartComponent},
			{path: 'new', component: RecipeEditComponent},
			{path: ':id/edit', component: RecipeEditComponent},
			{path: ':id', component: RecipeDetailComponent},

		]
	},
	{path: 'shopping-list', component: ShoppingListComponent},
	{path: 'pipe-filter', component: FilterExampleComponent},
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})
export class AppRoutingModule
{

}