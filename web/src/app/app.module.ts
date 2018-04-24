import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import {ShoppingListService} from './shopping-list/shopping-list.service';
import {AppRoutingModule} from './app-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import {RecipeService} from './recipes/recipe.service';
import { FilterExampleComponent } from './filter-example/filter-example.component';
import { FilterPipe } from './shared/pipe/filter.pipe';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthService} from './auth/auth.service';
import {AuthGuardService} from './auth/auth.guard.service';
import {UserService} from './shared/user.service';
import {RequestInterceptorService} from './auth/request-interceptor.service';
import {RecipesModule} from './recipes/recipes.module';
import {SharedModule} from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    LoginComponent,
    RegisterComponent,
	  FilterExampleComponent,
	  FilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
	  HttpClientModule,
	  RecipesModule,
	  SharedModule
  ],
  providers: [RecipeService, ShoppingListService, AuthService, AuthGuardService, UserService,
	  {
		  provide: HTTP_INTERCEPTORS,
		  useClass: RequestInterceptorService,
		  multi: true
	  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
