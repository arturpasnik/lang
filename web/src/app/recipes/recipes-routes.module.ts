import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {RecipesStartComponent} from './recipes-start/recipes-start.component';
import {RecipesComponent} from './recipes.component';
import {AuthGuardService} from '../auth/auth.guard.service';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';

const recipesRoutes: Routes = [
	{path: '', component: RecipesComponent, canActivate: [AuthGuardService],
		children: [
			{path: '', component: RecipesStartComponent},
			{path: 'new', component: RecipeEditComponent},
			{path: ':id/edit', component: RecipeEditComponent},
			{path: ':id', component: RecipeDetailComponent},
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(recipesRoutes)],
	exports: [RouterModule]
})

export class RecipesRoutesModule
{

}