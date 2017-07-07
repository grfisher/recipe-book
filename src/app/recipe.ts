import { Ingredient } from "./ingredient";

export class Recipe {
    id: number;
	name: string;
	description: string;
    ingredients: Ingredient[];
	imagePath: string;

	constructor(id: number, name: string, description: string, ingredients: Ingredient[], imagePath: string) {
        this.id = id;
		this.name = name;
		this.description = description;
        this.ingredients = ingredients;
		this.imagePath = imagePath;
	}
}