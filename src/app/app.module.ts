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
  bootstrap: [AppComponent]
})
export class AppModule { }
