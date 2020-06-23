import {Ingredient} from "./ingredient.model";

export class Recipe {
  static _id = 0;
  public id: number;

  constructor(
    public name: string = '',
    public description: string = '',
    public imagePath: string = '',
    public ingredients: Ingredient[] = []
  ) {
    this.id = Recipe._id++;
  }
}
