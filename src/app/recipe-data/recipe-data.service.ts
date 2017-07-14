import { Injectable } from '@angular/core';
import { Recipe } from "../recipe";
import { RECIPES } from "../recipes";

@Injectable()

export class RecipeDataService {
	
	getAllRecipes() {
		let recipes: Recipe[];
		recipes = RECIPES;

		console.log(recipes);
		return recipes;
	}

	getRecipeById(index: number) {
		let recipe: Recipe;
		recipe = RECIPES[index];

		console.log("*" + recipe);
		return recipe;
	}

	getRecipe(index: number) {
		let recipe: Recipe;
		recipe = RECIPES[index]

		console.log("*" + recipe);
		return RECIPES[index];
	}

	//getRecipeById(item: Recipe) {
	//	return RECIPES.indexOf(item);
	//}

	insertRecipe(item: Recipe, img: string, desc: string) {
		item.imagePath = "/assets/uploads/" + img;
		item.description = desc;
		//alert("Insert recipe function description: " + item.description);
		RECIPES.push(item);
		//alert("URL: " + RECIPES[5].imageUrl);
	}

	deleteRecipe(index: number) {
		RECIPES.splice(index, 1);
	}

	updateRecipe(index: number, item: Recipe) {
		alert("Index: " + index);
		alert("Description: " + item.description);
		RECIPES[index] = item;
		console.log("Last one: " + RECIPES[index].description)
	}
}