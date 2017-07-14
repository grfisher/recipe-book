import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeDataService } from '../recipe-data/recipe-data.service';

@Component({
  templateUrl: './delete-recipe.component.html',
  providers: [RecipeDataService]
})
export class DeleteRecipeComponent implements OnInit {

  recipes = [];

  constructor(private router: Router, private _recipeDataService: RecipeDataService){}

  ngOnInit(){

    this.recipes = this._recipeDataService.getAllRecipes();

  }

  onSelect(recipe) {

    this.router.navigate(['/deleterecipedetail', recipe.id]);
    
  }
}