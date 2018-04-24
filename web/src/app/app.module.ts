import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {ShoppingListService} from './shopping-list/shopping-list.service';
import {AppRoutingModule} from './app-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import {RecipeService} from './recipes/recipe.service';
import { FilterExampleComponent } from './filter-example/filter-example.component';
import { FilterPipe } from './shared/pipe/filter.pipe';
import {AuthService} from './auth/auth.service';
import {AuthGuardService} from './auth/auth.guard.service';
import {UserService} from './shared/user.service';
import {RequestInterceptorService} from './auth/request-interceptor.service';
import {RecipesModule} from './recipes/recipes.module';
import {SharedModule} from './shared/shared.module';
import {ShoppingListModule} from './shopping-list/shopping-list.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
	  FilterExampleComponent,
	  FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	  HttpClientModule,
	  RecipesModule,
	  ShoppingListModule,
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
