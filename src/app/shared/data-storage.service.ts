import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';

import { AuthService } from './../auth/auth.service';
import { Recipe } from './../recipes/recipe.model';
import { RecipeService } from './../recipes/recipe.service';
import 'rxjs/Rx';

@Injectable()
export class DataStorageService {
    private recipesURL = 'https://ng-recipe-book-b5dd7.firebaseio.com/recipes.json';

    constructor(
        private httpClient: HttpClient,
        private recipeService: RecipeService,
        private authService: AuthService) {}

    storeData() {
        const isVariant1 = false;

        if (isVariant1) {
            return this.httpClient.put(this.recipesURL, this.recipeService.getRecipes(), {
                // observe: 'events'
                observe: 'body',
                // headers: new HttpHeaders().set('Authorization', 'Bearer asdftoken').append()
                // params: new HttpParams().set('auth', token).append()
            });
        } else {
            const req = new HttpRequest('PUT', this.recipesURL, this.recipeService.getRecipes(), {
                reportProgress: true // , params: new HttpParams().set('auth', token)
            });
            return this.httpClient.request(req);
        }
    }

    fetchData() {
        // If we want the full response as text, we can use options with get:
        /* this.httpClient.get(this.recipesURL + '?auth=' + token, {
            observe: 'response',
            responseType: 'text'
        }) */
        this.httpClient.get<Recipe[]>(this.recipesURL) // + '?auth=' + token)
            .map( // Transform data to make sure it has ingredients and therefore keeps the structure of the Recipe object type.
                (recipes) => {
                    for (const recipe of recipes) {
                        if (!recipe['ingredients']) {
                            recipe['ingredients'] = [];
                        }
                    }
                    return recipes;
                }
            )
            .subscribe(
                (response: Recipe[]) => {
                    console.log(response);
                    this.recipeService.setRecipes(response);
                }
            );
    }
}
