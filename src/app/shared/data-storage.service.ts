import { AuthService } from './../auth/auth.service';
import { Recipe } from './../recipes/recipe.model';
import { RecipeService } from './../recipes/recipe.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DataStorageService {
    private recipesURL = 'https://ng-recipe-book-b5dd7.firebaseio.com/recipes.json';

    constructor(
        private http: Http,
        private recipeService: RecipeService,
        private authService: AuthService) {}

    storeData() {
        const token = this.authService.getToken();
        return this.http.put(this.recipesURL + '?auth=' + token, this.recipeService.getRecipes());
    }

    fetchData() {
        const token = this.authService.getToken();
        this.http.get(this.recipesURL + '?auth=' + token)
            .map( // Transform data to make sure it has ingredients and therefore keeps the structure of the Recipe object type.
                (response: Response) => {
                    const data: Recipe[] = response.json();
                    for (const recipe of data) {
                        if (!recipe['ingredients']) {
                            recipe['ingredients'] = [];
                        }
                    }
                    return data;
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
