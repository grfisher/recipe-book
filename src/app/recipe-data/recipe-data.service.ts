import { Injectable } from '@angular/core';
import { Recipe } from "../recipe";
import { RECIPES } from "../recipes";

@Injectable()

export class RecipeDataService {
	getAllRecipes() {
		return RECIPES;
	}

	getRecipeById(index: number) {
		return RECIPES[index];
	}

	getRecipe(index: number) {
		return RECIPES[index];
	}

	//getRecipeById(item: Recipe) {
	//	return RECIPES.indexOf(item);
	//}

	insertRecipe(item: Recipe) {
		alert("here: " + item.id);
		RECIPES.push(item);
		alert("Id: " + RECIPES[5].id);
	}

	deleteRecipe(index: number) {
		RECIPES.splice(index, 1);
	}

	updateRecipe(index: number, item: Recipe) {
		RECIPES[index] = item;
	}
}