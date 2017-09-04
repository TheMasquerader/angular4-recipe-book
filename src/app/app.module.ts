import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { SharedModule } from './shared/shared.module';
// import { RecipesModule } from './recipes/recipes.module';

import { AuthGuard } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { DataStorageService } from './shared/data-storage.service';
import { RecipeService } from './recipes/recipe.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';

@NgModule({
  // We define which components pipes or directives app uses.
  declarations: [
    AppComponent
  ],
  // Which modules does this app use?
  imports: [
    BrowserModule, // Includes the CommonModule + extra features, should only be used in the AppModule.
    HttpModule,
    AuthModule,
    // RecipesModule,
    ShoppingListModule,
    AppRoutingModule,
    SharedModule,
    CoreModule
  ],
  // We're not including the RecipeService in the RecipesModule because it's used by various other components / services in the app,
  // not just within the RecipesModule.
  providers: [ShoppingListService, RecipeService, DataStorageService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
