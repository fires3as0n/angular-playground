import {Component, OnDestroy, OnInit} from '@angular/core';
import {ShoppingListService} from './shopping-list.service';
import {Ingredient} from "./ingredient.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  listChangedSubscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }



  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.listChangedSubscription = this.shoppingListService.ingredientsChanged.subscribe(() => {
      this.ingredients = this.shoppingListService.getIngredients();
    })
  }

  ngOnDestroy() {
    this.listChangedSubscription.unsubscribe();
  }

  onEditItem(index) {

  }

}
