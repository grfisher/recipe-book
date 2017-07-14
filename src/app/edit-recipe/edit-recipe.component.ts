import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeDataService } from '../recipe-data/recipe-data.service';

@Component({
  templateUrl: './edit-recipe.component.html',
  providers: [RecipeDataService]
})
export class EditRecipeComponent implements OnInit {

  private recipeId: any;
  recipes = [];
  public recipe;

  constructor(private route: ActivatedRoute, private router: Router, private _recipeDataService: RecipeDataService) { }

  ngOnInit() {
    this.recipes = this._recipeDataService.getAllRecipes();
  }

  onSelect(_recipe) {
    this.router.navigate(['/editrecipedetail', _recipe.id]);
  }

}