import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Egg', 1),
        new Ingredient('Milk', 0.5)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        // This is fine, but an event will get emitted for each ingredient.
        /* for (let i = 0; i < ingredients.length; i++) {
            this.addIngredient(ingredients[i]);
        }*/

        this.ingredients.push(...ingredients); // ES6 spread.
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}
