import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ErrorPageComponent } from './navigation-error/navigation-error.component';

import { SharedModule } from './../shared/shared.module';
import { AppRoutingModule } from './../app-routing.module';

import { AuthGuard } from './../auth/auth-guard.service';
import { AuthService } from './../auth/auth.service';
import { DataStorageService } from './../shared/data-storage.service';
import { RecipeService } from './../recipes/recipe.service';
import { ShoppingListService } from './../shopping-list/shopping-list.service';

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent,
        ErrorPageComponent
    ],
    imports: [
        SharedModule,
        AppRoutingModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent
    ],

    // We're not including the RecipeService in the RecipesModule because it's used by various other components / services in the app,
    // not just within the RecipesModule.
    // AuthGuard can be moved to the RecipesModule though, because it's only used there.
    providers: [
        ShoppingListService, RecipeService, DataStorageService, AuthService, AuthGuard
    ]
})
export class CoreModule {}
