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

	insertRecipe(item: Recipe, img: string) {
		item.imagePath = "/assets/uploads/" + img;
		//alert("Insert recipe function: " + item.imageUrl);
		RECIPES.push(item);
		//alert("URL: " + RECIPES[5].imageUrl);
	}

	deleteRecipe(index: number) {
		RECIPES.splice(index, 1);
	}

	updateRecipe(index: number, item: Recipe) {
		RECIPES[index] = item;
	}
}