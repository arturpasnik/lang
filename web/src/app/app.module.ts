import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppComponent } from './app.component';
import {ShoppingListService} from './shopping-list/shopping-list.service';
import {AppRoutingModule} from './app-routing.module';
import {RecipeService} from './recipes/recipe.service';
import {AuthService} from './auth/auth.service';
import {AuthGuardService} from './auth/auth.guard.service';
import {UserService} from './shared/user.service';
import {RequestInterceptorService} from './auth/request-interceptor.service';
import {SharedModule} from './shared/shared.module';
import {ShoppingListModule} from './shopping-list/shopping-list.module';
import {AuthModule} from './auth/auth.module';
import {CoreModule} from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
    //FilterExampleComponent,
  ],
  imports: [
    BrowserModule,
	  HttpClientModule,
	  CoreModule,
	  ShoppingListModule,
	  AuthModule,
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
