import {Recipe} from './recipe.model';
import {Ingredient} from "./ingredient.model";
import {EventEmitter} from "@angular/core";
import {Subject} from "rxjs";



export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  /*
  * 1. Could use direct binding and just push items to array if new one is added
  * This removes the need of emitting a change event as array is passed by reference
  * But this will break data hiding, so lets define a getter function
  *
  * Component will get the copy of an array, so if original array is changed
  * we need to inform it that something changed and it should call getter method again
  * this can be done via event emitter
   */
  public getIngredients() {
    return this.ingredients.slice();
  }
  /* Now we can either inform other components to re-get data
  * or emit a changed array right from the event emitter
   */
  //ingredientsChanged = new EventEmitter();

  /*
  * Or we can do it via Subject - an Observable
  * This is preferred way of cross-component communication in Angular
   */

  ingredientsChanged = new Subject();

  addIngredient(ingredient: Ingredient | Ingredient[]) {
    if (Array.isArray(ingredient)) {
      this.ingredients.push(...ingredient)
    }
    else {
      this.ingredients.push(ingredient);
    }
    // Old way - event emitter
    // this.ingredientsChanged.emit();

    // New way - subject
    this.ingredientsChanged.next()
  }
}
