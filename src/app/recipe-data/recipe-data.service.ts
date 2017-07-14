import { Injectable } from '@angular/core';
import { Recipe } from "../recipe";
import { RECIPES } from "../recipes";

@Injectable()

export class RecipeDataService {
	
	getAllRecipes() {
		let recipes: Recipe[];
		recipes = RECIPES;

		return recipes;
	}

	getRecipeById(index: number) {
		let recipe: Recipe;
		recipe = RECIPES[index];

		return recipe;
	}

	getRecipe(index: number) {
		let recipe: Recipe;
		recipe = RECIPES[index]

		return RECIPES[index];
	}

	insertRecipe(item: Recipe, img: string, desc: string) {
		item.imagePath = "/assets/uploads/" + img;
		item.description = desc;

		RECIPES.push(item);
	}

	deleteRecipe(index: number) {
		RECIPES.splice(index, 1);
	}

	updateRecipe(index: number, item: Recipe) {
		item.id = index;
		RECIPES[index] = item;
	}
}